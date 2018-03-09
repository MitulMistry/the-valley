import $ from 'jquery';

import module01ChoicesJson from '../storyModules/module01AscentOfManCHOICES.json';
import module01LinkNodesJson from '../storyModules/module01AscentOfManLINKNODES.json';
import module01TextJson from '../storyModules/module01AscentOfManTEXT.json';

import globals from '../globals/globals';
import constants from '../globals/constants';

export default class {
	constructor() {
		// this.currentModuleTextMap = new Map();
		// this.currentModuleChoicesData = {};
		// this.currentModuleLinkNodesData = {};
	}

	// get currentModuleTextMap() { return this.currentModuleTextMap; }
  //
	// get currentModuleChoicesData() { return this.currentModuleChoicesData; }
  //
	// get currentModuleLinkNodesData() { return this.currentModuleLinkNodesData; }

	loadModule (moduleNumber)	{
		if (moduleNumber === constants.MODULE_ASCENT_OF_MAN) {
			// currentNodeKey = "AA000AA000AA";
			this.loadJSON(module01TextJson, module01ChoicesJson, module01LinkNodesJson);
		} else {
			console.log('Error: Invalid story module.');
		}
	}

	/*
	textManager.prototype.getText = function (key)
	{
		//$ just means jquery, so $.getJSON means jquery.getJSON
		if (typeof key !== 'undefined') {
			$.getJSON('/src/storyModules/module01AscentOfManTEXT.json', function (data) {
				console.log("SUCCESS: " + data[1].TEXT);
				//return data[key].text;
			});
		}
	}
	*/
	loadJSON (moduleText, moduleChoices, moduleLinkNodes) {
		//if (typeof (currentModuleTextPath && currentModuleChoicesPath) !== 'undefined') {
		// let thisObj = this;

		for (let i = 0; i < moduleText.length; i++) {
			globals.currentModuleTextMap.set(moduleText[i].KEY, moduleText[i].TEXT);
		}
		globals.dataLoadedFlag1 = true;

		globals.currentModuleChoicesData = moduleChoices;
		globals.dataLoadedFlag2 = true;

		globals.currentModuleLinkNodesData = moduleLinkNodes;
		globals.dataLoadedFlag3 = true;


			// $.getJSON('/src/storyModules/module01AscentOfManTEXT.json', function (data) {
			// 	//--This following section is the AJAX callback - executes upon successfully loading the data
			// 	for (var i = 0; i < data.length; i++) {
			// 		// thisObj.currentModuleTextMap.set(data[i].KEY, data[i].TEXT);
			// 		globals.currentModuleTextMap.set(data[i].KEY, data[i].TEXT);
			// 		//console.log("SUCCESS: " + data[i].KEY + data[i].TEXT);
			// 	}
			// 	globals.dataLoadedFlag1 = true;
			// 	//--End AJAX callback
			// });
      //
			// $.getJSON('/src/storyModules/module01AscentOfManCHOICES.json', function (data) {
			// 	//--This following section is the AJAX callback - executes upon successfully loading the data
			// 	// thisObj.currentModuleChoicesData = data;
			// 	globals.currentModuleChoicesData = data;
			// 	globals.dataLoadedFlag2 = true;
			// 	//--End AJAX callback
			// });
      //
			// $.getJSON('/src/storyModules/module01AscentOfManLINKNODES.json', function (data) {
			// 	//--This following section is the AJAX callback - executes upon successfully loading the data
			// 	// thisObj.currentModuleLinkNodesData = data;
			// 	globals.currentModuleLinkNodesData = data;
			// 	globals.dataLoadedFlag3 = true;
			// 	//--End AJAX callback
			// });
		//}
	}
}
