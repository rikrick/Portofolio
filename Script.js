var icon = document.getElementById("icon");

icon.onclick = function () {
  document.body.classList.toggle("darkmode");
  if (document.body.classList.contains("darkmode")) {
    icon.src = "Img/sun.svg";
  } else {
    icon.src = "Img/moon.svg";
  }
};

const nmenus = document.querySelector(".menus");

document.querySelector("#hamburger-menu").onclick = () => {
  nmenus.classList.toggle("active");
};

const hm = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !nmenus.contains(e.target)) {
    nmenus.classList.remove("active");
  }
});
