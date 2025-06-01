import weatherApi from "./apiCaller";
import { divList } from "./extraInfoList";

// Temporary API Stuff
const API_KEY = "EXCNRQ7ZZ6XGB5KGN7HGNHGWT";
const VC_URL =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
const place = "juinagar";
const unit = "uk";

const list = divList();

export default async function infoDisplay() {
  const infoObj = await weatherApi(VC_URL, API_KEY, place, unit);

  list.forEach((obj) => {
    for (const key in infoObj) {
      const val = infoObj[key];
      if (obj.name == key) {
        const divSelect = document.querySelector("." + obj.name);
        divSelect.textContent = infoObj[key];
      } else if (obj.parentobj == key)
        key == "currentConditions"
          ? currentDisplay(val, obj.name, obj.unit)
          : null;
    }
  });

  let dayArr = infoObj.days;
  dailyDisplay(dayArr);
}

function currentDisplay(ccObj, name, unit) {
  for (const val in ccObj) {
    if (val == name) {
      const divSelect = document.querySelector("." + name);
      divSelect.textContent = ccObj[val] + " " + unit;
    }
  }
}

function dailyDisplay(dayArr) {
  for (let i = 1; i < 6; i++) {
    for (let j = 1; j < 5; j++) {
      const divSelect = document.querySelector("#x" + i + j);
      divSelect.className == "forecastDate"
        ? (divSelect.textContent = dayArr[i].datetime)
        : null;
      divSelect.className == "forecastHigh"
        ? (divSelect.textContent = dayArr[i].feelslikemax)
        : null;
      divSelect.className == "forecastLow"
        ? (divSelect.textContent = dayArr[i].feelslikemin)
        : null;
      divSelect.className == "forecastDes"
        ? (divSelect.textContent = dayArr[i].conditions)
        : null;
    }
  }
}
