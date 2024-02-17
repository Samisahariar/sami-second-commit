const forgotpasselement = document.querySelector('#forgotpass')
const loginpage = document.querySelector('#login-page')
const forgotpage = document.querySelector('#forgot-page')
const returnhomepagebutton = document.querySelector('#return-to-login-page')
const loginmainpage = document.querySelector('#loginmainpage')
const mainpage = document.querySelector('#main-page')
const loginfrontpage = document.querySelector('#login-button')
const userinput = document.querySelector('#user-input')
const passwordinput = document.querySelector('#password-input') 
const offerinfolink  = document.querySelector('#offerinfo')
const offerinfocontainer = document.querySelector('#offer-info-container')
const cross = document.querySelector('#cross')
const purchasekey = document.querySelectorAll('#purchase-key')
const lists = document.getElementById('list-adding')

const totalbill = document.querySelector('#total-value')
const discountedprice = document.querySelector('#discounted-price')

let totalprice = 0
function totalbillcounter (price){
    price = parseInt(price)
    totalprice += price
    showingtheprice(totalprice)
}

/* coupan area */
const coupaninput = document.querySelector('#coupan-input')
const coupanbutton = document.querySelector('#applycoupan')

function showingthediscount (value){
    discountedprice.innerText = value
}

coupanbutton.addEventListener('click', function(){
    let value = coupaninput.value
    sdiscountedprice(value)
})

function sdiscountedprice(value){
    let discountprice = 0
    if(value === "samcoupan"){
        discountprice = totalprice * 0.25
        totalprice = totalprice - discountprice
        showingtheprice(totalprice)
        showingthediscount(discountprice)
    }
}

/* 


*/
function showingtheprice (totalprice){
    totalbill.innerText = totalprice
}


for(let i = 0; i < purchasekey.length; i++){
    const purchasekey1 = purchasekey[i]
    purchasekey1.addEventListener('click', function(){
        let price = parseInt(purchasekey1.parentElement.previousElementSibling.innerText.substr(1,))
        const name = purchasekey1.parentElement.previousElementSibling.previousElementSibling.innerText
        itemsaddingmachine(name)
        totalbillcounter(price)
    /*     itemsaddingmachine(name) */
    })
}
function itemsaddingmachine(name){
    let itemsnumber = document.querySelectorAll('.choiced-items')
    const list = document.createElement('li')
    list.classList.add('choiced-items')
    list.innerText = `${itemsnumber.length + 1} .${name}`
    lists.appendChild(list)
}



cross.addEventListener('click', function(){
    offerinfocontainer.classList.add('hidden')
})


offerinfolink.addEventListener('click', function(){
    offerinfocontainer.classList.remove('hidden')
})


function changelayout(frompage, topage){
    frompage.classList.add('hidden')
    topage.classList.remove('hidden')
}

forgotpasselement.addEventListener('click', function(){
    changelayout(loginpage, forgotpage)
})
returnhomepagebutton.addEventListener('click', function(){
    changelayout(forgotpage, loginpage)
})
loginmainpage.addEventListener('click', function(){
    changelayout(mainpage, loginpage)
})

loginfrontpage.addEventListener('click', function(){
    if(userinput.value === "sami" && passwordinput.value === "sami1212"){
        changelayout(loginpage, mainpage)
    }
    else{
        alert("wrong password!!")
    }
})
offerinfolink.addEventListener('click', function(){

})
