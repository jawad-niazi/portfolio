function multi(){
    const firstNumber=Number(document.getElementById("input1").value) ;
const secNumber=Number(document.getElementById("input2").value);

if(!isNaN(firstNumber) && !isNaN(secNumber)){

    const result2=multiply(firstNumber,secNumber);
    const displayResult=document.getElementById("displayResult");
displayResult.innerHTML=
`the result is ${result2}`;
    

}else{
    console.log("please Input Numbers correctly");
}


function multiply(a,b){
    //debugger;
    return a*b;
}
}



