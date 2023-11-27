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
