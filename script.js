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

// ================= GAME CATEGORIES =================

const categoryButtons =
    document.querySelectorAll(".category-btn");

categoryButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const selectedCategory =
            button.dataset.category;


        categoryButtons.forEach(function(btn) {

            btn.classList.remove("active");

        });


        button.classList.add("active");


        gameCards.forEach(function(card) {

            const cardCategory =
                card.dataset.category;


            if (
                selectedCategory === "all" ||
                cardCategory === selectedCategory
            ) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

});
