function checkAccess(subType) {
    if (subType === "pro" || subType === "vip") {
        return true;
    } else {
        return false;
    }
}
