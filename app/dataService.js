angApp.factory('dataService', function(){
        $http({ metod: 'GET', url: 'http://localhost:8000/notes'}).
        then(function success(response) {
        $scope.lorem = response.data;
        $scope.lorem.text = response.data[0].text;
        $scope.lorem.title = response.data[0].title;
    }, function error(response){
        console.log("Возникла ошибка");
        console.log(response.status);
          });
    return{
        question:{
            text: 'Какой js-фреймворк лучше использовать?',
            author: 'Иван Иванов',
            date: '20/10/2013'
        }
    };
})