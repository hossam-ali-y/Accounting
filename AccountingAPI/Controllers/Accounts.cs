using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AccountingAPI.Data;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace AccountingAPI.Controllers
{

        [ApiController]
        [Route("api/[controller]")]
        [EnableCors("CorsPolicy")]
        public class AccountsController : ControllerBase
        {


                private readonly ILogger<AccountsController> _logger;
                private readonly AccountingDBContext _context;

                public AccountsController(ILogger<AccountsController> logger, AccountingDBContext context)
                {
                        _context = context;
                        _logger = logger;
                }

                [HttpGet]
                public async Task<IEnumerable<Account>> GetAccounts()
                {
                        return await _context.Accounts.AsNoTracking().ToListAsync();
                }

                // GET: api/Accounts/5
                [HttpGet("{id}")]
                public async Task<ActionResult<Account>> GetAccount(int id)
                {
                        var account = await _context.Accounts.FirstOrDefaultAsync(e => e.Id == id);

                        if (account == null)
                        {
                                return NotFound();
                        }
                        if (account.ParentId > 0)
                        {
                                account.Parent = await _context.Accounts.FirstOrDefaultAsync(e => e.Id == account.ParentId);
                        }
                        return account;
                }

                // GET: api/Accounts/MasterAccounts
                [HttpGet("MasterAccounts")]
                public async Task<ActionResult<Account>> GetMasterAccounts()
                {
                        var accounts = await _context.Accounts.Where(a => a.IsMaster == true).AsNoTracking().ToListAsync();
                        foreach (var account in accounts)
                        {
                                if (account.ParentId > 0)
                                {
                                        account.Parent = await _context.Accounts.FirstOrDefaultAsync(e => e.Id == account.ParentId);
                                }
                        }
                        return Ok(accounts);
                }

                [HttpGet("NotMasterAccounts")]
                public async Task<ActionResult<Account>> GetNotMasterAccounts2()
                {
                        var accounts = await _context.Accounts.Where(e => e.IsMaster == false).ToListAsync();
                        foreach (var account in accounts)
                        {
                                account.Parent = await _context.Accounts.FirstOrDefaultAsync(e => e.Id == account.ParentId);
                        }
                        return Ok(accounts);
                }

                [HttpPut("{id}")]
                public async Task<IActionResult> PutAccount(int id, Account account)
                {

                        if (id != account.Id)
                        {
                                return BadRequest();
                        }

                        _context.Entry(account).State = EntityState.Modified;

                        try
                        {
                                await _context.SaveChangesAsync();

                                account = GetAccount(account.Id).Result.Value;
                                
                                return CreatedAtAction("GetAccount", new { id = account.Id }, account);
                        }
                        catch (DbUpdateConcurrencyException)
                        {
                                if (!AccountExists(id))
                                {
                                        return NotFound();
                                }
                                else
                                {
                                        throw;
                                }
                        }

                        // return NoContent();

                }

                [HttpPost]
                public async Task<ActionResult<Account>> Post(Account account)
                {
                        _context.Accounts.Add(account);
                        await _context.SaveChangesAsync();

                        return CreatedAtAction("GetAccount", new { id = account.Id }, account);
                        // return CreatedAtAction("GetAccount", new { id = account.Id }, account);
                }

                // DELETE: api/Ledgers/5
                [HttpDelete("{id}")]
                public async Task<ActionResult<Account>> DeleteLedger(int id)
                {
                        var account = await _context.Accounts.FindAsync(id);
                        if (account == null)
                        {
                                return NotFound();
                        }

                        _context.Accounts.Remove(account);
                        await _context.SaveChangesAsync();

                        return account;
                }

                private bool AccountExists(int id)
                {
                        return _context.Accounts.Any(e => e.Id == id);
                }
        }
}
