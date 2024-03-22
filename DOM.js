// PARSEINT TO CONVERT A STRING TO A NUMBER

// let a = document.getElementById("num1");
// let b = document.getElementById( "num2") ;
// let p = document.getElementById("emoticon")

// let btn = document.querySelector("button");
// let output = document.querySelector("#pText");
// let toggler = document.querySelector("#toggler");

// btn.addEventListener('click', () => {
//     output.style.border =  '2px solid purple';
//     let results = parseInt(a.value) + parseInt(b.value); 
//     output.innerHTML = results
// })

// toggler.addEventListener("click", ()=>{
//     alert("HELLO")
//     if(p.innerHTML == "😊"){
//         p.innerHTML = "😭"

//     }else if(p.innerHTML == "😭"){
//         p.innerHTML = "😊"
//     }
// })
// mainDiv.innerHTML = "<h1>hello</h1>"
// alert("hello")

const mainDiv = document.getElementById("mainDiv")

let buttonFunc;
let isLogged = prompt("Are You Logged In")


let img = document.createElement( "img")
img.setAttribute("src" , "fghjkl;")
mainDiv.append(img)

if(isLogged === "true"){
    buttonFunc = "Logout"

    for(i =0 ; i<10; i++){
        mainDiv.innerHTML += "<h1>Hello</h1>"
        mainDiv.classList.add("isLogged")
    }
}
else{
    buttonFunc = "Login"

    mainDiv.innerHTML = "<h1>Helloo</h1> <input type='text'><button>Login</button>"
    mainDiv.classList.add("isNotLogged")
}


