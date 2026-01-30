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


// ============================================
// PALABRAS SECRETAS DE NUESTRA RELACIÓN
// ============================================
const palabrasSecretas = [
    { palabra: "pochi", significado: "como nos hemos dicho desde los inicios" },
    { palabra: "gordo", significado: "Un poco despectivo pero tu manera de llamarme con amor" },
    { palabra: "gordi", significado: "Como me dices cuando estás de buenas" },
    { palabra: "gordito", significado: "Como me dices cuando estás de buenas" },
    { palabra: "rana cua cua", significado: "Ese dia en el baño nunca lo voy a superar jajaja" },
    { palabra: "nacional", significado: "Donde empezó algo que espero que nunca termine" },
    { palabra: "tosca", significado: "Creo que te identifica como persona" },
    { palabra: "tosquina", significado: "Como te empecé a decir después de que me dieras con el palo de billar en Josone" },
    { palabra: "cursi", significado: "Tanto tú como yo aunque no lo admitamos nos hemos convertido en lo que tanto nos buralábamos" },
    { palabra: "mocosa de mierda", significado: "Frase típica que sacamos de un reel" },
    { palabra: "trompin", significado: "Después de ese reel del elefante más nunca se llamó Pinga" },
    { palabra: "totin", significado: "Que puedo decir del amor que siento por semejante obra de arte" },
    { palabra: "tetis", significado: "Mis 2 niñas que una siempre se pone celosa y tengo que ir a darle cariño " },
    { palabra: "dame el anastacio", significado: "Espero que cuando leas esto ya me lo hayas dado como promesa del año"},
    { palabra: "te amo", significado: "Claramente lo senti yo 1ro porque fui el 1ro en decirlo" },
    { palabra: "papitas", significado: "Creo que desde aquella 1ra vez saliendo de habachelas se volvió nuestro vicio" },
    { palabra: "acho", significado: "Las mejores papas amplio(sigo esperando las negras)" },
    { palabra: "duffis", significado: "Que pesada con las gomitas esas" },
    { palabra: "barbacoa", significado: "Creo que sobran las palabras con esta, simplemente nuestra palabra" },
    { palabra: "ajito", significado: "Dias aguantando tu fetidez a ajo en la boca ya que eres excesiva con el ajo" },
    { palabra: "dumplings", significado: "No entiendo que tanto le ves, pero mientras sea contigo seguiré yendo" },
    { palabra: "tienes tremenda perra peste", significado: "Frase para indicar cuando tu olor corporal, bucal, grajal, patal supera los limites de mi tolerancia" },
    { palabra: "huevitos de codornis", significado: "Como les dices cuando segun tú 'están cargados'" },
    { palabra: "Grecia", significado: "Cuando veas esto si todo sale bien tendrás nuestro cuadro casandonos en Grecia hasta que deje de ser un sueño" },
    { palabra: "chloe", significado: "Nuestra futura hija" },
    { palabra: "luka", significado: "Nuestro futuro hijo" },
    { palabra: "tu pochi pa'rato", significado: "Frase célebre porque saba que me ibas a decir que si a mi propuesta " },
    { palabra: "5 abril", significado: "[COMPLETAR: significado especial de '5 abril']" },
    { palabra: "5 julio", significado: "[COMPLETAR: significado especial de '5 julio']" },
    { palabra: "dias 5", significado: "[COMPLETAR: significado especial de 'dias 5']" },
    { palabra: "mariano es un campo", significado: "[COMPLETAR: significado especial de 'mariano es un campo']" },
    { palabra: "UH", significado: "[COMPLETAR: significado especial de 'UH']" },
    { palabra: "cafezillo", significado: "[COMPLETAR: significado especial de 'cafezillo']" },
    { palabra: "pizza de helado", significado: "[COMPLETAR: significado especial de 'pizza de helado']" },
    { palabra: "noticas", significado: "[COMPLETAR: significado especial de 'noticas']" },
    { palabra: "pintura blanca", significado: "[COMPLETAR: significado especial de 'pintura blanca']" },
    { palabra: "barritas de chocolate", significado: "[COMPLETAR: significado especial de 'barritas de chocolate']" },
    { palabra: "rompecabezas", significado: "[COMPLETAR: significado especial de 'rompecabezas']" },
    { palabra: "vamos a echar un palito?", significado: "[COMPLETAR: significado especial de 'vamos a echar un palito?']" },
    { palabra: "7 hijos", significado: "[COMPLETAR: significado especial de '7 hijos']" },
    { palabra: "3 hijos", significado: "[COMPLETAR: significado especial de '3 hijos']" },
    { palabra: "cujae", significado: "[COMPLETAR: significado especial de 'cujae']" },
    { palabra: "habachela", significado: "[COMPLETAR: significado especial de 'habachela']" },
    { palabra: "casa de alexandra", significado: "[COMPLETAR: significado especial de 'casa de alexandra']" },
    { palabra: "rosas en el malecon", significado: "[COMPLETAR: significado especial de 'rosas en el malecon']" },
    { palabra: "me van a dejar en 23 y paseo", significado: "[COMPLETAR: significado especial de 'me van a dejar en 23 y paseo']" },
    { palabra: "FRITIQUIIII", significado: "[COMPLETAR: significado especial de 'FRITIQUIIII']" },
    { palabra: "FR", significado: "[COMPLETAR: significado especial de 'FR']" },
    { palabra: "corazon con flecha", significado: "[COMPLETAR: significado especial de 'corazon con flecha']" },
    { palabra: "manualidades", significado: "[COMPLETAR: significado especial de 'manualidades']" },
    { palabra: "mi gordooo", significado: "[COMPLETAR: significado especial de 'mi gordooo']" },
    { palabra: "2 dias sin vernos", significado: "[COMPLETAR: significado especial de '2 dias sin vernos']" },
    { palabra: "azotea casa de mi tia", significado: "[COMPLETAR: significado especial de 'azotea casa de mi tia']" },
    { palabra: "31 de diciembre", significado: "[COMPLETAR: significado especial de '31 de diciembre']" },
    { palabra: "la isla", significado: "[COMPLETAR: significado especial de 'la isla']" },
    { palabra: "stranger things", significado: "[COMPLETAR: significado especial de 'stranger things']" },
    { palabra: "dame unos besitos", significado: "[COMPLETAR: significado especial de 'dame unos besitos']" },
    { palabra: "soy precoz", significado: "[COMPLETAR: significado especial de 'soy precoz']" },
    { palabra: "hilo azul", significado: "[COMPLETAR: significado especial de 'hilo azul']" },
    { palabra: "feka", significado: "[COMPLETAR: significado especial de 'feka']" },
    { palabra: "miau", significado: "[COMPLETAR: significado especial de 'miau']" },
    { palabra: "calnen klin", significado: "[COMPLETAR: significado especial de 'calnen klin']" },
    { palabra: "pellizcos", significado: "[COMPLETAR: significado especial de 'pellizcos']" },
    { palabra: "desodrante de pies", significado: "[COMPLETAR: significado especial de 'desodrante de pies']" },
    { palabra: "cocino/friegas", significado: "[COMPLETAR: significado especial de 'cocino/friegas']" },
    { palabra: "la placa", significado: "[COMPLETAR: significado especial de 'la placa']" },
    { palabra: "te amo cancion", significado: "[COMPLETAR: significado especial de 'te amo cancion']" },
    { palabra: "eres una repa", significado: "[COMPLETAR: significado especial de 'eres una repa']" },
    { palabra: "astrologia", significado: "[COMPLETAR: significado especial de 'astrologia']" },
    { palabra: "vestido azul", significado: "[COMPLETAR: significado especial de 'vestido azul']" },
    { palabra: "malvavisco", significado: "[COMPLETAR: significado especial de 'malvavisco']" },
    { palabra: "si de noche lloras x no ver el sol", significado: "[COMPLETAR: significado especial de 'si de noche lloras x no ver el sol']" },
    { palabra: "scrabble", significado: "[COMPLETAR: significado especial de 'scrabble']" },
    { palabra: "fan #1", significado: "[COMPLETAR: significado especial de 'fan #1']" },
    { palabra: "invalido", significado: "[COMPLETAR: significado especial de 'invalido']" },
    { palabra: "sueños", significado: "[COMPLETAR: significado especial de 'sueños']" },
    { palabra: "oscar", significado: "[COMPLETAR: significado especial de 'oscar']" },
    { palabra: "paletica", significado: "[COMPLETAR: significado especial de 'paletica']" },
    { palabra: "sangria", significado: "[COMPLETAR: significado especial de 'sangria']" },
    { palabra: "bar capablanca", significado: "[COMPLETAR: significado especial de 'bar capablanca']" },
    { palabra: "2 columpio en el nacional", significado: "[COMPLETAR: significado especial de '2 columpio en el nacional']" },
    { palabra: "cafes", significado: "[COMPLETAR: significado especial de 'cafes']" },
    { palabra: "fresa/chocolate", significado: "[COMPLETAR: significado especial de 'fresa/chocolate']" },
    { palabra: "frio/caliente", significado: "[COMPLETAR: significado especial de 'frio/caliente']" },
    { palabra: "perfume sara", significado: "[COMPLETAR: significado especial de 'perfume sara']" },
    { palabra: "mensajes fav", significado: "[COMPLETAR: significado especial de 'mensajes fav']" },
    { palabra: "viñales", significado: "[COMPLETAR: significado especial de 'viñales']" },
    { palabra: "varadero", significado: "[COMPLETAR: significado especial de 'varadero']" },
    { palabra: "5", significado: "[COMPLETAR: significado especial de '5']" },
    { palabra: "cactus", significado: "[COMPLETAR: significado especial de 'cactus']" },
    { palabra: "babosa", significado: "[COMPLETAR: significado especial de 'babosa']" },
    { palabra: "mañanero", significado: "[COMPLETAR: significado especial de 'mañanero']" },
    { palabra: "stickers de monos", significado: "[COMPLETAR: significado especial de 'stickers de monos']" },
    { palabra: "obbvioooo", significado: "[COMPLETAR: significado especial de 'obbvioooo']" },
    { palabra: "uno", significado: "[COMPLETAR: significado especial de 'uno']" },
    { palabra: "trampas", significado: "[COMPLETAR: significado especial de 'trampas']" },
    { palabra: "fotografo", significado: "[COMPLETAR: significado especial de 'fotografo']" },
    { palabra: "atardeceres", significado: "[COMPLETAR: significado especial de 'atardeceres']" },
    { palabra: "destacadas", significado: "[COMPLETAR: significado especial de 'destacadas']" },
    { palabra: "hazme un masajito", significado: "[COMPLETAR: significado especial de 'hazme un masajito']" },
    { palabra: "estoy cansada y me duele la cabeza", significado: "[COMPLETAR: significado especial de 'estoy cansada y me duele la cabeza']" },
    { palabra: "jabon al piso", significado: "[COMPLETAR: significado especial de 'jabon al piso']" },
    { palabra: "escupida de agua", significado: "[COMPLETAR: significado especial de 'escupida de agua']" },
    { palabra: "ese toto gordo", significado: "[COMPLETAR: significado especial de 'ese toto gordo']" },
    { palabra: "ese toto gigante", significado: "[COMPLETAR: significado especial de 'ese toto gigante']" },
    { palabra: "stickers de abejas", significado: "[COMPLETAR: significado especial de 'stickers de abejas']" },
    { palabra: "sticker de eso no eiste", significado: "[COMPLETAR: significado especial de 'sticker de eso no eiste']" },
    { palabra: "sticker mandando un beso", significado: "[COMPLETAR: significado especial de 'sticker mandando un beso']" },
    { palabra: "reaccionar con nuestro corazon", significado: "[COMPLETAR: significado especial de 'reaccionar con nuestro corazon']" },
    { palabra: "tu corsel el dia de habachela", significado: "[COMPLETAR: significado especial de 'tu corsel el dia de habachela']" },
    { palabra: "ultima hora de telegram", significado: "[COMPLETAR: significado especial de 'ultima hora de telegram']" },
    { palabra: "luces led", significado: "[COMPLETAR: significado especial de 'luces led']" },
    { palabra: "polaroid", significado: "[COMPLETAR: significado especial de 'polaroid']" },
    { palabra: "foto de pasaporte", significado: "[COMPLETAR: significado especial de 'foto de pasaporte']" },
    { palabra: "cicatriz en un muslo", significado: "[COMPLETAR: significado especial de 'cicatriz en un muslo']" },
    { palabra: "mi negrita", significado: "[COMPLETAR: significado especial de 'mi negrita']" },
    { palabra: "mi mulatona", significado: "[COMPLETAR: significado especial de 'mi mulatona']" },
    { palabra: "mi trigueñona", significado: "[COMPLETAR: significado especial de 'mi trigueñona']" },
    { palabra: "ay dios mio esas nalgas mias", significado: "[COMPLETAR: significado especial de 'ay dios mio esas nalgas mias']" },
    { palabra: "ay dios miooo", significado: "[COMPLETAR: significado especial de 'ay dios miooo']" },
    { palabra: "los 5 dedos", significado: "[COMPLETAR: significado especial de 'los 5 dedos']" },
    { palabra: "melendi", significado: "[COMPLETAR: significado especial de 'melendi']" },
    { palabra: "mine mine mine", significado: "[COMPLETAR: significado especial de 'mine mine mine']" },
    { palabra: "la pieza que me faltaba", significado: "[COMPLETAR: significado especial de 'la pieza que me faltaba']" },
    { palabra: "hilo rojo", significado: "[COMPLETAR: significado especial de 'hilo rojo']" },
    { palabra: "karla craft", significado: "[COMPLETAR: significado especial de 'karla craft']" },
    { palabra: "letras de fritiqui de otro color", significado: "[COMPLETAR: significado especial de 'letras de fritiqui de otro color']" },
    { palabra: "cuarto de mi abuela #1", significado: "[COMPLETAR: significado especial de 'cuarto de mi abuela #1']" },
    { palabra: "cuarto de mi abuela #2", significado: "[COMPLETAR: significado especial de 'cuarto de mi abuela #2']" },
    { palabra: "baño de mi abuela", significado: "[COMPLETAR: significado especial de 'baño de mi abuela']" },
    { palabra: "desayunos", significado: "[COMPLETAR: significado especial de 'desayunos']" },
    { palabra: "esa barriguita mia", significado: "[COMPLETAR: significado especial de 'esa barriguita mia']" },
    { palabra: "69", significado: "[COMPLETAR: significado especial de '69']" },
    { palabra: "tu arriba", significado: "[COMPLETAR: significado especial de 'tu arriba']" },
    { palabra: "la sabana en el medio en 4", significado: "[COMPLETAR: significado especial de 'la sabana en el medio en 4']" },
    { palabra: "la cama sonando", significado: "[COMPLETAR: significado especial de 'la cama sonando']" },
    { palabra: "kamasutra", significado: "[COMPLETAR: significado especial de 'kamasutra']" },
    { palabra: "licencia", significado: "[COMPLETAR: significado especial de 'licencia']" },
    { palabra: "mentas", significado: "[COMPLETAR: significado especial de 'mentas']" },
    { palabra: "me ven cara de millonario", significado: "[COMPLETAR: significado especial de 'me ven cara de millonario']" },
    { palabra: "fusion frappe", significado: "[COMPLETAR: significado especial de 'fusion frappe']" },
    { palabra: "domino en pazillo", significado: "[COMPLETAR: significado especial de 'domino en pazillo']" },
    { palabra: "domino", significado: "[COMPLETAR: significado especial de 'domino']" },
    { palabra: "canopi", significado: "[COMPLETAR: significado especial de 'canopi']" },
    { palabra: "risas", significado: "[COMPLETAR: significado especial de 'risas']" },
    { palabra: "discusiones", significado: "[COMPLETAR: significado especial de 'discusiones']" },
    { palabra: "15 dias sin hablar", significado: "[COMPLETAR: significado especial de '15 dias sin hablar']" },
    { palabra: "sandro como es adrian en una relacion", significado: "[COMPLETAR: significado especial de 'sandro como es adrian en una relacion']" },
    { palabra: "daily chat", significado: "[COMPLETAR: significado especial de 'daily chat']" },
    { palabra: "promesa de dormir encueros", significado: "[COMPLETAR: significado especial de 'promesa de dormir encueros']" },
    { palabra: "lilo y stich en persona", significado: "[COMPLETAR: significado especial de 'lilo y stich en persona']" },
    { palabra: "el laberinto 1,2,3", significado: "[COMPLETAR: significado especial de 'el laberinto 1,2,3']" },
    { palabra: "una frase repa para cada ocasion", significado: "[COMPLETAR: significado especial de 'una frase repa para cada ocasion']" },
    { palabra: "catarro", significado: "[COMPLETAR: significado especial de 'catarro']" },
    { palabra: "quivican", significado: "[COMPLETAR: significado especial de 'quivican']" },
    { palabra: "alicia sal de ese cuerpo", significado: "[COMPLETAR: significado especial de 'alicia sal de ese cuerpo']" },
    { palabra: "el tunel de linea", significado: "[COMPLETAR: significado especial de 'el tunel de linea']" }
];

// Exportar datos para acceso global
window.datosConfig = window.datosConfig || {};
window.datosConfig.palabrasSecretas = palabrasSecretas;

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
    codigoCorrecto,
    palabrasSecretas
};

console.log("📊 Datos.js cargado correctamente (VERSIÓN MULTIFOTO)");