//  this is section you can check for you page transition , how your page come in 



 export function pageCreation() {
    let extra1 = "+=2000" 
    let extra2 = "+=5000" 

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".magic",
        // markers: { startColor: "white", endColor: "white" },
        start: "top top",
        end: function () {
            if (window.innerWidth <= 640) {
                return extra1
                } else {
                    
                    return extra2
            }
        } ,
        scroller: ".main",
        scrub: true,
        pin:true ,
      }
    
});

     
     tl
         
         
     .from(".product1-section", {
        yPercent: 100,
        scale: 0,
})  
  
    
     .from(".product2-section", {
        yPercent: 100,
        scale: 0,
})  
         
         
    .from(".product3-section", {
        yPercent: 100,
        scale: 0,
})  // here you can add mor options how you incoming page should be 

    
    
.from(".refer-section", {
    yPercent:100
})

    
    
.from(".certificate-sections", {
    xPercent:"-100"
})




.from(".footer-section ", {
    yPercent:100
})






}
