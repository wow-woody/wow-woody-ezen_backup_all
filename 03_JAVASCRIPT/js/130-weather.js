//날씨 api 키를 저장할 변수
const API_KEY = '48390ce56d89ac6c06594a37434fa036';


// 선택자 변수
// let iconArea = document.querySelector('.icon img');
// let tempArea = document.querySelector('.temp');
// let descArea = document.querySelector('.description');
// let placeArea = document.querySelector('.place');

let iconArea = document.querySelector(".icon img");
let tempArea = document.querySelector(".temp");
let descArea = document.querySelector(".description");
let placeArea = document.querySelector(".place");


// 위치 정보를 가져올 함수
function getCurrentPos() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, {
            enableHighAccuracy: true, timeout: 5000, maximumAge: 0
        });
    });
};


// 날씨 정보 가져오기 - 위치 정보를 이용해 날씨 가져올 함수
// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
async function getWeather(lat, lon) {
    console.log("받는값", lat, lon)
    // let weather = `https://api.openweathermap.org/data/3.0/onecall?${lat}&${lon}&appid={API_key}`;
    let weather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    let weatherInfo = await fetch(weather);
    console.log(weatherInfo);
    // let a = weatherInfo.json();
    // console.log(a);
    // return a;
    return weatherInfo.json();

};

// DOM에 날씨 정보 표시하는 함수
// function renderWeather(data) {
//     let temp = data.main.temp;
//     let place = data.name;
//     let des = data.weather[0].description;
//     let icon = data.weather[0].icon;
//     let iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

//     tempArea.innerHTML = `${temp}도`;
//     placeArea.innerHTML = place;
//     descArea.innerHTML = des;
//     iconArea.setAttribute('src', iconUrl);

//     console.log(icon);
// };

function renderWeather(data){
    let temp = data.main.temp;
    let place = data.name;
    let des = data.weather[0].description;
    let icon = data.weather[0].icon;
    let iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;


    tempArea.innerHTML = `${temp}도`;
    placeArea.innerHTML = `${place}시`;
    descArea.innerHTML = des;
    iconArea.setAttribute("src",iconUrl);
    console.log(icon);
};




// 초기 함수
// 위치를 가져오는 함수를 호출하여 받아온 정보를
// 날씨를 가져오는 함수에 매개값으로 전달하여 날씨를 받아오고
// dom에 표시하는 함수 호출


//날씨 정보 가져오기
async function initWeather() {
    
    //위치정보 가져오기
    let pos = await getCurrentPos();
    
    // let latitude = pos.coords.latitude;
    // let longitude = pos.coords.longitude;
    let{ latitude, longitude } = pos.coords;
    console.log(pos);
    console.log(latitude);
    console.log(longitude);
    
    //위치정보를 이용한 날씨 정보 가져오기
    let weatherData = await getWeather(latitude, longitude);
    console.log(weatherData);

    // // 화면에서 보여주기
    renderWeather(weatherData);

}
initWeather();