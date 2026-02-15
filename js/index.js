//screen 1280,551
//This addeventlister is to get a selected product from a selected forcast office QPF,SGX
var latest = document.querySelector("#latest");
latest.addEventListener("click", async () => {
  var product = document.querySelector("#product");
  var office = document.querySelector("#forecastoffice");
  var payload = {
    product: product.value.trim().toUpperCase(),
    office: office.value.trim().toUpperCase(),
  };

  var weather = await fetch(
    "https://erichs-real-server.onrender.com/API/weather/latestProduct",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    },
  );

  if (!weather.ok) {
    console.log("Server error:", weather.status, await weather.text());
    return;
  }

  var result = await weather.json();
  console.dir(result);

  const { productText } = result ?? {};
  if (productText) {
    document.querySelector("#first").textContent = productText;
  } else {
    document.querySelector("#first").textContent =
      "The property doesn't exist or the property is undefined";
  }

  product.value="";
  office.value=""
})      
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
var latest1 = document.querySelector("#latest1");
latest1.addEventListener("click", async () => {
  
  var station = document.querySelector("#station");
  var payload = {
    
    station: station.value.trim().toUpperCase(),
  };

  var weather = await fetch(
    "https://erichs-real-server.onrender.com/API/weather/latestObservation",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    },
  );

  if (!weather.ok) {
    console.log("Server error:", weather.status, await weather.text());
    return;
  }

  var result = await weather.json();
  var section=result.STATION[0].OBSERVATIONS

  console.log(result)
  const{ precip_accum_one_hour_value1:{date_time:time_1hour,value:value_1hour},precip_accum_value_1:{date_time:time_season,value:value_season}}=section;

console.log(time_1hour,value_1hour)
console.log(time_season,value_season)


 /* const { productText } = result ?? {};
  if (productText) {
    document.querySelector("#first").textContent = productText;
  } else {
    document.querySelector("#first").textContent =
      "The property doesn't exist or the property is undefined";
  }

  station.value="";*/
  
})      