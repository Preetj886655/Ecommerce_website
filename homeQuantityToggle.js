export const homeQuantityToggle=(event,id,stock)=>{
    const currentCardelement=document.querySelector(`#card${id}`)
    console.log(currentCardelement)
    const productQuantity=currentCardelement.querySelector(".productQuantity");
    let quantity= parseInt(productQuantity.getAttribute("data-quantity"))||0;
    if(event.target.className=='cartIncrement'){
        if(quantity<stock){
            quantity+=1;
        }else if(quantity==stock){
            quantity=stock;
        }
    }
    if((event.target.className=='cartDecrement')){
        if(quantity>1){
            quantity-=1;
        }
    }
    productQuantity.innerText=quantity;
    console.log(quantity);
    productQuantity.setAttribute("data-quantity",quantity.toString());
    return quantity;

}