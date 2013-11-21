$(function() {
  $("body").on("input propertychange", ".search", function(e) {
    $(this).toggleClass("search-with-value", !!$(e.target).val());
  }).on("focus", ".search", function() {
    $(this).addClass("search-with-focus");
  }).on("blur", ".search", function() {
    $(this).removeClass("search-with-focus");
  });
});
