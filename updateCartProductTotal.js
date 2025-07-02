import { getcardProductfromLS } from "./getProductLS";

export const updateCartProductTotal=()=>{
    let productSubtotal=document.querySelector(".productSubTotal")
        let productFinaltotal=document.querySelector(".productFinalTotal")

      let cartProducts=getcardProductfromLS();
      let intial=0;
      let totalProductcost=cartProducts.reduce((accum,currele)=>{
          let productPrice=parseInt(currele.price)||0;
          return accum+productPrice;
      },intial)
    console.log(totalProductcost)
    productSubtotal.textContent=`Rs ${totalProductcost}`
    productFinaltotal.textContent=`Rs ${totalProductcost}`+50;
}