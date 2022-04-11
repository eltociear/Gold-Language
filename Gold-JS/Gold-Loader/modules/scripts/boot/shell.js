import { copyContent } from '../files/save.js'
import { errorCodes } from '../../save/error.js';
import { deleteContent } from "../files/delete.js";
import { myGoldProgramArea, destination, currentError } from '../../util/index.js';
import { say } from '../util/say.js';
import { shellCommands } from '../../save/shellCommands.js';
import { amIOn } from '../mis/amIOn.js';
import { randomNum } from '../util/random.js';
import { currentVersion } from '../../save/currentVersion.js';
import { helloWrd } from '../mis/helloWrd.js';
import { version } from '../version/version.js';

import prompt from 'prompt';
import open  from 'open';
import colors from 'colors';
import https from 'https';
import fs from 'fs';

// Code By Jack

/*

⠀⣞⢽⢪⢣⢣⢣⢫⡺⡵⣝⡮⣗⢷⢽⢽⢽⣮⡷⡽⣜⣜⢮⢺⣜⢷⢽⢝⡽⣝
⠸⡸⠜⠕⠕⠁⢁⢇⢏⢽⢺⣪⡳⡝⣎⣏⢯⢞⡿⣟⣷⣳⢯⡷⣽⢽⢯⣳⣫⠇
⠀⠀⢀⢀⢄⢬⢪⡪⡎⣆⡈⠚⠜⠕⠇⠗⠝⢕⢯⢫⣞⣯⣿⣻⡽⣏⢗⣗⠏⠀
⠀⠪⡪⡪⣪⢪⢺⢸⢢⢓⢆⢤⢀⠀⠀⠀⠀⠈⢊⢞⡾⣿⡯⣏⢮⠷⠁⠀⠀
⠀⠀⠀⠈⠊⠆⡃⠕⢕⢇⢇⢇⢇⢇⢏⢎⢎⢆⢄⠀⢑⣽⣿⢝⠲⠉⠀⠀⠀⠀
⠀⠀⠀⠀⠀⡿⠂⠠⠀⡇⢇⠕⢈⣀⠀⠁⠡⠣⡣⡫⣂⣿⠯⢪⠰⠂⠀⠀⠀⠀
⠀⠀⠀⠀⡦⡙⡂⢀⢤⢣⠣⡈⣾⡃⠠⠄⠀⡄⢱⣌⣶⢏⢊⠂⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢝⡲⣜⡮⡏⢎⢌⢂⠙⠢⠐⢀⢘⢵⣽⣿⡿⠁⠁⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠨⣺⡺⡕⡕⡱⡑⡆⡕⡅⡕⡜⡼⢽⡻⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⣼⣳⣫⣾⣵⣗⡵⡱⡡⢣⢑⢕⢜⢕⡝⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⣴⣿⣾⣿⣿⣿⡿⡽⡑⢌⠪⡢⡣⣣⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⡟⡾⣿⢿⢿⢵⣽⣾⣼⣘⢸⢸⣞⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠁⠇⠡⠩⡫⢿⣝⡻⡮⣒⢽⠋⠀⠀⠀⠀

    No Shell?

*/

function goldShellLoad() {

    prompt.start();

    prompt.get(['shell'], function (err, result) {

        if (result.shell != undefined) {

            if (result.shell == "exit" || result.shell == "quit" || result.shell == "leave") {
    
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

                goldShellLoad();
                
            } else if (result.shell == "version") {

                console.log("Running on " + version.major + "." + version.minor);

                goldShellLoad();

            } else if (result.shell == "flip") {

                goldShellLoad();

            } else if (result.shell == "colors") {

                let rawDataData = fs.readFileSync('./Gold-Loader/modules/JSON/colorsOn.json');
                let studentData = JSON.parse(rawDataData);

                if (studentData.colors == true) {

                    let myData = {
                        colors: false
                    };

                    let data = JSON.stringify(myData);

                    fs.writeFileSync('./Gold-Loader/modules/JSON/colorsOn.json', data);

                    console.log('Colors Disabled');

                } else if (studentData.colors == false) {

                    let myData = {
                        colors: true
                    };

                    let data = JSON.stringify(myData);

                    fs.writeFileSync('./Gold-Loader/modules/JSON/colorsOn.json', data);

                    console.log('Colors Enabled!');

                }

                goldShellLoad();
                
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

    console.log(
        "\n   ooooooo8             o888        oooo       oooooooo8 oooo                   o888  o888\n",           
        "o888    88    ooooooo   888   ooooo888       888         888ooooo   ooooooooo8  888   888\n",                   
        "888    oooo 888     888 888 888    888        888oooooo  888   888 888oooooo8   888   888\n",                                 
        "888o    88  888     888 888 888    888               888 888   888 888          888   888\n",                                 
        " 888ooo888    88ooo88  o888o  88ooo888o      o88oooo888 o888o o888o  88oooo888 o888o o888o\n"                       
    );

    console.log("Code By Jack");
    
    let url = "https://api.npoint.io/d177dce4fa0ef6f25aee";

    let rawData = fs.readFileSync('./Gold-Loader/modules/JSON/colorsOn.json');
    let student = JSON.parse(rawData);
    
    if (student.colors == true) {

        colors.enable();

    } else if (student.colors == false) {

        colors.disable();

    }


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
