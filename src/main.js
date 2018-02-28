// import 'jquery';
import 'pixi';
import 'p2';
import Phaser from 'phaser';

import boot from './states/stateBoot';
import preload from './states/statePreload';
import splash from './states/stateSplash';
import mainMenu from './states/stateMenu';
import preload2 from './states/statePreload2';
import theGame from './states/stateAdventure';

(function() {
  var game = new Phaser.Game(800, 600, Phaser.CANVAS, "game");
  //var game = new Phaser.Game("100", "100", Phaser.CANVAS, "game");
  game.state.add("stateBoot", boot);
  game.state.add("statePreload", preload);
  game.state.add("stateSplash", splash);
  game.state.add("stateMenu", mainMenu);
  game.state.add("statePreload2", preload2);
  game.state.add("stateAdventure",theGame);
  //game.state.add("stateAnotherLife",gameOver);
  game.state.start("stateBoot");
})();
