 export 
 function mouseFollower() {
   let circle = document.querySelector(".circle");
   document.addEventListener("mousemove", (e) => {
     circle.style.opacity = 1;
     circle.style.top = e.clientY + "px";
     circle.style.left = e.clientX + "px";
   });
 }
 
 