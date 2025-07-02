import { getcardProductfromLS } from "./getProductLS.js";
import { updateCartValue } from "./updateCartValue.js";
getcardProductfromLS()
export const addToCart=(event,id,stock)=>{
    let arrLocalStorageProduct=getcardProductfromLS();
    const currentProductElement=document.querySelector(`#card${id}`)
    let quantity=currentProductElement.querySelector('.productQuantity').innerText;
    let price=currentProductElement.querySelector('.productPrice').innerText;
// console.log(quantity,price);
 price=price.replace('₹','');
//  console.log(price)
 let existingproduct=arrLocalStorageProduct.find((currprod)=>{
  return currprod.id==id
 })
 console.log(existingproduct)
 if(existingproduct&& quantity>1){
   quantity=Number(existingproduct.quantity)+Number(quantity);
   price=Number(price)*quantity
   let updateCart={id,quantity,price}
   updateCart=arrLocalStorageProduct.map((currele)=>{
    return currele.id==id?updateCart:currele;
  });
   localStorage.setItem("cartProductLS", JSON.stringify(updateCart));
 updateCartValue(updateCart)

 }
 

  price=Number(price*quantity);
  quantity=Number(quantity);
 arrLocalStorageProduct.push({id,quantity,price});
 localStorage.setItem("cartProductLS", JSON.stringify(arrLocalStorageProduct));
 updateCartValue(arrLocalStorageProduct)
}