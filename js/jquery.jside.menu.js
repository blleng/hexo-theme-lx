(function($){
     $.fn.jSideMenu = function(options){
    var setting = $.extend({
        jSidePosition: "position-right", //possible options position-left or position-right 
        jSideSticky: true, // menubar will be fixed on top, false to set static
        jSideTransition: 400, //Define the transition duration in milliseconds 
        }, options);
  return this.each(function() {
  var jSide, target, headHeight, devHeight, dHeading,menuTrigger,arrow, dimBackground;   
        target = $(this);
//Accessing DOM
  jSide = $(".menu-container, .menu-head");
  devHeight = $(window).height();
  headHeight = $(".menu-head").height();
  dHeading = $(".dropdown-heading");
  menuTrigger = $(".hamburger");
  arrow = $("<i></i>");
  dimBackground = $("<div>");
// Set the height of side menu according to the available height of device
$(target).css({
    "height" : devHeight-headHeight,
});
    if (setting.jSideSticky === true){
     $(".menubar").addClass("sticky");
}  else{
     $(".menubar").removeClass("sticky");
   }
$(jSide).addClass(setting.jSidePosition);
$(".hamburger").addClass("right");
//Dropdown Arrow
    $(arrow).addClass("fa fa-chevron-down").appendTo(dHeading);
//Dropdowns
$(dHeading).click(function(){
   $(this).parent().find("ul").slideToggle(setting.jSideTransition);
   $(this).find(".fa-chevron-down").toggleClass("fa-down");
    
 });
$(menuTrigger).click(function(){
   $(jSide).toggleClass("open");
   $(dimBackground).show(setting.jSideTransition);
   $(".hamburger").toggleClass("is-active");
   $(".menu").removeClass("visibility");
});
   $(window).click(function(e) {
    if ($(e.target).closest(".hamburger").length){
     return;}
    if ($(e.target).closest(jSide).length){
     return;}
 $(jSide).removeClass("open");
    if (!$(jSide).hasClass("open")) {
     $(dimBackground).hide(setting.jSideTransition);
        }
      $(".hamburger").removeClass("is-active");
      });
   });
 };
})(jQuery);
