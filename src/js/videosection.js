 export function videoSection() {
     
     let video = document.querySelector("#video")
      
     console.log(videoSection.muted)
     
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
    },"<")
    document.querySelector(".video-section").addEventListener("click",()=> {
        tl.play();
       video.muted = !video.muted;
        
   })
   
   document.querySelector(".video-complete").addEventListener("click",(event)=> {
       tl.reverse(); 
       event.stopPropagation();
       video.muted = !video.muted;
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