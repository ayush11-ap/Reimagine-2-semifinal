import { mouseFollower } from "./utils";

  export  function homeAnim() {
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
    onComplete: mouseFollower,
  });
}


$(".home-img-cont").tilt({
  glare: true,
  maxGlare: 0.4,
  scale: 1.2,
});

