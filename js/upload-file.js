function uploadFile() {
  let input = document.getElementById("upload");
  let uploadImage = document.getElementById("upload-image");
  let img = uploadImage.querySelector("img");
  let p = uploadImage.querySelector("p");

  input.addEventListener("change", () => {
    let file = input.files[0];

    if (file) {
      img.src = `./image/${file.name}`;
      img.style.cssText = `
        width: 100%;
        height: 100%;
        object-fit: cover
      `;
      p.style.display = "none";
    }
  });
}

export { uploadFile };
