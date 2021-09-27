$(document).ready(function(){
    $("#flip").click(function(){
      $("#panel").slideToggle("slow");
      $(this).text( $(this).text() == '+ more' ? "– less" : "+ more").css({"color": "#DE007A", "background-color": "white", "margin-top": "0px", "padding": "0;", "font-family": "open-sans, sans-serif", "font-weight": "600", "font-style": "normal", "font-size": "18px", "cursor": "pointer", "text-transform": "uppercase"});
    });
  });


// $(document).ready(function(){
//   $("#navCase").hover(function(){
//     $("#panel").slideDown("slow");
//   });
// });


/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
