// Estrellas suaves en fondo
(function(){
  const o = document.createElement('div');
  o.className = 'ornaments';
  o.style.cssText = 'position:fixed;inset:0;pointer-events:none;z-index:-1';
  document.body.appendChild(o);
  for(let i=0;i<120;i++){
    const s=document.createElement('div');
    s.style.cssText='position:absolute;width:2px;height:2px;background:rgba(255,255,255,.9);border-radius:50%;box-shadow:0 0 6px #fff';
    s.style.left=Math.random()*100+'vw';
    s.style.top=Math.random()*100+'vh';
    s.style.opacity=0.6+Math.random()*0.4;
    s.style.transform=`scale(${0.8+Math.random()*1.6})`;
    o.appendChild(s);
    setInterval(()=>{ s.style.opacity=0.4+Math.random()*0.6; }, 1200+Math.random()*1600);
  }
})();

