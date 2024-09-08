// Start validate function 

 function validate(){

    let userName=document.getElementById("userName").value;
    let email=document.getElementById("email").value;
    let password=document.getElementById("pass").value;
    let confirmPassword=document.getElementById("confirmPass").value;
    let result =document.getElementById("result");


         result.style.color="white";
         result.style.backgroundColor="red";
         result.style.padding="10px";
         result.style.textAlign="center";
         result.style.borderRadius="15px";
         result.style.transition=" all 1s ease";
         result.style.fontSize="18px";

         

    
    if(userName=="" && email==""  &&password=="" && confirmPassword=="" ){
        result.innerHTML="please Insert Valid Data";
        return false;
    }else if(userName.length<3 || userName>15){
        result.innerHTML="please Insert 3-15 character in userName";
        return false;
    }else if( email.indexOf("@") == -1){
        result.innerHTML="Please Enter Valid Email";
        return false;
    }else if(password.length<8){
        result.innerHTML="please Insert atleast 8 character in password";
        return false;
    }else if(password != confirmPassword){
        result.innerHTML="please Matched password";
        return false;
    }
 }
   // End validate function 














 