// Array de perguntas
const perguntas = [
    {
      pergunta: "Quem é o protagonista de Naruto Shippuden?",
      respostas: [
        "A) Sasuke Uchiha",
        "B) Sakura Haruno",
        "C) Naruto Uzumaki"
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o objetivo principal de Naruto no início de Naruto Shippuden?",
      respostas: [
        "A) Tornar-se Hokage",
        "B) Derrotar Orochimaru",
        "C) Tornar-se mais forte que Sasuke"
      ],
      correta: 0
    },
    {
      pergunta: "Quem é o mentor de Naruto durante sua jornada em Naruto Shippuden?",
      respostas: [
        "A) Kakashi Hatake",
        "B) Jiraiya",
        "C) Tsunade Senju"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o nome do grupo criminoso liderado por Pain em Naruto Shippuden?",
      respostas: [
        "A) Akatsuki",
        "B) Orochimaru",
        "C) Taka"
      ],
      correta: 0
    },
    {
      pergunta: "Quem é o irmão mais velho de Sasuke Uchiha em Naruto Shippuden?",
      respostas: [
        "A) Itachi Uchiha",
        "B) Madara Uchiha",
        "C) Obito Uchiha"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o nome da vila ninja onde Naruto e seus amigos vivem em Naruto Shippuden?",
      respostas: [
        "A) Vila da Folha",
        "B) Vila da Areia",
        "C) Vila da Nuvem"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o nome da habilidade especial de Naruto Shippuden que envolve a manipulação de energia espiritual?",
      respostas: [
        "A) Rasengan",
        "B) Chidori",
        "C) Senjutsu"
      ],
      correta: 2
    },
    {
      pergunta: "Quem é o mentor de Sasuke Uchiha em Naruto Shippuden?",
      respostas: [
        "A) Orochimaru",
        "B) Itachi Uchiha",
        "C) Kakashi Hatake"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o nome da organização secreta que Orochimaru fundou em Naruto Shippuden?",
      respostas: [
        "A) Akatsuki",
        "B) Taka",
        "C) Os Cinco Kages"
      ],
      correta: 1
    },
    {
      pergunta: "Quem é o pai de Naruto Uzumaki em Naruto Shippuden?",
      respostas: [
        "A) Minato Namikaze",
        "B) Jiraiya",
        "C) Hiruzen Sarutobi"
      ],
      correta: 0
    }
  ];
  
  // Local das perguntas
  const quiz = document.querySelector("#quiz")
  // Template de uma pergunta
  const template = document.querySelector("template")
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarAcertos = document.querySelector("#acertos span")
  mostrarAcertos.textContent = corretas.size + " de " + totalDePerguntas
  
  // Loop ou laço de repetição
  for (const item of perguntas) {
    // Clone da estrutura HTML da pergunta
    const quizItem = template.content.cloneNode(true)
  
    // Altera o titulo da pergunta
    quizItem.querySelector("h3").textContent = item.pergunta
    
    // Loop nas respostas
    for (const resposta of item.respostas) {
      // Clone de uma resposta
      const dt = quizItem.querySelector("dl dt").cloneNode(true)
  
      // Altera o texto da resposta
      dt.querySelector("span").textContent = resposta
  
      // Mudar o atributo name do input
      dt.querySelector("input").setAttribute("name", "pergunta-" + perguntas.indexOf(item))
  
      dt.querySelector("input").value = item.respostas.indexOf(resposta)
  
      dt.querySelector("input").onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
  
        corretas.delete(item)
        if (estaCorreta) {
          corretas.add(item)
        }
        
        mostrarAcertos.textContent = corretas.size + " de " + totalDePerguntas
      }
  
      // Adiciona a resposta a "lista"
      quizItem.querySelector("dl").appendChild(dt)
    }
  
    // Remove a resposta template
    quizItem.querySelector("dl dt").remove()
  
    // Acrescenta a pergunta no quiz
    quiz.appendChild(quizItem)
  }