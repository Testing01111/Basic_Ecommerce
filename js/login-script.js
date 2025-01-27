document.body.querySelector(".redirect").addEventListener("click",(event)=>{
    event.preventDefault();
    let username=document.body.querySelector(".username");
    let password=document.body.querySelector(".password");
    if(username.value.trim()==="" || password.value.trim()===""){
        if(username.value.trim()===''){
            alert('plese enter valid username');
        }
        else if(password.value.trim()===''){
            alert('plese enter valid password');
        }
    }
    else{
        window.location.href = "/html/home.html";
    }
})