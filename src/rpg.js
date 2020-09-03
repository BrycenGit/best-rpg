
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

  newAttackMove(victimIndex, attackerIndex) {
    let damage = 5;
    this.characters[victimIndex].health -= (this.characters[attackerIndex].attack + damage);
    this.isCharacterAlive(victimIndex);

  }
  
  isCharacterAlive(i) {
    if (this.characters[i].health <= 0) { 
      alert('gameover for ' + this.characters[i].name);
      return false;
    } else {
      return true;
    }
  }

  useHeal(i) {
    let heal = 6;
    this.characters[i].health += heal;
  }
}


export class Character {
  constructor(name, playerClass, type,) {
    this.name = name;
    this.playerClass = playerClass;
    this.health = 20;
    this.level = 1;
    this.armor = false;
    this.attack = 5;
    this.weapon = false;
    this.exp = 0;
    this.inventory = [];
    this.type = type;
    this.id;
    this.classAttributes(); 
  }

  classAttributes() {
    if (this.playerClass === 'robot') {
      this.health = 30;
      this.attack +=5;
      alert('roboto you are');
    } else if (this.playerClass === 'punk') {
      this.health = 15;
      this.attack +=10;
      alert('you punk');
    } else {
      this.health = 10;
      this.attack +=20;
      alert('unspoken');
    }
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
}


