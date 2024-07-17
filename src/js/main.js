// Js Files 
import { mouseFollower } from './utils'


// Css Files ;
import '../css/utils.css'


mouseFollower();


gsap.from(".box", {
    x: "-800" ,
    duration: 1,
    // ease: "back(3)",
    scrollTrigger: {
        start: "top 40%",
        end: "50% 50%",
        markers: true,
        trigger: ".page2",
        // scrub:true
        toggleActions:"restart none none reverse"
    }
    
})