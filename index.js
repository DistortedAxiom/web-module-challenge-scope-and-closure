// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 *
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 *
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 *
 * 1. What is the difference between counter1 and counter2?
 *
 * counter1 have the variable "count" defined inside its function (local variable) while counter2 have the count variable defined outside of its function (global variable)
 *
 * 2. Which of the two uses a closure? How can you tell?
 *
 * counter1 utilizes closure as the const counter1 is declared, which then will keep track of the value of "counter" everytime counter1 is called.
 *
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better?
 *
 * We would use counter1 if we would like to see the new iterations or if we want to make the value of "count" to be private and inaccessible from the outer scope
 * counter2 would be prefereable when we want to reference the variable "count" such as with another function, or if we want to have counter2 produce the same output
 * for each time it is called.
 *
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
    count++;
  }
}

const counter1 = counterMaker();
// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning()

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){

  return Math.floor(Math.random() * 3);
}

console.log(inning())


/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example,

finalScore(inning, 9) might return:
{
  "Home": 11,
  "Away": 5,
}

*/

function finalScore(callback, innings){

  var obj = {}
  var homeScore = [];
  var awayScore = [];


  for(var x = 0; x < innings; x++) {
    var rand = callback();
    homeScore.push(rand);
  }


  for(var x = 0; x < innings; x++) {
    var rand = callback();
    awayScore.push(rand);
  }

  var totalHomeScore = homeScore.reduce((a,b) => {
    return a + b;
  }, 0)

  var totalAwayScore = awayScore.reduce((a,b) => {
    return a + b;
  }, 0)

  obj = {
    "Home": totalHomeScore,
    "Away": totalAwayScore,
  }

  console.log(obj);

}

finalScore(inning, 9)

/* Task 4:

Create a function called `scoreboard` that accepts the following parameters:

(1) Callback function `getInningScore`
(2) Callback function `inning`
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam

Final Score: awayTeam - homeTeam */

function getInningScore(callback, innings) {

  var homeObj = {};
  var awayObj = {};

  var homeScore = [];
  var awayScore = [];


  for(var x = 0; x < innings; x++) {
    var rand = callback();
    homeScore.push(rand);
  }


  for(var x = 0; x < innings; x++) {
    var rand = callback();
    awayScore.push(rand);
  }


  homeObj["Home"] = homeScore;
  awayObj["Away"] = awayScore;

  var obj = Object.assign({}, homeObj, awayObj);

  return obj;
}

getInningScore(inning, 9);


function scoreboard(callback1, callback2, innings) {

  var obj = callback1(callback2, innings);
  var result = [];

  var totalHome = obj["Home"].reduce((sum, item) => {
    return sum + item;
  }, 0)

  var totalAway = obj["Away"].reduce((sum, item) => {
    return sum + item;
  }, 0)

  for(var x = 0; x < innings; x++) {
    if (x == 0) {
      result.push(`${x + 1}st inning: ${obj.Away[x]} - ${obj.Home[x]}`);
    }
    if (x == 1) {
      result.push(`${x + 1}nd inning: ${obj.Away[x]} - ${obj.Home[x]}`);
    }
    if (x == 2) {
      result.push(`${x + 1}rd inning: ${obj.Away[x]} - ${obj.Home[x]}`);
    }
    if (x != 0 && x != 1 && x != 2 ) {
      result.push(`${x + 1}th inning: ${obj.Away[x]} - ${obj.Home[x]}`);
    }
  }

  result.push(`Final Score: ${totalHome} - ${totalAway}`);

  console.log(result)

}

scoreboard(getInningScore, inning, 9);
