import rootObject from "../assets/json/products.json" assert { type: 'json' };
//* Whishlist
let elWishlist = document.getElementById('wishlist');
if (elWishlist != null) {
    elWishlist.addEventListener('click', addToWishList, false);
}
function addToWishList() {
    try {
        let element = document.getElementById("wishlist");
        element.classList.toggle("wishlist-active");
        if (element.classList.contains("wishlist-active")) {
            element.innerHTML = `<i class="fa-solid fa-heart text-secondary"></i> Wishlist`;
            console.log("Item toegevoegd aan wishlist");
        } else {
            element.innerHTML = `<i class="fa-regular fa-heart text-secondary"></i> Wishlist`;
            console.log("Item verwijdered uit wishlist");
        }
    } catch (error) {
        console.error(`Error with message: ${error} `);
    }
}
//! Einde Whishlist

//* Winkelmandje
let cart = {};
let totalPrice = 0;
function addToCart(productName) {
    try {
        console.log(`Trying to add ${productName} to cart`);
        // Create an aside if there isn't already one
        let elAside = document.querySelector('aside');
        if (!elAside) {
            elAside = document.createElement('aside');
            document.body.appendChild(elAside);
            elAside.innerHTML = '<p id="total-price"></p>';
            // Create a new button element
            let clearCartButton = document.createElement('button');
            clearCartButton.className = 'trash';
            clearCartButton.innerHTML = 'Clear Cart';
            clearCartButton.addEventListener('click', function () {
                // Remove all products from the cart
                cart = {};
                // Remove all products from the aside element
                elAside.innerHTML = '<p id="total-price"></p>';
                // Reset the total price
                totalPrice = 0;
                let body = document.querySelector('body');
                body.removeChild(elAside);
            });
            // Append the button to the aside element
            elAside.appendChild(clearCartButton);
        }
        // Compare the product name with the JSON data
        for (let product of rootObject.products) {
            if (product.name === productName) {
                // If product is already in cart, increase quantity
                if (cart[productName]) {
                    cart[productName].quantity += 1;
                } else {
                    let elP = document.createElement('p');
                    elP.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                ${product.name} - ${parseFloat(product.price).toLocaleString('nl-BE', { style: "currency", currency: "EUR" })}
                `;
                    elAside.appendChild(elP);
                    // Add product to cart with quantity 1
                    cart[productName] = {
                        element: elP,
                        price: product.price,
                        quantity: 1
                    };
                    let removeProductButton = document.createElement('button');
                    removeProductButton.innerHTML = 'Remove'; // Set the text of the button
                    removeProductButton.className = 'trash';
                    removeProductButton.addEventListener('click', function () {
                        removeFromCart(productName);
                    });
                    // Append the button to the product element
                    elP.appendChild(removeProductButton);
                }
                // Update quantity in the aside element
                let elQuantity = cart[productName].element.querySelector('.quantity');
                if (!elQuantity) {
                    elQuantity = document.createElement('span');
                    elQuantity.className = 'quantity';
                    cart[productName].element.appendChild(elQuantity);
                }
                elQuantity.innerHTML = ` x ${cart[productName].quantity}`;
                console.log(`Naam: ${product.name}`);
                console.log(`Prijs: ${cart[productName].price}`);
                console.log(`Image: ${product.image}`);
                console.log(`Aantal: ${cart[productName].quantity}`);
                totalPrice += parseFloat(product.price);
                console.log(`Totaal: ${totalPrice}`);
                // Select the total price element
                let elTotalPrice = document.getElementById('total-price');
                // Update the total price in the HTML
                elTotalPrice.innerHTML = `Total Price: ${totalPrice.toLocaleString('nl-BE', { style: "currency", currency: "EUR" })}`;
            }
        }
    }
    catch (error) {
        console.error(`Error with message: ${error} `);
        console.warn(`${productName} has not been added to cart.`);
    }
}
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
function removeFromCart(productName) {
    console.log(`Trying to remove ${productName} from cart`);
    try {
        for (let product of rootObject.products) {
            if (product.name === productName) {
                cart[productName].quantity -= 1;
                if (cart[productName].quantity < 1) {
                    // Get the aside element
                    let elAside = document.querySelector('aside');
                    // Remove the product element from the aside
                    elAside.removeChild(cart[productName].element);
                    // Remove the product from the cart
                    delete cart[productName];
                } else {
                    let elQuantity = cart[productName].element.querySelector('.quantity');
                    elQuantity.innerHTML = ` x ${cart[productName].quantity}`;
                }
                totalPrice -= parseFloat(product.price);
                console.log(`Totaal: ${totalPrice}`);
                // Select the total price element
                let elTotalPrice = document.getElementById('total-price');
                // Update the total price in the HTML
                elTotalPrice.innerHTML = `Total Price: ${totalPrice.toLocaleString('nl-BE', { style: "currency", currency: "EUR" })}`;
            }
        }
    } catch (error) {
        console.error(`Error with message: ${error}`);
    }
}
//! Einde Winkelmandje

//* Klanten
let elClients = document.getElementById("customers");
if (elClients != null) {
    fetch("https://randomuser.me/api/?results=5")
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                return Promise.reject(response.status);
            }
        })
        .then((response) => {
            response.results.forEach(function (klant) {
                let elKlant = document.createElement("article");
                elKlant.classList.add("card");

                elKlant.innerHTML = `
                <h1> ${klant.name.title}. ${klant.name.last} ${klant.name.first}</h1>
                <p>${klant.location.country}</p>
                <img src="${klant.picture.large}" alt="De profielfoto van ${klant.name.first} kan niet geladen worden"/>
            `;
                elClients.appendChild(elKlant);
            });
        })
        .catch((error) => {
            console.error(`Error with message: ${error} `); $
            let elKlant = document.createElement("article");
            elKlant.classList.add("card", "error");
            elKlant.innerHTML = `
                <h1>Oops. Er is iets foutgegaan</h1>
                <p>Error with message: ${error}</p>
            `;
        });
}