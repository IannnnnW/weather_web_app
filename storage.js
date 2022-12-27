class Storage{
    setToLocalStorage(city){
        localStorage.setItem('city', city);
    }
    getCityFromLocalStorage(){
        return localStorage.getItem('city');
    }
}