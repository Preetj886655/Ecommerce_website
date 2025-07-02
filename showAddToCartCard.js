import products from './src/api/product.json'
import { getcardProductfromLS } from './getProductLS';
import { fetchQantityfromLS } from './fetchQuantityfromLS';
import { removeProdfromCart } from './removeProdfromCart';
import { addCardButton } from './addCardButton';
import { updateCartProductTotal } from './updateCartProductTotal';

let cartProducts=getcardProductfromLS();
// console.log(cartProducts)
let filterProducts=products.filter((currProd)=>{
    // console.log(currProd.id);
    return cartProducts.some((currelem)=>(currelem.id==currProd.id))

})
// console.log(filterProducts)


const cartElement=document.querySelector('#productCartContainer')
const templateContainer=document.querySelector('#productCartTemplate')
const showCartProduct=()=>{

    filterProducts.forEach((currProd)=>{
       const { category,id,image,name,stock,price}=currProd;
       let productClone=document.importNode(templateContainer.content,true);
    

   const Actualvalueofprice=fetchQantityfromLS(id,price);

       productClone.querySelector('#cardValue').setAttribute("id",`card${id}`);
       productClone.querySelector(".category").textContent=category;
       productClone.querySelector(".productName").textContent=name;
       productClone.querySelector(".productPrice").textContent=Actualvalueofprice.price;
       productClone.querySelector(".productQuantity").textContent=Actualvalueofprice.quantity;
       productClone.querySelector(".productImage").src=image;
      productClone.querySelector('.remove-to-cart-button').addEventListener('click',(currelem)=>{
    // console.log(currelem);
    removeProdfromCart(id);
})
    productClone.querySelector(".stockElement").addEventListener('click',(event)=>{
 addCardButton(event,id,stock,price);
    })
    
        
       
       cartElement.append(productClone);
    })
}
showCartProduct();
updateCartProductTotal();