function openAdminManageTab(tabEvent, tabName) {
    var tabIndex, tabContent, adminTabLinks;
    tabContent = document.getElementsByClassName("manage-loans");

    for (tabIndex = 0; tabIndex < tabContent.length; tabIndex++) {
      tabContent[tabIndex].style.display = "none";
    }
    
    adminTabLinks = document.getElementsByClassName("admin-tab");

    for (tabIndex = 0; tabIndex < adminTabLinks.length; tabIndex++) {
      adminTabLinks[tabIndex].className = adminTabLinks[tabIndex].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    tabEvent.currentTarget.className += " active";
  }
function myFunction() {
  // Declare variables 
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("all-loans");
  filter = input.value.toUpperCase();
  table = document.getElementById("manage-loans");
  tr = table.getElementsByTagName("tabContent");


document.getElementById("myBtn").addEventListener("click", function(button) {    
  if (document.getElementById("all-loans").style.display === "none")
        document.getElementById("all-loans").style.display = "block";
  else document.getElementById("all-loans").style.display = "none";
})
}
