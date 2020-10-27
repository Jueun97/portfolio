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
    
    scrollView(value,'start');
    navbarMenu.classList.remove('active');


    // highligt the clicked section button
    const active = document.querySelector('.navbar__menu__item.active');
    active.classList.remove('active');
    target.classList.add('active');
    /* const items = document.querySelectorAll('.navbar__menu__item');
    items.forEach((item) => {
        if (item.dataset.value != value)
        item.classList.remove('active');
        else
        item.classList.add('active');
    }) */
}))

const toggleBtn = document.querySelector('.navbar__toggleBtn');
toggleBtn.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
/*     if (toggleBtn.classList[1] === 'active') {
        controller.remove('active');
        navbarMenu.style.display = 'none'
    }
    else {
        controller.add('active');
        navbarMenu.style.display = 'block'
    } */
})
// move to contact section
const contact = document.querySelector('.home__contact');
contact.addEventListener('click', () => {
    scrollView('#contact', 'end')

})

//handle scroll view
function scrollView(selector, position) {
    const section = document.querySelector(selector);
    section.scrollIntoView({ behavior: 'smooth', block: position });
    return 1;
}

// change the opacity of home from 1 to 0 scrolling down the screen
const home = document.querySelector('#home');
const homeHeight = home.offsetHeight;
document.addEventListener('scroll', () => {
    const height = window.scrollY;
    const homeContainer = document.querySelector('.home__cantainer');
    // 공식을 사용하여 스크롤 다운 높이에 따라 투명도 조절! (더 자연스러움)
    homeContainer.style.opacity = 1 - height / homeHeight;
})

// show up the button when scroll down
window.addEventListener('scroll', () => {
    const height = window.scrollY;
    if (height > homeHeight/2)
        arrow.classList.add('active');
    else
        arrow.classList.remove('active');
   
})
//move to the top when button clicked
const arrow = document.querySelector('.arrow');
arrow.addEventListener('click', () => {
    scrollView('#home', 'end');
})

// classify projects by category
const catagoryContainer= document.querySelector('.work__catagories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');
catagoryContainer.addEventListener('click', (event) => {
    // 첫번째 값이 없으면 두번째 값으로
    const key = event.target.dataset.key || event.target.parentNode.dataset.key;
    if (key == null)
        return;
    projectContainer.classList.add('animation');
    
    setTimeout(() => {
        projects.forEach((project) => {
            if (project.dataset.key == key || key == 'all') {
                project.classList.remove('invisible');
                
            }
            else
                project.classList.add('invisible');
        })
        projectContainer.classList.remove('animation');
    },300)
  
})

// selected button 
const catagories = document.querySelectorAll('.catagory__btn')
catagoryContainer.addEventListener('click', (event) => {
    const key = event.target.dataset.key || event.target.parentNode.dataset.key;
    if (key == null)
        return;
    
    const active = document.querySelector('.catagory__btn.active');
    active.classList.remove('active');
    const target = event.target.nodeName === 'BUTTON' ? event.target : event.target.parentNode;
    target.classList.add('active');
   /*  catagories.forEach((catagory) => {
        if (catagory.dataset.key != key)
            catagory.classList.remove('active');
        else
            catagory.classList.add('active');
   }) */
})

