/*Emissionen 2018*/
var emissionsafrica2018 :number = 1235.5;
var emissionssouthamerica2018 :number = 1261.5;
var emissionseurope2018 :number = 4209.3;
var emissionsnorthamerica2018 :number = 6035.6;
var emissionsasia2018 :number = 16274.1;
var emissionsaustralia2018 :number = 2100.5;

var emissionsgesamt2018 :number = (emissionsafrica2018+emissionsnorthamerica2018+emissionseurope2018+emissionssouthamerica2018+emissionsasia2018+emissionsaustralia2018)

/*Emissionen 2008*/
var emissionsafrica2008:number = 1028;
var emissionssouthamerica2008:number = 1132.6;
var emissionseurope2008:number = 4965.7;
var emissionsnorthamerica2008:number = 6600.4;
var emissionsasia2008:number = 12954.7;
var emissionsaustralia2008:number = 1993;

var emissionsgesamt2008:number= (emissionsafrica2008+emissionssouthamerica2008+emissionseurope2008+emissionsnorthamerica2008+emissionsasia2008+emissionsaustralia2008)


/*Europa*/
console.log("Die Emission von Europa 2018 ist: " +emissionseurope2018 +" kg CO2")
console.log("Relativ zur Gesamtemission der Welt verursacht Europa damit " +emissionseurope2018*100/emissionsgesamt2018 + "%")
console.log("Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um " + (emissionseurope2018-emissionseurope2008)*100/emissionseurope2008 +" % verändert")
console.log("2018 im Vergleich zu 2008 sind das " +(emissionseurope2018-emissionseurope2008) +"kg CO2")

/*Asien*/
console.log("Die Emission von Asien 2018 ist: " +emissionsasia2018 +" kg CO2")
console.log("Relativ zur Gesamtemission der Welt verursacht Asien damit " +emissionsasia2018*100/emissionsgesamt2018 + "%")
console.log("Für Asien hat sich 2018 im Vergleich zu 2008 die Emission um " + (emissionsasia2018-emissionsasia2008)*100/emissionsasia2008 +" % verändert")
console.log("2018 im Vergleich zu 2008 sind das " +(emissionsasia2018-emissionsasia2008) +"kg CO2")

/*Australien*/
console.log("Die Emission von Australien 2018 ist: " +emissionsaustralia2018 +" kg CO2")
console.log("Relativ zur Gesamtemission der Welt verursacht Australien damit " +emissionsaustralia2018*100/emissionsgesamt2018+ "%")
console.log("Für Australien hat sich 2018 im Vergleich zu 2008 die Emission um " + (emissionsaustralia2018-emissionsaustralia2008)*100/emissionsgesamt2008 +" % verändert")
console.log("2018 im Vergleich zu 2008 sind das " +(emissionsaustralia2018-emissionsaustralia2008) +"kg CO2")

/*Südamerika*/
console.log("Die Emission von Südamerika 2018 ist: " +emissionssouthamerica2018 +" kg CO2")
console.log("Relativ zur Gesamtemission der Welt verursacht Südamerika damit " +emissionssouthamerica2018*100/emissionsgesamt2018+ "%")
console.log("Für Südamerika hat sich 2018 im Vergleich zu 2008 die Emission um " + (emissionssouthamerica2018-emissionssouthamerica2008)*100/emissionssouthamerica2008 +" % verändert")
console.log("2018 im Vergleich zu 2008 sind das " +(emissionssouthamerica2018-emissionssouthamerica2008) +"kg CO2")

/*Nordamerika*/
console.log("Die Emission von Nordamerika 2018 ist: " +emissionsnorthamerica2018 +" kg CO2")
console.log("Relativ zur Gesamtemission der Welt verursacht Nordamerika damit " +emissionsnorthamerica2018*100/emissionsgesamt2018+ "%")
console.log("Für Nordamerika hat sich 2018 im Vergleich zu 2008 die Emission um " + (emissionsnorthamerica2018-emissionsnorthamerica2008)*100/emissionsnorthamerica2008 +" % verändert")
console.log("2018 im Vergleich zu 2008 sind das " +(emissionsnorthamerica2018-emissionsnorthamerica2008) +"kg CO2")

/*Afrika*/
console.log("Die Emission von Afrika 2018 ist: " +emissionsafrica2018 +" kg CO2")
console.log("Relativ zur Gesamtemission der Welt verursacht Afrika damit " +emissionsafrica2018*100/emissionsgesamt2018 + "%")
console.log("Für Afrika hat sich 2018 im Vergleich zu 2008 die Emission um " + (emissionsafrica2018-emissionsafrica2008)*100/emissionsafrica2008 +" % verändert")
console.log("2018 im Vergleich zu 2008 sind das " +(emissionsafrica2018-emissionsafrica2008) +"kg CO2")



/*Funktionen*/

//Europa//

function myfunction1(){
  document.querySelector("h1").innerHTML = "Carbon Dioxide Emissions in Europe";

  document.querySelector(".ziffer1").innerHTML = "4209.3";
  document.querySelector(".satz1").innerHTML = "Emission absolute of Europe in 2018";

  document.querySelector(".ziffer2").innerHTML = "13.527 %";
  document.querySelector(".ziffer3").innerHTML = "-15.232 %";

  document.querySelector(".ziffer4").innerHTML = "-756.4 kg CO2";

  document.querySelector('.chart').setAttribute("style", 'height:' + emissionseurope2018*100/emissionsgesamt2018 + "%");
}


window.addEventListener("load", function(){
  document.querySelector(".europe").addEventListener("click", myfunction1);
});

//Nord Amerika//

function myfunction2(){
  document.querySelector("h1").innerHTML = "Carbon Dioxide Emissions in North America";

  document.querySelector(".ziffer1").innerHTML = "6035.6";
  document.querySelector(".satz1").innerHTML = "Emission absolute of North America in 2018";

  document.querySelector(".ziffer2").innerHTML = "19.396 %";
  document.querySelector(".ziffer3").innerHTML = "-8.557 %";

  document.querySelector(".ziffer4").innerHTML = "-564.8 kg CO2";

  document.querySelector(".chart").setAttribute("style", "height:" + "19.396" + "%");

}

window.addEventListener("load", function(){
  document.querySelector(".northamerica").addEventListener("click", myfunction2);
});

//Südamerika//

function myfunction3(){
  document.querySelector("h1").innerHTML = "Carbon Dioxide Emissions in South America";

  document.querySelector(".ziffer1").innerHTML = "1261.5";
  document.querySelector(".satz1").innerHTML = "Emission absolute of South America in 2018";

  document.querySelector(".ziffer2").innerHTML = "4.054 %";
  document.querySelector(".ziffer3").innerHTML = "11.38 %";

  document.querySelector(".ziffer4").innerHTML = "128.9 kg CO2";

  document.querySelector(".chart").setAttribute("style", "height:" + "4.054" + "%");

}

window.addEventListener("load", function(){
  document.querySelector(".southamerica").addEventListener("click", myfunction3);
});


//Afrika//

function myfunction4(){
  document.querySelector("h1").innerHTML = "Carbon Dioxide Emissions in Africa";

  document.querySelector(".ziffer1").innerHTML = "1235.5";
  document.querySelector(".satz1").innerHTML = "Emission absolute of Africa in 2018";

  document.querySelector(".ziffer2").innerHTML = "3.97 %";
  document.querySelector(".ziffer3").innerHTML = "20.184 %";

  document.querySelector(".ziffer4").innerHTML = "207.5 kg CO2";

  document.querySelector(".chart").setAttribute("style", "height:" + "3.97" +"%");

}

window.addEventListener("load", function(){
  document.querySelector(".africa").addEventListener("click", myfunction4);
});


//Asien//

function myfunction5(){
  document.querySelector("h1").innerHTML = "Carbon Dioxide Emissions in Asia";

  document.querySelector(".ziffer1").innerHTML = "16274.1";
  document.querySelector(".satz1").innerHTML = "Emission absolute of Asia in 2018";

  document.querySelector(".ziffer2").innerHTML = "52.3 %";
  document.querySelector(".ziffer3").innerHTML = "25.623 %";

  document.querySelector(".ziffer4").innerHTML = "3319.4 CO2";

  document.querySelector(".chart").setAttribute("style", "height:" + "52.3" + "%");

}

window.addEventListener("load", function() {
  document.querySelector(".asia").addEventListener("click", myfunction5);
});


//Australien//

function myfunction6(){
  document.querySelector("h1").innerHTML = "Carbon Dioxide Emissions in Australia";

  document.querySelector(".ziffer1").innerHTML = "2100.5";
  document.querySelector(".satz1").innerHTML = "Emission absolute of Australia in 2018";

  document.querySelector(".ziffer2").innerHTML = "6.75 %";
  document.querySelector(".ziffer3").innerHTML = "0.375 %";

  document.querySelector(".ziffer4").innerHTML = "107.5 CO2";

  document.querySelector(".chart").setAttribute("style", "height:" + "6.75" + "%");
  
 
}

window.addEventListener("load", function(){
  document.querySelector(".australia").addEventListener("click", myfunction6);
});
