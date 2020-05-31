$(function () { // Same as document.addEventListener("DOMContentLoaded"...
  $("navbar-collapse").blur(function(){
  alert("This input field has lost its focus.");
});
  // Same as document.querySelector("#navbarToggle").addEventListener("blur",...
  $(".navbar-toggler").blur(function () {
    var screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      $(".navbar-collapse").collapse('hide');
    }
  });

  // In Firefox and Safari, the click event doesn't retain the focus
  // on the clicked button. Therefore, the blur event will not fire on
  // user clicking somewhere else in the page and the blur event handler
  // which is set up above will not be called.
  // Refer to issue #28 in the repo.
  // Solution: force focus on the element that the click event fired on
   $(".navbar-toggler").click(function (event) {
     $(event.target).focus();
   });
 });