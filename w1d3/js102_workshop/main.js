function authenticateUser() {
  let attempts = 0;
  while (attempts < 3){

    let userPassword = prompt("Please enter the password.");
    console.log(userPassword);

    if (userPassword === "myPassword1!"){
      return true;
      /*alert("My secret information here");*/
      
    } else {
        attempts++;
    }

  }
  return false;
}

function checkLoggedIn() {
  let isLoggedIn = authenticateUser();


  if ( isLoggedIn ){
    alert("My secret information here");
  }
}

checkLoggedIn();

