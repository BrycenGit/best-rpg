export function Game() {
  this.characters = [];
  this.currentId = 0;
}

Game.prototype.addCharacter = function(character) {
  this.characters.push(character);
  //character.id = this.assignId();
}

Game.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

export function Character(name, playerClass) {
  this.name = name;
  this.playerClass = playerClass; 
  this.health = 20;
  this.level = 1;
  this.armor = false;
  this.attack = 5;
  this.weapon = false;
  this.inventory = [];
  }

Character.prototype.attackMove = function(attackedPlayer) {
  attackedPlayer.health -= this.attack;
  return;
} 

Character.prototype.usePotion = function(potionType) {
  this.health += potionType;
  return;
}

Character.prototype.equipArmor = function(armorType) {
  this.armor = true;
  this.health += armorType;
  return;
}

Character.prototype.equipWeapon = function(weaponType){
  this.weapon = true;
  this.attack += weaponType;
  return;
}

Character.prototype.levelUp = function(){
  this.level += 1;
  this.health += 5;
  this.attack += 1;
}


