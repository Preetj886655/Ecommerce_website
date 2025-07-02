import { getcardProductfromLS } from "./getProductLS";

export const fetchQantityfromLS=(id,price)=>{
let cartProducts=getcardProductfromLS();
let existingproduct=cartProducts.find((currProd)=>currProd.id==id)
let quantity=1;
if(existingproduct){
    quantity=existingproduct.quantity;
    price=existingproduct.price;
}
return {quantity,price}
}