var dog = document.querySelector("#dog");
var dogButton = document.querySelector("button");

function getDog() {

fetch("https://dog.ceo/api/breeds/image/random")
    .then(function (response) {
        return response.json();
    })

    .then(function (json) {
       dog.src = (json.message);
    })
}


dogButton.addEventListener("click", getDog);