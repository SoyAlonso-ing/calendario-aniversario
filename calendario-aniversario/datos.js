// DATOS PARA CADA DÍA DEL AÑO
// Formato: "MM-DD": {tipo: "foto/frase/acertijo", contenido: "ruta o texto", texto: "descripción opcional"}

const diasEspeciales = {
    // Enero
    "01-15": {
        tipo: "foto",
        contenido: "fotos/01-15.jpg",
        texto: "Nuestro primer encuentro ❤️"
    },
    "01-20": {
        tipo: "frase",
        contenido: "El día que supe que quería pasar todos mis días contigo"
    },
    "01-25": {
        tipo: "acertijo",
        contenido: "¿Qué es lo que más me gusta de ti? Todo, pero si tuviera que elegir... tu forma de mirarme"
    },
    
    // Febrero
    "02-14": {
        tipo: "foto",
        contenido: "fotos/02-14.jpg",
        texto: "Nuestro primer San Valentín juntos 💘"
    },
    
    // Marzo
    "03-10": {
        tipo: "frase",
        contenido: "Recuerdo cuando... (escribe tu recuerdo especial)"
    },
    
    // Abril
    "04-05": {
        tipo: "acertijo",
        contenido: "Te amo más que a... (completa con algo gracioso)"
    },
    
    // Sigue agregando más días...
    // Puedes copiar y pegar este formato:
    /*
    "MM-DD": {
        tipo: "foto", // o "frase" o "acertijo"
        contenido: "fotos/MM-DD.jpg", // o el texto si es frase/acertijo
        texto: "Descripción opcional para fotos"
    },
    */
    
    // Día especial (tu aniversario)
    "12-25": { // Cambia esta fecha por tu fecha real
        tipo: "foto",
        contenido: "fotos/aniversario.jpg",
        texto: "¡Feliz primer año juntos! Te amo con todo mi corazón 💕"
    }
};

// Frases para días sin contenido específico
const frasesGenericas = [
    "Un día más a tu lado es un regalo",
    "Hoy es perfecto porque estás en mi vida",
    "Cada momento contigo es especial",
    "Te amo más que ayer, menos que mañana",
    "Eres mi persona favorita en el mundo",
    "Mi corazón late más fuerte cuando estás cerca",
    "Eres la razón de mi sonrisa",
    "Contigo hasta el fin del mundo",
    "Tu amor es mi lugar favorito",
    "Juntos somos invencibles 💕"
];