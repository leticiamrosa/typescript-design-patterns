/**
 * Factory Pattern
 * A combination of the single responsibility and
 * Open/Closed principles
 */

import GameCharacterFactory from './GameCharactersFactory';

let warrior = GameCharacterFactory.getWarrior(12);
let mage = GameCharacterFactory.getMage(12);

console.log('Warrior at level 6 ', warrior);
console.log('Mage at level 12', mage);
