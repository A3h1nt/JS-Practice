var turn = "X";
var winner = "";


// Selecting all the div elements
document.querySelectorAll('div.block').forEach(item => {

  //adding click listener
  item.addEventListener('click', event => {

    // making sure the element is changed only if it's empty
    if (item.innerText === '') {
      item.innerText = turn;

      // changing turn from 0 to X &  vice versa
      turn = change_turn();

      // call the combination_check function to check if a winning combination has been found or not
      combination_check();

      // if winner found, then make  it win
      if (winner !== "") {
        document.querySelector("pre").innerText = winner + " won 🚩!";
        var disable = document.querySelectorAll('div');
        disable.forEach(dis =>  {
          dis.classList += " disable";
          winner =  "";
        });
      }
    }
  })
})


// changing turn from 0 to X &  vice versa
function change_turn() {
  return turn === 'X' ? 0 : 'X';

}

// combination_check function to check if a winning combination has been found or not
function combination_check() {
  var blocktext = document.querySelectorAll('div.block');
  var wins = [
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [6, 7, 8],
    [2, 5, 8],
    [2, 4, 6],
    [1, 4, 7],
    [3, 4, 5]
  ]
  wins.forEach(e => {
    // checks for each combination
    if ((blocktext[e[0]].innerText === blocktext[e[1]].innerText) && (blocktext[e[1]].innerText === blocktext[e[2]].innerText) && (blocktext[e[0]].innerText !== '')) {
      winner = blocktext[e[0]].innerText;
      // Adds won class to the winner combination
      blocktext[e[0]].className += " won";
      blocktext[e[1]].className += " won";
      blocktext[e[2]].className += " won";
    }
  });
}


// Event listener for reset button and all it's functionality
document.querySelector('input.reset').addEventListener("click", function() {
  var reset = document.querySelectorAll('div.block');
  reset.forEach(r => {
    r.innerText = '';
  })

  // Removing "won" Class
  var remove_class = document.querySelectorAll('div');
  remove_class.forEach(rc => {
    rc.classList.remove("won", "disable");
  });

  // remove the won heading
  document.querySelector("pre").innerText = "";

})
