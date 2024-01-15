var APINinjas = "cjMugAovo7SNn+DtczTAMg==P49uxlggz9Z3SFRx";
var chosenPetType = "cats";
var petBreed = "5";
var requestNinja = `https://api.api-ninjas.com/v1/${chosenPetType}?playfulness=${petBreed}`;

var answeredValue = 0;
var questionPlaceEl = document.getElementById("questionPlaceholder"); //targeted the questionplaceholder by ID
var breedDropdown = document.getElementById("breedDropdown")

var dogArray = [
  "Affenpinscher",
  "Afghan Hound",
  "Aidi",
  "Airedale Terrier",
  "Akbash Dog",
  "Akita",
  "Alano Español",
  "Alaskan Klee Kai",
  "Alaskan Malamute",
  "Alpine Dachsbracke",
  "Alpine Spaniel",
  "American Bulldog",
  "American Cocker Spaniel",
  "American Eskimo Dog",
  "American Foxhound",
  "American Hairless Terrier",
  "American Pit Bull Terrier",
  "American Staffordshire Terrier",
  "American Water Spaniel",
  "Anglo-Français de Petite Vénerie",
  "Appenzeller Sennenhund",
  "Ariege Pointer",
  "Ariegeois",
  "Armant",
  "Armenian Gampr dog",
  "Artois Hound",
  "Australian Cattle Dog",
  "Australian Kelpie",
  "Australian Shepherd",
  "Australian Silky Terrier",
  "Australian Stumpy Tail Cattle Dog",
  "Australian Terrier",
  "Azawakh",
  "Bakharwal Dog",
  "Barbet",
  "Basenji",
  "Basque Shepherd Dog",
  "Basset Artésien Normand",
  "Basset Bleu de Gascogne",
  "Basset Fauve de Bretagne",
  "Basset Hound",
  "Bavarian Mountain Hound",
  "Beagle",
  "Beagle-Harrier",
  "Bearded Collie",
  "Beauceron",
  "Bedlington Terrier",
  "Belgian Shepherd Dog (Groenendael)",
  "Belgian Shepherd Dog (Laekenois)",
  "Belgian Shepherd Dog (Malinois)",
  "Bergamasco Shepherd",
  "Berger Blanc Suisse",
  "Berger Picard",
  "Berner Laufhund",
  "Bernese Mountain Dog",
  "Billy",
  "Black and Tan Coonhound",
  "Black and Tan Virginia Foxhound",
  "Black Norwegian Elkhound",
  "Black Russian Terrier",
  "Bloodhound",
  "Blue Lacy",
  "Blue Paul Terrier",
  "Boerboel",
  "Bohemian Shepherd",
  "Bolognese",
  "Border Collie",
  "Border Terrier",
  "Borzoi",
  "Boston Terrier",
  "Bouvier des Ardennes",
  "Bouvier des Flandres",
  "Boxer",
  "Boykin Spaniel",
  "Bracco Italiano",
  "Braque d'Auvergne",
  "Braque du Bourbonnais",
  "Braque du Puy",
  "Braque Francais",
  "Braque Saint-Germain",
  "Brazilian Terrier",
  "Briard",
  "Briquet Griffon Vendéen",
  "Brittany",
  "Broholmer",
  "Bruno Jura Hound",
  "Bucovina Shepherd Dog",
  "Bull and Terrier",
  "Bull Terrier (Miniature)",
  "Bull Terrier",
  "Bulldog",
  "Bullenbeisser",
  "Bullmastiff",
  "Bully Kutta",
  "Burgos Pointer",
  "Cairn Terrier",
  "Canaan Dog",
  "Canadian Eskimo Dog",
  "Cane Corso",
  "Cardigan Welsh Corgi",
  "Carolina Dog",
  "Carpathian Shepherd Dog",
  "Catahoula Cur",
  "Catalan Sheepdog",
  "Caucasian Shepherd Dog",
  "Cavalier King Charles Spaniel",
  "Central Asian Shepherd Dog",
  "Cesky Fousek",
  "Cesky Terrier",
  "Chesapeake Bay Retriever",
  "Chien Français Blanc et Noir",
  "Chien Français Blanc et Orange",
  "Chien Français Tricolore",
  "Chien-gris",
  "Chihuahua",
  "Chilean Fox Terrier",
  "Chinese Chongqing Dog",
  "Chinese Crested Dog",
  "Chinese Imperial Dog",
  "Chinook",
  "Chippiparai",
  "Chow Chow",
  "Cierny Sery",
  "Cimarrón Uruguayo",
  "Cirneco dell'Etna",
  "Clumber Spaniel",
  "Combai",
  "Cordoba Fighting Dog",
  "Coton de Tulear",
  "Cretan Hound",
  "Croatian Sheepdog",
  "Cumberland Sheepdog",
  "Curly Coated Retriever",
  "Cursinu",
  "Cão da Serra de Aires",
  "Cão de Castro Laboreiro",
  "Cão Fila de São Miguel",
  "Dachshund",
  "Dalmatian",
  "Dandie Dinmont Terrier",
  "Danish Swedish Farmdog",
  "Deutsche Bracke",
  "Doberman Pinscher",
  "Dogo Argentino",
  "Dogo Cubano",
  "Dogue de Bordeaux",
  "Drentse Patrijshond",
  "Drever",
  "Dunker",
  "Dutch Shepherd Dog",
  "Dutch Smoushond",
  "East Siberian Laika",
  "East-European Shepherd",
  "Elo",
  "English Cocker Spaniel",
  "English Foxhound",
  "English Mastiff",
  "English Setter",
  "English Shepherd",
  "English Springer Spaniel",
  "English Toy Terrier (Black &amp; Tan)",
  "English Water Spaniel",
  "English White Terrier",
  "Entlebucher Mountain Dog",
  "Estonian Hound",
  "Estrela Mountain Dog",
  "Eurasier",
  "Field Spaniel",
  "Fila Brasileiro",
  "Finnish Hound",
  "Finnish Lapphund",
  "Finnish Spitz",
  "Flat-Coated Retriever",
  "Formosan Mountain Dog",
  "Fox Terrier (Smooth)",
  "French Bulldog",
  "French Spaniel",
  "Galgo Español",
  "Gascon Saintongeois",
  "German Longhaired Pointer",
  "German Pinscher",
  "German Shepherd",
  "German Shorthaired Pointer",
  "German Spaniel",
  "German Spitz",
  "German Wirehaired Pointer",
  "Giant Schnauzer",
  "Glen of Imaal Terrier",
  "Golden Retriever",
  "Gordon Setter",
  "Gran Mastín de Borínquen",
  "Grand Anglo-Français Blanc et Noir",
  "Grand Anglo-Français Blanc et Orange",
  "Grand Anglo-Français Tricolore",
  "Grand Basset Griffon Vendéen",
  "Grand Bleu de Gascogne",
  "Grand Griffon Vendéen",
  "Great Dane",
  "Great Pyrenees",
  "Greater Swiss Mountain Dog",
  "Greek Harehound",
  "Greenland Dog",
  "Greyhound",
  "Griffon Bleu de Gascogne",
  "Griffon Bruxellois",
  "Griffon Fauve de Bretagne",
  "Griffon Nivernais",
  "Hamiltonstövare",
  "Hanover Hound",
  "Hare Indian Dog",
  "Harrier",
  "Havanese",
  "Hawaiian Poi Dog",
  "Himalayan Sheepdog",
  "Hokkaido",
  "Hovawart",
  "Huntaway",
  "Hygenhund",
  "Ibizan Hound",
  "Icelandic Sheepdog",
  "Indian pariah dog",
  "Indian Spitz",
  "Irish Red and White Setter",
  "Irish Setter",
  "Irish Terrier",
  "Irish Water Spaniel",
  "Irish Wolfhound",
  "Istrian Coarse-haired Hound",
  "Istrian Shorthaired Hound",
  "Italian Greyhound",
  "Jack Russell Terrier",
  "Jagdterrier",
  "Jämthund",
  "Kai Ken",
  "Kaikadi",
  "Kanni",
  "Karelian Bear Dog",
  "Karst Shepherd",
  "Keeshond",
  "Kerry Beagle",
  "Kerry Blue Terrier",
  "King Charles Spaniel",
  "King Shepherd",
  "Kintamani",
  "Kishu",
  "Komondor",
  "Kooikerhondje",
  "Koolie",
  "Korean Jindo Dog",
  "Kromfohrländer",
  "Kumaon Mastiff",
  "Kurī",
  "Kuvasz",
  "Kyi-Leo",
  "Labrador Husky",
  "Labrador Retriever",
  "Lagotto Romagnolo",
  "Lakeland Terrier",
  "Lancashire Heeler",
  "Landseer",
  "Lapponian Herder",
  "Large Münsterländer",
  "Leonberger",
  "Lhasa Apso",
  "Lithuanian Hound",
  "Longhaired Whippet",
  "Löwchen",
  "Mahratta Greyhound",
  "Maltese",
  "Manchester Terrier",
  "Maremma Sheepdog",
  "McNab",
  "Mexican Hairless Dog",
  "Miniature American Shepherd",
  "Miniature Australian Shepherd",
  "Miniature Fox Terrier",
  "Miniature Pinscher",
  "Miniature Schnauzer",
  "Miniature Shar Pei",
  "Molossus",
  "Montenegrin Mountain Hound",
  "Moscow Watchdog",
  "Moscow Water Dog",
  "Mountain Cur",
  "Mucuchies",
  "Mudhol Hound",
  "Mudi",
  "Neapolitan Mastiff",
  "New Zealand Heading Dog",
  "Newfoundland",
  "Norfolk Spaniel",
  "Norfolk Terrier",
  "Norrbottenspets",
  "North Country Beagle",
  "Northern Inuit Dog",
  "Norwegian Buhund",
  "Norwegian Elkhound",
  "Norwegian Lundehund",
  "Norwich Terrier",
  "Old Croatian Sighthound",
  "Old Danish Pointer",
  "Old English Sheepdog",
  "Old English Terrier",
  "Old German Shepherd Dog",
  "Olde English Bulldogge",
  "Otterhound",
  "Pachon Navarro",
  "Paisley Terrier",
  "Pandikona",
  "Papillon",
  "Parson Russell Terrier",
  "Patterdale Terrier",
  "Pekingese",
  "Pembroke Welsh Corgi",
  "Perro de Presa Canario",
  "Perro de Presa Mallorquin",
  "Peruvian Hairless Dog",
  "Petit Basset Griffon Vendéen",
  "Petit Bleu de Gascogne",
  "Phalène",
  "Pharaoh Hound",
  "Phu Quoc ridgeback dog",
  "Picardy Spaniel",
  "Plott Hound",
  "Podenco Canario",
  "Pointer (dog breed)",
  "Polish Greyhound",
  "Polish Hound",
  "Polish Hunting Dog",
  "Polish Lowland Sheepdog",
  "Polish Tatra Sheepdog",
  "Pomeranian",
  "Pont-Audemer Spaniel",
  "Poodle",
  "Porcelaine",
  "Portuguese Podengo",
  "Portuguese Pointer",
  "Portuguese Water Dog",
  "Posavac Hound",
  "Pražský Krysařík",
  "Pudelpointer",
  "Pug",
  "Puli",
  "Pumi",
  "Pungsan Dog",
  "Pyrenean Mastiff",
  "Pyrenean Shepherd",
  "Rafeiro do Alentejo",
  "Rajapalayam",
  "Rampur Greyhound",
  "Rastreador Brasileiro",
  "Rat Terrier",
  "Ratonero Bodeguero Andaluz",
  "Redbone Coonhound",
  "Rhodesian Ridgeback",
  "Rottweiler",
  "Rough Collie",
  "Russell Terrier",
  "Russian Spaniel",
  "Russian tracker",
  "Russo-European Laika",
  "Sabueso Español",
  "Saint-Usuge Spaniel",
  "Sakhalin Husky",
  "Saluki",
  "Samoyed",
  "Sapsali",
  "Schapendoes",
  "Schillerstövare",
  "Schipperke",
  "Schweizer Laufhund",
  "Schweizerischer Niederlaufhund",
  "Scotch Collie",
  "Scottish Deerhound",
  "Scottish Terrier",
  "Sealyham Terrier",
  "Segugio Italiano",
  "Seppala Siberian Sleddog",
  "Serbian Hound",
  "Serbian Tricolour Hound",
  "Shar Pei",
  "Shetland Sheepdog",
  "Shiba Inu",
  "Shih Tzu",
  "Shikoku",
  "Shiloh Shepherd Dog",
  "Siberian Husky",
  "Silken Windhound",
  "Sinhala Hound",
  "Skye Terrier",
  "Sloughi",
  "Slovak Cuvac",
  "Slovakian Rough-haired Pointer",
  "Small Greek Domestic Dog",
  "Small Münsterländer",
  "Smooth Collie",
  "South Russian Ovcharka",
  "Southern Hound",
  "Spanish Mastiff",
  "Spanish Water Dog",
  "Spinone Italiano",
  "Sporting Lucas Terrier",
  "St. Bernard",
  "St. John's water dog",
  "Stabyhoun",
  "Staffordshire Bull Terrier",
  "Standard Schnauzer",
  "Stephens Cur",
  "Styrian Coarse-haired Hound",
  "Sussex Spaniel",
  "Swedish Lapphund",
  "Swedish Vallhund",
  "Tahltan Bear Dog",
  "Taigan",
  "Talbot",
  "Tamaskan Dog",
  "Teddy Roosevelt Terrier",
  "Telomian",
  "Tenterfield Terrier",
  "Thai Bangkaew Dog",
  "Thai Ridgeback",
  "Tibetan Mastiff",
  "Tibetan Spaniel",
  "Tibetan Terrier",
  "Tornjak",
  "Tosa",
  "Toy Bulldog",
  "Toy Fox Terrier",
  "Toy Manchester Terrier",
  "Toy Trawler Spaniel",
  "Transylvanian Hound",
  "Treeing Cur",
  "Treeing Walker Coonhound",
  "Trigg Hound",
  "Tweed Water Spaniel",
  "Tyrolean Hound",
  "Vizsla",
  "Volpino Italiano",
  "Weimaraner",
  "Welsh Sheepdog",
  "Welsh Springer Spaniel",
  "Welsh Terrier",
  "West Highland White Terrier",
  "West Siberian Laika",
  "Westphalian Dachsbracke",
  "Wetterhoun",
  "Whippet",
  "White Shepherd",
  "Wire Fox Terrier",
  "Wirehaired Pointing Griffon",
  "Wirehaired Vizsla",
  "Yorkshire Terrier",
  "Šarplaninac",
];
console.log(dogArray)
var catArray = [
  "Abyssinian",
  "Aegean",
  "American Curl",
  "American Bobtail",
  "American Shorthair",
  "American Wirehair",
  "Arabian Mau",
  "Australian Mist",
  "Asian",
  "Asian Semi-longhair",
  "Balinese",
  "Bambino",
  "Bengal",
  "Birman",
  "Bombay",
  "Brazilian Shorthair",
  "British Semi-longhair",
  "British Shorthair",
  "British Longhair",
  "Burmese",
  "Burmilla",
  "California Spangled",
  "Chantilly-Tiffany",
  "Chartreux",
  "Chausie",
  "Cheetoh",
  "Colorpoint Shorthair",
  "Cornish Rex",
  "Cymric",
  "Cyprus",
  "Devon Rex",
  "Donskoy",
  "Dragon Li",
  "Dwarf cat",
  "Egyptian Mau",
  "European Shorthair",
  "Exotic Shorthair",
  "Foldex",
  "German Rex",
  "Havana Brown",
  "Highlander",
  "Himalayan",
  "Japanese Bobtail",
  "Javanese",
  "Karelian Bobtail",
  "Khao Manee",
  "Korat",
  "Korean Bobtail",
  "Korn Ja",
  "Kurilian Bobtail",
  "LaPerm",
  "Lykoi",
  "Maine Coon",
  "Manx",
  "Mekong Bobtail",
  "Minskin",
  "Munchkin",
  "Nebelung",
  "Napoleon",
  "Norwegian Forest",
  "Ocicat",
  "Ojos Azules",
  "Oregon Rex",
  "Oriental Bicolor",
  "Oriental Shorthair",
  "Oriental Longhair",
  "PerFold",
  "Persian",
  "Peterbald",
  "Pixie-bob",
  "Raas",
  "Ragamuffin",
  "Ragdoll",
  "Russian Blue",

  "Sam Sawet",
  "Savannah",
  "Scottish Fold",
  "Selkirk Rex",
  "Serengeti",
  "Serrade petit",
  "Siamese",
  "Siberian",
  "Singapura",
  "Snowshoe",
  "Sokoke",
  "Somali",
  "Sphynx",
  "Suphalak",
  "Thai",
  "Thai Lilac",
  "Tonkinese",
  "Toyger",
  "Turkish Angora",
  "Turkish Van",
  "Ukrainian Levkoy",
];
console

function petType() {
  fetch(requestNinja, {
    headers: {
      "X-Api-Key": "cjMugAovo7SNn+DtczTAMg==P49uxlggz9Z3SFRx",
    },
    contentType: "application/json",
  })
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
}
petType();




function populateDogArray(){
for (var i = 0; i < dogArray.length; i++) {
  var option = document.createElement('option');
  console.log(('option').value)
  option.value = dogArray[i];
  option.text = dogArray[i];
  breedDropdown.add(option);
}}
populateDogArray();

function saveToLocalStorage() {

  var selects = document.querySelectorAll('select[data-current-question]');
  
  
  selects.forEach(select => {
    const currentQuestion = select.getAttribute('data-current-question');
    const selectedValue = select.value;
    
    
    localStorage.setItem(currentQuestion, selectedValue);
  });
}

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
  saveToLocalStorage();
});

// var catFunction = function () {
//   for (let i = 0; i < catArray.length; i++) {
//     var option = document.createElement("option");
//     option.textContent = catArray[i];
//     catArray[i] = catArray[i].toLowerCase().split(" ").join("%20");
//     option.value = catArray[i];
//     console.log('option')
//   }
// };


// // dog loop for the breed drop down
// var dogFunction = function () {
//   for (let i = 0; i < dogArray.length; i++) {
//     var option = document.createElement("option");
//     option.textContent = dogArray[i];
//     dogArray[i] = dogArray[i].toLowerCase().split(" ").join("%20");
//     option.value = dogArray[i];
//   }
// };
// need to create multiple question objects (cat, dog or both questions)








// var bothQuestions = [
//   {
//     question: "1. Dog breeds",
//     dropdownOptions: dogArray,
//   },
//   {
//     question: "2. Cat breeds",
//     dropdownOptions: catArray,
//   },
//   {
//     question: "3 I’m interested in adopting a ____.",
//     dropdownOptions: ["Dog", "Cat"],
//   },
//   {
//     question: "4. How much free time do you have to devote to a pet? (The Playfulness of an animal typically demands more time for attention.)",
//     dropdownOptions: [
//       "30 minutes a day",
//       "2 hours a day",
//       "4 hours a day",
//       "More than 4 hours a day",
//     ],
//   },
//   {
//     question: "5. How important is it that the pet is children-friendly?",
//     dropdownOptions: ["1", "2", "3", "4", "5"],
//   },
//   {
//     question: "6. What level of grooming is most comfortable for you?",
//     dropdownOptions: ["1", "2", "3", "4", "5"],
//   },
//   {
//     question: "7. What energy level is the best fit for you?(playfulness)",
//     dropdownOptions: ["1", "2", "3", "4", "5"],
//   },

//   {
//     question: "8. What level of trainability are you looking for?(Intelligence)",
//     dropdownOptions: ["1", "2", "3", "4", "5"],
//   },
  
//   {
//     question: "11. There are _____ as part of my HOA or lease.",
//     dropdownOptions: ["Dog restrictions", "No dog restrictions"],
//   },

//   {
//     question: "12. What level of barking is acceptable to you?",
//     dropdownOptions: ["1", "2", "3", "4", "5"],
//   },
// ];

// function appendQuestions() {
//   console.log(currentQuestion);
//   console.log(bothQuestions.length);

//   if (currentQuestion < bothQuestions.length) {
//     var currentQuestionObject = bothQuestions[currentQuestion];

//     var questionPlaceholder = document.getElementById("questionPlaceholder");
//     var dropdownAnswers = document.getElementById("dropdownAnswers");
//     console.log(dropdownAnswers.value );
//     questionPlaceholder.textContent = currentQuestionObject.question;
//     dropdownAnswers.innerHTML = "";

//     currentQuestionObject.dropdownOptions.forEach(function (option, index) {
//       var optionElement = document.createElement("option");

//       optionElement.value = "option" + (index + 1);

//       optionElement.textContent = option;
//       // console.log(option);
//       dropdownAnswers.appendChild(optionElement);
//     });
    
//     // need to get local storage to save on submit and not replace the last key value pair.

//     console.log(localStorage.setItem(document.querySelector('option').text , JSON.stringify(document.querySelector('option').text)));
//     currentQuestion++;
//     console.log(currentQuestion);
//     console.log("in both if statement");
    
//   }
// }

// calling the function to get the question object into the form
// appendQuestions();

//now we are calling attention to the form element, adding an event listener for that submit button and then running a function to re run the
// append questions function each time submit is clicked, adding 1 to the question value each time and cycling the questions


// function askDogQuestions() {
//   currentQuestion = 0;
//   var dogQuestionLength = dogQuestion.Length;
//   if (currentQuestion < (dogQuestionLength -= 17)){
//   var currentQuestionObject = dogQuestions[currentQuestion];
//   var questionPlaceholder = document.getElementById("questionPlaceholder");
//   var dropdownAnswers = document.getElementById("dropdownAnswers");

//   questionPlaceholder.textContent = currentQuestionObject.questions;
//   dropdownAnswers.innerHTML = "";
//   currentQuestionObject.dropdownOptions.forEach(function (option, index) {
//     var optionElement = document.createElement("option");
//     optionElement.value = "option" + (index + 1);
//     optionElement.textContent = option;
//     dropdownAnswers.appendChild(optionElement);

//   })
// };
//   currentQuestion++;
//   console.log("asking dog stuff");
//   document.querySelector("form").addEventListener("submit", function (event) {
//     event.preventDefault();
//     appendQuestions();
// })
// };
// function askCatQuestions() {
//   currentQuestion = 0;
//   if (currentQuestion < (catQuestions.length -= 17)){
//     var currentQuestionObject = catQuestions[currentQuestion];
//   var questionPlaceholder = document.getElementById("questionPlaceholder");
//   var dropdownAnswers = document.getElementById("dropdownAnswers");

//   questionPlaceholder.textContent = currentQuestionObject.questions;
//   dropdownAnswers.innerHTML = "";
//   currentQuestionObject.dropdownOptions.forEach(function (option, index) {
//     var optionElement = document.createElement("option");
//     optionElement.value = "option" + (index + 1);
//     optionElement.textContent = option;
//     dropdownAnswers.appendChild(optionElement);
//   })
// };
//   currentQuestion++;
//   console.log("asking cat stuff");
// }
// var bothQuestions = [
//   {
//     question: "1 I’m interested in adopting a ____.",
//     dropdownOptions: ["Dog", "Cat"],
//   },
//   {
//     question: "2. Who lives with you?",
//     dropdownOptions: ["Single", "Children", "Married", "Roommates"],
//   },
//   {
//     question: "3. How much free time do you have to devote to a pet?",
//     dropdownOptions: [
//       "30 minutes a day",
//       "2 hours a day",
//       "4 hours a day",
//       "More than 4 hours a day",
//     ],
//   },
//   {
//     question: "4. How important is it that the pet is children-friendly?",
//     dropdownOptions: ["1", "2", "3", "4", "5"],
//   },
//   {
//     question: "5. How long can you allocate to play with your new pet?",
//     dropdownOptions: [
//       "30 minutes a day (cat answer)",
//       "1 hour a day (dog answer)",
//       "3 hours a day (dog answer)",
//     ],
//   },
//   {
//     question: "6. Are you comfortable with giving medication to your pet?",
//     dropdownOptions: ["Yes", "No"],
//   },
//   {
//     question: "7. What level of grooming is most comfortable for you?",
//     dropdownOptions: ["1", "2", "3", "4", "5"],
//   },
//   {
//     question: "8. What level of shedding for your pet are you looking for?",
//     dropdownOptions: ["1", "2", "3", "4", "5"],
//   },
//   {
//     question: "9. My future pet must be _____.",
//     dropdownOptions: ["Allergy-friendly", "House-trained"],
//   },
//   {
//     question:
//       "10. What friendliness level best suits your needs for your future pet?",
//     dropdownOptions: ["1", "2", "3", "4", "5"],
//   },
//   {
//     question: "11. What level of playfulness is best for you and your pet?",
//     dropdownOptions: ["1", "2", "3", "4", "5"],
//   },
//   {
//     question: "13. What energy level is the best fit for you?",
//     dropdownOptions: ["1", "2", "3", "4", "5"],
//   },
//   {
//     question: "14. How much time can you devote to cleaning after your pet?",
//     dropdownOptions: ["30 minutes a day", "1 hour a day", "2 hours a day"],
//   },
//   {
//     question: "15. I am a _____ pet owner.",
//     dropdownOptions: ["First-time", "Previous", "Current"],
//   },
//   {
//     question: "16. I currently have _____.",
//     dropdownOptions: [
//       "No dog(s) or cat(s)",
//       "Cat(s)",
//       "Dog(s)",
//       "Dog(s) and cat(s)",
//     ],
//   },
//   {
//     question: "17. How long can you allocate to play with your new pet?",
//     dropdownOptions: [
//       "30 minutes a day (cat answer)",
//       "1 hour a day (dog answer)",
//       "3 hours a day (dog answer)",
//     ],
//   },
//   {
//     question: "18. I am wanting to adopt for _____.",
//     dropdownOptions: ["Myself", "My family"],
//   },
//   {
//     question: "19. How important is it that the pet is children-friendly?",
//     dropdownOptions: ["1", "2", "3", "4", "5"],
//   },
//   {
//     question: "20. I’m interested in adopting a ____.",
//     dropdownOptions: ["Dog", "Cat"],
//   },
//   {
//     question:
//       "21. What friendliness level best suits your needs for your future pet?",
//     dropdownOptions: ["1", "2", "3", "4", "5"],
//   },
//   {
//     question: "22. What level of trainability are you looking for?",
//     dropdownOptions: ["1", "2", "3", "4", "5"],
//   },
//   {
//     question: "23. What level of barking is acceptable to you?",
//     dropdownOptions: ["1", "2", "3", "4", "5"],
//   },
//   {
//     question: "24. What level of shedding for your pet are you looking for?",
//     dropdownOptions: ["1", "2", "3", "4", "5"],
//   },
//   {
//     question: "25. My ideal dog is _____.",
//     dropdownOptions: [
//       "No age preference",
//       "A puppy",
//       "A young pet (1-6 years)",
//       "A senior pet (6+ years)",
//     ],
//   },
//   {
//     question: "26. There are _____ as part of my HOA or lease.",
//     dropdownOptions: ["Dog restrictions", "No dog restrictions"],
//   },
//   {
//     question: "27. My HOA or lease will not allow a dog that is ____.",
//     dropdownOptions: [
//       "No size restriction",
//       "Over 25 lbs",
//       "Over 60 lbs",
//       "Over 100 lbs",
//     ],
//   },
//   {
//     question: "28. What level of shedding for your pet are you looking for?",
//     dropdownOptions: ["1", "2", "3", "4", "5"],
//   },
//   // {
//   //   questions: "29. dog breeds",
//   //   dropdownOptions: dogArray,
//   // },
//   {
//     question: "30. What level of shedding for your pet are you looking for?",
//     dropdownOptions: ["1", "2", "3", "4", "5"],
//   },
//   {
//     question: "31. My ideal  cat is _____.",
//     dropdownOptions: [
//       "No age preference",
//       "A puppy/kitten",
//       "A young pet (1-6 years)",
//       "A senior pet (6+ years)",
//     ],
//   },
//   {
//     question: "33. What is your optimal pet budget?",
//     dropdownOptions: [
//       "$755 annually",
//       "$1,118 annually",
//       "$3,145 annually",
//       "$4,095 annually",
//     ],
//   },
//   // {
//   //   question: "34. cat breeds",
//   //   dropdownOptions: catArray,
//   // },
// ];
