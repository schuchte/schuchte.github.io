var emissionsafrica2018 :number = 1235.5;
var emissionssouthamerica2018 :number = 1261.5;
var emissionseurope2018 :number = 4209.3;
var emissionsnorthamerica2018 :number = 6035.6;
var emissionsasia2018 :number = 16274.1;
var emissionsaustralia2018 :number = 2100.5;

var emissionsgesamt2018 :number = (emissionsafrica2018+emissionsnorthamerica2018+emissionseurope2018+emissionssouthamerica2018+emissionsasia2018+emissionsaustralia2018)

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
