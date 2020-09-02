import { Game, Character } from './../src/rpg.js';

describe('Game', () => {
  let game;
  let brycen;
  let michael;
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
  })  
});

describe('Character', () => {
    let brycen;
    let bane;
    let character;
    beforeEach(() => {
      character = new Character(brycen, bane);
    })

  test('should create a character', () => {
    expect(character.name).toBe(brycen);
    expect(character.playerClass).toBe(bane);
    expect(character.health).toEqual(20);
    expect(character.level).toEqual(0);
    expect(character.armor).toBeFalsy();
    expect(character.attack).toEqual(5);
    expect(character.weapon).toBeFalsy();
    expect(character.inventory).toHaveLength(0);
  });
});
