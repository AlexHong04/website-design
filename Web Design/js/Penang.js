export const attractions = 
[
    {
        name: "Illusion 3D Art Musuem",
        price: "RM18.00",
        imageUrl: "../images/penang 3d art.jpg",
        link: "../html/penang 3dart.html" 
    },
    {
        name: "Butterfly Farm",
        price:"RM55.00",
        imageUrl: "../images/penang butterfly.jpg.crdownload",
        link: "../html/penang butterfly.html" 
        
    },
    {
        name: "Dark Mansion",
        price:"RM30.00",
        imageUrl: "../images/dark mansion.jpg",
        link: "../html/penang mansion.html" 
    },
    {
        name: "Bird Park",
        price:"RM45.00",
        imageUrl: "../images/penangbirdpark.jpg",
        link: "../html/penang bird.html"
    },
    {
        name: "Kid CEO Playland",
        price: "RM40.00",
        imageUrl:"../images/penangkidplayland.jpg",
        link: "../html/penang ceo.html"
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
