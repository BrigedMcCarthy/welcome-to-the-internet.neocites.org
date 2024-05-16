let root = document.documentElement;
let hotjarGraphic = document.getElementById("module-hotjar");

hotjarGraphic.addEventListener("mousemove", e => {
  console.log(e);
  root.style.setProperty('--mouse-x', e.pageX - hotjarGraphic.offsetLeft + "px");
  root.style.setProperty('--mouse-y', e.pageY - hotjarGraphic.offsetTop + "px");
});