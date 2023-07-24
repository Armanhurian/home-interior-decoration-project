let getItemLocal = JSON.parse(localStorage.getItem('key'))
console.log(getItemLocal);

let totalPrice = 0

getItemLocal.forEach(item=>{

  totalPrice += Number(item.price)
  
})

console.log(totalPrice);

let menuBarHeaderItemLink = document.querySelectorAll('.menu-bar__header-item-link')
let myAccountLoginBoxButton = document.querySelector('.myAccount-login-box-button')
let myAccountLoginTextBoxInput = document.querySelector('.text-input')
let myAccountLoginPasswordBoxInput = document.querySelector('.password-input')
let tBodyShoppingListWrapper = document.querySelector('.tBodyShoppingListWrapper')
let basketShoppingProductRightBox = document.querySelector('.basketShopping-product-description-rightBox')
let basketShoppingProductLeftBoxWrapper = document.querySelector('.basketShopping-product-pay-leftBox')




menuBarHeaderItemLink.forEach(item =>{
    
    
    
  for (let index = 0; index < menuBarHeaderItemLink.length; index++) {
       
       if(menuBarHeaderItemLink[index].href.includes('basketShop')){
           menuBarHeaderItemLink[index].classList.add('menu-active-style')
           
       }
  }

   
})

function itemWrapperGenerator (){
   
  getItemLocal.forEach ((item)=>{
    tBodyShoppingListWrapper.insertAdjacentHTML('beforeend',`
        
      <td>
        <img class="product-description-rightBox-image" src="${item.imageSrc}" alt="" srcset="">
      </td>
      <td>
        <p class="product-description-rightBox-title">${item.title}</p>
      </td>
      <td>
        <p class="product-description-rightBox-price">${item.price} تومان</p>
      </td>
      <td >
        <a href="" onclick="removeProduct(event,${item.id})">
        <i class="fas fa-trash product-description-rightBox-icon"></i>
        </a>
      </td>
      
      `)
  })

  
}

itemWrapperGenerator()


function removeProduct(event,itemID){

  event.preventDefault()

  tBodyShoppingListWrapper.innerHTML= ''

  console.log(itemID);
  let deletedIndex = getItemLocal.findIndex(item=>{
     return item.id === itemID
  })
  console.log(deletedIndex);

  getItemLocal.splice(deletedIndex,1)

  totalPrice = 0

  getItemLocal.forEach(item=>{


    totalPrice += Number(item.price)
    
  })

  console.log(totalPrice);

  if(!getItemLocal.length){
    tBodyShoppingListWrapper.innerHTML = `
    <div class="alert alert-danger">محصولی برای خرید وجود ندارد!</div>
    `
    basketShoppingProductRightBox.style.height = '21%'
  }
  
  itemWrapperGenerator()
  payCardGeneratorFunc (totalPrice)
}

payCardGeneratorFunc (totalPrice)

function payCardGeneratorFunc (price){

  basketShoppingProductLeftBoxWrapper.innerHTML = ''

  basketShoppingProductLeftBoxWrapper.insertAdjacentHTML('beforeend',`
  
  <div class="basketShopping-product-pay-leftBox-titleBox">
    <h1 class="pay-leftBox-title">فاکتور خرید</h1>
  </div>
  <div class="basketShopping-product-pay-leftBox-bonBox">
    <p class="pay-leftBox-bon">بن خرید :</p>
    <p class="pay-leftBox-bon-des">ندارید</p>
  </div>
  <div class="basketShopping-product-pay-leftBox-priceBox">
    <p class="pay-leftBox-price-text">مجموع خرید : </p>
    <p class="pay-leftBox--price">${price} تومان</p>
  </div>
  <div class="basketShopping-product-pay-leftBox-deliverBox">
      <p class="pay-leftBox-deliver-title">هزینه ارسال :</p>
      <p class="pay-leftBox-deliver-subTitle">رایگان</p>
  </div>
  <div class="basketShopping-product-pay-leftBox-totalPriceBox">
     <p class="pay-leftBox-total-price-text">جمع کل خرید :</p>
     <p class="pay-leftBox-total-priceNumber">${price} تومان</p>
  </div>
  <div>
   <a href="pay.html">
      <button class="pay-leftBox-btn">تایید و پرداخت</button>
   </a>
  </div>
  `)
}

//  responsive codes

let menuBarHeaderList = document.querySelector('.menu-bar__header-list')
let menuIconResponse = document.querySelector('.menu-icon-response')


menuIconResponse.addEventListener('click',()=>{


    if(menuBarHeaderList.className==='menu-bar__header-list'){

        menuBarHeaderList.classList.add('activeResponsiveMenu')
        
    }else{
        
        menuBarHeaderList.classList.remove('activeResponsiveMenu')
        
        
    }

    
})
