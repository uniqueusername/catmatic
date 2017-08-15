var categorySelector;

function mobileCheck() {
  if (window.innerWidth < window.innerHeight) {
    alert("Hey, it looks like you're running on mobile (or just a weird vertical monitor)! This website is designed to run in landscape mode so it's highly recommended you turn your phone (or monitor).");
  }
}

function navigateToCategory() {
  categorySelector = document.getElementById('choose-contestant');
  window.location = "contestants/" + categorySelector.value + ".html";
}
