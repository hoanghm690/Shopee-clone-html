var modalRegistration = document.getElementById("my-dialog-registration");
var btnRegistration = document.querySelector(
  ".header__navbar-item-links--registration"
);

var modalLogin = document.getElementById("my-dialog-login");
var btnLogin = document.querySelector(".header__navbar-item-links--login");

var linkRegistration = document.getElementById("links-registration");
var linkLogin = document.getElementById("links-login");

linkRegistration.onclick = function () {
  modalLogin.style.display = "none";
  modalRegistration.style.display = "block";
};
linkLogin.onclick = function () {
  modalRegistration.style.display = "none";
  modalLogin.style.display = "block";
};

btnRegistration.onclick = function () {
  modalRegistration.style.display = "block";
};

btnLogin.onclick = function () {
  modalLogin.style.display = "block";
};

window.onclick = function (event) {
  if (event.target == modalRegistration) {
    modalRegistration.style.display = "none";
  }
  if (event.target == modalLogin) {
    modalLogin.style.display = "none";
  }
};
