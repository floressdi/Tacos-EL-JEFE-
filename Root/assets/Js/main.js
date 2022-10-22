//=======> nav and menu
const  menu = document.getElementById("menu"),
    btnMenu=document.querySelector("#btn-menu"),
    icon = document.querySelector('.icon');

btnMenu.addEventListener('click', ()=>{   //Mostrar menu
        menu.classList.toggle('show-menu');
        icon.classList.toggle('uil-apps'); //Cambio de iconos 
        icon.classList.toggle('uil-times');
        document.body.classList.toggle('no-scroll'); //Desactiva el sroll al dar click

        if(menu.classList.contains('show-menu')){ //Pregunta si tiene esa clase 
            subm.textContent="MENU ";
        }else{
            subm.textContent="TACOS EL JEFE";
        }
})

window.addEventListener("scroll",function(){
    nav.classList.toggle("navbg",window.scrollY>0);
    menu.classList.toggle('menubg',this.window.scrollY>0);
})

