// Declare an array that contain the difference  grade Category

// eg 
// A = 80 - 100,
// B = 60 - 79,
// C = 50 - 59,
// F = 0  - 49.

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

console.log(student3)




