const breakfastMenu=['Pancakes', 'Eggs Benedict', 'Oatmeal', 'Frittata'];
const  mainCourseMenu=["Pancakes","Eggs","Oatmeal","Frittata","Fritt"];
const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];


//const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
//document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

const breakfastMenuItemsHTML =breakfastMenu.map((item,index)=>`<p>item ${index+1}:${item}</p>`).join("");
document.getElementById("breakfastMenuItems").innerHTML= breakfastMenuItemsHTML;
let mainCourseItems;
mainCourseMenu.forEach((item,index) => {
    mainCourseItems+= `<p>item ${index+1}: ${item}</p>`;
}
    
);
document.getElementById('mainCourseMenuItems').innerHTML=mainCourseItems;

let dessertItems="";
for(let i=0;i<dessertMenu.length;i++){
    dessertItems+= `<p>items ${i+1}:${dessertMenu[i]}</p>`;
}
document.getElementById("dessertMenuItems").innerHTML=dessertItems;