let choices = document.querySelectorAll(".choice")
let you=document.querySelector(".you")
let computer=document.querySelector(".comp")
let result=document.querySelector(".result")


function startshake(){
    you.style="animation: shake 1s linear 3 ;"
    computer.style="animation: shake 1s linear 3 ;"
}
function stopshake(){
    you.style="animation: none;"
    computer.style="animation: none;"
}






choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        result.classList.remove("draw")
        result.classList.remove("win")
        result.classList.remove("lose")
        result.innerText=""
        let userChoice=choice.getAttribute("id")
        let option=["stone","paper","scissor"]
        let compIndex = Math.floor(Math.random()*3)
        let compChoice = option[compIndex]
        startshake()
        setTimeout(()=>{
            stopshake()
            playGame(userChoice,compChoice)
        },3000)
    })
})
function playGame(userChoice,compChoice){
    if(userChoice==="stone"){
        you.innerText="✊"
    }else if(userChoice==="paper"){
        you.innerText="🤚"
    }else{
        you.innerText="✌️"
    }
 
    if(compChoice==="stone"){
        computer.innerText="✊"
    }else if(compChoice==="paper"){
        computer.innerText="🤚"
    }else{
        computer.innerText="✌️"
    }
 
 
    if(userChoice==compChoice){
        result.innerText="Draw"
        result.classList.add("draw")
    }
    else if(userChoice==="stone" && compChoice==="scissor" || userChoice==="paper" && compChoice==="stone" || userChoice==="scissor" && compChoice==="paper"  ){
        result.innerText="you win"
        
        result.classList.add("win")
    }else{
        result.innerText="you loss"
        
        result.classList.add("lose")
    }
}
