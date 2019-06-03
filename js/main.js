const tabItems = document.querySelectorAll(".tab-item");
const tabContentItem = document.querySelectorAll(".tab-content-item");

function selectItem(e) {
  removeBorder();
  removeShow();
  // Add Border
  this.classList.add("tab-border");
  ///
  const tapContentItems = document.querySelector(`#${this.id}-content`);
  tapContentItems.classList.add("show");
}

function removeBorder() {
  tabItems.forEach(item => item.classList.remove("tab-border"));
}

function removeShow() {
  tabContentItem.forEach(item => item.classList.remove("show"));
}

tabItems.forEach(item => item.addEventListener("click", selectItem));
