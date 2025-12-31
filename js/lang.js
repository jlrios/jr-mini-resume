const langToggleButton = document.querySelector("#toggle-button-lang");
const langToggle = document.querySelector(".color-mode-lang")

function loadLanguage() {
  const langDefault = localStorage.getItem(langStorageKey) || defaultLang;
  setLanguage(langDefault);
}

function setLanguage(currentLang) {
  localStorage.setItem(langStorageKey, currentLang);
}

function switchLanguage(setLang) {
  document.querySelectorAll("[data-es]").forEach(el => {
    el.textContent = el.getAttribute(`data-${setLang}`);
  });
}

loadLanguage();

langToggleButton.addEventListener("click", () => {
  console.log(activeCorner);
  const styles = window.getComputedStyle(langToggle);
  const currentJustify = styles.justifyContent;

  if (currentJustify === "flex-end") {
    langToggle.style.justifyContent = "flex-start";
    currentLang = "en";
    setLanguage(currentLang);
    switchLanguage(currentLang);
  } else {
    langToggle.style.justifyContent = "flex-end";
    currentLang = "es";
    setLanguage(currentLang);
    switchLanguage(currentLang);
  }

  if (activeCorner === "top-left") {
    currentLang === "en" ? tlBtn.innerHTML = "&uarr;<br/>About me" : tlBtn.innerHTML = "&uarr;<br/>Sobre mí";
  }

  if (activeCorner === "top-right") {
    currentLang === "en" ? trBtn.innerHTML = "&uarr;<br/>Tech Skills" : trBtn.innerHTML = "&uarr;<br/>Habilidades";
  }

  if (activeCorner === "bottom-left") {
    currentLang === "en" ? blBtn.innerHTML = "Projects<br/>&darr;" : blBtn.innerHTML = "Proyectos<br/>&darr;";
  }

  if (activeCorner === "bottom-right") {
    currentLang === "en" ? brBtn.innerHTML = "Contact<br/>&darr;" : brBtn.innerHTML = "Contacto<br/>&darr;";
  }

  // We keep it visible.
  langToggle.style.display = "inline-flex";
});