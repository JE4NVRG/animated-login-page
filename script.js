// Seleção dos elementos necessários
const container = document.getElementById("container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");

// Evento de clique para o botão de cadastro
registerBtn.addEventListener("click", () => {
  container.classList.add("active");
});

// Evento de clique para o botão de login
loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
});
