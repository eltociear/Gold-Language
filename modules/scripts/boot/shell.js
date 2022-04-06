import { copyContent } from '../files/save.js'
import { errorCodes } from '../../save/error.js';
import { deleteContent } from "../files/delete.js";
import { myGoldProgramArea, destination, currentError } from '../../util/index.js';
import { say } from '../util/say.js';
import { shellCommands } from '../../save/shellCommands.js';
import { amIOn } from '../mis/amIOn.js';
import { randomNum } from '../util/random.js';
import { currentVersion } from '../../save/currentVersion.js';
import { colorsOn } from '../../save/colorsOn.js';
import { helloWrd } from '../mis/helloWrd.js';

import prompt from 'prompt';
import open  from 'open';
import colors from 'colors';
import https from 'https';
import fs from 'fs';

function goldShellLoad() {

    prompt.start();

    prompt.get(['shell'], function (err, result) {

        if (result.shell != undefined) {

            if (result.shell == "save" || result.shell == "copy") {

                copyContent(myGoldProgramArea, destination);
    
                goldShellLoad();
    
            } else if (result.shell == "delete" || result.shell == "remove") {
                    
                deleteContent(destination);
    
                goldShellLoad();
    
            } else if (result.shell == "exit" || result.shell == "quit" || result.shell == "leave") {
    
                say(colors.yellow('< Closing Shell'));
    
            } else if (result.shell == "github" || result.shell == "code") {
    
                open('https://github.com/Shining-Gold-Studios/Gold-Language');
    
                say(colors.yellow('< Opened in a new Tab.'));
    
                goldShellLoad();
    
            } else if (result.shell == "author") {
    
                open('https://github.com/Colack');
    
                say(colors.yellow('< Opened in a new Tab.'));
    
                goldShellLoad();
    
            } else if (result.shell == "help") {
    
                for (var i = 0; i < shellCommands.length; i++) {

                    say(colors.blue(shellCommands[i].name));
                    say(colors.red(shellCommands[i].des));
    
                }
    
                goldShellLoad();
    
            } else if (result.shell == "reload") {
                       
                goldShellLoad();
                       
            } else if (result.shell == "amIOn") { 

                amIOn();

                goldShellLoad();

            } else if (result.shell == "credits") {

                say(colors.yellow('< Gold-Shell'));
                say(colors.yellow('< 2022 Version'));
                say(colors.yellow('< Code By Jack'));

                goldShellLoad();

            } else if (result.shell == "clear") {

                console.clear();

                say(colors.yellow('< Cleared The Console.'));

                goldShellLoad();

            } else if (result.shell == 'ty') {

                var randit = randomNum(5);

                if (randit == 1) {

                    say(colors.green('< :)'));

                } else if (randit == 2) {

                    say(colors.green('< Its my Job!'));

                } else if (randit == 3) {

                    say(colors.green('< I try my hardest.'));

                } else if (randit == 4) {

                    say(colors.green('< Your Welcome.'));

                } else if (randit == 0) {

                    say(colors.green('< Error: 0'));
                    say(colors.green('< Shell has been thanked!'));

                }

                goldShellLoad();

            } else if (result.shell == "motd") {

                let url = "https://api.npoint.io/d177dce4fa0ef6f25aee";

                https.get(url,(res) => {

                let body = "";

                res.on("data", (chunk) => {

                    body += chunk;
            
                 });

                res.on("end", () => {

                    try {

                    let json = JSON.parse(body);

                    say(json.motd);

                    goldShellLoad();

                        } catch (error) {

                            console.error(error.message);
                
                    };

                });

            }).on("error", (error) => {

                console.error(error.message);

            });

            } else if (result.shell.includes("/")) {

                say(colors.yellow('< You just triggered an ') + colors.rainbow("Flip ") + colors.yellow('Command, if you want to use ') + colors.rainbow("Flip") + colors.yellow(', Please type ' + colors.rainbow("flip ") + colors.yellow("into the shell!")));

                goldShellLoad();

            } else if (result.shell == "helloWrd") {

                helloWrd();
                
            } else {

                say('< Command Does Not Exist, use ' + colors.yellow('help') + ' to get started.');
    
                goldShellLoad();

            }

        } else {

            currentError.code = errorCodes[3].code;
            currentError.des = errorCodes[3].des;

            say(colors.red("< Error: " + currentError.code));
            say(colors.red(currentError.des));

            goldShellLoad();

        }

    });
    
}

export function goldShell() {

    colors.disable();

    say(colors.yellow('< Gold-Shell'));
    say(colors.yellow('< 2022 Version'));
    say(colors.yellow('< Code By Jack'));
    
    let url = "https://api.npoint.io/d177dce4fa0ef6f25aee";

    https.get(url,(res) => {

        let body = "";

        res.on("data", (chunk) => {

            body += chunk;
            
        });

        res.on("end", () => {

            try {

                let json = JSON.parse(body);

                if (currentVersion < json.version) {

                    open('https://github.com/Shining-Gold-Studios/Gold-Language/releases');

                    goldShellLoad();

                } else {

                    goldShellLoad();

                }

            } catch (error) {

                console.error(error.message);
                
            };

        });

    }).on("error", (error) => {

        console.error(error.message);

    });

}
