// FIle will pull new weather data on an interval

async function getUpdatedData() {
    let request = await fetch("/weather/api/current", {
        method: "GET"
    });
    let data = await request.json();
    console.log(data);
    return data;
}

async function updateWeather() {
    console.log("Getting new weather data");
    try {
        let data = await getUpdatedData();
        let mostRecent = data[0];

        document.getElementById("mainTemp").innerText = celsiusToFarenheit(mostRecent.outsideTemperature) + "F";
        document.getElementById("windSpeed").innerText = `Speed: ${mostRecent.currentWindSpeed}mph`;
        document.getElementById("windDirection").innerText = `Direction: ${mostRecent.currentWindDirection}`;
        document.getElementById("windGust").innerText = `Gust: ${mostRecent.currentWindGust}`;
        document.getElementById("humidity").innerText = `Humidity: ${mostRecent.outsideHumidity}%`;
        document.getElementById("AQI").innerText = `AQI: ${mostRecent.AQI}`;
        document.getElementById("totalRain").innerText = `Total Rain: ${mostRecent.totalRain}in.`;
        document.getElementById("lightningCount").innerText = `Lightning Count: ${mostRecent.as3935LightningCount}`;
    } catch (e) {
        console.log(e);
    }
}

setTimeout(async () => {
    await updateWeather();
}, 300000);