var cardSpeciesHTML = document.querySelector('.cardSpecies');
var cardFriendlinessHTML = document.querySelector('.cardFriendliness');
var cardTrainabiltyHTML = document.querySelector('.cardTrainability');
var cardImageCapHTML = document.querySelector('#cardImageCap');
// var questionSpeciesHTML = document.querySelector("#questionSpecies");
// var questionBreedHTML = document.querySelector("#questionBreed");
// var questionFriendlinessHTML = document.querySelector("#questionFriendliness");
// var questionTrainabilityHTML = document.querySelector("#questionTrainability");
// var questionGroomingHTML = document.querySelector("#questionGrooming");
// var questionSizeHTML = document.querySelector("#questionSize");
var answerSpeciesHTML = document.querySelector("#answerSpecies");
var answerBreedHTML = document.querySelector("#answerBreed");
var answerTimeHTML = document.querySelector("#answerTime");
var answerFriendlinessHTML = document.querySelector("#answerFriendly");
var answerTrainabilityHTML = document.querySelector("#answerTrainability");
var answerGroomingHTML = document.querySelector("#answerGrooming");
var answerSizeHTML = document.querySelector("#answerSize");
var catCardImage = document.querySelector('.catCardImg-Top')
var dogCardImage = document.querySelector('.dogCardImg-Top')
var chosenPetType = 'dogs'
var petBreed = 'mastiff'
var requestNinja = `https://api.api-ninjas.com/v1/${chosenPetType}?name=${petBreed}`

//add questions and answers to results page
function addQuestionAnswers () {
    var choiceSpecies = localStorage.getItem("species");
    if(choiceSpecies === 'Dog') {
        answerSpeciesHTML.textContent = "Do you want a cat or dog? " + localStorage.getItem("species");
        answerBreedHTML.textContent = "Breed? " + localStorage.getItem("breed");
        answerTimeHTML.textContent = "How much time can you commit to your pet per week? " + localStorage.getItem("timeCommitment");
        answerFriendlinessHTML.textContent = "How important is it that your pet is friendly? " + localStorage.getItem("childFriendly");
        answerTrainabilityHTML.textContent = "What level of trainability ar eyou looking for? " +  localStorage.getItem("trainability");
        answerGroomingHTML.textContent = "What level of grooming is most comfortable for you? " +  localStorage.getItem("grooming");
        answerSizeHTML.textContent = "What size pet is most comfortable for you? " +  localStorage.getItem("size");
} else {
        answerSpeciesHTML.textContent = "Do you want a cat or dog? " + localStorage.getItem("species");
        answerBreedHTML.textContent = "Breed? " + localStorage.getItem("breed");
        answerTimeHTML.textContent = "How much time can you commit to your pet per week? " + localStorage.getItem("timeCommitment");
        answerFriendlinessHTML.textContent = "How important is it that your pet is friendly? " + localStorage.getItem("childFriendly");
        answerTrainabilityHTML.textContent = "What level of trainability ar eyou looking for? " +  localStorage.getItem("trainability");
        answerGroomingHTML.textContent = "What level of grooming is most comfortable for you? " +  localStorage.getItem("grooming");
        answerSizeHTML.textContent = "What size pet is most comfortable for you? " +  localStorage.getItem("size");
    }
}
//add name, size and friendliness to results page
function addNameSizeFriendliness () {
    var choiceSpecies = localStorage.getItem("species");
    if(choiceSpecies === 'Dog') {
        cardSpeciesHTML.textContent = "Species: " + localStorage.getItem("species");
        cardFriendlinessHTML.textContent = "Friendliness: " + localStorage.getItem("childFriendly");
        cardTrainabiltyHTML.textContent = "Trainability: " + localStorage.getItem("trainability");
} else {
        cardSpeciesHTML.textContent = "Species: " + localStorage.getItem("species");
        cardFriendlinessHTML.textContent = "Friendliness: " +localStorage.getItem("childFriendly");
        cardTrainabiltyHTML.textContent = "Trainability: " +  localStorage.getItem("trainability");
    }
}

function petImage() {
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
        var chosenPetImage = data[0].image_link
        dogCardImage.setAttribute('src', chosenPetImage)
      });
  }
  petImage();

addNameSizeFriendliness ();
addQuestionAnswers ()
//add image links to results page for cat cards
// function addCatImage (){
//     var formData = new FormData();
//     for (let i = 0; i < catArray.length; i++) {
//         formData.append('image', $('#YOUR_IMAGE_FILE')[i].files[i]);
//         $.ajax({
//             method: 'POST',
//             url: 'https://api.api-ninjas.com/v1/imagetotext',
//             data: formData,
//             enctype: 'multipart/form-data',
//             processData: false,
//             contentType: false, 
//             success: function(result) {
//                 console.log(result);
//                 catArray.setItem("catImage", result);
//                 catArray.getItem("catImage");
//             },
//             error: function ajaxError(jqXHR, textStatus, errorThrown) {
//                 alert(jqXHR.responseText);
//             }
//         }); 
//     }
// }

//add image links to results page for dog cards
// function addCatImage (){
//     var formData = new FormData();
//     for (let i = 0; i < catArray.length; i++) {
//         formData.append('image', $('#YOUR_IMAGE_FILE')[i].files[i]);
//         $.ajax({
//             method: 'POST',
//             url: 'https://api.api-ninjas.com/v1/imagetotext',
//             data: formData,
//             enctype: 'multipart/form-data',
//             processData: false,
//             contentType: false, 
//             success: function(result) {
//                 console.log(result);
//                 catArray.setItem("catImage", result);
//                 catArray.getItem("catImage");
//             },
//             error: function ajaxError(jqXHR, textStatus, errorThrown) {
//                 alert(jqXHR.responseText);
//             }
//         }); 
//     }
// }