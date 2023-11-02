/*
Filename: advanced_game_logic.js

Description: 
This code implements a complex game logic for a text-based adventure game called "Mystery of Magic". 
The player explores a magical world, solves puzzles, battles monsters, and interacts with various characters.

Please note that this code is simplified for demonstration purposes and does not include all possible game features.

Author: Anonymous
Date: October 2021
*/

// Import necessary libraries and modules
const readlineSync = require('readline-sync');
const colors = require('colors');

// Game state variables
let player = {
  name: '',
  health: 100,
  attackPower: 20,
  inventory: []
};

let currentRoom = 'startingRoom';
let gameOver = false;

// Game data
const rooms = {
  startingRoom: {
    description: 'You find yourself in a dimly lit room. The air feels heavy with magic.',
    options: [
      { choice: 'Look around', action: 'observeStartingRoom' },
      { choice: 'Leave the room', action: 'goToHallway' }
    ]
  },
  hallway: {
    description: 'You enter a long hallway with several doors on each side.',
    options: [
      { choice: 'Go back to the starting room', action: 'goToStartingRoom' },
      { choice: 'Open the left door', action: 'openLeftDoor' },
      { choice: 'Open the right door', action: 'openRightDoor' },
      { choice: 'Proceed to the end of the hallway', action: 'goToEndOfHallway' }
    ]
  },
  // ... Define more rooms and their options ...
};

// Helper functions
function displayRoomDescription() {
  console.log(rooms[currentRoom].description);
}

function displayOptions() {
  console.log('Choose an option:');

  rooms[currentRoom].options.forEach((option, index) => {
    console.log(`${index + 1}. ${option.choice}`);
  });
}

function handlePlayerChoice(choice) {
  const selectedOption = rooms[currentRoom].options[choice - 1];

  if (selectedOption) {
    console.log(`You chose: ${selectedOption.choice}.`);

    // Execute the corresponding action
    eval(selectedOption.action + '()');
  } else {
    console.log('Invalid choice. Try again.');
  }
}

// Actions for each room and their corresponding game logic
function observeStartingRoom() {
  console.log('You observe the room and find a hidden key.');
  player.inventory.push('Key');
}

function goToHallway() {
  currentRoom = 'hallway';
}

function goToStartingRoom() {
  currentRoom = 'startingRoom';
}

function openLeftDoor() {
  console.log('You open the left door and encounter a fierce monster.');
  console.log('Prepare for battle!');

  // Battle logic
  let monster = {
    name: 'Goblin',
    health: 50,
    attackPower: 10
  };

  // Simulate turn-based battle until the player or the monster is defeated
  while (player.health > 0 && monster.health > 0) {
    console.log(`Your health: ${player.health}`);
    console.log(`Monster's health: ${monster.health}`);

    // Player's turn
    let damage = Math.floor(Math.random() * player.attackPower);
    monster.health -= damage;
    console.log(`You attack the ${monster.name} and deal ${damage} damage.`);

    // Monster's turn
    damage = Math.floor(Math.random() * monster.attackPower);
    player.health -= damage;
    console.log(`The ${monster.name} attacks you and deals ${damage} damage.`);

    console.log('');
  }

  if (player.health <= 0) {
    console.log('Game over. You were defeated by the monster.');
    gameOver = true;
  } else {
    console.log(`Congratulations! You defeated the ${monster.name}.`);
  }
}

// ... Implement more room actions and game logic ...

// Game loop
console.log('Welcome to the Mystery of Magic!\n');

player.name = readlineSync.question('Enter your name: ');
console.log(`Hello, ${player.name}!\n`);

while (!gameOver) {
  displayRoomDescription();
  displayOptions();

  const choice = parseInt(readlineSync.question('Option number: '));

  console.log('-------------------------\n');

  handlePlayerChoice(choice);

  console.log('-------------------------\n');
}

console.log('Thanks for playing the Mystery of Magic. Goodbye!');