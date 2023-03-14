window.addEventListener("DOMContentLoaded", () => {
  const btnS = document.getElementById("salva");
  btnS.onclick = saveName;
  const btnR = document.getElementById("rimuovi");
  btnR.onclick = removeName;
});

const saveName = () => {
  const input = document.getElementById("name").value;
  localStorage.setItem("username", input);
  document.getElementById("form").reset();
};
const checkInLocalStorage = () => {
  const userIn = localStorage.getItem("username");
  return userIn;
};
const removeName = () => {
  if (checkInLocalStorage()) {
    localStorage.removeItem("username");
  }
};

let cont = document.getElementById("contatore");
let increase = parseInt(sessionStorage.getItem("lastVal")) || 0;

setInterval(function () {
  cont.innerHTML = increase++;
  sessionStorage.setItem("lastVal", increase);
}, 1000);

//da settare la session storage
