// function getFileName(file) {
//     indexFileName = file.indexOf(".");
//     nakedFileName = file.slice(0, indexFileName);
//     return nakedFileName;
// }

function getFileName(file) {
    let indexFileName = file.indexOf(".");
    
    if (indexFileName !== -1) {
        return file.slice(0, indexFileName);
    } else {
        return file;
    }
}


