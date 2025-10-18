const langToggleButton = document.querySelector("#toggle-button-lang");
const langStorageKey = "preferred-language";
const defaultLang = "ES";

function loadLanguage() {
  console.log(langToggleButton);
  const langDefault = localStorage.getItem(langStorageKey) || defaultLang;
  console.log("default: " + langDefault);
  setLanguage(langDefault);
}

function setLanguage(currentLang) {
  console.log("Setting language to:", currentLang);
  localStorage.setItem(langStorageKey, currentLang);
}

loadLanguage();

console.log ("Current lang >>> " + defaultLang);

langToggleButton.addEventListener("click", () => {
  let currentLang = defaultLang
  if (currentLang === "ES") {
    console.log("Switching to ES");
    langToggleButton.style.backgroundImage = "var(--world-dark)";
    langToggleButton.style.display = "flex";
    //langToggleButton.style.justifyContent = "flex-end";
    currentLang = "EN"  
  } else {  
    console.log("Switching to EN");
    currentLang = "ES" 
    langToggleButton.style.display = "flex";
   
    langToggleButton.style.justifyContent = "flex-end";
  }
  setLanguage(currentLang);
});