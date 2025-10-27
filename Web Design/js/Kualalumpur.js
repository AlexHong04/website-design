export const attractions = 
[
    {
        name: "Batu Caves",
        price: "RM55.00",
        imageUrl: "../images/batucaves.jpg",
        link: "../html/KLBatu.html" 
    },
    {
        name: "Aquarium KLCC",
        price:"RM90.00",
        imageUrl: "../images/Aquarium.jpg",
        link: "../html/KLAQUA.html" 
        
    },
    {
        name: "Illusion Musuem KLCC",
        price:"RM40.00",
        imageUrl: "../images/illusion musuem.jpg",
        link: "../html/KL3DART.html" 
    },
    {
        name: "Zoo Negara",
        price:"RM35.00",
        imageUrl: "../images/zoo negara.jpg",
        link: "../html/KLZoo.html"
    },
    {
        name: "Kid Zania",
        price: "RM60.00",
        imageUrl: "../images/kidzania.jpg",
        link: "../html/KLKid.html"
    },




];

//ADD TO CART
export function addToCart(buttonElement) {
    if (buttonElement.getAttribute('data-added') === 'true') {
        alert("Product already in cart!");
    } else {
        alert("Add to Cart Successful!");
        buttonElement.setAttribute('data-added', 'true');
    }
}
