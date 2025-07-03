//Events -- The change in the state of an object is called an event
//Events are actions that occur in the browser, such as clicks, key presses, or page loads.
//Events can be used to trigger JavaScript code, allowing developers to create interactive web applications.
//Events are fired to notify code of "intersting changes" that may affect the code's execution.

//Event object
//The event object is a JavaScript object that contains information about the event that occurred.
//It is automatically passed to event handlers when an event occurs.
//All event handlers have access to the event object's properties and mesthods.


// let modeBtn = document.querySelector("#mode");
// let currMode = "light";

// modeBtn.addEventListener("click",() => {
//     if(currMode === "light"){
//         currMode = "dark";
//         document.querySelector("body").style.backgroundColor = "black";
//     }else{
//         currMode = "light";
//         document.querySelector("body").style.backgroundColor = "white";
//     }
//     console.log("Current mode is: " + currMode);
// })

//Event Bubbling and Capturing
//Event Bubbling is a way of event propagation in the DOM where the event starts from the target element and bubbles up to the root element.
//Event Capturing is a way of event propagation in the DOM where the event starts from the root element and captures down to the target element.
//Event Bubbling is the default way of event propagation in the DOM.


//Event delegation
//Event delegation is a technique in which a single event listener is added to a parent element instead of adding event listeners to each child element.
//This allows for better performance and easier management of event listeners, especially when dealing with dynamic content.

document.querySelector("#categories").addEventListener("click",(e)=>{
    //console.log("Category clicked");
    console.log(e.target);
})

//Bind,call,apply
//Bind, call, and apply are methods in JavaScript that allow you to set the value of 'this' in a function.
//Bind creates a new function with a specific 'this' value and optional arguments.
//Call and apply immediately invoke the function with a specific 'this' value and arguments.
// Call takes arguments as a comma-separated list, while apply takes arguments as an array.
