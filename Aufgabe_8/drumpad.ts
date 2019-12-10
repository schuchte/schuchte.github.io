
var Beat: string [] = ["hihat.mp3", "kick.mp3", "kick.mp3", "snare.mp3" ] ;
var record: boolean = false;
var sound;
var index: number = 0;

window.addEventListener("load", function (): void {

/*/
document.querySelector("#button1").addEventListener("mousedown", handlebutton);
/*/

document.querySelector("#button1").addEventListener("mousedown", function (): void {playSample("kick.mp3"); });
document.querySelector("#button2").addEventListener("mousedown", function (): void {playSample("hihat.mp3"); });
document.querySelector("#button3").addEventListener("mousedown", function (): void {playSample("snare.mp3"); });
document.querySelector("#button4").addEventListener("mousedown", function(): void {playSample("laugh-1.mp3"); });
document.querySelector("#button5").addEventListener("mousedown", function(): void {playSample("laugh-2.mp3"); });
document.querySelector("#button6").addEventListener("mousedown", function(): void {playSample("F.mp3"); });
document.querySelector("#button7").addEventListener("mousedown", function(): void {playSample("G.mp3"); });
document.querySelector("#button8").addEventListener("mousedown", function(): void {playSample("A.mp3"); });
document.querySelector("#button9").addEventListener("mousedown", function(): void {playSample("C.mp3"); });
document.querySelector("#play").addEventListener("mousedown", StartBeat);
document.querySelector("#record").addEventListener("click", Recordbeat);
document.querySelector("#delete").addEventListener("click", Deletebeat);
});  

function playSample (MP3: string): void {
  var sound: HTMLAudioElement = new Audio("assets/" + MP3);
  sound.play();  
  if (record == true) {
    Beat.push(MP3); /*am Ende von Array wir MP3 angehängt durch push--> Beats werden aufgenommen, da Record geklickt*/
} 
}

/*Playbutton Selfmade-Sound*/

function StartBeat(): void {
  var index: number = 0;
  /*Music off*/
  if ( document.getElementById("play").classList.contains("fa-play") ) {
    document.getElementById("play").classList.remove("fa-play");
    document.getElementById("play").classList.add("fa-pause");
    sound = setInterval(Snake, 300); /*Intervall (mit dem Namen sound) wird gesetzt -->Funktion Snake spielt ab*/
    record = false; /*Record ist false also wird der Beat nicht aufgenommen*/
    console.log("music off"); /*Konsole zeigt ,,music off'' an*/

    /*Music on*/
  } else {
    document.getElementById("play").classList.remove("fa-pause");
    document.getElementById("play").classList.add("fa-play");
    clearInterval(sound); /*Sound wird wieder gelöscht*/
    console.log("music on");
  }  }

function Snake (): void {
    playSample(Beat[index]);
    index += 1;
    if (index > (Beat.length - 1)) index = 0; 
    console.log(Beat [index] );
   }  

/*Deleting Beat*/

function Deletebeat (): void {
    Beat.length = 0; /*Array ist gleich 0--> gibt es also nicht mehr oder Beat = []*/
    console.log("This is deleting the Beat");
}

/*Recording Beat*/
function Recordbeat (): void {
    record = true; /*Wenn record=true dann wird aufgenommen*/
    console.log("This is recording a new Beat");
}

  