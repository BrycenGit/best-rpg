
export class Game {
  constructor() {
    this.characters = [];
    this.currentId = 0;
    this.CharactersIndex = 0;
  }
  assignId() {
    this.currentId += 1;
    return this.currentId;
  }
  addCharacter(player) {
    player.id = this.assignId();
    this.characters.push(player);
  }
  nextCharacter() {
    if (this.CharactersIndex + 1 < this.characters.length) {
      this.CharactersIndex++;
    } else {
      this.CharactersIndex = 0;
    }
  }
  gameAttack(character) {
    let damage;
    if (character.type === "player"){
      damage = character.attack + Math.floor(Math.random()*(6-1+1)) +1;
      this.characters[1].currentHealth -= damage;
    } else if (character.type === "enemy") {
      damage = character.attack + Math.floor(Math.random()*(3-1+1)) +1;
      this.characters[0].currentHealth -= damage; 
    }
    return damage;
  }

  newAttackMove(i) {
    let damage = 5;
    this.characters[i].health -= damage;
  }
}


export class Character {
  constructor(name, playerClass, type, booleanParameter) {
    this.name = name;
    this.playerClass = playerClass; 
    this.health = 20;
    this.currentHealth = 20;
    this.level = 1;
    this.armor = false;
    this.attack = 5;
    this.weapon = false;
    this.exp = 0;
    this.inventory = [];
    this.type = type;
    this.playerTurn = booleanParameter;
    this.id;
  }
  attackMove(attackedPlayer) {
    attackedPlayer.health -= this.attack;
    // attackedPlayer.attack -= this.health;
    return;
  }
  usePotion(potionType) {
    this.health += potionType;
    return;
  }
  equipArmor(armorType) {
    this.armor = true;
    this.health += armorType;
    return;
  }
  equipWeapon(weaponType) {
    this.weapon = true;
    this.attack += weaponType;
    return;
  }
  levelUp() {
    this.level += 1;
    this.health += 5;
    this.attack += 1;
    return;
  }
  heal() {
    this.health += 6;
    return;
  }
}


export function Battle (player1, enemy) {
  this.combatants = [player1, enemy];
}

Battle.prototype.attack = function(attacker){
  let damage;

  if (attacker.type === "player"){
    damage = attacker.attack + Math.floor(Math.random()*(6-1+1)) +1;
    this.combatants[1].currentHealth -= damage;
  } else if (attacker.type === "enemy") {
    damage = attacker.attack + Math.floor(Math.random()*(3-1+1)) +1;
    this.combatants[0].currentHealth -= damage; 
  }
  return damage;
};

Battle.prototype.isCharacterAlive = function(attackedPlayer){
  if (attackedPlayer.currentHealth <= 0) { 
    return false;
  } else {
    return true;
  }
};


// function of attack(){

//   let damage = randomber
//   enemy.health -= damage
//   ischaracteralive() {
//     enemyDamage = randomber
//     if(enemy.health<= 0) {
//       alert("player wins!")
//     } else {
//       player.health -= enemyDamge
//     }
//   }
// }  

