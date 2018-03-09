import ascentOfManChoicesJSON from '../storyModules/module01AscentOfManCHOICES.json';
import ascentOfManLinkNodesJSON from '../storyModules/module01AscentOfManLINKNODES.json';
import ascentOfManTextJSON from '../storyModules/module01AscentOfManTEXT.json';

import globals from '../globals/globals';
import constants from '../globals/constants';

export default class {
	constructor() {
	}

	loadModule (moduleNumber)	{
		if (moduleNumber === constants.MODULE_ASCENT_OF_MAN) {
			// currentNodeKey = "AA000AA000AA";
			this.loadJSON(ascentOfManTextJSON, ascentOfManChoicesJSON, ascentOfManLinkNodesJSON);
		} else {
			console.log('Error: Invalid story module.');
		}
	}

	loadJSON (moduleText, moduleChoices, moduleLinkNodes) {

		for (var i in moduleText) {
			globals.currentModuleTextMap.set(moduleText[i].KEY, moduleText[i].TEXT);
		}
		globals.dataLoadedFlag1 = true;

		globals.currentModuleChoicesData = moduleChoices;
		globals.dataLoadedFlag2 = true;

		globals.currentModuleLinkNodesData = moduleLinkNodes;
		globals.dataLoadedFlag3 = true;
	}
}
