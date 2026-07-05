const images= document.querySelectorAll("#viewer img")

images.forEach((img)=> {
    img.addEventListener("click",()=>{
       img.classList.toggle("expanded")
      document.body.classList.toggle("no-scroll")
    });

});