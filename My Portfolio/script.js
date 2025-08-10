    // small script to reveal elements on load
    document.addEventListener('DOMContentLoaded', ()=>{
      document.querySelectorAll('.reveal').forEach((el,i)=>{el.style.animationDelay=(i*80)+'ms'});
      document.getElementById('year').textContent = new Date().getFullYear();
    })