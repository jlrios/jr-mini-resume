const langToggleButton = document.querySelector("#toggle-button-lang");
const langToggle = document.querySelector(".color-mode-lang")
const langStorageKey = "preferred-language";
const defaultLang = "en";

function loadLanguage() {
  const langDefault = localStorage.getItem(langStorageKey) || defaultLang;
  setLanguage(langDefault);
}

function setLanguage(currentLang) {
  localStorage.setItem(langStorageKey, currentLang);
}

loadLanguage();

langToggleButton.addEventListener("click", () => {
  const styles = window.getComputedStyle(langToggle);
  const currentJustify = styles.justifyContent;

  if (currentJustify === "flex-end") {
    langToggle.style.justifyContent = "flex-start";
    currentLang = "en";
    switchLanguage(currentLang);
  } else {
    langToggle.style.justifyContent = "flex-end";
    currentLang = "es";
    switchLanguage(currentLang);
  }

  // We keep it visible.
  langToggle.style.display = "inline-flex";
});

function switchLanguage(setLang) {
  document.querySelectorAll("[data-es]").forEach(el => {
    el.textContent = el.getAttribute(`data-${setLang}`);
  });
}
