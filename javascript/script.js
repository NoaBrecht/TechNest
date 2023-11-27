import rootObject from "../assets/json/products.json" assert { type: 'json' };

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
let cart = {};

function addToCart(productName) {
    console.log(`Adding ${productName} to cart`);
    // Create an aside if there isn't already one
    let elAside = document.querySelector('aside');
    if (!elAside) {
        elAside = document.createElement('aside');
        document.body.appendChild(elAside);
    }

    // Compare the product name with the JSON data
    for (let product of rootObject.products) {
        if (product.name === productName) {


            // If product is already in cart, increase quantity
            if (cart[productName]) {
                cart[productName].quantity += 1;
            } else {
                // Create a new article element
                let elP = document.createElement('p');
                elP.innerHTML = `<img src="${product.image}" alt="${product.name}"> ${product.name} - €${product.price}`;
                elAside.appendChild(elP);

                // Add product to cart with quantity 1
                cart[productName] = {
                    element: elP,
                    quantity: 1
                };
            }

            // Update quantity in the aside element
            let elQuantity = cart[productName].element.querySelector('.quantity');
            if (!elQuantity) {
                elQuantity = document.createElement('span');
                elQuantity.className = 'quantity';
                cart[productName].element.appendChild(elQuantity);
            }
            elQuantity.textContent = ` x ${cart[productName].quantity}`;
            console.log(`Naam: ${product.name}`);
            console.log(`Prijs: ${product.price}`);
            console.log(`Image: ${product.image}`);
            console.log(`Aantal: ${cart[productName].quantity}`);
        }
    }
}


// for (let product of rootObject.products) {
//     console.log(`Name: ${product.name}`);
//     console.log(`Price: ${product.price}`);
//     console.log(`Image: ${product.image}`);
// }



let elUltrabook = document.getElementById('Ultrabook');
if (elUltrabook != null) {
    elUltrabook.addEventListener('click', () => addToCart("SPECTRAFROST Swiftlite Ultrabook"), false);
}
let elEcoWoodElite = document.getElementById('EcoWoodElite');
if (elEcoWoodElite != null) {
    elEcoWoodElite.addEventListener('click', () => addToCart("SPECTRAFROST EcoWoodElite Desktop PC"), false);
}

