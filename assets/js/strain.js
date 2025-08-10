
import strains from './strains.json' assert { type: 'json' };
const el = document.getElementById('strain');
const params = new URLSearchParams(location.search);
const s = strains.find(x => String(x.id) === params.get('id')) || strains[0];
el.innerHTML = `<h1>${s.name}</h1><div class="card"><table>
<tr><td>Type</td><td>${s.type}</td></tr>
<tr><td>THC%</td><td>${s.thc}</td></tr>
<tr><td>CBD%</td><td>${s.cbd}</td></tr>
<tr><td>Flowering</td><td>${s.flowering}</td></tr>
<tr><td>Vigor</td><td>${s.vigor}</td></tr>
<tr><td>Yield</td><td>${s.yield}</td></tr>
<tr><td>Terpenes</td><td>${s.terpenes}</td></tr>
<tr><td>MOQ</td><td>${s.moq}</td></tr>
<tr><td>Lead Time</td><td>${s.lead}</td></tr>
<tr><td>Compliance</td><td>${s.compliance}</td></tr>
</table><p class="small">Add to quote from the catalog or go to the Request a Quote page.</p></div>`;
