let ranking = JSON.parse(localStorage.getItem("ranking"))||[];
const container = document.querySelector(".container");
ranking.sort((a,b)=>b.score-a.score);

ranking.forEach((user,index)=>{
    const card = document.createElement("div");
    card.classList.add("card-ranking");
    if(index===0) card.classList.add("first");
    else if(index===1) card.classList.add("second");
    else if(index===2) card.classList.add("third");
    card.innerHTML = `
        <span>#${index+1}</span>
        <span>${user.name}</span>
        <span>${user.email}</span>
        <span>${user.score} pts</span>
        <span>${user.percent}%</span>
        <span>${user.date}</span>
    `;
    container.appendChild(card);
});

const btnCadastro = document.createElement("a");
btnCadastro.href="index.html";
btnCadastro.className="btn btn-success mt-3";
btnCadastro.textContent="Voltar ao Cadastro";
container.appendChild(btnCadastro);

document.getElementById("resetRanking").addEventListener("click", () => {
    if(confirm("Tem certeza que deseja reiniciar o ranking?")) {
        localStorage.removeItem("ranking"); // Remove apenas o ranking
        location.reload(); // Recarrega a página
    }
});

