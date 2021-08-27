// document force scrollToTop on reload
history.scrollRestoration ? history.scrollRestoration = 'manual':
    window.onbeforeunload =  ()=> window.scrollTo(0, 0);

//--mob-menu animation--//

const btnMobMenu = document.getElementById('mob-menu');
const navBar = document.getElementById('nav');

btnMobMenu.addEventListener('click', ()=>{
   toggleClass(btnMobMenu,'btn-close-mob_menu');
   toggleClass(navBar,'nav-bar_mob-open');
})

//--add new  class--//
function toggleClass(el,elStyle) {
    el.classList.toggle(elStyle)
}
function addleClass(el,elStyle) {
    el.classList.add(elStyle)
}
//--add new bgColor class--//

//--setion one image scroll--//
const scrollDownCircle = document.querySelector('.circle-scroll');
const secOne = document.querySelector('.bg1');
const headerTag = document.querySelector('header');
const img = document.getElementById('secOneImg');
const secOnePopUp = document.getElementById('secOnePopUp')
let size = 0;
const mainTag = document.getElementById('mainTag')
let windowWidth = Math.max(
    document.body.scrollWidth, document.documentElement.scrollWidth,
    document.body.offsetWidth, document.documentElement.offsetWidth,
    document.body.clientWidth, document.documentElement.clientWidth
);
let imgWidth = Math.max(
    img.scrollWidth, img.scrollWidth,
    img.offsetWidth, img.offsetWidth,
    img.clientWidth, img.clientWidth
);
let secOneHeight = Math.max(
    secOne.scrollHeight, secOne.scrollHeight,
    secOne.offsetHeight, secOne.offsetHeight,
    secOne.clientHeight, secOne.clientHeight
);


const imgContainerVw = (imgWidth/windowWidth) * 100;
const secOneVh = (secOneHeight/windowWidth) * 100;
const windoVW = (windowWidth/windowWidth)*100

function imgOnScroll(){
    size++
    let imgCurrentSize = imgContainerVw + size
    scrollDownCircle.classList.add('scrollDown-fadeOut')

    img.style.transition ='all .5s ease-in-out'
    img.style.height =`${imgCurrentSize}` + 'vw'
    img.style.width =  `${imgCurrentSize}` + 'vw'

    if(imgCurrentSize >= secOneVh){
        img.style.borderRadius ='0% 50% 50% 0%';
        img.style.transform = 'translate(0, 0) scale(1.1)'
    }

    if(imgCurrentSize >= windoVW){
        img.style.height = `${secOneHeight }`+'px'
        img.style.transform = 'translate(0, 0) scale(1.1)'
        img.style.width ='100vw'
        img.style.borderRadius ='0';
        // window.scrollTo(0, 0);
        document.body.classList.remove('body-height');

        window.removeEventListener('scroll',imgOnScroll)
        secOnereset(1000,100)
    }

    if(windowWidth >= 1920 && imgCurrentSize > 78 ){
        img.style.borderRadius ='0';
        img.style.width ='100vw'
        img.style.height = `${secOneHeight }`+'px'

    }
}

window.addEventListener('scroll',imgOnScroll)
function secOnereset(time1,time2){
    setTimeout(()=> {
        addleClass(secOnePopUp,'pop-up_top')
        window.scrollTo(0, 0);
        setTimeout(()=>{
            headerTag.style.position = 'absolute'
            mainTag.classList.remove('el-fixed');
        },time1)
    },time2)
}

//--setion one image scroll--//
