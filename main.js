$(function(){
  $("#humberger").on("click" , function() {
    $("#menuList").slideToggle();
    $("#menuList").toggleClass("#active");
  });
});