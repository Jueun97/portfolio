//js 사용 시 필수적으로 선언해줘야 함! 우리의 미친 짓을 사전의 방지 가능
'use strict'
const introduce = {
    "ENG": {
        title: 'Hello, this is Jueun',
        description: 'a growing rookie develper, <br> always trying to keep thinking about "WHY"',
        about: 'I was able to experience front-end, back-end and app development through various projects. <br> My main field is the front end, but I am interested in the back end as well. <br> So i have been studying both of them together.',
        educaiton: {
            title: 'Haseo Univ / Aerospace Software Engineering',
            information: '(4.29/4.50) 2016.03-2021.02'
        },
        certificate: [
            {
                title: 'Engineer Information Processing -HRDK',
                date: '2020.08.28',
                icon: 'certificate'
            }, {
                title: 'SQLD (sql developer) -Kdata',
                date: '2021.06.25',
                icon: 'database'
            }, {
                title: 'TOEIC (960) -ETS',
                date: '2021.07.25',
                icon: 'globe'
            }
            
        ]
    },
    "KOR": {
        title: '안녕하세요,<br/> 생각하는 꿈나무 개발자 <br/>장주은입니다.',
        description : '',
        about: '저는 여러 프로젝트를 통해 프론트엔드와 백엔드 그리고 앱개발까지 다양하게 경험할 수 있었습니다. <br> 저의 주력 분야는 프론트엔드이지만 백엔드에도 관심을 갖고 계속해서 함께 공부하고 있습니다.',
        educaiton: {
            title: '한서대학교 / 항공소프트웨어공학과 (4.29/4.50)',
            information : '2016.03-2021.02'
        },
        certificate: [
            {
                title : '정보처리기사 -한국산업인력공단',
                date: '2020.08.28',
                icon: 'certificate'
            }, {
                title: 'sqld (sql 개발자) -한국데이터산업진흥원',
                date: '2021.06.25',
                icon: 'database'
            },
            {
                title: 'TOEIC (960) -ETS',
                date: '2021.07.25',
                icon: 'globe'
            }
        ]
    }
}
const projectsData = [
    {gitUrl:'https://github.com/Jueun97/delivery-service',image:'./images/projects/delivery.jpg',title:'delivery-service',front:'HTML,CSS,React-Native',back:'Node.js, Express, MySQL',key:'mobile'},
    {gitUrl:'https://github.com/Jueun97/moviemory',image:'./images/projects/moviemory.gif',title:'moviemory',front:'HTML,CSS,JS',back:'Node.js,Express',key:'back'},
    {gitUrl:'https://github.com/Jueun97/25degree',image:'./images/projects/25degree.gif',title:'25degree',front:'HTML,PostCSS,JS,React',back:'Node.js, Express, MySQL',key:'back'},
    {gitUrl:'https://github.com/Jueun97/qr_attendance_check',image:'./images/projects/attendance.png',title:'qr_attendance_check',front:'HTML,CSS,JS',back:'Node.js, Express, socket, MySQL',key:'back'},
    {gitUrl:'https://github.com/Jueun97/image_editor',image:'./images/projects/editor.png',title:'image_editor',front:'HTML,CSS,JS',back:'',key:'front'},
    {gitUrl:'https://github.com/Jueun97/kpop-design-megazine',image:'./images/projects/kdm.gif',title:'kpop-design-megazine',front:'HTML,CSS,JS',back:'',key:'front'}
]
window.addEventListener('load', () => {
    setProjects();
})
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

    if (value === '#language') {
        const language = target.innerHTML;
        setIntro(introduce[language]);
        if (language === "ENG")
            target.innerHTML = "KOR";
        else
            target.innerHTML = "ENG";
    } else {
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
    }
}))


function setIntro(data) {
    const title = document.querySelector('.home__title');
    const description = document.querySelector('.home__description');
    const about = document.querySelector('.about__description');
    const educaiton = document.querySelector('.description__title');
    const educaitonInfo = document.querySelector('.description__period');
    const container = document.querySelector('.about__certificate');

    title.innerHTML = data.title;
    description.innerHTML = data.description;
    about.innerHTML = data.about;
    educaiton.innerHTML = data.educaiton.title;
    educaitonInfo.innerHTML = data.educaiton.information;
    container.innerHTML = '<h3 class="information-title">Certificate</h3>';
    data.certificate.map(certificate => {
        const container = document.querySelector('.about__certificate');

        const item = document.createElement('div');
        item.setAttribute('class', 'job');
        item.innerHTML = `
        <div class="job__logo">
            <i class="fas fa-${certificate.icon}"></i>
        </div>
        <div class="job__description">
            <p class="description__title">${certificate.title}</p>
            <p class="description__period">${certificate.date}</p>
        </div>
    `

        container.append(item);
    })
    
}
function setProjects() {
    projectsData.map(project => {
        const container = document.querySelector('.work__projects');
        const box = document.createElement('div');
        box.setAttribute('class', 'project');
        box.setAttribute('data-key', project.key);
        const element = `
        <a href=${project.gitUrl}>
        <img src=${project.image} alt=${project.title} class="project__img" >
        <div class="project__description">
            <h2>${project.title}</h2>
            <h3>---front-end---</h3>
            <span>${project.front}</span>
            ${project.back && ` <h3>---back-end---</h3>
            <span>${project.back}</span>` }
           
        </div>
        </a>`;
        box.innerHTML = element;

        container.append(box);

    })
  

}
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
const catagoryContainer = document.querySelector('.work__catagories');
const projectContainer = document.querySelector('.work__projects');
catagoryContainer.addEventListener('click', (event) => {
    const projects = document.querySelectorAll('.project');
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
    }, 300)
  
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

