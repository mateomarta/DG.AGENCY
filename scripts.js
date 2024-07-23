
    // Detectar el cambio de tamaño de la ventana
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            navMenu.classList.remove('active');
        }
    });


    function openNav() {
        document.getElementById("mobile-menu").style.width = "100%";
    }
    
    function closeNav() {
        document.getElementById("mobile-menu").style.width = "0%";
    }
    
    function navigateToContact() {
        closeNav();
        document.getElementById("contacto").scrollIntoView({ behavior: 'smooth' });
    }





document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll('.package button');
    const packages = {
        pack1: "En DG.agency entendemos que conocer el mercado es clave para el éxito. Nuestro Market Pack está diseñado para ofrecerte un análisis exhaustivo y personalizado del mercado en el que te mueves. Incluye un estudio detallado del entorno competitivo, identificación de oportunidades y amenazas, y la creación de estrategias innovadoras para posicionar tu marca de manera efectiva. Con el Market Pack, no solo identificarás nuevas oportunidades de negocio, sino que también podrás anticiparte a los movimientos de la competencia y adaptar tus estrategias para maximizar tus beneficios.",
        pack2: "El contenido es el rey en el mundo digital, y en DG.agency sabemos cómo crear y gestionar contenido que realmente conecta con tu audiencia. Nuestro Adds Pack está diseñado para ayudarte a generar contenido original y de alta calidad que refleje los valores y objetivos de tu marca. Desde la creación de contenido visual y escrito hasta la optimización para diferentes plataformas, el Adds Pack te ofrece todo lo que necesitas para destacar en el panorama digital y captar la atención de tu público objetivo.",
        pack3: "En DG.agency, creemos que una marca sólida se construye sobre una comunidad fuerte y comprometida. Nuestro Community Pack está diseñado para gestionar y potenciar tu presencia en redes sociales, creando relaciones significativas con tu audiencia. Incluye la gestión completa de tus perfiles sociales, desarrollo de estrategias de engagement y posicionamiento de marca, y un seguimiento continuo para optimizar resultados. Con el Community Pack, no solo aumentarás tu visibilidad, sino que también fortalecerás el vínculo con tu comunidad, generando lealtad y confianza."
    };

    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const packageId = e.target.parentElement.id;
            openModal(packages[packageId]);
        });
    });

    function openModal(content) {
        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-button">&times;</span>
                <p>${content}</p>
            </div>
        `;
        document.body.appendChild(modal);

        const closeButton = modal.querySelector('.close-button');
        closeButton.addEventListener('click', () => {
            modal.remove();
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        });
    }
});
