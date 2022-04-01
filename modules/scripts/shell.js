import { goldLoad } from '../interpreters/goldInt.js';
import { copyContent } from '../scripts/copy.js';
import { errorCodes } from '../save/error.js';
import { deleteContent } from "../scripts/delete.js";
import { myGoldProgram, destination, currentError } from '../../index.js';
import { say } from './log.js';
import { shellCommands } from '../save/shellCommands.js';

import prompt from 'prompt';
import open  from 'open';

var timesRan = 0;

function goldShellLoad() {

    prompt.start();

    prompt.get(['shell'], function (err, result) {

        if (result.shell == "save") {

            copyContent(myGoldProgram, destination);

            goldShell();

        } else if (result.shell == "run") {

            goldLoad(destination);

            goldShell();

        } else if (result.shell == "delete") {
                
            deleteContent(destination);

            goldShell();

        } else if (result.shell == "exit") {

            say('< Closing Shell');

        } else if (result.shell == "github") {

            open('https://github.com/Gold-Language/Gold-Language');

            say('< Opened in a new Tab.');

            goldShell();

        } else if (result.shell == "author") {

            open('https://github.com/Colack');

            say('< Opened in a new Tab.');

            goldShell();

        } else if (result.shell == "help") {

            for (var i = 0; i < shellCommands.length; i++) {

                say('\n');
                say(shellCommands[i].name);
                say(shellCommands[i].des);

            }

            goldShell();

        } else if (result.shell == "reload") {
                   
            goldShell();
                   
        } else {

            currentError.code = errorCodes[3].code;
            currentError.des = errorCodes[3].des;

            console.log("Error: " + currentError.code);
            console.log(currentError.des);

            goldShell();

        }

    });
    
}

export function goldShell() {

    timesRan += 1;

    if (timesRan > 1) {

        goldShellLoad();

    } else {

        console.log("< Running GoldShell");
        console.log("< 2022 Edition");
        console.log("< Code By Jack");

        setTimeout(goldShellLoad, 1250);

    }

}
