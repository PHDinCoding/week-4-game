// My Global Variables*********
var globalObject = {
    wins: 0,
    losses: 0,
    count: 0,
};
// ****************************


// My random number generator function*****************************
function randomNumberGenerator() {

    globalObject.randomNumber = Math.floor(Math.random() * 101 + 19);
    $("#randomNumberDiv").text(globalObject.randomNumber);
};

randomNumberGenerator();




// ************These are my button on click events that generate random number between 1 to 12


//*****************************************************************
//********************* MY FIRST BUTTON ***************************
//*****************************************************************
$("#buttonOne").on("click", function() {

    var buttonOneRandomValue = Math.floor(Math.random() * 12 + 1);

    console.log(buttonOneRandomValue);

    globalObject.count += buttonOneRandomValue;

    console.log("Pressed button 1 and value is: " + buttonOneRandomValue +

        " Total is: " + globalObject.count +

        " Random Number is: " + globalObject.randomNumber);

    $("#totalScore").text(globalObject.count);



    // This checks if I win or loose****************************
    if (globalObject.count == globalObject.randomNumber) {
        // incrementing if I win
        globalObject.wins++;
        // resetting my randomGenerator if I win
        randomNumberGenerator();
        // resetting my globalCount to 0 if I win
        globalObject.count = 0;

        $("#winSpan").text(globalObject.wins);



    } else if (globalObject.count > globalObject.randomNumber) {
        // incrementing my losses
        globalObject.losses++;
        // Calling my randomgen function here
        randomNumberGenerator();
        // resetting by globalCount to 0
        globalObject.count = 0;
        // Resetting my totalscore div to 0
        $("#totalScore").text("0");

        $("#lossSpan").text(globalObject.losses);


    }

    // Logging to see my counters in console for debug purpose
    console.log("wins: " + globalObject.wins + " Lost: " + globalObject.losses);
    //********************************************************* 
});



//*****************************************************************
//********************* MY SECOND BUTTON **************************
//*****************************************************************
$("#buttonTwo").on("click", function() {

    var buttonTwoRandomValue = Math.floor(Math.random() * 12 + 1);

    console.log(buttonTwoRandomValue);

    globalObject.count += buttonTwoRandomValue;

    console.log("Pressed button 1 and value is: " + buttonTwoRandomValue +

        " Total is: " + globalObject.count +

        " Random Number is: " + globalObject.randomNumber);

    $("#totalScore").text(globalObject.count);

    // This checks if I win or loose****************************
    if (globalObject.count == globalObject.randomNumber) {

        globalObject.wins++;
        // resetting my randomGenerator if I win
        randomNumberGenerator();
        // resetting my globalCount to 0 if I win
        globalObject.count = 0;

        $("#winSpan").text(globalObject.wins);

    } else if (globalObject.count > globalObject.randomNumber) {

        globalObject.losses++;

        randomNumberGenerator();

        globalObject.count = 0;

        $("#totalScore").text("0");

        $("#lossSpan").text(globalObject.losses);

    }
    console.log("wins: " + globalObject.wins + " Lost: " + globalObject.losses);
    //********************************************************* 

});


//*****************************************************************
//********************* MY THIRD BUTTON ***************************
//*****************************************************************
$("#buttonThree").on("click", function() {

    var buttonThreeRandomValue = Math.floor(Math.random() * 12 + 1);

    console.log(buttonThreeRandomValue);

    globalObject.count += buttonThreeRandomValue;

    console.log("Pressed button 1 and value is: " + buttonThreeRandomValue +

        " Total is: " + globalObject.count +

        " Random Number is: " + globalObject.randomNumber);

    $("#totalScore").text(globalObject.count);

    // This checks if I win or loose****************************
    if (globalObject.count == globalObject.randomNumber) {

        globalObject.wins++;
        // resetting my randomGenerator if I win
        randomNumberGenerator();
        // resetting my globalCount to 0 if I win
        globalObject.count = 0;

        $("#winSpan").text(globalObject.wins);

    } else if (globalObject.count > globalObject.randomNumber) {

        globalObject.losses++;

        randomNumberGenerator();

        globalObject.count = 0;

        $("#totalScore").text("0");

        $("#lossSpan").text(globalObject.losses);

    }
    console.log("wins: " + globalObject.wins + " Lost: " + globalObject.losses);
    //********************************************************* 
});

//*****************************************************************
//********************* MY FOURTH BUTTON **************************
//*****************************************************************
$("#buttonFour").on("click", function() {

    var buttonFourRandomValue = Math.floor(Math.random() * 12 + 1);

    console.log(buttonFourRandomValue);

    globalObject.count += buttonFourRandomValue;

    console.log("Pressed button 1 and value is: " + buttonFourRandomValue +

        " Total is: " + globalObject.count +

        " Random Number is: " + globalObject.randomNumber);

    $("#totalScore").text(globalObject.count);

    // This checks if I win or loose****************************
    if (globalObject.count == globalObject.randomNumber) {

        globalObject.wins++;
        // resetting my randomGenerator if I win
        randomNumberGenerator();
        // resetting my globalCount to 0 if I win
        globalObject.count = 0;

        $("#winSpan").text(globalObject.wins);

    } else if (globalObject.count > globalObject.randomNumber) {

        globalObject.losses++;

        randomNumberGenerator();

        globalObject.count = 0;

        $("#totalScore").text("0");

        $("#lossSpan").text(globalObject.losses);

    }
    console.log("wins: " + globalObject.wins + " Lost: " + globalObject.losses);
    //********************************************************* 

});
