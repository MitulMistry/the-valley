import globals from '../globals/globals';
import constants from '../globals/constants';

export default class {
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
		// other parameters: gameLog, gameVariables, font

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

		// data structure (array of objects to preserve order) logging player decisions
		this.gameLog = [];

		// data structure (Map) logging other decisions (i.e. 'if you gathered food last decision node, then...')
		this.gameVariables = new Map(); // keys: variable references, values: variable values
	}

	// Update font preferences
	updateFontPreferences (font, fontColor, fontSize) {

	}

	// Load last story node written to gameLog
	loadLastNode () {

	}

	// Write story node outcome to gameLog
	writeToGameLog (textNodeKey, decision) {
		this.gameLog.push( { textNodeKey: textNodeKey, decision: decision } );
	}

	// Write additional variables to data structure
	writeToGameVariables (reference, value) {

		// Check if the variable already exists. If it does, update it.
		if (this.gameVariables.has(reference)) {
			let original = this.gameVariables.get(reference);
			this.gameVariables.set(reference, original + value);
		} else {
			this.gameVariables.set(reference, value);
		}
	}

	// Check for additional variables in data structure
	checkGameVariables (reference, equivalence, value) {
		// search for reference and value pair in gameVariables data structure
		// if found, checks for whether it's >, <, etc. to the value provided
		// if it doesn't pass the test to the value, or if not found, it returns false

		var defaultValue = 0;

		if (equivalence === '' || equivalence === null || equivalence === undefined) {
			// just search for whether the additional variable is present - value doesn't matter
			return (this.gameVariables.has(reference));

		}	else if (equivalence === '=')	{
			// check for presence of variable and value
			return (this.gameVariables.get(reference) === value);

		}	else if (equivalence === '!=' && (value === '' || value === null || value === undefined)) {
			// checks for if the additional variable is present at all, and returns false if present, true if not - opposite of first check in this series. e.g. if !(01JennethDead), then returns true.
			return !(this.gameVariables.has(reference));

		}	else if (equivalence === '!=' && !(value === '' || value === null || value === undefined)) {
			if (this.gameVariables.has(reference) && this.gameVariables.get(reference) !== value) {
				return true;
			} else if (value !== defaultValue) {
				// variable not found, so assume default value (0)
				return true;
			} else {
				return false;
			}

		}	else if (equivalence === '<')	{
			if (this.gameVariables.has(reference) && this.gameVariables.get(reference) < value) {
				return true;
			} else if (value < defaultValue) {
				// variable not found, so assume default value (0)
				return true;
			} else {
				return false;
			}

		}	else if (equivalence === '<=') {
			if (this.gameVariables.has(reference) && this.gameVariables.get(reference) <= value) {
				return true;
			} else if (value <= defaultValue) {
				// variable not found, so assume default value (0)
				return true;
			} else {
				return false;
			}

		}	else if (equivalence === '>')	{
			if (this.gameVariables.has(reference) && this.gameVariables.get(reference) > value) {
				return true;
			} else if (value > defaultValue) {
				// variable not found, so assume default value (0)
				return true;
			} else {
				return false;
			}

		}	else if (equivalence === '>=') {
			if (this.gameVariables.has(reference) && this.gameVariables.get(reference) >= value) {
				return true;
			} else if (value >= defaultValue) {
				// variable not found, so assume default value (0)
				return true;
			} else {
				return false;
			}

		}	else {
			// in case anything goes wrong, defaults to returning false
			console.log('%c checkGameVariables() error ', 'color:white; background:red;');
			return false;
		}
	}
}
