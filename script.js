const form = document.getElementById("form");
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
    ", Ella is sending her pure and Divine Love to you through her gaze in the photograph below. Bask in the feeling of complete Love and understanding, for Ella understands the truest nature of every being as Love. Look into Her eyes for as long as you wish, then go about your day feeling blessed";
  const blessDiv = document.getElementById("blessing");
  console.log(blessDiv);
  console.log(blessDiv.className);
  if (blessDiv.className === "hide") {
    blessDiv.setAttribute("class", "show");
  } else {
    return;
  }
});
