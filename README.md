<fishermans-haul-website.html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fisherman's Haul - Gourmet Seafood Takeaway</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');
        
        :root {
            --primary-color: #00648f;
            --secondary-color: #00a8e8;
            --accent-color: #f6a604;
            --background-color: #f0f8ff;
            --text-color: #333;
        }
        
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }
        
        body {
            font-family: 'Poppins', sans-serif;
            background-color: var(--background-color);
            color: var(--text-color);
            line-height: 1.6;
        }
        
        header {
            background-color: var(--primary-color);
            color: white;
            text-align: center;
            padding: 1em;
            position: relative;
            overflow: hidden;
        }
        
        header::before {
            content: "";
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: url('/api/placeholder/400/320') no-repeat center center;
            background-size: cover;
            opacity: 0.1;
            animation: wave 10s infinite linear;
        }
        
        @keyframes wave {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        
        h1 {
            font-size: 2.5em;
            margin-bottom: 0.5em;
            position: relative;
            z-index: 1;
        }
        
        nav {
            background-color: var(--secondary-color);
            padding: 0.5em;
            display: flex;
            justify-content: center;
            position: sticky;
            top: 0;
            z-index: 100;
        }
        
        nav button {
            background-color: transparent;
            border: none;
            color: white;
            padding: 10px 20px;
            text-align: center;
            text-decoration: none;
            box-shadow: 0 10px 6px rgba(0, 0, 0, 0.2);
            display: inline-block;
            font-size: 16px;
            margin: 4px 2px;
            cursor: pointer;
            background-color: rgba(50, 50, 50, 0.2);
            transition: background-color 0.3s ease;
            border-radius: 5px;
        }
        
        nav button:hover {
            background-color: rgba(255, 255, 255, 0.2);
            border-radius: 5px;
        }

        .order-container { /* New container for centering */
            display: flex;                          /* Use flexbox */
            justify-content: center;                /* Center content horizontally */
            align-items: center;                    /* Center items vertically */
            margin-top: 1em;                       /* Space above the container */
            padding: 1em;                          /* Add padding around the container */
            border: 1px solid var(--accent-color); /* Border around the container */
            border-radius: 10px;                   /* Rounded corners for the container */
            background-color: rgba(255, 255, 255, 0.8); /* Background for better visibility */
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Add shadow for depth */
        }

        #order-now {
            background-color: var(--accent-color);
            color: white;
            border: none;
            padding: 12px 24px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            font-size: 18px;
            cursor: pointer;
            transition: background-color 0.3s ease, transform 0.3s ease;
        }

        #order-now:hover {
            background-color: #f3a600; /* Slightly lighter shade for hover */
            transform: translateY(-2px); /* Slight lift effect */
        }

        #order-now:active {
            transform: translateY(0); /* Reset on click */
        }
        
        .page {
            display: none;
            padding: 20px;
            max-width: 1200px;
            margin: 0 auto;
            opacity: 0;
            transition: opacity 0.5s ease;
        }
        
        .active {
            display: block;
            opacity: 1;
        }

        .menu-item {
            border: 1px solid #ddd;
            padding: 20px;
            margin: 20px 0;
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .menu-item img {
            width: 115px;
            height: 115px;
            object-fit: cover;
            border-radius: 50%;
            margin-right: 20px;
        }

        .menu-item-details {
            flex-grow: 1;
        }

        .add-to-cart {
            background-color: var(--accent-color);
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }

        .add-to-cart:hover {
            background-color: #d48f00;
        }

        #cart {
            position: fixed;
            top: 15px;
            right: 15px;
            background-color: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 40px 20px rgba(0, 0, 0, 0.3);
            max-width: 300px;
            z-index: 1000;
        }
        
        #cart h3 {
            margin-bottom: 10px;
        }
        
        #cart-items {
            margin-bottom: 10px;
        }
        
        #cart-total {
            font-weight: bold;
        }
        
        #checkout {
            background-color: var(--accent-color);
            color: white;
            border: none;
            padding: 10px 15px;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s ease;
            display: block;
            width: 100%;
            margin-top: 10px;
        }
        
        #checkout:hover {
            background-color: #d48f00;
        }
        
        /* New styles for checkout page */
        #checkout-form {
            max-width: 500px;
            margin: 0 auto;
            background-color: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        
        #checkout-form h2 {
            margin-bottom: 20px;
        }
        
        #checkout-form label {
            display: block;
            margin-bottom: 5px;
        }
        
        #checkout-form input {
            width: 100%;
            padding: 8px;
            margin-bottom: 15px;
            border: 1px solid #ddd;
            border-radius: 4px;
        }
        
        #checkout-form button {
            background-color: var(--accent-color);
            color: white;
            border: none;
            padding: 10px 15px;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s ease;
            display: block;
            width: 100%;
        }
        
        #checkout-form button:hover {
            background-color: #d48f00;
        }

        #intro img { 
            height: 600px;
            border-radius: 10px;
            text-align: center;
        }

        #intro h2 {
            font-size: 2em;
            text-align: center;
        }
        
        #contact h3 {
            font-size: 1em;
            margin-left: 340px;
        }

        #contact h2 {
            font-size: 1.7em;
            margin-left: 340px;
        }

        /* Styles for featured seafood */
        .featured-seafood {
            display: grid; 
            grid-template-columns: repeat(2, 1fr); /* Two items per row */
            gap: 20px; /* Space between items */
            margin-top: 20px;
        }

        .seafood-item {
            background-color: white;        /* background for contrast */
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            padding: 15px;
            text-align: center;             /* center align text */
        }

        .seafood-item img {
            width: 100%;                   /* responsive image */
            height: auto;                 /* maintain aspect ratio */
            border-radius: 5px;
            margin-bottom: 10px;          /* space below image */
        }
    </style>
</head>
<body>
    <header>
        <h1>Fisherman's Haul</h1>
        <p>Gourmet Seafood Takeaway</p>
    </header>
    <nav>
        <button onclick="showPage('intro')">Home</button>
        <button onclick="showPage('menu')">Menu</button>
        <button onclick="showPage('contact')">Contact</button>
    </nav>
    
    <div id="intro" class="page active">
        <h2>Welcome to Fisherman's Haul</h2>
        <img src="seafood_bg.jpg" alt="Seafood Background" style="width: 100%; max-height: 400px; object-fit: cover;">
        <div class="order-container"> <!-- New container for centering -->
            <button id="order-now" onclick="showPage('menu')">Order Now</button>  
        </div>
        <p>Dive into a sea of flavors with our gourmet seafood takeaway. We bring the ocean's bounty straight to your plate, offering the freshest catch prepared with culinary expertise.</p>
        <p>From classic fish and chips to exquisite seafood platters, every dish is crafted to perfection. Experience the taste of the sea, reimagined for the modern palate.</p>
        
        <h2>Featured Seafood Selections</h2>
        <div class="featured-seafood">
            <div class="seafood-item">
                <img src="gallery4.jpg" alt="Classic Fish and Chips" />
                <h3>Classic Fish and Chips</h3>
                <p>Golden-fried Atlantic cod served with hand-cut, twice-cooked chips.</p>
            </div>
            <div class="seafood-item">
                <img src="gallery3.jpg" alt="Fresh Salmon" />
                <h3>Fresh Salmon</h3>
                <p>Grilled salmon fillet with a lemon-dill sauce.</p>
            </div>
            <div class="seafood-item">
                <img src="gourmet-seafood-platter.jpg" alt="Gourmet Seafood Platter" />
                <h3>Gourmet Seafood Platter</h3>
                <p>A delightful selection of grilled seafood with choice of dipping sauces.</p>
            </div>
            <div class="seafood-item">
                <img src="gallery5.jpg" alt="Barramundi" />
                <h3>Barramundi</h3>
                <p>Fresh raw barramundi from the ocean.</p>
            </div>
        </div>
    </div>

    <div id="menu" class="page">
        <h1>Our Gourmet Menu</h1>
        <h2>Meals</h2>
        <div class="menu-item">
            <img src="gallery4.jpg" alt="Classic Fish and Chips">
            <div class="menu-item-details">
                <h3>Classic Fish and Chips</h3>
                <p>Golden-fried Atlantic cod served with hand-cut, twice-cooked chips and homemade tartar sauce.</p>
                <p>Price: $14.99</p>
            </div>
            <button class="add-to-cart" onclick="addToCart('Classic Fish and Chips', 14.99)">Add to Cart</button>
        </div>
        <div class="menu-item">
            <img src="gallery3.jpg" alt="Fresh Salmon">
            <div class="menu-item-details">
                <h3>Fresh Salmon</h3>
                <p>Fresh salmon fillet, grilled to perfection and served with a lemon-dill sauce or cooked with chips.</p>
                <p>Price: $11.99</p>
            </div>
            <button class="add-to-cart" onclick="addToCart('Fresh Salmon', 11.99)">Add to Cart</button>
        </div>
        <div class="menu-item">
            <img src="gourmet-seafood-platter.jpg" alt="Gourmet Seafood Platter">
            <div class="menu-item-details">
                <h3>Gourmet Seafood Platter</h3>
                <p>A assortment of grilled seafood and calamari served with a sauces of choose.</p>
                <p>Price: $25.99</p>
            </div>
            <button class="add-to-cart" onclick="addToCart('Gourmet Seafood Platter', 25.99)">Add to Cart</button>
        </div>
        <div class="menu-item">
            <img src="gallery5.jpg" alt="Barramundi">
            <div class="menu-item-details">
                <h3>Barramundi</h3>
                <p>Fresh raw Barramundi from the ocean.</p>
                <p>Price: $20.00</p>
            </div>
            <button class="add-to-cart" onclick="addToCart('Barramundi', 20.00)">Add to Cart</button>
        </div>
        <div class="menu-item">
            <img src="gallery2.jpg" alt="Fish Burger">
            <div class="menu-item-details">
                <h3>Fish Burger</h3>
                <p>Grilled fish burger with tarter sauces.</p>
                <p>Price: $15.99</p>
            </div>
            <button class="add-to-cart" onclick="addToCart('Fish Burger', 15.99)">Add to Cart</button>
        </div>
        <div class="menu-item">
            <img src="gallery10.jpg" alt="Beef Burger">
            <div class="menu-item-details">
                <h3>Beef Burger</h3>
                <p>Tasty Beef burger with Calamari.</p>
                <p>Price: $13.99</p>
            </div>
            <button class="add-to-cart" onclick="addToCart('Beef Burger', 13.99)">Add to Cart</button>
        </div>
        <div class="menu-item">
            <img src="gallery13.jpg" alt="Lobster">
            <div class="menu-item-details">
                <h3>Lobster</h3>
                <p>Tasty lobster with lemon.</p>
                <p>Price: $53.99</p>
            </div>
            <button class="add-to-cart" onclick="addToCart('Lobster', 53.99)">Add to Cart</button>
        </div>

        <h2>Drinks</h2>
        <div class="menu-item">
            <img src="gallery6.jpg" alt="Coca Cola 500ml">
            <div class="menu-item-details">
                <h3>Coca Cola 500ml</h3>
                <p>A Refreshing Drink</p>
                <p>Price: $5.50</p>
            </div>
            <button class="add-to-cart" onclick="addToCart('Coca Cola', 5.50)">Add to Cart</button>
        </div>
        <div class="menu-item">
            <img src="gallery7.jpg" alt="Kirks Creaming Soda 375ml">
            <div class="menu-item-details">
                <h3>Kirks Creaming Soda 375ml</h3>
                <p>A Refreshing Drink</p>
                <p>Price: $2.70</p>
            </div>
            <button class="add-to-cart" onclick="addToCart('Kirks Creaming Soda', 2.70)">Add to Cart</button>
        </div>
        <div class="menu-item">
            <img src="gallery8.jpg" alt="Kirks Lemonade 375ml">
            <div class="menu-item-details">
                <h3>Kirks Lemonade 375ml</h3>
                <p>A Refreshing Drink</p>
                <p>Price: $2.70</p>
            </div>
            <button class="add-to-cart" onclick="addToCart('Kirks Lemonade', 2.70)">Add to Cart</button>
        </div>
        <div class="menu-item">
            <img src="gallery11.jpg" alt="Fanta 600ml">
            <div class="menu-item-details">
                <h3>Fanta 600ml</h3>
                <p>A Refreshing Drink</p>
                <p>Price: $5.90</p>
            </div>
            <button class="add-to-cart" onclick="addToCart('Fanta', 5.90)">Add to Cart</button>
        </div>
        <div class="menu-item">
            <img src="gallery12.jpg" alt="Pepsi 375ml">
            <div class="menu-item-details">
                <h3>Pepsi 375ml</h3>
                <p>A Refreshing Drink</p>
                <p>Price: $2.70</p>
            </div>
            <button class="add-to-cart" onclick="addToCart('Pepsi', 2.70)">Add to Cart</button>
        </div>

        <h2>Extras</h2>
        <div class="menu-item">
            <img src="gallery9.jpg" alt="Whole Lemon">
            <div class="menu-item-details">
                <h3>Whole Lemon</h3>
                <p>A Refreshing Drink</p>
                <p>Price: $0.70</p>
            </div>
            <button class="add-to-cart" onclick="addToCart('Whole Lemon', 0.70)">Add to Cart</button>
        </div>
        <div class="menu-item">
            <img src="gallery14.jpg" alt="Salt and Pepper">
            <div class="menu-item-details">
                <h3>Salt and Pepper</h3>
                <p>It's free</p>
                <p>Price: $0.00</p>
            </div>
            <button class="add-to-cart" onclick="addToCart('Salt and Pepper', 0.00)">Add to Cart</button>
        </div>
    
    </div>
    
    <div id="contact" class="page">
        <h2>Contact Us</h2>
        <h3>Ready to embark on a culinary journey? Place your order now!</h3>
        <h3>Call us: (07) 5482 6644</h3>
        <h3>Opening Hours:</h3>
        <h3> Monday - Friday: 10:00 AM - 7:00 PM</h3>
        <h3>Saturday - Sunday: 12:00 PM - 10:00 PM</h3>
        <h3>Location: 18 Chapple St, Gympie QLD 4570</h3>
    </div>
    
    <div id="checkout-page" class="page">
        <form id="checkout-form">
            <h2>Checkout</h2>
            <div id="order-summary"></div>
            <label for="name">Full Name:</label>
            <input type="text" id="name" required>
            <label for="email">Email:</label>
            <input type="email" id="email" required>
            <label for="phone">Phone:</label>
            <input type="tel" id="phone" required>
            <button type="submit">Place Order</button>
        </form>
    </div>

    <div id="cart">
        <h3>Your Cart</h3>
        <div id="cart-items"></div>
        <p id="cart-total">Total: $0.00</p>
        <button id="checkout" onclick="goToCheckout()">Checkout</button>
    </div>

    <script>
        let cart = [];

        function showPage(pageId) {
            const pages = document.getElementsByClassName('page');
            for (let page of pages) {
                page.classList.remove('active');
            }
            document.getElementById(pageId).classList.add('active');
        }

        function addToCart(item, price) {
            cart.push({item, price});
            updateCart();
        }

        function updateCart() {
            const cartItems = document.getElementById('cart-items');
            const cartTotal = document.getElementById('cart-total');
            
            cartItems.innerHTML = '';
            let total = 0;

            cart.forEach((item, index) => {
                const itemElement = document.createElement('p');
                itemElement.textContent = `${item.item} - $${item.price.toFixed(2)}`;
                
                const removeButton = document.createElement('button');
                removeButton.textContent = 'Remove';
                removeButton.onclick = () => removeFromCart(index);
                
                itemElement.appendChild(removeButton);
                cartItems.appendChild(itemElement);
                
                total += item.price;
            });

            cartTotal.textContent = `Total: $${total.toFixed(2)}`;
        }

        function removeFromCart(index) {
            cart.splice(index, 1);
            updateCart();
        }

        function goToCheckout() {
            showPage('checkout-page');
            updateOrderSummary();
        }

        function updateOrderSummary() {
            const orderSummary = document.getElementById('order-summary');
            orderSummary.innerHTML = '<h3>Order Summary</h3>';
            let total = 0;

            cart.forEach(item => {
                const itemElement = document.createElement('p');
                itemElement.textContent = `${item.item} - $${item.price.toFixed(2)}`;
                orderSummary.appendChild(itemElement);
                total += item.price;
            });

            const totalElement = document.createElement('p');
            totalElement.textContent = `Total: $${total.toFixed(2)}`;
            totalElement.style.fontWeight = 'bold';
            orderSummary.appendChild(totalElement);
        }

        document.getElementById('checkout-form').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your order! It will be on the stove soon.');
            cart = [];
            updateCart();
            showPage('intro');
        });
    </script>
</body>
</html>
