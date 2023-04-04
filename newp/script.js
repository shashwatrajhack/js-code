let xp = 0;
let health = 100;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"];


const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterNameText = document.querySelector("#monsterNameText");
const monsterHealthText = document.querySelector("monsterHealthText");

const locations = [
  {
    name:"town square",
    "button text" : ["Go to store","Go to cave","Fight dragon"],
    "button function":[goStore,goCave,fightDragon],
    text:"you are in the town square you see a text that shows \"store\"."
  
  },
  {
     name:"store",
    "button text" : ["buy ten health(10 gold)","buy weapon(20 gold)","go to town square"],
    "button function":[buyHealth,buyWeapon,goTown],
    text:"you are in the store."
  },
  {
     name:"cave",
    "button text" : ["fight slime","fight fanged beast","go to town square"],
    "button function":[fightSlime,fightBeast,goTown],
    text:"you are in the store."
  }
]

button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

function update(locations){
  button1.innerText = locations["button text"][0];
  button2.innerText = locations["button text"][1];
  button3.innerText = locations["button text"][2];
  button1.onclick = locations["button function"][0];
  button2.onclick = locations["button function"][1];
  button3.onclick = locations["button function"][2];
  text.innerText = locations.text;
  
}

function goTown(){
   update(locations[0])
  
}

function goStore(){
   update(locations[1]);
}

function goCave(){
  
}

function fightDragon(){
  
}

function buyHealth(){
  
}

function buyWeapon(){
  
}

function fightSlime(){
  
}

function fightBeast(){
  
}



