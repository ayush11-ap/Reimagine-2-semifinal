import { DewBrownData } from "../data/dewbrown.js"


let data = DewBrownData;


 export function dewAnim() {
  


let baap=document.querySelector(".upperdes")

let mobileImg=document.querySelector(".mobileimg")
let best_img=document.querySelector(".best-img img")

let images = document.querySelectorAll(".images1");

function renderdata(index) {
    let individualdata = data[index];
    let splitdata = individualdata.specs.split(",");

    let text1 = "";
    splitdata.forEach((data) => {
        text1 += `<div><i class="ri-check-line"></i>${data}</div>`;
    });

    let text = `<div class="upperdes flex flex-col gap-1">
                <div class="name overflow-hidden h-30 w-full text-3xl font-bold flex justify-between p-2 sm:text-6xl">

                    <h1 class="headingname">${individualdata.name}</h1>
                    <h1 class="headingname text-slate-400 text-xl sm:text-4xl">${individualdata.price}</h1>

                </div>
                
                <div class="rating text-xl  w-fit h-fit">
                  <i class="ri-star-fill sm:hidden"></i><div class="hidden sm:inline-block ">
                      <i class="ri-star-fill"></i>
                      <i class="ri-star-fill"></i>
                      <i class="ri-star-fill"></i>
                      <i class="ri-star-fill"></i>
                      <i class="ri-star-fill"></i>
                    </div> ${individualdata.rating}
                </div>
                
                <div class="productspecs hidden sm:flex h-16 w-full items-center justify-between text-xl font-light">
                  ${text1}
                </div>
                
            
                <h1 class=" font-medium text-xl sm:text-2xl ">Product Details</h1>
                <div class="info mt-3 sm:hidden">
                  ${individualdata.info}
                </div>
                <div class="details hidden sm:flex sm:font-thin">
                  ${individualdata.details}
                  </div>
                </div>`;

    mobileImg.src = individualdata.image;
    best_img.src = individualdata.image;

    baap.innerHTML = text;


    gsap.fromTo(best_img, {
        rotate: 90,
        scale: 0,
        ease: "expo.ease",
        duration: 0.5,
    },
    {
        rotate: 0,
        scale: 1,
        ease: "expo.ease",
        duration: 0.5,
    });  

    gsap.fromTo(".headingname", {
      
      x: function( idx){
         if(idx==0){
          return "-100%"
         } else{
          return "100%"
         }
      },
      ease: "expo.ease",
      duration: 0.5,
  },
  {
      
    x: 0,
      ease: "expo.ease",
      duration: 0.5,
  });
}

images.forEach((image) => {
    image.style.opacity = "0.6";
});

images.forEach((image, index) => {
    image.addEventListener("click", () => {
        images.forEach((img) => {
            img.style.opacity = "0.4";
        });

        image.style.opacity = "1";

        renderdata(index);
    });
});


renderdata(0);
images[0].style.opacity = "1"; 

let arrow = document.querySelectorAll(".arrow");
let idx = 1;
arrow.forEach((arrow, index) => {
    arrow.addEventListener("click", () => {
        renderdata(idx);

        images.forEach((img) => {
            img.style.opacity = "0.4";
        });

        if (index == 1) {
            idx++;
            if (idx == data.length) {
                idx = 0;
            }
        } else {
            idx--;
            if (idx < 0) {
                idx = data.length - 1;
            }
        }

        images[idx].style.opacity = "1";
    });
});

}