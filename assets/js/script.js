var APINinjas = 'cjMugAovo7SNn+DtczTAMg==P49uxlggz9Z3SFRx'
var chosenPetType = 'cats'
var petBreed = '5'
var carouselImgs = document.querySelectorAll('.animal-image')
var carouselItems = document.getElementById('carousel-items')
var requestNinja = `https://api.api-ninjas.com/v1/${chosenPetType}?playfulness=${petBreed}`
var theCatAPIKey = 'live_zqFTSSujc6nQSLlan4OKwI0Jzmsczq7iedMNANsZMjYf6yKUT8ee0A13DyhrzRHv'
var theDogAPIKey = 'live_T2AySINQ9j3gOKvi0bkfD47zo8VSZAyo8bkluvwT1hCxQZig4DiIC951YSat8qEm'

var imgArray = []

fetch(`https://api.thecatapi.com/v1/images/search?limit=5&api_key=${theCatAPIKey}`)

.then(function (catResponse) {
  console.log(catResponse);
  return catResponse.json()
})
.then(function (catData) {
  console.log(catData);

  fetch(`https://api.thedogapi.com/v1/images/search?limit=5&api_key=${theDogAPIKey}`)

  .then(function (dogResponse) {
    console.log(dogResponse);
    return dogResponse.json()
  })
  .then(function (dogData) {
    console.log(dogData);
    
    for (let i = 0; i < dogData.length; i++) {
      // var dogCardImg = document.createElement('img')
      // var dogImg = document.createAttribute('src')
      // dogCardImg.append(dogData[i].url)
      imgArray.push(dogData[i].url)
    }

    for (let i = 0; i < catData.length; i++) {
      // var catCardImg = document.createElement('img')
      // var catImg = document.createAttribute('src')
      // catCardImg.src(catData[i].url).append()
      imgArray.push(catData[i].url)
    }
    console.log(imgArray);
    // <div class="hidden duration-200 ease-linear" data-carousel-item>
    //         <img class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="animal img">
    //     </div>
    for (let i = 0; i < carouselImgs.length; i++) {
      
      // var carouselDiv = document.createElement('div')
      // var carouselImg = document.createElement('img')

      // carouselDiv.setAttribute('class', 'hidden duration-200 ease-linear')
      // if (i===0) {
      //   carouselDiv.setAttribute('data-carousel-item', "active")
      // } else {
      //   carouselDiv.setAttribute('data-carousel-item', "")
      // }
      // carouselImg.setAttribute('class', 'absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2')
      carouselImgs[i].setAttribute('src', imgArray[i])
      // carouselDiv.append(carouselImg)
      // carouselItems.append(carouselDiv)
    }
  })
  
  
  // imgArray.push(dogData, catData)


})

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
// cat loop for breed drop down
// for (let i = 0; i < catArray.length; i++) {
//   var option = document.createElement("option");
//   option.textContent = catArray[i];
//   catArray[i] = catArray[i].toLowerCase().split(" ").join("%20");
//   option.value = catArray[i];
//   dropdownAnswers.append(option);
// }

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
  document.getElementById('breedDropdown').add(option);
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

