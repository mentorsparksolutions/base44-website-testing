document.addEventListener('DOMContentLoaded',()=>{
 const toggle=document.querySelector('.menu-toggle'), nav=document.querySelector('.nav-links');
 if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});}
 document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
 document.querySelectorAll('form[data-enquiry]').forEach(form=>{
   form.addEventListener('submit',async e=>{
     e.preventDefault();
     const status=form.querySelector('[data-form-status]');
     const data=Object.fromEntries(new FormData(form).entries());
     if(!form.reportValidity()) return;
     if(status) status.textContent='Sending your enquiry…';
     try{
       const response=await fetch('/api/enquiries',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(data)});
       const result=await response.json();
       if(!response.ok) throw new Error(result.error||'Unable to submit your enquiry.');
       form.reset();
       if(status) status.textContent='Thank you. Your enquiry has been submitted successfully.';
     }catch(err){
       if(status) status.textContent='The online form is not connected yet. Please email us at the company email address configured by your team.';
     }
   });
 });
});
