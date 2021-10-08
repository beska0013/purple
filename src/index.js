
// document.querySelector('video').playbackRate = 0.8;


gsap.registerPlugin(ScrollTrigger);

//--prevent scrollToTop on refresh--//
window.onbeforeunload = function(e) {
    sessionStorage.setItem('scrollpos', window.scrollY.toString());
};
document.addEventListener("DOMContentLoaded", function(event) {
    let scrollpos = parseInt(sessionStorage.getItem('scrollpos'))
    if (scrollpos) window.scrollTo(0, scrollpos);
    sessionStorage.removeItem('scrollpos')
});
//--prevent scrollToTop on refresh--//


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
//--add new bgColor class--//
//--gsap fade animation func--//
const fade = (el,start,end, scrub) => gsap.timeline(
    {
        scrollTrigger: {
            trigger: el,
            start: start,
            end: end,
            scrub:scrub,
        }
    })
//--gsap fade animation func--//

//--setion one gsapAnimatiom image scroll--//
const secOneTl = gsap.timeline(
    {
        scrollTrigger:{
            trigger: '.bg1',
            start:'top',
            end:'+=1500',
            scrub: 1.5,
            pin: true,
        },
    }
)
const secOne = document.querySelector('.bg1')
const circle =  document.querySelector('.circle-image')
const procentageValue = 100;
const cWidth =  (circle.clientWidth / secOne.clientWidth)* procentageValue;
const cHeight = (circle.clientHeight / secOne.clientHeight)* procentageValue;


secOneTl
    .set('header',{top:'0%'})
    .to('.circle-scroll',{
        duration:1.5,
        scale:0.1,
        opacity:0,
        ease: "power4.out"
    })
    .fromTo('.circle-image',
        {
        height: `${cHeight}%`,
        width: `${cWidth}%`,
        },
        {
            duration:3.5,
            height:'101%',
            width:'100%',
            ease: "power4.out"
        },'<')
    .to('.circle-image',{
        duration:5.5,
        clipPath:'circle(108% at 24% 74%)',
        ease: "power4.out"
    },'>-60%')
    .to('.pop-up__container',{
        duration:3.5,
        y:'0px',
        ease:'elastic.out(1,1)',
        },'>-70%')
    .fromTo('header',{top:'0%'},{top:'-100%'},'>-20%')
    .to('header',{position:'absolute'})

//--setion one gsapAnimatiom image scroll end--//

//-- section two--//
const secTwoSlider = gsap.timeline(
    {
        scrollTrigger:{
            trigger:'#secTwo',
            start: "top 100%",
            end: "+=5000",
            scrub: 2,
        }
    }
)
secTwoSlider
    .to('#firstRow ul', {x:'-1844px'})
    .to('#secondRow ul', {x: '0px'}, '<')


const secTwofadeIn = fade('#secTwo','top 80%','top -10%',1)
secTwofadeIn
    .set(['.left-circle','.right-circle'],{skewX:0,skewY:0})
    .to('.left-circle',{
        duration:2.5,
        rotation: 313,
        ease:'power1.out',
    })
    .to('.right-circle',{
        duration:2.5,
        rotation: 115,
        ease:'power1.out',
    },'<-.01')
    .to(['.bg2 .title','.bg2 .cards .card'],{
       duration:2.5,
       y:0,
       stagger:.1,
       ease:'power1.out'
    },'<-.5')


//-- section two end--//



//--section three memmory images animation--//
const secThreeHeader = gsap.timeline(
   {
    scrollTrigger:{
        trigger: '.bg3',
        start:'top 80%',
        end:'top',
        scrub: 2,
    }
})

secThreeHeader.to('.bg3 .title', {y:'0%', scale:1})

const secThree = gsap.timeline(
    {
        scrollTrigger:{
            trigger: '.bg3',
            start:'top',
            end:'+=1500',
            scrub: 3,
            pin: true,
        }
    })

secThree
    .set('.memory-img img',{
        x:'-50%',
        y:'-50%',
        scale: 0
    })
    .to('.m-img1',{
        duration: .5,
        x:'-100%',
        y: '-30%',
        scale: .9,
        ease:'power1.out',
    })
    .to('.m-img2',{
        duration:.5,
        x:'50%',
        y: '20%',
        scale:1,
        ease:'power1.out',
    },"<5%")
    .to('.m-img3',{
        duration: .5,
        x:'350%',
        y:'-80%',
        scale:1,
        ease:'power1.out',
    },"<5%")
    .to('.m-img4',{
        duration:.5,
        x:'320%',
        y:'-250%',
        scale:1,
        ease:'power1.out',
    },"<5%")
    .to('.m-img5',{
        duration:.5,
        x:'-320%',
        y:'-350%',
        scale:1,
        ease:'power1.out',
    },"<5%")
    .to('.m-img1',{
        duration: .3,
        x:'-200%',
        y: '-0%',
        scale:1,
        ease:'power1.out',
    },'>')
    .to('.m-img2',{
        duration: .3,
        x:'125%',
        y: '100%',
        scale:1.5,
        ease:'power1.out',
    },"<")
    .to('.m-img3',{
        duration: .3,
        x:'425%',
        y:'-80%',
        scale:1.1,
        ease:'power1.out',
    },'<')
    .to('.m-img4',{
        duration: .3,
        x:'425%',
        y:'-325%',
        scale:2.5,
        ease:'power1.out',
    },"<")
    .to('.m-img5',{
        duration: .3,
        x:'-380%',
        y:'-410%',
        scale:1.1,
        ease:'power1.out',
    },'<')
    .to('.m-img6',{
        duration: .5,
        x:'-140%',
        y:'0%',
        scale:.5,
        ease:'power1.out',
    },'<')
    .to('.m-img7',{
        duration: .5,
        x:'-20%',
        y:'-40%',
        scale:.2,
        ease:'power1.out',
    },'<')
    .to('.m-img8',{
        duration: .5,
        x:'-145%',
        y:'-160%',
        scale:.5,
        ease:'power1.out',
    },'<')
    .to('.m-img1',{
        duration: .3,
        x:'-230%',
        y: '30%',
        scale:1.1,
        ease:'power1.out',
    },'>')
    .to('.m-img2',{
        duration: .3,
        x:'195%',
        y: '170%',
        scale:1.5,
        ease:'power1.out',
    },"<")
    .to('.m-img4',{
        duration: .3,
        x:'535%',
        y:'-435%',
        scale:2.5,
        ease:'power1.out',
    },"<")
    .to('.m-img6',{
        duration: .5,
        x:'-200%',
        y:'150%',
        scale:2,
        ease:'power1.out',
    },'<')
    .to('.m-img7',{
        duration: .5,
        x:'100%',
        y:'75%',
        scale:1.5,
        ease:'power1.out',
    },'<')
    .to('.m-img8',{
        duration: .5,
        x:'-360%',
        y:'-290%',
        scale:2,
        ease:'power1.out',
    },'<')
    .to('.m-img9',{
        duration: .5,
        x:'-120%',
        y:'-30%',
        scale:.7,
        ease:'power1.out',
    },'<')
    .to('.m-img10',{
        duration: .5,
        x:'200%',
        y:'-200%',
        scale:1,
        ease:'power1.out',
    },'<')
//--section three memmory images animation end--//

//--section four end--//
const fadeInTl = fade('.bg4','top 50%','top ',1)
fadeInTl
    .set('.shadow',{skewX: 0, skewY: 0})
    .to(['#bg4Text',
        '#bg4Text .content-title',
        '#bg4Text .content-title span',
        '#bg4Text .title','#bg4Text .title p','#bg4Text .btn'],{
        duration: 5.5,
        y:0,
        opacity:1,
        stagger:.01,
        ease:"expo.out" ,
    })
    .to('#bg4Text .content-title span', {
        width: '100%',
    },"<")
    .to('.shadow',{
    duration: 5.5,
    skewX: 0,
    skewY: 0,
    rotation: '1deg',
    },">")
    .to('.img',{
        duration:2.5,
        opacity:1,
        scale: 1,
    },">")


//--section four end--//

 //--section five--//
const fadeInTl2 =  fade('.bg5','top 80%', 'top',1)
fadeInTl2
    .to('.bg5 .quotes',{
        scale:1,
        rotation:'0deg',
        opacity: 1,
        ease:"power1.out"  ,
    })
    .to('.bg5 .slider-control',{
        scale:1,
        opacity: 1,
        ease:"power1.out" ,
    },"<")
    .to('.bg5 .testimonials-content',{
        y:0,
        opacity: 1,
  },"<")
 //--section five end--//



//--section six--//
const fadeInTl3 = fade('.bg6','top 60%', 'top -30%',1)
fadeInTl3
    .set('.bg6 .content .circle-wrapper span',{skewX:0,skewY:0,rotation:'180deg'})
    .set('.bg6 .content .header-quotes img',{skewX:0,skewY:0})
    .to('.bg6 .content .circle-wrapper img',{
        scale:1,
        clipPath:'circle(50% at 50% 50%)',
        opacity:1,
        ease: 'power4.out'
    })
    .to('.bg6 .content .circle-wrapper span',{
        skewX: 0,
        skewY: 0,
        rotation:'360deg',
        opacity:1,
        ease: 'power4.out'
        },"<")
    .to('.bg6 .content .header-quotes img',{
        skewX:0,
        skewY:0,
        opacity:1,
        rotation:'1deg',
        ease: 'power4.out',
    },"<")
    .to(['.bg6 .content .content__title','.bg6 .content .content-text'],{
        y:0,
        opacity:1,
        ease: 'power4.out',
    },"<")
//--section six end--//

//--section seven--//
const fadeInTl4 = fade('.bg7 .bg7-content','top 80%', 'top',1)

fadeInTl4
    .set(['.bg7-circle_left','.bg7-circle_right'],{skewX:0,skewY:0})
    .to(['.bg7-circle_left','.bg7-circle_right'],{
        skewX:0,
        skewY:0,
        rotation:'1deg',
    })
    .to(['.bg7-content','.bg7-content #bg7-title h2','.bg7-content #bg7-title p','.bg7-content .links'],{
        y:0,
        opacity:1,
        stagger:.01,
        ease: 'power4.out',
    },"<")


const fadeInTl5 = fade('.bg7__show','top 80%', '+=1500',2)

const bg7Height = document.querySelector('.bg7').clientHeight;
const showHeight = document.querySelector('.bg7__show').clientHeight;

const bg7SscrollValue = bg7Height - showHeight

// console.log(bg7SscrollValue);

gsap.timeline(
    {
        scrollTrigger:{
            trigger: '.bg7',
            start: `${bg7SscrollValue}`,
            end:'+=950',
            scrub: 1,
            pin: true,
        }
    }
)

fadeInTl5
    .set(['.bg7 .bg7__show .show .c-wrapper .main-c svg',
        '.bg7 .bg7__show .show .c-wrapper .main-c p'],{skewX:0, skewY:0})

    .set('.bg7__show .t-wrapper',{skewX:0, skewY:0, rotation:'-90deg'})

    .to('.bg7 .bg7__show .show .c-wrapper .main-c svg',{
        duration: 2.5,
        skewX:0,
        skewY:0,
        opacity:1,
        scale:1,
        rotation:'270deg',
        strokeDashoffset: 0,
        ease:'power4.out'
    })
    .to('.bg7 .bg7__show .show .c-wrapper .main-c p',{
        skewX:0,
        skewY:0,
        opacity:1,
        rotation:'0deg',
        ease:'power4.out'
    },"<")
    .to(['.bg7__show .title h2','.bg7__show .title p'],{
        y:0,
        stagger:.01,
        ease: 'power4.out',
    },"<")
    .to(['.bg7__show .title h2','.bg7__show .title p'],{
        opacity:1,
        ease:'power4.out',
    },">-.5")

    .to('.bg7 .bg7__show .show .c-wrapper .main-c p',{
        opacity:0,
        ease:'power4.out'})
    .to('#red-c',{y:'10%', duration: 2.5, ease:'power4.out' },'<')
    .to('#blue-c',{x:'12%',y:'-1', duration: 2.5, ease:'power4.out'},'<')
    .to('#yellow-c',{x:'-12%',y:'-1', duration: 2.5, ease:'power4.out'},'<')
    .to('.bg7__show .t-wrapper',{
        duration: 1.5,
        skewX:0,
        skewY:0,
        scale:1,
        rotation:'0deg',
        ease:'power1.out'
    },'<')
    .to('.bg7__show .t-wrapper svg g',{
        duration: 1,
        opacity:1,
        ease:'power4.out'
    },'>25%')

//--section seven end--//

//--footer--//
const fadeInTl6 = fade('footer','top 30%', 'top 10%',2)

fadeInTl6
    .to('footer .footer',{
        duration:1.5,
        width:'100%',
        opacity:1,
    })
    .to('footer .info .summary',{
        y:0,
        opacity:1
    },"<")
    .to('footer .info .contacts .footer-nav',{
        y:0,
        opacity:1
    },"<.2")
    .to('footer .info .contacts .email',{
        y:0,
        opacity:1
    },"<.2")
    .to('footer .info .contacts .subscription',{
        y:0,
        opacity:1
    },"<.2")
    .to('footer .info .contacts .subscription form',{
     width:'100%',
    },"<")
//--footer--//



