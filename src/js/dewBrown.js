import { DewBrownData } from "../data/dewbrown.js"


let data = DewBrownData;
export function dewAnim() {
   


let baap=document.querySelector(".upperdes")

let mobileImg=document.querySelector(".mobileimg")
function renderdata(index){
let individualdata=data[index]
let splitdata=individualdata.specs.split(",")

let text1=""
splitdata.forEach((data)=>{
  text1+=`<div><i class="ri-check-line"></i>${data}</div>`
})

// console.log(individualdata)
let text=`<div class="upperdes flex flex-col gap-1">
                <div class="name h-30 w-full text-3xl font-bold flex justify-between p-2 sm:text-6xl">
                    <h1>${individualdata.name}</h1>
                    <h1 class="text-slate-400 text-xl sm:text-4xl">$79.9</h1>
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
                </div>`
                mobileImg.src=individualdata.image
                baap.innerHTML=text
                // console.log(text)
}







let images=document.querySelectorAll(".images1")
images.forEach((image,index)=>{
  image.addEventListener("click",()=>{
    renderdata(index)
  })
})
// renderdata(0)    
let arrow=document.querySelectorAll(".arrow")
let idx=1
arrow.forEach((arrow,index)=>{
  arrow.addEventListener("click",()=>{
    
    renderdata(idx)
    if(index==1)  {
    idx++
    if(idx==data.length){
      idx=0
    }
  }else{
    idx--
    if(idx<0){
      idx=data.length-1
    }
    
  }
 
  })
})
 } 