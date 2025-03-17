// Event Listener for detecting button press and triggers functions.
for (var i=0; i<document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() { 
    
        var buttonInnerHTML= this.innerHTML; // Stores a corresponding letter(HTML) with each clicked button 
    
        makeSound(buttonInnerHTML); // Plays the sound for each clicked button based on the letter(HTML)

        buttonAnimation(buttonInnerHTML); // Triggers button animation for each clicked button based on the letter(HTML)
    });

}

// Event Listener for detecting keyboard press and triggers same functions. 
document.addEventListener("keydown", function(event) {
  
  makeSound(event.key); // Plays sound for each assigned key on keyboard pressed

  buttonAnimation(event.key); // Triggers button animation for each assigned key on keyboard pressed
});


// Function that assigns a sound to the corresponding letter/button. 
function makeSound(key) {
    switch (key) {
        case "w":
            var crash= new Audio('sounds/crash.mp3'); crash.play(); 
            break;
        case "a":
            var kick= new Audio('sounds/kick-bass.mp3'); kick.play(); 
            break;
        case "s":
            var snare= new Audio('sounds/snare.mp3'); snare.play(); 
            break;
        case "d":
            var tom1= new Audio('sounds/tom-1.mp3'); tom1.play(); 
            break;
        case "j":
            var tom2= new Audio('sounds/tom-2.mp3'); tom2.play(); 
            break;
        case "k":
            var tom3= new Audio('sounds/tom-3.mp3'); tom3.play(); 
            break;
        case "l":
            var tom4= new Audio('sounds/tom-4.mp3'); tom4.play(); 
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