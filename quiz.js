function submitQuiz() {
    // Respostas corretas
    const answers = {
        q1: "Alan Turing",
        q2: "HTML",
        q3: "HyperText Transfer Protocol",
        q4: "Microsoft",
        q5: "CSS",
        q6: "Google",
        q7: "Teclado",
        q8: "Uniform Resource Locator"
    };

    let score = 0;
    const total = Object.keys(answers).length;

    // Limpar estilos anteriores
    document.querySelectorAll("fieldset").forEach(q => q.classList.remove("correct", "incorrect"));

    // Verificar respostas
    for (const question in answers) {
        const selected = document.querySelector(`input[name="${question}"]:checked`);
        const fieldset = document.querySelector(`input[name="${question}"]`).closest("fieldset");

        if (selected && selected.value === answers[question]) {
            score++;
            fieldset.classList.add("correct");
        } else {
            fieldset.classList.add("incorrect");
        }
    }

    // Calcular porcentagem
    const percent = Math.round((score / total) * 100);

    // Atualizar resultado na tela
    const result = document.getElementById("result");
    result.textContent = `Você acertou ${score} de ${total} (${percent}%).`;

    // Atualizar barra de progresso
    const progressBar = document.getElementById("progressBar");
    progressBar.style.width = `${percent}%`;
    progressBar.textContent = `${percent}%`;

    // Confete se gabaritar
    if (percent === 100) {
        confetti({ particleCount: 150, spread: 100, origin: { y: 0.6 } });
        setTimeout(() => {
            confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
        }, 1000);
        result.textContent += " 🎉 Parabéns! Você gabaritou!";
    }

    // Salvar no ranking
    const name = localStorage.getItem("userName") || "Usuário";
    const email = localStorage.getItem("userEmail") || "email@exemplo.com";
    let ranking = JSON.parse(localStorage.getItem("ranking")) || [];

    ranking.push({
        name,
        email,
        score,
        percent,
        date: new Date().toLocaleString()
    });

    // Ordenar ranking por pontuação
    ranking.sort((a, b) => b.score - a.score);
    localStorage.setItem("ranking", JSON.stringify(ranking));

    // Redirecionar para ranking após 2 segundos
    setTimeout(() => {
        window.location.href = "ranking.html";
    }, 2000);
}
