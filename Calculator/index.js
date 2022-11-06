var equation='';

// Adding event listener
$('input:button').click(function () {
    inputs(this.value);
})

$('input:button').click(function () {
  var audio = new Audio("click.wav");
  audio.play();
})

// Taking inputs
function inputs(input) {
  if(input === 'Clear') {
    $('input.input-box').val('');
    equation='';
    $('pre').text('result');
  }
  else if(input === "=") {
    evaluate(equation);
  }
  else {
    equation += input;
  }
  $('input.input-box').val(equation);
}


// Evaluating Values
function evaluate(equation) {
    var result = eval(equation);
    $('pre').text(result);
}
