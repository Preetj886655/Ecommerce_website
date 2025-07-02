import { getcardProductfromLS } from "./getProductLS";

export const addCardButton=(event,id,stock,price)=>{
      

    let stockelement=document.querySelector(`#card${id}`)
      let Productquantity=stockelement.querySelector('.productQuantity')
      let productPrice=stockelement.querySelector(".productPrice")

  let quantity=1;
  let LocalStoragePrice=0;

  let cartProducts=getcardProductfromLS();
  let existingProd=cartProducts.find((currProd)=>{currProd.id==id;
  })
if(existingProd){
    quantity=existingProd.quantity;
    LocalStoragePrice=existingProd.price;
}else{
    LocalStoragePrice=price;
    price=price;
}

    if(event.target.className=='cartIncrement'){
        if(quantity<stock){
            quantity+=1;
        }else if(quantity==stock){
            quantity=stock;
            LocalStoragePrice=price*stock;
        }
    }
    if((event.target.className=='cartDecrement')){
        if(quantity>1){
            quantity-=1;
        }
    }

LocalStoragePrice=price*quantity;
LocalStoragePrice=Number(LocalStoragePrice.toFixed(2))


let updateCart={id,quantity,LocalStoragePrice}

   updateCart=cartProducts.map((currele)=>{
    return currele.id==id?updateCart:currele;
  });
   localStorage.setItem("cartProductLS", JSON.stringify(updateCart));
//  updateCartValue(updateCart)
Productquantity.innerText=quantity;
productPrice.innerText=LocalStoragePrice;

}