const userTextArea = document.getElementById("editor");
let draftLocalStorage = localStorage.getItem("draft");

window.onload = function () {
    userTextArea.value = draftLocalStorage
};

window.onunload = function() {
    localStorage.setItem('draft', userTextArea.value);
}
