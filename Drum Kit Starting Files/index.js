// var numberOfDrumButtons = document.querySelectorAll(".drum").length;

// for (var i = 0; i < numberOfDrumButtons; i++) {

//     document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        
//         var tom = new Audio("sounds/tom-1.mp3");
//         tom.play();
//     })
// }

// document.querySelector("button").addEventListener("click", handleClick);

// function handleClick() {
//     alert("I got clicked!");
// }

// document.querySelector("button").addEventListener("click", function () {
//     alert("I got clicked!");

//     /** what you want to happen when button is clicked */

// });

/** to make an 'anonymous function', replace listener with the actual function without a name, instead of having seperate named function. 
 
document.querySelector("button").addEventListener("click", function () {
    alert("I got clicked!");
});

*/
// one way to carry this out is to use a 'for each' -- 
// document.querySelectorAll('.drum').forEach(item => {
//   item.addEventListener('click', event => {
//     alert("i got clicked")
//   })
// })

// Another way is to use a for loop to add the function onto each button seperately -
// var numberOfDrumButtons = document.querySelectorAll(".drum").length;
// for (var i = 0; i < numberOfDrumButtons; i++) {
//     document.querySelectorAll(".drum")[i].addEventListener("click", function () {
//         alert("I got clicked!");
//     })
// }

/** here, i = 7 (using the .length)
        
        querySelectorAll(".drum")[i] - causes the function to loop through and add the event listener 7 times
        until all drum buttons have the event listener added
        If you only used querySelector it would stop at the first button
        If you want to select from the array that is the number of drum buttons, you have to specifiy
            which buttons from the array. ie - document.querySelectorAll(".drum")[0] = <button class="w drum">w</button>
*/

// var numberOfDrumButtons = document.querySelectorAll(".drum").length;

// for (var i = 0; i < numberOfDrumButtons; i++) {

//     document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        
//     console.log(this.innerHTML);
//      this.style.color = "white";
//     })
// }


// detecting button press -

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);
});
}

// detecting keyboard press -

document.addEventListener("keydown", function(event) {
    
    makeSound(event.key);

    buttonAnimation(event.key);

})


function makeSound(key) {

    switch (key) {
    case "a":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;
    
    case "s":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;

    case "d":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;
    
    case "f":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;
    
    case "j":
        var kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
        break;
    
    case "k":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;

    case "l":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;

    default: console.log(buttonInnerHTML);
}
}

function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 150);

}