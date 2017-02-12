function randomNumberGenerator() {

    var randomNumber = Math.floor(Math.random() * 120 + 19);
};

// This will choose my random num
var randomNumber = Math.floor(Math.random() * 101 + 19);
// This pushes my random num in to randomNumberDiv
$("#randomNumberDiv").text(randomNumber);


$("#buttonOne").on("click", function() {
    var buttonOneRandomValue = Math.floor(Math.random() * 12 + 1);
    console.log(buttonOneRandomValue);
});
$("#buttonTwo").on("click", function() {
    var buttonTwoRandomValue = Math.floor(Math.random() * 12 + 1);
    console.log(buttonTwoRandomValue);
});
$("#buttonThree").on("click", function() {
    var buttonThreeRandomValue = Math.floor(Math.random() * 12 + 1);
    console.log(buttonThreeRandomValue);
});
$("#buttonFour").on("click", function() {
    var buttonFourRandomValue = Math.floor(Math.random() * 12 + 1);
    console.log(buttonFourRandomValue);
});

