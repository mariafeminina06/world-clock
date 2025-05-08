function switchModes() {
  let body = document.querySelector("body");

  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
    themeButton.innerHTML = "Dark mode";
  } else {
    body.classList.add("dark");
    themeButton.innerHTML = "Light mode";
  }
}

let themeButton = document.querySelector("button");
themeButton.addEventListener("click", switchModes);
