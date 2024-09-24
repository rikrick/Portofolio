var icon = document.getElementById("icon");

icon.onclick = function () {
  document.body.classList.toggle("darkmode");
  if (document.body.classList.contains("darkmode")) {
    icon.src = "Img/sun.svg";
  } else {
    icon.src = "Img/moon.svg";
  }
};
