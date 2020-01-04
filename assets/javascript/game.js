var wins = 0;
var losses = 0;


var crystalone = Math.floor((Math.random() * 12) + 1); //random number between 1-12
var crystaltwo = Math.floor((Math.random() * 12) + 1);
var crystalthree = Math.floor((Math.random() * 12) + 1);
var crystalfour = Math.floor((Math.random() * 12) + 1);
var numbertoget = Math.floor(Math.random() * (121 - 19) + 19); //random number between 19-120, max value has to be one more than the range you want
var yourscore = 0;




var imageCrystal = $("<img>");
imageCrystal.addClass("crystal-image")
imageCrystal.attr("src", "assets/images/crystal1.jpg");
imageCrystal.attr("data-crystalvalue", crystalone);
$("#crystals").append(imageCrystal);

var imageCrystal2 = $("<img>");
imageCrystal2.addClass("crystal-image")
imageCrystal2.attr("src", "assets/images/crystal2.jpg");
imageCrystal2.attr("data-crystalvalue", crystaltwo);
$("#crystals").append(imageCrystal2);

var imageCrystal3 = $("<img>");
imageCrystal3.addClass("crystal-image")
imageCrystal3.attr("src", "assets/images/crystal3.jpg");
imageCrystal3.attr("data-crystalvalue", crystalthree);
$("#crystals").append(imageCrystal3);

var imageCrystal4 = $("<img>");
imageCrystal4.addClass("crystal-image")
imageCrystal4.attr("src", "assets/images/crystal4.jpg");
imageCrystal4.attr("data-crystalvalue", crystalfour);
$("#crystals").append(imageCrystal4);

$("#your-score").text(yourscore);
$("#number-to-reach").text(numbertoget);

function resetgame() {
  crystalone = Math.floor((Math.random() * 12) + 1); //recalculate all variables and set scores back to 0
  crystaltwo = Math.floor((Math.random() * 12) + 1);
  crystalthree = Math.floor((Math.random() * 12) + 1);
  crystalfour = Math.floor((Math.random() * 12) + 1);
  numbertoget = Math.floor(Math.random() * (121 - 19) + 19);
  yourscore = 0;
  $("#number-to-reach").text(numbertoget);
  $("#your-score").text(yourscore);
  imageCrystal.attr("data-crystalvalue", crystalone); //need to reset the variables after they are calculated the first time
  imageCrystal2.attr("data-crystalvalue", crystaltwo);
  imageCrystal3.attr("data-crystalvalue", crystalthree);
  imageCrystal4.attr("data-crystalvalue", crystalfour);
}


$(document).ready(function () {
  $(".crystal-image").on("click", function () {

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);

    yourscore += crystalValue;

    $("#your-score").text(yourscore);
    if (yourscore === numbertoget) {
      wins++
      $("#winstxt").text("wins: " + wins);
      resetgame()
    }

    else if (yourscore >= numbertoget) {
      losses++
      $("#lossestxt").text("losses: " + losses);
      resetgame()
    }

  }
  )
}
)   