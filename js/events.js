//Events -- The change in the state of an object is called an event
//Events are actions that occur in the browser, such as clicks, key presses, or page loads.
//Events can be used to trigger JavaScript code, allowing developers to create interactive web applications.
//Events are fired to notify code of "intersting changes" that may affect the code's execution.

//Event object
//The event object is a JavaScript object that contains information about the event that occurred.
//It is automatically passed to event handlers when an event occurs.
//All event handlers have access to the event object's properties and mesthods.


let modeBtn = document.querySelector("#mode");
let currMode = "light";

modeBtn.addEventListener("click",() => {
    if(currMode === "light"){
        currMode = "dark";
        document.querySelector("body").style.backgroundColor = "black";
    }else{
        currMode = "light";
        document.querySelector("body").style.backgroundColor = "white";
    }
    console.log("Current mode is: " + currMode);
})

