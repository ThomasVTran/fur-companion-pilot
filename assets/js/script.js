// need to create multiple question objects (cat, dog or both questions)
var bothQuestions = [
  {
    question: "1. I’m interested in adopting a ____.",
    dropdownOptions: ["Dog", "Cat"],
  },
  {
    question: "2. I am wanting to adopt for _____.",
    dropdownOptions: ["Myself", "My family"],
  },
  {
    question: "3. Who lives with you?",
    dropdownOptions: ["Single", "Children", "Married", "Roommates"],
  },
  {
    question: "4. I am a _____ pet owner.",
    dropdownOptions: ["First-time", "Previous", "Current"],
  },
  {
    question: "5. I currently have _____.",
    dropdownOptions: [
      "No dog(s) or cat(s)",
      "Cat(s)",
      "Dog(s)",
      "Dog(s) and cat(s)",
    ],
  },
  {
    question: "6.How much free time do you have to devote to a pet?",
    dropdownOptions: [
      "30 minutes a day",
      "2 hours a day",
      "4 hours a day",
      "More than 4 hours a day",
    ],
  },
  {
    question: "7. Are you comfortable with giving medication to your pet?",
    dropdownOptions: ["Yes", "No"],
  },
  {
    question: "8. My future pet must be _____.",
    dropdownOptions: ["Allergy-friendly", "House-trained"],
  },
  {
    question: "9. How much time can you devote to cleaning after your pet?",
    dropdownOptions: ["30 minutes a day", "1 hour a day", "2 hours a day"],
  },
  {
    question: "10. How long can you allocate to play with your new pet?",
    dropdownOptions: [
      "30 minutes a day (cat answer)",
      "1 hour a day (dog answer)",
      "3 hours a day (dog answer)",
    ],
  },
  {
    question: "11. What level of shedding for your pet are you looking for?",
    dropdownOptions: ["1", "2", "3", "4", "5"],
  },
  {
    question:
      "12. What friendliness level best suits your needs for your future pet?",
    dropdownOptions: ["1", "2", "3", "4", "5"],
  },
  {
    question: "13. What level of playfulness is best for you and your pet?",
    dropdownOptions: ["1", "2", "3", "4", "5"],
  },
  {
    question: "14. What energy level is the best fit for you?",
    dropdownOptions: ["1", "2", "3", "4", "5"],
  },
  {
    question: "15. How important is it that the pet is children-friendly?",
    dropdownOptions: ["1", "2", "3", "4", "5"],
  },
  {
    question: "16. What level of grooming is most comfortable for you?",
    dropdownOptions: ["1", "2", "3", "4", "5"],
  },
  {
    question: "17. Are you comfortable with owning a pet with special needs?",
    dropdownOptions: ["Yes", "No"],
  },
];

var dogQuestions = [
  {
    question: "18. My ideal dog is _____.",
    dropdownOptions: [
      "No age preference",
      "A puppy",
      "A young pet (1-6 years)",
      "A senior pet (6+ years)",
    ],
  },
  {
    question: "19. There are _____ as part of my HOA or lease.",
    dropdownOptions: ["Dog restrictions", "No dog restrictions"],
  },
  {
    question: "20. My HOA or lease will not allow a dog that is ____.",
    dropdownOptions: [
      "No size restriction",
      "Over 25 lbs",
      "Over 60 lbs",
      "Over 100 lbs",
    ],
  },
  {
    question:
      "21. What friendliness level best suits your needs for your future pet?",
    dropdownOptions: ["1", "2", "3", "4", "5"],
  },
  {
    question: "22. I prefer a dog that is _____.",
    dropdownOptions: [
      "No size preference",
      "Small (0-25 lbs)",
      "Medium (26-60 lbs)",
      "Large (61-100 lbs)",
      "Extra large (101 lbs or more)",
    ],
  },
  {
    question: "23. What level of trainability are you looking for?",
    dropdownOptions: ["1", "2", "3", "4", "5"],
  },
  {
    question: "24. What level of barking is acceptable to you?",
    dropdownOptions: ["1", "2", "3", "4", "5"],
  },
  {
    question: "25. What level of shedding for your pet are you looking for?",
    dropdownOptions: ["1", "2", "3", "4", "5"],
  },
  // question 26. dog breed for loop
];

var catQuestions = [
  {
    question: "18. My ideal  cat is _____.",
    dropdownOptions: [
      "No age preference",
      "A puppy/kitten",
      "A young pet (1-6 years)",
      "A senior pet (6+ years)",
    ],
  },
  {
    question: "19. What is your optimal pet budget?",
    dropdownOptions: [
      "$755 annually",
      "$1,118 annually",
      "$3,145 annually",
      "$4,095 annually",
    ],
  },
  {
    //  Question 20 for loop cat breeds
  },
  {
    question: "21. What level of shedding for your pet are you looking for?",
    dropdownOptions: ["1", "2", "3", "4", "5"],
  },
];
