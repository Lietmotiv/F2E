function cTrig(clickedid) { 
    if (document.getElementById(clickedid).checked == false) {
      return false;
    } else {
     var box= confirm("Are you sure you want to do this?");
      if (box==true)
          return true;
      else
         document.getElementById(clickedid).checked = false;
          
    }
  }