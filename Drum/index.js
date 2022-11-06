
// Event listener for mouse click

var drums=document.querySelectorAll('.drum').length;
for(var i=0;i<drums;i++){

    //setting event listener
    document.querySelectorAll(".drum")[i].addEventListener('click',function (){
    make_sound(this.innerHTML);
    button_animation(this.innerHTML);
  });
}

// Event listener for the keyboard

document.addEventListener("keydown",function (event) {
  make_sound(event.key);
  button_animation(event.key);
});

function make_sound(key){
  switch (key) {
    case 'w':
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case 'a':
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();

      break;
    case 's':
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();

      break;
    case 'd':
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();

      break;
    case 'j':
      var audio = new Audio("sounds/snare.mp3");
      audio.play();

      break;
    case 'k':
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();

      break;
    case 'l':
      var audio = new Audio("sounds/crash.mp3");
      audio.play();

      break;
    default:

  }
}

function button_animation(keypressed){
  document.querySelector('.'+keypressed).classList.add("pressed");
  setTimeout(function () {
    document.querySelector('.'+keypressed).classList.remove("pressed");
  },100);
}
