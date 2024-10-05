// Função para esconder o loader e mostrar o conteúdo principal após 10 segundos com fade-out
function hideLoader() {
  document.addEventListener("DOMContentLoaded", function () {
    // Seleciona o elemento com o texto "Loading..."
    const textElement = document.getElementById("loading-text")

    if (textElement) {
      const text = textElement.textContent // Obtém o conteúdo do texto
      textElement.textContent = "" // Limpa o conteúdo original

      // Envolve todas as letras em spans ao mesmo tempo sem delay
      text.split("").forEach((letter) => {
        const span = document.createElement("span")
        span.textContent = letter
        span.classList.add("letter") // Aplica a animação de todas as letras ao mesmo tempo
        textElement.appendChild(span)
      })
    }

    // Inicia o fade-out após 10 segundos e mostra o conteúdo principal
    setTimeout(function () {
      const loader = document.getElementById("loader")
      const content = document.getElementById("content")

      if (loader) {
        loader.style.transition = "opacity 1.5s ease" // Transição suave da opacidade
        loader.style.opacity = "0" // Reduz a opacidade para 0 (desaparecendo)
      }

      // Após o fade-out (1.5s), esconde o loader e exibe o conteúdo principal
      setTimeout(function () {
        if (loader) {
          loader.style.display = "none" // Esconde o loader após o fade-out
        }
        if (content) {
          content.classList.remove("hidden") // Mostra o conteúdo principal
        }
      }, 1500) // Tempo de duração do fade-out (1.5s)
    }, 3000) // Ajuste o tempo conforme necessário (10s no total antes de iniciar o fade-out)
  })
}

// Chame a função diretamente
hideLoader()
