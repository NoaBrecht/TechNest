import products from "../assets/json/products.json" assert { type: 'json' };

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

function addToCart(productName) {
    console.log(`Adding ${productName} to cart`);
    // Create an aside if there isn't already one
    let elAside = document.querySelector('aside');
    if (!elAside) {
        elAside = document.createElement('aside');
        document.body.appendChild(elAside);
    }
}

// for (let product of products) {
//     console.log(`Name: ${product.name}`);
//     console.log(`Price: ${product.price}`);
//     console.log(`Image: ${product.image}`);
// }



let elUltrabook = document.getElementById('Ultrabook');
if (elUltrabook != null) {
    elUltrabook.addEventListener('click', () => addToCart("Ultrabook"), false);
}