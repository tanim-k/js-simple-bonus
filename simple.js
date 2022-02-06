for(i = 1; i < 4; i++) {
    console.log(i);
}
// onnek vabe kora jai //
function consoleNumber(i) {
    if(i>3) {
        return;
    }
    console.log(i);
    consoleNumber(i+1);
}
consoleNumber(1);