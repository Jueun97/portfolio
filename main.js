//js 사용 시 필수적으로 선언해줘야 함! 우리의 미친 짓을 사전의 방지 가능
'use strict'
window.addEventListener('scroll', e => {
    //e.path[1].scrollY =  window.scrollY
    const scrollY = window.scrollY;
    const navbar = document.querySelector('#navbar');
    const navbarHeight = navbar.offsetHeight;
    console.log(navbarHeight);

    if (scrollY > navbarHeight)
        navbar.classList.add('navbar--dark');
    else
        navbar.classList.remove('navbar--dark');
    
    
})