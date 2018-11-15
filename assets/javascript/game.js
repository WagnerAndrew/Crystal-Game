
$(document).ready(function () {

    //VARIABLES

    var winCount = 0;
    var lossCount = 0;
    var guessSum = 0;
    var numberToMatch = randomNumberToMatch();

    //FUNCTIONS

    function reset (){

        numberToMatch = randomNumberToMatch();
        $("#numberToMatch").text(numberToMatch);
        $("#crystals").empty ();
        crystalValues ();
        guessSum = 0;
        
        $("#guessSum").text(guessSum);

        setTimeout(function(){
            $("#message").text("");
        }, 3000)

    };

    function randomNumberToMatch() {
        var randomNumber = Math.floor(Math.random() * (120 - 19)) + 19;
        return randomNumber;
    };

    function crystalValues() {
        for (var i = 0; i < 4; i++) {

            var imageCrystal = $("<img>");

            imageCrystal.addClass(" image-fluid m-3 crystal-image");
            imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");
            imageCrystal.attr("data-crystalvalue", Math.floor(Math.random() * (12 - 1)) + 1);
            $("#crystals").append(imageCrystal);
        };
    };



    //PROCESS    

    $("#numberToMatch").text(numberToMatch);

    crystalValues();

    $(document).on("click", ".crystal-image", function () {

        var crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);
        console.log("The value of this crystal is: " + crystalValue);
        guessSum = guessSum + crystalValue;


        if (guessSum === numberToMatch) {
            $("#message").text("You got " + guessSum + "!" + " You Win!");
            winCount++;
            $("#winCount").text(winCount);
            reset ();
        }

        if (guessSum > numberToMatch) {
            $("#message").text(
                "You went over with " + guessSum + "!" + " Sorry, you lose!"
            );
            lossCount++;
            $("#lossCount").text(lossCount);
            reset();
        }

        $("#guessSum").text(guessSum);
    });

})