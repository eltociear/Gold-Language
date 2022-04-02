import { goldLoad } from '../../interpreters/goldInt.js';
import { copyContent } from '../files/save.js'
import { errorCodes } from '../../save/error.js';
import { deleteContent } from "../files/delete.js";
import { myGoldProgramArea, destination, currentError } from '../../util/index.js';
import { say } from '../util/say.js';
import { shellCommands } from '../../save/shellCommands.js';
import { amIOn } from '../mis/amIOn.js';
import { randomNum } from '../util/random.js';

import prompt from 'prompt';
import open  from 'open';
import colors from 'colors';

function goldShellLoad() {

    prompt.start();

    prompt.get(['shell'], function (err, result) {

        if (result.shell != undefined) {

            if (result.shell == "save" || result.shell == "copy") {

                copyContent(myGoldProgramArea, destination);
    
                goldShell();
    
            } else if (result.shell == "run" || result.shell == "boot") {
    
                goldLoad('../../program.js');
    
                goldShell();
    
            } else if (result.shell == "delete" || result.shell == "remove") {
                    
                deleteContent(destination);
    
                goldShell();
    
            } else if (result.shell == "exit" || result.shell == "quit" || result.shell == "leave") {
    
                say(colors.yellow('< Closing Shell'));
    
            } else if (result.shell == "github" || result.shell == "code") {
    
                open('https://github.com/Gold-Language/Gold-Language');
    
                say(colors.yellow('< Opened in a new Tab.'));
    
                goldShell();
    
            } else if (result.shell == "author") {
    
                open('https://github.com/Colack');
    
                say(colors.yellow('< Opened in a new Tab.'));
    
                goldShell();
    
            } else if (result.shell == "help" || result.shell == "whatdo") {
    
                for (var i = 0; i < shellCommands.length; i++) {
    
                    say('\n');
                    say(colors.blue(shellCommands[i].name));
                    say(colors.red(shellCommands[i].des));
    
                }
    
                goldShell();
    
            } else if (result.shell == "reload") {
                       
                goldShell();
                       
            } else if (result.shell == "amIOn") { 

                amIOn();

            } else if (result.shell == "credits") {

                say(colors.yellow('< Gold-Shell'));
                say(colors.yellow('< 2022 Version'));
                say(colors.yellow('< Code By Jack'));

                goldShell();

            } else if (result.shell == "clear") {

                console.clear();

                say(colors.yellow('< Cleared The Console.'));

                goldShell();

            } else if (result.shell == 'ty') {

                var randit = randomNum(5);

                if (randit == 1) {

                    say(colors.green(':)'));

                } else if (randit == 2) {

                    say(colors.green('Its my Job!'));

                } else if (randit == 3) {

                    say(colors.green('I try my hardest.'));

                } else if (randit == 4) {

                    say(colors.green('Your Welcome.'));

                } else if (randit == 0) {

                    say(colors.green('< Error: 0'));
                    say(colors.green('Shell has been thanked!'));

                }

                goldShell();

            } else {

                say('< Command Does Not Exist, use ' + colors.yellow('help') + ' to get started.');
    
                goldShell();

            }

        } else {

            currentError.code = errorCodes[3].code;
            currentError.des = errorCodes[3].des;

            say(colors.red("< Error: " + currentError.code));
            say(colors.red(currentError.des));

            goldShell();

        }

    });
    
}

export function goldShell() {

    goldShellLoad();

}
