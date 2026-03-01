//screen 1280,551
//This addeventlister is to get a selected product from a selected forcast office QPF,SGX
document.querySelector("#first").textContent = "";
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

  product.value = "";
  office.value = "";
});
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
document.querySelector("#first").textContent = "";
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
  var section = result.STATION[0];

  console.log(result);

  const {
    OBSERVATIONS: {
      precip_accum_one_hour_value_1: {
        date_time: time_1hour,
        value: value_1hour,
      },
      precip_accum_value_1: { date_time: time_season, value: value_season },
    },
  } = section ?? {};

  var obs = {
    timeHour: time_1hour,
    timeValue: value_1hour,
    seasonTime: time_season,
    seasonValue: value_season,
  };
  obs.timeHour = timeSync(obs.timeHour);
  obs.seasonTime = timeSync(obs.seasonTime);
  var temp2= Array.from(obs)
  if (time_season) {
    var box = document.querySelector("#first");

    for (var i = 0; i <= 3; i++) {
      var temp = document.createElement("div");
temp.className="data"


      box.append(temp);
    }





  } else {
    document.querySelector("#first").textContent =
      "The property doesn't exist or the property is undefined";
  }

  station.value = "";
});


//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
var fileGet=document.querySelector("#file")
fileGet.addEventListener("click", async () => {

var raw=await fetch("https://erichs-real-server.onrender.com/API/retrieve/testFile")
console.log("sent file")
console.log(raw.status)
var response=await raw.text()
console.log(response)





})
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function timeSync(val) {
  let date = new Date(val);
  let options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
    timeZoneName: "short", // Optional: includes the time zone abbreviation
  };
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(date);

  val = formattedDate;

  return val;
}
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
 window.location.href = "https://erichs-real-server.onrender.com/auth/google";