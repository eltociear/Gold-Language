import fs from 'fs';
import { myGoldProgram } from '../program.js';
import { errorCodes } from '../save/error.js';
import { say } from '../scripts/util/say.js';

// GoldInt Version 1.0 //

var currentError = {
    code: 0,
    des: ""
}

var myEgg = {
    
}

export function goldLoad(fileName) {

    var name = myGoldProgram;

    for (var i = 0; i < name.ex.length; i++) {

        if (name.ex[i].fun == 'add') {

            say(name.ex[i].val1 + name.ex[i].val2);

        } else if (name.ex[i].fun == 'sub') {

            say(name.ex[i].val1 - name.ex[i].val2);

        } else if (name.ex[i].fun == "mul") {

            say(name.ex[i].val1 * name.ex[i].val2);

        } else if (name.ex[i].fun == "div") {

            say(name.ex[i].val1 / name.ex[i].val2);

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

        } 

    }   

}
