



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

//--setion one gsapAnimatiom image scroll--//

const timeline = gsap.timeline(
    {
        // default:{duration: 10},
        smoothChildTiming:true,
        scrollTrigger:{
            trigger: '.bg1',
            start:'top',
            end:'bottom',
            scrub: true,
            pin: true,
            animation: 'tween',
            smoothChildTiming: true
        }
    }
)

timeline
    .to('.circle-scroll',{
        scale:0.5,
        opacity:0
    },0.1)
    .to('.circle-image',{
        duration: 2.5,
        height:'100%',
        width:'100%'
    })
    .to('.circle-image',{
        clipPath:' circle(80% at 31% 74%)',
        width:'100%'
    })
    .to('.circle-image',{
        clipPath:' circle(100% at 50% 74%)',
    })
    .to('.pop-up__container',{
        y:-100,
        ease:'bounce.out',
        })
    .to('.pop-up__container',{
        y:0,
        ease:'bounce.out',
    })
    .to('header',{
        top:'-94px'
    }, '+=1')



//--setion one gsapAnimatiom image scroll--//
