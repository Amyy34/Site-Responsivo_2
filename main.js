function abrirFechar(){
  let img=document.querySelector('.icon-setinha');
  let imgM=document.getElementById('icon-setinha')
  
  if(img.classList.contains('open')){
    img.classList.remove('open');
    img.src="/icon-arrow-down.svg";
    imgM.src="/icon-arrow-down.svg";
    
  }
  else{
    img.classList.add('open');
    img.src="/icon-arrow-up.svg";
    imgM.src="/icon-arrow-up.svg";
  }
  }
  function abrirFechar2(){
  let img2=document.querySelector('.icon-setinha-2');
  let imgM3 = document.getElementById('icon-setinha-2')
  
  if(img2.classList.contains('open')){
    img2.classList.remove('open');
    img2.src="/icon-arrow-down.svg";
    imgM3.src="/icon-arrow-down.svg";
    
  }
  else{
    img2.classList.add('open');
    img2.src="/icon-arrow-up.svg";
    imgM3.src="/icon-arrow-up.svg";
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
  