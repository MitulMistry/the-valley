﻿//constructor function https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript

var saveGame = function (playerPower, playerKarma, playerDarkTetrad, playerIntellect, playerLove, numberOfModules, currentModule, currentNodeKey, fontSize, fontColor) {
	//gameLog,

	this.playerPower = 1000;
	this.playerKarma = 1000;
	this.playerDarkTetrad = 1000;
	this.playerIntellect = 1000;
	this.playerLove = 1000;
	this.fontSize = 13;
	this.fontColor = '#EFB143';
	this.numberOfModules = 0;
	this.currentModule = MODULE_ASCENT_OF_MAN; // 0
	this.currentNodeKey = "AA000AA000AA";

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

	this.gameLog = []; //some sort of data structure mapping player decisions
	this.additionalVariables = []; //data structure logging other decisions (i.e. "if you gathered food last decision node, then...")
}

//Update font preferences
saveGame.prototype.updateFontPreferences = function (font, fontColor, fontSize) {

}

//Load last story node written to game log
saveGame.prototype.loadLastNode = function () {

}

//Write story node outcome to game log
saveGame.prototype.writeToGameLog = function (referenceNode01, decision01) {
	this.gameLog.push( { referenceNode: referenceNode01, decision: decision01 } );
}

//Write additional variables
saveGame.prototype.writeToAdditionalVariables = function (reference01, value01) {
	//push reference and value pair onto additionalVariables data structure
	this.additionalVariables.push( { reference: reference01, value: value01 } );
}

//Check for additional variables
saveGame.prototype.checkAdditionalVariables = function (reference01, equivalence01, value01) {
	//search for reference and value pair in additionalVariables data structure
	//if found, checks for whether it's >, <, etc. to the value provided
	//if it doesn't pass the test to the value, or if not found, returns false

	if (equivalence01 === "" || equivalence01 === null || equivalence01 === undefined)
	{
		//just search for whether the additional variable is present - value doesn't matter
		for (var i = 0; i < this.additionalVariables.length; i++) {
			if (this.additionalVariables[i].reference == reference01) {
				return true;				
			}
		}
		return false;
	}
	else if (equivalence01 === "=")
	{
		for (var i = 0; i < this.additionalVariables.length; i++) {
			if (this.additionalVariables[i].reference == reference01) {
				if (this.additionalVariables[i].value == value01) {
					return true;
				}
			}
		}
		return false;
	}
	else if (equivalence01 === "!=" && (value01 === "" || value01 === null || value01 === undefined)) {
		//checks for if the additional variable is present at all, and returns false if present, true if not - opposite of first check in this series. e.g. if !(01JennethDead), then returns true.
		for (var i = 0; i < this.additionalVariables.length; i++) {
			if (this.additionalVariables[i].reference == reference01) {
				return false;				
			}
		}
		return true;
	}
	else if (equivalence01 === "!=") {
		for (var i = 0; i < this.additionalVariables.length; i++) {
			if (this.additionalVariables[i].reference == reference01) {
				if (this.additionalVariables[i].value != value01) {
					return true;
				}
			}
		}
		return false;
	}
	else if (equivalence01 === "<")
	{
		for (var i = 0; i < this.additionalVariables.length; i++) {
			if (this.additionalVariables[i].reference == reference01) {
				if (this.additionalVariables[i].value < value01) {
					return true;
				}
			}
		}
		return false;
	}
	else if (equivalence01 === "<=")
	{
		for (var i = 0; i < this.additionalVariables.length; i++) {
			if (this.additionalVariables[i].reference == reference01) {
				if (this.additionalVariables[i].value <= value01) {
					return true;
				}
			}
		}
		return false;
	}
	else if (equivalence01 === ">")
	{
		for (var i = 0; i < this.additionalVariables.length; i++) {
			if (this.additionalVariables[i].reference == reference01) {
				if (this.additionalVariables[i].value > value01) {
					return true;
				}
			}
		}
		return false;
	}
	else if (equivalence01 === ">=")
	{
		for (var i = 0; i < this.additionalVariables.length; i++) {
			if (this.additionalVariables[i].reference == reference01) {
				if (this.additionalVariables[i].value >= value01) {
					return true;
				}
			}
		}
		return false;
	}
	else
	{
		//in case anything goes wrong, defaults to returning false
		return false;
	}
}