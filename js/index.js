//screen 1280,551
//This addeventlister is to get a selected product from a selected forcast office QPF,SGX
var latest = document.querySelector("#latest");
latest.addEventListener("click", async () => {
  var product = document.querySelector("#product");
  var office = document.querySelector("#forecastoffice");
  var payload = { product: product.value.trim().toUpperCase(), office: office.value.trim().toUpperCase() };

  var weather = await fetch(
    "https://erichs-real-server.onrender.com/API/weather/latest",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload)
    }
  );


if (!weather.ok) {
    console.log("Server error:", weather.status, await weather.text());
    return;
  }


  var result = await weather.json();
  console.dir(result);

const { productText } = result ?? {};

document.querySelector("#first").textContent=productText

});
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$



