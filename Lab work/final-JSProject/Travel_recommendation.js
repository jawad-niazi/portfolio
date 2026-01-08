/*fetch("Travel_recommendation.json")
.then(response=>response.json())
.then(data=>{
    document.getElementById("btnSearch").addEventListener("click",SearchReport)});

function clear(){
    keywords.value="";
    resultdiv.innerHTML="";
}
document.getElementById("btnclear").addEventListener("click",clear);

function SearchReport(){
    const keywords=document.getElementById("searchInput").value.toLowerCase();
    const resultdiv=document.getElementById("srhresult");
    resultdiv.innerHTML=``;
    let foundCategory = Object.keys(data).find(category => data[category].find(keyword => keyword === keywords));
    if(foundCategory){
        data(foundCategory).forEach(element => {
            let card=`<div class="cards" ><img src="${element.imageUrl} width="200px">
            <h2>${element.name}</h2>
            <p>${element.description}</p></div>
            `
            resultdiv.innerHTML+=card;
        });
    }else{
        resultdiv.innerHTML=`<p>Please Enter name Correctly</p>`
    }
}

*/let travelData = {}; // Store JSON data globally

// Fetch JSON data and store it globally
fetch("Travel_recommendation.json")
.then(response => response.json())
.then(data => {
    travelData = data;
    document.getElementById("btnSearch").addEventListener("click", SearchReport);
})
.catch(error => console.error("Error loading JSON:", error));

// Function to search and display results
function SearchReport() {
    const keyword = document.getElementById("searchInput").value.toLowerCase();
    const resultdiv = document.getElementById("srhresult");
    resultdiv.innerHTML = ""; // Clear previous results

    let foundItems = [];

    // Define category keywords to match variations
    const categoryMap = {
        "countries": ["country", "countries"],
        "beaches": ["beach", "beaches"],
        "temples": ["temple", "temples"]
    };

    let foundCategory = Object.keys(categoryMap).find(category => 
        categoryMap[category].some(word => keyword.includes(word))
    );

    if (foundCategory) {
        if (foundCategory === "countries") {
            // If searching for a country, collect all cities inside that country
            travelData[foundCategory].forEach(country => {
                foundItems.push(...country.cities.slice(0, 2)); // Get first 2 cities
            });
        } else {
            // If searching for "temples" or "beaches", show the first 2 places
            foundItems = travelData[foundCategory].slice(0, 2);
        }
    } else {
        // If keyword is not a category, search inside all categories
        Object.entries(travelData).forEach(([category, items]) => {
            if (category === "countries") {
                // Search inside cities within countries
                items.forEach(country => {
                    let matches = country.cities.filter(city =>
                        city.name.toLowerCase().includes(keyword)
                    );
                    foundItems.push(...matches);
                });
            } else {
                // Search inside temples and beaches
                let matches = items.filter(item => item.name.toLowerCase().includes(keyword));
                foundItems.push(...matches);
            }
        });

        // Get only the first 2 matching places
        foundItems = foundItems.slice(0, 2);
    }

    // Display results
    if (foundItems.length > 0) {
        foundItems.forEach(element => {
            let card = `
                <div class="cards">
                    <img src="${element.imageUrl}" height="150px" width="250px" alt="${element.name}">
                    <h2>${element.name}</h2>
                    <p>${element.description}</p>
                </div>
            `;
            resultdiv.innerHTML += card;
        });
    } else {
        resultdiv.innerHTML = `<p>No matching results found.</p>`;
    }
}


// Function to clear search input and results
function clearSearch() {
document.getElementById("searchInput").value = "";
document.getElementById("srhresult").innerHTML = "";
}

document.getElementById("btnclear").addEventListener("click", clearSearch);
