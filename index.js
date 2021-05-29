
function mitNyomott(gomb){
  switch (gomb) {
    case "w":
      new Audio('sounds/tom-1.mp3').play();
      break;
    case "a":
      new Audio('sounds/tom-2.mp3').play();
      break;
    case "s":
      new Audio('sounds/tom-3.mp3').play();
      break;
    case "d":
      new Audio('sounds/tom-4.mp3').play();
      break;
    case "j":
      new Audio('sounds/crash.mp3').play();
      break;
    case "k":
      new Audio('sounds/snare.mp3').play();
      break;
    case "l":
      new Audio('sounds/kick-bass.mp3').play();
      break;

    default:
}}

function anim(gomb){
var aktualisGomb = document.querySelector("." + gomb);
aktualisGomb.classList.add("pressed");
setTimeout(function(){aktualisGomb.classList.remove("pressed")}, 100);
}

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function(){
    mitNyomott(this.innerHTML);
    anim(this.innerHTML);
    }
  );
}
document.addEventListener("keypress", function(event){
  mitNyomott(event.key);
  anim(event.key);
});
