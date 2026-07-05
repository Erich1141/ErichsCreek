const cards = document.querySelectorAll(".imageCard");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.toggle("expanded");
    document.body.classList.toggle("no-scroll");
  });
});
