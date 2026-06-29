document.addEventListener("DOMContentLoaded", function() {
  const aboutModal = document.getElementById("about__modal");
  const openModal = document.getElementById("launch__modal");
  const closeModal = document.querySelector(".close-modal-button");

  openModal.addEventListener("click", (event) => {
    event.preventDefault();
    aboutModal.style.display = "block";
  });

  closeModal.addEventListener("click", () => {
    aboutModal.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target === aboutModal) {
      aboutModal.style.display = "none";
    }
  });
});
