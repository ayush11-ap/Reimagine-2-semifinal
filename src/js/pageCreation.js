//  this is section you can check for you page transition , how your page come in 



 export function pageCreation() {
    let extra1 = "+=4000" 
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
         
         
                          
    .to(".product2-section", {
        
        scale: 0.99,
        ease: "back(4).out",
            borderRadius: "5px"
})   
    
    .from(".product3-section", {
        yPercent: 100,
    }, "<+=0.2")  
         
    .to(".product3-section", {
        scale: 0.985,
        ease: "back(4).out",
                    borderRadius: "5px"
},"<+=0.2")  

    
    
.from(".refer-section", {
    yPercent:100
})
.to(".refer-section", {
    scale: 0.975,
    ease: "back(4).out",
                        borderRadius: "5px"
},"<+=0.2")  

    
    
.from(".certificate-sections", {
    xPercent:"-100"
})




.from(".footer-section ", {
    yPercent:100
})






}
