const cartValue=document.querySelector("#cartvalue")
export const updateCartValue=(cartProduct)=>{
    return (cartValue.innerHTML=`<i class="fa-solid fa-cart-shopping">${cartProduct.length}</i>`)
}