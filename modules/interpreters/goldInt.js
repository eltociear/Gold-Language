import fs from 'fs';
import { myGoldProgram } from '../program.js';
import { errorCodes } from '../save/error.js';

// GoldInt Version 0.2 //

var currentError = {
    code: 0,
    des: ""
}

var myEgg = {
    
}

var myVars = [
    {
        name: "",
        val: ""
    },
    {
        name: "",
        val: ""
    },
    {
        name: "",
        val: ""
    }
];

export function goldLoad(fileName) {

    var name = myGoldProgram;

    for (var i = 0; i < name.ex.length; i++) {

        if (name.ex[i].fun == 'add') {

            name.ex[i].variable = name.ex[i].val1 + name.ex[i].val2;

            console.log(name.ex[i].val1 + name.ex[i].val2);

        } else if (name.ex[i].fun == 'sub') {

            name.ex[i].variable = name.ex[i].val1 - name.ex[i].val2;

            console.log(name.ex[i].val1 - name.ex[i].val2);



        } else if (name.ex[i].fun == "mul") {

            name.ex[i].variable = name.ex[i].val1 * name.ex[i].val2;

            console.log(name.ex[i].val1 * name.ex[i].val2);

        } else if (name.ex[i].fun == "div") {

            name.ex[i].variable = name.ex[i].val1 / name.ex[i].val2;

            console.log(name.ex[i].val1 / name.ex[i].val2);

        } else if (name.ex[i].fun == "if") {

            if (name.ex[i].type == "=") {

                if (name.ex[i].val1 == name.ex[i].val2) {

                    console.log(name.ex[i].logvaluetrue);

                } else {

                    console.log(name.ex[i].logvaluefalse);

                }

            } else if (name.ex[i].type == ">") {

                if (name.ex[i].val1 > name.ex[i].val2) {

                    console.log(name.ex[i].logvaluetrue);

                } else {

                    console.log(name.ex[i].logvaluefalse);

                }

            } else if (name.ex[i].type == "<") {

                if (name.ex[i].val1 < name.ex[i].val2) {

                    console.log(name.ex[i].logvaluetrue);

                } else {

                    console.log(name.ex[i].logvaluefalse);

                }

            } else if (name.ex[i].type == "!") {

                if (name.ex[i].val1 != name.ex[i].val2) {

                    console.log(name.ex[i].logvaluetrue);

                } else {

                    console.log(name.ex[i].logvaluefalse);

                }

            }

        } else if (name.ex[i].fun == "egg") {



        } else if (name.ex[i].fun == "log") {

            console.log(name.ex[i].val1);

        } else if (name.ex[i].fun == "var") {

            myVars[name.ex[i].slot].name = name.ex[i].name;
            myVars[name.ex[i].slot].val = name.ex[i].val1;

        }

    }   

}
