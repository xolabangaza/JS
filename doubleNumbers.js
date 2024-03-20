const Arr = [26, 22, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

for (let i = 0; i < Arr.length; i++) {
   (Arr[i] *= 2)
}
// console.log(Arr);


let Arr2 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let copyArr = []

function double  (Arr , n) {
    for( i=0; i <Arr.length ; i++ ) {
        copyArr[i] = Arr[i] *n
    }
    return copyArr
}
console.log(double(Arr2,2))