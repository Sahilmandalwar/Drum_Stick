var button = document.querySelectorAll("button.drum");
for(var i = 0; i < button.length; i++){
    button[i].addEventListener("click",function(){
        makeSound(this.textContent);
        animateButton(this.textContent);  //this refer to html element
    });  
}

document.addEventListener("keydown",function(event){
    makeSound(event.key);
    animateButton(event.key);
});

function makeSound(key){
    switch(key){
        case "j":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;
        case "k":
            var kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;
        
        case "l":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;
        case "w":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
          
        case "a":
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
             var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;
        default: 
            console.log("something unexpected");
    }
}

function animateButton(key){
    var butttonToanimate = document.querySelector("."+key);
    butttonToanimate.classList.add("pressed");
    setTimeout(function(){   //see the documentation for the setTimeOut function 
        butttonToanimate.classList.remove("pressed");
    },100);
}  

// the above function animateButton use the animate the button

