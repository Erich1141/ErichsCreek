
const cards = document.querySelectorAll(".imageCard");

cards.forEach((card) => {
  card.addEventListener("click", async () => {
    const isOpening = !card.classList.contains("expanded");

    card.classList.toggle("expanded");
    document.body.classList.toggle("no-scroll", isOpening);

    if (isOpening) {
      try {
        // Put this card into fullscreen.
        await card.requestFullscreen();

        // Let the browser choose either landscape direction.
        if (screen.orientation?.lock) {
          await screen.orientation.lock("landscape");
        }
      } catch (error) {
        console.log("Fullscreen or landscape mode was not allowed:", error);
      }
    } else {
      // Return orientation control to the phone.
      if (screen.orientation?.unlock) {
        screen.orientation.unlock();
      }

      // Leave fullscreen.
      if (document.fullscreenElement) {
        await document.exitFullscreen();
      }
    }
  });
});

const isSmallScreen = window.matchMedia("(max-width: 700px)").matches;

if (isOpening && isSmallScreen) {
  try {
    await card.requestFullscreen();

    if (screen.orientation?.lock) {
      await screen.orientation.lock("landscape");
    }
  } catch (error) {
    console.log(error);
  }
}

















/*const cards = document.querySelectorAll(".imageCard");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.toggle("expanded");
    document.body.classList.toggle("no-scroll");
  });
}); */

