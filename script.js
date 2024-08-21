document.addEventListener("DOMContentLoaded", function() {
    // Preloader
    window.addEventListener('load', function() {
        document.getElementById('preloader').style.display = 'none';
    });

    // Smooth scroll for navigation
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Order form interaction
    const orderButtons = document.querySelectorAll('.order-button');
    const orderForm = document.getElementById('order-form');
    const orderSummary = document.getElementById('order-summary');

    orderButtons.forEach(button => {
        button.addEventListener('click', function() {
            const product = this.getAttribute('data-product');
            document.getElementById('product').value = product;
            orderForm.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Order form submission
    orderForm.addEventListener('submit', function(e) {
        e.preventDefault();

        document.getElementById('summary-name').textContent = document.getElementById('name').value;
        document.getElementById('summary-email').textContent = document.getElementById('email').value;
        document.getElementById('summary-product').textContent = document.getElementById('product').value;
        document.getElementById('summary-quantity').textContent = document.getElementById('quantity').value;
        document.getElementById('summary-address').textContent = document.getElementById('address').value;

        orderSummary.classList.remove('hidden');
        orderSummary.scrollIntoView({ behavior: 'smooth' });
    });

    // Confirm order
    document.getElementById('confirm-order').addEventListener('click', function() {
        alert('Your order has been confirmed!');
        orderForm.reset();
        orderSummary.classList.add('hidden');
    });
});
