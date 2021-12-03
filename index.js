// QUESTION LIST
var quesListLevel1 = [
    {
      question : "Which planet in our solar system is known as the Red Planet? ",
      answer : "MARS"
    },
    {
      question : "How many hours are there in a day? ",
      answer : 24
    },
    {
      question : "number of alphabets ? ",
      answer : "26"
    },
    {
      question : "who won gold medal in olympics for india 2021 ? (full name,space seperated) ",
      answer : "NEERAJ CHOPRA"
    },
    {
      question : "we have ______(in numbers) continents ? ",
      answer : 7
    }
    ]
  
  var quesListLevel2 = [
    {
      question : "1+2 is ? ",
      answer : 3
    },
    {
      question : "5 in binary representation is ? ",
      answer : 101
    },
    {
      question : "national bird of India ? ",
      answer : "PEACOCK"
    },
    {
      question : "national animal of India ? ",
      answer : "TIGER"
    },
    {
      question : "prime minister of India (full name ,space seperated)? ",
      answer : "NARENDRA MODI"
    }
    ]
  
  var quesListLevel3 = [
    {
      question : "CEO of SpaceX ? (full name ,space seperated) ",
      answer : "ELON MUSK"
    },
    {
      question : "CEO of Twitter ? (full name ,space seperated) ",
      answer : "PARAG AGARWAL"
    },
    {
      question : "CEO of Google ? (full name ,space seperated) ",
      answer : "SUNDAR PICHAI"
    },
    {
      question : "CEO of Paytm ? (full name ,space seperated) ",
      answer : "VIJAY SHEKHAR SHARMA"
    },
    {
      question : "CEO of apple (full name ,space seperated)? ",
      answer : "TIM COOK"
    }
    ]
// Hall of Fame
var hallOfFame = [
    {
        name : "alex",
        score : 2
    },
    {
        name : "jerry",
        score : 3
    }
]

var readLineSync = require("readline-sync");
var chalk = require("chalk");

// MAIN LOGIC
var userName = readLineSync.question("Whats your name  ? ");
var score = 0;
var countCorrect = 0 , countIncorrect = 0;
console.clear();
greetings(userName);

var res = shallWeStartTheQuiz();

if(res){
    console.clear();
    console.log(chalk.cyanBright(chalk.bold("GAME TIME !!!")));
    console.log("-------------------------------------------------");
    beginContest();
}
console.clear();
goodBye();
printTopPerformers();

// HELPER FUNCTIONS
// askQuestion()


// beginContest
function beginContest(){
    console.log("Starting Quiz ... Level 1");
    startQuiz(quesListLevel1);
  
    if(score === 5){
      console.log("Congratulations!!! you have answered all questions of level-1");
      var level2Ack = readLineSync.question("Do you wish to move to level 2 (yes/no)?");
  
      if(level2Ack.toUpperCase() === "yes".toUpperCase()){
          console.log("Starting Quiz ... Level 2");
          startQuiz(quesListLevel2);
          if(score === 10){
            console.log("Congratulations!!! you have answered all questions of level-1 & level-2");
            var level3Ack = readLineSync.question("Do you wish to move to level 3 (yes/no)?");
  
            if(level3Ack.toUpperCase() === "yes".toUpperCase()){
              console.log("Starting Quiz ... Level 3");
              startQuiz(quesListLevel3);   
              if(score === 15){
                console.log("PERFECTO all answers are correct !!!!!!!!!!");
              }
            }else{
              console.log("Stopping quiz ... ");
            }          
          }else{
            console.log("all answers were not correct can't move to next level.");
          }   
      }else{
        console.log("Stopping quiz ... ");
      }   
    }else{
      console.log("all answers were not correct can't move to next level.");
    }
}

// startQuiz()
function startQuiz(questions){
    for(var i = 0 ; i < questions.length ; i++){
        console.log(chalk.yellowBright("Current Score : "+score));
        console.log();
        var userRes = readLineSync.question("Ques."+(i+1)+" "+questions[i].question);
        if(userRes.toUpperCase() == questions[i].answer){
            score = score + 1;
            console.log(chalk.greenBright("answer is Correct"));
            countCorrect = countCorrect + 1;
        }else{
            score = score - 1;
            console.log(chalk.redBright("answer is wrong"));
            countIncorrect = countIncorrect + 1;
        }

        console.log("-------------------------------------------------");
        console.log("-------------------------------------------------");
    }
}

// greetings
function greetings(name){
    console.log("-------------------------------------------------");
    console.log(chalk.cyan(chalk.bold("Hello "+name)));
    console.log("Welcome to GeneralQuiz !");
    console.log("------------------------------------------------ ");
    console.log(chalk.red("NOTE : Correct Rsponses will get you scores."));
}

function shallWeStartTheQuiz(){
    var response = readLineSync.question("Are you ready for the quiz ?(yes)");

    if(response.toUpperCase() === "YES" || response.toUpperCase() === "Y"){
        return true;
    }else{
        return false;
    }
}

function goodBye(){
    printScore();
    console.log();
    console.log();
    console.log("Thanks for your responses !!!");
    console.log("Good Bye !!! , Have a great day ahead ...");
}

function printScore(){
    console.log(chalk.yellowBright("Player Name : "+userName));
    console.log("Correct : "+chalk.greenBright(countCorrect)+"\nIncorrect : "+chalk.redBright(countIncorrect));
    console.log("Total Questions : 5 \n"+chalk.blackBright(chalk.bold(chalk.underline("Score : "+score))));
    console.log("\n"+chalk.redBright("NOTE : Share your screenshort with the CLI-app developer to get name entered in Top-Performers"));
}

function printTopPerformers(){

    console.log(" ---------------------------------------------- ");
    if(hallOfFame.length > 0 && score > hallOfFame[0].score){
        console.log(chalk.blueBright("Congratulations you have beaten the high score !!! "));
    }
    console.log(chalk.cyanBright(chalk.bold("        HALL OF FAME")))
    hallOfFame.sort(function(a,b){return b.score-a.score});
    console.table(hallOfFame);
}

