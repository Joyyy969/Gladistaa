// trigger to play music in the background with sweetalert
const playButton = document.getElementById('playButton');
const audioPlayer = document.getElementById('audioPlayer');
const audio = document.getElementById('playButton');
                
                


playButton.addEventListener('click', () => {
  if (audioPlayer.paused) {
    audioPlayer.play();
    playButton.textContent = 'Pause';
  } else {
    audioPlayer.pause();
    playButton.textContent = 'Play';
  }
  
 
});

    document.getElementById('playButton').addEventListener('click', function() {
        document.getElementById('message').innerText = "Dengerin Dulu Lagunyaa Yaa";
    });
    document.getElementById('Button').addEventListener('click', function() {
     document.getElementById('message').innerText = "Gabakal Bisa Wleee"; 
     
})
