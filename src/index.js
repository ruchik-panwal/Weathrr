import weatherApi from "./modules/apiCaller";
import {
  mainDisplayDom,
  extraInfoDom,
  futureForecastDom,
} from "./modules/domCreator";

import "/src/styles/fontsColors.css";
import "/src/styles/main.css";

// Temporary API Stuff
const API_KEY = "EXCNRQ7ZZ6XGB5KGN7HGNHGWT";
const VC_URL =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
const place = "nerul";
const unit = "uk";

weatherApi(VC_URL, API_KEY, place, unit);
mainDisplayDom();
extraInfoDom();
futureForecastDom();
