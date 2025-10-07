$(function () {
  function validateFullName() {
    let fullName = $("#fullname").val().trim();
    let nameRegex = /^[A-Za-zÀ-ÿ]+(?:\s+[A-Za-zÀ-ÿ]+)+$/;
  
    if (fullName === "") {
      $("#namecheck").show().text("Full name is required.");
      return false;
    } else if (!nameRegex.test(fullName)) {
      $("#namecheck").show().text("Enter at least two words with only letters.");
      return false;
    } else {
      $("#namecheck").hide();
      return true;
    }
  }

  function validateEmail() {
    let email = $("#email").val().trim();
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
      $("#emailcheck").show().text("Email is required.");
      return false;
    } else if (!emailRegex.test(email)) {
      $("#emailcheck").show().text("Enter a valid email address.");
      return false;
    } else {
      $("#emailcheck").hide();
      return true;
    }
  }

  function validatePhone() {
    let phone = $("#phone").val().trim();
    let phoneRegex = /^\d+$/;

    if (phone === "") {
      $("#phonecheck").show().text("Phone number is required.");
      return false;
    } else if (!phoneRegex.test(phone)) {
      $("#phonecheck").show().text("Phone number must contain only digits and no spaces.");
      return false;
    } else {
      $("#phonecheck").hide();
      return true;
    }
  }

  function validatePassword() {
    let password = $("#password").val();
    let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    if (password === "") {
      $("#passwordcheck").show().text("Password is required.");
      return false;
    } else if (!passwordRegex.test(password)) {
      $("#passwordcheck").show().text("Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one number.");
      return false;
    } else {
      $("#passwordcheck").hide();
      return true;
    }
  }

  $("#register-button").click(function () {
    // * función anónima como wrapper
    $("#main-container").hide();
    $("#form-container").show();
  });

  $("#cancel-button").click(function () {
    $("#form-container").hide();
    $("#main-container").show();
  });

  $("#form-container").on("submit", function (e) {
    e.preventDefault();

    $("#fullname").on("blur", validateFullName);
    $("#email").on("blur", validateEmail);
    $("#phone").on("blur", validatePhone);
    $("#password").on("blur", validatePassword);

    let isNameValid = validateFullName();
    let isEmailValid = validateEmail();
    let isPhoneValid = validatePhone();
    let isPasswordValid = validatePassword();

    if (isNameValid && isEmailValid && isPhoneValid && isPasswordValid) {
      alert("Registration successfully completed");
      this.reset();
    }
  });
});

