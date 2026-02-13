//screen 1280,551
var test=document.querySelector("#first")
test.addEventListener("click", async() => {

var weather= await fetch("https://erichs-real-server.onrender.com/test")

var result=await weather.json()
console.log(result)


})

