let userRole='admin';
let accessLevel;
if (userRole === 'admin'){
    accessLevel='full access granted';
} else if(userRole=== 'manager'){
    accessLevel='Limites access granted' ;
}else {
    accessLevel='no access granted';
}

console.log('access level:'+accessLevel);

let isLoggedIn= true;
let userMessage;
if(isLoggedIn ===true){
   if(userRole==='admin'){
    userMessage= 'Welcome, Admin';
   }else {
    userMessage= 'Welcome, User';
   }
} else{
    userMessage= 'Please Login To access'
}

console.log('user Message:'+ userMessage);

let userType= "Subscriber";
let userCategory;
switch(userType){
    case 'admin':
userCategory='Adminstrator';
break;
case 'Manager':
    userCategory='Manager';
    break;
    case 'Subscriber':
        userCategory= 'Subscriber';
        break;
        default:
            userCategory='Unknown';
            break;



}

console.log('user Category:'+userCategory);