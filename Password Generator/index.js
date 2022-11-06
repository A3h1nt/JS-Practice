// Slider
var slider = document.querySelector("input.slider");

//  Slider value
var slidervalue = document.querySelector(".slider-value");

// Submit button to generate password
var generate = document.querySelector(".submit-button");

// Copy button
var copy = document.querySelector(".copy-button");

// Input box, where the password will be shown
var passwordInput = document.querySelector("input.password");

// defining variables
var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%&*()+=]{}|?1234567890";
var password = " ";

// Initialized value
slidervalue.innerHTML = slider.value

// Update the value as the slider moves
slider.oninput = function() {
  slidervalue.innerHTML = this.value;
}

// Add click event listener on submit button
generate.addEventListener("click",function () {
  copy.value = "Copy";
  passwordGenerator(slidervalue.innerHTML);

});

// Generate Password
function passwordGenerator(length) {
  for(var i=0;i<=length;i++) {
    var ind = (Math.floor(Math.random()*chars.length));
    password += chars[ind];
  }
  passwordInput.value=password;
  password = " ";
}

// Add click event listener for copy button
copy.addEventListener("click", function () {
  navigator.clipboard.writeText(passwordInput.value);
  copy.value = "Copied !";
});
