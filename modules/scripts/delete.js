import fs from 'fs';

export function deleteContent(fileName, dest) {

    try {
        fs.unlink(fileName, (err) => {
            if (err) throw err;
        });
        fs.writeFile(fileName, 'var myGoldProgram; \nexport { myGoldProgram };', (err) => {
            if (err) throw err;
        });
        console.log("Finished!");
        return true;
    } catch (err) {
        console.log()
        return false;
    }

}
