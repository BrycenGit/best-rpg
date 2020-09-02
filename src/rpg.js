export function Game() {
  this.characters = [];
  this.currentId = 0;
}



export function Character(name, playerClass) {
  this.name = name;
  this.playerClass = playerClass; 
  this.health = 20;
  this.level = 0;
  this.armor = false;
  this.attack = 5;
  this.weapon = false;
  this.inventory = [];
}


