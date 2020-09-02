import { Game } from './../src/rpg.js';

describe('Game', () => {
  test('should create a game with with 0 players', () => {
    const game = new Game();
    expect(game.currentId).toEqual(0);
  });
});