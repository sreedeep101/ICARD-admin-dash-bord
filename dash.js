
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
    document.getElementById("prof").innerHTML ="Profile";
    document.getElementById("log").innerHTML ="Setting";
    document.getElementById("log").href ="setting.html";
    
    const element = document.getElementById("user");
    element.classList.remove("name");
  element.classList.add("fa-user"); 
    const setting = document.getElementById("out");
    setting.classList.remove("fa-right-to-bracket");
    setting.classList.add("fa-gear");

  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("prof").innerHTML =""
    
    document.getElementById("log").innerHTML ="Log out"
    document.getElementById("log").href ="dash-logout.html";
    const element = document.getElementById("user");

  element.classList.remove("fa-user"); 
  element.classList.add("name");
  
  const setting = document.getElementById("out");
    setting.classList.remove("fa-gear");
    setting.classList.add("fa-right-to-bracket");
  }