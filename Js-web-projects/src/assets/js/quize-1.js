const quizData = [{
    question: "Which of the following is a client site language?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
},
{
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
},
{
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
},
{
    question: "What does CSS stands for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "b",
}
];

const myQuizData =[{
	"category": "Music",
	"id": "622a1c357cc59eab6f94fda9",
	"correctAnswer": "Graceland",
	"incorrectAnswers": ["Neverland", "Jackson Ranch", "Graceland", "Amity"],
	"question": "What Was The Name Of Elvis Presley's Home?",
	"tags": ["places", "general_knowledge", "musicians", "music"],
	"type": "Multiple Choice",
	"difficulty": "medium",
	"regions": [],
	"isNiche": false
}, {
	"category": "Geography",
	"id": "625e9ec3796f721e95543f6a",
	"correctAnswer": "Blue",
	"incorrectAnswers": ["Blue", "Orange", "Maroon", "Black"],
	"question": "Which of these colors is included on the flag of Guatemala?",
	"tags": ["flags", "geography"],
	"type": "Multiple Choice",
	"difficulty": "hard",
	"regions": [],
	"isNiche": false
}, {
	"category": "Science",
	"id": "622a1c377cc59eab6f95053e",
	"correctAnswer": "the therapeutic use of plants",
	"incorrectAnswers": ["the Assyrians", "the therapeutic use of plants" , "alternative method of massage, manipulative therapy|therapy or pressure on certain points of the sole of the feet as a means of relieving nervous tension", "a branch of medicine that deals with the venous system"],
	"question": "What is Herbology the study of?",
	"tags": ["words", "science"],
	"type": "Multiple Choice",
	"difficulty": "medium",
	"regions": [],
	"isNiche": false
}]
let index = 0;
let total = quizData.length;
let right = 0;
    worng = 0
const data = quizData[index];
// console.log(total);
const optionInput = document.querySelectorAll('.options');
const quizeBox = document.getElementById('questionBox');
const loadQuize = ()=>{
    if(index === total){
        return endQuize()
    }
    reset();
    const data = quizData[index];
    quizeBox.innerText = `${index +1}) ${data.question}`;
    optionInput[0].nextElementSibling.innerText = data.a;
    // optionInput[0].setAttribute('value', data.incorrectAnswers[0])
    optionInput[1].nextElementSibling.innerText = data.b;
    // optionInput[1].setAttribute('value', data.incorrectAnswers[1])
    optionInput[2].nextElementSibling.innerText = data.c;
    // optionInput[2].setAttribute('value', data.incorrectAnswers[2])
    optionInput[3].nextElementSibling.innerText = data.d;
    // optionInput[3].setAttribute('value', data.incorrectAnswers[3])
   
}
const subBtn = document.getElementById('submit');
subBtn.addEventListener('click',()=>{
   
    const data = quizData[index];
    const ans = getAnswer();
    console.log(ans);
    if(ans === data.correct){
        right++
    }else{
        worng++
    }
    index++;
    loadQuize();
    return;

})

const getAnswer = ()=>{
    let ans;
    optionInput.forEach((input) => {
        if(input.checked){
            // console.log(input.value);
            ans = input.value
        }
    });
    return ans
}
const reset = ()=>{
    optionInput.forEach((input) => {
        input.checked = false
    });
}

const endQuize = ()=>{
    document.querySelector('.container').innerHTML = `
    <div><h1>Thank You For Submitting the Quiz</h1></div>
    <h3>${right}/${worng}</h3>

    `
}
loadQuize();