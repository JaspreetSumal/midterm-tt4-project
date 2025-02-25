import './list-products.scss';

// Import all 12 images
import product1 from "./assets/images/product1.jpg";
import product2 from "./assets/images/product2.jpg";
import product3 from "./assets/images/product3.jpg";
import product4 from "./assets/images/product4.jpg";
import product5 from "./assets/images/product5.jpg";
import product6 from "./assets/images/product6.jpg";
import product7 from "./assets/images/product7.jpg";
import product8 from "./assets/images/product8.jpg";
import product9 from "./assets/images/product9.jpg";
import product10 from "./assets/images/product10.jpg";
import product11 from "./assets/images/product11.jpg";
import product12 from "./assets/images/product12.jpg";

document.addEventListener("DOMContentLoaded", () => {
    const productsContainer = document.getElementById('products');

    // Define the products array with all 12 products
    const products = [
        {
            name: 'Product 1',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: product1,
            price: 99.99,
            discount: 79.99,
        },
        {
            name: 'Product 2',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: product2,
            price: 129.99,
            discount: 99.99,
        },
        {
            name: 'Product 3',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: product3,
            price: 149.99,
            discount: 119.99,
        },
        {
            name: 'Product 4',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: product4,
            price: 199.99,
            discount: 159.99,
        },
        {
            name: 'Product 5',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: product5,
            price: 89.99,
            discount: 69.99,
        },
        {
            name: 'Product 6',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: product6,
            price: 109.99,
            discount: 89.99,
        },
        {
            name: 'Product 7',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: product7,
            price: 139.99,
            discount: 119.99,
        },
        {
            name: 'Product 8',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: product8,
            price: 169.99,
            discount: 139.99,
        },
        {
            name: 'Product 9',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: product9,
            price: 79.99,
            discount: 59.99,
        },
        {
            name: 'Product 10',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: product10,
            price: 99.99,
            discount: 79.99,
        },
        {
            name: 'Product 11',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: product11,
            price: 119.99,
            discount: 99.99,
        },
        {
            name: 'Product 12',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: product12,
            price: 149.99,
            discount: 129.99,
        },
    ];

    // Dynamically generate product cards
    products.forEach(product => {
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('col-md-4', 'mb-4');

        const card = document.createElement('div');
        card.classList.add('card', 'product-card');

        const img = document.createElement('img');
        img.classList.add('card-img-top');
        img.src = product.image;
        img.alt = product.name;
        img.style.maxWidth = '100%';
        img.style.height = '200px';
        img.style.objectFit = 'cover';

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        const title = document.createElement('h4');
        title.classList.add('card-title');
        title.textContent = product.name;

        const description = document.createElement('p');
        description.classList.add('card-text');
        description.textContent = product.description;

        const price = document.createElement('div');
        price.classList.add('price');
        price.innerHTML = `
            <span class="original-price">$${product.price.toFixed(2)}</span>
            <span class="discounted-price">$${product.discount.toFixed(2)}</span>
        `;

        const addToCart = document.createElement('button');
        addToCart.classList.add('btn', 'btn-primary', 'btn-block');
        addToCart.textContent = "Add to cart";

        cardBody.appendChild(title);
        cardBody.appendChild(description);
        cardBody.appendChild(price);
        cardBody.appendChild(addToCart);
        card.appendChild(img);
        card.appendChild(cardBody);
        cardDiv.appendChild(card);

        productsContainer.appendChild(cardDiv);
    });
});