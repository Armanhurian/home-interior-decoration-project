let $ = document

let menuBarHeaderItemLink = $.querySelectorAll('.menu-bar__header-item-link')
let myAccountLoginBoxButton = $.querySelector('.myAccount-login-box-button')
let myAccountLoginTextBoxInput = $.querySelector('.text-input')
let myAccountLoginPasswordBoxInput = $.querySelector('.password-input')
let eyeIconActive = $.querySelector('.eye-icon-active')
let filteredBoxCategoriesLink = $.querySelectorAll('.filtered-box__categories-list-link')
let furniture = $.querySelector('.furniture')
let diningTable = $.querySelector('.dining-table')
let lampshade = $.querySelector('.lampshade')
let flowerPot = $.querySelector('.flower-pot')
let productContainerWrapper = $.querySelector('.product-container')
let filteredBoxCategoryBox = $.querySelector('.filtered-box__category-box')
let filteredBoxCategoryList = $.querySelector('.filtered-box__categories-list')
let filteredBoxCategoryIcon = $.querySelector('.filtered-box__category-icon')
let filteredBoxPriceBox = $.querySelector('.filtered-box__price-box')
let submitPriceContainer = $.querySelector('.submit-price-container')
let filteredPriceIcon = $.querySelector('.filtered-price-icon')
let priceRangeInput = $.querySelector('.price_range--input')
let priceNumberFromInput = $.querySelector('.price_number-from-input')
let availableProductText = $.querySelector('.available-product-text')
let availableCheckBox = $.querySelector('.check1')
let discountProductText = $.querySelector('.discount-product-text')
let discountCheckBox = $.querySelector('.check2')
let shoppingCartDetailsSubmitLeft = $.querySelector('.shopping-cart-details-submit-left')
let shoppingCartContainerWrapper = $.querySelector('.shopping-cart-details-submit-left')
let shoppingCartDetailsRightLinkSpanText = $.querySelector('.shopping-cart-details-right-link-span-text')

menuBarHeaderItemLink.forEach(item =>{
    
    
    
  for (let index = 0; index < menuBarHeaderItemLink.length; index++) {
       
       if(menuBarHeaderItemLink[index].href.includes('store')){
           menuBarHeaderItemLink[index].classList.add('menu-active-style')
           
       }
  }

   
})



filteredBoxCategoryBox.addEventListener('click',()=>{

    if(filteredBoxCategoryIcon.className === 'fas filtered-box__category-icon fa-chevron-down'){

        filteredBoxCategoryList.style.display = 'block'
        filteredBoxCategoryIcon.classList.remove('fa-chevron-down')
        filteredBoxCategoryIcon.classList.add('fa-chevron-up')
        
    }else{
        
        filteredBoxCategoryList.style.display = 'none'
        filteredBoxCategoryIcon.classList.remove('fa-chevron-up')
        filteredBoxCategoryIcon.classList.add('fa-chevron-down')
    }
    
})

filteredBoxPriceBox.addEventListener('click',()=>{

    if(filteredPriceIcon.className === 'fas filtered-price-icon fa-chevron-down'){
    
        submitPriceContainer.style.display = 'block'
        filteredPriceIcon.classList.remove('fa-chevron-down')
        filteredPriceIcon.classList.add('fa-chevron-up')
        
    }else{
        
        submitPriceContainer.style.display = 'none'
        filteredPriceIcon.classList.remove('fa-chevron-up')
        filteredPriceIcon.classList.add('fa-chevron-down')
    }
})


let productFuncGenerator = ( enterMyProductArray ) => {

  enterMyProductArray.forEach((product)=>{

    productContainerWrapper.insertAdjacentHTML('beforeend',`
    <div class="product-container-link col-4">
      <div class="product-container-link-box">
         <img class="product-container-link-box-image" src="${product.imageSrc}" alt="" srcset="">
      </div>
      <h3 class="product-container-link-box-title">${product.title}</h3>
      <p class="product-container-link-box-paragraph">${product.discription}</p>
      <div class="product-container-link-box-priceBox">
      <div class="product-container-link-box-price-and-discount">
         <p class="product-container-link-box-discount">${product.discount}</p>
         <div>
           <span class="product-container-link-box-discountPrice">${prevCount (product.price , product.discount)}</span>
           <span class="product-container-link-box-price-subtitle">تومان</span>
         </div>
        </div>

        ${product.discount.includes('%') ? `<p class="product-container-link-box-prevPrice">${product.price} تومان </p>` : `<p></p>`}
        <div class = "product--button-Box">
        <button id="${product.id}" onclick = "addShopClickHandler(${product.id},event)" class="product-container-button">اضافه کردن به سبد خرید</button>
        </div>
      </div>
    </div> 
    
    `)
  })
  
}

let count = 0


let shoppBasketListArray = []

function addShopClickHandler(productID,event){
  
  shoppingCartContainerWrapper.innerHTML = ''
  
  count++

  //console.log(count);

  shoppingCartDetailsRightLinkSpanText.style.opacity = 1
  shoppingCartDetailsRightLinkSpanText.style.visibility = 'visible'
  shoppingCartDetailsRightLinkSpanText.innerHTML = count
  

  
  let shoppingBasketPrice = event.target.parentElement.parentElement.children[0].children[1].children[0].innerHTML
  let shoppingBasketImageSrc = event.target.parentElement.parentElement.parentElement.children[0].children[0].getAttribute('src')
  let shoppingBasketTitle = event.target.parentElement.parentElement.parentElement.children[1].innerHTML
  

      shoppingCartContainerWrapper.insertAdjacentHTML('beforeend',`
     
      <img class="shopping-cart-details-submit-left-image" src="${shoppingBasketImageSrc}" alt="" srcset="">
      <span>
          <h1 class="shopping-cart-details-submit-left-title"> محصول شما به سبد خرید اضافه شد</h1>
          <i class="fa-sharp fa-solid fa-circle-check shopping-cart-details-submit-left-icon"></i>
          <h3 class="shopping-cart-details-submit-left-subtitle">${shoppingBasketTitle}</h3>
          <span  class="shopping-cart-details-submit-left-price"><span class="shopping-cart-details-submit-left-priceText">${shoppingBasketPrice}</span>تومان</span>
      </span>
      
      `)

      let shoppingProduct = apiStoreTotalArray[productID-1]
      
      shoppBasketListArray.push(shoppingProduct)

      console.log(shoppBasketListArray);

      

  
  if(shoppingCartDetailsSubmitLeft.style.opacity !== '1'){
    
    shoppingCartDetailsSubmitLeft.style.opacity = '1'
    shoppingCartDetailsSubmitLeft.style.visibility = 'visible'
    productContainerWrapper.style.zIndex = '-1'
    
    setTimeout(()=>{
      shoppingCartDetailsSubmitLeft.style.opacity = '0'
      shoppingCartDetailsSubmitLeft.style.visibility = 'hidden'
      productContainerWrapper.style.zIndex = '100'
  
    },3000)

  }else{
    
    shoppingCartDetailsSubmitLeft.style.opacity = '0'
    shoppingCartDetailsSubmitLeft.style.visibility = 'hidden'
  }
    

  localStorage.setItem('key' , JSON.stringify(shoppBasketListArray))
  let getItemLocal = JSON.parse(localStorage.getItem('key'))
  console.log(getItemLocal);


}




filteredBoxCategoriesLink.forEach((item) => {

    item.addEventListener('click',(event)=>{


      productContainerWrapper.innerHTML = ''


      let filteredAvailableProduct = apiStoreTotalArray.filter((item)=>{
        return item.discription !== '' 
      })

      if(availableProductText.style.borderBottom === ''){ 
    
        apiStoreTotalArray.filter((product) => {
          
          if(product.type === event.target.getAttribute('id')){
            

            productContainerWrapper.insertAdjacentHTML('beforeend',`
            <div class="product-container-link col-4">
            <div class="product-container-link-box">
                 <img class="product-container-link-box-image" src="${product.imageSrc}" alt="" srcset="">
              </div>
              <h3 class="product-container-link-box-title">${product.title}</h3>
              <p class="product-container-link-box-paragraph">${product.discription}</p>
              <div class="product-container-link-box-priceBox">
              <div class="product-container-link-box-price-and-discount">
                 <p class="product-container-link-box-discount">${product.discount}</p>
                 <div>
                   <span class="product-container-link-box-discountPrice">${prevCount (product.price , product.discount)}</span>
                   <span class="product-container-link-box-price-subtitle">تومان</span>
                 </div>
                </div>
        
                ${product.discount.includes('%') ? `<p class="product-container-link-box-prevPrice">${product.price} تومان </p>` : `<p></p>`}
                <div class = "product--button-Box">
                <button id="${product.id}" onclick = "addShopClickHandler(${product.id},event)" class="product-container-button">اضافه کردن به سبد خرید</button>
                </div>
              </div>
            </div> 
            
            `)
          }
        })
    
      }else{

        filteredAvailableProduct.filter((product)=>{

          if(product.type === event.target.getAttribute('id')){
  
            productContainerWrapper.insertAdjacentHTML('beforeend',`
            <div class="product-container-link col-4">
              <div class="product-container-link-box">
                 <img class="product-container-link-box-image" src="${product.imageSrc}" alt="" srcset="">
              </div>
              <h3 class="product-container-link-box-title">${product.title}</h3>
              <p class="product-container-link-box-paragraph">${product.discription}</p>
              <div class="product-container-link-box-priceBox">
              <div class="product-container-link-box-price-and-discount">
                 <p class="product-container-link-box-discount">${product.discount}</p>
                 <div>
                   <span class="product-container-link-box-discountPrice">${prevCount (product.price , product.discount)}</span>
                   <span class="product-container-link-box-price-subtitle">تومان</span>
                 </div>
                </div>
        
                ${product.discount.includes('%') ? `<p class="product-container-link-box-prevPrice">${product.price} تومان </p>` : `<p></p>`}
                <div class = "product--button-Box">
                <button id="${product.id}" onclick = "addShopClickHandler(${product.id},event)" class="product-container-button">اضافه کردن به سبد خرید</button>
                </div>
              </div>
            </div> 
            
            `)
          }
        })

      }


        priceRangeInput.value = 0

        priceNumberFromInput.value = 0

        for (let i = 0; i < filteredBoxCategoriesLink.length; i++) {

            if(filteredBoxCategoriesLink[i].className === 'filtered-box__categories-list-link menu-active-style-for-category'){

              filteredBoxCategoriesLink[i].classList.remove('menu-active-style-for-category')
            
            }
        }

       event.target.classList.add('menu-active-style-for-category')

    })
  
})

let apiStoreTotalArray = [

    {id : 1 ,type : 'furniture' , title : 'مبل ال 7 نفره مدل کینگ استون', imageSrc : 'image/image store/مبل ال 7 نفره مدل kingston.webp', discription : '5 عدد در انبار باقی مانده', price : '25000000' , discount : '20%'},
    {id : 2 ,type : 'furniture' , title : 'مبل ال چرم مدرن 7 نفره ', imageSrc : 'image/image store/ff13e46487118e3d55c3375c067c1dc7d56c9b2a_1619380184.webp', discription : '3 عدد در انبار باقی مانده', price : '40000000' , discount : '15%'},
    {id : 3 ,type : 'furniture' , title : 'مبل ال کاربردی جداشونده', imageSrc : 'image/image store/186a1cc2de16476187ded7ba201b0384.w_1004,h_1777,r_k.jpg', discription : '', price : '50000000' , discount : '10%'},
    {id : 4 ,type : 'furniture' , title : 'مبل چستر فیلد 2017', imageSrc : 'image/image store/13.jpg', discription : '3 عدد در انبار باقی مانده', price : '25000000' , discount : '10%'},
    {id : 5 ,type : 'furniture' , title : 'مبل راحتی لیدو به همراه میز عسلی ', imageSrc : 'image/image store/unnamed-file.png', discription : '', price : '50000000' , discount : '10%'},
    {id : 6 ,type : 'furniture' , title : 'مدل مبل راحتی ایتالیایی با طراحی مدرن', imageSrc : 'image/image store/Contemporary-italian-sofa-designs-8.jpg', discription : 'تنها 1 عدد در انبار باقی مانده ', price : '20000000' , discount : '25%'},
    {id : 7 ,type : 'furniture' , title : 'مبل راحتی تاکسیدو ', imageSrc : 'image/image store/مبل راحتی تاکسیدو - 1.jpg', discription : '4 عدد در انبار باقی مانده', price : '30000000' , discount : '15%'},
    {id : 8 ,type : 'furniture' , title : 'مبل ال 6 نفره استیل  ', imageSrc : 'image/image store/916XgfTQTRL._SL1500_.jpg', discription : '2 عدد در انبار باقی مانده ', price : '35000000' , discount : '15%'},
    {id : 9 ,type : 'furniture' , title : 'مبل راحتی با سبک مدرن ', imageSrc : 'image/image store/هزار-و-یک-شب-7.jpg', discription : '' , price : '42500000' ,discount : 'بدون تخفیف'},
    {id : 10 ,type : 'furniture' , title : 'مبل 3 نفره پایه استیل  ', imageSrc : 'image/image store/small-sofa-41-1200x1200.jpg', discription : '' , price : '12000000' ,discount : 'بدون تخفیف'},
    {id : 11 ,type : 'Dining table' , title : 'میز ناهار خوری طرح چوب  ', imageSrc : 'image/image store/dinning-table-for-4-5.jpg', discription : '' , price : '32000000' ,discount : ' 40% '},
    {id : 12 ,type : 'Dining table' , title : ' میز ناهارخوری مدرن چوبی', imageSrc : 'image/image store/wood.jpg', discription : 'تنها 1 عدد در انبار باقی مانده ' , price : '36000000' ,discount : '40%'},
    {id : 13 ,type : 'Dining table' , title : ' میز ناهارخوری 8 نفره با چوب گردو', imageSrc : 'image/image store/زیبا-ترین-میز-ناهار-خوری-8-نفره-با-چوب-گردو-Copy.jpg', discription : 'تنها 1 عدد در انبار باقی مانده ' , price : '35000000' ,discount : '30%'},
    {id : 14 ,type : 'Dining table' , title : ' میز ناهارخوری 6 نفره با چوب بلوط ', imageSrc : 'image/image store/میز-ناهار-خوری-با-چوب-بلوط-4-،-6-و-8-نفره-7.jpg', discription : ' 5 عدد در انبار باقی مانده ' , price : '40000000' ,discount : '25%'},
    {id : 15 ,type : 'lampshade' , title : ' آباژور DLT 1482 ', imageSrc : 'image/image store/آباژور-رومیزی-اتاق-خواب-1.jpg', discription : ' 2 عدد در انبار باقی مانده ' , price : '1000000' ,discount : '10%'},
    {id : 16 ,type : 'Dining table' , title : ' میز ناهارخوری 4 نفره مدل بری ', imageSrc : 'image/image store/1-3.jpg', discription : ' تنها 1 عدد در انبار باقی مانده ' , price : '12000000' ,discount : '10%'},
    {id : 17 ,type : 'Dining table' , title : ' صندلی تک با پارچه ابریشم ', imageSrc : 'image/image store/yalda-dining-table-gallery.webp', discription : '' , price : '500000' ,discount : 'بدون تخفیف '},
    {id : 18 ,type : 'Dining table' , title : ' صندلی تک با پارچه ابریشم ', imageSrc : 'image/image store/mehrshad-dining-table-gallery.webp', discription : ' تنها 1 عدد در انبار باقی مانده ' , price : '500000' ,discount : 'بدون تخفیف '},
    {id : 19 ,type : 'Dining table' , title : ' میز تک گرد', imageSrc : 'image/image store/c654155202d700efd37cc03070f8a02f9d4b828f_1614780055.webp', discription : ' تنها 1 عدد در انبار باقی مانده ' , price : '1000000' ,discount : 'بدون تخفیف '},
    {id : 20 ,type : 'Dining table' , title : ' میز تک مربعی', imageSrc : 'image/image store/06d6f8b7e76a0e4630cbe1f40a9f2e1a02fee6f3_1598253497.webp', discription : '2 عدد در انبار باقی مانده ' , price : '1000000' ,discount : 'بدون تخفیف '},
    {id : 21 ,type : 'lampshade' , title : 'آباژور چوبی مدل W0107', imageSrc : 'image/image store/W0107.jpg', discription : 'تنها 1 عدد در انبار باقی مانده ' , price : '1200000' ,discount : '15%'},
    {id : 22 ,type : 'lampshade' , title : ' آباژور کریستالی', imageSrc : 'image/image store/آباژور-کریستالی.jpg', discription : '2 عدد در انبار باقی مانده ' , price : '2400000' ,discount : '18%'},
    {id : 23 ,type : 'lampshade' , title : ' آباژور مشکی مولن روژ', imageSrc : 'image/image store/MG_2150-scaled.webp', discription : '' , price : '2100000' ,discount : 'بدون تخفیف '},
    {id : 24 ,type : 'lampshade' , title : ' آباژور مشکی مدل فلوریا', imageSrc : 'image/image store/C5UabIB6zyfKu07rQJDnV8uM9igvEKHbKmLpMvGH.jpg', discription : 'تنها 1 عدد در انبار باقی مانده ' , price : '2200000' ,discount : 'بدون تخفیف '},
    {id : 25 ,type : 'lampshade' , title : ' آباژور ایستاده مدل kinnahult ', imageSrc : 'image/image store/آباژور-ایستاده-ایکیا-مدل-kinnahult.jpg', discription : '2 عدد در انبار باقی مانده ' , price : '980000' ,discount : '15%'},
    {id : 26 ,type : 'lampshade' , title : ' آباژور ایستاده مدل barlast', imageSrc : 'image/image store/آباژور-ایستاده-ایکیا-مدل-barlast.jpg', discription : '6 عدد در انبار باقی مانده ' , price : '940000' ,discount : '15%'},
    {id : 27 ,type : 'flower pot', title : 'گلدان چوبی', imageSrc : 'image/image store/12786_img_5ded2f002c72d.jpg', discription : '3 عدد در انبار باقی مانده ' , price : '500000' ,discount : '15%'},
    {id : 28 ,type : 'flower pot', title : 'گلدان ژورنالی', imageSrc : 'image/image store/1646424535_45207.jpg', discription : '2 عدد در انبار باقی مانده ' , price : '900000' ,discount : '12%'},
    {id : 29 ,type : 'flower pot', title : 'گلدان پلاستیکی دیواری', imageSrc : 'image/image store/گلدان-پلاستیکی-گلپونه-دیواری.jpg', discription : '7 عدد در انبار باقی مانده ' , price : '250000' ,discount : 'بدون تخفیف '},
    {id : 30 ,type : 'flower pot', title : 'گلدان پلاستیکی بوژنه', imageSrc : 'image/image store/4242116.jpg', discription : '' , price : '150000' ,discount : 'بدون تخفیف '},

]


priceRangeInput.addEventListener('change',(event)=>{

  filteredBoxCategoriesLink.forEach(item =>{

    item.classList.remove('menu-active-style-for-category')

  })

  let maximumPrice = '40,000,000'
 
  let maximumPriceNum = Number(maximumPrice.split(',').join(''))

  let numPercent = Number(event.target.value)/100

  let priceNumInputRangeValue = Math.floor(numPercent * maximumPriceNum)


  priceNumberFromInput.value = priceNumInputRangeValue.toLocaleString()


  let filterRangeArray = apiStoreTotalArray.filter(item =>{

    let nextPrice = percentPrice(item.price , item.discount)

    if( nextPrice >= priceNumInputRangeValue ){

      return nextPrice

    }

  })

  
  let filteredAvailableProduct = apiStoreTotalArray.filter((item)=>{
    return item.discription !== '' 
  })
  

  let filterRangeAvailableArray = filteredAvailableProduct.filter(item =>{

    let nextPrice = percentPrice(item.price , item.discount)

    if( nextPrice >= priceNumInputRangeValue ){

      return nextPrice

    }

  })




  productContainerWrapper.innerHTML = ''

  if( availableProductText.style.borderBottom === '' ){


    createLoadingGife(filterRangeArray)
    
  }else{
  
    createLoadingGife(filterRangeAvailableArray)
  }



  if(filterRangeAvailableArray.length === 0 && filterRangeArray.length === 3 && availableProductText.style.borderBottom === '2px solid rgb(13, 110, 253)'){

    productContainerWrapper.innerHTML =
      `
      <div style ="    height: 2rem;
      margin: auto;" class=" alert alert-danger d-flex justify-content-center align-items-center">موردی با این مشخصات یافت نشد !!</div>
      `
  }
  
})

productFuncGenerator(apiStoreTotalArray)

availableProductText.addEventListener('click' , ()=>{

  filteredBoxCategoriesLink.forEach(item =>{

    item.classList.remove('menu-active-style-for-category')

  })

  productContainerWrapper.innerHTML = ''

  priceRangeInput.value = 0

  priceNumberFromInput.value = 0

  let filteredAvailableProduct = apiStoreTotalArray.filter((item)=>{
    return item.discription !== '' 
  })
  
  if(availableProductText.style.borderBottom === ''){


    availableProductText.style.borderBottom = '2px solid #0d6efd'


    createLoadingGife(filteredAvailableProduct)
  
}else{
  availableProductText.style.borderBottom = ''
  
    createLoadingGife(apiStoreTotalArray)


  }

})

availableCheckBox.addEventListener('click' , ()=>{
  filteredBoxCategoriesLink.forEach(item =>{

    item.classList.remove('menu-active-style-for-category')

  })

  productContainerWrapper.innerHTML = ''

  priceRangeInput.value = 0

  priceNumberFromInput.value = 0

  let filteredAvailableProduct = apiStoreTotalArray.filter((item)=>{
    return item.discription !== '' 
  })
  
  if(availableProductText.style.borderBottom === ''){


    availableProductText.style.borderBottom = '2px solid #0d6efd'

   createLoadingGife(filteredAvailableProduct)
   
  }else{
    availableProductText.style.borderBottom = ''
    
    createLoadingGife(apiStoreTotalArray)

  }
})

function prevCount (myPrice , myDiscount) {

 if(myDiscount.includes('%')){
    let percent = Number(myDiscount.slice(0,2))/100
    return Math.floor( Number(myPrice) - (Number(myPrice) * percent)).toLocaleString()
 }else{
    return Number(myPrice).toLocaleString()
 }
  
}
function percentPrice (myPrice , myDiscount) {

 if(myDiscount.includes('%')){
    let percent = Number(myDiscount.slice(0,2))/100
    return Math.floor( Number(myPrice) - (Number(myPrice) * percent))
 }else{
    return Number(myPrice)
 }
  
}

let createLoadingGife = (enterMyFilterLoadArray) =>{


  productContainerWrapper.innerHTML = `
  <div class = "d-flex justify-content-center align-items-center">
  <img src="image/image store/gambar-gif-loading-8.gif" alt="" srcset="">
  </div>
  `
  
  setTimeout(function(){
    productContainerWrapper.innerHTML = ''
    productFuncGenerator(enterMyFilterLoadArray)
  },2000)

}

//  responsive codes

let menuBarHeaderList = document.querySelector('.menu-bar__header-list')
let menuIconResponse = document.querySelector('.menu-icon-response')
let filteredBox = document.querySelector('.filtered-box')
let xMarkIcon = document.querySelector('.xmark-icon')
let filteringCartDetailsRightLink = document.querySelector('.filtering-cart-details-right-link')


menuIconResponse.addEventListener('click',()=>{


    if(menuBarHeaderList.className==='menu-bar__header-list'){

        menuBarHeaderList.classList.add('activeResponsiveMenu')
        
    }else{
        
        menuBarHeaderList.classList.remove('activeResponsiveMenu')
        
        
    }

    
})


filteringCartDetailsRightLink.addEventListener('click',()=>{

  
  if(filteredBox.style.display  !== 'block'){
    
    
    filteredBox.style.display  = 'block'
    filteredBox.style.zIndex  = '5'
    filteredBox.style.width  = '100%'
    filteredBox.style.height  = '100%'
  }else{
    filteredBox.style.display  = 'none'
  }

  xMarkIcon.addEventListener('click',()=>{
    filteredBox.style.display  = 'none'
  })
})

