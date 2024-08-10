function checkFileExtension(fileName, ext) {
    if (fileName.includes(ext)) {
        return "File extension matches";
    }
    else {
        return "File extension does not match";
    }
}