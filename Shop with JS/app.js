let product = {
    name: document.getElementById("name"),
    price: document.getElementById("price"),
    category: document.getElementById("category"),
    description: document.getElementById("des")
};
updateButton = document.querySelector('#update-button');
tableBody = document.getElementById('content');
//console.log(product.name, product.price, product.category, product.description);
let productContainer = [];
if (localStorage.getItem('myProduct') != null) {
    productContainer = JSON.parse(localStorage.getItem('myProduct'));
    display();
}
function pro() {
    var prod = {
        name: product.name.value,
        price: product.price.value,
        category: product.category.value,
        description: product.description.value
    };
    productContainer.push(prod);
    //console.log(productContainer);
    localStorage.setItem('myProduct', JSON.stringify(productContainer));
    clear();
    display(productContainer);
};
function clear() {
    product.name.value = '';
    product.price.value = '';
    product.category.value = '';
    product.description.value = '';
};
function display(list) {
    temp = '';
    for (var i = 0; i < list.length; i++) {
        temp += `<tr class="text-center">
        <td>${i}</td>
        <td>${list[i].name}</td>
        <td>${list[i].price}</td>
        <td>${list[i].category}</td>
        <td>${list[i].description}</td> 
        <td> <button onclick = "updateProduct(${i})" class="btn btn-sm btn-warning">Update</button></td>
        <td> <button onclick = "deleteProduct(${i})" class="btn btn-sm btn-danger ml-2">Delete</button></td>
        </tr>`;

    }
    tableBody.innerHTML = temp;
}

//search method
function searchProduct(term) {
    var searchResult = [];
    for (var i = 0; i < productContainer.length; i++) {
        if (productContainer[i].name.toLowerCase().includes(term.toLowerCase())) {
            searchResult.push(productContainer[i]);
        }
    }
    display(searchResult);
}

function deleteProduct(index) {
    productContainer.splice(index, 1);
    localStorage.setItem('myProduct', JSON.stringify(productContainer));
    display(productContainer);
}


function updateProduct(item) {
    product.name.value = productContainer[item].name;
    product.price.value = productContainer[item].price;
    product.category.value = productContainer[item].category;
    product.description.value = productContainer[item].description;

    updateButton.classlist.replace('d-none', 'd-block');
}
