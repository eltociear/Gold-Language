import { errorCodes } from "../save/error.js";
import { goldShell } from "../scripts/boot/shell.js";
import { myGoldProgramDirectory } from "../../myProjectSettings/settings.js";
import { say } from '../scripts/util/say.js';

import prompt from 'prompt';

const destination = './modules/program.js';
const myGoldProgramArea = myGoldProgramDirectory;

var currentError = {
    code: 0,
    des: ""
}

goldExtensionCheck();

export function goldExtensionCheck() {

    if (myGoldProgramArea.endsWith('.gold')) {

        goldShell();        

    } else {

        currentError.code = errorCodes[1].code;
        currentError.des = errorCodes[1].des;
        
        say("Error: " + currentError.code);
        say(currentError.des);

    }

}

export { myGoldProgramArea, destination, currentError };
