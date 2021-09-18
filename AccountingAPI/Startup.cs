using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AccountingAPI.Data;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Formatters;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.OpenApi.Models;
using Newtonsoft.Json.Serialization;

namespace AccountingAPI
{
        public class Startup
        {
                public Startup(IConfiguration configuration)
                {
                        Configuration = configuration;
                }

                public IConfiguration Configuration { get; }

                // This method gets called by the runtime. Use this method to add services to the container.
                public void ConfigureServices(IServiceCollection services)
                {

                        services.AddControllers();

                        services.AddDbContext<AccountingDBContext>(options =>
                        {
                                options.UseSqlServer(Configuration.GetConnectionString("AccountingDB"));
                        });

                        services.AddControllers(     // options =>  options.RespectBrowserAcceptHeader = true // false by default
                     ).AddNewtonsoftJson(options =>
                     {
                             var reslver = options.SerializerSettings.ContractResolver;
                             if (reslver != null)
                                     (reslver as DefaultContractResolver).NamingStrategy = null;
                     });

                        services.AddControllersWithViews(options =>
                                                      options.InputFormatters.Insert(0, GetJsonPatchInputFormatter())
                                        )
                                        .AddNewtonsoftJson(options =>
                                        options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore
                                    );

                        services.AddCors(options => options.AddPolicy("CorsPolicy", builder =>
                        {
                                builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
                        }));

                        services.AddSwaggerGen(c =>
                        {
                                c.SwaggerDoc("v1", new OpenApiInfo { Title = "AccountingAPI", Version = "v1" });
                        });
                }

                private static NewtonsoftJsonPatchInputFormatter GetJsonPatchInputFormatter()
                {
                        var builder = new ServiceCollection()
                            .AddLogging()
                            .AddMvc()
                            .AddNewtonsoftJson()
                            .Services.BuildServiceProvider();

                        return builder
                            .GetRequiredService<IOptions<MvcOptions>>()
                            .Value
                            .InputFormatters
                            .OfType<NewtonsoftJsonPatchInputFormatter>()
                            .First();
                }

                // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
                public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
                {
                        if (env.IsDevelopment())
                        {
                                app.UseDeveloperExceptionPage();
                                app.UseSwagger();
                                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "AccountingAPI v1"));
                        }
                        // app.UseCors();
                        app.UseHttpsRedirection();

                        app.UseRouting();
                        app.UseCors("CorsPolicy");
                        app.UseAuthorization();

                        app.UseEndpoints(endpoints =>
                        {
                                endpoints.MapControllers();
                        });
                }
        }
}
