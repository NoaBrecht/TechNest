function addProductToWinkelmandje() {
    // Create an "li" node:
    const aside = document.createElement("aside");
    // Create an "article" node:
    const product = document.createElement("article");
    node.className = "card";
    node.innerHTML = `
                    <h1>SPECTRAFROST Swiftlite Ultrabook</h1>
                    <img src="assets/images/SpectraFrost Ultrabook.jpeg" alt="SpectraFrost Ultrabook" />

                    <p class="price">Starting at &euro;1259</p>
                    <p>
                        Maak kennis met de SPECTRAFROST Swiftlite Ultrabook - waar
                        betaalbaarheid samengaat met draagbaarheid.
                    </p>
                    <button>Add to Cart</button>
            `;

    // Append the "article" node to the body:
    const elBody = document.getElementsByTagName("body")[0];
    elBody.appendChild(aside);
    console.log('test');
}

let elWishlist = document.getElementById('wishlist');

elWishlist.addEventListener('click', addToWishList, false);

// 'blur' is één van de vele DOM events die wordt aangeroepen

function addToWishList() {
    var element = document.getElementById("wishlist");
    element.classList.toggle("wishlist-active");
    if (element.classList.contains("wishlist-active")) {
        element.innerHTML = `<i class="fa-solid fa-heart text-secondary"></i> Wishlist`;
        console.log("Item toegevoegd aan wishlist");
    } else {
        element.innerHTML = `<i class="fa-regular fa-heart text-secondary"></i> Wishlist`;
        console.log("Item verwijdered uit wishlist");
    }
}


let elWishlistButton = document.querySelector('.button-wishlist');

elWishlistButton.addEventListener('click', addToWishList, false);



// let elWinkelmandje = document.getElementById('winkelmandje');

// elWinkelmandje.addEventListener('blur', addProductToWinkelmandje, false);

