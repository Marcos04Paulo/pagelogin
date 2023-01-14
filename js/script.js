const passInput = document.querySelector(".user-box input");
const toggleIcon = document.querySelector(".user-box .alternar");
const ripple = document.querySelector(".user-box .mudar");
const percentBar = document.querySelector(".nivel-forca span");
const passLabel = document.querySelector(".forca-label");

passInput.addEventListener("input", handlePassInput);

toggleIcon.addEventListener("click", togglePassInput);

function handlePassInput(e){
  if (passInput.value.length === 0){
    passLabel.innerHTML = "Strength";
    addClass();
  } else if (passInput.value.length <= 4){
    passLabel.innerHTML = "Weak";
    addClass("fraco");
  } else if (passInput.value.length <= 7) {
    passLabel.innerHTML = "Not bad";
    addClass("medio");
  } else {
    passLabel.innerHTML = "Strong";
    addClass("forte");
  }
}

function addClass(className) {
  percentBar.classList.remove("fraco");
  percentBar.classList.remove("medio");
  percentBar.classList.remove("forte");
  if (className){
    percentBar.classList.add(className);
  }
}

function togglePassInput(e){
  const type = passInput.getAttribute("type");
  if (type === "password"){
    passInput.setAttribute("type", "text");
    toggleIcon.innerHTML = "X";
    ripple.style.cssText = `
    border-radius: 4px;
    width: 100%;
    heigth: 100%;
    right: 0;
    z-index: -1;
    `;
    passInput.style.color = "#fff";
    passInput.style.background = "transparent";
    toggleIcon.style.fontSize = "20px";    
  } else {
    passInput.setAttribute("type", "password");
    toggleIcon.innerHTML = "X"
    toggleIcon.style.fontSize = "20px";
    ripple.style.cssText = `
    border-radius: 50%;
    height: 35px;
    width: 35px;
    right: 10px;
    z-index: 1;
    `;
    passInput.style.color = "#fff";
  }
}