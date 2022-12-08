const btn = document.querySelector(".btn");
const icon = document.querySelector(".fa-solid");
const video = document.querySelector(".bck-video");
const pre = document.querySelector(".pre-loader");

btn.addEventListener("click", ()=> {
    if (btn.classList.contains("pause")) {
        btn.classList.remove("pause");
        video.play();
        icon.classList.add("fa-pause");
        icon.classList.remove("fa-play");
      } else {
        btn.classList.add("pause");
        video.pause();
        icon.classList.remove("fa-pause");
        icon.classList.add("fa-play");
      }
})
 
window.addEventListener("load", ()=> {
    pre.style.zIndex = "-2";
})