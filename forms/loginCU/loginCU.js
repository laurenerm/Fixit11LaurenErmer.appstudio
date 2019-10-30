

btnNextPage.onclick=function(){
  ChangeForm(favFoods)
}

btnLogin.onclick=function(){
  req1 = ""
    req1 = Ajax("https://radlab.creighton.edu/appStudio/authLDAP.php", "POST", "j_username=" + inptNetID.value + "&j_password=" + inptPassword.value);
    if (req1.status == 200) { //everything worked.
        lblWelcome.style.display = "block"  // none to hide
        lblResponse.style.display = "block"  // none to hide
        lblResponse.value = "The authentication code is " + req1.responseText
      if (req1.responseText = 1) {
        ChangeForm(favFoods)
        }
      else {
        lblResponse.value = "That login did not work. Please try again"
     }
        
        //1 good 0 bad

    } else {
        //Handle that. 
        lblResponse.style.display = "block"  // none to hide
        lblResponse.value = "Error Connection Not Made: " + req1.status + " readystate " + req1.readyState + " status text " + req1.statusText;
    }
}


  
  
