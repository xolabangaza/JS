// let reversed ="sinaye"

// function reverseString(str) {
//     return str.split('').reverse().join('');
// }

// let result = reverseString(reversed);
// console.log(result); 
// let original = "sinaye";
// let result = reverseString("Sinaye");

let reversed = "";
function reverseString(str) {
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

console.log(reverseString("DJ")); 

for( let i=1; i<=6 ; i++){

}