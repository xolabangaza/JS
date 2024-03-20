// Declare an array that contain the difference  grade Category

// eg 
// A = 80 - 100,
// B = 60 - 79,
// C = 50 - 59,
// F = 0  - 49.

//  const Arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]


//  for(i = 0; i < Arr.length ; i++ ) {
//     if(Arr(i) === target)
//     console.log("I Found" , target , "at index" , i)
//    break;
//  }



 //  for(i = 0; i < Arr.length; i++) 
//      if(Arr(i) === target

//          console.log("found" , target , " at index" , i)
//          break;
//      )
//      else(
//          console.log("Not Found")
//      )
//  }


let gradeCate = ["A","B","C","F"]


let student3 = {
    name: "Sinaye",
    surname: "B",
    mark: 20,
    gradeCat: "Unknown"
}


if(student3.mark > 80 ) {
    student3.gradeCat = gradeCate[0]
}

else if(student3.mark > 60 && student3.mark <79) {
    student3.gradeCat = gradeCate[1]
}

else if( student3.mark >50 && student3.mark <59) {
    student3.gradeCat = gradeCate[2]
}

else if(student3.mark < 49) {
    student3.gradeCat = gradeCate[3]
}

// console.log(student3)


let start2 = 0
while(start2 < 10){
    console.log(start2)
    start2++
}

// const Arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// const target = 9;

// for (let i = 0; i < Arr.length; i++) {
//     if (Arr[i] === target) {
//         console.log("found", target, "at index",i);
//         break;
//     } else {
//         console.log("Not Found");
//     }
// }

const Arr = [26, 22, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

for (let i = 0; i < Arr.length; i++) {
    Arr[i] *= 2;
}
console.log(Arr);






