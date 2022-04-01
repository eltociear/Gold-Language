import fs from 'fs';

export function copyContent(fileName, dest) {

    try {
        fs.copyFileSync(fileName, dest);
        console.log("Copying File " + fileName);
        return true;
    } catch (err) {
        console.log()
        return false;

    }

}
