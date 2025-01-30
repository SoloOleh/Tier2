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

// v2
function getFileName(file) {
  if (file.includes(".")) {
    const indexFileName = file.indexOf(".");
    const fileName = file.slice(0, indexFileName);
    return fileName;
  } else {
    return file;
  }
}
