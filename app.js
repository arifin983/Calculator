let  firstVal = "";
let buttons = document.querySelectorAll(".childDiv");
Array.from(buttons).forEach((button)=>{
    button.addEventListener("click",(e)=>{
        if(e.target.innerHTML === "="){
            firstVal = eval(firstVal);
            document.getElementById("screen").innerHTML = firstVal;
        }else if(e.target.innerHTML === "AC"){
            firstVal = ""
            document.getElementById("screen").innerHTML  = firstVal
        }else{
            // console.log(button)
            firstVal = firstVal + e.target.innerHTML;
            document.getElementById("screen").innerHTML = firstVal;

        }

        // console.log(button)
        
        
        
    })
})




