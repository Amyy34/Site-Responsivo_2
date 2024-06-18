function abrirFechar(){
  let img =document.querySelector('.icon-setinha');
  let imgM=document.getElementById('icon-setinha')
  
  if(img.classList.contains('open')){
    img.classList.remove('open');
    img.src="/seta-baixo.png";
    imgM.src="/seta-baixo.png";
    
  }
  else{
    img.classList.add('open');
    img.src="/seta-cima.png";
    imgM.src="/seta-cima.png";
  }
  }
  function abrirFechar2(){
  let img2=document.querySelector('.icon-setinha-2');
  let imgM3 = document.getElementById('icon-setinha-2')
  
  if(img2.classList.contains('open')){
    img2.classList.remove('open');
    img2.src="/seta-baixo.png";
    imgM3.src="/seta-baixo.png";
    
  }
  else{
    img2.classList.add('open');
    img2.src="/seta-cima.png";
    imgM3.src="/seta-cima.png";
  }
  }
  function menu(){
    let icon=document.querySelector('.nav');
  
    if(icon.classList.contains('open')){
    icon.classList.remove('open');
    
  }
  else{
    icon.classList.add('open');
  }
  }
  