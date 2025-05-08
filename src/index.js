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
  //local data
  let localElement = document.querySelector(".local");
  localElement.innerHTML = moment().format("dddd, DD MMM YYYY, HH:mm:ss");

  //tokyo
  let tokyoElement = document.querySelector("#tokyo");
  if (tokyoElement) {
    let tokyoDateElement = tokyoElement.querySelector(".date");
    let tokyoTimeElement = tokyoElement.querySelector(".time");
    let tokyoTime = moment.tz("Asia/Tokyo").format("HH:mm:ss");
    tokyoDateElement.innerHTML = moment
      .tz("Asia/Tokyo")
      .format("dddd, DD MMM YYYY");
    tokyoTimeElement.innerHTML = `${tokyoTime}`;
  }

  //hcm
  let hcmElement = document.querySelector("#hcm");
  if (hcmElement) {
    let hcmDateElement = hcmElement.querySelector(".date");
    let hcmTimeElement = hcmElement.querySelector(".time");
    let hcmTime = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss");
    hcmDateElement.innerHTML = moment
      .tz("Asia/Ho_Chi_Minh")
      .format("dddd, DD MMM YYYY");
    hcmTimeElement.innerHTML = `${hcmTime}`;
  }

  //mnl
  let mnlElement = document.querySelector("#mnl");
  if (mnlElement) {
    let mnlDateElement = mnlElement.querySelector(".date");
    let mnlTimeElement = mnlElement.querySelector(".time");
    let mnlTime = moment.tz("Asia/Manila").format("HH:mm:ss");
    mnlDateElement.innerHTML = moment
      .tz("Asia/Manila")
      .format("dddd, DD MMM YYYY");
    mnlTimeElement.innerHTML = `${mnlTime}`;
  }

  //ams
  let amsElement = document.querySelector("#ams");
  if (amsElement) {
    let amsDateElement = amsElement.querySelector(".date");
    let amsTimeElement = amsElement.querySelector(".time");
    let amsTime = moment.tz("Europe/Amsterdam").format("HH:mm:ss");
    amsDateElement.innerHTML = moment
      .tz("Europe/Amsterdam")
      .format("dddd, DD MMM YYYY");
    amsTimeElement.innerHTML = `${amsTime}`;
  }
}

updateTime();
setInterval(updateTime, 1000);

//dropdown

function displayNewCity(event) {
  if (event.target.value.length > 0) {
    let timezone = event.target.value;
    let cityName = timezone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(timezone);
    let cityElement = document.querySelector(".cities");
    cityElement.innerHTML = ` <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("dddd DD MMM YYYY")}</div>
          </div>
          <div class="time">${cityTime.format("HH:mm:ss")}</div>
        </div>
        <a href="/">Back to home</a>`;
  }
}
let citySelect = document.querySelector("#city-options");
citySelect.addEventListener("change", displayNewCity);
