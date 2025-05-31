import "/src/styles/display.css";

const body = document.querySelector("body");

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
  resetBtn.textContent = "r";
  imgBtnWrap.appendChild(resetBtn);

  // Wrapper For all the relevant Information
  const displayInfoWrap = document.createElement("div");
  displayInfoWrap.className = "displayInfoWrap";

  // Displating The current Temperature
  const currentTemp = document.createElement("h1");
  currentTemp.className = "currentTemp";
  currentTemp.textContent = "27";
  displayInfoWrap.appendChild(currentTemp);

  // Giving the Description for the current Temperature
  const currentDes = document.createElement("p");
  currentDes.className = "currentDes";
  currentDes.textContent = "Partially cloudy";
  displayInfoWrap.appendChild(currentDes);

  // Giving the Description for the current Temperature
  const description = document.createElement("p");
  description.className = "description";
  description.textContent =
    "Similar temperatures continuing with a chance of rain multiple days.";
  displayInfoWrap.appendChild(description);

  // Adding place given by the User
  const disLocation = document.createElement("p");
  disLocation.className = "disLocation";
  disLocation.textContent = "Mumbai";
  displayInfoWrap.appendChild(disLocation);

  // Appending
  mainDisplay.appendChild(imgBtnWrap);
  mainDisplay.appendChild(displayInfoWrap);
  body.appendChild(mainDisplay);
}

export default mainDisplayDom;
