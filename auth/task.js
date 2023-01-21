const formAuth = document.getElementById("signin");
const welcomeForm = document.getElementById("welcome");
const userIdLS = localStorage.getItem("id");
const signIn = new XMLHttpRequest();
const url = "https://students.netoservices.ru/nestjs-backend/auth";

window.onload = function () {
  if (userIdLS) {
    console.log(userIdLS)
    authSelect();
  }
};

function authSelect(id) {
  document.getElementById("user_id").textContent = id;
  formAuth.classList.remove("signin_active");
  welcomeForm.classList.add("welcome_active");
}

function postData(signIn, url, form) {
  signIn.open("POST", url);
  signIn.send(form);
}

signIn.addEventListener("readystatechange", () => {
  if (signIn.readyState == 4 && signIn.status === 201) {
    const response = JSON.parse(signIn.responseText);
    if (response.success) {
      const userID = JSON.parse(signIn.responseText).user_id;
      localStorage.setItem("id", userID);
      authSelect(userID);
    } else {
      alert('Неверный логин или пароль!')
    }
  }
});

document.body.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.matches(".btn")) {
    const userForm = new FormData(document.getElementById("signin__form"));
    if (userForm.get("login") === "" || userForm.get("password") === "") {
      alert(
        userForm.get("login") === ""
          ? "Поле LOGIN пустое!"
          : "Поле PASSWORD пустое!"
      );
      return false;
    }
    postData(signIn, url, userForm);
  }
});