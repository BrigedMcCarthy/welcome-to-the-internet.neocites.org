var container = document.querySelector("#jamf-container");
var mover = document.querySelector("#jamf-mover");

container.addEventListener("mousemove", function(e) {
  mover.style.backgroundPositionX = -e.offsetX * 1.8 + "px";
  mover.style.backgroundPositionY = -e.offsetY + 80 + "px";
});

container.addEventListener("mouseenter", function() {
  
  setTimeout(function() {
    mover.classList.add("no-more-slidey");
    container.removeEventListener("mouseenter");
  }, 250);
  
});