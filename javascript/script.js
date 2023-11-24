function addProductToWinkelmandje() {
    // Create an "li" node:
    const node = document.createElement("aside");


    function addProductToWinkelmandje() {
        // Create an "article" node:
        const node = document.createElement("article");
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
        elBody.appendChild(node);
        console.log('test');
    }
}

let elWishlist = document.getElementById('wishlist');

elWishlist.addEventListener('blur', addProductToWinkelmandje, false);
// 'blur' is één van de vele DOM events die wordt aangeroepen



let elWinkelmandje = document.getElementById('winkelmandje');

elWinkelmandje.addEventListener('blur', addProductToWinkelmandje, false);
function addToWishList() {
   var element = document.getElementById("myDIV");
   element.classList.toggle("wishlist-active");
}
