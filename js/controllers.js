// CONTROLLERS
weatherApp.controller('homeController',['$scope','$resource','$location','cityService',function($scope,$resource,$location,cityService){
        
    $scope.city = cityService.city;
    
    // The city value is being watched...
    $scope.$watch('city',function(){
        cityService.city = $scope.city;
    });
       
     $scope.enterSubmit = function(){
        console.log('MMM');
        $location.path('/forecast');
    }
    
}]);

weatherApp.controller('forecastController',['$scope','$filter','$routeParams','$location','cityService','weatherService',
                      function($scope,$filter,$routeParams,location,cityService,weatherService){
    $scope.city = cityService.city;
    $scope.state = true;
    
    $scope.days = $routeParams.days || '4';
                          
    console.log($scope.days);
                          
    $scope.weatherResult = weatherService.getWeather($scope.city,$scope.days);
    
    $scope.farenheitValue = function(kelvin){
        return Number((1.8 * (kelvin - 273) + 32).toFixed(2));
    }
    
    $scope.celciusValue = function(kelvin){
        return Number((kelvin - 273.15).toFixed(2));
    }
    
    $scope.formatDate = function(date,formatSeq){
        return $filter('date')(new Date(date * 1000),formatSeq);
    }
    
    $scope.toggle = function () {
      $scope.state = !$scope.state;
      console.log($scope.state);
    };
    
   
                          
    
}]);