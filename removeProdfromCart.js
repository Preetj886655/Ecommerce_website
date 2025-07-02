import { getcardProductfromLS } from "./getProductLS"
import { updateCartValue } from "./updateCartValue";

export const removeProdfromCart=(id)=>{
    let cartProducts=getcardProductfromLS();
    cartProducts=cartProducts.filter((currProd)=>currProd.id!==id);
    localStorage.setItem("cartProductLS",JSON.stringify(cartProducts));

    let removeDiv=document.getElementById(`card${id}`);
    if(removeDiv){
        removeDiv.remove();
    }
    updateCartValue(cartProducts)
}