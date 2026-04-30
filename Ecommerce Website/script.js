let cart = [];
let total = 0;

// Add to cart function
function addToCart(name, price) {
    cart.push({ name, price });

    total += price;

    displayCart();
}

// Display cart items
function displayCart() {
    let cartList = document.getElementById("cart-items");
    let totalDisplay = document.getElementById("total");

    cartList.innerHTML = "";

    cart.forEach((item, index) => {
        let li = document.createElement("li");
        li.textContent = item.name + " - ₹" + item.price;
        cartList.appendChild(li);
    });

    totalDisplay.textContent = total;
}

// Checkout function
function checkout() {
    if (cart.length === 0) {
        alert("Cart is empty!");
        return;
    }

    alert("Order placed successfully! 🎉 Total: ₹" + total);

    // Reset cart
    cart = [];
    total = 0;
    displayCart();
}