import '../css/utils.css'
import '../css/coustom.css'




import { locomotiveJs } from "./utils";
import { pageCreation } from './pageCreation.js';
import { loderAnim } from "./loder";
import { homeAnim } from "./home";
import { menuAnimation } from "./menuAnimation";
import { certificateAnim } from './certificate';
import { videoSection } from './videosection.js';


Shery.makeMagnet(".magnet-effect" , {

    ease: "elastic",
    duration: 1.5,
  });




locomotiveJs();
pageCreation();
certificateAnim();
videoSection();
// loderAnim(homeAnim);
homeAnim();

menuAnimation();







