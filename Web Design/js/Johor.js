export const attractions = 
[
    {
        name: "LEGOLAND",
        price: "RM90.00",
        imageUrl: "../images/legoland.jpg",
        link: "../html/johorLego.html" 
    },
    {
        name: "Adventure Waterpark",
        price:"RM95.00",
        imageUrl: "../images/adventure.jpg",
        link: "../html/johorAdventure.html" 
        
    },
    {
        name: "Skyscape",
        price:"RM30.00",
        imageUrl: "../images/skyscape.jpg",
        link: "../html/johorSky.html" 
    },
    {
        name: "Laser Battle ",
        price:"RM30.00",
        imageUrl: "../images/laser.jpg",
        link: "../html/johorLaser.html"
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
