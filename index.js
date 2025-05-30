/* ===============
   CASE FILTERS
=================*/
document.getElementById("uppercase-filter").addEventListener("click", function() {
    toggleLetterCase('uppercase');
})

document.getElementById("lowercase-filter").addEventListener("click", function() {
    toggleLetterCase('lowercase');
})
// Add 'both' filter to show both at the same time   


function toggleLetterCase(caseType) {
    var letterButtons = document.querySelectorAll('.letter');

    letterButtons.forEach(function(button) {
        var letter = button.innerHTML;

        switch(caseType) {
            case 'uppercase':
                button.innerHTML = letter.toUpperCase();
                break;
            case 'lowercase':
                button.innerHTML = letter.toLowerCase();
                break;
            // Add 'both' filter to show both at the same time   
        }
    })
}


/* ===============
    BUTTON  
EVENT LISTENERS
=================*/
// Event Listener for detecting button press for letter buttons.
for (var i=0; i<document.querySelectorAll(".letter").length; i++) {
    document.querySelectorAll(".letter")[i].addEventListener("click", function() { 
        var buttonInnerHTML= this.innerHTML; 
        makeSoundByKey(buttonInnerHTML); 
        buttonAnimationKey(buttonInnerHTML); 
    });
}

// Event Listener for detecting keyboard press for letter buttons. 
document.addEventListener("keydown", function(event) {
    var key = event.key.toUpperCase();
    if (key >= 'A' && key <= 'Z') {
    makeSoundByKey(key); 
    buttonAnimationKey(key); 
    }
  });
  

// Event Listener for detecting button press for phonic sounds.
document.addEventListener("DOMContentLoaded", function() {
    for (var i = 0; i < document.querySelectorAll(".phoneme").length; i++) {
    document.querySelectorAll(".phoneme")[i].addEventListener("click", function(event) { 
        event.preventDefault(); 
        event.stopPropagation(); 

        var letter = this.getAttribute("data-letter");
        makeSoundByLetter(letter);
        buttonAnimationLetter(letter);
    });
}
});


/* ===============
   LETTER SOUND 
    ASSIGNMENT
=================*/
// Function that assigns a sound to the corresponding big letter button. 
function makeSoundByKey(key) {
    key = key.toUpperCase();
    const validKeys = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (validKeys.includes(key)) {
        const SoundKey= new Audio(`sounds/${key.toLowerCase()}.mp3`); 
        SoundKey.play();
    }
}


// Function that assigns a sound to the corresponding letter phoneme button
function makeSoundByLetter(letter) {
    letter = letter.toUpperCase();
    const validLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (validLetters.includes(letter)) {
        SoundLetter= new Audio('sounds/Phonemes/a.mp3'); 
        SoundLetter.play();
    }
}

/* ===============
 BUTTON ANIMATION
=================*/
// Function that adds visual animation to each big letter button. 
function buttonAnimationKey(currentKey) {
    currentKey = currentKey.toUpperCase();
    var activeButton=document.querySelector("." + currentKey);
    if (activeButton) {
        activeButton.classList.add("pressed");
        setTimeout(function() {
            activeButton.classList.remove("pressed");
        }, 100);
    }
}

// Function that adds visual animation to each phoneme button. 
function buttonAnimationLetter(currentLetter) {
    // Check if there is a phoneme button for the current letter and apply animation.
    var phonemeButton = document.querySelector(`button[data-letter='${currentLetter}']`);
    if (phonemeButton) {
        phonemeButton.classList.add("pressed");
        void phonemeButton.offsetWidth;
        phonemeButton.classList.add("pressed");
        setTimeout(function() {
            phonemeButton.classList.remove("pressed");
        }, 100);
    }
}


/* ===============
 MODAL ANIMATION
=================*/
// Get modal, close button, and modal button elements
var modal = document.getElementById("videoModal");
var closeButton = document.getElementsByClassName("close")[0];
var modalBtns = document.querySelectorAll(".modalBtn");
var videoPlayer = document.getElementById("videoPlayer");
var videoSource = document.getElementById("videoSource");

// Open the modal when a modal button is clicked
modalBtns.forEach(function(btn) {
  btn.addEventListener("click", function() {
    var videoFile = this.getAttribute("data-video");
    videoSource.src = videoFile; // Set the video source dynamically
    videoPlayer.load(); // Reload the video player to reflect the new video source
    modal.style.display = "block"; 
  });
});

// Close the modal when the close button is clicked
closeButton.addEventListener("click", function() {
  modal.style.display = "none"; 
  videoPlayer.pause(); 
  videoPlayer.currentTime = 0; 
});

// Close the modal if the user clicks anywhere outside the modal
window.addEventListener("click", function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
    videoPlayer.pause();
    videoPlayer.currentTime = 0;
  }
});