const modalwindow = document.getElementById("subscribe-modal");

window.onload = function () {
    if (!document.cookie.includes('closeWindow=true')){
        openwindow();
    }
}

function openwindow() {
  modalwindow.classList.add("modal_active");
}

function closewindow() {
  modalwindow.classList.remove("modal_active");
}

document.body.addEventListener("click", (event) => {
    event.preventDefault();

  if (event.target.matches(".modal__close_times")) {
    document.cookie = 'closeWindow=true'
    closewindow();
  }
});

