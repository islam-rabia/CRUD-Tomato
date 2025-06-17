function sliderDashboard() {
  let btnBar = document.querySelector(".bar-btn");
  let slider = document.querySelector("aside");

  btnBar.addEventListener("click", () => {
    slider.classList.toggle("active");
  });
}

export { sliderDashboard };
