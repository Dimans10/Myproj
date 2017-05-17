angApp.controller('LoremRepeatController', 
    function QuestionController($scope, $http){
      $http({method: 'GET', url: 'http://localhost:8000/notes/Lorem ipsum'}).
      then(function success(response) {
          console.log(response.data);
          $scope.lorem = response.data;
          }, function error(response){
              console.log("Возникла ошибка");
              console.log(response.status);
          });
    }
)