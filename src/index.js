import {
  mainDisplayDom,
  extraInfoDom,
  futureForecastDom,
} from "./modules/domCreator";

import infoDisplay from "./modules/infoDisplay";

import "/src/styles/fontsColors.css";
import "/src/styles/main.css";

mainDisplayDom();
extraInfoDom();
futureForecastDom();

infoDisplay();