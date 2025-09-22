// Captura o formulário de cadastro
const form = document.getElementById("registrationForm");

// Adiciona um evento de envio ao formulário
form.addEventListener("submit", (event) => {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Captura os valores dos campos
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    // Armazena os dados no localStorage
    localStorage.setItem("userName", name);
    localStorage.setItem("userEmail", email);

    // Redireciona para a página do quiz
    window.location.href = "quiz.html";
});