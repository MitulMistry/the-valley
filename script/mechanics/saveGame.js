//constructor function https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript

var saveGame = function (playerPower, playerKarma, playerDarkTetrad, playerIntellect, playerLove, /*gameLog,*/numberOfModules, currentModule, fontSize, fontColor) {

	this.playerPower = 0;
	this.playerKarma = 0;
	this.playerDarkTetrad = 0;
	this.playerIntellect = 0;
	this.playerLove = 0;
	//this.volumeLevel = 5;
	this.fontSize = 13;
	this.fontColor = '#EFB143';
	this.numberOfModules = 0;
	this.currentModule = 0;

	if (typeof playerPower !== 'undefined') {
		this.playerPower = playerPower;
	}
	if (typeof playerKarma !== 'undefined') {
		this.playerKarma = playerKarma;
	}
	if (typeof playerDarkTetrad !== 'undefined') {
		this.playerDarkTetrad = playerDarkTetrad;
	}
	if (typeof playerIntellect !== 'undefined') {
		this.playerIntellect = playerIntellect;
	}
	if (typeof playerLove !== 'undefined') {
		this.playerLove = playerLove;
	}
	/*if (typeof volumeLevel !== 'undefined') {
		this.volumeLevel = volumeLevel;
	}*/
	if (typeof fontSize !== 'undefined') {
		this.fontSize = fontSize;
	}
	if (typeof fontColor !== 'undefined') {
		this.fontColor = fontColor;
	}
	if (typeof numberOfModules !== 'undefined') {
		this.numberOfModules = numberOfModules;
	}

	//this.font = font;

	//this.gameLog = some sort of data structure mapping player decisions
	//this.additionalVariables = data structure logging other decisions (i.e. "if you gathered food last decision node, then...")
};

//Set current story module
saveGame.prototype.setCurrentModule = function (module) {

	if (typeof module !== 'undefined') {
		this.currentModule = module;
	}
};

//Update font preferences
saveGame.prototype.updateFontPreferences = function (font, fontColor, fontSize) {

};

//Load last story node written to game log
saveGame.prototype.loadLastNode = function () {

};

//Write story node outcome to game log
saveGame.prototype.writeToGameLog = function (referenceNode, decision) {

};

//Write additional variables
saveGame.prototype.writeToAdditionalVariables = function (reference, value) {
	//push reference and value pair onto additionalVariables data structure
};

//Read additional variables
saveGame.prototype.readAdditionalVariables = function (reference, value) {
	//search for reference and value pair in additionalVariables data structure
	//if found, return value (true if boolean, number if integer)
	//if not found, return false
};