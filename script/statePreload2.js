var preload2 = function (game) {
	//console.log("%cLoading story module", "color:white; background:green");
};

preload2.prototype = {
	preload: function () {
		this.game.load.image("loading", "img/menu_loading.png");

		console.log("%cLoading story module", "color:white; background:green");
		//Load the current module into map, whichever module is currently selected (either randomly chosen for new game or next module, or module number from save game. Or else have the randomness all determined in the save game object itself.
		mainTextManager.loadModule(currentModule);
	},
	create: function () {
		//this.game.state.start("stateAdventure");
	},
	update: function () {

		/*var testLoop = setInterval(function () {
			if (testContinue) {
				clearInterval(testLoop);
				this.game.state.start("stateAdventure");}
		}, 500);*/

		//Wait for JSON data to finish loading
		//NEED TO SET UP A TIMEOUT IF DATA DOESN'T LOAD
		if (dataLoadedFlag1 && dataLoadedFlag2 && dataLoadedFlag3) {
			dataLoadedFlag1 = false;
			dataLoadedFlag2 = false;
			dataLoadedFlag3 = false;
			this.game.state.start("stateAdventure");
		}
	}
}