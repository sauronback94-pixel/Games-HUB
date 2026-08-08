document.addEventListener("DOMContentLoaded", function () {


    // ================= BUTTON CLICK =================

    const buttons = document.querySelectorAll("button");

    buttons.forEach(function (button) {

        button.addEventListener("click", function () {

            console.log(
                "Button clicked:",
                button.innerText
            );

        });

    });


    // ================= GAME DATA =================

    const gameCards =
        document.querySelectorAll(".game-card");


    // ================= SEARCH =================

    const searchButton =
        document.querySelector(".search-btn");


    if (searchButton) {

        searchButton.addEventListener("click", function () {

            const searchText =
                prompt("Search for a game:");

            if (searchText === null) {
                return;
            }


            const search =
                searchText.toLowerCase().trim();


            gameCards.forEach(function (card) {

                const gameName =
                    card.querySelector("h3")
                    .innerText
                    .toLowerCase();


                if (gameName.includes(search)) {

                    card.style.display = "block";

                } else {

                    card.style.display = "none";

                }

            });

        });

    }


    // ================= GAME CATEGORIES =================

    const categoryButtons =
        document.querySelectorAll(".category-btn");


    categoryButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const selectedCategory =
                button.dataset.category;


            categoryButtons.forEach(function (btn) {

                btn.classList.remove("active");

            });


            button.classList.add("active");


            gameCards.forEach(function (card) {

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


    // ================= GAME DETAILS MODAL =================

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


    console.log(
        "Read More buttons:",
        readMoreButtons.length
    );


    if (
        gameModal &&
        modalImage &&
        modalTitle &&
        modalGenre &&
        modalRating &&
        modalDescription &&
        closeModal
    ) {


        readMoreButtons.forEach(function (button) {

            button.addEventListener("click", function (event) {

                event.stopPropagation();


                const card =
                    button.closest(".game-card");


                const image =
                    card.querySelector(".game-image img");


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


        // CLOSE BUTTON

        closeModal.addEventListener("click", function () {

            gameModal.classList.remove("active");

        });


        // CLOSE BY CLICKING OUTSIDE

        gameModal.addEventListener("click", function (event) {

            if (event.target === gameModal) {

                gameModal.classList.remove("active");

            }

        });

    }

});
