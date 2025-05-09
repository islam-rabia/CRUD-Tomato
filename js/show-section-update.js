function showSectionUpdate() {
  let section = document.getElementById("update-section");
  let close = document.querySelector(".close-section");

  section.classList.add("active");

  close.addEventListener("click", () => {
    section.classList.remove("active");
  });
}

export { showSectionUpdate };
