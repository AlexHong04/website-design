export const attractions = 
[
    {
        name: "Zoo Melaka",
        price: "RM45.00",
        imageUrl: "../images/zoo.jpg",
        link: "../html/melaka zoo.html" 
    },
    {
        name: "Melaka Upside Down House",
        price:"RM18.00",
        imageUrl: "../images/house.jpg",
        link: "../html/melaka house.html" 
        
    },
    {
        name: "A-Famosa",
        price:"RM45.00",
        imageUrl: "../images/famosa.jpg",
        link: "../html/melaka famosa.html" 
    },
    {
        name: "Illusion 3D Art Musuem",
        price:"RM35.00",
        imageUrl: "../images/3d art musuem.jpg",
        link: "../html/melaka 3dart.html"
    },
    {
        name: "Bayao Lagoon Water Park",
        price: "RM23.00",
        imageUrl:"../images/waterpark.jpg",
        link: "../html/melaka waterpark.html"
    }




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
