const prompt = require("prompt-sync")()
const fs = require("fs")

function loadQuestions() {
    try {
        const data = fs.readFileSync('questions.json', 'utf-8');
        return JSON.parse(data).questions;
    } 
    catch (error) {
        console.log("Error:", error)
        return []
    }
}

function askQuestion(question) {
    console.log("Question: ", question.question);
    console.log("Options:")
    for (let i = 0; i < question.options.length; i++)
        console.log(`    ${i+1}. ${question.options[i]}`)

    while (true) {
        const ans = prompt("Enter your answer: ");
        if (ans.toLowerCase() == question.answer.toLowerCase()) {
            console.log("Hurray! You got it right.")
            console.log(`Answer: ${question.answer}`)
            return true;
        }
        else {
            console.log("It's incorrect!")
            console.log("Press \"r\" to show Answer or any other to skip")
            const inpt = prompt("Your Input: ")
            if (inpt == 'r') {
                console.log(`Answer: ${question.answer}`)
                if (prompt("Try again (t) or Skip (any) ? ") == 't') continue;
                else false; 
            }
            else return false;
        }
    }
}

function getRandomQuestions(questions, n) {
    if (n > questions.length) n  = questions.length;
    const randmQuestions = questions.sort(() => {
        return 0.5 - Math.random()
    })
    return randmQuestions.slice(0, n);
}

const questions = loadQuestions();
const totalQuest = parseInt(prompt("Enter number of questions: "));
const finalQuestions = getRandomQuestions(questions, totalQuest);
const n = finalQuestions.length;
let correct = 0;
const startTime = Date.now()

console.log("Hope you enjoy the Quiz!")
console.log(`There will be total of ${n} questions`)

for (let i = 0; i < n; i++) {
    const question = finalQuestions[i];
    if (askQuestion(question)) {
        correct++;
    }
    if (prompt("Press \"q\" to exit, any other to continue: ") == 'q') {
        console.log("Thank you for playing!!");
        break;
    }
}

const totalTime = Date.now() - startTime;

console.log(`You've scored: ${correct}/${n}`)
console.log(`Percentage: ${Math.round((correct/n)*100)}%`)
console.log(`Time Taken: ${totalTime/1000}s`)
