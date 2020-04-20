var currentIndex = 0,
  productName = document.getElementById("productName"),
  productPrice = document.getElementById("productPrice"),
  productCategory = document.getElementById("productCategory"),
  productDesc = document.getElementById("productDesc"),
  addBtn = document.getElementById("addBtn"),
  productList;

if (localStorage.getItem("myProduct") == null) {
  productList = [];
} else {
  productList = JSON.parse(localStorage.getItem("myProduct"));
  disliayproduct();
}

function addProduct() {
  if (addBtn.innerHTML == "add") {
    var product;
    product = {
      name: productName.value,
      price: productPrice.value,
      category: productCategory.value,
      desc: productDesc.value,
    };
    productList.push(product);
    localStorage.setItem("myProduct", JSON.stringify(productList));
    disliayproduct();
    claerForm();
    addBtn.innerHTML = "add";
  } else {
    var product = {
      name: productName.value,
      price: productPrice.value,
      category: productCategory.value,
      desc: productDesc.value,
    };
    productList[currentIndex] = product;
    localStorage.setItem("myProduct", JSON.stringify(productList));
    disliayproduct();
    claerForm();
    addBtn.innerHTML = "add";
  }
}
function disliayproduct() {
  var box = "";
  for (var i = 0; i < productList.length; i++) {
    box +=
      `<tr><td>` +
      i +
      `</td>
      <td>` +
      productList[i].name +
      `</td>
    <td> ` +
      productList[i].price +
      `</td>
    <td> ` +
      productList[i].category +
      `</td>
    <td> ` +
      productList[i].desc +
      `</td>
      <td><button onclick="upDateProduct(` +
      i +
      `)" class="btn btn-warning">Update</button></td>
      <td><button onclick="deleteProduct(` +
      i +
      `)" class="btn btn-danger">Delete</button></td>
    </tr>`;
  }
  document.getElementById("tableBody").innerHTML = box;
}

function searchProudct(term) {
  var box = "";
  for (i = 0; i < productList.length; i++) {
    if (productList[i].name.includes(term.trim()) == true) {
      box +=
        `<tr><td>` +
        i +
        `</td><td>` +
        productList[i].name +
        `</td>
    <td> ` +
        productList[i].price +
        `</td>
    <td> ` +
        productList[i].category +
        `</td>
    <td> ` +
        productList[i].desc +
        `</td>
        <td><button onclick="upDateProduct(` +
        i +
        `)" class="btn btn-warning">Update</button></td>
        <td><button onclick="deleteProduct(` +
        i +
        `)" class="btn btn-danger">Delete</button></td></tr>`;
    }
  }
  document.getElementById("tableBody").innerHTML = box;
}

function deleteProduct(index) {
  productList.splice(index, 1);
  localStorage.setItem("myProduct", JSON.stringify(productList));
  disliayproduct();
}

function claerForm() {
  var product;
  product = {
    name: (productName.value = ""),
    price: (productPrice.value = ""),
    category: (productCategory.value = ""),
    desc: (productDesc.value = ""),
  };
}

function upDateProduct(index) {
  currentIndex = index;
  productName.value = productList[index].name;
  productPrice.value = productList[index].price;
  productCategory.value = productList[index].category;
  productDesc.value = productList[index].desc;
  addBtn.innerHTML = "Update";
}
