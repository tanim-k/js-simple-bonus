/* let sum = 0 ;
for (i=3; i>=1; i--) {
    sum = sum + i;
}
console.log(sum);
 */
// function for sum //
function sum(i) {
    console.log(i);
    if (i==1){
        return 1;
    }
    return i + sum(--i);
}
console.log(sum(5));