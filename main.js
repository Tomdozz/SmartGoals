$(document).ready(function() {
  $(".letter").hover(
    function() {
      getLetterData(this);
    },
    function() {}
  );
});
function menutoggle(x) {
  x.classList.toggle("change");
  $(".menu-container").toggleClass("change");
  $(".menu-item").toggleClass("change");
}
function getLetterData(x) {
    console.log(x);
}
