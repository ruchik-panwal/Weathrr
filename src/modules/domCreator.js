import { extraInfoList } from "./extraInfoList";
import "/src/styles/display.css";
import "/src/styles/extraInfoStyle.css";
import "/src/styles/dailyForecast.css";

const body = document.querySelector("body");

function header() {
  const head = document.createElement("div");
  head.className = "header";
  body.appendChild(head);

  const searchForm = document.createElement("form");
  searchForm.className = "searchForm";
  head.appendChild(searchForm);

  const searchbar = document.createElement("input");
  searchbar.className = "searchbar";
  searchbar.placeholder = "Search your place";
  searchForm.appendChild(searchbar);

  const searchBtn = document.createElement("button");
  searchBtn.className = "searchBtn";
  searchBtn.classList.add("material-icons")
  searchBtn.textContent = "search";
  searchForm.appendChild(searchBtn);

  const toggleUnit = document.createElement("button");
  toggleUnit.className = "toggleUnit";
  toggleUnit.textContent = "toggleBtn";
  head.appendChild(toggleUnit);
}

const mainContent = document.createElement("div");
mainContent.className = "mainContent";

function mainDisplayDom() {
  // The Main Display which contains the most relevant Info
  const mainDisplay = document.createElement("div");
  mainDisplay.className = "mainDisplay";

  // Adding a Image and reset button Wrapper
  const imgBtnWrap = document.createElement("div");
  imgBtnWrap.className = "imgBtnWrap";

  // Displaying the Image similar to the current Weather Condition
  const displayImg = document.createElement("img");
  displayImg.className = "displayImg";
  displayImg.src = //Temporary
    "https://images.pexels.com/photos/774664/pexels-photo-774664.jpeg";
  imgBtnWrap.appendChild(displayImg);

  // Adding a reset Button
  const resetBtn = document.createElement("button");
  resetBtn.className = "resetBtn";
  resetBtn.classList.add("material-icons");
  resetBtn.textContent = "refresh";
  imgBtnWrap.appendChild(resetBtn);

  // Wrapper For all the relevant Information
  const displayInfoWrap = document.createElement("div");
  displayInfoWrap.className = "displayInfoWrap";

  // Displating The current Temperature
  const currentTemp = document.createElement("h1");
  currentTemp.className = "currentTemp";
  currentTemp.classList.add("temp");
  displayInfoWrap.appendChild(currentTemp);

  // Giving the Description for the current Temperature
  const currentDes = document.createElement("p");
  currentDes.className = "currentDes";
  currentDes.classList.add("conditions");
  displayInfoWrap.appendChild(currentDes);

  // Giving the Description for the current Temperature
  const description = document.createElement("p");
  description.className = "description";
  displayInfoWrap.appendChild(description);

  // Adding place given by the User
  const disLocation = document.createElement("p");
  disLocation.className = "disLocation";
  disLocation.classList.add("resolvedAddress");
  displayInfoWrap.appendChild(disLocation);

  // Appending
  mainDisplay.appendChild(imgBtnWrap);
  mainDisplay.appendChild(displayInfoWrap);
  mainContent.appendChild(mainDisplay);
}

function extraInfoDom() {
  // creating main wrapper for all the extra Infos
  const extraInfoWrap = document.createElement("div");
  extraInfoWrap.className = "extraInfoWrap";

  // Making the elements for extea info div
  extraInfoList().forEach((element) => {
    // The Wrapper for Individual InfoElements
    const infoDiv = document.createElement("div");
    infoDiv.className = "info" + element.iconName;

    // Adding Icon
    const infoIcon = document.createElement("span");
    infoIcon.className = "material-icons";
    infoIcon.textContent = element.iconName;
    infoDiv.appendChild(infoIcon);

    // Ading Dom For the Value
    const infoValue = document.createElement("p");
    infoValue.className = element.classname;
    infoValue.textContent = "--"; //Temporary Value
    infoDiv.appendChild(infoValue);

    // Adding title
    const infoTitle = document.createElement("p");
    infoTitle.className = "infoTitle";
    infoTitle.textContent = element.title;
    infoDiv.appendChild(infoTitle);

    extraInfoWrap.appendChild(infoDiv);
  });

  mainContent.appendChild(extraInfoWrap);
}

function futureForecastDom() {
  const forecastWrap = document.createElement("div");
  forecastWrap.className = "forecastWrap";

  for (let i = 0; i < 5; i++) {
    const dayForecast = document.createElement("div");
    dayForecast.className = "dayForecast";

    const dayForecastIcon = document.createElement("div");
    dayForecastIcon.className = "dayForecastIcon";
    dayForecastIcon.classList.add("material-icons");
    dayForecastIcon.textContent = "cloud";
    dayForecast.appendChild(dayForecastIcon);

    const dayForecastText = document.createElement("div");
    dayForecastText.className = "dayForecastText";
    dayForecast.appendChild(dayForecastText);

    const arr = ["forecastDate", "forecastHigh", "forecastLow", "forecastDes"];
    arr.forEach((forecast) => {
      const element = document.createElement("p");
      element.className = forecast;
      element.id = "x" + (i + 1) + (arr.indexOf(forecast) + 1);
      element.textContent = forecast;
      dayForecastText.appendChild(element);
    });

    // Temporary data
    forecastWrap.appendChild(dayForecast);
  }
  mainContent.appendChild(forecastWrap);

  body.appendChild(mainContent);
}

export { mainDisplayDom, extraInfoDom, futureForecastDom, header };
