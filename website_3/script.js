const box=document.querySelector('.box');
const hr1=document.querySelector('.hr1');
const top2=document.querySelector('.top2');

box.addEventListener('mouseover',()=>{
   /*box.style.background="url(box1.jpg)";
   box.style.backgroundPosition="center";
   box.style.backgroundSize="cover";*/
   box.style.opacity="0.3";
});
box.addEventListener('mouseout',()=>{
    box.style.opacity="1";
});
const top1=document.querySelector('.top');
top1.addEventListener('click',()=>{
   
 top1.style.cursor="pointer";

 hr1.style.display="none";
 top2.style.width="100px";
 top2.style.height="100px";
 top2.style.display="block";
});
