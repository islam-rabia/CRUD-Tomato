let linksList = document.querySelector(".links__list");
let links = linksList.querySelectorAll("li");

let sectionAddItem = document.getElementById("addItem");
let sectionListItems = document.getElementById("listItems");

function linkManagement() {
  links.forEach((link) => {
    link.addEventListener("click", () => {
      if (
        link.getAttribute("data-link") === sectionAddItem.getAttribute("id")
      ) {
        sectionAddItem.style.display = "grid";
        sectionListItems.style.display = "none";
      } else {
        sectionAddItem.style.display = "none";
        sectionListItems.style.display = "block";
      }
    });
  });
}

export { linkManagement };
