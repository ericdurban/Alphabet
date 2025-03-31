// Event Listener for detecting button press and triggers functions.
for (var i=0; i<document.querySelectorAll(".letter").length; i++) {
    document.querySelectorAll(".letter")[i].addEventListener("click", function() { 
        var buttonInnerHTML= this.innerHTML; // Stores a corresponding letter(HTML) with each clicked button 
        makeSoundByKey(buttonInnerHTML); // Plays the sound for each clicked button based on the letter(HTML)
        buttonAnimationKey(buttonInnerHTML); // Triggers button animation for each clicked button based on the letter(HTML)
    });
}

document.addEventListener("DOMContentLoaded", function() {
    for (var i = 0; i < document.querySelectorAll(".phoneme").length; i++) {
    document.querySelectorAll(".phoneme")[i].addEventListener("click", function(event) { 
        event.preventDefault(); // Prevent any default action from happening.
        event.stopPropagation(); 

        var letter = event.target.getAttribute("data-letter");
        makeSoundByLetter(letter);
        buttonAnimationLetter(letter); // Now triggering button animation for the "phoneme" button as well.
    });
}
});

// Event Listener for detecting keyboard press and triggers same functions. 
document.addEventListener("keydown", function(event) {
  var key = event.key.toUpperCase();
  if (key >= 'a' && key <= 'z') {
  makeSoundByKey(event.key); // Plays sound for each assigned key on keyboard pressed
  buttonAnimation(event.key); // Triggers button animation for each assigned key on keyboard pressed
  }
});

// Function that assigns a sound to the corresponding letter phoneme button. 
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

function makeSoundByLetter(letter) {
    switch(letter) {
        case "A": 
            var SoundLetter= new Audio('sounds/phonemes/a.mp3'); SoundLetter.play();
            break;
        case "B":
            var SoundLetter= new Audio('sounds/phonemes/b.mp3'); SoundLetter.play(); 
            break;
        case "C":
            var SoundLetter= new Audio('sounds/phonemes/c.mp3'); SoundLetter.play(); 
            break;
        case "D":
            var SoundLetter= new Audio('sounds/phonemes/d.mp3'); SoundLetter.play(); 
            break;
        case "E":
            var SoundLetter= new Audio('sounds/phonemes/e.mp3'); SoundLetter.play(); 
            break;
        case "F":
            var SoundLetter= new Audio('sounds/phonemes/f.mp3'); SoundLetter.play(); 
            break;
        case "G":
            var SoundLetter= new Audio('sounds/phonemes/g.mp3'); SoundLetter.play(); 
            break;
        case "H":
            var SoundLetter= new Audio('sounds/phonemes/h.mp3'); SoundLetter.play(); 
            break;
        case "I":
            var SoundLetter= new Audio('sounds/phonemes/i.mp3'); SoundLetter.play(); 
            break;
        case "J":
            var SoundLetter= new Audio('sounds/phonemes/j.mp3'); SoundLetter.play(); 
            break;
        case "K":
            var SoundLetter= new Audio('sounds/phonemes/k.mp3'); SoundLetter.play(); 
            break;
        case "L":
            var SoundLetter= new Audio('sounds/phonemes/l.mp3'); SoundLetter.play(); 
            break;
        case "M":
            var SoundLetter= new Audio('sounds/phonemes/m.mp3'); SoundLetter.play(); 
            break;
        case "N":
            var SoundLetter= new Audio('sounds/phonemes/n.mp3'); SoundLetter.play(); 
            break;
        case "O":
            var SoundLetter= new Audio('sounds/phonemes/o.mp3'); SoundLetter.play(); 
            break;
        case "P":
            var SoundLetter= new Audio('sounds/phonemes/p.mp3'); SoundLetter.play(); 
            break;
        case "Q":
            var SoundLetter= new Audio('sounds/phonemes/q.mp3'); SoundLetter.play(); 
            break;
        case "R":
            var SoundLetter= new Audio('sounds/phonemes/r.mp3'); SoundLetter.play(); 
            break;
        case "S":
            var SoundLetter= new Audio('sounds/phonemes/s.mp3'); SoundLetter.play(); 
            break;
        case "T":
            var SoundLetter= new Audio('sounds/phonemes/t.mp3'); SoundLetter.play(); 
            break;
        case "U":
            var SoundLetter= new Audio('sounds/phonemes/u.mp3'); SoundLetter.play(); 
            break;
        case "V":
            var SoundLetter= new Audio('sounds/phonemes/v.mp3'); SoundLetter.play(); 
            break;
        case "W":
            var SoundLetter= new Audio('sounds/phonemes/w.mp3'); SoundLetter.play(); 
            break;
        case "X":
            var SoundLetter= new Audio('sounds/phonemes/x.mp3'); SoundLetter.play(); 
            break;
        case "Y":
            var SoundLetter= new Audio('sounds/phonemes/y.mp3'); SoundLetter.play(); 
            break;
        case "Z":
            var SoundLetter= new Audio('sounds/phonemes/z.mp3'); SoundLetter.play(); 
            break;
    }
}

document.getElementById("uppercase-filter").addEventListener("click", function() {
    toggleLetterCase('uppercase');
})

document.getElementById("lowercase-filter").addEventListener("click", function() {
    toggleLetterCase('lowercase');
})
document.getElementById("both-filter").addEventListener("click", function() {
    toggleLetterCase('both');
})

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
            case 'both':
                button.innerHTML = letter;
                break;       
        }
    })
}


// Function that adds visual animation to each letter/button. 
function buttonAnimationKey(currentkey) {
    currentkey = currentkey.toUpperCase();
    var activeButton=document.querySelector("." + currentkey);
    // If the letter button is clicked, we apply animation to it.
    if (activeButton) {
        activeButton.classList.add("pressed");
        setTimeout(function() {
            activeButton.classList.remove("pressed");
        }, 100);
    }
}

function buttonAnimationLetter(currentLetter) {
    // Check if there is a phoneme button for the current letter and apply animation.
    var phonemeButton = document.querySelector(`button[data-letter='${currentLetter}']`);
    if (phonemeButton) {
        phonemeButton.classList.add("pressed");
        void phonemeButton.offsetWidth;  // Trigger reflow to reset animation
        phonemeButton.classList.add("pressed");

        setTimeout(function() {
            phonemeButton.classList.remove("pressed");
        }, 100);
    }
}