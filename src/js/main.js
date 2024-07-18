import '../css/utils.css'





import { locomotiveJs } from "./utils";
import { pageCreation } from './pageCreationjs';  //  this is section you can check for you page transition , how your page come in 
import { loderAnim } from "./loder";
import { homeAnim } from "./home";
import { menuAnimation } from "./menuAnimation";
import { certificateAnim } from './certificate';





locomotiveJs();
pageCreation();
certificateAnim();

loderAnim(homeAnim);
menuAnimation();






