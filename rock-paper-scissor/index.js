document.querySelector("button.play-button").addEventListener("click",function () {
  reset();

// Value for player 1 & 2
  var player1,player2;

// Initializing the variables
  player1 = "0";
  player2 = "0";

// Run  the loop until player1 is equal to player 2, and exit once they have different value
  while ( player1 === player2 ) {
    player1 = Math.floor(Math.random()*3);
    player2 = Math.floor(Math.random()*3);
  }



  if ( player1 == "0" & player2 == "1" ){
    document.querySelectorAll('.cards')[0].classList.add("win");
    document.querySelectorAll('.cards')[1].classList.add("lose");
  }
  else if  ( player1 == "0" & player2 == "2" ){
    document.querySelectorAll('.cards')[1].classList.add("win");
    document.querySelectorAll('.cards')[0].classList.add("lose");
  }
  else if  ( player1 == "1" & player2 == "2" ){
    document.querySelectorAll('.cards')[0].classList.add("win");
    document.querySelectorAll('.cards')[1].classList.add("lose");
  }
  else if  ( player1 == "1" & player2 == "0" ){
    document.querySelectorAll('.cards')[1].classList.add("win");
    document.querySelectorAll('.cards')[0].classList.add("lose");
  }
  else if  ( player1 == "2" & player2 == "0" ){
    document.querySelectorAll('.cards')[0].classList.add("win");
    document.querySelectorAll('.cards')[1].classList.add("lose");
  }
  else if  ( player1 == "2" & player2 == "1" ){
    document.querySelectorAll('.cards')[1].classList.add("win");
    document.querySelectorAll('.cards')[0].classList.add("lose");
  }




// change  the image accoridngly
    var image1 = document.querySelectorAll(".cards-image")[0];
    image1.src = "images/"+player1+".png";

    var image2 = document.querySelectorAll(".cards-image")[1];
    image2.src = "images/"+player2+".png";
  }
);

function reset() {
  var removes = document.querySelectorAll('.cards');
  removes.forEach((r) => {
    r.classList.remove("win","lose","draw");
  });
}


// work on logic
// 0  : paper
// 1 : stone
// 2 : scissor

// 0 > 1
// 0 < 2

// 1 > 2
// 1 < 0

// 2 > 0
// 2 < 1
