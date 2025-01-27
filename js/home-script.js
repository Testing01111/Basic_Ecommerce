let shopButton = document.body.querySelector(".content-button");
shopButton.addEventListener("click",()=>{
    window.scrollTo({
        top:document.getElementById("grid-focus").offsetTop,
        behavior: "smooth"
    })
})
let shopTab = document.body.querySelector(".shop-scroll");
shopTab.addEventListener("click",()=>{
    window.scrollTo({
        top:document.getElementById("grid-focus").offsetTop,
        behavior: "smooth"
    })
})
let arrivalscroll = document.body.querySelector(".arrivalscroll");
arrivalscroll.addEventListener("click",()=>{
    window.scrollTo({
        top:document.getElementById("new-arrival-scroll").offsetTop,
        behavior: "smooth"
    })
})

let redirect=Array.from(document.body.querySelectorAll(".redirect"));

for(ele of redirect){
    ele.addEventListener("click",()=>{
        window.location.href="https://testing01111.github.io/Basic_Ecommerce/html/product_details.html";
    })
}

let logo=document.body.querySelector(".logo");
logo.addEventListener("click",()=>{
    window.location.href="https://testing01111.github.io/Basic_Ecommerce/html/home.html";
})
