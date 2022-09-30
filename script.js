let menu =document.getElementById('menu-icon');
let navlist = document.getElementById('myNavlist');
function onClick(){
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}
menu.addEventListener('click', onClick);


function moveCircle(e){
    let circle = document.getElementById('cursor');
    circle.style.top= e.clientY+'px';
    circle.style.left = e.clientX +'px';    
}
   
window.addEventListener('mousemove', moveCircle);



