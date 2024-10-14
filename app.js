function confirmLeaving(){
    const confirmation = confirm("You are about to leave this site. Do you want to continue?");
    return confirmation;
}

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function navigation() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
