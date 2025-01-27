/**
 * Inicializa a funcionalidade de navegação por abas (tab navigation).
 * 
 * Esta função alterna entre os conteúdos correspondentes às abas clicadas
 * e adiciona uma animação estilo "accordion" para maior interatividade.
 */
function initializeTabNavigation() {
  // Seleciona os itens do menu de abas e as seções de conteúdo
  const tabMenuItems = document.querySelectorAll(".js-tabmenu li");
  const tabContentSections = document.querySelectorAll(".js-tabcontent section");

  // Adiciona a classe "ativo" ao primeiro conteúdo para inicializar o estado
  if (tabContentSections.length) {
    tabContentSections[0].classList.add("active");
  }

  // Verifica se os elementos existem antes de continuar
  if (tabMenuItems.length && tabContentSections.length) {
    /**
     * Ativa a aba correspondente e aplica animações estilo "accordion".
     * 
     * @param {number} index - O índice do item do menu clicado.
     */
    function activateTab(index) {
      // Remove a classe "active" de todas as seções de conteúdo
      tabContentSections.forEach((section) => {
        section.classList.remove("active");
        section.style.maxHeight = null; // Remove altura definida para a animação
      });

      // Adiciona a classe "active" e aplica animação na seção correspondente
      const activeSection = tabContentSections[index];
      activeSection.classList.add("active");
      activeSection.style.maxHeight = activeSection.scrollHeight + "px"; // Define a altura máxima com base no conteúdo
    }

    // Adiciona o evento de clique para cada item do menu
    tabMenuItems.forEach((menuItem, index) => {
      menuItem.addEventListener("click", () => activateTab(index));
    });
  }
}

// Inicializa a navegação por abas
initializeTabNavigation();
