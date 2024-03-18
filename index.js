var name1 = "xola";
let name2 = "buhle"
const name3 = "sinaye"

// console.log(name1)
// console.log(name3)

const fruits = ["mango", "banana","orange", "apple", "kiwi"]

const numberoffruits = fruits.length
const mango = fruits[0]
const apple = fruits[2]
const removeApple =fruits.pop()
const removeMango = fruits.shift()
const addLemon = fruits.push("lemon")
const addKiwi = fruits.unshift("kiwi")


const fruits2 = ["mango", "banana","orange", "apple", "kiwi"]
fruits2[2] = "sinaye"

const addAnumber = fruits2.push("5")

// console.log(fruits2)

console.log(typeof(fruits2))

console.log(numberoffruits)

// console.log(numberoffruits); // 4

// console.log(addLemon)

// console.log(numberoffruits)

const everythingfromorange = fruits.splice(2,3)

// console.log(everythingfromorange) //["