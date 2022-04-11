import fs from 'fs';
import { errorCodes } from '../save/error.js';
import { say } from '../scripts/util/say.js';
import prompt from 'prompt';
import { myGoldProgram } from '../../../temp.js';
import { kill } from '../scripts/util/exit.js';

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

const thisInt = "engInt";

var name = myGoldProgram;

const x = name.execute.length;

onFileStart();

function onFileStart() {

    if (thisInt == name.int) {



    } else {
    
        say("< Warning: This Program is not build for this interpreter!");
    
    }

    loadProgram();

}

function loadProgram() {

    if (thisInt == name.int) {



    } else {
    
        say("< Warning: This Program is not build for this interpreter!");
    
    }
    
    for (var i = 0; i < name.execute.length; i++) {
    
        if (name.execute[i].action == 'add') {
    
            if (name.execute[i].saveToVariable == true) {
    
                myVariables[name.execute[i].variableSlot].val = name.execute[i].value1 + name.execute[i].value2;
    
                say(myVariables[name.execute[i].variableSlot].val);
    
            } else {
    
                say(name.execute[i].value1 + name.execute[i].value2);
    
            }
    
        } else if (name.execute[i].action == 'sub') {
    
            if (name.execute[i].saveToVariable == true) {
    
                myVariables[name.execute[i].variableSlot].val = name.execute[i].value1 - name.execute[i].value2;
    
                say(myVariables[name.execute[i].variableSlot].val);
    
            } else {
    
                say(name.execute[i].value1 - name.execute[i].value2);
    
            }
    
        } else if (name.execute[i].action == "mul") {
    
            if (name.execute[i].saveToVariable == true) {
    
                myVariables[name.execute[i].variableSlot].val = name.execute[i].value1 * name.execute[i].value2;
    
                say(myVariables[name.execute[i].variableSlot].val);
    
            } else {
    
                say(name.execute[i].value1 * name.execute[i].value2);
    
            }
    
        } else if (name.execute[i].action == "div") {
    
            if (name.execute[i].saveToVariable == true) {
    
                myVariables[name.execute[i].variableSlot].val = name.execute[i].value1 / name.execute[i].value2;
    
                say(myVariables[name.execute[i].variableSlot].val);
    
            } else {
    
                say(name.execute[i].value1 / name.execute[i].value2);
    
            }
    
        } else if (name.execute[i].action == "if") {
    
                if (name.execute[i].ifStatementType == "=") {
    
                    if (name.execute[i].value1 == name.execute[i].value2) {
    
                        say(name.execute[i].logIfValueTrue);
    
                    } else {
    
                        say(name.execute[i].logIfValueFalse);
    
                    }
    
                } else if (name.execute[i].ifStatementType == ">") {
    
                    if (name.execute[i].value1 > name.execute[i].value2) {
    
                        say(name.execute[i].logIfValueTrue);
    
                    } else {
    
                        say(name.execute[i].logIfValueFalse);
    
                    }
    
                } else if (name.execute[i].ifStatementType == "<") {
    
                    if (name.execute[i].value1 < name.execute[i].value2) {
    
                        say(name.execute[i].logIfValueTrue);
    
                    } else {
    
                        say(name.execute[i].logIfValueFalse);
    
                    }
    
                } else if (name.execute[i].ifStatementType == "!") {
    
                    if (name.execute[i].value1 != name.execute[i].value2) {
    
                        say(name.execute[i].logIfValueTrue);
    
                    } else {
    
                        say(name.execute[i].logIfValueFalse);
    
                    }
    
                }
    
        } else if (name.execute[i].action == "log") {
    
            say(name.execute[i].value1);
    
        } else if (name.execute[i].action == "var") {
    
            myVariables[name.execute[i].variableSlot].val = name.execute[i].value1;
    
        } else if (name.execute[i].action == "logVar") {
    
            console.log(myVariables[name.execute[i].variableSlot].val);
    
        } else if (name.execute[i].action == "input") {
    
            myVariables[name.execute[i].variableSlot].val = process.argv.slice(2).toString();
    
        }
    
        if (name.execute[x - 1].action == "end") {
    
        
    
        } else {
        
            say('Error: Program Does not End!');
        
        }
    
    }   
    
    prompt.start();
    
    prompt.get(['press anything to continue'], function (err, result) {
    
    });

}
