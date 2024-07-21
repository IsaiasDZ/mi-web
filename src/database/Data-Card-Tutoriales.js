const Data = [
    {
      img: "tutoriales1.jpg",
      titulo: "Técnica de iluminación",
      texto: "Aprende a utilizar diferentes fuentes de luz y técnicas de iluminación",
      categoria: "Iluminación",
      dificultad: "Intermedio"
    },
    {
      img: "tutoriales2.jpg",
      titulo: "Edición avanzada",
      texto: "Domina herramientas y técnicas de edición avanzada para mejorar tus fotos",
      categoria: "Edición",
      dificultad: "Avanzado"
    },
    {
      img: "tutoriales3.jpg",
      titulo: "Fotografía de paisajes",
      texto: "Descubre cómo capturar paisajes impresionantes con técnicas especializadas",
      categoria: "Paisajes",
      dificultad: "Básico"
    },/*
    {
      img: "tutoriales4.jpg",
      titulo: "Retratos profesionales",
      texto: "Conoce los secretos para tomar retratos profesionales con cualquier cámara",
      categoria: "Retratos",
      dificultad: "Intermedio"
    },
    {
      img: "tutoriales5.jpg",
      titulo: "Fotografía nocturna",
      texto: "Aprende a capturar la belleza de la noche con técnicas de fotografía nocturna",
      categoria: "Nocturna",
      dificultad: "Avanzado"
    },
    {
      img: "tutoriales6.jpg",
      titulo: "Fotografía macro",
      texto: "Explora el mundo diminuto y aprende técnicas para la fotografía macro",
      categoria: "Macro",
      dificultad: "Básico"
    },
    {
      img: "tutoriales7.jpg",
      titulo: "Composición fotográfica",
      texto: "Mejora la composición de tus fotos con reglas y técnicas esenciales",
      categoria: "Composición",
      dificultad: "Intermedio"
    },
    {
      img: "tutoriales8.jpg",
      titulo: "Fotografía de productos",
      texto: "Domina la fotografía de productos para crear imágenes atractivas y profesionales",
      categoria: "Productos",
      dificultad: "Avanzado"
    },
    {
      img: "tutoriales9.jpg",
      titulo: "Fotografía en blanco y negro",
      texto: "Descubre el arte de la fotografía en blanco y negro y sus técnicas únicas",
      categoria: "Blanco y Negro",
      dificultad: "Básico"
    },
    {
      img: "tutoriales10.jpg",
      titulo: "Fotografía de eventos",
      texto: "Aprende a capturar los momentos más importantes en cualquier tipo de evento",
      categoria: "Eventos",
      dificultad: "Intermedio"
    },
    {
      img: "tutoriales11.jpg",
      titulo: "Técnica de iluminación avanzada",
      texto: "Aprende técnicas avanzadas de iluminación para obtener resultados espectaculares",
      categoria: "Iluminación",
      dificultad: "Avanzado"
    },
    {
      img: "tutoriales12.jpg",
      titulo: "Edición con Lightroom",
      texto: "Domina Lightroom y transforma tus fotos con herramientas profesionales",
      categoria: "Edición",
      dificultad: "Básico"
    },
    {
      img: "tutoriales13.jpg",
      titulo: "Fotografía de montaña",
      texto: "Descubre cómo capturar la majestuosidad de las montañas con técnicas especializadas",
      categoria: "Paisajes",
      dificultad: "Intermedio"
    },
    {
      img: "tutoriales14.jpg",
      titulo: "Retratos en exteriores",
      texto: "Aprende a tomar retratos impresionantes en exteriores con cualquier luz",
      categoria: "Retratos",
      dificultad: "Avanzado"
    },
    {
      img: "tutoriales15.jpg",
      titulo: "Astrofotografía",
      texto: "Captura la belleza del cielo nocturno con técnicas de astrofotografía",
      categoria: "Nocturna",
      dificultad: "Básico"
    },
    {
      img: "tutoriales16.jpg",
      titulo: "Fotografía macro avanzada",
      texto: "Perfecciona tus habilidades macro con técnicas avanzadas",
      categoria: "Macro",
      dificultad: "Intermedio"
    },
    {
      img: "tutoriales17.jpg",
      titulo: "Composición avanzada",
      texto: "Mejora la composición de tus fotos con técnicas avanzadas",
      categoria: "Composición",
      dificultad: "Avanzado"
    },
    {
      img: "tutoriales18.jpg",
      titulo: "Fotografía de comida",
      texto: "Crea imágenes irresistibles de comida con técnicas profesionales",
      categoria: "Productos",
      dificultad: "Básico"
    },
    {
      img: "tutoriales19.jpg",
      titulo: "Fotografía en blanco y negro avanzada",
      texto: "Domina técnicas avanzadas para la fotografía en blanco y negro",
      categoria: "Blanco y Negro",
      dificultad: "Intermedio"
    },
    {
      img: "tutoriales20.jpg",
      titulo: "Fotografía de bodas",
      texto: "Aprende a capturar los momentos más importantes en bodas con técnicas especializadas",
      categoria: "Eventos",
      dificultad: "Avanzado"
    },
    {
      img: "tutoriales21.jpg",
      titulo: "Técnica de iluminación creativa",
      texto: "Explora técnicas creativas de iluminación para obtener resultados únicos",
      categoria: "Iluminación",
      dificultad: "Básico"
    },
    {
      img: "tutoriales22.jpg",
      titulo: "Edición en Photoshop",
      texto: "Domina Photoshop para llevar tus fotos al siguiente nivel",
      categoria: "Edición",
      dificultad: "Intermedio"
    },
    {
      img: "tutoriales23.jpg",
      titulo: "Fotografía de desiertos",
      texto: "Aprende a capturar la belleza de los desiertos con técnicas especializadas",
      categoria: "Paisajes",
      dificultad: "Avanzado"
    },
    {
      img: "tutoriales24.jpg",
      titulo: "Retratos en estudio",
      texto: "Domina la fotografía de retratos en estudio con cualquier equipo",
      categoria: "Retratos",
      dificultad: "Básico"
    },
    {
      img: "tutoriales25.jpg",
      titulo: "Fotografía de estrellas",
      texto: "Captura la magia de las estrellas con técnicas avanzadas de fotografía nocturna",
      categoria: "Nocturna",
      dificultad: "Intermedio"
    },
    {
      img: "tutoriales26.jpg",
      titulo: "Fotografía macro creativa",
      texto: "Experimenta con técnicas creativas para obtener impresionantes fotos macro",
      categoria: "Macro",
      dificultad: "Avanzado"
    },
    {
      img: "tutoriales27.jpg",
      titulo: "Composición y diseño",
      texto: "Aprende a combinar composición y diseño para crear fotos impactantes",
      categoria: "Composición",
      dificultad: "Básico"
    },
    {
      img: "tutoriales28.jpg",
      titulo: "Fotografía de moda",
      texto: "Domina la fotografía de moda para crear imágenes elegantes y profesionales",
      categoria: "Productos",
      dificultad: "Intermedio"
    },
    {
      img: "tutoriales29.jpg",
      titulo: "Blanco y negro: técnicas clásicas",
      texto: "Explora técnicas clásicas para la fotografía en blanco y negro",
      categoria: "Blanco y Negro",
      dificultad: "Avanzado"
    },
    {
      img: "tutoriales30.jpg",
      titulo: "Fotografía de eventos deportivos",
      texto: "Captura la emoción de los eventos deportivos con técnicas especializadas",
      categoria: "Eventos",
      dificultad: "Básico"
    }*/
];
    export default Data;