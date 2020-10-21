//js 사용 시 필수적으로 선언해줘야 함! 우리의 미친 짓을 사전의 방지 가능
'use strict'

// change navbar color according to its height
window.addEventListener('scroll', e => {
    //e.path[1].scrollY =  window.scrollY
    const scrollY = window.scrollY;
    const navbar = document.querySelector('#navbar');
    const navbarHeight = navbar.offsetHeight;

    if (scrollY > navbarHeight)
        navbar.classList.add('navbar--dark');
    else
        navbar.classList.remove('navbar--dark');
    
    
})

// move to clicked section
const navbarMenu = document.querySelector('.navbar__menu'); 
navbarMenu.addEventListener('click', (event => {
    const target = event.target;
    const value = target.dataset.value; 
    if (value == null)
        return;
   
    const section = document.querySelector(value);
    section.scrollIntoView({ behavior: "smooth", block: "center" });
    // highligt the clicked section button
    const item = navbarMenu.children;
    for (let i = 0; i < item.length; i++){
        if (item[i].dataset.value != value)
            item[i].classList.remove('active');
        else
            item[i].classList.add('active');
    }

}))


