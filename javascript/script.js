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

// Define a JSON array of products
const products = [
    {
        "name": "SPECTRAFROST Swiftlite Ultrabook",
        "price": "1259",
        "image": "assets/images/SpectraFrost Ultrabook.jpeg"
    },
    {
        "name": "SPECTRAFROST EcoWoodElite Desktop PC",
        "price": "5469",
        "image": "assets/images/EcoWood.jpeg"
    },
    {
        "name": "LuminX 32-inch White Gaming Monitor",
        "price": "1480",
        "image": "assets/images/LuminX.jpeg"
    },
    {
        "name": "SpectraFrost X1 Gaming Laptop",
        "price": "1480",
        "image": "assets/images/LuminX.jpeg"
    },
    {
        "name": "LuminX 32-inch White Gaming Monitor",
        "price": "1480",
        "image": "assets/images/LuminX.jpeg"
    },
    {
        "name": "LuminX 32-inch White Gaming Monitor",
        "price": "1480",
        "image": "assets/images/LuminX.jpeg"
    },
    {
        "name": "LuminX 32-inch White Gaming Monitor",
        "price": "1480",
        "image": "assets/images/LuminX.jpeg"
    }
]