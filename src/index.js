// dark mode
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

//city data

function updateTime() {
  //tokyo
  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");
  let tokyoTime = moment.tz("Asia/Tokyo").format("HH:mm:ss");
  tokyoDateElement.innerHTML = moment
    .tz("Asia/Tokyo")
    .format("dddd, DD MMM YYYY");
  tokyoTimeElement.innerHTML = `${tokyoTime}`;

  //hcm
  let hcmElement = document.querySelector("#hcm");
  let hcmDateElement = hcmElement.querySelector(".date");
  let hcmTimeElement = hcmElement.querySelector(".time");
  let hcmTime = moment.tz("Asia/Saigon").format("HH:mm:ss");
  hcmDateElement.innerHTML = moment
    .tz("Asia/Saigon")
    .format("dddd, DD MMM YYYY");
  hcmTimeElement.innerHTML = `${hcmTime}`;

  //mnl
  let mnlElement = document.querySelector("#mnl");
  let mnlDateElement = mnlElement.querySelector(".date");
  let mnlTimeElement = mnlElement.querySelector(".time");
  let mnlTime = moment.tz("Asia/Manila").format("HH:mm:ss");
  mnlDateElement.innerHTML = moment
    .tz("Asia/Manila")
    .format("dddd, DD MMM YYYY");
  mnlTimeElement.innerHTML = `${mnlTime}`;

  //ams
  let amsElement = document.querySelector("#ams");
  let amsDateElement = amsElement.querySelector(".date");
  let amsTimeElement = amsElement.querySelector(".time");
  let amsTime = moment.tz("Europe/Amsterdam").format("HH:mm:ss");
  amsDateElement.innerHTML = moment
    .tz("Europe/Amsterdam")
    .format("dddd, DD MMM YYYY");
  amsTimeElement.innerHTML = `${amsTime}`;
}

updateTime();
setInterval(updateTime, 1000);
