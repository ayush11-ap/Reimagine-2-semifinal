import { mouseFollower } from "./utils";

export function homeAnim() {
  let tl = gsap.timeline();

  tl.to(".home-img-cont", {
    scale: 1,
    ease: "back.out(2)",
    stagger: {
      each: 0.05,
      from: "center",
    },
  }).to(".home-content", {
    opacity: 1,
    scale: 1,
    ease: "back.out(2)",
    duration: 0.5,
    onComplete: function () {
      $(".home-img-cont").tilt({
        glare: true,
        maxGlare: 0.4,
        scale: 1.2,
      });
      
      if (window.innerWidth >= 620) {
        mouseFollower();
    }

    },

  } ,"<+=0.5");

  let scrollTl = gsap.timeline();

  scrollTl.to([".home-img-cont img" ], {
    y: "-110%",
    scale: 1.2,
    opacity: 0,
    duration: 5,
    stagger: 0.08,
    onStart: function () {
      $(".home-img-cont").tilt({
        glare: false,
        maxGlare: 0,
        scale: 1,
      });
      
},
    scrollTrigger: {
      trigger: ".home",
      // markers: { startColor: "white", endColor: "white" },
      start: "8% top",
      end: "130% 15%",
      scroller: ".main",
      scrub: true,
    },
  });
}

