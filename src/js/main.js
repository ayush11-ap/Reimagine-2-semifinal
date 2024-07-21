import '../css/utils.css'
import '../css/coustom.css'




import { locomotiveJs } from "./utils";
import { pageCreation } from './pageCreation.js';
import { loderAnim } from "./loder";
import { homeAnim } from "./home";
import { menuAnimation } from "./menuAnimation";
import { certificateAnim } from './certificate';
import { videoSection } from './videosection.js';
import { categoryAnim } from './categoryAnim.js';
import { referFreind } from './refer.js';
import { dewAnim } from './dewBrown.js';

Shery.makeMagnet(".magnet-effect" , {

    ease: "elastic",
    duration: 1.5,
  });




locomotiveJs();
pageCreation();
certificateAnim();
categoryAnim();
videoSection();
referFreind();
// loderAnim(homeAnim);
homeAnim();
dewAnim();

menuAnimation();







