
function encode(data){ return Object.keys(data).map(k=>encodeURIComponent(k)+'='+encodeURIComponent(data[k])).join('&'); }
document.getElementById('contact-form').addEventListener('submit', async (e)=>{
 e.preventDefault();
 const fd = new FormData(e.target);
 const data = Object.fromEntries(fd.entries());
 try{
  const r = await fetch('/', { method:'POST', headers:{'Content-Type':'application/x-www-form-urlencoded'}, body: encode({'form-name':'contact', ...data}) });
  if(r.ok){ document.getElementById('contact-result').style.display='block'; document.getElementById('contact-result').textContent='Thanks! We will get back to you shortly.'; e.target.reset(); return; }
 }catch(_){}
 const body=`From: ${data.name}%0D%0AEmail: ${data.email}%0D%0A%0D%0A${data.message}`;
 window.location.href=`mailto:BloomVaultFarms@gmail.com?subject=${encodeURIComponent('Website contact')}&body=${body}`;
 document.getElementById('contact-result').style.display='block';
 document.getElementById('contact-result').textContent='Thanks! If your email client didn\'t open, email BloomVaultFarms@gmail.com.';
});
