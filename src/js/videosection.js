 export function videoSection() {
     
   let video = document.querySelectorAll(".video")
   
   let video1 = video[0];
   let video2 = video[1];

    
     
     let tl = gsap.timeline({
         paused:true
     });

     tl
         .to(".main_video", {
        height: "100%",
        duration: 0.5,
        
    })
    .to(".video-complete", {
        height: "3rem",
        width: "3rem",
        duration: 0.4,
        opacity:1
    }, "<+=0.3")
   
   
    document.querySelector(".video-section").addEventListener("click",()=> {
        tl.play();
       video1.muted = !video1.muted;
       video2.muted = !video2.muted;
        
   })
   
   document.querySelector(".video-complete").addEventListener("click",(event)=> {
       tl.reverse(); 
       event.stopPropagation();
       video1.muted = !video1.muted;
       video2.muted = !video2.muted;
        
   })
   
 
     
     
     
     
  let scrollTl = gsap.timeline();

  scrollTl.to(".video-section video", {
   width:"100%" ,
    duration: 5,
    scrollTrigger: {
      trigger: ".video-section",
    //   markers: { startColor: "yellow", endColor: "yellow" },
      start: " 90% top ",
      end: "60% 70%",
      scroller: ".main",
        scrub: true,
      },
  });
  
}