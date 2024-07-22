import { categoryData } from "../data/categoryData";




export function categoryAnim() {
    

let cards = document.querySelector(".cards");
let cateP = document.querySelectorAll('.category p');


let renderCards;

const reverseAnimation = () => {
  return new Promise((resolve) => {
    gsap.to(".card", {
      x: function (idx) {
        if (idx === 0) {
          return "100%";
        } else if (idx === 3) {
          return "-100%";
        }
      },
      y: function (idx) {
        if (idx === 2) {
          return "100%";
        } else if (idx === 1) {
          return "-100%";
        }
      },
      duration: 0.4,
      stagger: 0.03,
      ease: "expo.ease",
      onComplete: resolve,
    });
  });
};

if (window.innerWidth >= 1024) {
  renderCards = async function (category) {
    await reverseAnimation();


    const uniqueClasses = [
      { cardHolder: "widthwala lg:w-[32vw] lg:h-64 overflow-hidden absolute left-[30%] top-20" },
      {
        cardHolder: "heightwala lg:w-80 lg:h-1/2 overflow-hidden absolute bottom-4 left-10",
        card: "card cardHeight bg-gray-200 p-4 h-56 w-full flex justify-between items-center relative rounded-2xl lg:w-full lg:h-full lg:rounded-md lg:p-4 lg:flex-col-reverse lg:gap-2",
        imgCont: "img-cont w-full h-2/3"
      },
      {
        cardHolder: "heightwala lg:w-80 lg:h-1/2 overflow-hidden absolute top-4 right-10",
        card: "card cardHeight bg-gray-200 p-4 h-56 w-full flex justify-between items-center relative rounded-2xl lg:w-full lg:h-full lg:rounded-md lg:p-4 lg:flex-col-reverse lg:gap-2",
        imgCont: "img-cont w-full h-2/3"
      },
      { cardHolder: "widthwala lg:w-[32vw] lg:h-64 overflow-hidden absolute bottom-24 right-[28%]" }
    ];

    let arrdata = categoryData[category];
    let cluu = '';

    arrdata.forEach((el, index) => {
      const uniqueClass = uniqueClasses[index];
      
      cluu += `
        <div class="card-holder shadow-2xl shadow-black/30 border border-slate-400 rounded-3xl ${uniqueClass.cardHolder} ">
          <div class="${uniqueClass.card || (index === 1 || index === 2 ? 'cardHeight' : 'cardWidth') + ' card bg-gray-200 p-4 h-56 w-full flex justify-between items-center relative rounded-3xl lg:w-full lg:h-64 lg:rounded-md lg:p-4'}">
            <div class="${uniqueClass.cardHolder.includes('heightwala') ? 'w-full' : 'w-1/2'} flex flex-col justify-between lg:h-full pr-2">
              <div class="top">
                <h1 class="text-xl text-black font-semibold">${el.name}</h1>
                <p class="text-xl opacity-80 font-semibold">${el.quantity}</p>
              </div>
              <div class="bottom mt-2 relative">
                ${Array.from({ length: 5 }, (_, i) => {
                  const fullStar = i < Math.floor(el.rating) ? 'ri-star-fill' : '';
                  const halfStar = i < el.rating && i >= Math.floor(el.rating) ? 'ri-star-half-fill' : '';
                  return `<i class="${fullStar || halfStar}"></i>`;
                }).join('')}
                ${uniqueClass.cardHolder.includes('heightwala') ? `
                  <div class="holder absolute bottom-0 right-0 flex flex-col items-end">
                    <p class="text-xl font-semibold text-black lg:mb-2 lg:mr-4">$${el.rate}</p>
                    <button class=" best-buy-now border border-black px-4 py-2 rounded-lg  lg:text-xl">Buy Now</button>
                  </div>
                ` : `
                  <p class="text-xl font-semibold text-black lg:mb-2 lg:mr-4">$${el.rate}</p>
                  <button class="best-buy-now border border-black px-4 py-2 rounded-lg  lg:text-xl">Buy Now</button>
                `}
              </div>
            </div>
            <div class="${uniqueClass.imgCont || 'img-cont w-1/2'} ">
              <img class="w-full bg-gradient-to-r from-orange-200 to-gray-400 rounded-3xl object-center h-full" src="${el.img}" alt="${el.name}">
            </div>
          </div>
        </div>
      `;
    });

    let container = `<div class="cards-holder w-[92%] h-full p-4 relative">${cluu}</div>`;
    cards.innerHTML = container;

    let tl = gsap.timeline();
    tl.fromTo(
      ".cardWidth",
      { 
        x: function (idx){
          return idx === 0 ? "-100%" : "100%";
        } 
      },
      { 
        x: "0%", scale: 1,  duration: 0.4,
        stagger: 0.03,
        ease: "expo.ease",
      }
    )
    .fromTo(
      ".cardHeight",
      { 
        y: function (idx){
          return idx === 0 ? "-100%" : "100%";
        }, 
        scale: 0 
      },
      { 
        y: "0%", scale: 1,  duration: 0.4,
        stagger: 0.03,
        ease: "expo.ease",
      },
      "<"
    );
  };
} else {
  renderCards = function (category) {
    let arrdata = categoryData[category];
    let cluu = '';

    arrdata.forEach((el) => {
      cluu += `
        <div class="card bg-gray-300 p-4 h-56 overflow-hidden w-full flex justify-between items-center relative rounded-2xl">
          <div class="w-1/2 flex flex-col  justify-between">
            <div class="top">
              <h1 class=" sm:text-xl text-black font-semibold">${el.name}</h1>
              <p class="  sm:text-xl opacity-80 font-semibold">${el.quantity}</p>
            </div>
            <div class="bottom mt-2">
              <i class="ri-star-fill"></i>
              <i class="ri-star-fill"></i>
              <i class="ri-star-fill"></i>
              <i class="ri-star-fill"></i>
              <i class="ri-star-half-fill"></i>
              <p class="text-xl font-semibold text-black">$${el.rate}</p>
              <button class=" px-4 my-2 py-2 rounded-lg bg-black text-white">Buy Now</button>
            </div>
          </div>
          <div class="img-cont w-1/2">
            <img class="w-full bg-slate-300 rounded-3xl object-center h-full" src="${el.img}" alt="">
          </div>
        </div>`;
    });

    cards.innerHTML = cluu;
  };
}


renderCards('face');
gsap.to('#face', {
  backgroundColor: "#561C24",
  opacity: 1,
  ease: "expo.ease",
  duration: 0.7,
});

  
cateP.forEach((elem) => {
  elem.addEventListener("click", () => {
    let id = elem.getAttribute('id');
    renderCards(id);

    cateP.forEach((el) => {
      gsap.to(el, {
        backgroundColor: "#000",
        opacity: 0.6,
        ease: "expo.ease",
        duration: 0.7,
      });
    });

    gsap.to(elem, {
      backgroundColor: "#561C24",
      opacity: 1,
      ease: "expo.ease",
      duration: 0.7,
    });
  });
});

}