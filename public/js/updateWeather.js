// FIle will pull new weather data on an interval

async function getUpdatedData() {
    let request = await fetch("/weather/api/current", {
        method: "GET"
    });
    let data = await request.json();
    console.log(data);
}

setTimeout(() => {
    console.log("Getting new weather data");
}, 300000);