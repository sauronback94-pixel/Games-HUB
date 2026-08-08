// ================= BUTTON CLICK =================

const buttons = document.querySelectorAll("button");

buttons.forEach(function(button) {

    button.addEventListener("click", function() {

        console.log(
            "Button clicked:",
            button.innerText
        );

    });

});


// ================= GAME SEARCH =================

const searchButton = document.querySelector(".search-btn");

const gameCards = document.querySelectorAll(".game-card");

searchButton.addEventListener("click", function() {

    const searchText = prompt("Search for a game:");

    if (searchText === null) {
        return;
    }

    const search = searchText.toLowerCase().trim();

    gameCards.forEach(function(card) {

        const gameName =
            card.querySelector("h3").innerText.toLowerCase();

        if (gameName.includes(search)) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

});
