// import 'jquery';
import Phaser from 'phaser';

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
