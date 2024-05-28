function change() {  
    let div = document.querySelector(".list");
    let style = window.getComputedStyle(div);
    let left = parseInt(style.getPropertyValue("left"));
    if (left < 0) {
      div.style.left = '0';
    } else {
      div.style.left = '-100%';
    }
  }   
  function addProducts(img,details,pric) {  
    let prod = document.querySelector("#pro-cont");
  let newProduct = document.createElement("div"); 
  newProduct.className = "pros";   
  let Proimg = document.createElement("img");   
  Proimg.src=img;   
  newProduct.appendChild(Proimg);      
  let cart = document.createElement("button"); 
  cart.innerHTML="Add to Cart ";  
  cart.className="cart";   
  let Details = document.createElement("p");  
  let price = document.createElement("p");  
  price.innerText="Rs: "+pric;  
  price.id="price2";
  Details.innerText = details;  
  newProduct.appendChild(cart);
  newProduct.appendChild(Details); 
  newProduct.appendChild(price);    
  prod.appendChild(newProduct); 
  cart.onclick = function() {
    done();   
    var cart = document.querySelector('.cart-items');
    var addItem = document.createElement("div"); 
    addItem.className="added-items";   
    var addImage = document.createElement("div");  
    addImage.className="Product-image";
    let Productimg = document.createElement("img"); 
    Productimg.src=img;    
    addImage.appendChild(Productimg);
    let addMore = document.createElement("div"); 
    addMore.className="Add-More";    

    var decreaseButton = document.createElement("span");
    decreaseButton.innerHTML = "-";
    decreaseButton.classList.add("quantity-control");
    decreaseButton.onclick = function() {
      if (quantity>0){
        var parameter = Quantity();  
        quantityValue.innerHTML = quantity-=1; 
        SubfromCart(parameter); 
         }
    };

    // Create quantity value span
    var quantityValue = document.createElement("span"); 
    var quantity = 1;
    quantityValue.innerHTML = quantity;
    quantityValue.id = "quantityValue";
  
    // Create increase button
    var increaseButton = document.createElement("span");
    increaseButton.innerHTML = "+";
    increaseButton.classList.add("quantity-control");
    increaseButton.onclick = function() { 
      var parameter = Quantity();    
      quantityValue.innerHTML = quantity+=1;
      addToCart(parameter);
    };  
    function Quantity(){      
      return pric; 
  }
    
      addMore.appendChild(decreaseButton); 
      addMore.appendChild(quantityValue);  
      addMore.appendChild(increaseButton);
    
    addImage.appendChild(addMore);   
    addItem.appendChild(addImage); 
    var addDetails= document.createElement("div");  
    addDetails.className="Details";
    let prodetails = document.createElement("p");   
    prodetails.innerText=details;  
    prodetails.className="Pro-details";   
    addDetails.appendChild(prodetails); 
    addItem.appendChild(addDetails); 
    let proprice = document.createElement("p");  
    proprice.innerText="RS: " + pric;    
    proprice.className = "cartitemPrice";    
    var hr = document.createElement("hr");
    addItem.appendChild(proprice);       
    cart.appendChild(addItem);   
    cart.appendChild(hr);  
    addToCart(pric);
  };  
};  
addProducts("https://vibgyorclothing.com.pk/cdn/shop/files/3_bf2b8ca7-9117-40f7-b366-7b879c45b84c.png?v=1708232806&width=1445","Black Oversized Tee",2499); 
addProducts("https://vevere.co.uk/cdn/shop/products/Vever_Peach_Overszed_T-Shirt_Mikey_Speakmancopy_800x.jpg?v=1673576305","Cool boy Pinkish",2199); 
addProducts("https://static.bershka.net/4/photos2/2024/V/0/2/p/2842/443/250/63872334d01a61fd9af0a83c10520b6b-2842443250_1_1_0.jpg?imwidth=850&impolicy=bershka-itxmedium&imformat=chrome","White Oversized Tee",4099);  
addProducts("https://vibgyorclothing.com.pk/cdn/shop/files/3_bf2b8ca7-9117-40f7-b366-7b879c45b84c.png?v=1708232806&width=1445","White Oversized Tee",2099);  
 


function addProducts2(img,details,pric){ 
  let prod = document.querySelector("#pro-cont2");
  let newProduct = document.createElement("div"); 
  newProduct.className = "pros";   
  let Proimg = document.createElement("img");   
  Proimg.src=img;   
  newProduct.appendChild(Proimg);      
  let cart = document.createElement("button"); 
  cart.innerHTML="Add to Cart ";  
  cart.className="cart";   
  let Details = document.createElement("p");  
  let price = document.createElement("p");  
  price.innerText="Rs: "+pric;  
  price.id="price2";
  Details.innerText = details;  
  newProduct.appendChild(cart);
  newProduct.appendChild(Details); 
  newProduct.appendChild(price);    
  prod.appendChild(newProduct); 
  cart.onclick = function() {
    done();     
    var TotalPrice = pric; 
    var cart = document.querySelector('.cart-items');
    var addItem = document.createElement("div"); 
    addItem.className="added-items";   
    var addImage = document.createElement("div");  
    addImage.className="Product-image";
    let Productimg = document.createElement("img"); 
    Productimg.src=img;    
    addImage.appendChild(Productimg);
    let addMore = document.createElement("div"); 
    addMore.className="Add-More";    

    var decreaseButton = document.createElement("span");
    decreaseButton.innerHTML = "-";
    decreaseButton.classList.add("quantity-control");
    decreaseButton.onclick = function() { 
      if (quantity>0){
     var parameter = Quantity();  
     quantityValue.innerHTML = quantity-=1; 
     SubfromCart(parameter); 
      }
    };
    // Create quantity value span
    var quantityValue = document.createElement("span"); 
    var quantity = 1;
    quantityValue.innerHTML = quantity;
    quantityValue.id = "quantityValue";
  
    // Create increase button
    var increaseButton = document.createElement("span");
    increaseButton.innerHTML = "+";
    increaseButton.classList.add("quantity-control");
    increaseButton.onclick = function() { 
      var parameter = Quantity();    
      quantityValue.innerHTML = quantity+=1;
      addToCart(parameter);
    };  

    function Quantity(){      
        return pric; 
    }
      addMore.appendChild(decreaseButton); 
      addMore.appendChild(quantityValue);  
      addMore.appendChild(increaseButton);
    addImage.appendChild(addMore);   
    addItem.appendChild(addImage); 
    var addDetails= document.createElement("div");  
    addDetails.className="Details";
    let prodetails = document.createElement("p");   
    prodetails.innerText=details;  
    prodetails.className="Pro-details";   
    addDetails.appendChild(prodetails); 
    addItem.appendChild(addDetails); 
    let proprice = document.createElement("p");  
    proprice.innerText="RS: " + pric;    
    proprice.className = "cartitemPrice";    
    var hr = document.createElement("hr");
    addItem.appendChild(proprice);       
    cart.appendChild(addItem);   
    cart.appendChild(hr);  
    addToCart(TotalPrice);
  };  
} 

function addToCart(price) { 
  // Update the total price
  const checkoutPriceElement = document.getElementById("checkoutPrice");
  const currentTotal = parseFloat(checkoutPriceElement.textContent.replace("Total: $", ""));
  const newTotal = currentTotal+price;
  checkoutPriceElement.textContent = "Total: $" + newTotal;
}
  function SubfromCart(price){ 
    const checkoutPriceElement = document.getElementById("checkoutPrice");
    const currentTotal = parseFloat(checkoutPriceElement.textContent.replace("Total: $", "")); 
    
    const newTotal = currentTotal-price;  
    checkoutPriceElement.textContent = "Total: $" + newTotal; 
  }
addProducts2("https://i.pinimg.com/originals/1a/f5/f7/1af5f7952a9ddb583466ad5ac635a357.png","MODERN JEANS",3499); 
addProducts2("https://freepngimg.com/thumb/categories/599.png","BLACK JEANS",3699);  
addProducts2("https://png.pngtree.com/png-clipart/20240204/original/pngtree-the-teenage-girl-wearing-black-jeans-and-photo-png-image_14224049.png","RIPPED JEANS",3499);   
addProducts2("https://pngimg.com/d/jeans_PNG5777.png","BLUE STYLISH JEANS",3299); 
 
const mediaQuery = window.matchMedia('(max-width: 870px)');  
function done(){
  var cart = document.querySelector('.cart-items');
  var currentLeft = cart.style.left || '100vw'; 
  var body = document.querySelector('body'); 
  if (mediaQuery.matches){  
    cart.style.left = currentLeft === '100vw' ? '32vw' : '100vw';
  } else {
  cart.style.left = currentLeft === '100vw' ? '70vw' : '100vw'; 
  body.style.overflow = currentLeft === '100vw' ? 'hidden' : 'auto';   
}
}
