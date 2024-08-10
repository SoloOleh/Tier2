function createFileName(name, ext) {
    const trimmedName = name.trim();
    const trimmedExt = ext.trim();
    return trimmedName + '.' + trimmedExt;
}