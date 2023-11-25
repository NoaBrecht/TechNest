//* Whishlist

let elWishlist = document.getElementById('wishlist');
if (elWishlist != null) {
    elWishlist.addEventListener('click', addToWishList, false);
}

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

//! Einde Whishlist


//* Winkelmandje

// make a 2d array with all the products and prices
let products = [
    ["LuminX 32-inch White Gaming Monitor", 1480, "assets/images/LuminX.jpeg"],
    ["SPECTRAFROST X1 GAMING LAPTOP ", 4999],
    ["SPECTRAFROST Swiftlite Ultrabook", 1259],
    ["SPECTRAFROST Swiftlite Ultrabook", 1259],
    ["SPECTRAFROST Swiftlite Ultrabook", 1259],
    ["SPECTRAFROST Swiftlite Ultrabook", 1259],
    ["SPECTRAFROST Swiftlite Ultrabook", 1259],
    ["SPECTRAFROST Swiftlite Ultrabook", 1259],
    ["SPECTRAFROST Swiftlite Ultrabook", 1259],
];

// make a function to add the products to the cart
function addProductToWinkelmandje(productIndex) {
    product = products[productIndex];
    productName = product[0];
    productPrice = product[1];
    productImage = product[2];
    // create the asied element
    const aside = document.createElement("aside");
    const product = document.createElement("article");
    product.className = "card";
    product.innerHTML = `
                    <h1>${productName}</h1>
                    <img src="${productImage}" alt="${productName}" />

                    <p class="price">${productPrice}</p>
            `;
    const elBody = document.getElementsByTagName("body")[0];
    elBody.appendChild(aside);
}


// function addProductToWinkelmandje() {
//     // Create an "li" node:
//     const aside = document.createElement("aside");
//     // Create an "article" node:
//     const product = document.createElement("article");
//     node.className = "card";
//     node.innerHTML = `
//                     <h1>SPECTRAFROST Swiftlite Ultrabook</h1>
//                     <img src="assets/images/SpectraFrost Ultrabook.jpeg" alt="SpectraFrost Ultrabook" />

//                     <p class="price">Starting at &euro;1259</p>
//                     <p>
//                         Maak kennis met de SPECTRAFROST Swiftlite Ultrabook - waar
//                         betaalbaarheid samengaat met draagbaarheid.
//                     </p>
//                     <button>Add to Cart</button>
//             `;

//     // Append the "article" node to the body:
//     const elBody = document.getElementsByTagName("body")[0];
//     elBody.appendChild(aside);
//     console.log('test');
// }