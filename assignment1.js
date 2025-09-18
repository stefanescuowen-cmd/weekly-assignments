// #1

// const readline = require ("readline");

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// function generateQuestion(){
//     const num1 = Math.floor(Math.random() * 10) + 1;
//     const num2 = Math.floor(Math.random() * 10) + 1;
//     const operators = ["+", "-", "*", "/", "%"];
//     const operator = operators[Math.floor(Math.random() * operators.length)];

//     let answer;
//     if (operator === "+") answer = num1 + num2;
//     if (operator === "-") answer = num1 - num2;
//     if (operator === "*") answer = num1 * num2;
//     if (operator === "/") answer = Math.floor(num1 / num2);
//     if (operator === "%") answer = num1 % num2;

//     return{
//         question: `${num1} ${operator} ${num2} = ?`, answer
//     };
// }

// function maxScoreMode(){
// let score = 0;
// let questionNumber = 1;
// const totalQuestions = 20;

// function askMaxScoreQuestion(){
//     const q = generateQuestion();
    
// rl.question(`Question ${questionNumber}: ${q.question} `, (userInput) => {
//     if (userInput.toLowerCase() === "skip"){
//         console.log("You skipped this question.");
//     }
//     else if (parseInt(userInput) === q.answer){
//         score += 10;
//         console.log (`Correct! +10 points. Your score: ${score}`);
//     }
//         else{
//             score -= 5;
//             console.log(`Incorrect! -5 points. The correct answer was: ${q.answer}. Your score: ${score}`);
//         }
        
//         questionNumber++;

//         if (questionNumber <= totalQuestions){
//             askMaxScoreQuestion();
//         }

//         else{
//             console.log(`Game Over! Final Score: ${score}`)
//         rl.close();
//     }
// });
// }

// console.log("\nStarting Max Score Mode!")
// askMaxScoreQuestion()
// }

// function threeOutMode(){
// let score = 0;
// let lives = 3

// function askQuestion(){

// const q = generateQuestion();
// rl.question(`Solve this: ${q.question} `, (userInput) => {
    
//     if (parseInt(userInput) === q.answer){
//         score += 10;
//         console.log (`Correct! +10 points. Your Score: ${score}`)
//     }
//     else{
//         lives--;
//         console.log(`Incorrect! The correct answer was: ${q.answer}. You have ${lives} lives remaining.`)
//         }
//     if(lives > 0){
//         askQuestion();
//     }
//     else{
//         console.log(`Game Over! Final score: ${score}`)
//         rl.close();
//     }
// });
// }
// console.log("\nStarting Three-Out Mode!")
// askQuestion();
// }

// function startGame(){
//     console.log("Welcome to the Math Game!");

// function showMenu(){
//     console.log("Select a mode:");
//     console.log("1. Max Score (20 Questions, Skip Allowed)");
//     console.log("2. Three Out (3 Lives, No Skips)");
// }

// showMenu();

// rl.question("Enter 1 or 2: ", (choice) => {
//     if (choice === "1"){
//         maxScoreMode();
//     }
//     else if (choice === "2"){
//         threeOutMode();
//     }
//     else{
//         console.log("Invalid Choice. Please enter 1 or 2.\n");
//         startGame();
//     }
// });
// }

// startGame();

// #2

// const readline = require ("readline");

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// function generateQuestion(){
//     const num1 = Math.floor(Math.random() * 10) + 1;
//     const num2 = Math.floor(Math.random() * 10) + 1;
//     const operators = ["+", "-", "*", "/", "%"];
//     const operator = operators[Math.floor(Math.random() * operators.length)];

//     if ((operator === "/" || operator === "%") && num2 === 0){
//         return generateQuestion();
//     }

//     let answer;
//     if (operator === "+") answer = num1 + num2;
//     if (operator === "-") answer = num1 - num2;
//     if (operator === "*") answer = num1 * num2;
//     if (operator === "/") answer = Math.floor(num1 / num2);
//     if (operator === "%") answer = num1 % num2;

//     return{
//         question: `${num1} ${operator} ${num2} = ?`, answer
//     };
// }

// function maxScoreMode(){
// let score = 0;
// let questionNumber = 1;
// const totalQuestions = 20;

// function askMaxScoreQuestion(){
//     const q = generateQuestion();
    
// rl.question(`Question ${questionNumber}: ${q.question} `, (userInput) => {
//     if (userInput.toLowerCase() === "skip"){
//         console.log("You skipped this question.");
//     }
//     else if (parseInt(userInput) === q.answer){
//         score += 10;
//         console.log (`Correct! +10 points. Your score: ${score}`);
//     }
//         else{
//             score -= 5;
//             console.log(`Incorrect! -5 points. The correct answer was: ${q.answer}. Your score: ${score}`);
//         }
        
//         questionNumber++;

//         if (questionNumber <= totalQuestions){
//             askMaxScoreQuestion();
//         }

//         else{
//             console.log(`Game Over! Final Score: ${score}`)
//         rl.close();
//     }
// });
// }

// console.log("\nStarting Max Score Mode!")
// askMaxScoreQuestion()
// }

// function threeOutMode(){
// let score = 0;
// let lives = 3

// function askQuestion(){

// const q = generateQuestion();
// rl.question(`Solve this: ${q.question} `, (userInput) => {
    
//     if (parseInt(userInput) === q.answer){
//         score += 10;
//         console.log (`Correct! +10 points. Your Score: ${score}`)
//     }
//     else{
//         lives--;
//         console.log(`Incorrect! The correct answer was: ${q.answer}. You have ${lives} lives remaining.`)
//         }
//     if(lives > 0){
//         askQuestion();
//     }
//     else{
//         console.log(`Game Over! Final score: ${score}`)
//         rl.close();
//     }
// });
// }
// console.log("\nStarting Three-Out Mode!")
// askQuestion();
// }

// function startGame(){
//     console.log("Welcome to the Math Game!");

// function showMenu(){
//     console.log("Select a mode:");
//     console.log("1. Max Score (20 Questions, Skip Allowed)");
//     console.log("2. Three Out (3 Lives, No Skips)");
// }

// showMenu();

// rl.question("Enter 1 or 2: ", (choice) => {
//     if (choice === "1"){
//         maxScoreMode();
//     }
//     else if (choice === "2"){
//         threeOutMode();
//     }
//     else{
//         console.log("Invalid Choice. Please enter 1 or 2.\n");
//         startGame();
//     }
// });
// }

// startGame();

// #3

const readline = require ("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function generateQuestion(difficulty){
    let num1, num2;
    let operators = [];
if (difficulty === "easy"){
    num1 = Math.floor(Math.random() * 9) + 1;
    num2 = Math.floor(Math.random() * 9) + 1;
    operators = ["+", "-"];
}

else if (difficulty === "medium"){
    num1 = Math.floor(Math.random() * 99) + 1;
    num2 = Math.floor(Math.random() * 9) + 1;
    operators = ["+", "-", "*", "/", "%"];
}

else if (difficulty === "hard"){
    num1 = Math.floor(Math.random() * 999) + 1;
    num2 = Math.floor(Math.random() * 9) + 1;
    operators = ["+", "-", "*", "/", "%"];
}

const operator = operators[Math.floor(Math.random() * operators.length)];

if ((operator === "/" || operator === "%") && num2 === 0){
        return generateQuestion(difficulty);
    }

    let answer;
    if (operator === "+") answer = num1 + num2;
    if (operator === "-") answer = num1 - num2;
    if (operator === "*") answer = num1 * num2;
    if (operator === "/") answer = Math.floor(num1 / num2);
    if (operator === "%") answer = num1 % num2;

    return{
        question: `${num1} ${operator} ${num2} = ?`, answer
    };
}

//MAX SCORE MODE

function maxScoreMode(difficulty){
let score = 0;
let questionNumber = 1;
const totalQuestions = 20;

function askMaxScoreQuestion(){
    const q = generateQuestion(difficulty);
    
rl.question(`Question ${questionNumber}: ${q.question} `, (userInput) => {
    if (userInput.toLowerCase() === "skip"){
        console.log("You skipped this question.");
    }
    else if (parseInt(userInput) === q.answer){
        score += 10;
        console.log (`Correct! +10 points. Your score: ${score}`);
    }
        else{
            score -= 5;
            console.log(`Incorrect! -5 points. The correct answer was: ${q.answer}. Your score: ${score}`);
        }
        
        questionNumber++;

        if (questionNumber <= totalQuestions){
            askMaxScoreQuestion();
        }

        else{
            console.log(`Game Over! Final Score: ${score}`)
        rl.close();
    }
});
}

console.log("\nStarting Max Score Mode!")
askMaxScoreQuestion()
}

// THREE OUT MODE

function threeOutMode(difficulty){
let score = 0;
let lives = 3

function askQuestion(){

const q = generateQuestion(difficulty);
rl.question(`Solve this: ${q.question} `, (userInput) => {
    
    if (parseInt(userInput) === q.answer){
        score += 10;
        console.log (`Correct! +10 points. Your Score: ${score}`)
    }
    else{
        lives--;
        console.log(`Incorrect! The correct answer was: ${q.answer}. You have ${lives} lives remaining.`)
        }
    if(lives > 0){
        askQuestion();
    }
    else{
        console.log(`Game Over! Final score: ${score}`)
        rl.close();
    }
});
}
console.log("\nStarting Three-Out Mode!")
askQuestion();
}

// MAIN MENU

function startGame(){
    console.log("Welcome to the Math Game!");

function askDifficulty(){
rl.question("Select a difficulty (easy, medium, hard): ", (difficulty) => {
    difficulty = difficulty.toLowerCase();
    if (!["easy", "medium", "hard"].includes(difficulty)){
        console.log("Invalid difficulty. Please enter easy, medium, or hard.\n");
        return askDifficulty();
    }

    askGameMode(difficulty)
});
}

function askGameMode(difficulty){
    console.log("Select a mode:");
    console.log("1. Max Score (20 Questions, Skip Allowed)");
    console.log("2. Three Out (3 Lives, No Skips)");

rl.question("Enter 1 or 2: ", (choice) => {
    if (choice === "1"){
        maxScoreMode(difficulty);
    }
    else if (choice === "2"){
        threeOutMode(difficulty);
    }
    else{
        console.log("Invalid Choice. Please enter 1 or 2.\n");
        askGameMode(difficulty);
    }
});
}
askDifficulty()
}
startGame()