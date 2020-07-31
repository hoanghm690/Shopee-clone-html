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

function Validator(options) {
  var formElement = document.querySelector(options.form);
  if (formElement) {
    options.rules.forEach(function (rule) {
      console.log(rule.selector);
      var inputElement = formElement.querySelector(rule.selector);
      console.log(inputElement);
    });
  }
}

Validator.isRequired = function (selector, message) {
  return {
    selector: selector,
    test: function (value) {
      return value ? undefined : message || "Vui lòng nhập trường này";
    },
  };
};

Validator.isEmail = function (selector) {
  return {
    selector: selector,
    test: function (value) {
      var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      return regex.test(value) ? undefined : "Trường này phải là email";
    },
  };
};

Validator.minLength = function (selector, min) {
  return {
    selector: selector,
    test: function (value) {
      return value.length >= min
        ? undefined
        : `Vui lòng nhập tối thiểu ${min} kí tự`;
    },
  };
};

Validator.isConfirmed = function (selector, getConfirmValue, message) {
  return {
    selector: selector,
    test: function (value) {
      return value === getConfirmValue()
        ? undefined
        : message || `Giá trị nhập vào không chính xác`;
    },
  };
};

Validator({
  form: "#form-1",
  formGroupSelector: ".auth-form__group",
  errorSelector: ".form-message",
  rules: [
    Validator.isRequired("#sdt"),
    // Validator.isEmail("#email"),
    // Validator.isRequired("#password"),
    // Validator.minLength("#password", 6),
    // Validator.isRequired("#password_confirmation"),
    // Validator.isConfirmed(
    //   "#password_confirmation",
    //   function () {
    //     return document.querySelector("#form-1 #password").value;
    //   },
    //   "Mật khẩu nhập không chính xác"
    // ),
  ],
  // onSubmit: function (data) {
  //   //Call API
  //   console.log(data);
  // },
});
