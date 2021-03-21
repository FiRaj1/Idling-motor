  $(".eButton").click(function(){
    var ecoButton = $(this).attr("class");
    console.log(ecoButton);
    if(ecoButton === "eButton"){
/* if(encoderRPM === 0 || encoderRPM<3500 && encoderRPM>3000)   */ /*-if we have wheel encoder we will get RPM and that will triger the voice */
      var eco = new Audio("sound/audioclipforStarthack2021.mp3");
      eco.play();
    }


  });
