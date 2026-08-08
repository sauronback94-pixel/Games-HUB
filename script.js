document.addEventListener("DOMContentLoaded", function () {

    // ================= GAME SEARCH =================

const searchBox =
    document.querySelector(".search-box");

const searchButton =
    document.querySelector(".search-btn");

const searchInput =
    document.getElementById("game-search");

const gameCards =
    document.querySelectorAll(".game-card");


if (
    searchBox &&
    searchButton &&
    searchInput
) {

    searchButton.addEventListener("click", function () {

        searchBox.classList.toggle("active");

        if (searchBox.classList.contains("active")) {

            searchInput.focus();

        } else {

            searchInput.value = "";

            gameCards.forEach(function (card) {

                card.style.display = "block";

            });

        }

    });


    searchInput.addEventListener(
        "input",
        function () {

            const search =
                searchInput.value
                    .toLowerCase()
                    .trim();


            gameCards.forEach(function (card) {

                const gameName =
                    card
                        .querySelector("h3")
                        .innerText
                        .toLowerCase();


                if (
                    gameName.includes(search)
                ) {

                    card.style.display =
                        "block";

                } else {

                    card.style.display =
                        "none";

                }

            });

        }
    );

}

    // ================= CATEGORIES =================

    const categoryButtons =
        document.querySelectorAll(".category-btn");


    categoryButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const category =
                button.dataset.category;


            gameCards.forEach(function (card) {

                const gameCategory =
                    card.dataset.category;


                if (
                    category === "all" ||
                    gameCategory === category
                ) {

                    card.style.display = "";

                } else {

                    card.style.display = "none";

                }

            });

        });

    });


    // ================= READ MORE =================

    const gameModal =
        document.getElementById("game-modal");

    const modalImage =
        document.getElementById("modal-image");

    const modalTitle =
        document.getElementById("modal-title");

    const modalGenre =
        document.getElementById("modal-genre");

    const modalRating =
        document.getElementById("modal-rating");

    const modalDescription =
        document.getElementById("modal-description");

    const closeModal =
        document.querySelector(".close-modal");


    const readMoreButtons =
        document.querySelectorAll(".game-info button");


    readMoreButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const card =
                button.closest(".game-card");


            const image =
                card.querySelector("img");

            const title =
                card.querySelector("h3");

            const genre =
                card.querySelector(".genre");

            const rating =
                card.querySelector(".rating");

            const description =
                card.querySelector(".game-info > p");


            modalImage.src =
                image.src;

            modalImage.alt =
                image.alt;

            modalTitle.innerText =
                title.innerText;

            modalGenre.innerText =
                genre.innerText;

            modalRating.innerText =
                rating.innerText;

            modalDescription.innerText =
                description.innerText;


            gameModal.classList.add("active");

        });

    });


    closeModal.addEventListener("click", function () {

        gameModal.classList.remove("active");

    });


    gameModal.addEventListener("click", function (event) {

        if (event.target === gameModal) {

            gameModal.classList.remove("active");

        }

    });

});
