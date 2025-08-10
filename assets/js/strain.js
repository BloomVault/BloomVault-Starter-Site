
import strains from './strains.json' assert { type: 'json' };
const el = document.getElementById('strain');
const params = new URLSearchParams(location.search);
const s = strains.find(x => String(x.id) === params.get('id')) || strains[0];
el.innerHTML = `
  <h1>${s.name}</h1>
  <div class="card">
    <table class="table">
      <tr><th>Type</th><td>${s.type}</td></tr>
      <tr><th>THC%</th><td>${s.thc}</td></tr>
      <tr><th>CBD%</th><td>${s.cbd}</td></tr>
      <tr><th>Flowering</th><td>${s.flowering}</td></tr>
      <tr><th>Vigor</th><td>${s.vigor}</td></tr>
      <tr><th>Yield</th><td>${s.yield}</td></tr>
      <tr><th>Terpenes</th><td>${s.terpenes}</td></tr>
      <tr><th>MOQ</th><td>${s.moq}</td></tr>
      <tr><th>Lead Time</th><td>${s.lead}</td></tr>
      <tr><th>Compliance</th><td>${s.compliance}</td></tr>
    </table>
  </div>
`;
