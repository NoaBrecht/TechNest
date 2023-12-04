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
let totalPrice = 0;
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
                    price: product.price,
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
            console.log(`Prijs: ${cart[productName].price}`);
            console.log(`Image: ${product.image}`);
            console.log(`Aantal: ${cart[productName].quantity}`);
            totalPrice += parseFloat(product.price);
            console.log(`Totaal: ${totalPrice}`);
        }
    }
}

// //! Zorgen dat elk product automatisch een eventlistener krijgt.
// for (let product of rootObject.products) {
//     let elProduct = document.getElementById(product.name.replace(/ /g, '_'));

//     if (elProduct != null) {
//         elProduct.addEventListener('click', () => addToCart(product.name), false);
//     }
// }

let elUltrabook = document.getElementById('Ultrabook');
if (elUltrabook != null) {
    elUltrabook.addEventListener('click', () => addToCart("SPECTRAFROST Swiftlite Ultrabook"), false);
}
let elEcoWoodElite = document.getElementById('EcoWoodElite');
if (elEcoWoodElite != null) {
    elEcoWoodElite.addEventListener('click', () => addToCart("SPECTRAFROST EcoWoodElite Desktop PC"), false);
}
let elGaming_Monitor = document.getElementById('White_Gaming_Monitor');
if (elGaming_Monitor != null) {
    elGaming_Monitor.addEventListener('click', () => addToCart("LuminX 32-inch White Gaming Monitor"), false);
}
let elGaming_Laptop = document.getElementById('SPECTRAFROST_X1_GAMING_LAPTOP');
if (elGaming_Laptop != null) {
    elGaming_Laptop.addEventListener('click', () => addToCart("SpectraFrost X1 Gaming Laptop"), false);
}
let elPrinter = document.getElementById('printer');
if (elPrinter != null) {
    elPrinter.addEventListener('click', () => addToCart("OnyxJet Pro Draadloze Kleurenprinter"), false);
}
let elMouse = document.getElementById('mouse');
if (elMouse != null) {
    elMouse.addEventListener('click', () => addToCart("StealthGlide Black Wireless Mouse"), false);
}
let elSpeaker = document.getElementById('speaker');
if (elSpeaker != null) {
    elSpeaker.addEventListener('click', () => addToCart("PureTone Stereo PC Speakers"), false);
}
let elOffice_Monitor = document.getElementById('Office_Monitor');
if (elOffice_Monitor != null) {
    elOffice_Monitor.addEventListener('click', () => addToCart("EcoView Essentials Office Monitor"), false);
}
let elController = document.getElementById('Controller');
if (elController != null) {
    elController.addEventListener('click', () => addToCart("AmethystGrip Purple Game Controller"), false);
}
let elPro_Video_Camera = document.getElementById('Pro_Video_Camera');
if (elPro_Video_Camera != null) {
    elPro_Video_Camera.addEventListener('click', () => addToCart("CRYSTALVIEW CineMaster Pro Video Camera"), false);
}
let elWebcam = document.getElementById('Webcam');
if (elWebcam != null) {
    elWebcam.addEventListener('click', () => addToCart("CrystalView Pro Webcam"), false);
}
let elMuismat = document.getElementById('Muismat');
if (elMuismat != null) {
    elMuismat.addEventListener('click', () => addToCart("PrecisionGlide Muismat"), false);
}
let elToetsenbord = document.getElementById('Toetsenbord');
if (elToetsenbord != null) {
    elToetsenbord.addEventListener('click', () => addToCart("TechMaster Pro Mechanische Toetsenbord"), false);
}

//! Einde Winkelmandje

//* Klanten
import Clients from "https://random-data-api.com/api/v2/users?size=10&response_type=json" assert { type: 'json' };
let elClients = document.getElementById('customers');

// for (let klant of Clients.klanten) {
//     // Create a new article element
//     elClients.innerHTML = `
//             <article class="card">
//                 <h1>${klant.first_name}</h1>
//                 <img src="${klant.avatar}" alt="${klant.first_name} avatar" />
//                 <p>Email: ${klant.email}</p>
//             </article>
//             `;
//     elClients.appendChild(elP);
// }
