


const toggleThemeButton = document.querySelector(".dark-mode-button")

function handleclick(){
    const isDarkMode = document.body.classList.toggle("dark-mode");
    const isSrc = isDarkMode
    ? "./assets/moon.png" 
    : "./assets/sun.png";
    document.querySelector(".dark-mode-button").setAttribute("src", isSrc);
}

toggleThemeButton.addEventListener("click", handleclick)