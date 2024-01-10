var APINinjas = 'cjMugAovo7SNn+DtczTAMg==P49uxlggz9Z3SFRx'
var chosenPetType = 'cats'
var requestNinja = `https://api.api-ninjas.com/v1/${chosenPetType}?name=ragdoll`

function petType() {

    fetch(requestNinja, {
        headers: {
            'X-Api-Key': 'cjMugAovo7SNn+DtczTAMg==P49uxlggz9Z3SFRx'
        },
        contentType: 'application/json',
    })
        .then(function (response) {
            console.log(response);
            return response.json()
        })
        .then(function (data) {
            console.log(data);
        })
}
petType()
