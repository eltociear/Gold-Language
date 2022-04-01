// Code By Jack //

// Import scripts and loaders from the ./modules folder. //
import { goldLoad } from "./modules/interpreters/goldInt.js";
import { copyContent } from './modules/scripts/copy.js';
import { errorCodes } from "./modules/save/error.js";
import { deleteContent } from "./modules/scripts/delete.js";
import { goldShell } from "./modules/scripts/shell.js";

// Import packages from NPM //
import prompt from 'prompt';

// Constants //
const myGoldProgram = './program.gold';
const destination = './modules/program.js';

// Current Errors //
var currentError = {
    code: 0,
    des: ""
}

// Load the Extension check //
goldExtensionCheck();

// Check for extensions from the myGoldProgram constant. //
function goldExtensionCheck() {

    if (myGoldProgram.endsWith('.gold')) {

        goldShell();        

    } else {

        currentError.code = errorCodes[1].code;
        currentError.des = errorCodes[1].des;
        
        console.log("Error: " + currentError.code);
        console.log(currentError.des);

    }

}

export { myGoldProgram, destination, currentError };
