//Initialize  Objects
const store = new Storage;
const condition = new Weather(store.getCityFromLocalStorage());
const ui = new UI;

document.addEventListener('DOMContentLoaded', getWeather);

document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;

    //Change Location
    condition.changeLocation(city);

    //Set location to Local Storage
    store.setToLocalStorage(city);

    //Get and Display Weather
    getWeather();

    //Close Modal
    $('#locModal').modal('hide');
});

function getWeather(){
condition.location()
.then(data => condition.weatherCondition(data[0].lat, data[0].lon))
.then(data => ui.paint(data));
}