/**
 * Initializes smooth scrolling behavior for internal navigation links.
 * 
 * Esta função adiciona um comportamento de rolagem suave para links que possuem
 * o atributo `href` apontando para um elemento dentro da mesma página (ex: `#section1`).
 * 
 * Como usar:
 * 1. Adicione a classe `js-menu` no elemento pai dos links internos.
 * 2. Certifique-se de que os links internos têm o formato `href="#id-do-elemento"`.
 * 3. Chame `initializeSmoothScroll()` para ativar o comportamento.
 */

function initializeSmoothScroll() {
  // Seleciona todos os links internos no menu com a classe `js-menu`
  const internalLinks = document.querySelectorAll('.js-menu a[href^="#"]');

  /**
   * Realiza a rolagem suave até a seção correspondente ao link clicado.
   * @param {Event} event - O evento de clique capturado.
   */
  function handleScrollToSection(event) {
    event.preventDefault(); // Evita o comportamento padrão do link.

    // Obtém o href do link clicado e seleciona a seção correspondente.
    const href = event.currentTarget.getAttribute("href");
    const targetSection = document.querySelector(href);

    if (!targetSection) return; // Verifica se a seção existe antes de continuar.

    // Realiza a rolagem suave até a seção.
    targetSection.scrollIntoView({
      behavior: "smooth", // Rola suavemente até a seção.
      block: "start", // Alinha a seção no início da janela.
    });
  }

  // Adiciona o evento de clique a cada link interno encontrado.
  internalLinks.forEach((link) => {
    link.addEventListener("click", handleScrollToSection);
  });
}

// Inicializa o comportamento de rolagem suave.
initializeSmoothScroll();
