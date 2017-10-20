(function () {
    'use strict';

    angular
        .module('app')
        .controller('PaymentCtrl', PaymentCtrl);

    function PaymentCtrl($scope, $timeout, $http, ngDialog) {

        function init(){
          $scope.paymentInfo = {};
          $scope.paymentInfo.number = '';
          $scope.paymentInfo.cvv = '';
        }

        $scope.save = function(data){
            $http.post('/payments/save', {data: data}).then(function(res){
               ngDialog.open({
                  template: "Your card successfully added !",
                  plain: true
               });
               $scope.paymentInfo = {};
               $scope.paymentInfo.number = '';
               $scope.paymentInfo.cvv = '';
            }).catch(function(error){
               console.log(error.data.errors);
               ngDialog.open({
                  template: error.data.errors,
                  plain: true
               });
            });

        }

        init();
    }
})();

angular
    .module('app').directive('numbersOnly', function(){
   return {
     require: 'ngModel',
     link: function(scope, element, attrs, modelCtrl) {
       modelCtrl.$parsers.push(function (inputValue) {
           if (inputValue == undefined) return ''
           var transformedInput = inputValue.replace(/[^0-9]/g, '');
           if (transformedInput!=inputValue) {
              modelCtrl.$setViewValue(transformedInput);
              modelCtrl.$render();
           }

           return transformedInput;
       });
     }
   };
});

angular
    .module('app').directive("limitTo", [function() {
    return {
        restrict: "A",
        link: function(scope, elem, attrs) {
            var limit = parseInt(attrs.limitTo);
            angular.element(elem).on("keypress", function(e) {
                if (this.value.length == limit) e.preventDefault();
            });
        }
    }
}]);
