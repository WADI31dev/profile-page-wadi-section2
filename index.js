const btnBlue = document.querySelector(".btn-blue");
const imgProfile = document.querySelector(".img-circle");
const audio =  document.querySelector("audio");

btnBlue.addEventListener('click', () => {
  imgProfile.classList.add("animate__animated");
  imgProfile.classList.add("animate__bounce");
  audio.play();
  setTimeout(() => {
    imgProfile.classList.remove("animate__animated");
    imgProfile.classList.remove("animate__bounce");
  }, 1000);
} )
