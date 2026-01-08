let testText="this is what you are going to write blahh blahh blahhh understood"
let startTime,endTime;

function startTest(){
    document.getElementById("inputText").value=testText;
    document.getElementById("yourResult").innerHTML="";
    startTime=new Date().getTime();

    var button=document.getElementById("btn");
    button.innerHTML="End test";
    button.onclick=endTest;

}
 
function endTest(){
    endTime=new Date().getTime();
        document.getElementById("userInput").readOnly="true";

        var esclaedTime=(endTime-startTime)/1000;

        var usertypeWord=document.getElementById("userInput").value;

        var typeWord=usertypeWord.split(/\s+/).filter(function(word){return word!==""}).length;

        var wpm=0;
        if(esclaedTime!==0 && !isNaN(typeWord)){
            wpm=Math.round(typeWord/esclaedTime)*60;
        }

        var DisplayOutput=document.getElementById("yourResult");
        DisplayOutput.innerHTML=
        `<h2>Your Result is here</h2>
        <p>Type Words:${typeWord}</p>
        <p>Time Elapsed:${esclaedTime.toFixed(2)}</p>
        <p>Word Per Minute:${wpm}</p>
        
        `
        var button=document.getElementById("btn");
        button.innerHTML="Start Test";
        button.onclick=startTest;

}