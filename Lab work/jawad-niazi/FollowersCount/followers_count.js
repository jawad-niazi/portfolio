let count =0;
function increasingCount(){
    count++
    displayCount();
    checkCountValue()
}
function displayCount(){
    document.getElementById("countDisplay").innerHTML=count;
      
}
function checkCountValue(){
    if(count===10){
        alert("your Instagram post gain 10 followers")
    } else if(count===20){
        alert("your instagrm post gain 20 followers")
    }
}