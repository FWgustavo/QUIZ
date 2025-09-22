function submitQuiz() {
    const answers = {
        q1: "Alan Turing",
        q2: "HTML",
        q3: "HyperText Transfer Protocol",
        q4: "Microsoft"
    };

    let score = 0;

    // Limpar estilos anteriores
    const questions = document.querySelectorAll("fieldset");
    questions.forEach((question) => {
        question.classList.remove("correct", "incorrect");
    });

    // Verificar respostas
    for (const question in answers) {
        const selected = document.querySelector(`input[name="${question}"]:checked`);
        const questionElement = document.querySelector(`input[name="${question}"]`).closest("fieldset");

        if (selected && selected.value === answers[question]) {
            score++;
            questionElement.classList.add("correct");
        } else {
            questionElement.classList.add("incorrect");
        }
    }

    // Exibir resultado
    const result = document.getElementById("result");
    result.textContent = `Você acertou ${score} de ${Object.keys(answers).length} perguntas.`;
}