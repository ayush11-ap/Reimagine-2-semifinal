import '../css/utils.css'
import '../css/coustom.css'




import { locomotiveJs } from "./utils";
import { loderAnim } from "./loder";
import { homeAnim } from "./home";
import { menuAnimation } from "./menuAnimation";
import { videoSection } from './videosection.js';

import { pageCreation } from './pageCreation.js';
import { dewAnim } from './dewBrown.js';

import { categoryAnim } from './categoryAnim.js';

import { certificateAnim } from './certificate';
import { referFreind } from './refer.js';




locomotiveJs();
loderAnim(homeAnim);
// homeAnim();
menuAnimation();
videoSection();
pageCreation();
dewAnim();
categoryAnim();



referFreind();
certificateAnim();







Shery.makeMagnet(".magnet-effect" , {

  ease: "elastic",
  duration: 1.5,
});


