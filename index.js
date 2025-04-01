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
    if (key >= 'a' && key <= 'z') {
    makeSoundByKey(event.key); 
    buttonAnimation(event.key); 
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
    switch (key) {
        case "A":
            var SoundKey= new Audio('sounds/a.mp3'); SoundKey.play(); 
            break;
        case "B":
            var SoundKey= new Audio('sounds/b.mp3'); SoundKey.play(); 
            break;
        case "C":
            var SoundKey= new Audio('sounds/c.mp3'); SoundKey.play(); 
            break;
        case "D":
            var SoundKey= new Audio('sounds/d.mp3'); SoundKey.play(); 
            break;
        case "E":
            var SoundKey= new Audio('sounds/e.mp3'); SoundKey.play(); 
            break;
        case "F":
            var SoundKey= new Audio('sounds/f.mp3'); SoundKey.play(); 
            break;
        case "G":
            var SoundKey= new Audio('sounds/g.mp3'); SoundKey.play(); 
            break;
        case "H":
            var SoundKey= new Audio('sounds/h.mp3'); SoundKey.play(); 
            break;
        case "I":
            var SoundKey= new Audio('sounds/i.mp3'); SoundKey.play(); 
            break;
        case "J":
            var SoundKey= new Audio('sounds/j.mp3'); SoundKey.play(); 
            break;
        case "K":
            var SoundKey= new Audio('sounds/k.mp3'); SoundKey.play(); 
            break;
        case "L":
            var SoundKey= new Audio('sounds/l.mp3'); SoundKey.play(); 
            break;
        case "M":
            var SoundKey= new Audio('sounds/m.mp3'); SoundKey.play(); 
            break;
        case "N":
            var SoundKey= new Audio('sounds/n.mp3'); SoundKey.play(); 
            break;
        case "O":
            var SoundKey= new Audio('sounds/o.mp3'); SoundKey.play(); 
            break;
        case "P":
            var SoundKey= new Audio('sounds/p.mp3'); SoundKey.play(); 
            break;
        case "Q":
            var SoundKey= new Audio('sounds/q.mp3'); SoundKey.play(); 
            break;
        case "R":
            var SoundKey= new Audio('sounds/r.mp3'); SoundKey.play(); 
            break;
        case "S":
            var SoundKey= new Audio('sounds/s.mp3'); SoundKey.play(); 
            break;
        case "T":
            var SoundKey= new Audio('sounds/t.mp3'); SoundKey.play(); 
            break;
        case "U":
            var SoundKey= new Audio('sounds/u.mp3'); SoundKey.play(); 
            break;
        case "V":
            var SoundKey= new Audio('sounds/v.mp3'); SoundKey.play(); 
            break;
        case "W":
            var SoundKey= new Audio('sounds/w.mp3'); SoundKey.play(); 
            break;
        case "X":
            var SoundKey= new Audio('sounds/x.mp3'); SoundKey.play(); 
            break;
        case "Y":
            var SoundKey= new Audio('sounds/y.mp3'); SoundKey.play(); 
            break;
        case "Z":
            var SoundKey= new Audio('sounds/z.mp3'); SoundKey.play(); 
            break;
}
}

// Function that assigns a sound to the corresponding letter phoneme button
function makeSoundByLetter(letter) {
    switch(letter) {
        case "A": 
            var SoundLetter= new Audio('sounds/Phonemes/a.mp3'); SoundLetter.play();
            break;
        case "B":
            var SoundLetter= new Audio('sounds/Phonemes/b.mp3'); SoundLetter.play(); 
            break;
        case "C":
            var SoundLetter= new Audio('sounds/Phonemes/c.mp3'); SoundLetter.play(); 
            break;
        case "D":
            var SoundLetter= new Audio('sounds/Phonemes/d.mp3'); SoundLetter.play(); 
            break;
        case "E":
            var SoundLetter= new Audio('sounds/Phonemes/e.mp3'); SoundLetter.play(); 
            break;
        case "F":
            var SoundLetter= new Audio('sounds/Phonemes/f.mp3'); SoundLetter.play(); 
            break;
        case "G":
            var SoundLetter= new Audio('sounds/Phonemes/g.mp3'); SoundLetter.play(); 
            break;
        case "H":
            var SoundLetter= new Audio('sounds/Phonemes/h.mp3'); SoundLetter.play(); 
            break;
        case "I":
            var SoundLetter= new Audio('sounds/Phonemes/i.mp3'); SoundLetter.play(); 
            break;
        case "J":
            var SoundLetter= new Audio('sounds/Phonemes/j.mp3'); SoundLetter.play(); 
            break;
        case "K":
            var SoundLetter= new Audio('sounds/Phonemes/k.mp3'); SoundLetter.play(); 
            break;
        case "L":
            var SoundLetter= new Audio('sounds/Phonemes/l.mp3'); SoundLetter.play(); 
            break;
        case "M":
            var SoundLetter= new Audio('sounds/Phonemes/m.mp3'); SoundLetter.play(); 
            break;
        case "N":
            var SoundLetter= new Audio('sounds/Phonemes/n.mp3'); SoundLetter.play(); 
            break;
        case "O":
            var SoundLetter= new Audio('sounds/Phonemes/o.mp3'); SoundLetter.play(); 
            break;
        case "P":
            var SoundLetter= new Audio('sounds/Phonemes/p.mp3'); SoundLetter.play(); 
            break;
        case "Q":
            var SoundLetter= new Audio('sounds/Phonemes/q.mp3'); SoundLetter.play(); 
            break;
        case "R":
            var SoundLetter= new Audio('sounds/Phonemes/r.mp3'); SoundLetter.play(); 
            break;
        case "S":
            var SoundLetter= new Audio('sounds/Phonemes/s.mp3'); SoundLetter.play(); 
            break;
        case "T":
            var SoundLetter= new Audio('sounds/Phonemes/t.mp3'); SoundLetter.play(); 
            break;
        case "U":
            var SoundLetter= new Audio('sounds/Phonemes/u.mp3'); SoundLetter.play(); 
            break;
        case "V":
            var SoundLetter= new Audio('sounds/Phonemes/v.mp3'); SoundLetter.play(); 
            break;
        case "W":
            var SoundLetter= new Audio('sounds/Phonemes/w.mp3'); SoundLetter.play(); 
            break;
        case "X":
            var SoundLetter= new Audio('sounds/Phonemes/x.mp3'); SoundLetter.play(); 
            break;
        case "Y":
            var SoundLetter= new Audio('sounds/Phonemes/y.mp3'); SoundLetter.play(); 
            break;
        case "Z":
            var SoundLetter= new Audio('sounds/Phonemes/z.mp3'); SoundLetter.play(); 
            break;
    }
}


/* ===============
 BUTTON ANIMATION
=================*/
// Function that adds visual animation to each big letter button. 
function buttonAnimationKey(currentkey) {
    currentkey = currentkey.toUpperCase();
    var activeButton=document.querySelector("." + currentkey);
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
    modal.style.display = "block"; // Show the modal
  });
});

// Close the modal when the close button is clicked
closeButton.addEventListener("click", function() {
  modal.style.display = "none"; // Hide the modal
  videoPlayer.pause(); // Pause the video
  videoPlayer.currentTime = 0; // Reset the video to the beginning
});

// Close the modal if the user clicks anywhere outside the modal
window.addEventListener("click", function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
    videoPlayer.pause();
    videoPlayer.currentTime = 0;
  }
});