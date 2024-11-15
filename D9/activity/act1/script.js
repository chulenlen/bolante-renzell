// Function expression to fetch and display product data
const displayProducts = async () => {
  try {
    // Fetch product data from the API
    const response = await fetch('https://fakestoreapi.com/products');

    // Check if the response is not successful
    if (!response.ok) {
      throw new Error('Failed to fetch data.');
    }

    // Extract JSON data from the response
    const data = await response.json();

    // Select the container element where the products will be displayed
    const container = document.getElementById('product-container');
    let html = '';

    data.forEach(product => {
      // Generate HTML markup for each product
      html += `
      <div class="bg-white rounded-lg shadow-md p-5 transform transition-transform duration-200 hover:scale-105">
        <img src="${product.image}" alt="${
        product.title
      }" class="w-full h-64 object-contain mb-4 rounded-md">
        <h3 class="text-lg font-semibold text-gray-800 mb-2">${
          product.title
        }</h3>
        <p class="text-sm text-gray-600 mb-4">${product.description.slice(
          0,
          100
        )}...</p>
        <p class="text-lg font-bold text-blue-600">$${product.price}</p>
      </div>`;
    });

    // Insert the generated HTML into the container
    container.innerHTML = html;
  } catch (error) {
    console.error('Error:', error);
  }
};

// Call the function to display products
displayProducts();
