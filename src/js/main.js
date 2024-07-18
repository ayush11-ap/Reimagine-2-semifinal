import '../css/utils.css'
import '../css/coustom.css'




import { locomotiveJs } from "./utils";
import { pageCreation } from './pageCreation.js';  //  this is section you can check for you page transition , how your page come in 
import { loderAnim } from "./loder";
import { homeAnim } from "./home";
import { menuAnimation } from "./menuAnimation";
import { certificateAnim } from './certificate';

Shery.makeMagnet(".magnet-effect" /* Element to target.*/, {
    //Parameters are optional.
    ease: "elastic",
    duration: 1.5,
  });


  console.log(window.innerHeight)


locomotiveJs();
pageCreation();
certificateAnim();

// loderAnim(homeAnim);
homeAnim();

menuAnimation();






