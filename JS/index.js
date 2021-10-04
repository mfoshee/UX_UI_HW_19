$(document).ready(function(){
    $("#flip").click(function(){
      $("#panel").slideToggle("slow");
      $(this).text( $(this).text() == '+ more' ? "– less" : "+ more").css({"color": "#DE007A", "background-color": "white", "margin-top": "0px", "padding": "0;", "font-family": "open-sans, sans-serif", "font-weight": "600", "font-style": "normal", "font-size": "18px", "cursor": "pointer", "text-transform": "uppercase"});
    });
  });

 


  function openNav() {
    document.getElementById("myNav").style.width = "100%";
  };
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  };



  $('.carousel').carousel({
    interval: 2000
  })