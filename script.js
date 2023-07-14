let element1=document.querySelector('.icons');
let element2=document.querySelector('.modal');
let element3=document.querySelector('.opener');
let element4=document.querySelector('.container');
element3.addEventListener('click',function(){
    element2.style.opacity=1;
    element4.style.opacity=0.3;
});
element1.addEventListener('click',function(){
    element2.style.opacity=0;
    element4.style.opacity=1;
});
