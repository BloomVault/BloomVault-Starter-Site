
import strains from './strains.json' assert { type: 'json' };
const itemsEl = document.getElementById('order-items');
const result = document.getElementById('quote-result');
itemsEl.innerHTML = strains.map(s => `<div class="card"><h3>${s.name}</h3><div class="form-row"><input class="input" type="number" min="0" step="1" placeholder="Qty" id="qty-${s.id}"><input class="input" placeholder="Notes (optional)" id="note-${s.id}"></div></div>`).join('');
function encode(data){ return Object.keys(data).map(k=>encodeURIComponent(k)+'='+encodeURIComponent(data[k])).join('&'); }
document.getElementById('quote-form').addEventListener('submit', async (e)=>{
 e.preventDefault();
 const fd = new FormData(e.target);
 const data = Object.fromEntries(fd.entries());
 const lines = strains.map(s=>{ const q=Number(document.getElementById('qty-'+s.id).value||0); if(!q) return null; return {id:s.id,name:s.name,qty:q,note:document.getElementById('note-'+s.id).value||''}; }).filter(Boolean);
 if(!lines.length){ alert('Please enter at least one quantity.'); return; }
 if((data.state||'').toUpperCase()!=='VA'){ alert('We currently serve Virginia only.'); return; }
 const quoteId='BV-'+Date.now();
 try{
  const r = await fetch('/', { method:'POST', headers:{'Content-Type':'application/x-www-form-urlencoded'}, body: encode({'form-name':'quote', quoteId, ...data, lines: JSON.stringify(lines)}) });
  if(r.ok){ result.style.display='block'; result.textContent='Thanks! Your quote request was submitted. Quote ID: '+quoteId; e.target.reset(); window.scrollTo({top:0,behavior:'smooth'}); return; }
 }catch(_){}
 const body=`Quote ID: ${quoteId}%0D%0AEmail: ${data.email}%0D%0ALines:%0D%0A`+lines.map(l=>`- ${l.name}: ${l.qty}`).join('%0D%0A');
 window.location.href=`mailto:BloomVaultFarms@gmail.com?subject=${encodeURIComponent('Quote request '+quoteId)}&body=${body}`;
 result.style.display='block'; result.textContent='Your email client should open with a draft. If not, email BloomVaultFarms@gmail.com with your details.';
});
