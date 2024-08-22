document.addEventListener('DOMContentLoaded', function() {
    const audioPlayer = document.getElementById('audio');
    const videoPlayer = document.getElementById('video');
    const playButton = document.getElementById('play');
    const pauseButton = document.getElementById('pause');
    const stopButton = document.getElementById('stop');
    const quitButton = document.getElementById('quit');

    let currentMedia = null; // This will hold the currently selected media player (audio or video)

    // Function to reset media to its initial state
    function resetMedia() {
        if (currentMedia) {
            currentMedia.pause();
            currentMedia.currentTime = 0;
        }
    }

    // Play button functionality
    playButton.addEventListener('click', function() {
        if (currentMedia) {
            currentMedia.play();
        }
    });

    // Pause button functionality
    pauseButton.addEventListener('click', function() {
        if (currentMedia) {
            currentMedia.pause();
        }
    });

    // Stop button functionality
    stopButton.addEventListener('click', resetMedia);

    // Quit button functionality
    quitButton.addEventListener('click', function() {
        if (confirm('Êtes-vous sûr de vouloir quitter ?')) {
            window.close(); // Note: This will not work in some browsers if the script did not open the window
        }
    });

    // Example of how to set the current media. This part needs to be adapted based on how you decide which media (audio or video) to play.
    // For demonstration, let's assume we're playing a video.
    currentMedia = videoPlayer;
    // To play an audio file, you would set it like this:
    // currentMedia = audioPlayer;

    // Here you would also include the logic to load media files into the audioPlayer or videoPlayer elements.
});