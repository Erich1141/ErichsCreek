const cards = document.querySelectorAll(".imageCard");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.toggle("expanded");
    document.body.classList.toggle("no-scroll");
  });
});

var doc=document.querySelector("#one")
var width=doc.clientWidth
var height=doc.clientHeight
console.log(width, height) 
