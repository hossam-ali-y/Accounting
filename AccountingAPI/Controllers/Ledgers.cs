using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AccountingAPI.Data;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage;
using Microsoft.Extensions.Logging;

namespace AccountingAPI.Controllers
{

        [ApiController]
        [Route("api/[controller]")]
        [EnableCors("CorsPolicy")]
        public class LedgersController : ControllerBase
        {

                private readonly ILogger<AccountsController> _logger;
                private readonly AccountingDBContext _context;

                public LedgersController(ILogger<AccountsController> logger, AccountingDBContext context)
                {
                        _context = context;
                        _logger = logger;
                }

                [HttpGet]
                public async Task<IEnumerable<Ledger>> GetLedgers()
                {
                        return await _context.Ledgers.AsNoTracking().ToListAsync();
                }
                // GET: api/Ledgers/5
                [HttpGet("{id}")]
                public async Task<ActionResult<Ledger>> GetLedger(int id)
                {
                        var ledger = await _context.Ledgers.Include(e => e.Account).FirstAsync(e => e.Id == id);


                        if (ledger == null)
                        {
                                return NotFound();
                        }

                        return ledger;
                }

                // GET: api/Ledgers
                // [AllowAnonymous]
                [HttpGet("Map")]
                public async Task<ActionResult<IEnumerable<Ledger>>> GetLedgersMap()
                {
                        return await _context.Ledgers.Include(e => e.Account).AsNoTracking().ToListAsync();
                }

                [HttpGet("CreditLedger")]
                public async Task<ActionResult<IEnumerable<Ledger>>> GetAllCreditLedger()
                {
                        return await _context.Ledgers.Include(e => e.Account).Where(e => e.Type == true).AsNoTracking().ToListAsync();
                }

                [HttpGet("DebitLedger")]
                public async Task<ActionResult<IEnumerable<Ledger>>> GetAllDebitLedger()
                {
                        return await _context.Ledgers.Include(e => e.Account).Where(e => e.Type == false).AsNoTracking().ToListAsync();
                }
                [HttpPut("put/{id}")]
                public async Task<ActionResult<Ledger>> PutLedger(int id, Ledger ledger)
                {


                        ledger.Account = null;
                        // ledger.Year = null;
                        ledger.Description += " " + DateTime.Now;
                        _context.Ledgers.Update(ledger);

                        // _context.Entry(ledger).State = EntityState.Modified;

                        try
                        {
                                await _context.SaveChangesAsync();

                                ledger = GetLedger(ledger.Id).Result.Value;


                                return CreatedAtAction("GetLedger", new { id = ledger.Id }, ledger);
                        }
                        catch (DbUpdateConcurrencyException)
                        {
                                if (!LedgerExists(id))
                                {
                                        return NotFound();
                                }
                                else
                                {
                                        throw;
                                }
                        }


                }
                [HttpPost("post")]
                public async Task<ActionResult<Ledger>> PostLedger(Ledger ledger)
                {
                        using (IDbContextTransaction transaction = _context.Database.BeginTransaction())
                        {
                                try
                                {
                                        ledger.Account = null;
                                        // ledger.YearId = GetCurrentYearId();

                                        _context.Ledgers.Add(ledger);
                                        await _context.SaveChangesAsync();

                                        await transaction.CommitAsync();

                                        ledger = await _context.Ledgers.Include(e => e.Account).FirstAsync(e => e.Id == ledger.Id);
                                        // ledger.CreateDate =   DateTime.Parse(ledger.CreateDate.ToString(), System.Globalization.CultureInfo.InvariantCulture);
                                        // new DateTime(ledger.CreateDate).ToShortTimeString();
                                        return CreatedAtAction("GetLedger", new { id = ledger.Id }, ledger);
                                }
                                catch (Exception)
                                {

                                        await transaction.RollbackAsync();
                                        throw;
                                        //     return NotFound();
                                }

                        }
                }

                // DELETE: api/Ledgers/5
                [HttpDelete("{id}")]
                public async Task<ActionResult<Ledger>> DeleteLedger(int id)
                {
                        var ledger = await _context.Ledgers.FindAsync(id);
                        if (ledger == null)
                        {
                                return NotFound();
                        }

                        _context.Ledgers.Remove(ledger);
                        await _context.SaveChangesAsync();

                        return ledger;
                }

                private bool LedgerExists(int id)
                {
                        return _context.Ledgers.Any(e => e.Id == id);
                }

                // private int GetCurrentYearId(){
                //         return
                // }

        }
}
