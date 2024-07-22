const progressBar = document.querySelector('.progress-bar');
const counter = document.querySelector('.counter');

export function loderAnim(homeAnim) {
  let tl = gsap.timeline();

  tl.to(progressBar, {
    width: "100%",
    duration: 1.5,
    ease: "linear"
  });

  tl.to(counter, {
    innerText: 100,
    duration: 1.5,
    ease: "linear",
    snap: { innerText: 4 },
    onUpdate: function () {
      counter.innerText = Math.round(counter.innerText).toString().padStart(2, '0');
    }
  }, "<")

  .to(".text-left , .text-right", {
    y: (idx) => {
      if (idx == 0) return "-50%";
      if (idx == 1) return "50%";
    },
    duration: 0.5,
    delay: 0.4,
    ease: "power4",
  })
  .to(".text-left , .text-right", {
    x: (idx) => {
      if (idx == 0) return "45%";
      if (idx == 1) return "-55%";
    },
    duration: 0.5,
    ease: "linear",
    onComplete: function () {
      gsap.to(".width-full", {
        opacity: 0,
      });
    },
  })

  .to(
    ".left-side  , .right-side",
    {
      width: "70%",
      duration: function () {
        if (window.innerWidth < 620) {
          return 0.5;
        } else {
          return 0.8;
        }
      },
      delay: 0.06,
      ease: "power1",
      onComplete: function () {
        gsap.set(".loder-wrapper", {
          backgroundColor: "transparent",
        });

        gsap.set(".initial-name", {
          opacity: 0,
        });
      },
    },
    "<"
  )
  .to(".progess-container", {
    width: 0,
    opacity: 0
  }, "<")

  if (window.innerWidth < 620) {
    
    tl.to(
      "  .final-name ",
      {
        opacity: 1,
        duration: 0.2,
        ease: "power4",
      },
      "<+=0.2"
    );
  } else {
    tl.to(
      "  .final-name ",
      {
        opacity: 1,
        duration: 0.2,
        ease: "power4",
      },
      "<+=0.4"
    );
  }

  tl.to(
    "  .final-name ",
    {
      top: "4%",
      duration: 0.8,
      opacity: 0,
      scale:0.5 ,
      height : 0 ,
      ease: "power4",
    },
    "<+=0.4"
  )
  .to(".left-side , .right-side", {
    height:0 ,
    onComplete: function () {
      
     
      homeAnim();

    },
  },"<");
}
