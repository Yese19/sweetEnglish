/*Navigation Menu*/
let bar_icon = document.querySelector('.bar-icon');
let nav = document.querySelector('.nav');
let enlaces = document.querySelector('.container-list');
let contador = true;

bar_icon.addEventListener('click',function(){
    this.classList.toggle('active');

    if(contador == true){
        enlaces.style.width ='50%';
        enlaces.overflow ='hidden';
        enlaces.style.transition ='0.5s';

        nav.style.background='#303a52';
        nav.style.transition='0.5s';

        contador = false;
    }else{
        contador = true;
        enlaces.style.width ='0%';
        enlaces.overflow ='hidden';
        enlaces.style.transition ='0.5s';

        nav.style.background='transparent';
        nav.style.transition='0.5s';
    }

});