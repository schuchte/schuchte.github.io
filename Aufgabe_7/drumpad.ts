/*Buttons MP3-Sound*/

window.addEventListener("load", function() {

document.querySelector("#button1").addEventListener("mousedown", function(){playSample("kick.mp3");});
document.querySelector("#button2").addEventListener("mousedown", function(){playSample("hihat.mp3");});
document.querySelector("#button3").addEventListener("mousedown", function(){playSample("snare.mp3");});
document.querySelector("#button4").addEventListener("mousedown", function(){playSample("laugh-1.mp3");});
document.querySelector("#button5").addEventListener("mousedown", function(){playSample("laugh-2.mp3");});
document.querySelector("#button6").addEventListener("mousedown", function(){playSample("F.mp3");});
document.querySelector("#button7").addEventListener("mousedown", function(){playSample("G.mp3");});
document.querySelector("#button8").addEventListener("mousedown", function(){playSample("A.mp3");});
document.querySelector("#button9").addEventListener("mousedown", function(){playSample("C.mp3");});
document.querySelector('#play').addEventListener("mousedown", StartBeat);
})


function playSample(MP3: string)  {
  var sound:HTMLAudioElement = new Audio("assets/" + MP3);
  sound.play();   

  }


/*Playbutton Selfmade-Sound*/

function StartBeat () {
  var sound = setInterval(Snake, 300); 
  var index:number = 0;
  var Beat: string [] = ["assets/hihat.mp3", "assets/kick.mp3","assets/kick.mp3", "assets/snare.mp3",];

  function Snake (){
      var mySound:HTMLAudioElement = new Audio(Beat [index]);
      mySound.play();
      index += 1;
      if (index>3) index=0; 
      console.log(Beat [index] );
      
  };
};
