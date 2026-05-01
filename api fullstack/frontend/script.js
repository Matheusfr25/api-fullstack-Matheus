const API = "http://localhost:3000";

async function carregarAlunos() {
  const res = await fetch(`${API}/alunos`);
  const alunos = await res.json();

  const lista = document.getElementById("listaAlunos");
  lista.innerHTML = "";

  alunos.forEach(a => {
    const li = document.createElement("li");
    li.innerHTML = `${a.id} - ${a.nome} (${a.idade} anos)
    <button onclick="deletarAluno(${a.id})">❌</button>`;
    lista.appendChild(li);
  });
}

async function cadastrarAluno() {
  const nome = document.getElementById("nome").value;
  const idade = document.getElementById("idade").value;

  await fetch(`${API}/alunos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nome, idade })
  });

  carregarAlunos();
}

async function deletarAluno(id) {
  await fetch(`${API}/alunos/${id}`, { method: "DELETE" });
  carregarAlunos();
}

async function carregarNotas() {
  const res = await fetch(`${API}/notas`);
  const notas = await res.json();

  const lista = document.getElementById("listaNotas");
  lista.innerHTML = "";

  notas.forEach(n => {
    const li = document.createElement("li");
    li.innerHTML = `Aluno ${n.alunoId} - ${n.disciplina}: ${n.nota}`;
    lista.appendChild(li);
  });
}

async function cadastrarNota() {
  const alunoId = document.getElementById("alunoId").value;
  const disciplina = document.getElementById("disciplina").value;
  const nota = document.getElementById("nota").value;

  await fetch(`${API}/notas`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ alunoId, disciplina, nota })
  });

  carregarNotas();
}

carregarAlunos();
carregarNotas();