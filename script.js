const form = document.getElementById("form");
const header = document.getElementById("header");
const textToHide = document.getElementById("h2Hide");
const otherToHide = document.getElementById("h3Hide");
const formToHide = document.getElementById("formHide");
form.addEventListener("submit", function (e) {
  e.preventDefault();
});
const blessingBtn = document.getElementById("btn");
console.log("blessingBtn");
blessingBtn.addEventListener("click", function () {
  const name = document.getElementById("name").value;
  const namePlace = document.getElementById("nameRes");
  namePlace.textContent =
    name +
    ", I am sending my pure Love to you through my gaze in the photograph below. Look into my eyes and bask in the feeling of complete Love and understanding, for I understand your truest nature as Love. Remain in my gaze for as long as you wish, then go about your day feeling blessed";
  const blessDiv = document.getElementById("blessing");
  console.log(blessDiv);
  console.log(blessDiv.className);
  if (blessDiv.className === "hide") {
    blessDiv.setAttribute("class", "show");
    header.classList.add("hide");
    textToHide.classList.add("hide");
    otherToHide.classList.add("hide");
    formToHide.classList.add("hide");
  } else {
    return;
  }
});
