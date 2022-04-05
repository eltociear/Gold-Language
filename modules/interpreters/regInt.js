import fs from 'fs';
import { errorCodes } from '../save/error.js';
import { say } from '../scripts/util/say.js';
import prompt from 'prompt';
import { myGoldProgram } from '../program.js';

var myVariables = [
    {
        val: ""
    },
    {
        val: ""
    },
    {
        val: ""
    }
];

var currentError = {
    code: 0,
    des: ""
}

const thisInt = "regInt";

var name = myGoldProgram;

const x = name.ex.length;

if (thisInt == name.int) {



} else {

    say("< Warning: This Program is not build for this interpreter!");

}

for (var i = 0; i < name.ex.length - 1; i++) {

    if (name.ex[i].fun == 'add') {

        if (name.ex[i].saveToVar == true) {

            myVariables[name.ex[i].slot].val = name.ex[i].val1 + name.ex[i].val2;

            say(myVariables[name.ex[i].slot].val);

        } else {

            say(name.ex[i].val1 + name.ex[i].val2);

        }

    } else if (name.ex[i].fun == 'sub') {

        if (name.ex[i].saveToVar == true) {

            myVariables[name.ex[i].slot].val = name.ex[i].val1 - name.ex[i].val2;

            say(myVariables[name.ex[i].slot].val);

        } else {

            say(name.ex[i].val1 - name.ex[i].val2);

        }

    } else if (name.ex[i].fun == "mul") {

        if (name.ex[i].saveToVar == true) {

            myVariables[name.ex[i].slot].val = name.ex[i].val1 * name.ex[i].val2;

            say(myVariables[name.ex[i].slot].val);

        } else {

            say(name.ex[i].val1 * name.ex[i].val2);

        }

    } else if (name.ex[i].fun == "div") {

        if (name.ex[i].saveToVar == true) {

            myVariables[name.ex[i].slot].val = name.ex[i].val1 / name.ex[i].val2;

            say(myVariables[name.ex[i].slot].val);

        } else {

            say(name.ex[i].val1 / name.ex[i].val2);

        }

    } else if (name.ex[i].fun == "if") {

            if (name.ex[i].type == "=") {

                if (name.ex[i].val1 == name.ex[i].val2) {

                    say(name.ex[i].logvaluetrue);

                } else {

                    say(name.ex[i].logvaluefalse);

                }

            } else if (name.ex[i].type == ">") {

                if (name.ex[i].val1 > name.ex[i].val2) {

                    say(name.ex[i].logvaluetrue);

                } else {

                    say(name.ex[i].logvaluefalse);

                }

            } else if (name.ex[i].type == "<") {

                if (name.ex[i].val1 < name.ex[i].val2) {

                    say(name.ex[i].logvaluetrue);

                } else {

                    say(name.ex[i].logvaluefalse);

                }

            } else if (name.ex[i].type == "!") {

                if (name.ex[i].val1 != name.ex[i].val2) {

                    say(name.ex[i].logvaluetrue);

                } else {

                    say(name.ex[i].logvaluefalse);

                }

            }

    } else if (name.ex[i].fun == "log") {

        say(name.ex[i].val1);

    } else if (name.ex[i].fun == "var") {

        myVariables[name.ex[i].slot].val = name.ex[i].val1;

    } else if (name.ex[i].fun == "logVar") {

        console.log(myVariables[name.ex[i].slot].val);

    }

    if (name.ex[x - 1].fun == "end") {

    

    } else {
    
        say('Error: Program Does not End!');
    
    }

}   

prompt.start();

prompt.get(['press anything to continue'], function (err, result) {

});
