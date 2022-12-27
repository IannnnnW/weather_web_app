class Weather{
    constructor(cityName){
    this.apiKey = "18f39a47a9806335e0a2e2e38cc210f8";
    this.cityName = cityName;
    this.limit = 1;
    }

    //Fetch Location from API
    async  location(){
        const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${this.cityName}&limit=${this.limit}&appid=${this.apiKey}`);
        const latLong = await response.json();
        return latLong;
    }

    //Fect weather from API
    async  weatherCondition(lat, lon){
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.apiKey}`);
        const condition = await response.json();
        return condition;
    }
    
    changeLocation(cityName){
        this.cityName = cityName;
    }
}
