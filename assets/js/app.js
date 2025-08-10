
import strains from './strains.json' assert { type: 'json' };
const featured = document.getElementById('featured');
if (featured){
  const picks = strains.slice(0,4);
  featured.innerHTML = picks.map(s => `<div class="card"><h3>${s.name}</h3><p class="small">${s.terpenes}</p><a class="btn" href="strain.html?id=${s.id}">View</a></div>`).join('');
}
