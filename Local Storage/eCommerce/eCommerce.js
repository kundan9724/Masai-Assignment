
var products = [];

      function addProduct() {
        var container = document.getElementById("products");
        var inp = document.getElementById("name").value;
        var price = document.getElementById("price").value;
        var image = document.getElementById("image").value;
        if (inp == !Text || price == NaN || price == "") {
          alert("Please Fill Correctly");
          return;
        }
        var product = {
          name: inp,
          price: price,
          image:image,
        };
        products.push(product);

        localStorage.setItem("prod", JSON.stringify(products));
        document.getElementById("name").value = "";
        document.getElementById("price").value = "";
        document.getElementById("image").value = "";
        displayProducts(products, container);
      }
      function displayProducts(products, container) {
        container.innerHTML = "";
        for (var i = 0; i < products.length; i++) {
          var heading = document.createElement("div");
          heading.setAttribute("class", "product");
          var prodName = document.createElement("div");
          prodName.setAttribute("class", "name");

          var h1 = document.createElement("h1");
          h1.innerHTML = products[i].name;
          var prodPrice = document.createElement("div");
          var h2 = document.createElement("h2");
          h2.innerHTML = "₹" + products[i].price;
          var img = document.createElement("img");
          img.src = products[i].image;
            

          prodName.append(h1);

          heading.append(prodName);

          heading.append(img);
          heading.append(prodPrice);
          prodPrice.append(h2);
          container.append(heading);
          console.log(img);
        }
      }

      function productLoad() {
        var data = JSON.parse(localStorage.getItem("prod"));
        console.log(data.length);
        var container = document.getElementById("products");
        if (data) {
          products = data;
          displayProducts(products, container);
          //console.log(products.length);
        }
      }

      window.addEventListener("load", function () {
        var clearBtn = document.getElementById("remove");
        clearBtn.addEventListener("click", clear);
        productLoad();
      });

      function clear() {
        products = [];
        localStorage.setItem("prod", JSON.stringify(products));
        var container = document.getElementById("products");
        container.innerHTML = "";
      }