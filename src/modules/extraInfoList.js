let infoList = [
  {
    iconName: "thermostat",
    title: "Feels Like",
    classname: "feelslike",
  },
  {
    iconName: "water_drop",
    title: "Humidity",
    classname: "humidity",
  },
  {
    iconName: "air",
    title: "Wind",
    classname: "windspeed",
  },
  {
    iconName: "cloud",
    title: "Chance of Rain",
    classname: "precipprob",
  },
  {
    iconName: "flare",
    title: "Solar Radiation",
    classname: "solarradiation",
  },
  {
    iconName: "lens_blur",
    title: "Dew",
    classname: "dew",
  },
];

let data = [
  { name: "resolvedAddress", parentobj: "", unit: "" },
  { name: "description", parentobj: "", unit: "" },
  { name: "temp", parentobj: "currentConditions", unit: "°C" },
  { name: "feelslike", parentobj: "currentConditions", unit: "°C" },
  { name: "conditions", parentobj: "currentConditions", unit: "" },
  { name: "humidity", parentobj: "currentConditions", unit: "%" },
  { name: "windspeed", parentobj: "currentConditions", unit: "mph" },
  { name: "precipprob", parentobj: "currentConditions", unit: "%" },
  { name: "solarradiation", parentobj: "currentConditions", unit: "W/m²" },
  { name: "dew", parentobj: "currentConditions", unit: "°C" },
];

export function extraInfoList() {
  return infoList;
}

export function divList() {
  return data;
}

let unit = "uk";

export function getUnit() {
  return unit;
}

export function setUnit(u) {
  unit = u;
}

let place = "mumbai";

export function getPlace(){
  return place;
}

export function setPlace(p){
  place = p;
}

export function getKey(){
  return "EXCNRQ7ZZ6XGB5KGN7HGNHGWT";
}

export function getUrl(){
  return "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
}