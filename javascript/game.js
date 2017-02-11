// Initialize variables


var wordBank = ["documents", "clock", "safe", "computer", "box", "camera", "chalkboard", "bookshelf", "feather", "foot", "tounge", "hammer", "potato", "train", "snake", "umbrella", "whistle", "cheese", "house", "jewel", "scissors", "trousers", "cloud"];
var answerArray = [];
var countUp = 0;
var countDown = 15;
var blanks;
var countUp = 0
var left = 15;
var collector = [];
var letterBoard;

// Game startup and initial function

var randWord = wordBank[Math.floor(Math.random()*wordBank.length)];
console.log(randWord);

function startUp()
{
	for (var i = 0; i < randWord.length; i++)
	{
		answerArray[i] = "_";
	}
	blanks = answerArray.join(" ");
	document.getElementById("answer").innerHTML = blanks;
}

function Letter()
{
	var letter = document.getElementById("letter").value;

	if (letter.length > 0)
	{
		for (var i = 0; i < randWord.length; i++)
		{
			if (randWord[i] === letter)
			{
				answerArray[i] = letter;
			}
		}
		if (randWord.indexOf(letter) == -1)
		{
			collector.push(letter);
			console.log(collector);
			letterBoard = collector.join(" ");
		}

		countUp++;
		left--;
		document.getElementById("counter").innerHTML="number of clicks: " + countUp;
		document.getElementById("tester").innerHTML="number of lives left: " + left;
		document.getElementById("answer").innerHTML=answerArray.join(" ");
		document.getElementById("letters").innerHTML=collector.join(" ");

	}
}

startUp();