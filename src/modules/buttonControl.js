import { getUnit, setUnit, setPlace, divList } from "./extraInfoList";
import infoDisplay from "./infoDisplay";

function searchPlace() {
  const searchBtn = document.querySelector(".searchBtn");
  const inp = document.querySelector(".searchbar");

  searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    setPlace(inp.value);
    infoDisplay();
  });
}

function toggleUnit() {
  const togBtn = document.querySelector(".toggleUnit");
  togBtn.addEventListener("click", () => {
    if (getUnit() == "us") {
      setUnit("uk");
      togBtn.textContent = "C";
    } else {
      setUnit("us");
      togBtn.textContent = "F";
    }
    domUnitChanger();
    infoDisplay();
  });
}

function domUnitChanger() {
  divList().forEach((data) => {
    if (getUnit() == "us") {
      data.unit == "kph" ? (data.unit = "mph") : null;
      data.unit == "°C" ? (data.unit = "°F") : null;
    } else {
      data.unit == "mph" ? (data.unit = "kph") : null;
      data.unit == "°F" && data.name ? (data.unit = "°C") : null;
    }
  });
}

export { searchPlace, toggleUnit };
