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

const contP = document.getElementById("contatore");

const contatore = sessionStorage.getItem("contatore");
if (!contatore) {
  contatore = 0;
}

setInterval(() => {
  contatore++;
  contP.textContent = contatore;
  sessionStorage.setItem("contatore", contatore);
}, 1000);

//da settare la session storage
