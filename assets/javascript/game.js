function randomNumberGenerator(){
	var randomNumber = Math.floor(Math.random() *120 + 19);
};

$(document).ready(function() {
        // This will choose my random num
        var randomNumber = Math.floor(Math.random() * 101 + 19);
        // This pushes my random num in to span located in div randomNumberDiv
        $("#randomNumberDiv").text(randomNumber);



    })