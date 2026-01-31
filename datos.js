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
      },
    ],
    mensajes: [
      "¡Comenzamos nuestra aventura juntos el 5 de abril de 2025!",
      "Cada latido de mi corazón te nombra desde este día",
    ],
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
      },
    ],
    mensajes: ["El día que supe que quería pasar todos mis días contigo"],
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
      },
    ],
    mensajes: [
      "El amor no necesita un día especial, pero hoy lo celebramos doble",
    ],
  },

  // Ejemplo de día con solo una foto (para compatibilidad)
  "03-20": {
    tipo: "foto",
    contenido: "fotos/03-20.jpg",
    texto: "Paseo primaveral juntos 🌸",
  },

  // Día del aniversario (5 abril 2026) - CON MÚLTIPLES FOTOS
  "2026-04-05": {
    tipo: "galeria",
    fotos: [
      {
        url: "fotos/aniversario/foto1.jpg",
        texto: "¡365 días de amor! 🎉",
        descripcion: "Un año entero contigo",
      },
      {
        url: "fotos/aniversario/foto2.jpg",
        texto: "Celebrando cada momento",
        descripcion: "Las risas que compartimos",
      },
      {
        url: "fotos/aniversario/foto3.jpg",
        texto: "Más unidos que nunca",
        descripcion: "Nuestro amor crece cada día",
      },
      {
        url: "fotos/aniversario/foto4.jpg",
        texto: "Por muchos años más",
        descripcion: "El futuro nos espera",
      },
    ],
    mensajes: [
      "¡FELIZ PRIMER ANIVERSARIO! 366 días de amor incondicional",
      "Te amo más cada día. 💘",
      "El mejor año de mi vida, porque estuviste en él",
    ],
  },
};

// FRASES PARA DÍAS SIN CONTENIDO ESPECÍFICO (igual)
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
  "Juntos somos invencibles 💘",
  "Tu abrazo es mi hogar",
  "Me haces mejor persona cada día",
  "Amarse es mirar en la misma dirección",
  "Contigo hasta las estrellas",
  "Eres mi sueño hecho realidad",
  "Nuestro amor es mi historia favorita",
  "Eres la melodía de mi corazón",
  "Contigo el tiempo vuela",
  "Eres mi refugio seguro",
  "Tu risa es mi sonido favorito",
  "Eres el mejor 'sí' que dije en la vida.",
  "Mi mundo brilla más cuando tú estás en él.",
  "Encontrarte fue como encontrar la pieza que me faltaba.",
  "Prefiero mil días normales contigo que uno extraordinario sin ti.",
  "Eres mi calma en medio del caos.",
  "A tu lado, hasta lo ordinario se vuelve mágico.",
  "No cambio lo nuestro por nada en este mundo.",
  "Tu amor es el ancla que mantiene mi barco estable.",
  "Contigo, el futuro es mi destino favorito.",
  "Eres la personificación de todo lo bueno.",
  "Mi alma reconoció a la tuya desde el primer día.",
  "Amarse es construir un universo solo para dos.",
  "Eres mi dosis diaria de felicidad.",
  "Nuestra conexión es mi mayor tesoro.",
  "Tu presencia lo llena todo de color.",
  "Eres la respuesta a preguntas que no sabía que tenía.",
  "Juntos escribimos la mejor versión de nuestra historia.",
  "Tu amor es la fuerza que me impulsa a ser mejor.",
  "En tus ojos encuentro mi lugar en el mundo.",
  "Eres mi complicidad favorita y mi paz más profunda.",
  "Amarse es ser equipo, siempre.",
  "Contigo, el presente es el momento más valioso.",
  "Eres mi realidad superando cualquier fantasía.",
  "Mi corazón encontró su ritmo perfecto en el tuyo.",
  "Eres mi puerto seguro en cualquier tormenta.",
  "No hay distancia que pueda apagar lo que siento por ti.",
  "Tu amor es la melodía que nunca quiero dejar de escuchar.",
  "Eres la razón por la que creo en el destino.",
  "A tu lado, hasta la rutina es una aventura.",
  "Eres mi confidente y mi mayor alegría.",
  "Nuestro amor es el viaje más hermoso.",
  "En tu abrazo encuentro mi fuerza y mi paz.",
  "Eres el sueño del que no quiero despertar.",
  "Contigo, incluso el silencio es cómplice.",
  "Tu amor es el regalo más valioso que he recibido.",
  "Eres mi presente constante y mi futuro deseado.",
  "Amarse es elegirse todos los días, sin dudar.",
  "Eres la luz que guía mis pasos.",
  "Mi amor por ti crece más con cada amanecer.",
  "Eres mi complicidad eterna y mi complicidad diaria.",
  "Juntos transformamos lo común en extraordinario.",
  "Tu risa es el sonido que alegra mi alma.",
  "Eres el mapa que me llevó a casa.",
  "A tu lado, el tiempo se detiene y vuela a la vez.",
  "Eres mi certeza en un mundo de incertidumbre.",
  "Nuestro vínculo es mi fortaleza y mi suavidad.",
  "Tu amor es el combustible de mis días.",
  "Eres mi pensamiento favorito al despertar.",
  "Amarse es crecer juntos, de raíz y de alas.",
  "Eres, simplemente, mi todo.",
];

// DATOS ADICIONALES (igual que antes)
const primerasVeces = {
  primeraCita: {
    fecha: "04-05",
    titulo: "Nuestra primera cita",
    descripcion: "Recuerdo que estabas tan nervioso/a que...",
    emoji: "🥰",
  },
  primerBeso: {
    fecha: "04-12",
    titulo: "Nuestro primer beso",
    descripcion: "Fue bajo la lluvia/luna/etc...",
    emoji: "💋",
  },
  primeraAventura: {
    fecha: "03-10",
    titulo: "Nuestro primer viaje",
    descripcion: "Cuando nos perdimos y...",
    emoji: "🧳",
  },
};

const mensajesPorMes = {
  0: "Enero - Cuando nuestros caminos se encontraron",
  1: "Febrero - Descubriendo lo que sentíamos",
  2: "Marzo - Cada día más enamorado/a",
  3: "Abril - Las primeras aventuras juntos",
  4: "Mayo - Creando nuestros rituales",
  5: "Junio - Superando nuestro primer reto",
  6: "Julio - Verano de amor infinito",
  7: "Agosto - Momentos que atesoraré siempre",
  8: "Septiembre - Creciendo juntos",
  9: "Octubre - El otoño de nuestra pasión",
  10: "Noviembre - Agradecido/a por tenerte",
  11: "Diciembre - Un año de sueños cumplidos",
};

const acertijos = [
  {
    pregunta: "¿Qué es lo que más me gusta de tus ojos?",
    respuesta: "Que me miran como si fuera el/la único/a en el mundo",
    pista: "Tiene que ver con cómo me ves",
  },
  {
    pregunta: "¿En qué momento supe que te amaba?",
    respuesta: "Cuando [describe momento real]",
    pista: "Fue un día de [mes específico]",
  },
  {
    pregunta: "¿Qué canción siempre me recuerda a ti?",
    respuesta: "[Nombre de canción] porque [razón personal]",
    pista: "La escuchamos en [lugar específico]",
  },
];

const cartasSecretas = {
  "01": {
    titulo: "Primer mes juntos",
    contenido: "Querida/o [nombre], cuando te conocí...",
    desbloqueado: true,
  },
  "02": {
    titulo: "Lo que aprendí de ti",
    contenido: "En este segundo mes descubrí que...",
    desbloqueado: false,
  },
};

const razonesTeAmo = [
  "Por tu sonrisa que ilumina mi día",
  "Por cómo me haces reír",
  "Por tu paciencia conmigo",
  "Por apoyarme en todo",
  "Por esos pequeños detalles que solo tú haces",
  "Por ser mi refugio seguro",
  "Por cómo me entiendes sin palabras",
  "Por hacer lo cotidiano extraordinario",
  "Por tu corazón",
  "Por la forma en que me abrazas",
  "Por tus locuras que me hacen feliz",
  "Por cómo me cuidas",
  "Por tu manera de ver la vida",
  "Por tu apoyo cuando más lo necesito",
  "Por ser natural siempre",
  "Por cómo me miras",
  "Por tu voz que me calma",
  "Por tu sentido del humor (Un poco pujosa pero bueno)",
  "Por tus sueños y aspiraciones",
  "Por cómo me amas",
  "Por la forma en que me besas ",
  "Por como tratas a los demás",
  "Por como me haces sentir",
  "Por la persona en la que me has ayudado a convertirme",
  "Por lo rico que singamos también obvio ",
  "Por compartir conmigo todo",
  "Por pensar en mi para cualquier plan",
  "Por darme entender que un sábado en casa a veces es mejor que estar de fiestas",
  "Por no rendirte conmigo",
  "Por a pesar de las peleas siempre querer arreglar las cosas",
  "Por tus manualidades",
  "Por tetis",
  "Por totis",
  "Por hacer que mi vida sea mejor",
  "Por siempre querer lo mejor para mi",
  "Por sacar mi mejor versión",
  "Por hacer que 2h contigo parezcan 2min",
  "Por hacer mis noches mejores",
  "Por lograr que algo tan simple como hacer un desayuno sea algo especial",
  "Por esas notas que me dejas por el cuarto",
  "Por como me veo en tus ojos",
  "Por darme cuenta que nadie me había querido como tú",
  "Por llegar a mi vida cuando menos lo esperaba y más lo necesitaba sin saberlo",
  "Porque por más razones que pueda decirte aqui nunca voy a poder decirte todo lo que te amo",
  "Por ver que ya no imagino un dia sin ti",
  "Por darme cuenta que eres todo lo que siempre pedi",
  "Se que te amo desde el dia que empecé a imaginarme un futuro contigo",
  "Se que te amo porque por primera vez en mi vida no se si quiero que me llegue el viaje o no ",
];

// ============================================
// PALABRAS SECRETAS DE NUESTRA RELACIÓN
// ============================================
const palabrasSecretas = [
  { palabra: "pochi", significado: "como nos hemos dicho desde los inicios" },
  {
    palabra: "gordo",
    significado: "Un poco despectivo pero tu manera de llamarme con amor",
  },
  { palabra: "gordi", significado: "Como me dices cuando estás de buenas" },
  { palabra: "gordito", significado: "Como me dices cuando estás de buenas" },
  {
    palabra: "rana cua cua",
    significado: "Ese dia en el baño nunca lo voy a superar jajaja",
  },
  {
    palabra: "nacional",
    significado: "Donde empezó algo que espero que nunca termine",
  },
  { palabra: "tosca", significado: "Creo que te identifica como persona" },
  {
    palabra: "tosquina",
    significado:
      "Como te empecé a decir después de que me dieras con el palo de billar en Josone",
  },
  {
    palabra: "cursi",
    significado:
      "Tanto tú como yo aunque no lo admitamos nos hemos convertido en lo que tanto nos buralábamos",
  },
  {
    palabra: "mocosa de mierda",
    significado: "Frase típica que sacamos de un reel",
  },
  {
    palabra: "trompin",
    significado: "Después de ese reel del elefante más nunca se llamó Pinga",
  },
  {
    palabra: "totin",
    significado:
      "Que puedo decir del amor que siento por semejante obra de arte",
  },
  {
    palabra: "tetis",
    significado:
      "Mis 2 niñas que una siempre se pone celosa y tengo que ir a darle cariño ",
  },
  {
    palabra: "dame el anastacio",
    significado:
      "Espero que cuando leas esto ya me lo hayas dado como promesa del año",
  },
  {
    palabra: "te amo",
    significado: "Claramente lo senti yo 1ro porque fui el 1ro en decirlo",
  },
  {
    palabra: "papitas",
    significado:
      "Creo que desde aquella 1ra vez saliendo de habachelas se volvió nuestro vicio",
  },
  {
    palabra: "acho",
    significado: "Las mejores papas amplio(sigo esperando las negras)",
  },
  { palabra: "duffis", significado: "Que pesada con las gomitas esas" },
  {
    palabra: "barbacoa",
    significado:
      "Creo que sobran las palabras con esta, simplemente nuestra palabra",
  },
  {
    palabra: "ajito",
    significado:
      "Dias aguantando tu fetidez a ajo en la boca ya que eres excesiva con el ajo",
  },
  {
    palabra: "dumplings",
    significado:
      "No entiendo que tanto le ves, pero mientras sea contigo seguiré yendo",
  },
  {
    palabra: "tienes tremenda perra peste",
    significado:
      "Frase para indicar cuando tu olor corporal, bucal, grajal, patal supera los limites de mi tolerancia",
  },
  {
    palabra: "huevitos de codornis",
    significado: "Como les dices cuando segun tú 'están cargados'",
  },
  {
    palabra: "Grecia",
    significado:
      "Cuando veas esto si todo sale bien tendrás nuestro cuadro casandonos en Grecia hasta que deje de ser un sueño",
  },
  { palabra: "chloe", significado: "Nuestra futura hija" },
  { palabra: "luka", significado: "Nuestro futuro hijo" },
  {
    palabra: "tu pochi pa'rato",
    significado:
      "Frase célebre porque saba que me ibas a decir que si a mi propuesta ",
  },
  { palabra: "5 abril", significado: "Nuestra primera cita" },
  {
    palabra: "Cine",
    significado:
      "Aquella primera salida donde me llevaste a ver una pelicula porno",
  },
  {
    palabra: "Pellis",
    significado:
      "En el cine cuando hice mi truco para cogerte la boca y me cogias los pellis con la mano",
  },
  {
    palabra: "5 julio",
    significado:
      "Cuando en tu cama te pregunté para ser mi novia y te hiciste la graciosa de decir que no jodiendo",
  },
  {
    palabra: "dias 5",
    significado: "Por el resto de tu vida ese dia va a ser mio siempre",
  },
  {
    palabra: "mariano es un campo",
    significado: "Frase que te decia al principo de tu pueblito",
  },
  {
    palabra: "UH",
    significado:
      "Todas esas veces que fui a verte que harán que siempre que vea las escaleras donde nos sentábamos me acuerde de ti",
  },
  {
    palabra: "Termo negro",
    significado:
      "No podía faltar de lo que eras encargada, de llevar el agua a todas las salidas",
  },
  {
    palabra: "cafezillo",
    significado:
      "Aunque fue antes de lo de nosotros creo que esas salidas todos los fines fueron claves para llegar a lo que somos hoy",
  },
  {
    palabra: "pizza de helado",
    significado:
      "Como olvidar nuestra 2da salida donde pedi la pizza de helado en DeLaCrem",
  },
  {
    palabra: "noticas",
    significado:
      "Que nunca me falten esas notas sorpresas regadas por el cuarto y que tenga que usar 2 escaparates para pegarlas todas",
  },
  {
    palabra: "pintura blanca",
    significado:
      "Espero que cuando leas esto ya tengamos el cuarto pintado jajaja",
  },
  {
    palabra: "barritas de chocolate",
    significado:
      "Que me las regales sabiendo lo tacaña que eres con las chucherías es un acto de amor",
  },
  {
    palabra: "rompecabezas",
    significado:
      "Para que veas que si has sido mi primera vez en muchas cosas bb",
  },
  {
    palabra: "vamos a echar un palito?",
    significado:
      "Esto no es una frase, pero cuando lo leas tenemos que singar que estás muy rica y apetecible",
  },
  {
    palabra: "vamos a echar un palito?",
    significado:
      "Esto no es una frase, pero cuando lo leas tenemos que singar que estás muy rica y apetecible",
  },
  {
    palabra: "7 hijos",
    significado:
      "Los que quieres tener pero estás loca, imaginate soportar a 7 mini carlas, que va, me doy un tiro",
  },
  {
    palabra: "3 hijos",
    significado: "[Luka, Chloe y Emma, los 3 niños que vamos a tener",
  },
  {
    palabra: "cujae",
    significado:
      "Todas esas veces que ibas a ver a tus amigas supuestamente, pero se que era a mi, que estabas frita como la papita",
  },
  {
    palabra: "habachela",
    significado:
      "El dia que me di cuenta que nunca más te vería como una amiga",
  },
  {
    palabra: "casa de alexandra",
    significado:
      "Todos durmiendo y tú y yo hablando x la madrugada y eligiendo fotos tuyas, donde 2h me parecieron 20min",
  },
  {
    palabra: "rosas en el malecon",
    significado:
      "Todas las veces que fuimos al malecón, todas las veces pasó el tipo de las rosas que pesado",
  },
  {
    palabra: "me van a dejar en 23 y paseo",
    significado:
      "Esas primeras salidas donde no te podian dejar en mi casa aun cuando ibas asalir connmigo",
  },
  {
    palabra: "FRITIQUIIII",
    significado:
      "La palabra que nunca pensamos terminar y yo creo que ya yo la completé como 10 veces",
  },
  {
    palabra: "FR",
    significado: "Como me llamaste en las historias destacdas por 1ra vez",
  },
  {
    palabra: "corazon con flecha",
    significado:
      "El emoji que desde el dia que lo vimos en el malecón lo elegimos los dos y que x siempre estará reservado para ti",
  },
  {
    palabra: "manualidades",
    significado: "Los mejores regalos son cuando los hace uno mismo",
  },
  {
    palabra: "mi gordooo",
    significado: "Que siempre pueda oirte hablarme asi con esa ternura",
  },
  {
    palabra: "2 dias sin vernos",
    significado:
      "Obviamente todo no iba a er bueno y hay que acabar de solucionar todas esas peleas innecesarias que desgastan la relación",
  },
  {
    palabra: "Balcón de casa de mi tia May",
    significado:
      "No voy a decir que pasó por si nuestos hijos leen esto pero te demostré que borracho si se puede jaja",
  },
  {
    palabra: "31 de diciembre",
    significado:
      "Primero de muchos juntos espero, donde la pasamos con las dos familias",
  },
  {
    palabra: "la isla",
    significado:
      "La justificación para echar un palito, nunca terminamos un capítulo xq terminábamos follando",
  },
  {
    palabra: "stranger things",
    significado: "La primera serie que terminamos juntos",
  },
  {
    palabra: "dame unos besitos",
    significado:
      "Tu manera bonita de decir lo que tu sabes, xq en la boca no eran",
  },
  {
    palabra: "soy precoz",
    significado:
      "En medio de un palo terminaste super rápido y soltaste eso, que manera de reírme",
  },
  {
    palabra: "hilo azul",
    significado:
      "Ese hilito x siempre será mi favorito, es verlo y querer hacerte contenido para adultos",
  },
  { palabra: "feka", significado: "Ambos sabemos que tu vistes FEKA" },
  { palabra: "miau", significado: "Esos blumers tuyos jajaja" },
  { palabra: "calnen klin", significado: "Buena copia de calvin klein bb" },
  {
    palabra: "pellizcos",
    significado:
      "Mi mamá sigue esperando que le regales alguno por los que le rompiste",
  },
  {
    palabra: "desodrante de pies",
    significado:
      "Los dos sabemos que es el mejor regalo que te he hecho, Esas NB eran una mofeta",
  },
  { palabra: "cocino/friegas", significado: "La mejor combinación" },
  {
    palabra: "la placa",
    significado: "Algun dia dejarás de ser oriental y le dirás azotea ?",
  },
  {
    palabra: "te amo (cancion)",
    significado:
      "Creo que fue la canción perfecta que resume lo que siento x ti",
  },
  {
    palabra: "eres una repa",
    significado: "Te sabes alguna canción no repa ?",
  },
  {
    palabra: "astrologia",
    significado:
      "Nuestras conversaciones de los temas más randoms de la historia",
  },
  {
    palabra: "vestido azul",
    significado: "Ese vestido te queda de pingaaa...ayy si te cojoooo",
  },
  {
    palabra: "malvavisco",
    significado:
      " Cuando lo aplastas es cuando estamos mal y cuando está entero que es más rico es cuando estamos bien",
  },
  {
    palabra:
      "si de noche lloras x no ver el sol tus lágrimas impedirán ver las estrellas",
    significado: "Una frase que me dijiste una vez",
  },
  {
    palabra: "scrabble",
    significado: "Donde me di cuenta que x ganar harías lo que fuera",
  },
  { palabra: "fan #1", significado: "Nuestros stickers de fans #1" },
  {
    palabra: "invalido",
    significado:
      "Como olvidar cuando en tu futuro me quedaba sin piernas ni brazos",
  },
  {
    palabra: "sueños",
    significado: "creo que es lo que más tenemo, nos quedan muchos por cumplir",
  },
  {
    palabra: "oscar",
    significado: "Una de las muchas cosas que te tuve que enseñar jajaja",
  },
  { palabra: "paletica", significado: "Las paleticas del MioSid " },
  {
    palabra: "sangria",
    significado:
      "Probablemente la bebida que más has pedido en nuestras salidas",
  },
  {
    palabra: "bar capablanca",
    significado: "Pasamos muchos mesiversarios ahi",
  },
  {
    palabra: "2 columpio en el nacional",
    significado: "Ese 1er beso , donde empezó todo...",
  },
  { palabra: "cafes", significado: "El 90% de nuestras salidas" },
  {
    palabra: "fresa/chocolate",
    significado:
      "Somos el lado opuesto en todo por lo que juntos hacemos la pareja perfecta",
  },
  {
    palabra: "frio/caliente",
    significado:
      "Espero siempre ser el oso que dices que soy y darte calor todas las noches",
  },
  {
    palabra: "perfume sara",
    significado:
      "Nunca podré olvidar ese olor que siempre será un viaje al pasado a nuestras primeras salidas",
  },
  { palabra: "viñales", significado: "Nuestra primera excursión juntos" },
  {
    palabra: "varadero",
    significado: "Desde la montaña rusa hasta josones fue perfecto",
  },
  { palabra: "cactus", significado: "Cuando te hacías la seca y mirate..." },
  {
    palabra: "babosa",
    significado: "Me encanta esta versión que he sacado tuya",
  },
  { palabra: "mañanero", significado: "Los mejores y no lo pienso discutir" },
  {
    palabra: "stickers de monos",
    significado: "Tu intensidad con los stickers mierderos esos de monos",
  },
  {
    palabra: "obbvioooo",
    significado: "Creo que es la frase que más me recuerda a ti",
  },
  {
    palabra: "UNO",
    significado: "Jugar al UNO siempre va a ser algo que me recuerde a ti",
  },
  {
    palabra: "trampas",
    significado: "Nunca he conocido a una persona que sea tan tramposa ño",
  },
  {
    palabra: "fotografo",
    significado:
      "Después de meses de malas fotos ya puedo decir que soy un fotógrafo gracias a tus clases",
  },
  {
    palabra: "atardeceres",
    significado:
      "Nunca se me olvida uno donde dijiste (...) Cuando se va el Sol llega la noche(... )",
  },
  {
    palabra: "destacadas",
    significado:
      "Me acuerdo la 1ra vez que las creamos, estábamos en la azotea de mi casa",
  },
  {
    palabra: "hazme un masajito",
    significado:
      "Los mios de 20min y bien dados paraluego recibir uno de 2min y oir ¨Estoy cansada¨",
  },
  {
    palabra: "estoy cansada y me duele la cabeza",
    significado: "Siempre quejándote",
  },
  {
    palabra: "jabon al piso",
    significado: "[COMPLETAR: significado especial de 'jabon al piso']",
  },
  {
    palabra: "sombrilla",
    significado: "Que vicio de ir con sombrilla a todos lados",
  },
  {
    palabra: "Protector",
    significado:
      "Aunque estuviera nublado ella se echaba protector para no quemarse (es negra)",
  },
  {
    palabra: "escupida de agua",
    significado: "No salgas de la ducha primero que yo xq te ensucio",
  },
  {
    palabra: "ese toto gordo",
    significado:
      "Que voy a decir de ese toto que de tus 50kg 45 son de ese totón",
  },
  {
    palabra: "ese toto gigante",
    significado:
      "Si estiro uno de los labios en mi ksa seguro llega a MAarianao",
  },
  {
    palabra: "stickers de abejas",
    significado: "Un tiempo que solo nos mandábamos esos stickers",
  },
  {
    palabra: "sticker mandando un beso",
    significado:
      "Se volvió tradición que lo último en mandarnos antes de dormir sea eso",
  },
  {
    palabra: "tu corsel el dia de habachela",
    significado:
      "Nunca te lo dije pero ese dia ese corsel te quedaba de locura",
  },
  {
    palabra: "ultima hora de telegram",
    significado:
      "No la he quitado porque si lo hago ya terminas de volverte loca",
  },
  {
    palabra: "luces led",
    significado: "Esas luces en tu cuarto han precenciado muy buenos momentos ",
  },
  {
    palabra: "polaroid",
    significado: "A dia de hoy llevo una en la billetera de nosotros",
  },
  {
    palabra: "foto de pasaporte",
    significado: "Foto tuya puesta en mi cuarto abajo del cristal de la cómoda",
  },
  {
    palabra: "cicatriz en un muslo",
    significado: "Hasta la cicatriz te queda HOT,  es que eres perfecta mujer",
  },
  { palabra: "mi negrita", significado: "X siempre serás mi negrita" },
  { palabra: "mi mulatona", significado: "X siempre serás mi mulatona" },
  {
    palabra: "mi trigueñona",
    significado:
      "Dios mio cuando llegas de hacerte la keratina, nunca habia visto una trigueña tan linda",
  },
  {
    palabra: "ay dios mio esas nalgas mias",
    significado:
      "Escribiendo esta linea se me paró lo siento, es que esas nalgassss...ay dios mioooo",
  },
  {
    palabra: "los 4 dedos",
    significado:
      "A cada dedo le pusimos un significad(Te amo, me quiero ir, te quiero, quiero singarte)",
  },
  {
    palabra: "melendi",
    significado: "Por tu culpa cada vez que oiga melendi me acordaré de ti",
  },
  {
    palabra: "mine mine mine",
    significado: "Lo siento pero ya de x vida serás mine mine mine",
  },
  {
    palabra: "la pieza que me faltaba",
    significado:
      "el cuadrito que me diste tenía razón, eras la pieza que me faltaba",
  },
  {
    palabra: "hilo rojo",
    significado: "Aunque rompiste el tuyo, siempre será nuestro pulso",
  },
  {
    palabra: "karla craft",
    significado: "El primer regalo que me hiciste el dia de mi cumpleaños",
  },
  {
    palabra: "letras de fritiqui de otro color",
    significado:
      "El dia que te dichavaste y admitiste que habías completado la palabr en la carta de mi cumpleaños",
  },
  {
    palabra: "cuarto de mi abuela #1",
    significado:
      "1ra vez que dormimos juntos que me tocabas a trompín disimuladamente para ver el tamaño jajaja",
  },
  {
    palabra: "cuarto de mi abuela #2",
    significado: "Fuiste me 1ra vez con alguien en ese cuarto",
  },
  {
    palabra: "baño de mi abuela",
    significado:
      "Nuestra 1ra vez haciendo el delicioso en un baño. Que duro estuvo ese palo bb",
  },
  {
    palabra: "desayunos",
    significado:
      "Un dia te hice uno y de x vida estuve condenado a hacértelo todas las mañanas",
  },
  {
    palabra: "esa barriguita mia",
    significado: "Ese abdomen perfecto...dios mioooo que hot",
  },
  {
    palabra: "69",
    significado: "La pose fantasma...Imposible hacerla contigo",
  },
  {
    palabra: "tu arriba",
    significado:
      "Que locura cuando estás arriba...te vuelves una locota amor jajaja",
  },
  {
    palabra: "la sabana en el medio en 4",
    significado: "Para que la gente no oiga shhhh",
  },
  {
    palabra: "la cama sonando",
    significado:
      "Que manera de sonar la cama de mi casa, yo creo que hasta una vez la rompimos",
  },
  {
    palabra: "kamasutra",
    significado:
      "Toda una noche viendo poses nuevas(Nunca hicimos ninguna de las que vimos)",
  },
  {
    palabra: "licencia",
    significado: "Espero ya tener licencia cuando leas esto jajaja",
  },
  {
    palabra: "mentas",
    significado:
      "Que fumar no fuera un impedimento para cogerme la boca, hasta mentas compraba, fritiquiiii",
  },
  {
    palabra: "me ven cara de millonario",
    significado:
      "Es andar contigo y automaticamente todo el mundo me ve cara de millo y quieren venderme de todo",
  },
  { palabra: "fusion frappe", significado: "Buenos frapus nos tomamos x ahi" },
  {
    palabra: "domino en pazillo",
    significado:
      "Aunque fue antes de estar juntos me acuerdo un dia en pazillo que me llamaste para jugar dominó(Cuando aun eras mala)",
  },
  {
    palabra: "domino",
    significado:
      "Gracias a tu maravilloso novio podrás decir el resto de tu vida que sabes jugar dominó",
  },
  {
    palabra: "canopi",
    significado: "Buena experiencia juntos, falta la de tirarnos del puente",
  },
  { palabra: "risas", significado: "Que nunca me falten tus risas" },
  {
    palabra: "discusiones",
    significado:
      "Aunque hemos tenido varias peleas duras, creo que todas han ayudado para llegar a estar como estamos ahora",
  },
  {
    palabra: "15 dias sin hablar",
    significado:
      "Antes de tallar cuando hablábamos x orgullosos estuvimos 15 dias sin hablar, después de eso no hemos estado más de 1 dia sin hablar",
  },
  {
    palabra: "sandro como es adrian en una relacion",
    significado:
      "Imposible olvidar cuando pensaste que sandro no me iba a decir lo que le dijeras jajaja",
  },
  {
    palabra: "daily chat",
    significado:
      "No se como pasó pero un dia te convertiste en mi chat diario sin darme cuenta hasta el dia de hoy",
  },
  {
    palabra: "promesa de dormir encueros",
    significado:
      "[COMPLETAR: significado especial de 'promesa de dormir encueros']",
  },
  {
    palabra: "lilo y stich en persona",
    significado: "Una vez la vimos en la sala de mi ksa",
  },
  {
    palabra: "el laberinto 1,2,3",
    significado:
      "Como siempre yo eligiendo buenas películas que hasta que tuvimos que copiar las otras partes de lo buena que estaba",
  },
  {
    palabra: "una frase repa para cada ocasion",
    significado:
      "No se de que manera siempre tienes una canción repa para cualquier cosa que te diga",
  },
  {
    palabra: "catarro",
    significado:
      "Esta palabra resume que lo que cojas tu lo cojo yo, con esto me refiero a que tus problemas siempre van a ser los mios también",
  },
  { palabra: "quivican", significado: "Cuando a conocí a toda tu familia" },
  {
    palabra: "alicia sal de ese cuerpo",
    significado: "No tengo dudas de que eres la versión jóven de mi abuela",
  },
  {
    palabra: "el tunel de linea",
    significado:
      "Esa nariz tuya se parece bastante, a veces la confundo con el tunel",
  },
];

// Exportar datos para acceso global
window.datosConfig = window.datosConfig || {};
window.datosConfig.palabrasSecretas = palabrasSecretas;

const diasFuturos = {
  "2024-01-15": {
    titulo: "Nuestro segundo aniversario",
    promesa: "Este año visitaremos [lugar soñado]",
    emoji: "🌟",
  },
  "2024-06-01": {
    titulo: "Nuestra primera aventura del segundo año",
    promesa: "Iremos a [actividad pendiente]",
    emoji: "🧳",
  },
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
  palabrasSecretas,
};

console.log("📊 Datos.js cargado correctamente (VERSIÓN MULTIFOTO)");
