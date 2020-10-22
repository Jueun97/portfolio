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
   
    scrollView(value, 'center');

    // highligt the clicked section button
    const item = navbarMenu.children;
    for (let i = 0; i < item.length; i++){
        if (item[i].dataset.value != value)
            item[i].classList.remove('active');
        else
            item[i].classList.add('active');
    }

}))

// move to contact section
const contact = document.querySelector('.home__contact');
contact.addEventListener('click', () => {
    scrollView('#contact', 'end')

})

//handle scroll view
function scrollView(selector, position) {
    const section = document.querySelector(selector);
    section.scrollIntoView({ behavior: 'smooth', block: position });
}

// change the opacity of home from 1 to 0 scrolling down the screen
const homeContainer = document.querySelector('.home__cantainer');
const homeHeight = homeContainer.offsetHeight;
document.addEventListener('scroll', () => {
    const height = window.scrollY;
    // 공식을 사용하여 스크롤 다운 높이에 따라 투명도 조절! (더 자연스러움)
    homeContainer.style.opacity = 1 - height / homeHeight;
})