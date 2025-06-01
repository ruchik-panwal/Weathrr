import {
  mainDisplayDom,
  extraInfoDom,
  futureForecastDom,
  header,
} from "./modules/domCreator";

import { searchPlace , toggleUnit} from "./modules/buttonControl";
import infoDisplay from "./modules/infoDisplay";

import "/src/styles/fontsColors.css";
import "/src/styles/main.css";

header();
searchPlace();
toggleUnit();
mainDisplayDom();
extraInfoDom();
futureForecastDom();
infoDisplay();
