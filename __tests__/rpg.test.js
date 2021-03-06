import { Game, Character } from './../src/rpg.js';

describe('Game', () => {
  let game;
  let brycen =  {name:'brycen'} ;
  let michael =  {name:'michael'} ;

  beforeEach(() => {
    game = new Game();
  })
  test('should create a game with with 0 players', () => {
    expect(game.currentId).toEqual(0);
  });
  test('will add character to characters array', () => {
    game.addCharacter(brycen);
    game.addCharacter(michael);
    expect(game.characters).toHaveLength(2);
    console.log(brycen);
    console.log(michael);

  })
  test('will assign increase current id', () => {
    game.assignId();
    game.assignId();
    expect(game.currentId).toEqual(2);
  })  
});

describe('Character', () => {
    let character;
    let character2;
    let UltraPotion = 15;
    let dragonArmor = 40;
    let ultimateWeapon = 50;

    beforeEach(() => {
      character = new Character("brycen", "bane", true);
      character2 = new Character("michael", "bane", false)
    })

  test('should create a character', () => {
    expect(character.name).toBe('brycen');
    expect(character.playerClass).toBe('bane');
    expect(character.health).toEqual(20);
    expect(character.level).toEqual(1);
    expect(character.armor).toStrictEqual(false);
    expect(character.attack).toEqual(5);
    expect(character.weapon).toStrictEqual(false);
    expect(character.inventory).toHaveLength(0);
  });
  test('attack should subtract 5 from health', () => {
    character.attackMove(character2);
    character.equipArmor(dragonArmor);
    character2.equipWeapon(ultimateWeapon);
    console.log(character2.attack)
    expect(character2.health).toEqual(15);
  })
  test('should add potion value to health', () => {
    character.usePotion(UltraPotion);
    expect(character.health).toEqual(35);
  })
  test("should add armor value to health and turn armor value to true", () => {
    character.equipArmor(dragonArmor);
    expect(character.health).toEqual(60);
    expect(character.armor).toStrictEqual(true);
  })
  test('should add weapon value to attack and weapon value to true', () => {
    character.equipWeapon(ultimateWeapon);
    expect(character.attack).toEqual(55);
    expect(character.weapon).toStrictEqual(true);
  })
  test("should add health, attack, and level", () => {
    character.levelUp();
    expect(character.health).toEqual(25);
    expect(character.attack).toEqual(6);
    expect(character.level).toEqual(2); 
  })
  test('should add 6 to character.health', () => {
    character.heal();
    expect(character.health).toEqual(26);
  })
  test("should minus 1-6 health", () => {
    
  })
});
