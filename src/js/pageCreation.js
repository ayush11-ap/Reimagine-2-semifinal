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

     
function Scaled() {
    if (window.innerWidth <= 620) {
         return 1
    } else { 
        0.98
     }
}
     
     tl
         
         
                          
    .to(".product2-section", {
        
        scale: Scaled,
})   
    
    .from(".product3-section", {
        yPercent: 100,
    }, "<+=0.2")  
         
    .to(".product3-section", {
      scale:Scaled
},"<+=0.2")  

    
    
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
