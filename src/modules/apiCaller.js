export default async function weatherApi(VC_URL, API_KEY, place, unit) {
  const response = await fetch(
    VC_URL + place + "?key=" + API_KEY + "&unitGroup=" + unit
  );
  const jResponse = await response.json();

  console.log(jResponse);
  console.log(jResponse.currentConditions.temp);
}
