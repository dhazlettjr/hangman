let app = angular.module("hangman", []);
app.controller("GameController", ['$scope', function($scope){
  let words = ["rat", "cat", "bat", "mat"];

  $scope.incorrectLetters = [];
  $scope.correctLetters = [];
  $scope.guesses = 6;
  $scope.displayWord = '';
  $scope.input = {
    letter: ''
  }

  let selectRandomWord = () => {
    let index = Math.round(Math.random()*words.length)
  }
}]);