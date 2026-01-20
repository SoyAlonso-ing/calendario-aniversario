// ============================================
// ARCHIVO: datos.js - VERSIÓN MULTIFOTO
// CONTIENE: Datos con múltiples fotos por día
// ============================================

// DATOS PARA CADA DÍA ESPECIAL DEL AÑO - AHORA CON MÚLTIPLES FOTOS
const diasEspeciales = {
    // Día de inicio (5 abril 2025) - AHORA CON ARRAY DE FOTOS
    "2025-04-05": { 
        tipo: "galeria",
        fotos: [
            { 
                url: "fotos/inicio/inicio.jpg", 
                texto: "¡Nuestro primer día juntos! 💘",
            },
            { 
                url: "fotos/inicio/inicio2.jpg", 
                texto: "Esa sonrisa que me robó el corazón",
            },
            { 
                url: "fotos/inicio/inicio3.jpg", 
                texto: "El primer abrazo que duró para siempre",
            }
        ],
        mensajes: [
            "¡Comenzamos nuestra aventura juntos el 5 de abril de 2025!",
            "Cada latido de mi corazón te nombra desde este día"
        ]
    },
    
    // Otros días especiales - EJEMPLO CON MÚLTIPLES FOTOS
    "01-15": { 
        tipo: "galeria",
        fotos: [
            { 
                url: "fotos/01-15/foto1.jpg", 
                texto: "Nuestro primer encuentro 💘",
            },
            { 
                url: "fotos/01-15/foto2.jpg", 
                texto: "Esa mirada que lo dijo todo",
            }
        ],
        mensajes: ["El día que supe que quería pasar todos mis días contigo"]
    },
    
    "02-14": { 
        tipo: "galeria",
        fotos: [
            { 
                url: "fotos/02-14/foto1.jpg", 
                texto: "Nuestro primer San Valentín juntos 💘",
            },
            { 
                url: "fotos/02-14/foto2.jpg", 
                texto: "La cena más especial",
            },
            { 
                url: "fotos/02-14/foto3.jpg", 
                texto: "El regalo perfecto",
            }
        ],
        mensajes: ["El amor no necesita un día especial, pero hoy lo celebramos doble"]
    },
    
    // Ejemplo de día con solo una foto (para compatibilidad)
    "03-20": { 
        tipo: "foto",
        contenido: "fotos/03-20.jpg", 
        texto: "Paseo primaveral juntos 🌸"
    },
    
    // Día del aniversario (5 abril 2026) - CON MÚLTIPLES FOTOS
    "2026-04-05": { 
        tipo: "galeria",
        fotos: [
            { 
                url: "fotos/aniversario/foto1.jpg", 
                texto: "¡365 días de amor! 🎉",
                descripcion: "Un año entero contigo"
            },
            { 
                url: "fotos/aniversario/foto2.jpg", 
                texto: "Celebrando cada momento",
                descripcion: "Las risas que compartimos"
            },
            { 
                url: "fotos/aniversario/foto3.jpg", 
                texto: "Más unidos que nunca",
                descripcion: "Nuestro amor crece cada día"
            },
            { 
                url: "fotos/aniversario/foto4.jpg", 
                texto: "Por muchos años más",
                descripcion: "El futuro nos espera"
            }
        ],
        mensajes: [
            "¡FELIZ PRIMER ANIVERSARIO! 365 días de amor incondicional",
            "Te amo más cada día. 💘",
            "El mejor año de mi vida, porque estuviste en él"
        ]
    }
};

// FRASES PARA DÍAS SIN CONTENIDO ESPECÍFICO (igual)
const frasesGenericas = [
    "Un día más a tu lado es un regalo", "Hoy es perfecto porque estás en mi vida",
    "Cada momento contigo es especial", "Te amo más que ayer, menos que mañana",
    "Eres mi persona favorita en el mundo", "Mi corazón late más fuerte cuando estás cerca",
    "Eres la razón de mi sonrisa", "Contigo hasta el fin del mundo",
    "Tu amor es mi lugar favorito", "Juntos somos invencibles 💘",
    "Tu abrazo es mi hogar", "Me haces mejor persona cada día",
    "Amarse es mirar en la misma dirección", "Contigo hasta las estrellas",
    "Eres mi sueño hecho realidad", "Nuestro amor es mi historia favorita",
    "Eres la melodía de mi corazón", "Contigo el tiempo vuela",
    "Eres mi refugio seguro", "Tu risa es mi sonido favorito"
];

// DATOS ADICIONALES (igual que antes)
const primerasVeces = {
    "primeraCita": { fecha: "04-05", titulo: "Nuestra primera cita", descripcion: "Recuerdo que estabas tan nervioso/a que...", emoji: "🥰" },
    "primerBeso": { fecha: "04-12", titulo: "Nuestro primer beso", descripcion: "Fue bajo la lluvia/luna/etc...", emoji: "💋" },
    "primeraAventura": { fecha: "03-10", titulo: "Nuestro primer viaje", descripcion: "Cuando nos perdimos y...", emoji: "🧳" }
};

const mensajesPorMes = {
    0: "Enero - Cuando nuestros caminos se encontraron", 1: "Febrero - Descubriendo lo que sentíamos",
    2: "Marzo - Cada día más enamorado/a", 3: "Abril - Las primeras aventuras juntos",
    4: "Mayo - Creando nuestros rituales", 5: "Junio - Superando nuestro primer reto",
    6: "Julio - Verano de amor infinito", 7: "Agosto - Momentos que atesoraré siempre",
    8: "Septiembre - Creciendo juntos", 9: "Octubre - El otoño de nuestra pasión",
    10: "Noviembre - Agradecido/a por tenerte", 11: "Diciembre - Un año de sueños cumplidos"
};

const acertijos = [
    { pregunta: "¿Qué es lo que más me gusta de tus ojos?", respuesta: "Que me miran como si fuera el/la único/a en el mundo", pista: "Tiene que ver con cómo me ves" },
    { pregunta: "¿En qué momento supe que te amaba?", respuesta: "Cuando [describe momento real]", pista: "Fue un día de [mes específico]" },
    { pregunta: "¿Qué canción siempre me recuerda a ti?", respuesta: "[Nombre de canción] porque [razón personal]", pista: "La escuchamos en [lugar específico]" }
];

const cartasSecretas = {
    "01": { titulo: "Primer mes juntos", contenido: "Querida/o [nombre], cuando te conocí...", desbloqueado: true },
    "02": { titulo: "Lo que aprendí de ti", contenido: "En este segundo mes descubrí que...", desbloqueado: false }
};

const razonesTeAmo = [
    "Por tu sonrisa que ilumina mi día", "Por cómo me haces reír sin esfuerzo",
    "Por tu paciencia cuando soy terco/a", "Por apoyarme en todos mis sueños",
    "Por esos pequeños gestos que solo tú haces", "Por ser mi refugio seguro",
    "Por cómo me entiendes sin palabras", "Por hacer lo cotidiano extraordinario",
    "Por tu corazón generoso", "Por la forma en que me abrazas",
    "Por tus locuras que me hacen feliz", "Por cómo cuidas de mí",
    "Por tu inteligencia que me sorprende", "Por tu fuerza cuando más lo necesito",
    "Por ser auténtico/a siempre", "Por cómo me miras",
    "Por tu voz que me calma", "Por tu sentido del humor",
    "Por tus sueños y aspiraciones", "Por cómo me amas incondicionalmente"
];

const diasFuturos = {
    "2024-01-15": { titulo: "Nuestro segundo aniversario", promesa: "Este año visitaremos [lugar soñado]", emoji: "🌟" },
    "2024-06-01": { titulo: "Nuestra primera aventura del segundo año", promesa: "Iremos a [actividad pendiente]", emoji: "🧳" }
};

// Código secreto de teclas (Konami Code)
const codigoCorrecto = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

// Exportar variables globales
window.datosConfig = {
    diasEspeciales,
    frasesGenericas,
    primerasVeces,
    mensajesPorMes,
    acertijos,
    cartasSecretas,
    razonesTeAmo,
    diasFuturos,
    codigoCorrecto
};

console.log("📊 Datos.js cargado correctamente (VERSIÓN MULTIFOTO)");