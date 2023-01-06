// === SliderDisplay  ====
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}
// =============================

// === SliderDisplay2  ====
var rating_slider = document.getElementById("ratingbar");
var rating_output = document.getElementById("score");
rating_output.innerHTML = rating_slider.value;

rating_slider.oninput = function() {
  rating_output.innerHTML = this.value;
}
// =============================

// === Comment_post_box  ====
function auto_grow(element) {
    element.style.height = "5px";
    element.style.height = (element.scrollHeight)+"px";
}
// =============================





