let open = document.getElementById("mobile");
hide.onclick = function(){
    open.style.right= "0%";
}
let close = document.getElementById("mobile");
close.onclick= function(){
    close.style.right= "-100%"; 
}
const products = [
    {title:'Headset', price:950, img:'./Img/product-1.png', first:'./images/product-12.jpg', second:'./images/product-11.jpg', third:'./images/hero4.jpg', forth:'./images/hero5.jpg',},


    {title:'Headphone', price:190, img:"./Img/product-3.png", first:'./images/product-12.jpg', second:'./images/product-11.jpg', third:'./images/hero4.jpg', forth:'./images/hero5.jpg',},


    {title:'SmartWatch', price:350, img:'./Img/product-4.png',first:'./images/product-12.jpg', second:'./images/product-11.jpg', third:'./images/hero4.jpg', forth:'./images/hero5.jpg', },


    {title:'Camera', price:750, img:"./Img/product-6.png", first:'./images/product-12.jpg', second:'./images/product-11.jpg', third:'./images/hero4.jpg', forth:'./images/hero5.jpg',},


    {title:'Speaker', price:450, img:"./Img/product-9.png", first:'./images/product-12.jpg', second:'./images/product-11.jpg', third:'./images/hero4.jpg', forth:'./images/hero5.jpg',},


    {title:'Bluetooth', price:350, img:"./Img/product-10.png", first:'./images/product-12.jpg', second:'./images/product-11.jpg', third:'./images/hero4.jpg', forth:'./images/hero5.jpg',},


    {title:'Watch', price:250, img:"./Img/product-11.png",first:'./images/product-12.jpg', second:'./images/product-11.jpg', third:'./images/hero4.jpg', forth:'./images/hero5.jpg', },


    {title:'Soundbox', price:250, img:"./Img/product-12.png",first:'./Img/product-12.png', second:'./Img/product-11.png', third:'./Img/product-2.png', forth:'./Img/product-6.png', },
];

let choosenProducts=products[0];
const productTitle = document.querySelector(".productTitle");
const productPrice = document.querySelector(".productPrice");
const productItem = document.querySelectorAll(".product")



productItem.forEach((item, index) =>{
    item.addEventListener("click", () =>{
        if(item.click){
          choosenProducts=products[index]
            showProd();
            updateDetails();
            updateImage();
        }else{
            hideProd();
        }
    });
});


function showProd(){
    var prod = document.getElementById("prod")
    var hero = document.getElementById("hero")
    var feature = document.getElementById("feature")
    var footer = document.getElementById("footer")
    var payment = document.getElementById("payment")
    payment.style.display = "none"
    footer.style.display = "none"
    hero.style.display = "none"
    feature.style.display = "none"
    prod.style.display = "block"
}
function hideProd(){
    var prod = document.getElementById("prod")
    var hero = document.getElementById("hero")
    var feature = document.getElementById("feature")
    var footer = document.getElementById("footer")
    hero.style.display = "block"
    feature.style.display = "block"
    footer.style.display = "block"
    prod.style.display = "none"
}


function updateDetails(){
    productTitle.textContent=choosenProducts.title
    productPrice.textContent="Price:" + "$" + choosenProducts.price;
    imageDisplay.src=choosenProducts.img
    imgSetOne.src=choosenProducts.first
    imgSetTwo.src=choosenProducts.second
    imgSetThree.src=choosenProducts.third
    imgSetFour.src=choosenProducts.forth
}

function updateImage(){
    imgSetOne.addEventListener("click",()=>{
        if(imgSetOne.click){
            imageDisplay.src=choosenProducts.first
        }else{
            imageDisplay.src=""
        }
    });
    imgSetTwo.addEventListener("click",()=>{
        if(imgSetTwo.click){
            imageDisplay.src=choosenProducts.second
            
        }else{
            imageDisplay.src=""
        }
    });
    imgSetThree.addEventListener("click",()=>{
        if(imgSetThree.click){
            imageDisplay.src=choosenProducts.third
        }else{
            imageDisplay.src=""
        }
    });
    imgSetFour.addEventListener("click",()=>{
        if(imgSetFour.click){
            imageDisplay.src=choosenProducts.forth
        }else{
            imageDisplay.src=""
        }
    });
}


const ProductBtn = document.getElementById("productBtn")
const payment = document.getElementById("payment")
const exit = document.getElementById("exit")
const displayAmount = document.getElementById("displayAmount")
const displayQuantity = document.getElementById("displayQuantity")
const displayItem = document.getElementById("displayItem")
const option = document.querySelectorAll("option")
const change = document.getElementById("change")
const put = document.getElementById("put")

ProductBtn.addEventListener("click", () =>{
    payment.style.display ="block"
})
exit.addEventListener("click", () =>{
    payment.style.display ="none"
})


const pays = [
    {value:"1"},
    {value:"2"},
    {value:"3"},
    {value:"4"},
    {value:"5"},
    {value:"6"},
    {value:"7"},
    {value:"8"},
    {value:"9"},
    {value:"10"},
]

           const quantities = document.getElementById("quantities")
           const pick = document.getElementById("pick")
           const quantityDisplay = document.getElementById("quantityDisplay")
           const quantity = document.querySelectorAll(".quantity")
           
            let choosenQuantity=pays[0]
           quantity.forEach((qty, index) =>{
                   qty.addEventListener("click", () =>{
                      if(qty.click){
                        choosenQuantity=pays[index]
                        updatePrice();
                        updateDetails();
                         quantities.style.display="none"
                         displayAmount.innerText ="Total Price:"+ " " +"$"  + eval(choosenProducts.price * choosenQuantity.value)
                         displayQuantity.innerText= "Total Quantity:" + " " + choosenQuantity.value
                         displayItem.innerText="Product Name:" +" " + choosenProducts.title
                      }else{
                        displayAmount.innerText="Specify quantity"
                      }
                   })
           })

           pick.addEventListener("click", () =>{
            if(pick.click){
                quantities.style.display="block"
            }else{
                quantities.style.display="none"
            }
           })

           
           function updatePrice(){
            quantityDisplay.textContent=choosenQuantity.value
           }


















