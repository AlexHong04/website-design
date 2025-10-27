export const attractions = 
[
    {
        name: "Cable Car",
        price: "RM40.00",
        imageUrl: "../images/cable car.jpg",
        link: "../html/langkawi car.html" 
    },
    {
        name: "Underwater World",
        price:"RM42.00",
        imageUrl: "../images/underwater.jpg",
        link: "../html/langkawi water.html" 
        
    },
    {
        name: "Wildlife Park",
        price:"RM45.00",
        imageUrl: "../images/wildlife park.jpg",
        link: "../html/langkawi wild.html" 
    },
    {
        name: "MAHA Tower",
        price:"RM35.00",
        imageUrl: "../images/maha.jpg",
        link: "../html/langkawi maha.html"
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

