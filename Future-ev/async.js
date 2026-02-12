// console.log("Placed an order");
// setTimeout(() => {
//     console.log("Food arrived");
// }, 3000);

// console.log("Scrolling Instagram...");

// let data = fetchFromServer();   //imaginary blocking. NOt async
// console.log(data);

// fetchFromServer(() => {
//     console.log("Data received from server");
// });
// console.log("page still responsive");

// let user = {name: "Bob"};
// setTimeout (() => {
//     user = {name: "Alice"};
//     console.log(user.name);

// }, 2000);

// console.log(user.name);


// let orderPromise = new Promise ((resolve, reject) => {
//     console.log("Order placed!!");
//     let delivered = true;

//     setTimeout(() => {
//         if (delivered) {
//             resolve("Pizza delivered");
//         } else {
//             reject("Pizza not delivered");
//         }
//     }, 3000);
// });

// orderPromise.then(message => {
//     console.log("Notification: " + message);
// })
// .catch(error => {
//     console.log("Notification: " + error);
// });

// console.log("scrolling Instagram...");

// fetch("https://jsonplaceholder.typicode.com/posts")
// .then (response => response.json())
// .then (data => {
//     console.log(data);
// });

// let fetchProducts = fetch("https://dummyjson.com/products")
// .then(res => res.json())
// .then(dummyData => {
//     let products = dummyData.products[0];


//     let cheapProducts = products.filter(product => product.price < 50);
//     console.log(cheapProducts);
// });

// let fetchProducts = fetch("https://dummyjson.com/products")
// .then(res => res.json())
// .then(dummyData => {
//     let products = dummyData.products;
//     let container = document.getElementById("product-container");

//     let cards = products.map(product => {
//         return `
//         <div class="feature">
//             <img src="${product.thumbnail}" alt="${product.title}" />
//             <h2>${product.title}</h2>
//             <p>Price: $${product.price}</p>
        
//         </div>`;
//     });
//     container.innerHTML = cards.join("");

// })
// .catch(error => {
//     console.log("Error fetching products:" + error);
// });



// async function loadEvs() {
//     let container = document.getElementById("product-container");
//     container.innerHTML = "<p>Loading products...</p>";

//     try{
//         let response = await fetch("https://dummyjson.com/products");
//          if (!response.ok) {
//             throw new Error("Network response was not ok: " + response.status);
//         }
//         let data = await response.json();
//          if (!data || data.products.length === 0) {
//             container.innerHTML = "<p>No products found.</p>";
//             return;
//         }
        
//         let products = data.products;
//         let cheapProducts = products.filter(product => product.price < 6);

//         if (cheapProducts.length === 0) {
//             container.innerHTML = "<p>No cheap products found.</p>";
//             return;
//         }

//         let cards = cheapProducts.map(product => {
//             return `
//             <div class="feature">
//                 <img src="${product.thumbnail}" alt="${product.title}" />
//                 <h2>${product.title}</h2>
//                 <p>Price: $${product.price}</p>

//             </div>`;
//         });
//         container.innerHTML = cards.join("");

//     } catch (error) {
//         container.innerHTML = "<p>Error loading products:</p>";
//         console.log("Error fetching products: " + error.message);
//     }
// }

// loadEvs();

// try {
//     let user = undefined;
//     console.log(user.name);
// } catch(error) {
//     console.log("Something went wrong: " + error.message);
// }

// async function fetchInvalidEndpoint() {
//     try {
//         let res = await fetch("https://dummyjson.com/invalid-endpoint");
//         console.log(res);
//         if (!res.ok) {
//             throw new Error("Network response was not ok: " + res.status);
//         }
//         let data = await res.json();
//         if (!data || data.products.length === 0) {
//             throw new Error("No products found");
//         }
//     } catch(error) {
//         console.log("Something went wrong: " + error.message);
//     }
// }

// fetchInvalidEndpoint();

async function loadEvs() {
    let status = document.getElementById("loader");
    let container = document.getElementById("product-container");

    status.style.display = "block";
    container.style.display  = "none";

    let response = await fetch("https://dummyjson.com/products");
    let data = await response.json();

    status.style.display = "none";
    container.style.display  = "block";

    container.innerHTML = "Data loaded successfully.";
    
}
loadEvs();