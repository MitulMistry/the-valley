// Webpack loads JSON files by default - parses as JavaScript objects
import ascentOfManChoicesJSON from '../storyModules/module01AscentOfManCHOICES.json';
import ascentOfManLinkNodesJSON from '../storyModules/module01AscentOfManLINKNODES.json';
import ascentOfManTextJSON from '../storyModules/module01AscentOfManTEXT.json';

import globals from '../globals/globals';
import constants from '../globals/constants';

export default class {
  loadModule(moduleNumber) {
    console.log('%c Loading story module ' + moduleNumber + ' ', 'color:white; background:orange;');

    if (moduleNumber === constants.MODULE_ASCENT_OF_MAN) {
      // systems.currentSaveGame.currentNodeKey = "AA000AA000AA";
      this.loadJSON(ascentOfManTextJSON, ascentOfManChoicesJSON, ascentOfManLinkNodesJSON);
    } else {
      console.log('%cError: Invalid story module.', 'color:white; background:red;');
    }
  }

  loadJSON(moduleText, moduleChoices, moduleLinkNodes) {
    for (var i in moduleText) {
      globals.currentModuleTextMap.set(moduleText[i].KEY, moduleText[i].TEXT);
    }

    // let currentModuleChoicesMap = new Map();
    // for (var j in moduleChoices) {
    //   currentModuleChoicesMap.set(moduleChoices[j].KEY, moduleChoices[j]);
    // }

    // let currentModuleLinkNodesMap = new Map();
    // for (var k in moduleLinkNodes) {
    //   currentModuleLinkNodesMap.set(moduleLinkNodes[k].KEY, moduleLinkNodes[k]);
    // }

    globals.currentModuleChoicesData = moduleChoices;
    globals.currentModuleLinkNodesData = moduleLinkNodes;

    globals.JSONLoadedFlag = true;
  }
}
