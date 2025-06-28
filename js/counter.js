function onButtonPress(){
    const currentValue = document.getElementById("btn").innerText;
    console.log(currentValue.split(" "));
    const currentCounter = currentValue.split(" ")[1];
    const newCounter = parseInt(currentCounter) + 1;
    document.getElementById("btn").innerText = "Counter: " + newCounter;
}