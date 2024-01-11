// need to create multiple question objects (cat, dog or both questions)
var currentQuestion = 0;
var answeredValue = 0;
var questionPlaceEl = document.getElementById("questionPlaceholder");
var selectedOption = document.getElementById('dropdownAnswers').value;

var bothQuestions = [
  {
    question: "1. Who lives with you?",
    dropdownOptions: ["Single", "Children", "Married", "Roommates"],
  },
  {
    question: "2. How much free time do you have to devote to a pet?",
    dropdownOptions: [
      "30 minutes a day",
      "2 hours a day",
      "4 hours a day",
      "More than 4 hours a day",
    ],
  },
  {
    question: "3. How important is it that the pet is children-friendly?",
    dropdownOptions: ["1", "2", "3", "4", "5"],
  },
  {
    question: "4. How long can you allocate to play with your new pet?",
    dropdownOptions: [
      "30 minutes a day (cat answer)",
      "1 hour a day (dog answer)",
      "3 hours a day (dog answer)",
    ],
  },
  {
    question: "5. Are you comfortable with giving medication to your pet?",
    dropdownOptions: ["Yes", "No"],
  },
  {
    question: "6. What level of grooming is most comfortable for you?",
    dropdownOptions: ["1", "2", "3", "4", "5"],
  },
  {
    question: "7. What level of shedding for your pet are you looking for?",
    dropdownOptions: ["1", "2", "3", "4", "5"],
  },
  {
    question: "8. My future pet must be _____.",
    dropdownOptions: ["Allergy-friendly", "House-trained"],
  },
  {
    question:
      "9. What friendliness level best suits your needs for your future pet?",
    dropdownOptions: ["1", "2", "3", "4", "5"],
  },
  {
    question: "10. What level of playfulness is best for you and your pet?",
    dropdownOptions: ["1", "2", "3", "4", "5"],
  },
  {
    question: "11. What energy level is the best fit for you?",
    dropdownOptions: ["1", "2", "3", "4", "5"],
  },
  {
    question: "12. How much time can you devote to cleaning after your pet?",
    dropdownOptions: ["30 minutes a day", "1 hour a day", "2 hours a day"],
  },
  {
    question: "13. I am a _____ pet owner.",
    dropdownOptions: ["First-time", "Previous", "Current"],
  },
  {
    question: "14. I currently have _____.",
    dropdownOptions: [
      "No dog(s) or cat(s)",
      "Cat(s)",
      "Dog(s)",
      "Dog(s) and cat(s)",
    ],
  },
  {
    question: "15. How long can you allocate to play with your new pet?",
    dropdownOptions:[
      "30 minutes a day (cat answer)",
      "1 hour a day (dog answer)",
      "3 hours a day (dog answer)",
    ],
  },
  {
    question: "16. I am wanting to adopt for _____.",
    dropdownOptions: ["Myself", "My family"],
  },
  {
    question: "17. How important is it that the pet is children-friendly?",
    dropdownOptions: ["1", "2", "3", "4", "5"],
  },
  {
    question: "18. I’m interested in adopting a ____.",
    dropdownOptions:  ["Dog", "Cat"]
  },
];
var dogQuestions = [
  {
    question:
      "1. What friendliness level best suits your needs for your future pet?",
    dropdownOptions: ["1", "2", "3", "4", "5"],
  },
  {
    question: "2. What level of trainability are you looking for?",
    dropdownOptions: ["1", "2", "3", "4", "5"],
  },
  {
    question: "3. What level of barking is acceptable to you?",
    dropdownOptions: ["1", "2", "3", "4", "5"],
  },
  {
    question: "4. What level of shedding for your pet are you looking for?",
    dropdownOptions: ["1", "2", "3", "4", "5"],
  },
  {
    question: "5. My ideal dog is _____.",
    dropdownOptions: [
      "No age preference",
      "A puppy",
      "A young pet (1-6 years)",
      "A senior pet (6+ years)",
    ],
  },
  {
    question: "6. There are _____ as part of my HOA or lease.",
    dropdownOptions: ["Dog restrictions", "No dog restrictions"],
  },
  {
    question: "7. My HOA or lease will not allow a dog that is ____.",
    dropdownOptions: [
      "No size restriction",
      "Over 25 lbs",
      "Over 60 lbs",
      "Over 100 lbs",
    ],
  },
  {
    question: "8. What level of shedding for your pet are you looking for?",
    dropdownOptions: ["1", "2", "3", "4", "5"],
  },
  // {
  //   questions: "9. dog breeds",
  //   dropdownOptions: dogArray,
  // },


];
var catQuestions = [
  {
    question: "1. What level of shedding for your pet are you looking for?",
    dropdownOptions: ["1", "2", "3", "4", "5"],
  },
  {
    question: "2. My ideal  cat is _____.",
    dropdownOptions: [
      "No age preference",
      "A puppy/kitten",
      "A young pet (1-6 years)",
      "A senior pet (6+ years)",
    ],
  },
  {
    question: "3. What is your optimal pet budget?",
    dropdownOptions: [
      "$755 annually",
      "$1,118 annually",
      "$3,145 annually",
      "$4,095 annually",
    ],
  },
  // {
  //   question: "4. cat breeds",
  //   dropdownOptions: catArray,
  // },
];

function appendQuestions() {
  console.log(currentQuestion);
  console.log(bothQuestions.length);
  if (currentQuestion < bothQuestions.length) {
    var currentQuestionObject = bothQuestions[currentQuestion];
    var questionPlaceholder = document.getElementById("questionPlaceholder");
    var dropdownAnswers = document.getElementById("dropdownAnswers");

    questionPlaceholder.textContent = currentQuestionObject.question;
    dropdownAnswers.innerHTML = "";

    currentQuestionObject.dropdownOptions.forEach(function (option, index) {
      var optionElement = document.createElement("option");
      optionElement.value = "option" + (index + 1);
      optionElement.textContent = option;
      dropdownAnswers.appendChild(optionElement);
    });
    currentQuestion++;
    console.log(currentQuestion);
    console.log('in if statement')
  }
}
appendQuestions()


document.querySelector('form').addEventListener('submit', function (event) {
  event.preventDefault(); 
  appendQuestions(); 
});

// function dogCatQuestions(){

// if (currentQuestion === 14 && selectedOption === 'Dog'){
//   var currentQuestionObject = dogQuestions[currentQuestion - 14];
//   var questionPlaceholder = document.getElementById("questionPlaceholder");
//   var dropdownAnswers = document.getElementById("dropdownAnswers");

//   questionPlaceholder.textContent = currentQuestionObject.question;
//     dropdownAnswers.innerHTML = "";
//     currentQuestionObject.dropdownOptions.forEach(function (option, index) {
//       var optionElement = document.createElement("option");
//       optionElement.value = "option" + (index + 1);
//       optionElement.textContent = option;
//       dropdownAnswers.appendChild(optionElement);
//     });
//     currentQuestion++;
// }
// if (currentQuestion === 14 && selectedOption === 'Cat'){
//   var currentQuestionObject = catQuestions[currentQuestion - 14];
//   var questionPlaceholder = document.getElementById("questionPlaceholder");
//   var dropdownAnswers = document.getElementById("dropdownAnswers");

//   questionPlaceholder.textContent = currentQuestionObject.question;
//     dropdownAnswers.innerHTML = "";
//     currentQuestionObject.dropdownOptions.forEach(function (option, index) {
//       var optionElement = document.createElement("option");
//       optionElement.value = "option" + (index + 1);
//       optionElement.textContent = option;
//       dropdownAnswers.appendChild(optionElement);
//     });
//     currentQuestion++;
// }
// }