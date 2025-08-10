
import strains from './strains.json' assert { type: 'json' };
const list = document.getElementById('catalog');
const ft = document.getElementById('filter-text');
const ty = document.getElementById('filter-type');
function render(items){ list.innerHTML = items.map(s => `<div class="card"><h2>${s.name}</h2><div class="small">${s.terpenes}</div><a class="btn" href="strain.html?id=${s.id}">View</a></div>`).join(''); }
function apply(){ const q=(ft.value||'').toLowerCase(); const t=ty.value; let items=strains; if(q) items=items.filter(s=>s.name.toLowerCase().includes(q)); if(t) items=items.filter(s=>s.type===t); render(items); }
ft?.addEventListener('input', apply); ty?.addEventListener('change', apply); apply();
