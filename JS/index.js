$(document).ready(function(){
    $("#flip").click(function(){
      $("#panel").slideToggle("slow");
      $(this).text( $(this).text() == '+ more' ? "– less" : "+ more").css({"color": "#DE007A", "background-color": "white", "margin-top": "0px", "padding": "0;", "font-family": "open-sans, sans-serif", "font-weight": "600", "font-style": "normal", "font-size": "18px", "cursor": "pointer", "text-transform": "uppercase"});
    });
  });

$(document).ready(function(){
  $("#navCase").hover(function(){
    $("#panel").slideDown("slow");
  });
});


