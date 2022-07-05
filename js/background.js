const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"]

const chosenImage = images[Math.floor(Math.random() * images.length)]

const body = document.body;

function changeBgImg() {
  body.style.backgroundImage = `url(img/${chosenImage})`;
}
changeBgImg();



/*
bgImage.src = `img/${chosenImage}`
document.querySelector("#bg-img").appendChild(bgImage);
*/
