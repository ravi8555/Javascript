// const quizData = [
//   {
//     question: 'Which of the following is a client site language?',
//     a: 'Java',
//     b: 'C',
//     c: 'Python',
//     d: 'JavaScript',
//     correct: 'd',
//   },
//   {
//     question: 'What does HTML stand for?',
//     a: 'Hypertext Markup Language',
//     b: 'Cascading Style Sheet',
//     c: 'Jason Object Notation',
//     d: 'Helicopters Terminals Motorboats Lamborginis',
//     correct: 'a',
//   },
//   {
//     question: 'What year was JavaScript launched?',
//     a: '1996',
//     b: '1995',
//     c: '1994',
//     d: 'none of the above',
//     correct: 'b',
//   },
//   {
//     question: 'What does CSS stands for?',
//     a: 'Hypertext Markup Language',
//     b: 'Cascading Style Sheet',
//     c: 'Jason Object Notation',
//     d: 'Helicopters Terminals Motorboats Lamborginis',
//     correct: 'b',
//   },
// ]

// const myQuizData = [
//   {
//     category: 'Music',
//     id: '622a1c357cc59eab6f94fda9',
//     correctAnswer: 'Graceland',
//     incorrectAnswers: ['Neverland', 'Jackson Ranch', 'Graceland', 'Amity'],
//     question: "What Was The Name Of Elvis Presley's Home?",
//     tags: ['places', 'general_knowledge', 'musicians', 'music'],
//     type: 'Multiple Choice',
//     difficulty: 'medium',
//     regions: [],
//     isNiche: false,
//   },
//   {
//     category: 'Geography',
//     id: '625e9ec3796f721e95543f6a',
//     correctAnswer: 'Blue',
//     incorrectAnswers: ['Blue', 'Orange', 'Maroon', 'Black'],
//     question: 'Which of these colors is included on the flag of Guatemala?',
//     tags: ['flags', 'geography'],
//     type: 'Multiple Choice',
//     difficulty: 'hard',
//     regions: [],
//     isNiche: false,
//   },
//   {
//     category: 'Science',
//     id: '622a1c377cc59eab6f95053e',
//     correctAnswer: 'the therapeutic use of plants',
//     incorrectAnswers: [
//       'the Assyrians',
//       'the therapeutic use of plants',
//       'alternative method of massage, manipulative therapy|therapy or pressure on certain points of the sole of the feet as a means of relieving nervous tension',
//       'a branch of medicine that deals with the venous system',
//     ],
//     question: 'What is Herbology the study of?',
//     tags: ['words', 'science'],
//     type: 'Multiple Choice',
//     difficulty: 'medium',
//     regions: [],
//     isNiche: false,
//   },
// ]

// /* 1 */
// // let index = 0
// // let total = quizData.length
// // let right = 0
// // worng = 0
// // const data = quizData[index]
// // // console.log(total);
// // const optionInput = document.querySelectorAll('.options')
// // const quizeBox = document.getElementById('questionBox')
// // const loadQuize = () => {
// //   if (index === total) {
// //     return endQuize()
// //   }
// //   reset()
// //   const data = quizData[index]
// //   quizeBox.innerText = `${index + 1}) ${data.question}`
// //   optionInput[0].nextElementSibling.innerText = data.a
// //   // optionInput[0].setAttribute('value', data.incorrectAnswers[0])
// //   optionInput[1].nextElementSibling.innerText = data.b
// //   // optionInput[1].setAttribute('value', data.incorrectAnswers[1])
// //   optionInput[2].nextElementSibling.innerText = data.c
// //   // optionInput[2].setAttribute('value', data.incorrectAnswers[2])
// //   optionInput[3].nextElementSibling.innerText = data.d
// //   // optionInput[3].setAttribute('value', data.incorrectAnswers[3])
// // }
// // const subBtn = document.getElementById('submit')
// // subBtn.addEventListener('click', () => {
// //   const data = quizData[index]
// //   const ans = getAnswer()
// //   console.log(ans)
// //   if (ans === data.correct) {
// //     right++
// //   } else {
// //     worng++
// //   }
// //   index++
// //   loadQuize()
// //   return
// // })

// // const getAnswer = () => {
// //   let ans
// //   optionInput.forEach((input) => {
// //     if (input.checked) {
// //       // console.log(input.value);
// //       ans = input.value
// //     }
// //   })
// //   return ans
// // }
// // const reset = () => {
// //   optionInput.forEach((input) => {
// //     input.checked = false
// //   })
// // }

// // const endQuize = () => {
// //   document.querySelector('.container').innerHTML = `
// //     <div><h1>Thank You For Submitting the Quiz</h1></div>
// //     <h3>${right}/${worng}</h3>
// //     `
// // }
// // loadQuize()

// /* 2 */

// /*
// index = 0
// let wrong = 0
// let right = 0
// total = myQuizData.length
// console.log(total)
// const inputs = document.querySelectorAll('.options')
// const quesBox = document.querySelector('#questionBox')
// function loadQuizQues() {
//   if (index === total) {
//     return endQuize()
//   }
//   const data = myQuizData[index]
//   reset()
//   quesBox.innerText = `${index + 1})${data.question}`
//   inputs[0].nextElementSibling.innerText = data.incorrectAnswers[0]
//   inputs[0].setAttribute('value', data.incorrectAnswers[0])
//   inputs[1].nextElementSibling.innerText = data.incorrectAnswers[1]
//   inputs[1].setAttribute('value', data.incorrectAnswers[1])
//   inputs[2].nextElementSibling.innerText = data.incorrectAnswers[2]
//   inputs[2].setAttribute('value', data.incorrectAnswers[2])
//   inputs[3].nextElementSibling.innerText = data.incorrectAnswers[3]
//   inputs[3].setAttribute('value', data.incorrectAnswers[3])
//   // console.log('111', data.question)
// }

// const subAns = document
//   .getElementById('submit')
//   .addEventListener('click', () => {
//     const data = myQuizData[index]
//     ans = getAns()
//     console.log(ans)
//     if (ans === data.correctAnswer) {
//       right++
//     } else {
//       wrong++
//     }
//     index++
//     loadQuizQues()
//     return
//   })

// const getAns = () => {
//   let answer
//   inputs.forEach((input) => {
//     if (input.checked) {
//       // console.log(input.value)
//       answer = input.value
//     }
//   })
//   return answer
// }
// function reset() {
//   inputs.forEach((input) => {
//     input.checked = false
//   })
// }
// const endQuize = () => {
//   document.querySelector('.container').innerHTML = `
//       <div><h1>Thank You For Submitting the Quiz</h1></div>
//       <h3>Number of Correct Answers: ${right}</h3>
//       <h3>Number of Incorrect Answers: ${wrong}</h3>
//       <h3>Number of Question : ${total}</h3>
//  `
// }
// loadQuizQues();
// */

// let quest = {
//   questions: [
//     {
//       question: 'What is the capital of France?',
//       options: ['Paris', 'Madrid', 'Rome', 'Berlin'],
//       answer: 'Paris',
//     },
//     {
//       question: 'What is the largest planet in our solar system?',
//       options: ['Saturn', 'Jupiter', 'Uranus', 'Neptune'],
//       answer: 'Jupiter',
//     },
//     {
//       question: 'Which element has the symbol Au on the periodic table?',
//       options: ['Silver', 'Gold', 'Platinum', 'Copper'],
//       answer: 'Gold',
//     },
//     {
//       question: 'Which of these is NOT a programming language?',
//       options: ['Java', 'C#', 'Python', 'Photoshop'],
//       answer: 'Photoshop',
//     },
//   ],
// }
// // var fetchUrl = 'http://localhost:7000/quizData.json'
// function loadQuizData(fetchUrl) {
//   fetch(fetchUrl)
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error('Network respose was not ok')
//       }
//       return response.json()
//     })
//     .then((data) => {
//       console.log(data)
//     })
//     .catch((error) => {
//       console.error('Error', error)
//     })
// }

// const mydata = loadQuizData('http://localhost:7000/quizData.json')
// const questBx = document.getElementById('questionBox')
// var questionArray = JSON.parse(mydata)
// console.log(questionArray.questions[0].question)
// // questBx.innerHTML = questionArray.questions.question[0]

// Function to find the largest Fibonacci number less than N
// function findLargestFibonacci(N) {
//   let a = 0,
//     b = 1,
//     c = 1
//   while (c < N) {
//     a = b
//     b = c
//     c = a + b
//   }
//   return b
// }

// // Reading input from console
// const readline = require('readline')
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// })

// rl.question('Enter number of test cases: ', (t) => {
//   // Loop through each test case
//   for (let i = 0; i < t; i++) {
//     rl.question('Enter N: ', (n) => {
//       // Call function to find largest Fibonacci number less than N
//       const largestFib = findLargestFibonacci(n)
//       console.log(largestFib)
//       // Close readline interface after last test case
//       if (i === t - 1) rl.close()
//     })
//   }
// })

function sayHi() {
  console.log()
}
console.log(5 > 10 && console.log('Hello'))

function findTeamName(name1, name2) {
  // You only need to implement this function.
  var twoChar1 = name1.charAt(0).toLowerCase()
  var twoChar2 = name2.charAt(0).toLowerCase()
  return name1[0] + name2[0]
}

findTeamName('Anu', 'Rao')

function circleValues(r) {
  // You only need to implement this function.
  let circle = r * 2
  return `A circle of radius ${r} has a diameter ${circle}`
}
console.log(circleValues(2))
// const quizData = [
//   {
//     question: 'Which of the following is a client site language?',
//     a: 'Java',
//     b: 'C',
//     c: 'Python',
//     d: 'JavaScript',
//     correct: 'd',
//   },
//   {
//     question: 'What does HTML stand for?',
//     a: 'Hypertext Markup Language',
//     b: 'Cascading Style Sheet',
//     c: 'Jason Object Notation',
//     d: 'Helicopters Terminals Motorboats Lamborginis',
//     correct: 'a',
//   },
//   {
//     question: 'What year was JavaScript launched?',
//     a: '1996',
//     b: '1995',
//     c: '1994',
//     d: 'none of the above',
//     correct: 'b',
//   },
//   {
//     question: 'What does CSS stands for?',
//     a: 'Hypertext Markup Language',
//     b: 'Cascading Style Sheet',
//     c: 'Jason Object Notation',
//     d: 'Helicopters Terminals Motorboats Lamborginis',
//     correct: 'b',
//   },
// ]

// const myQuizData = [
//   {
//     category: 'Music',
//     id: '622a1c357cc59eab6f94fda9',
//     correctAnswer: 'Graceland',
//     incorrectAnswers: ['Neverland', 'Jackson Ranch', 'Graceland', 'Amity'],
//     question: "What Was The Name Of Elvis Presley's Home?",
//     tags: ['places', 'general_knowledge', 'musicians', 'music'],
//     type: 'Multiple Choice',
//     difficulty: 'medium',
//     regions: [],
//     isNiche: false,
//   },
//   {
//     category: 'Geography',
//     id: '625e9ec3796f721e95543f6a',
//     correctAnswer: 'Blue',
//     incorrectAnswers: ['Blue', 'Orange', 'Maroon', 'Black'],
//     question: 'Which of these colors is included on the flag of Guatemala?',
//     tags: ['flags', 'geography'],
//     type: 'Multiple Choice',
//     difficulty: 'hard',
//     regions: [],
//     isNiche: false,
//   },
//   {
//     category: 'Science',
//     id: '622a1c377cc59eab6f95053e',
//     correctAnswer: 'the therapeutic use of plants',
//     incorrectAnswers: [
//       'the Assyrians',
//       'the therapeutic use of plants',
//       'alternative method of massage, manipulative therapy|therapy or pressure on certain points of the sole of the feet as a means of relieving nervous tension',
//       'a branch of medicine that deals with the venous system',
//     ],
//     question: 'What is Herbology the study of?',
//     tags: ['words', 'science'],
//     type: 'Multiple Choice',
//     difficulty: 'medium',
//     regions: [],
//     isNiche: false,
//   },
// ]

/* 1 */
// let index = 0
// let total = quizData.length
// let right = 0
// worng = 0
// const data = quizData[index]
// // console.log(total);
// const optionInput = document.querySelectorAll('.options')
// const quizeBox = document.getElementById('questionBox')
// const loadQuize = () => {
//   if (index === total) {
//     return endQuize()
//   }
//   reset()
//   const data = quizData[index]
//   quizeBox.innerText = `${index + 1}) ${data.question}`
//   optionInput[0].nextElementSibling.innerText = data.a
//   // optionInput[0].setAttribute('value', data.incorrectAnswers[0])
//   optionInput[1].nextElementSibling.innerText = data.b
//   // optionInput[1].setAttribute('value', data.incorrectAnswers[1])
//   optionInput[2].nextElementSibling.innerText = data.c
//   // optionInput[2].setAttribute('value', data.incorrectAnswers[2])
//   optionInput[3].nextElementSibling.innerText = data.d
//   // optionInput[3].setAttribute('value', data.incorrectAnswers[3])
// }
// const subBtn = document.getElementById('submit')
// subBtn.addEventListener('click', () => {
//   const data = quizData[index]
//   const ans = getAnswer()
//   console.log(ans)
//   if (ans === data.correct) {
//     right++
//   } else {
//     worng++
//   }
//   index++
//   loadQuize()
//   return
// })

// const getAnswer = () => {
//   let ans
//   optionInput.forEach((input) => {
//     if (input.checked) {
//       // console.log(input.value);
//       ans = input.value
//     }
//   })
//   return ans
// }
// const reset = () => {
//   optionInput.forEach((input) => {
//     input.checked = false
//   })
// }

// const endQuize = () => {
//   document.querySelector('.container').innerHTML = `
//     <div><h1>Thank You For Submitting the Quiz</h1></div>
//     <h3>${right}/${worng}</h3>
//     `
// }
// loadQuize()

/* 2 */

/*
index = 0
let wrong = 0
let right = 0
total = myQuizData.length
console.log(total)
const inputs = document.querySelectorAll('.options')
const quesBox = document.querySelector('#questionBox')
function loadQuizQues() {
  if (index === total) {
    return endQuize()
  }
  const data = myQuizData[index]
  reset()
  quesBox.innerText = `${index + 1})${data.question}`
  inputs[0].nextElementSibling.innerText = data.incorrectAnswers[0]
  inputs[0].setAttribute('value', data.incorrectAnswers[0])
  inputs[1].nextElementSibling.innerText = data.incorrectAnswers[1]
  inputs[1].setAttribute('value', data.incorrectAnswers[1])
  inputs[2].nextElementSibling.innerText = data.incorrectAnswers[2]
  inputs[2].setAttribute('value', data.incorrectAnswers[2])
  inputs[3].nextElementSibling.innerText = data.incorrectAnswers[3]
  inputs[3].setAttribute('value', data.incorrectAnswers[3])
  // console.log('111', data.question)
}

const subAns = document
  .getElementById('submit')
  .addEventListener('click', () => {
    const data = myQuizData[index]
    ans = getAns()
    console.log(ans)
    if (ans === data.correctAnswer) {
      right++
    } else {
      wrong++
    }
    index++
    loadQuizQues()
    return
  })

const getAns = () => {
  let answer
  inputs.forEach((input) => {
    if (input.checked) {
      // console.log(input.value)
      answer = input.value
    }
  })
  return answer
}
function reset() {
  inputs.forEach((input) => {
    input.checked = false
  })
}
const endQuize = () => {
  document.querySelector('.container').innerHTML = `
      <div><h1>Thank You For Submitting the Quiz</h1></div>
      <h3>Number of Correct Answers: ${right}</h3>
      <h3>Number of Incorrect Answers: ${wrong}</h3>
      <h3>Number of Question : ${total}</h3>
 `
}
loadQuizQues();
*/

// let quest = {
//   questions: [
//     {
//       question: 'What is the capital of France?',
//       options: ['Paris', 'Madrid', 'Rome', 'Berlin'],
//       answer: 'Paris',
//     },
//     {
//       question: 'What is the largest planet in our solar system?',
//       options: ['Saturn', 'Jupiter', 'Uranus', 'Neptune'],
//       answer: 'Jupiter',
//     },
//     {
//       question: 'Which element has the symbol Au on the periodic table?',
//       options: ['Silver', 'Gold', 'Platinum', 'Copper'],
//       answer: 'Gold',
//     },
//     {
//       question: 'Which of these is NOT a programming language?',
//       options: ['Java', 'C#', 'Python', 'Photoshop'],
//       answer: 'Photoshop',
//     },
//   ],
// }

// var index = 0;
// let wrong = 0
// let right = 0
// function loadQuizData(fetchUrl) {
//     return fetch(fetchUrl)
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error('Network respose was not ok')
//         }
//         return response.json()
//       })
//       .catch((error) => {
//         console.error('Error', error)
//       })
//   }

//   loadQuizData('http://localhost:7000/quizData.json')
//     .then((questionArray) => {
//     //  check the JSON data
//       console.log("Fetch Arry", questionArray);

//     // Get the question Div
//       const questionDiv = document.getElementById('question');

//       // set the First Question in the div
//       // questionDiv.innerHTML = questionArray.questions[3].question;

//     //   loop the all question and its options
//       questionArray.questions.forEach((item, ind) => {

//         // assing the IDs to options
//         let quid = document.getElementById("qid");
//         quid.innerHTML = ind+1;

//         // Get the DIV for option
//         const optionData = document.getElementById('question-options');
//         options ="";

//         // loop the all options and display it
//         item.options.forEach((optionItem, optionIdx)=>{
//             options += `<li><input class="options" name="option" type="radio" id="${optionIdx+1}" value="${optionItem}" required>
//             <label for="first">"${optionItem}</label></li>`;

//         })

//         // set the question and options to their respective element
//         // questionDiv.innerText = item.question;
//         optionData.innerHTML = options;

//         // initial the options on next button
//         const nextBtn = document.getElementById('next');
//         const inputs = document.querySelectorAll('.options');
//         let index = 0;

//         const getNextOption = ()=>{
//             let selectedOption;
//             inputs.forEach( input=>{
//                 if(input.checked){
//                     selectedOption = input.value
//                     console.log("input Value =>", selectedOption);
//                 }
//                });
//                return selectedOption

//         }
//          nextBtn.addEventListener('click', (e)=>{
//                const selectedOption = getNextOption();
//                if(selectedOption == item.answer){
//                 right++
//                }else{
//                 wrong++
//                }

//                index ++;

//                if(index < questionArray.questions.length){
//                 questionDiv.innerText = questionArray.questions[index].question;

//                 let options = "";
//                  // loop the all options and display it
//                  questionArray.questions[index].options.forEach((optionItem, optionIdx)=>{
//                   options += `<li><input class="options" name="option" type="radio" id="${optionIdx+1}" value="${optionItem}" required>
//                   <label for="first">"${optionItem}</label></li>`;
//                   });

//                   optionData.innerHTML = options;

//                }else{
//                 document.querySelector('#result').innerHTML = `<div>Thanks You For The Interesting</div>
//                 <div>The Number of Right Answer is : ${right}</div>`
//                }
//                e.preventDefault()
//             })

//       });

//  });

//  function loadData(fetchURL){
//   return fetch(fetchURL)
//   .then((response)=>{
//     if(!response.ok){
//       throw new Error('Network response was not ok')
//     }
//     return response.json()
//   })
//   .catch((error)=>{
//     console.error('Error', error)
//   })
//  }

//  loadData('https://opentdb.com/api.php?amount=10')
//  .then((questionApi)=>{
//   console.log("Question",questionApi);
//   const startBtn = document.getElementById('quiz-start-btn');
//   const formSec = document.getElementById('quiz-form');

//   const startQues = ()=>{
//     startBtn.addEventListener('click', ()=>{
//       formSec.classList.remove('hide');
//       startBtn.classList.add('hide');
//       countDown();
//     })
//   }
//   startQues();

// // REF https://codepen.io/ishanbakshi/details/pgzNMv;
//   // const countDown = ()=>{

//   // }
//   // countDown()

//   const countDown = () => {
//     document.getElementById('quiz-timer').innerHTML = '01:11';

//     const startTimer = () => {
//       const presentTime = document.getElementById('quiz-timer').innerHTML;
//       const timeArray = presentTime.split(':');
//       let m = parseInt(timeArray[0], 10);
//       let s = checkSecond(parseInt(timeArray[1], 10) - 1);

//       if (s === 59) {
//         m = m - 1;
//       }

//       if (m < 0) {
//         return;
//       }

//       document.getElementById('quiz-timer').innerHTML = `${m}:${s}`;
//       // console.log(m);
//       setTimeout(startTimer, 1000);

//     };

//     startTimer();
//   };

//   const checkSecond = (sec) => {
//     if (sec < 10 && sec >= 0) {
//       sec = `0${sec}`;
//     }
//     if (sec < 0) {
//       sec = '59';
//     }
//     return sec;
//   };

//   const restartTimer = ()=>{
//     const restartBtn = document.getElementById('quiz-restart-btn');
//     restartBtn.addEventListener('click', ()=>{

//     })
//   }

//  })

function threeSum(nums) {
  const result = []
  const n = nums.length
  // loop through all possible triplets
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          const triplet = [nums[i], nums[j], nums[k]]
          // check if the triplet is unique
          if (!result.some((arr) => arr.join() === triplet.join())) {
            result.push(triplet)
          }
        }
      }
    }
  }
  return result
}

const nums = [-4, -1, -1, 0, 1, 2]
console.log(threeSum(nums))
