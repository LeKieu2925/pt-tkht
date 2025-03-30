const productList = document.getElementById("product-list");

const products = [
    { id: "SP001", name: "Son Đỏ Ruby", price: "300,000 VND" },
    { id: "SP002", name: "Kem Dưỡng Ẩm", price: "450,000 VND" },
    { id: "SP003", name: "Nước Hoa Hồng", price: "250,000 VND" }
];

function displayProducts() {
    products.forEach(product => {
        const row = document.createElement("tr");
        row.innerHTML = `<td>${product.id}</td><td>${product.name}</td><td>${product.price}</td>`;
        productList.appendChild(row);
    });
}

displayProducts();
