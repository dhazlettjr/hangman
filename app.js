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
    return words[index];
  }

  let newGame = () => {
    $scope.incorrectLetters = [];
    $scope.correctLetters = [];
    $scope.guesses = 6;
    $scope.displayWord = '';

    selectedWord = selectRandomWord();
    let tempDisplayWord = '';
    for (let i = 0; i < selectedWord.length; i++) {
      tempDisplayWord +='*';
    }
    $scope.displayWord = tempDisplayWord;
}

$scope.letterChosen = () => {
  for (let i = 0; i < $scope.correctLetters.length; i++) {
    if($scope.correctLetters[i].toLowerCase() == $scope.input.letter.toLowerCase()){
      $scope.input.letter = "";
      return;
    }
  }

    for (let i = 0; i < $scope.incorrectLetters.length; i++) {
      if($scope.incorrectLetters[i].toLowerCase() == $scope.input.letter.toLowerCase()){
        $scope.input.letter = "";
        return;
      }
    }

    let correct = false;
    for (let i = 0; i < selectedWord.length; i++) {
      if(selectedWord[i].toLowerCase() == $scope.input.letter.toLowerCase()){
        $scope.displayWord = $scope.displayWord.slice(0,i)+$scope.input.letter.toLowerCase()+$scope.displayWord.slice(i+1);
        correct = true;
      }
    }
    if(correct){
      $scope.correctLetters.push($scope.input.letter.toLowerCase());
    } else {
      $scope.incorrectLetters.push($scope.input.letter.toLowerCase());
    }
    $scope.input.letter = "";
  }


newGame();
}]);