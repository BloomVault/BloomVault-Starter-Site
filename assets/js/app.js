
import strains from './strains.json' assert { type: 'json' };
const el = document.getElementById('featured');
if(el){
  el.innerHTML = strains.slice(0,4).map(s => `
    <div class="card"><h2>${s.name}</h2>
    <div class="small">${s.terpenes}</div>
    <a class="btn" href="strain.html?id=${s.id}">View</a></div>`
  ).join('');
}
