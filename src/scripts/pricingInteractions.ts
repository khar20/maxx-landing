type SegmentType = 'personal' | 'empresarial';

  // Función para actualizar la sección de precios basada en el segmento
  function updatePricingSection(segment: SegmentType): void {
    // Actualizar la visibilidad de las tarjetas según el segmento
    const personalCards = document.getElementById('personal-pricing-cards');
    const empresarialCards = document.getElementById('empresarial-pricing-cards');
    
    if (personalCards && empresarialCards) {
      if (segment === 'empresarial') {
        personalCards.classList.add('hidden');
        personalCards.classList.remove('block');
        empresarialCards.classList.remove('hidden');
        empresarialCards.classList.add('block');
      } else {
        empresarialCards.classList.add('hidden');
        empresarialCards.classList.remove('block');
        personalCards.classList.remove('hidden');
        personalCards.classList.add('block');
      }
    }
    
    // Actualizar la sección de ventajas empresariales
    const businessAdvantages = document.getElementById('business-advantages');
    if (businessAdvantages) {
      if (segment === 'empresarial') {
        businessAdvantages.classList.remove('hidden');
        businessAdvantages.classList.add('block');
      } else {
        businessAdvantages.classList.add('hidden');
        businessAdvantages.classList.remove('block');
      }
    }
    
    // Actualizar los enlaces activos en el selector de segmentos
    document.querySelectorAll('a[href^="?segment="], a[href^="/pricing?segment="]').forEach(link => {
      const href = link.getAttribute('href') || '';
      if (href.includes(`segment=${segment}`)) {
        link.classList.add('bg-white', 'dark:bg-gray-800', 'shadow', 'text-blue-600', 'dark:text-blue-400');
        link.classList.remove('text-gray-700', 'dark:text-gray-300', 'hover:bg-gray-200', 'dark:hover:bg-gray-600');
      } else {
        link.classList.remove('bg-white', 'dark:bg-gray-800', 'shadow', 'text-blue-600', 'dark:text-blue-400');
        link.classList.add('text-gray-700', 'dark:text-gray-300', 'hover:bg-gray-200', 'dark:hover:bg-gray-600');
      }
    });
    
    // Actualizar el título y texto del banner Custom Plan
    updateCustomPlanContent(segment);
  }
  
  // Función para actualizar el contenido del Custom Plan
  function updateCustomPlanContent(segment: SegmentType): void {
    // Seleccionamos los elementos dentro de la sección custom-plan-section
    const customPlanSection = document.getElementById('custom-plan-section');
    if (!customPlanSection) return;
    
    const customPlanTitle = customPlanSection.querySelector('h2');
    const customPlanDescription = customPlanSection.querySelector('p');
    
    if (customPlanTitle) {
      customPlanTitle.textContent = segment === 'personal' 
        ? "¿Necesitas un plan personalizado?" 
        : "¿Buscas una solución a medida para tu empresa?";
    }
    
    if (customPlanDescription) {
      customPlanDescription.textContent = segment === 'personal'
        ? "Contacta con nuestro equipo para crear un plan adaptado específicamente a tus necesidades."
        : "Nuestro equipo de consultores empresariales puede diseñar una solución específica que se adapte al tamaño y necesidades de tu organización.";
    }
  }

  // Función para inicializar event listeners
  function initializeEventListeners(): void {
    // Añadir event listeners a los enlaces de segmento
    document.querySelectorAll('a[href^="?segment="], a[href^="/pricing?segment="]').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const hrefAttr = link.getAttribute('href');
        
        if (hrefAttr) {
          // Extraer el segmento del href
          let params: URLSearchParams;
          if (hrefAttr.startsWith('?')) {
            params = new URLSearchParams(hrefAttr.substring(1));
          } else {
            const queryPart = hrefAttr.split('?')[1] || '';
            params = new URLSearchParams(queryPart);
          }
          
          const newSegment = params.get('segment') || 'personal';
          
          // Actualizar la URL sin recargar la página
          const url = new URL(window.location.href);
          url.searchParams.set('segment', newSegment);
          window.history.pushState({}, '', url);
          
          // Actualizar la UI con los nuevos datos
          updatePricingSection(newSegment as SegmentType);
        }
      });
    });
  }

  // Ejecutar cuando el DOM esté listo
  document.addEventListener('DOMContentLoaded', () => {
    initializeEventListeners();
  });
  
  // Manejar la navegación del historial (botones atrás/adelante del navegador)
  window.addEventListener('popstate', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const segment = urlParams.get('segment') || 'personal';
    updatePricingSection(segment as SegmentType);
  });
