/*Buttons MP3-Sound*/
window.addEventListener("load", function () {
    document.querySelector("#button1").addEventListener("mousedown", function () { playSample("kick.mp3"); });
    document.querySelector("#button2").addEventListener("mousedown", function () { playSample("hihat.mp3"); });
    document.querySelector("#button3").addEventListener("mousedown", function () { playSample("snare.mp3"); });
    document.querySelector("#button4").addEventListener("mousedown", function () { playSample("laugh-1.mp3"); });
    document.querySelector("#button5").addEventListener("mousedown", function () { playSample("laugh-2.mp3"); });
    document.querySelector("#button6").addEventListener("mousedown", function () { playSample("F.mp3"); });
    document.querySelector("#button7").addEventListener("mousedown", function () { playSample("G.mp3"); });
    document.querySelector("#button8").addEventListener("mousedown", function () { playSample("A.mp3"); });
    document.querySelector("#button9").addEventListener("mousedown", function () { playSample("C.mp3"); });
    document.querySelector('#play').addEventListener("mousedown", StartBeat);
});
function playSample(MP3) {
    var sound = new Audio("assets/" + MP3);
    sound.play();
}
/*Playbutton Selfmade-Sound*/
function StartBeat() {
    var sound = setInterval(Snake, 300); /*alle 300 ms wird der Beat ausgeführt*/
    var index = 0; /*bei 0 fängt Index an --> mp3 hihat*/
    var Beat = ["assets/hihat.mp3", "assets/kick.mp3", "assets/kick.mp3", "assets/snare.mp3",]; /*der array (Beat) wurde festgelegt -->0,1,2,3*/
    function Snake() {
        var mySound = new Audio(Beat[index]);
        mySound.play();
        index += 1; /*Index wird immer +1 gerechnet, also 0,1,2,3, dann wenn index größer als 3 fängt er wieder bei 0 an*/
        if (index > 3)
            index = 0; /*fängt wieder bei Beat 0 an-->Loop*/
        console.log(Beat[index]); /*Array (Beat) wird in der Konsole angegeben*/
    }
    ;
}
;
//# sourceMappingURL=drumpad.js.map