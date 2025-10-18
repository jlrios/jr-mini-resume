const translations = {
  es: [
    {
      "Title": "Hola, permiteme presentarme",
      "Name": "José Ríos",
      "Role": "Ingeniero de Software"
    },
    {
      "About": "Sobre mí",
      "Experience": "Experiencia",
      "Activities": ["Web applciations", "QA testing", "Technical support"],
      "Description": "Dedicado al aprendizaje constante y a perfeccionar mis habilidades con las tecnologías más recientes."
    }
  ],
  en:[
    {   
      "Title": "Hello, I am",
      "Name": "José Ríos",
      "Role": "Software Engineer"
    }
  ] 
}

const switchLanguage = document.querySelector('#toggle-button-lang');
const rootLang = document.querySelector(":root");

console.log("Button -> " + switchLanguage);

let currentLanguage = 'es';

/*
switchLanguage.addEventListener('click', () => {
  if (rootLang.classList.contains("dark-mode")) {
    console.log("DARK MODE");
    switchLanguage.style.backgroundImage = "var(--world-dark)";
  } else {
    console.log("LIGHT MODE");
    switchLanguage.style.backgroundImage = "var(--world-light)";
  }









});*/

function updateContent() {
  const content = translations[currentLanguage][0];
  console.log("CONTENT -> " + content.Title);
  /*document.getElementById('title').textContent = content.Title;
  document.getElementById('name').textContent = content.Name;
  document.getElementById('role').textContent = content.Role;

  if (currentLanguage === 'es') {
    const aboutContent = translations[currentLanguage][1];
    document.getElementById('about-title').textContent = aboutContent.About;
    document.getElementById('experience-title').textContent = aboutContent.Experience;
    document.getElementById('activities').innerHTML = aboutContent.Activities.map(activity => `<li>${activity}</li>`).join('');
    document.getElementById('description').textContent = aboutContent.Description;
  } else {
    document.getElementById('about-title').textContent = '';
    document.getElementById('experience-title').textContent = '';
    document.getElementById('activities').innerHTML = '';
    document.getElementById('description').textContent = '';
  }*/
}

// Initial content load
updateContent();

/*switchLanguage.addEventListener('click', () => {
  currentLanguage = currentLanguage === 'es' ? 'en' : 'es';
  updateContent();
});*/

