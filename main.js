$(document).ready(function() {
  $(".letter").hover(
    function() {
      getLetterData(this);
    },
    function() {
      resetLetterData();
    }
  );
});

function menutoggle(x) {
  x.classList.toggle("change");
  $(".menu-container").toggleClass("change");
  $(".menu-item").toggleClass("change");
}

function resetLetterData() {
  var text = "";
  var cat = $("#category");
  text = "";
  $("#category-text").text(text);
  cat.css("width", "0%");
}

function getLetterData(x) {
  var text = "";
  var cat = $("#category");
  switch (x.id) {
    case "s":
      console.log("S");
      break;
    case "m":
      console.log("M");
      break;
    case "a":
      console.log("A");
      break;
    case "r":
      console.log("R");
      break;
    case "t":
      console.log("T");
      break;
  }
  $("#category-text").text(text);
  cat.css("width", "1000%");
}
