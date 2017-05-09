// DIRECTIVE
weatherApp.directive("weatherReport",function(){
    console.log("ABCD");
    
   return{
      restrict:'AE',
      templateUrl: 'directives/weatherReport.html',
      replace : true,
      scope: {
         weatherDay: "=",
         formatDate:"&formatDate",  
         farenheitValue: "&farenheitValue",
         celciusValue: "&celciusValue",
         state:"=state",
         formatSeq:"@formatSeq",
       }    
   }; 
});

// Directive for making enter in text box work....
weatherApp.directive('enterSubmit', function() {
        return function(scope, element, attrs) {
            element.bind("keydown keypress", function(event) {
                if(event.which === 13) {
                    scope.$apply(function(){
                        scope.$eval(attrs.enterSubmit, {'event': event});
                    });

                    event.preventDefault();
                }
            });
        };
    });