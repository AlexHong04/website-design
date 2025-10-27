import { attractions, addToCart } from './Langkawi.js';

const container = document.querySelector('.productsContainer');

attractions.forEach(attraction => {
    const attractionDiv = document.createElement('div');
    attractionDiv.className = 'productImage';

    const attractionLink = document.createElement('a');
    attractionLink.href = attraction.link;

    const attractionImg = document.createElement('img');
    attractionImg.src = attraction.imageUrl;

    const attractionDetails = document.createElement('span');
    attractionDetails.className = 'productDetails';
    attractionDetails.innerHTML = attraction.name + '<br>' + attraction.price;

    /*Add to cart按鈕*/
    const addToCartButton = document.createElement('button');
    addToCartButton.className = 'addToCart';
    addToCartButton.innerText = 'ADD TO CART';
    addToCartButton.addEventListener('click', () => addToCart(addToCartButton));
    
    attractionLink.appendChild(attractionImg);
    attractionLink.appendChild(attractionDetails);
    attractionDiv.appendChild(attractionLink);
    attractionDiv.appendChild(addToCartButton);
    container.appendChild(attractionDiv);
});
