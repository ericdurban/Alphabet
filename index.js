// Event Listener for detecting button press and triggers functions.
for (var i=0; i<document.querySelectorAll(".letter").length; i++) {
    document.querySelectorAll(".letter")[i].addEventListener("click", function() { 
    
        var buttonInnerHTML= this.innerHTML; // Stores a corresponding letter(HTML) with each clicked button 
    
        makeSoundByKey(buttonInnerHTML); // Plays the sound for each clicked button based on the letter(HTML)

        buttonAnimation(buttonInnerHTML); // Triggers button animation for each clicked button based on the letter(HTML)
    });
}

for (var i=0; i<document.querySelectorAll(".Phenome").length; i++) {
    document.querySelectorAll(".Phenome")[i].addEventListener("click", function() { 
        var letter = event.target.getAttribute("data-letter");
        
        makeSoundByLetter(letter);
    });
}

// Event Listener for detecting keyboard press and triggers same functions. 
document.addEventListener("keydown", function(event) {
  
  makeSoundByKey(event.key); // Plays sound for each assigned key on keyboard pressed

  buttonAnimation(event.key); // Triggers button animation for each assigned key on keyboard pressed
});

function makeSoundByLetter(letter) {
    switch(letter) {
        case "A": 
            var Letter= new Audio('sounds/Phenomes/a.mp3'); Letter.play();
            break;
        case "B":
            var Letter= new Audio('sounds/Phenomes/b.mp3'); Letter.play(); 
            break;
        case "C":
            var Letter= new Audio('sounds/Phenomes/c.mp3'); Letter.play(); 
            break;
        case "D":
            var Letter= new Audio('sounds/Phenomes/d.mp3'); Letter.play(); 
            break;
        case "E":
            var Letter= new Audio('sounds/Phenomes/e.mp3'); Letter.play(); 
            break;
        case "F":
            var Letter= new Audio('sounds/Phenomes/f.mp3'); Letter.play(); 
            break;
        case "G":
            var Letter= new Audio('sounds/Phenomes/g.mp3'); Letter.play(); 
            break;
        case "H":
            var Letter= new Audio('sounds/Phenomes/h.mp3'); Letter.play(); 
            break;
        case "I":
            var Letter= new Audio('sounds/Phenomes/i.mp3'); Letter.play(); 
            break;
        case "J":
            var Letter= new Audio('sounds/Phenomes/j.mp3'); Letter.play(); 
            break;
        case "K":
            var Letter= new Audio('sounds/Phenomes/k.mp3'); Letter.play(); 
            break;
        case "L":
            var Letter= new Audio('sounds/Phenomes/l.mp3'); Letter.play(); 
            break;
        case "M":
            var Letter= new Audio('sounds/Phenomes/m.mp3'); Letter.play(); 
            break;
        case "N":
            var Letter= new Audio('sounds/Phenomes/n.mp3'); Letter.play(); 
            break;
        case "O":
            var Letter= new Audio('sounds/Phenomes/o.mp3'); Letter.play(); 
            break;
        case "P":
            var Letter= new Audio('sounds/Phenomes/p.mp3'); Letter.play(); 
            break;
        case "Q":
            var Letter= new Audio('sounds/Phenomes/q.mp3'); Letter.play(); 
            break;
        case "R":
            var Letter= new Audio('sounds/Phenomes/r.mp3'); Letter.play(); 
            break;
        case "S":
            var Letter= new Audio('sounds/Phenomes/s.mp3'); Letter.play(); 
            break;
        case "T":
            var Letter= new Audio('sounds/Phenomes/t.mp3'); Letter.play(); 
            break;
        case "U":
            var Letter= new Audio('sounds/Phenomes/u.mp3'); Letter.play(); 
            break;
        case "V":
            var Letter= new Audio('sounds/Phenomes/v.mp3'); Letter.play(); 
            break;
        case "W":
            var Letter= new Audio('sounds/Phenomes/w.mp3'); Letter.play(); 
            break;
        case "X":
            var Letter= new Audio('sounds/Phenomes/x.mp3'); Letter.play(); 
            break;
        case "Y":
            var Letter= new Audio('sounds/Phenomes/y.mp3'); Letter.play(); 
            break;
        case "Z":
            var Letter= new Audio('sounds/Phenomes/z.mp3'); Letter.play(); 
            break;
    }
}

// Function that assigns a sound to the corresponding letter/button. 
function makeSoundByKey(key) {
    switch (key) {
        case "A":
            var Key= new Audio('sounds/a.mp3'); Key.play(); 
            break;
        case "B":
            var Key= new Audio('sounds/b.mp3'); Key.play(); 
            break;
        case "C":
            var Key= new Audio('sounds/c.mp3'); Key.play(); 
            break;
        case "D":
            var Key= new Audio('sounds/d.mp3'); Key.play(); 
            break;
        case "E":
            var Key= new Audio('sounds/e.mp3'); Key.play(); 
            break;
        case "F":
            var Key= new Audio('sounds/f.mp3'); Key.play(); 
            break;
        case "G":
            var Key= new Audio('sounds/g.mp3'); Key.play(); 
            break;
        case "H":
            var Key= new Audio('sounds/h.mp3'); Key.play(); 
            break;
        case "I":
            var Key= new Audio('sounds/i.mp3'); Key.play(); 
            break;
        case "J":
            var Key= new Audio('sounds/j.mp3'); Key.play(); 
            break;
        case "K":
            var Key= new Audio('sounds/k.mp3'); Key.play(); 
            break;
        case "L":
            var Key= new Audio('sounds/l.mp3'); Key.play(); 
            break;
        case "M":
            var Key= new Audio('sounds/m.mp3'); Key.play(); 
            break;
        case "N":
            var Key= new Audio('sounds/n.mp3'); Key.play(); 
            break;
        case "O":
            var Key= new Audio('sounds/o.mp3'); Key.play(); 
            break;
        case "P":
            var Key= new Audio('sounds/p.mp3'); Key.play(); 
            break;
        case "Q":
            var Key= new Audio('sounds/q.mp3'); Key.play(); 
            break;
        case "R":
            var Key= new Audio('sounds/r.mp3'); Key.play(); 
            break;
        case "S":
            var Key= new Audio('sounds/s.mp3'); Key.play(); 
            break;
        case "T":
            var Key= new Audio('sounds/t.mp3'); Key.play(); 
            break;
        case "U":
            var Key= new Audio('sounds/u.mp3'); Key.play(); 
            break;
        case "V":
            var Key= new Audio('sounds/v.mp3'); Key.play(); 
            break;
        case "W":
            var Key= new Audio('sounds/w.mp3'); Key.play(); 
            break;
        case "X":
            var Key= new Audio('sounds/x.mp3'); Key.play(); 
            break;
        case "Y":
            var Key= new Audio('sounds/y.mp3'); Key.play(); 
            break;
        case "Z":
            var Key= new Audio('sounds/z.mp3'); Key.play(); 
            break;


        default:
            break;
}
}

// Function that adds visual animation to each letter/button. 
function buttonAnimation(currentkey) {
    var activeButton=document.querySelector("." + currentkey);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}