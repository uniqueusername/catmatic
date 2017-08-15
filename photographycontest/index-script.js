var categorySelector;

function navigateToCategory() {
  categorySelector = document.getElementById('choose-contestant');
  window.location = "contestants/" + categorySelector.value + ".html";
}
