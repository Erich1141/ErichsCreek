//screen 1280,551
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
});
