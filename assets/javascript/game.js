var winCount = 0;
var lossCount = 0;
var guessSum = 10;
var numberToMatch = numberToMatch ();

var numberToMatchText = $("numberToMatchText");
var guessCountText = $("guessSumText");
var winCountText = $("winCountText");
var lossCountText = $("lossCountext");




<div class="container-fluid text-center">

<div class="row headerRow">
    <div class="col">
        <h1 class="display-3">CRYSTAL GAME</h1>
    </div>
</div>

<div class="row contentRow">
    <div class="col-2 colLeft"></div>

    <div class="col-8 colMid">
        <h2 class="display-5">Number To Match Is</h2>

        <h2 class="display-5" id="numberToMatchText">?</h2>

        <h3>Your Total:</h3>

        <h4 class="m-1" id="guessSumText">0</h4>


        <div class="row m-3 imageRow" id="crystals">
            <div class="col-3 crystalImage colImage1"><img class="img-fluid" src="assets/images/Diamond.png" alt="Diamond" id="crystal1"
                    value="crystalValue1"></div>
            <div class="col-3 crystalImage colImage2"><img class="img-fluid"  src="assets/images/Emerald.png" alt="Emerald" id="crystal2"
                    value="crystalValue2"></div>
            <div class="col-3 crystalImage colImage3"><img class="img-fluid"  src="assets/images/Ruby.png" alt="Ruby" id="crystal3"
                    value="crystalValue3"></div>
            <div class="col-3 crystalImage colImage4"><img class="img-fluid"  src="assets/images/Sapphire.png" alt="Sapphire"
                    id="crystal4" value="crystalValue4"></div>
        </div>

        
        <h3> WINS </h3>

        <h4 class="m-1" id="winCountText"> 0 </h4>

        <h3> LOSSES </h3>

        <h4 class="m-1" id="lossCountText"> 0 </h4>
    </div>

    <div class="col-2 colRight"></div>
</div>

