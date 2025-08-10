
import strains from './strains.json' assert { type: 'json' };
const list = document.getElementById('catalog');
const ft = document.getElementById('filter-text');
const ty = document.getElementById('filter-type');
function render(items){ list.innerHTML = items.map(s => `<div class="card"><h3>${s.name}</h3><p class="small">${s.terpenes}</p><a class="btn" href="strain.html?id=${s.id}">View</a></div>`).join(''); }
function apply(){ const q=(ft.value||'').toLowerCase(); const t=ty.value; let items=strains; if(q) items=items.filter(s=>s.name.toLowerCase().includes(q)); if(t) items=items.filter(s=>s.type===t); render(items); }
ft?.addEventListener('input', apply); ty?.addEventListener('change', apply); apply();
