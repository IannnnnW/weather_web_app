class UI{
    constructor(){
        this.location = document.querySelector('#w-location');
        this.desc = document.querySelector('#w-desc');
        this.humidity = document.querySelector('#w-humidity');
        this.icon = document.querySelector('#w-icon');
        this.temp = document.querySelector('#w-temp');
        this.feelsLike = document.querySelector('#w-feels-like');
        this.wind = document.querySelector('#w-wind');
    }
    
    paint(condition){
        this.desc.textContent = this.toTitleCase(condition.weather[0].description);
        this.location.textContent = `${condition.name}, ${condition.sys.country}`;
        this.humidity.textContent = `Relative Humidity: ${condition.main.humidity}%`;
        this.feelsLike.textContent = `Feels Like: ${condition.main.feels_like}`
        this.temp.textContent = `Temperature: ${condition.main.temp} F`;
        this.icon.setAttribute('src', "https://openweathermap.org/img/w/"+condition.weather[0].icon+".png");
        this.wind.textContent = `Wind Speed: ${condition.wind.speed} km/h`;
    }
    toTitleCase(str) {
        // Split the string into words
        var words = str.split(" ");
      
        // Iterate through the words array and convert each word to title case
        for (var i = 0; i < words.length; i++) {
          // Get the current word
          var word = words[i];
      
          // Convert the first letter of the word to uppercase
          var firstLetter = word[0].toUpperCase();
      
          // Convert the rest of the word to lowercase
          var restOfWord = word.slice(1).toLowerCase();
      
          // Concatenate the first letter and the rest of the word
          words[i] = firstLetter + restOfWord;
        }
      
        // Join the words array into a single string
        return words.join(" ");
    }
}