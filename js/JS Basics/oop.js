//Adding or removing properties from an object
//Objects in JavaScript are dynamic, meaning you can add or remove properties at any time.
//You can add a new property to an object by simply assigning a value to it.

function Circle(radius) {
  this.radius = radius; // Property
  this.draw = function () {
    console.log("dRAW A CIRCLE");
  };
}

const circle = new Circle(1);

//for adding  and deleting properties from an object, we can use the dot notation or bracket notation.
circle.color = "red"; // Adding a new property
circle["border"] = "2px solid black"; // Adding another property
circle.draw(); // Calling the method
// To delete a property, we can use the delete operator.
delete circle.border; // Deleting the border property
// We can also check if a property exists in an object using the in operator.
console.log("color" in circle); // true
console.log("border" in circle); // false
// We can also check if a property exists in an object using the hasOwnProperty method.
console.log(circle.hasOwnProperty("color")); // true
console.log(circle.hasOwnProperty("border")); // false

//To iterate over the properties of an object , we can use a for...in loop.
for (let key in circle) {
  console.log(key, circle[key]);
}

//Building a Stopwatch using OOP

function Stopwatch() {
  let startTime,
    endTime,
    running,
    duration = 0;

  this.start = function () {
    if (runnning) {
      throw new Error("Stopwatch has already started.");

      running = true;
      startTime = new Date();
    }
  };
  this.stop = function () {
    if (!running) {
      throw new Error("stopwatch is not running.");

      running = false;

      endtime = new Date();

      const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
      duration += seconds;
    }
  };

  this.reset = function () {
    startTime = null;
    endTime = null;
    running = false;
    duration = 0;
  };

  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
  });
}

//Prototypical Inheritance
function Shape(){

}

Shape.prototype.duplicate = function() {
  console.log("Duplicate");
};

function Circle(radius){
    this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);

Circle.prototype.draw = function(){
    console.log("Draw");
}

// polymorphism

function Shape(){

}


Shape.prototype.duplicate = function() {
  console.log("Duplicate");
};

function Circle(radius){

}

extend (Circle, Shape);

