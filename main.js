
const socialLinks = [
    {
      id: "instagram",
      href: "https://www.instagram.com/puentepapel?igsh=bHlzNTc2aWV0Y2t0",
      text: "Instagram",
      img: `/imagenes/instagram-logo.svg`,
      alt: "Instagram Logo",
    },
    {
      id: "Blog",
      href: "https://comunidadpuentepapel.blogspot.com/",
      text: "Blog",
      img: `/imagenes/blog-writing-svgrepo-com.svg`,
      alt: "Blog Writing Logo",
    },
    {
      id: "Facebook",
      href: "https://www.facebook.com/share/oWwg7kxJ1GGEq9Fc",
      text: "Facebook",
      img: `/imagenes/facebook-svgrepo-com.svg`,
      alt: "Facebook Logo",
    },
    {
        id: "whatsapp",
        href: "https://wa.me/c/5491124636219",
        text: "Nuestro Catalogo",
        img: `/imagenes/whatsapp-svgrepo-com.svg`,
        alt: "whatsapp Logo",
      
    },
    {
      id: "shop",
      href: "https://puentepapel.empretienda.com.ar/",
      text: "Tienda",
      img: `/imagenes/bx-shopping-bag.svg`,
      alt: "shop Logo",
    
  }
  ];
function createSocialLinks(links) {
    const mainContainer = document.querySelector(".main-container");
    mainContainer.innerHTML = ""; // Limpiar el contenido existente
  
    const elements = links.map((link) => {
      // Crear el enlace principal
      const anchor = document.createElement("a");
      anchor.href = link.href;
      anchor.className = "links-container";
  
      // Crear el contenedor principal
      const containerSocialMedia = document.createElement("div");
      containerSocialMedia.id = link.id
      containerSocialMedia.className = "container-social-media";
  
      // Crear el contenedor del logo
      const logoContainer = document.createElement("div");
      logoContainer.className = "logo-container";
  
      // Crear el nodo img
      const icon = document.createElement("img");
      icon.className = "icon";
      icon.src = link.img;
      icon.alt = link.alt;
      logoContainer.appendChild(icon);
  
      // Crear el contenedor de texto
      const containerTexto = document.createElement("div");
      containerTexto.className = "container-texto";
      containerTexto.textContent = link.text;
  
      // Construir la estructura
      containerSocialMedia.appendChild(logoContainer);
      containerSocialMedia.appendChild(containerTexto);
      anchor.appendChild(containerSocialMedia);
  
      return anchor;
    });
  
    // Añadir todos los elementos generados al contenedor principal
    elements.forEach((element) => mainContainer.appendChild(element));
  }
  
  // Inicializar los enlaces sociales
  createSocialLinks(socialLinks);
  