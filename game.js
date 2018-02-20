

var lowestNumber = 1;
var highestNumber = 100;
myGuessNumner = Math.floor((Math.random() * highestNumber) + lowestNumber);

function guess() {
    var userGuess = document.getElementById("user_guess").value;
    if (isNaN(userGuess))
    {
        alert("You must enter a number in your guess");
    }
    else
    {
        if (userGuess > myGuessNumner)
        {
            document.getElementById("output").value = "Too High";
        }
        else if (userGuess < myGuessNumner)
        {
            document.getElementById("output").value = "Too Low";
        }
        else
        {
            alert("la-la-la!");
        }
    }
}

