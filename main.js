let btn1 = document.querySelector("#btn1")
let btn2 = document.querySelector("#btn2")
let btn3 = document.querySelector("#btn3")
let btn4 = document.querySelector("#btn4")
let btn5 = document.querySelector("#btn5")
let btn6 = document.querySelector("#btn6")
let btn7 = document.querySelector("#btn7")
let btn8 = document.querySelector("#btn8")
let btn9 = document.querySelector("#btn9")
let btn10 =document.querySelector("#btn10")
let btn11 =document.querySelector("#btn11")
let btn12 =document.querySelector("#btn12")

let container = document.querySelector(".big-container")

btn1.addEventListener("click" , (event) =>{
    container.style.color = "white";
    container.style.background = "black";
})

btn2.addEventListener("click" , (event)=>{
    container.style.color = "white";
    container.style.background = "red"; 

})

btn3.addEventListener("click" , (event)=>{
    container.style.color = "white";
    container.style.background = "green"; 

})

btn4.addEventListener("click" , (event)=>{
    container.style.color = "white";
    container.style.background = "orange"; 

})

btn5.addEventListener("click" , (event)=>{
    container.style.color = "white";
    container.style.background = "pink"; 

})

btn6.addEventListener("click" , (event)=>{
    container.style.color = "white"
    container.style.background = "grey" 

})

btn7.addEventListener("click" , (event)=>{
    container.style.color = "white"
    container.style.background = "darkblue" 

})

btn8.addEventListener("click" , (event)=>{
    container.style.color = "white"
    container.style.background = "olive" 

})
btn9.addEventListener("click" , (event)=>{
    container.style.color = "white"
    container.style.background = "skyblue" 

})
btn10.addEventListener("click" , (event)=>{
    container.style.color = "white"
    container.style.background = "mediumorchid" 

})
btn11.addEventListener("click" , (event)=>{
    container.style.color = "white"
    container.style.background = "hotpink" 

})
btn12.addEventListener("click" , (event)=>{
    container.style.color = "white"
    container.style.background = "burlywood" 

})




let font = document.querySelector("#font")
let fontsize = document.querySelector("#fontsize")
let border = document.querySelector("#border")
let fontWeight = document.querySelector("#fontWeight")
let fontFamily = document.querySelector("#fontFamily")
let options = document.querySelector("#options")

options.addEventListener("change" , (event)=>{
    event.preventDefault()
    if(event.target.value == "font-family: 'PT Sans', sans-serif;"){
        font.style.fontFamily = "'PT Sans', sans-serif";
    }
    else if(event.target.value == "font-family: 'Bebas Neue', sans-serif;" ){
        font.style.fontFamily = "'Bebas Neue', sans-serif";
    }
    else if(event.target.value == "font-family: 'Abril Fatface', cursive;"){
        font.style.fontFamily = "'Abril Fatface', cursive";
    }
    else if(event.target.value == "font-family: 'IBM Plex Mono', monospace;"){
        font.style.fontFamily = "'IBM Plex Mono', monospace";
    }
})

fontsize.addEventListener("keyup" , (event) =>{
    event.preventDefault()
   font.style.fontSize = fontsize.value + "px";
})

border.addEventListener("keyup" , (event) =>{
    event.preventDefault()
    container.style.borderRadius = border.value + "px" ;

})

fontWeight.addEventListener("keyup" , (event) =>{
    event.preventDefault()
    font.style.fontWeight = fontWeight.value + "";
})