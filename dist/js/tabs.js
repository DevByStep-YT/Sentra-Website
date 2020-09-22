let tabcontents = document.querySelectorAll(".tabcontent");
let tabs = document.querySelectorAll(".blog-tab");

function changeActiveTab(clickedTab) {
  // remove previous active tabs
  tabs.forEach((tab) => tab.classList.remove("active"));

  clickedTab.classList.add("active");
}

function changeTabContent(month) {
  // remove previous active tabcontents
  tabcontents.forEach((tabcontent) =>
    tabcontent.setAttribute("style", "display: none")
  );

  document.getElementById(month).setAttribute("style", "display: block");
}

function openBlogs(e, month) {
  e.stopImmediatePropagation();
  //e.currentTarget - points to the element that you attached the listener
  let clickedTab = e.currentTarget;

  changeActiveTab(clickedTab);
  changeTabContent(month);
}
