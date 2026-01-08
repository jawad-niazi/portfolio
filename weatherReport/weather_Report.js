function showWeatherDetail(event){
    event.preventDefault()


const city=document.getElementById('city').value;
const apiKey='4f413d90db79a1f163e775ab3e81b31d';
const apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;


fetch(apiUrl)
.then(response=>response.json())
.then(data=>{
    const result=document.getElementById('result');
    result.innerHTML=
    `<p>Weather in ${data.name}</p>
    <p>Temprature ${data.main.temp}</p>
   
    <p>weather: ${data.weather[0].description}</p>
    `
}).catch(error=>{
    console.error('error fetching data :',error);
    const errorResult=result.innerHTML="please try again with real city name";}
)

}

document.getElementById('weather').addEventListener('submit',showWeatherDetail);