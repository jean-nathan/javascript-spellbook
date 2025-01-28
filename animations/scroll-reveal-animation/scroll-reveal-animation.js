/**
 * Inicializa a animação ao rolar a página.
 *
 * Elementos com a classe "js-scroll" serão animados ao entrar na área visível da janela.
 */
function initializeScrollAnimation() {
  // Seleciona todas as seções com a classe "js-scroll"
  const sections = document.querySelectorAll(".js-scroll");

  // Define o ponto de ativação da animação (60% da altura da janela)
  const triggerHeight = window.innerHeight * 0.6;

  /**
   * Função que verifica a posição de cada seção
   * e ativa/desativa a animação com base na visibilidade.
   */
  function animateOnScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isVisible = sectionTop - triggerHeight < 0;

      if (isVisible) {
        section.classList.add("ativo");
      } else {
        section.classList.remove("ativo");
      }
    });
  }

  // Verifica as seções ao carregar a página
  animateOnScroll();

  // Adiciona o evento de scroll para atualizar a animação dinamicamente
  window.addEventListener("scroll", animateOnScroll);
}

// Inicializa a animação
initializeScrollAnimation();
