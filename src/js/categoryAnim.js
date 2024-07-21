import { categoryData } from "../data/categoryData";




export function categoryAnim() {
    
let arr4 = [["top-8 left-8"], ["bottom-10 left-64"], ["top-10 right-40"], ["bottom-10 right-20"]];
let arr2 = [["top-20 left-1/2 -translate-x-1/2"], ["top-1/2 -translate-y-1/2 left-10"], ["top-10 right-10"], ["bottom-12 left-[44%]"]];
let arr3 = [["left-64 top-20"], ["bottom-4 left-32"], ["top-4 right-48"], ["bottom-24 right-[28%]"]];
let arr1 = [["left-[30%] top-20"], ["bottom-4 left-10"], ["top-4 right-10"], ["bottom-36 right-[28%]"]];

let cards = document.querySelector(".cards");
let cateP = document.querySelectorAll('.category p');

const categoryPositions = {
  face: arr1,
  cheek: arr2,
  eyes: arr3,
  lips: arr4,
};

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
      stagger: 0.02,
      ease: "power4",
      onComplete: resolve,
    });
  });
};

if (window.innerWidth >= 1024) {
  renderCards = async function (category) {
    await reverseAnimation();

    const positionArray = categoryPositions[category];

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
      { cardHolder: "widthwala lg:w-[32vw] lg:h-64 overflow-hidden absolute bottom-36 right-[28%]" }
    ];

    let arrdata = categoryData[category];
    let cluu = '';

    arrdata.forEach((el, index) => {
      const positionClass = positionArray[index].toString();
      const uniqueClass = uniqueClasses[index];

      cluu += `
        <div class="card-holder ${uniqueClass.cardHolder} ${positionClass}">
          <div class="${uniqueClass.card || (index === 1 || index === 2 ? 'cardHeight' : 'cardWidth') + ' card bg-gray-200 p-4 h-56 w-full flex justify-between items-center relative rounded-2xl lg:w-full lg:h-64 lg:rounded-md lg:p-4'}">
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
                    <button class="px-4 py-2 rounded-lg bg-green-500 lg:text-xl">Buy Now</button>
                  </div>
                ` : `
                  <p class="text-xl font-semibold text-black lg:mb-2 lg:mr-4">$${el.rate}</p>
                  <button class="px-4 py-2 rounded-lg bg-green-500 lg:text-xl">Buy Now</button>
                `}
              </div>
            </div>
            <div class="${uniqueClass.imgCont || 'img-cont w-1/2'}">
              <img class="w-full bg-slate-300 rounded-3xl object-center h-full" src="${el.img}" alt="${el.name}">
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
        x: "0%", scale: 1, duration: 0.6, stagger: 0.04, ease: "power4"
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
        y: "0%", scale: 1, duration: 0.6, stagger: 0.04, ease: "power4"
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
          <div class="w-1/2 flex flex-col justify-between">
            <div class="top">
              <h1 class="text-xl text-black font-semibold">${el.name}</h1>
              <p class="text-xl opacity-80 font-semibold">${el.quantity}</p>
            </div>
            <div class="bottom mt-2">
              <i class="ri-star-fill"></i>
              <i class="ri-star-fill"></i>
              <i class="ri-star-fill"></i>
              <i class="ri-star-fill"></i>
              <i class="ri-star-half-fill"></i>
              <p class="text-xl font-semibold text-black">$${el.rate}</p>
              <button class="px-4 py-2 rounded-lg bg-green-500">Buy Now</button>
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
        opacity: 0.7,
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