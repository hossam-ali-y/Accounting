using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AccountingAPI.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace AccountingAPI.Controllers
{
        [ApiController]
        [Route("[controller]")]
        public class WeatherForecastController : ControllerBase
        {
                private static readonly string[] Summaries = new[]
                {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

                private readonly ILogger<WeatherForecastController> _logger;
                private readonly AccountingDBContext _context;

                public WeatherForecastController(ILogger<WeatherForecastController> logger, AccountingDBContext context)
                {
                        _context = context;
                        _logger = logger;
                }

                [HttpGet]
                public IEnumerable<WeatherForecast> Get()
                {
                        var rng = new Random();
                        return Enumerable.Range(1, 5).Select(index => new WeatherForecast
                        {
                                Date = DateTime.Now.AddDays(index),
                                TemperatureC = rng.Next(-20, 55),
                                Summary = Summaries[rng.Next(Summaries.Length)]
                        })
                        .ToArray();
                }

                [HttpGet("accounts")]
                public async Task<IEnumerable<Account>> GetAccounts()
                {
                        return await _context.Accounts.AsNoTracking().ToListAsync();
                }
                [HttpGet("ledgers")]
                public async Task<IEnumerable<Ledger>> GetLedgers()
                {
                        return await _context.Ledgers.AsNoTracking().ToListAsync();
                }
        }
}
