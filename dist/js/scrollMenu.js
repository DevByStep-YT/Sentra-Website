let allSections = [
  document.querySelector("header"),
  ...document.querySelectorAll("section"),
];

let sidebarItems = document.querySelectorAll(".sidebar-menu li");

let removeAllActive = () =>
  sidebarItems.forEach((item) => item.classList.remove("active"));

function setActive(element) {
  removeAllActive();

  element.classList.add("active");
}

function changeActiveMenu() {
  let fromTop = window.scrollY;

  sidebarItems.forEach((item) => {
    let link = item.querySelector("a");
    let dot = item.querySelector(".dot");
    let section = document.querySelector(link.hash);

    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      item.classList.add("active");
      dot.classList.add("active");
    } else {
      item.classList.remove("active");
      dot.classList.remove("active");
    }
  });
}

//change active menu on click
sidebarItems.forEach((item) =>
  item.addEventListener("click", () => setActive(item))
);

//change active menu on scroll
window.addEventListener("scroll", _.throttle(changeActiveMenu, 150));
