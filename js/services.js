// SERVICES
weatherApp.service('cityService',function(){
    
    this.city ="New York";
    
});

// Reusable service to get weather data....
weatherApp.service('weatherService',['$resource',function($resource){

    this.getWeather = function(city,days){
        weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily?APPID=04201819a361e96aa45d9fe17e25dab9",
                                 {callback:"JSON_CALLBACK" },{get: {method: "JSONP"}});
        return weatherAPI.get({q: city, cnt: days });
    }
    
}]);