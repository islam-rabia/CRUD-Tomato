let linksList = document.querySelector(".links__list");
let links = linksList.querySelectorAll("li");

function addActive() {
  links.forEach((link) => {
    link.addEventListener("click", () => {
      links.forEach((link) => {
        link.classList.remove("active");
      });
      link.classList.add("active");
    });
  });
}

export { addActive };
