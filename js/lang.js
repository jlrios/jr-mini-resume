const langToggleButton = document.querySelector("#toggle-button-lang");
const langStorageKey = "preferred-language";
const defaultLang = "ES";

function loadLanguage() {
  console.log(langToggleButton);
  const langDefault = localStorage.getItem(langStorageKey) || defaultLang;
  console.log(langDefault);
  setLanguage(langDefault);
}

function setLanguage(currentLang) {
  console.log("Setting language to:", currentLang);
  localStorage.setItem(langStorageKey, currentLang);
}

loadLanguage();

langToggleButton.addEventListener("click", () => {
  let currentLang = defaultLang
  if (currentLang === "ES") {
    currentLang = "EN"  
  } else {  
    currentLang = "ES"  
  }
  setLanguage(currentLang);
});