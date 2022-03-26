var arrSound = ['assets/sounds/click1.mp3', 'assets/sounds/click2.mp3', 'assets/sounds/click4.mp3', 'assets/sounds/click5.mp3'];
var randomSound = Math.floor(Math.random() * arrSound.length);
 var audio = new Audio(arrSound[randomSound]);

  addEventListener("keydown", function() {
    var arrSound = ['assets/sounds/click1.mp3', 'assets/sounds/click2.mp3', 'assets/sounds/click4.mp3', 'assets/sounds/click5.mp3'];
    var randomSound = Math.floor(Math.random() * arrSound.length);
    var audio = new Audio(arrSound[randomSound]);
    audio.play();
  });

  
