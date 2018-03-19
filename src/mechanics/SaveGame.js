import globals from '../globals/globals';
import constants from '../globals/constants';

﻿export default class {
	constructor(
		playerPower = 0,
		playerKarma = 0,
		playerDarkTetrad = 0,
		playerIntellect = 0,
		playerLove = 0,
		numberOfModules = 0,
		currentModule,
		currentNodeKey,
		fontSize = 13,
		fontColor = '#EFB143') {
		// other parameters: gameLog, additionalVariables, font

		if (globals.debugMode) {
			this.playerPower = 1000;
			this.playerKarma = 1000;
			this.playerDarkTetrad = 1000;
			this.playerIntellect = 1000;
			this.playerLove = 1000;
		}

		if (typeof currentModule === 'undefined') {
			this.currentModule = constants.MODULE_ASCENT_OF_MAN; // 0
		}

		if (typeof currentNodeKey === 'undefined') {
			this.currentNodeKey = 'AA000AA000AA';
		}

		this.gameLog = []; // data structure (array of objects to preserve order) logging player decisions
		// this.additionalVariables = []; // data structure (array of objects) logging other decisions (i.e. 'if you gathered food last decision node, then...')
		// this.gameLog = new Map(); // keys: referenceNodes, values: decisions
		this.additionalVariables = new Map(); // keys: variable references, values: variable values
	}

	//Update font preferences
	updateFontPreferences (font, fontColor, fontSize) {

	}

	//Load last story node written to game log
	loadLastNode () {

	}

	//Write story node outcome to game log
	writeToGameLog (referenceNode01, decision01) {
		this.gameLog.push( { referenceNode: referenceNode01, decision: decision01 } );
		// this.gameLog[referenceNode01] = decision01;
	}

	//Write additional variables
	writeToAdditionalVariables (reference01, value01) {
		// var updated = false;

		//Check if the variable already exists. If it does, update it.
		// for (var i = 0; i < this.additionalVariables.length; i++) {
		// 	if (this.additionalVariables[i].reference == reference01) {
		// 		this.additionalVariables[i].value += value01;
		// 		updated = true;
		// 	}
		// }

		if (this.additionalVariables.has(reference01)) {
			let original = this.additionalVariables.get(reference01);
			this.additionalVariables.set(reference01, original + value01);
		} else {
			this.additionalVariables.set(reference01, value01);
		}

		//If the variable doesn't exist, push reference and value pair onto additionalVariables object
		// if (!updated) {
		// 	this.additionalVariables.push({ reference: reference01, value: value01 });
		// }
	}

	//Check for additional variables
	checkAdditionalVariables (reference01, equivalence01, value01) {
		//search for reference and value pair in additionalVariables data structure
		//if found, checks for whether it's >, <, etc. to the value provided
		//if it doesn't pass the test to the value, or if not found, returns false

		var defaultValue = 0;

		if (equivalence01 === '' || equivalence01 === null || equivalence01 === undefined)
		{
			//just search for whether the additional variable is present - value doesn't matter
			// for (var i = 0; i < this.additionalVariables.length; i++) {
				if (this.additionalVariables.has(reference01)) {
					return true;
				} else {
					return false;
				}
			// }
		}
		else if (equivalence01 === '=')
		{
			// for (var i = 0; i < this.additionalVariables.length; i++) {
			// 	if (this.additionalVariables[i].reference == reference01) {
			// 		if (this.additionalVariables[i].value == value01) {
			// 			return true;
			// 		}
			// 	}
			// }
			// return false;

			if (this.additionalVariables.get(reference01) === value01) {
				return true;
			} else {
				return false;
			}
		}
		else if (equivalence01 === '!=' && (value01 === '' || value01 === null || value01 === undefined)) {
			//checks for if the additional variable is present at all, and returns false if present, true if not - opposite of first check in this series. e.g. if !(01JennethDead), then returns true.
			// for (var i = 0; i < this.additionalVariables.length; i++) {
			// 	if (this.additionalVariables[i].reference == reference01) {
			// 		return false;
			// 	}
			// }
			// return true;

			if (this.additionalVariables.has(reference01)) {
				return false;
			} else {
				return true;
			}
		}
		else if (equivalence01 === '!=' && !(value01 === '' || value01 === null || value01 === undefined)) {
			// for (var i = 0; i < this.additionalVariables.length; i++) {
			// 	if (this.additionalVariables[i].reference == reference01) {
			// 		if (this.additionalVariables[i].value != value01) {
			// 			return true;
			// 		}
			// 	}
			// }

			if (this.additionalVariables.has(reference01) && this.additionalVariables.get(reference01) !== value01) {
				return true;
			}

			if (value01 != defaultValue) {
				//variable not found, so assume default negative
				return true;
			}
			return false;
		}
		else if (equivalence01 === '<')
		{
			// for (var i = 0; i < this.additionalVariables.length; i++) {
			// 	if (this.additionalVariables[i].reference == reference01) {
			// 		if (this.additionalVariables[i].value < value01) {
			// 			return true;
			// 		}
			// 	}
			// }

			if (this.additionalVariables.has(reference01) && this.additionalVariables.get(reference01) < value01) {
				return true;
			}

			if (value01 < defaultValue) {
				//variable not found, so assume default negative
				return true;
			}
			return false;
		}
		else if (equivalence01 === '<=')
		{
			// for (var i = 0; i < this.additionalVariables.length; i++) {
			// 	if (this.additionalVariables[i].reference == reference01) {
			// 		if (this.additionalVariables[i].value <= value01) {
			// 			return true;
			// 		}
			// 	}
			// }

			if (this.additionalVariables.has(reference01) && this.additionalVariables.get(reference01) <= value01) {
				return true;
			}

			if (value01 <= defaultValue) {
				//variable not found, so assume default negative
				return true;
			}
			return false;
		}
		else if (equivalence01 === '>')
		{
			// for (var i = 0; i < this.additionalVariables.length; i++) {
			// 	if (this.additionalVariables[i].reference == reference01) {
			// 		if (this.additionalVariables[i].value > value01) {
			// 			return true;
			// 		}
			// 	}
			// }

			if (this.additionalVariables.has(reference01) && this.additionalVariables.get(reference01) > value01) {
				return true;
			}

			if (value01 > defaultValue) {
				//variable not found, so assume default negative
				return true;
			}
			return false;
		}
		else if (equivalence01 === '>=')
		{
			// for (var i = 0; i < this.additionalVariables.length; i++) {
			// 	if (this.additionalVariables[i].reference == reference01) {
			// 		if (this.additionalVariables[i].value >= value01) {
			// 			return true;
			// 		}
			// 	}
			// }

			if (this.additionalVariables.has(reference01) && this.additionalVariables.get(reference01) >= value01) {
				return true;
			}

			if (value01 >= defaultValue) {
				//variable not found, so assume default negative
				return true;
			}
			return false;
		}
		else
		{
			//in case anything goes wrong, defaults to returning false
			console.log('%c checkAdditionalVariables() error ', 'color:white; background:red;');
			return false;
		}
	}
}
