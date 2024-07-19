export function mouseFollower() {
  let circle = document.querySelector(".circle");
  let circle_video =document.querySelector(".circle-video")

  document.addEventListener("mousemove", (e) => {

    gsap.to([circle_video, circle], {
      top: e.clientY,
      left: e.clientX,
      
    })
  });


  document.querySelector(".video-section").addEventListener("mouseenter", (e) => {
    

    gsap.to([circle_video ,circle], {
      opacity: function (idx) {
        if (idx == 0) { return 1 }
        else{ return 0 }
        
      },
      scale: function (idx) {
        if (idx == 0) { return 1 }
        else{ return 0 }
        
      },
    })
  })

  document.querySelector(".video-section").addEventListener("mouseleave", (e) => {
    

    gsap.to([circle_video ,circle], {
      opacity: function (idx) {
        if (idx == 0) { return 0 }
        else{ return 1 }
        
      },
      scale:function (idx) {
        if (idx == 0) { return 0 }
        else{ return 1 }
        
      },
    })
  })


  


}



export function locomotiveJs() {
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });

  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}

