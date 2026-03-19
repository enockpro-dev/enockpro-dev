// Simple search functionality
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search');
    const products = document.querySelectorAll('.card');

    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();

        products.forEach(product => {
            const title = product.querySelector('h3').textContent.toLowerCase();
            const price = product.querySelector('p').textContent.toLowerCase();

            if (title.includes(searchTerm) || price.includes(searchTerm)) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    });
});