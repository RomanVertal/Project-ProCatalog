/*--------------------------SLIDER------------------------------*/

let position = 0;
let sliderLine = document.querySelector('.slider_line');
let dotIndex = 0;

function nextSlide(){

    position += 60;
    dotIndex++
    if(position>240){
        position=0
        dotIndex=0
    }
    sliderLine.style.left = -position + 'vw';
    dotActive(dotIndex)

}


function prevSlide(){

    position -= 60;
    dotIndex--
    if(position<0){
        position=240
        dotIndex=4
    }
    sliderLine.style.left = -position + 'vw';
    dotActive(dotIndex)
}



let dots = document.querySelectorAll('.dot');

dots.forEach((dot,index) =>{

    dot.addEventListener('click', () => {
        position = 60 * index
        sliderLine.style.left = -position + 'vw';
        dotActive(index)

    })

 })


function dotActive(index){
    for(let dot of dots){
        dot.classList.remove('dot_active')
    }

    dots[index].classList.add('dot_active')

}


setInterval(() => {
    nextSlide()
    
}, 7000);

/*--------------------------SLIDER END------------------------------*/









/*--------------------------SHOP SLIDER ------------------------------*/

let positionShop = 0;
let shopSlider = document.querySelector('.shop_slider_line');


 function shopSliderPrev(){

    positionShop-=262;
    if(positionShop<0){
        positionShop=786
    }

    shopSlider.style.left = -positionShop + 'px';

}


function shopSliderNext(){

    positionShop+=262;
    if(positionShop>786){
        positionShop=0
    }

    shopSlider.style.left = -positionShop + 'px';

    

}

/*--------------------------END SHOP SLIDER ------------------------------*/


/*-------------------------- ------------------------------*/

let productDescriptionBlock1 =document.querySelector('.product_description_block1');
let productCharacteristicsBlock1 =document.querySelector('.product_characteristics_block1');
let buttonProductDescriptionBlock1 =document.querySelector('.button_product_description_block1');
let buttonProductCharacteristicsBlock1 =document.querySelector('.button_product_characteristics_block1');

let productDescriptionBlock2 =document.querySelector('.product_description_block2');
let productCharacteristicsBlock2 =document.querySelector('.product_characteristics_block2');
let buttonProductDescriptionBlock2 =document.querySelector('.button_product_description_block2');
let buttonProductCharacteristicsBlock2 =document.querySelector('.button_product_characteristics_block2');

let productDescriptionBlock3 =document.querySelector('.product_description_block3');
let productCharacteristicsBlock3 =document.querySelector('.product_characteristics_block3');
let buttonProductDescriptionBlock3 =document.querySelector('.button_product_description_block3');
let buttonProductCharacteristicsBlock3 =document.querySelector('.button_product_characteristics_block3');



function productDescriptionVisible(description,characteristics,descriptionBtn,characteristicsBtn){    
    description.classList.remove('invisible')
    characteristics.classList.add('invisible')

    descriptionBtn.classList.add('catalog_block_nav_style_button_active')
    characteristicsBtn.classList.remove('catalog_block_nav_style_button_active')
}

function productCharacteristicsVisible(description,characteristics,descriptionBtn,characteristicsBtn){    
    description.classList.add('invisible')
    characteristics.classList.remove('invisible')

    descriptionBtn.classList.remove('catalog_block_nav_style_button_active')
    characteristicsBtn.classList.add('catalog_block_nav_style_button_active')
}
/*-------------------------- ------------------------------*/

/*-------------------------- ------------------------------*/


let buttonMoreBlock1 = document.querySelector('.button_more_block1')
let buttonMoreBlock2 = document.querySelector('.button_more_block2')
let buttonMoreBlock3 = document.querySelector('.button_more_block3')
let catalogBlockInvisible1 = document.querySelector('.catalog_block_invisible1')
let catalogBlockInvisible2 = document.querySelector('.catalog_block_invisible2')
let catalogBlockInvisible3 = document.querySelector('.catalog_block_invisible3')


function openHiddenBlock(block,button){    
    
    if(block.style.maxHeight){
        block.style.maxHeight = null;
        button.innerHTML = "Смотреть полностью";
     

    }else{
        block.style.maxHeight = block.scrollHeight + 'px';        
        button.innerHTML = "Свернуть";
      
    }           

};





/*-------------------------- ------------------------------*/






let imgBtnBlock1 = document.querySelectorAll('.img_nav_btn_block1')
let imgShowBlock1 = document.querySelectorAll('.img_show_block1')


imgBtnBlock1.forEach((img,index)=>{

    img.addEventListener('click', () => {   

        for(let btn of imgBtnBlock1){

            btn.classList.remove('img_nav_active')
        }
        
        imgBtnBlock1[index].classList.add('img_nav_active')

        for(let img of imgShowBlock1){
    
            img.classList.add('img_invisible')
        }
        
        imgShowBlock1[index].classList.remove('img_invisible')

    })

})


let imgBtnBlock2 = document.querySelectorAll('.img_nav_btn_block2')
let imgShowBlock2 = document.querySelectorAll('.img_show_block2')

imgBtnBlock2.forEach((img,index)=>{

    img.addEventListener('click', () => {   

        for(let btn of imgBtnBlock2){

            btn.classList.remove('img_nav_active')
        }
        
        imgBtnBlock2[index].classList.add('img_nav_active')

        for(let img of imgShowBlock2){
    
            img.classList.add('img_invisible')
        }
        
        imgShowBlock2[index].classList.remove('img_invisible')

    })

})


let imgBtnBlock3 = document.querySelectorAll('.img_nav_btn_block3')
let imgShowBlock3 = document.querySelectorAll('.img_show_block3')

imgBtnBlock3.forEach((img,index)=>{

    img.addEventListener('click', () => {   

        for(let btn of imgBtnBlock3){

            btn.classList.remove('img_nav_active')
        }
        
        imgBtnBlock3[index].classList.add('img_nav_active')

        for(let img of imgShowBlock3){
    
            img.classList.add('img_invisible')
        }
        
        imgShowBlock3[index].classList.remove('img_invisible')

    })

})



/*-------------------------- ------------------------------*/


/*--------------------------BUTTON UP ------------------------------*/

let btnUp = document.querySelector('.button_up');

window.addEventListener('scroll',function(){
    btnUp.classList.toggle('button_up_active', window.scrollY>500)
})


function upTop(){
    window.scrollTo({
        top:0,
        behavior:'smooth'
    })
}







/*--------------------------END BUTTON UP ------------------------------*/


/*-------------------------- ------------------------------*/




let account = document.querySelector('.account')


function openAccountBlock(){

    account.classList.toggle('hidden_block')
    
   
}





let loginForm = document.querySelector('.login_form')
let registrationForm = document.querySelector('.registration_form')

let btnLogin = document.querySelector('.btn_login')
let btnRegistration = document.querySelector('.btn_regisration')


function openLoginBlock(){
    loginForm.classList.remove('hidden_block')
    registrationForm.classList.add('hidden_block')


    btnLogin.classList.add('account_nav_btn_style_active')
    btnRegistration.classList.remove('account_nav_btn_style_active')
}


function openRegisrationBlock(){
    loginForm.classList.add('hidden_block')
    registrationForm.classList.remove('hidden_block')


    btnLogin.classList.remove('account_nav_btn_style_active')
    btnRegistration.classList.add('account_nav_btn_style_active')
}

/*-------------------------- ------------------------------*/