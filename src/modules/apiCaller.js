export default async function weatherApi(VC_URL, API_KEY, place, unit) {
  try {
    const response = await fetch(
      VC_URL + place + "?key=" + API_KEY + "&unitGroup=" + unit
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const jResponse = await response.json();
    return jResponse;
  } catch (error) {
    console.error("Error fetching weather data:", error.message);
    return null;
  }
}
