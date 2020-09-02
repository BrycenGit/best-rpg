import { Game, Character } from './../src/rpg.js';

describe('Game', () => {
  test('should create a game with with 0 players', () => {
    const game = new Game();
    expect(game.currentId).toEqual(0);
  });  
});

describe('Character', () => {
  test('should create a character', () => {
    let brycen;
    let bane;
    const character = new Character(brycen, bane);
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
