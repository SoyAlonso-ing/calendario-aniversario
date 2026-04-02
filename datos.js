// ============================================
// ARCHIVO: datos.js - VERSIÓN MULTIFOTO
// CONTIENE: Datos con múltiples fotos por día
// ============================================

// DATOS PARA CADA DÍA ESPECIAL DEL AÑO - CON TODAS LAS FOTOS
const diasEspeciales = {
  // Día de inicio (5 abril 2025)
  "2025-04-05": {
    tipo: "galeria",
    fotos: [
      {
        url: "fotos/inicio/inicio.jpg",
        texto: "Cuando me llevaste a ver porno",
      },
    ],
    mensajes: [
      "¡Nuestra primera cita! 💘",
      "El día que empezó nuestra historia ",
    ],
  },

  // Enero
  "01-02": {
    tipo: "galeria",
    fotos: [{ url: "fotos/01-02/foto1.jpg", texto: "¡Nuestro segundo día del año!" }],
    mensajes: ["Empezando el año a tu lado ❤️"],
  },

  "01-05": {
    tipo: "galeria",
    fotos: [
      { url: "fotos/01-05/foto1.jpg", texto: "Día 5 de enero contigo" },
      { url: "fotos/01-05/foto2.jpg", texto: "Sonrisas que iluminan" },
      { url: "fotos/01-05/foto3.jpg", texto: "Momentos especiales" },
      { url: "fotos/01-05/foto4.jpg", texto: "Recuerdos inolvidables" },
      { url: "fotos/01-05/foto5.jpg", texto: "Juntos siempre" },
    ],
    mensajes: ["5 días, 5 fotos, infinitos recuerdos"],
  },

  "01-06": {
    tipo: "galeria",
    fotos: [
      { url: "fotos/01-06/foto1.jpg", texto: "6 de enero mágico" },
      { url: "fotos/01-06/foto2.jpg", texto: "Risas compartidas" },
      { url: "fotos/01-06/foto3.jpg", texto: "El mejor regalo eres tú" },
    ],
    mensajes: ["Día de Reyes contigo, el mejor regalo ❤️"],
  },

  "01-11": {
    tipo: "galeria",
    fotos: [{ url: "fotos/01-11/foto1.jpg", texto: "11 de enero especial" }],
    mensajes: ["Cada día a tu lado es único"],
  },

  "01-12": {
    tipo: "galeria",
    fotos: [
      { url: "fotos/01-12/foto1.jpg", texto: "Domingo perfecto" },
      { url: "fotos/01-12/foto2.jpg", texto: "Momentos de complicidad" },
      { url: "fotos/01-12/foto3.jpg", texto: "Sonrisas eternas" },
      { url: "fotos/01-12/foto4.jpg", texto: "Juntos en cada instante" },
      { url: "fotos/01-12/foto5.jpg", texto: "Miradas que dicen todo" },
      { url: "fotos/01-12/foto6.jpg", texto: "Abrazos que curan" },
      { url: "fotos/01-12/foto7.jpg", texto: "Ternura infinita" },
      { url: "fotos/01-12/foto8.jpg", texto: "Compartiendo sueños" },
      { url: "fotos/01-12/foto9.jpg", texto: "Amor en cada detalle" },
    ],
    mensajes: ["9 fotos, 9 razones para amarte más ❤️"],
  },

  "01-13": {
    tipo: "galeria",
    fotos: [{ url: "fotos/01-13/foto1.jpg", texto: "13 de enero feliz" }],
    mensajes: ["La suerte de tenerte a mi lado"],
  },

  "01-24": {
    tipo: "galeria",
    fotos: [
      { url: "fotos/01-24/foto1.jpg", texto: "24 de enero inolvidable" },
      { url: "fotos/01-24/foto2.jpg", texto: "Risas contagiosas" },
      { url: "fotos/01-24/foto3.jpg", texto: "Complicidad única" },
      { url: "fotos/01-24/foto4.jpg", texto: "Momentos mágicos" },
      { url: "fotos/01-24/foto5.jpg", texto: "Sonrisas que iluminan" },
      { url: "fotos/01-24/foto6.jpg", texto: "Abrazos eternos" },
      { url: "fotos/01-24/foto7.jpg", texto: "Amor en cada instante" },
    ],
    mensajes: ["7 días de enero, 7 fotos de felicidad"],
  },

  "01-25": {
    tipo: "galeria",
    fotos: [
      { url: "fotos/01-25/foto1.jpg", texto: "25 de enero especial" },
      { url: "fotos/01-25/foto2.jpg", texto: "Juntos en la aventura" },
      { url: "fotos/01-25/foto3.jpg", texto: "Miradas de amor" },
      { url: "fotos/01-25/foto4.jpg", texto: "Risas compartidas" },
      { url: "fotos/01-25/foto5.jpg", texto: "Momentos únicos" },
      { url: "fotos/01-25/foto6.jpg", texto: "Complicidad total" },
    ],
    mensajes: ["Mediados de enero, mediados de felicidad"],
  },

  // Febrero
  "02-14": {
    tipo: "galeria",
    fotos: [
      { url: "fotos/02-14/foto1.jpg", texto: "Nuestro primer San Valentín juntos 💘" },
      { url: "fotos/02-14/foto2.jpg", texto: "La cena más especial" },
      { url: "fotos/02-14/foto3.jpg", texto: "El regalo perfecto" },
    ],
    mensajes: ["El amor no necesita un día especial, pero hoy lo celebramos doble"],
  },

  // Marzo
  "03-20": {
    tipo: "foto",
    contenido: "fotos/03-20.jpg",
    texto: "Paseo primaveral juntos 🌸",
  },

  // Abril
  "04-14": {
    tipo: "galeria",
    fotos: [
      { url: "fotos/04-14/foto1.jpg", texto: "Combinados hasta sin querer" },
      { url: "fotos/04-14/foto2.jpg", texto: "Mirar a la cámara nunca ha sido lo mío" },
      { url: "fotos/04-14/foto3.jpg", texto: "Linda noche" },
      { url: "fotos/04-14/foto4.jpg", texto: "La pizza de helado" },
      { url: "fotos/04-14/foto5.jpg", texto: "Nunca voy a olvidar ese olor" },
    ],
    videos: [
      {
      url: "fotos/04-14/video1.MP4",
      miniatura: "fotos/04-14/foto1.jpg",
      texto: "fotos/04-14/foto1.jpg"
      },
    ],
    mensajes: [
      "Nuestro primer beso",
      "Toda la noche para que pasara lo inevitable al final",
      "Nunca vamos a saber como nos despedimos ese día",
      "Ese día bautizamos nuestro banco y nuestro lugar"
    ],
  },

  "04-20": {
    tipo: "galeria",
    fotos: [
      { url: "fotos/04-20/foto1.jpg", texto: "Mándame la ubi y te llego" },
      { url: "fotos/04-20/foto2.jpg", texto: "Es aquí?" },
      { url: "fotos/04-20/foto3.jpg", texto: "Y esos muslones?" },
      { url: "fotos/04-20/foto4.jpg", texto: "Se nota que la tiró mi móvil" },
      { url: "fotos/04-20/foto5.jpg", texto: "Que bellos" },
      { url: "fotos/04-20/foto6.jpg", texto: "Mira esa carita" },
      { url: "fotos/04-20/foto7.jpg", texto: "Tenía un poco de coriza" },
    ],
    mensajes: ["Mi primera vez en tu casa"],
  },

  "04-24": {
    tipo: "galeria",
    fotos: [{ url: "fotos/04-24/foto1.jpg", texto: "En las escaleras..." }],
    mensajes: ["Cuando iba a verte a la UH"],
  },

  "04-30": {
    tipo: "galeria",
    fotos: [
      { url: "fotos/04-30/foto1.jpg", texto: "Cuando empecé a darte las mieles" },
      { url: "fotos/04-30/foto2.jpg", texto: "No ganamos un play" },
    ],
    mensajes: ["Domineta en la casa FEU"],
  },

  // Mayo
  "05-05": {
    tipo: "galeria",
    fotos: [{ url: "fotos/05-05/foto1.jpg", texto: "Las mejores" }],
    mensajes: ["Las BBQ siempre serán las mejores"],
  },

  "05-06": {
    tipo: "galeria",
    fotos: [{ url: "fotos/05-06/foto1.jpg", texto: "Que lindo el buki" }],
    mensajes: ["Cuando empezaste a venir  mi casa"],
  },

  "05-07": {
    tipo: "galeria",
    fotos: [{ url: "fotos/05-07/foto1.jpg", texto: "ups nos cogieron" }],
    mensajes: ["Cuando ibas a verme a la CUJAE"],
  },

  "05-16": {
    tipo: "galeria",
    fotos: [
      { url: "fotos/05-16/foto1.jpg", texto: "Lindo atardecer" },
      { url: "fotos/05-16/foto2.jpg", texto: "El más risueño" },
      { url: "fotos/05-16/foto3.jpg", texto: "MUAKKK" },
    ],
    mensajes: [
      "Cuando empezamos algo que sería costumbre",
      "Nuestro primer beso captado en cámaras",

    ],
  },

  "05-17": {
    tipo: "galeria",
    fotos: [{ url: "fotos/05-17/foto1.jpg", texto: "Pruebas de que tení razón" }],
    mensajes: ["Tú como siempre porfiándome todo"],
  },

  "05-18": {
    tipo: "galeria",
    fotos: [
      { url: "fotos/05-18/foto1.jpg", texto: "Siempre parece que me violas" },
      { url: "fotos/05-18/foto2.jpg", texto: "Mi cara dice más que 1000 palabras" },
      { url: "fotos/05-18/foto3.jpg", texto: "Que lindos" },
      { url: "fotos/05-18/foto4.jpg", texto: "Que parejita se estaba formando" },
      { url: "fotos/05-18/foto5.jpg", texto: "Malecón" },
      { url: "fotos/05-18/foto6.jpg", texto: "¡Deja de agarrarme la cara!" },
      { url: "fotos/05-18/foto7.jpg", texto: "Ni tan bueno estaba" },
      { url: "fotos/05-18/foto8.jpg", texto: "Bellos" },
    ],
    mensajes: ["Kanda"],
  },

  "05-19": {
    tipo: "galeria",
    fotos: [{ url: "fotos/05-19/foto1.jpg", texto: "La 1ra de muchas" }],
    mensajes: ["Esos vendedores del malecónnnn"],
  },

  "05-22": {
    tipo: "galeria",
    fotos: [
      { url: "fotos/05-22/foto1.jpg", texto: "Porfiando" },
      { url: "fotos/05-22/foto2.jpg", texto: "La jeringuilla" },
    ],
    mensajes: ["Llevándome la contraria como siempre"],
  },

  "05-23": {
    tipo: "galeria",
    fotos: [
      { url: "fotos/05-23/foto1.jpg", texto: "Gin&Sangría" },
      { url: "fotos/05-23/foto2.jpg", texto: "Que fotazas tira mi novia" },
      { url: "fotos/05-23/foto3.jpg", texto: "Fresa&Chocolate" },
      { url: "fotos/05-23/foto4.jpg", texto: "Carla&Adrián" },
    ],
    mensajes: ["Salidita pija"],
  },

  "05-24": {
    tipo: "galeria",
    fotos: [
      { url: "fotos/05-24/foto1.jpg", texto: "1ra y 70" },
      { url: "fotos/05-24/foto2.jpg", texto: "Food Truck" },
      { url: "fotos/05-24/foto3.jpg", texto: "Estaban buenas las bolitas" },
      { url: "fotos/05-24/foto4.jpg", texto: "rico rico" },
    ],
    mensajes: ["Pelegrín"],
  },

  "05-27": {
    tipo: "galeria",
    fotos: [{ url: "fotos/05-27/foto1.jpg", texto: "Se supone que ese era yo" }],
    mensajes: ["Ya estabas Fritiqui"],
  },

  "05-30": {
    tipo: "galeria",
    fotos: [{ url: "fotos/05-30/foto1.jpg", texto: "Cuando te llevaste mi vicio" }],
    mensajes: ["Mi vicio antes de que fueras tú"],
  },

  "05-31": {
    tipo: "galeria",
    fotos: [
      { url: "fotos/05-31/foto1.jpg", texto: "Fotaza" },
      { url: "fotos/05-31/foto2.jpg", texto: "Que rica estaba la comida" },
      { url: "fotos/05-31/foto3.jpg", texto: "Un titii" },
      { url: "fotos/05-31/foto4.jpg", texto: "tacoss" },
      { url: "fotos/05-31/foto5.jpg", texto: "Que linda mi pochi" },
      { url: "fotos/05-31/foto6.jpg", texto: "Ya aquí tiraba buenas fotos" },
    ],
    mensajes: ["El fortuna",
      "La Habana",
    ],
  },

  // Junio
  "06-04": {
    tipo: "galeria",
    fotos: [
      { url: "fotos/06-04/foto1.jpg", texto: "4 de junio especial" },
      { url: "fotos/06-04/foto2.jpg", texto: "Miércoles perfecto" },
      { url: "fotos/06-04/foto3.jpg", texto: "Sonrisas eternas" },
      { url: "fotos/06-04/foto4.jpg", texto: "Risas compartidas" },
      { url: "fotos/06-04/foto5.jpg", texto: "Complicidad única" },
    ],
    mensajes: ["5 días de junio, 5 fotos de felicidad"],
  },

  "06-07": {
    tipo: "galeria",
    fotos: [
      { url: "fotos/06-07/foto1.jpg", texto: "7 de junio inolvidable" },
      { url: "fotos/06-07/foto2.jpg", texto: "Sábado perfecto" },
      { url: "fotos/06-07/foto3.jpg", texto: "Risas contagiosas" },
      { url: "fotos/06-07/foto4.jpg", texto: "Momentos mágicos" },
      { url: "fotos/06-07/foto5.jpg", texto: "Amor en cada instante" },
    ],
    mensajes: ["Un sábado perfecto con 5 fotos de recuerdo"],
  },

  "06-11": {
    tipo: "galeria",
    fotos: [{ url: "fotos/06-11/foto1.jpg", texto: "11 de junio especial" }],
    mensajes: ["Martes de amor"],
  },

  "06-13": {
    tipo: "galeria",
    fotos: [{ url: "fotos/06-13/foto1.jpg", texto: "13 de junio mágico" }],
    mensajes: ["Viernes 13 de suerte"],
  },

  "06-19": {
    tipo: "galeria",
    fotos: [
      { url: "fotos/06-19/foto1.jpg", texto: "19 de junio inolvidable" },
      { url: "fotos/06-19/foto2.jpg", texto: "Miércoles especial" },
      { url: "fotos/06-19/foto3.jpg", texto: "Sonrisas eternas" },
      { url: "fotos/06-19/foto4.jpg", texto: "Complicidad total" },
    ],
    mensajes: ["4 días de junio, 4 fotos de amor"],
  },

  "06-21": {
    tipo: "galeria",
    fotos: [
      { url: "fotos/06-21/foto1.jpg", texto: "21 de junio, primer día de verano" },
      { url: "fotos/06-21/foto2.jpg", texto: "Sol y amor" },
      { url: "fotos/06-21/foto3.jpg", texto: "Risas veraniegas" },
      { url: "fotos/06-21/foto4.jpg", texto: "Momentos dorados" },
      { url: "fotos/06-21/foto5.jpg", texto: "Abrazos eternos" },
      { url: "fotos/06-21/foto6.jpg", texto: "Verano contigo" },
    ],
    mensajes: ["¡Empieza el verano con 6 fotos de felicidad!"],
  },

  "06-22": {
    tipo: "galeria",
    fotos: [
      { url: "fotos/06-22/foto1.jpg", texto: "22 de junio especial" },
      { url: "fotos/06-22/foto2.jpg", texto: "Domingo perfecto" },
      { url: "fotos/06-22/foto3.jpg", texto: "Sonrisas eternas" },
      { url: "fotos/06-22/foto4.jpg", texto: "Risas compartidas" },
      { url: "fotos/06-22/foto5.jpg", texto: "Abrazos que curan" },
      { url: "fotos/06-22/foto6.jpg", texto: "Miradas cómplices" },
      { url: "fotos/06-22/foto7.jpg", texto: "Momentos únicos" },
      { url: "fotos/06-22/foto8.jpg", texto: "Complicidad total" },
      { url: "fotos/06-22/foto9.jpg", texto: "Amor en cada instante" },
    ],
    mensajes: ["9 fotos para un domingo perfecto"],
  },

  "06-28": {
    tipo: "galeria",
    fotos: [{ url: "fotos/06-28/foto1.jpg", texto: "28 de junio inolvidable" }],
    mensajes: ["Sábado de amor"],
  },

  "06-29": {
    tipo: "galeria",
    fotos: [
      { url: "fotos/06-29/foto1.jpg", texto: "29 de junio especial" },
      { url: "fotos/06-29/foto2.jpg", texto: "Domingo perfecto" },
      { url: "fotos/06-29/foto3.jpg", texto: "Sonrisas eternas" },
      { url: "fotos/06-29/foto4.jpg", texto: "Risas compartidas" },
      { url: "fotos/06-29/foto5.jpg", texto: "Abrazos que curan" },
      { url: "fotos/06-29/foto6.jpg", texto: "Miradas cómplices" },
      { url: "fotos/06-29/foto7.jpg", texto: "Momentos únicos" },
    ],
    mensajes: ["7 fotos para despedir junio"],
  },

  // Julio
  "07-01": {
    tipo: "galeria",
    fotos: [{ url: "fotos/07-01/foto1.jpg", texto: "¡Comienza julio!" }],
    mensajes: ["Nuevo mes, nuevas aventuras juntos"],
  },

  "07-04": {
    tipo: "galeria",
    fotos: [
      { url: "fotos/07-04/foto1.jpg", texto: "4 de julio especial" },
      { url: "fotos/07-04/foto2.jpg", texto: "Día de verano" },
      { url: "fotos/07-04/foto3.jpg", texto: "Risas contagiosas" },
      { url: "fotos/07-04/foto4.jpg", texto: "Momentos mágicos" },
      { url: "fotos/07-04/foto5.jpg", texto: "Amor en cada instante" },
    ],
    mensajes: ["5 días de julio, 5 fotos de felicidad"],
  },

  "07-05": {
    tipo: "galeria",
    fotos: [
      { url: "fotos/07-05/foto1.jpg", texto: "5 de julio inolvidable" },
      { url: "fotos/07-05/foto2.jpg", texto: "Sábado perfecto" },
    ],
    mensajes: ["2 días, 2 fotos, mucho amor"],

    carta: {
    titulo: "Para ti, en este 5 de julio",
    contenido: "Hoy quiero recordarte lo especial que eres para mí. Desde aquel día en tu cama, cuando te pregunté para ser mi novia y te hiciste la graciosa diciendo que no... sabías que sí. Este día siempre será nuestro. Te amo.",
    emoji: "💌"
  }
  },

  "07-13": {
    tipo: "galeria",
    fotos: [
      { url: "fotos/07-13/foto1.jpg", texto: "13 de julio mágico" },
      { url: "fotos/07-13/foto2.jpg", texto: "Domingo perfecto" },
      { url: "fotos/07-13/foto3.jpg", texto: "Sonrisas eternas" },
      { url: "fotos/07-13/foto4.jpg", texto: "Risas compartidas" },
      { url: "fotos/07-13/foto5.jpg", texto: "Abrazos que curan" },
      { url: "fotos/07-13/foto6.jpg", texto: "Miradas cómplices" },
      { url: "fotos/07-13/foto7.jpg", texto: "Momentos únicos" },
      { url: "fotos/07-13/foto8.jpg", texto: "Complicidad total" },
      { url: "fotos/07-13/foto9.jpg", texto: "Amor en cada instante" },
    ],
    mensajes: ["9 fotos para un domingo perfecto"],
  },

  "07-18": {
    tipo: "galeria",
    fotos: [
      { url: "fotos/07-18/foto1.jpg", texto: "18 de julio especial" },
      { url: "fotos/07-18/foto2.jpg", texto: "Viernes perfecto" },
      { url: "fotos/07-18/foto3.jpg", texto: "Sonrisas eternas" },
      { url: "fotos/07-18/foto4.jpg", texto: "Risas compartidas" },
      { url: "fotos/07-18/foto5.jpg", texto: "Abrazos que curan" },
      { url: "fotos/07-18/foto6.jpg", texto: "Momentos únicos" },
    ],
    mensajes: ["6 fotos para un viernes perfecto"],
  },

  "07-19": {
    tipo: "galeria",
    fotos: [
      { url: "fotos/07-19/foto1.jpg", texto: "19 de julio inolvidable" },
      { url: "fotos/07-19/foto2.jpg", texto: "Sábado perfecto" },
      { url: "fotos/07-19/foto3.jpg", texto: "Complicidad única" },
    ],
    mensajes: ["3 sábados, 3 fotos de felicidad"],
  },

  "07-20": {
    tipo: "galeria",
    fotos: [{ url: "fotos/07-20/foto1.jpg", texto: "20 de julio mágico" }],
    mensajes: ["Domingo de amor"],
  },

  "07-21": {
    tipo: "galeria",
    fotos: [{ url: "fotos/07-21/foto1.jpg", texto: "21 de julio especial" }],
    mensajes: ["Lunes perfecto"],
  },

  "07-23": {
    tipo: "galeria",
    fotos: [{ url: "fotos/07-23/foto1.jpg", texto: "23 de julio inolvidable" }],
    mensajes: ["Miércoles de amor"],
  },

  "07-24": {
    tipo: "galeria",
    fotos: [
      { url: "fotos/07-24/foto1.jpg", texto: "24 de julio especial" },
      { url: "fotos/07-24/foto2.jpg", texto: "Jueves perfecto" },
      { url: "fotos/07-24/foto3.jpg", texto: "Sonrisas eternas" },
      { url: "fotos/07-24/foto4.jpg", texto: "Risas compartidas" },
      { url: "fotos/07-24/foto5.jpg", texto: "Abrazos que curan" },
      { url: "fotos/07-24/foto6.jpg", texto: "Miradas cómplices" },
      { url: "fotos/07-24/foto7.jpg", texto: "Momentos únicos" },
      { url: "fotos/07-24/foto8.jpg", texto: "Complicidad total" },
      { url: "fotos/07-24/foto9.jpg", texto: "Amor en cada instante" },
    ],
    mensajes: ["9 fotos para un jueves perfecto"],
  },

  "07-25": {
    tipo: "galeria",
    fotos: [{ url: "fotos/07-25/foto1.jpg", texto: "25 de julio mágico" }],
    mensajes: ["Viernes de amor"],
  },

  "07-26": {
    tipo: "galeria",
    fotos: [
      { url: "fotos/07-26/foto1.jpg", texto: "26 de julio inolvidable" },
      { url: "fotos/07-26/foto2.jpg", texto: "Sábado perfecto" },
      { url: "fotos/07-26/foto3.jpg", texto: "Sonrisas eternas" },
      { url: "fotos/07-26/foto4.jpg", texto: "Risas compartidas" },
      { url: "fotos/07-26/foto5.jpg", texto: "Momentos únicos" },
    ],
    mensajes: ["5 fotos para un sábado perfecto"],
  },

  "07-27": {
    tipo: "galeria",
    fotos: [
      { url: "fotos/07-27/foto1.jpg", texto: "27 de julio especial" },
      { url: "fotos/07-27/foto2.jpg", texto: "Domingo perfecto" },
      { url: "fotos/07-27/foto3.jpg", texto: "Sonrisas eternas" },
      { url: "fotos/07-27/foto4.jpg", texto: "Risas compartidas" },
      { url: "fotos/07-27/foto5.jpg", texto: "Momentos únicos" },
    ],
    mensajes: ["5 fotos para un domingo perfecto"],
  },

  "07-28": {
    tipo: "galeria",
    fotos: [
      { url: "fotos/07-28/foto1.jpg", texto: "28 de julio mágico" },
      { url: "fotos/07-28/foto2.jpg", texto: "Lunes perfecto" },
      { url: "fotos/07-28/foto3.jpg", texto: "Sonrisas eternas" },
      { url: "fotos/07-28/foto4.jpg", texto: "Risas compartidas" },
      { url: "fotos/07-28/foto5.jpg", texto: "Abrazos que curan" },
      { url: "fotos/07-28/foto6.jpg", texto: "Miradas cómplices" },
      { url: "fotos/07-28/foto7.jpg", texto: "Momentos únicos" },
    ],
    mensajes: ["7 fotos para un lunes perfecto"],
  },

  "07-29": {
    tipo: "galeria",
    fotos: [{ url: "fotos/07-29/foto1.jpg", texto: "29 de julio especial" }],
    mensajes: ["Martes de amor"],
  },

  // Agosto
  "08-06": {
    tipo: "galeria",
    fotos: [
      { url: "fotos/08-06/foto1.jpg", texto: "6 de agosto inolvidable" },
      { url: "fotos/08-06/foto2.jpg", texto: "Martes perfecto" },
      { url: "fotos/08-06/foto3.jpg", texto: "Sonrisas eternas" },
      { url: "fotos/08-06/foto4.jpg", texto: "Risas compartidas" },
      { url: "fotos/08-06/foto5.jpg", texto: "Abrazos que curan" },
      { url: "fotos/08-06/foto6.jpg", texto: "Miradas cómplices" },
      { url: "fotos/08-06/foto7.jpg", texto: "Momentos únicos" },
      { url: "fotos/08-06/foto8.jpg", texto: "Complicidad total" },
    ],
    mensajes: ["8 fotos para un martes perfecto"],
  },

  "08-07": {
    tipo: "galeria",
    fotos: [
      { url: "fotos/08-07/foto1.jpg", texto: "7 de agosto especial" },
      { url: "fotos/08-07/foto2.jpg", texto: "Miércoles perfecto" },
      { url: "fotos/08-07/foto3.jpg", texto: "Sonrisas eternas" },
      { url: "fotos/08-07/foto4.jpg", texto: "Risas compartidas" },
      { url: "fotos/08-07/foto5.jpg", texto: "Abrazos que curan" },
      { url: "fotos/08-07/foto6.jpg", texto: "Miradas cómplices" },
      { url: "fotos/08-07/foto7.jpg", texto: "Momentos únicos" },
      { url: "fotos/08-07/foto8.jpg", texto: "Complicidad total" },
      { url: "fotos/08-07/foto9.jpg", texto: "Amor en cada instante" },
    ],
    mensajes: ["9 fotos para un miércoles perfecto"],
  },

  "08-09": {
    tipo: "galeria",
    fotos: [
      { url: "fotos/08-09/foto1.jpg", texto: "9 de agosto mágico" },
      { url: "fotos/08-09/foto2.jpg", texto: "Sábado perfecto" },
      { url: "fotos/08-09/foto3.jpg", texto: "Sonrisas eternas" },
      { url: "fotos/08-09/foto4.jpg", texto: "Complicidad única" },
    ],
    mensajes: ["4 fotos para un sábado perfecto"],
  },

  "08-10": {
    tipo: "galeria",
    fotos: [
      { url: "fotos/08-10/foto1.jpg", texto: "10 de agosto inolvidable" },
      { url: "fotos/08-10/foto2.jpg", texto: "Domingo perfecto" },
      { url: "fotos/08-10/foto3.jpg", texto: "Sonrisas eternas" },
      { url: "fotos/08-10/foto4.jpg", texto: "Risas compartidas" },
      { url: "fotos/08-10/foto5.jpg", texto: "Abrazos que curan" },
      { url: "fotos/08-10/foto6.jpg", texto: "Miradas cómplices" },
      { url: "fotos/08-10/foto7.jpg", texto: "Momentos únicos" },
    ],
    mensajes: ["7 fotos para un domingo perfecto"],
  },

  "08-11": {
    tipo: "galeria",
    fotos: [{ url: "fotos/08-11/foto1.jpg", texto: "11 de agosto especial" }],
    mensajes: ["Lunes de amor"],
  },

  "08-16": {
    tipo: "galeria",
    fotos: [
      { url: "fotos/08-16/foto1.jpg", texto: "16 de agosto mágico" },
      { url: "fotos/08-16/foto2.jpg", texto: "Sábado perfecto" },
      { url: "fotos/08-16/foto3.jpg", texto: "Sonrisas eternas" },
      { url: "fotos/08-16/foto4.jpg", texto: "Risas compartidas" },
      { url: "fotos/08-16/foto5.jpg", texto: "Abrazos que curan" },
      { url: "fotos/08-16/foto6.jpg", texto: "Miradas cómplices" },
      { url: "fotos/08-16/foto7.jpg", texto: "Momentos únicos" },
      { url: "fotos/08-16/foto8.jpg", texto: "Complicidad total" },
      { url: "fotos/08-16/foto9.jpg", texto: "Amor en cada instante" },
    ],
    mensajes: ["9 fotos para un sábado perfecto"],
  },

  "08-17": {
    tipo: "galeria",
    fotos: [
      { url: "fotos/08-17/foto1.jpg", texto: "17 de agosto inolvidable" },
      { url: "fotos/08-17/foto2.jpg", texto: "Domingo perfecto" },
      { url: "fotos/08-17/foto3.jpg", texto: "Sonrisas eternas" },
      { url: "fotos/08-17/foto4.jpg", texto: "Risas compartidas" },
      { url: "fotos/08-17/foto5.jpg", texto: "Abrazos que curan" },
      { url: "fotos/08-17/foto6.jpg", texto: "Miradas cómplices" },
      { url: "fotos/08-17/foto7.jpg", texto: "Momentos únicos" },
      { url: "fotos/08-17/foto8.jpg", texto: "Complicidad total" },
      { url: "fotos/08-17/foto9.jpg", texto: "Amor en cada instante" },
      { url: "fotos/08-17/foto10.jpg", texto: "Recuerdos eternos" },
      { url: "fotos/08-17/foto11.jpg", texto: "Felicidad plena" },
      { url: "fotos/08-17/foto12.jpg", texto: "Aventuras juntos" },
      { url: "fotos/08-17/foto13.jpg", texto: "Miradas que enamoran" },
      { url: "fotos/08-17/foto14.jpg", texto: "Juntos para siempre" },
    ],
    mensajes: ["¡14 fotos para un domingo espectacular!"],
  },

  "08-20": {
    tipo: "galeria",
    fotos: [
      { url: "fotos/08-20/foto1.jpg", texto: "20 de agosto especial" },
      { url: "fotos/08-20/foto2.jpg", texto: "Jueves perfecto" },
      { url: "fotos/08-20/foto3.jpg", texto: "Sonrisas eternas" },
      { url: "fotos/08-20/foto4.jpg", texto: "Risas compartidas" },
      { url: "fotos/08-20/foto5.jpg", texto: "Momentos únicos" },
    ],
    mensajes: ["5 fotos para un jueves perfecto"],
  },

  "08-22": {
    tipo: "galeria",
    fotos: [
      { url: "fotos/08-22/foto1.jpg", texto: "22 de agosto mágico" },
      { url: "fotos/08-22/foto2.jpg", texto: "Viernes perfecto" },
      { url: "fotos/08-22/foto3.jpg", texto: "Complicidad única" },
    ],
    mensajes: ["3 fotos para un viernes perfecto"],
  },

  "08-30": {
    tipo: "galeria",
    fotos: [
      { url: "fotos/08-30/foto1.jpg", texto: "30 de agosto inolvidable" },
      { url: "fotos/08-30/foto2.jpg", texto: "Sábado perfecto" },
      { url: "fotos/08-30/foto3.jpg", texto: "Sonrisas eternas" },
      { url: "fotos/08-30/foto4.jpg", texto: "Risas compartidas" },
      { url: "fotos/08-30/foto5.jpg", texto: "Abrazos que curan" },
      { url: "fotos/08-30/foto6.jpg", texto: "Momentos únicos" },
    ],
    mensajes: ["6 fotos para despedir agosto"],
  },

  // Septiembre
  "09-01": {
    tipo: "galeria",
    fotos: [
      { url: "fotos/09-01/foto1.jpg", texto: "¡Comienza septiembre!" },
      { url: "fotos/09-01/foto2.jpg", texto: "Lunes perfecto" },
      { url: "fotos/09-01/foto3.jpg", texto: "Sonrisas eternas" },
      { url: "fotos/09-01/foto4.jpg", texto: "Complicidad única" },
    ],
    mensajes: ["Nuevo mes con 4 fotos de amor"],
  },

  "09-05": {
    tipo: "galeria",
    fotos: [
      { url: "fotos/09-05/foto1.jpg", texto: "5 de septiembre especial" },
      { url: "fotos/09-05/foto2.jpg", texto: "Jueves perfecto" },
      { url: "fotos/09-05/foto3.jpg", texto: "Sonrisas eternas" },
      { url: "fotos/09-05/foto4.jpg", texto: "Risas compartidas" },
      { url: "fotos/09-05/foto5.jpg", texto: "Abrazos que curan" },
      { url: "fotos/09-05/foto6.jpg", texto: "Miradas cómplices" },
      { url: "fotos/09-05/foto7.jpg", texto: "Momentos únicos" },
      { url: "fotos/09-05/foto8.jpg", texto: "Complicidad total" },
      { url: "fotos/09-05/foto9.jpg", texto: "Amor en cada instante" },
      { url: "fotos/09-05/foto10.jpg", texto: "Recuerdos eternos" },
      { url: "fotos/09-05/foto11.jpg", texto: "Felicidad plena" },
    ],
    mensajes: ["¡11 fotos para un día espectacular!"],
  },

  "09-06": {
    tipo: "galeria",
    fotos: [
      { url: "fotos/09-06/foto1.jpg", texto: "6 de septiembre mágico" },
      { url: "fotos/09-06/foto2.jpg", texto: "Sábado perfecto" },
      { url: "fotos/09-06/foto3.jpg", texto: "Sonrisas eternas" },
      { url: "fotos/09-06/foto4.jpg", texto: "Risas compartidas" },
      { url: "fotos/09-06/foto5.jpg", texto: "Abrazos que curan" },
      { url: "fotos/09-06/foto6.jpg", texto: "Miradas cómplices" },
      { url: "fotos/09-06/foto7.jpg", texto: "Momentos únicos" },
    ],
    mensajes: ["7 fotos para un sábado perfecto"],
  },

  "09-07": {
    tipo: "galeria",
    fotos: [
      { url: "fotos/09-07/foto1.jpg", texto: "7 de septiembre inolvidable" },
      { url: "fotos/09-07/foto2.jpg", texto: "Domingo perfecto" },
      { url: "fotos/09-07/foto3.jpg", texto: "Sonrisas eternas" },
      { url: "fotos/09-07/foto4.jpg", texto: "Risas compartidas" },
      { url: "fotos/09-07/foto5.jpg", texto: "Abrazos que curan" },
      { url: "fotos/09-07/foto6.jpg", texto: "Miradas cómplices" },
      { url: "fotos/09-07/foto7.jpg", texto: "Momentos únicos" },
      { url: "fotos/09-07/foto8.jpg", texto: "Complicidad total" },
    ],
    mensajes: ["8 fotos para un domingo perfecto"],
  },

  "09-09": {
    tipo: "galeria",
    fotos: [{ url: "fotos/09-09/foto1.jpg", texto: "9 de septiembre especial" }],
    mensajes: ["Martes de amor"],
  },

  "09-11": {
    tipo: "galeria",
    fotos: [
      { url: "fotos/09-11/foto1.jpg", texto: "11 de septiembre mágico" },
      { url: "fotos/09-11/foto2.jpg", texto: "Miércoles perfecto" },
      { url: "fotos/09-11/foto3.jpg", texto: "Sonrisas eternas" },
      { url: "fotos/09-11/foto4.jpg", texto: "Risas compartidas" },
      { url: "fotos/09-11/foto5.jpg", texto: "Abrazos que curan" },
      { url: "fotos/09-11/foto6.jpg", texto: "Miradas cómplices" },
      { url: "fotos/09-11/foto7.jpg", texto: "Momentos únicos" },
    ],
    mensajes: ["7 fotos para un miércoles perfecto"],
  },

  "09-13": {
    tipo: "galeria",
    fotos: [
      { url: "fotos/09-13/foto1.jpg", texto: "13 de septiembre inolvidable" },
      { url: "fotos/09-13/foto2.jpg", texto: "Sábado perfecto" },
      { url: "fotos/09-13/foto3.jpg", texto: "Sonrisas eternas" },
      { url: "fotos/09-13/foto4.jpg", texto: "Complicidad única" },
    ],
    mensajes: ["4 fotos para un sábado perfecto"],
  },

  "09-18": {
    tipo: "galeria",
    fotos: [
      { url: "fotos/09-18/foto1.jpg", texto: "18 de septiembre especial" },
      { url: "fotos/09-18/foto2.jpg", texto: "Miércoles perfecto" },
      { url: "fotos/09-18/foto3.jpg", texto: "Sonrisas eternas" },
      { url: "fotos/09-18/foto4.jpg", texto: "Risas compartidas" },
      { url: "fotos/09-18/foto5.jpg", texto: "Abrazos que curan" },
      { url: "fotos/09-18/foto6.jpg", texto: "Miradas cómplices" },
      { url: "fotos/09-18/foto7.jpg", texto: "Momentos únicos" },
      { url: "fotos/09-18/foto8.jpg", texto: "Complicidad total" },
      { url: "fotos/09-18/foto9.jpg", texto: "Amor en cada instante" },
    ],
    mensajes: ["9 fotos para un miércoles perfecto"],
  },

  "09-19": {
    tipo: "galeria",
    fotos: [
      { url: "fotos/09-19/foto1.jpg", texto: "19 de septiembre mágico" },
      { url: "fotos/09-19/foto2.jpg", texto: "Jueves perfecto" },
      { url: "fotos/09-19/foto3.jpg", texto: "Sonrisas eternas" },
      { url: "fotos/09-19/foto4.jpg", texto: "Risas compartidas" },
      { url: "fotos/09-19/foto5.jpg", texto: "Abrazos que curan" },
      { url: "fotos/09-19/foto6.jpg", texto: "Miradas cómplices" },
      { url: "fotos/09-19/foto7.jpg", texto: "Momentos únicos" },
      { url: "fotos/09-19/foto8.jpg", texto: "Complicidad total" },
      { url: "fotos/09-19/foto9.jpg", texto: "Amor en cada instante" },
      { url: "fotos/09-19/foto10.jpg", texto: "Recuerdos eternos" },
      { url: "fotos/09-19/foto11.jpg", texto: "Felicidad plena" },
      { url: "fotos/09-19/foto12.jpg", texto: "Aventuras juntos" },
      { url: "fotos/09-19/foto13.jpg", texto: "Miradas que enamoran" },
      { url: "fotos/09-19/foto14.jpg", texto: "Juntos para siempre" },
      { url: "fotos/09-19/foto15.jpg", texto: "Sonrisas contagiosas" },
      { url: "fotos/09-19/foto16.jpg", texto: "Abrazos eternos" },
      { url: "fotos/09-19/foto17.jpg", texto: "Complicidad perfecta" },
      { url: "fotos/09-19/foto18.jpg", texto: "Momentos dorados" },
      { url: "fotos/09-19/foto19.jpg", texto: "Risas inolvidables" },
      { url: "fotos/09-19/foto20.jpg", texto: "Amor infinito" },
      { url: "fotos/09-19/foto21.jpg", texto: "Para siempre juntos" },
    ],
    mensajes: ["¡21 fotos para un día increíble!"],
  },

  "09-20": {
    tipo: "galeria",
    fotos: [
      { url: "fotos/09-20/foto1.jpg", texto: "20 de septiembre inolvidable" },
      { url: "fotos/09-20/foto2.jpg", texto: "Sábado perfecto" },
      { url: "fotos/09-20/foto3.jpg", texto: "Sonrisas eternas" },
      { url: "fotos/09-20/foto4.jpg", texto: "Risas compartidas" },
      { url: "fotos/09-20/foto5.jpg", texto: "Abrazos que curan" },
      { url: "fotos/09-20/foto6.jpg", texto: "Miradas cómplices" },
      { url: "fotos/09-20/foto7.jpg", texto: "Momentos únicos" },
      { url: "fotos/09-20/foto8.jpg", texto: "Complicidad total" },
      { url: "fotos/09-20/foto9.jpg", texto: "Amor en cada instante" },
    ],
    mensajes: ["9 fotos para un sábado perfecto"],
  },

  "09-21": {
    tipo: "galeria",
    fotos: [
      { url: "fotos/09-21/foto1.jpg", texto: "21 de septiembre especial" },
      { url: "fotos/09-21/foto2.jpg", texto: "Domingo perfecto" },
      { url: "fotos/09-21/foto3.jpg", texto: "Sonrisas eternas" },
      { url: "fotos/09-21/foto4.jpg", texto: "Risas compartidas" },
      { url: "fotos/09-21/foto5.jpg", texto: "Abrazos que curan" },
      { url: "fotos/09-21/foto6.jpg", texto: "Momentos únicos" },
    ],
    mensajes: ["6 fotos para un domingo perfecto"],
  },

  "09-28": {
    tipo: "galeria",
    fotos: [
      { url: "fotos/09-28/foto1.jpg", texto: "28 de septiembre mágico" },
      { url: "fotos/09-28/foto2.jpg", texto: "Domingo perfecto" },
      { url: "fotos/09-28/foto3.jpg", texto: "Sonrisas eternas" },
      { url: "fotos/09-28/foto4.jpg", texto: "Risas compartidas" },
      { url: "fotos/09-28/foto5.jpg", texto: "Abrazos que curan" },
      { url: "fotos/09-28/foto6.jpg", texto: "Miradas cómplices" },
      { url: "fotos/09-28/foto7.jpg", texto: "Momentos únicos" },
      { url: "fotos/09-28/foto8.jpg", texto: "Complicidad total" },
    ],
    mensajes: ["8 fotos para un domingo perfecto"],
  },

  // Octubre
  "10-02": {
    tipo: "galeria",
    fotos: [
      { url: "fotos/10-02/foto1.jpg", texto: "2 de octubre inolvidable" },
      { url: "fotos/10-02/foto2.jpg", texto: "Miércoles perfecto" },
      { url: "fotos/10-02/foto3.jpg", texto: "Sonrisas eternas" },
      { url: "fotos/10-02/foto4.jpg", texto: "Risas compartidas" },
      { url: "fotos/10-02/foto5.jpg", texto: "Momentos únicos" },
    ],
    mensajes: ["5 fotos para un miércoles perfecto"],
  },

  "10-04": {
    tipo: "galeria",
    fotos: [{ url: "fotos/10-04/foto1.jpg", texto: "4 de octubre especial" }],
    mensajes: ["Sábado de amor"],
  },

  "10-05": {
    tipo: "galeria",
    fotos: [
      { url: "fotos/10-05/foto1.jpg", texto: "5 de octubre mágico" },
      { url: "fotos/10-05/foto2.jpg", texto: "Domingo perfecto" },
      { url: "fotos/10-05/foto3.jpg", texto: "Sonrisas eternas" },
      { url: "fotos/10-05/foto4.jpg", texto: "Risas compartidas" },
      { url: "fotos/10-05/foto5.jpg", texto: "Abrazos que curan" },
      { url: "fotos/10-05/foto6.jpg", texto: "Miradas cómplices" },
      { url: "fotos/10-05/foto7.jpg", texto: "Momentos únicos" },
    ],
    mensajes: ["7 fotos para un domingo perfecto"],
  },

  "10-08": {
    tipo: "galeria",
    fotos: [{ url: "fotos/10-08/foto1.jpg", texto: "8 de octubre inolvidable" }],
    mensajes: ["Martes de amor"],
  },

  "10-09": {
    tipo: "galeria",
    fotos: [{ url: "fotos/10-09/foto1.jpg", texto: "9 de octubre especial" }],
    mensajes: ["Miércoles de amor"],
  },

  "10-11": {
    tipo: "galeria",
    fotos: [
      { url: "fotos/10-11/foto1.jpg", texto: "11 de octubre mágico" },
      { url: "fotos/10-11/foto2.jpg", texto: "Sábado perfecto" },
      { url: "fotos/10-11/foto3.jpg", texto: "Sonrisas eternas" },
      { url: "fotos/10-11/foto4.jpg", texto: "Risas compartidas" },
      { url: "fotos/10-11/foto5.jpg", texto: "Abrazos que curan" },
      { url: "fotos/10-11/foto6.jpg", texto: "Miradas cómplices" },
      { url: "fotos/10-11/foto7.jpg", texto: "Momentos únicos" },
      { url: "fotos/10-11/foto8.jpg", texto: "Complicidad total" },
    ],
    mensajes: ["8 fotos para un sábado perfecto"],
  },

  "10-16": {
    tipo: "galeria",
    fotos: [
      { url: "fotos/10-16/foto1.jpg", texto: "16 de octubre inolvidable" },
      { url: "fotos/10-16/foto2.jpg", texto: "Miércoles perfecto" },
      { url: "fotos/10-16/foto3.jpg", texto: "Sonrisas eternas" },
      { url: "fotos/10-16/foto4.jpg", texto: "Complicidad única" },
    ],
    mensajes: ["4 fotos para un miércoles perfecto"],
  },

  "10-18": {
    tipo: "galeria",
    fotos: [{ url: "fotos/10-18/foto1.jpg", texto: "18 de octubre especial" }],
    mensajes: ["Sábado de amor"],
  },

  "10-26": {
    tipo: "galeria",
    fotos: [
      { url: "fotos/10-26/foto1.jpg", texto: "26 de octubre mágico" },
      { url: "fotos/10-26/foto2.jpg", texto: "Domingo perfecto" },
    ],
    mensajes: ["2 fotos para un domingo perfecto"],
  },

  "10-31": {
    tipo: "galeria",
    fotos: [
      { url: "fotos/10-31/foto1.jpg", texto: "¡Halloween juntos!" },
      { url: "fotos/10-31/foto2.jpg", texto: "Disfraces divertidos" },
      { url: "fotos/10-31/foto3.jpg", texto: "Risas de miedo" },
      { url: "fotos/10-31/foto4.jpg", texto: "Momento espeluznante" },
      { url: "fotos/10-31/foto5.jpg", texto: "Abrazos que asustan" },
      { url: "fotos/10-31/foto6.jpg", texto: "Miradas tenebrosas" },
      { url: "fotos/10-31/foto7.jpg", texto: "Momentos de terror" },
      { url: "fotos/10-31/foto8.jpg", texto: "Complicidad monstruosa" },
      { url: "fotos/10-31/foto9.jpg", texto: "Dulce o truco" },
    ],
    mensajes: ["¡9 fotos espeluznantes para Halloween!"],
  },

  // Noviembre
  "11-01": {
    tipo: "galeria",
    fotos: [{ url: "fotos/11-01/foto1.jpg", texto: "1 de noviembre inolvidable" }],
    mensajes: ["Día de Todos los Santos contigo"],
  },

  "11-04": {
    tipo: "galeria",
    fotos: [{ url: "fotos/11-04/foto1.jpg", texto: "4 de noviembre especial" }],
    mensajes: ["Lunes de amor"],
  },

  "11-16": {
    tipo: "galeria",
    fotos: [
      { url: "fotos/11-16/foto1.jpg", texto: "16 de noviembre mágico" },
      { url: "fotos/11-16/foto2.jpg", texto: "Domingo perfecto" },
    ],
    mensajes: ["2 fotos para un domingo perfecto"],
  },

  "11-22": {
    tipo: "galeria",
    fotos: [
      { url: "fotos/11-22/foto1.jpg", texto: "22 de noviembre inolvidable" },
      { url: "fotos/11-22/foto2.jpg", texto: "Sábado perfecto" },
      { url: "fotos/11-22/foto3.jpg", texto: "Complicidad única" },
    ],
    mensajes: ["3 fotos para un sábado perfecto"],
  },

  "11-23": {
    tipo: "galeria",
    fotos: [
      { url: "fotos/11-23/foto1.jpg", texto: "23 de noviembre especial" },
      { url: "fotos/11-23/foto2.jpg", texto: "Domingo perfecto" },
      { url: "fotos/11-23/foto3.jpg", texto: "Sonrisas eternas" },
      { url: "fotos/11-23/foto4.jpg", texto: "Risas compartidas" },
      { url: "fotos/11-23/foto5.jpg", texto: "Abrazos que curan" },
      { url: "fotos/11-23/foto6.jpg", texto: "Momentos únicos" },
    ],
    mensajes: ["6 fotos para un domingo perfecto"],
  },

  "11-30": {
    tipo: "galeria",
    fotos: [
      { url: "fotos/11-30/foto1.jpg", texto: "30 de noviembre mágico" },
      { url: "fotos/11-30/foto2.jpg", texto: "Último día de noviembre" },
    ],
    mensajes: ["Despidiendo noviembre con 2 fotos"],
  },

  // Diciembre
  "12-02": {
    tipo: "galeria",
    fotos: [
      { url: "fotos/12-02/foto1.jpg", texto: "2 de diciembre inolvidable" },
      { url: "fotos/12-02/foto2.jpg", texto: "Lunes perfecto" },
      { url: "fotos/12-02/foto3.jpg", texto: "Complicidad única" },
    ],
    mensajes: ["3 fotos para un lunes perfecto"],
  },

  "12-04": {
    tipo: "galeria",
    fotos: [
      { url: "fotos/12-04/foto1.jpg", texto: "4 de diciembre especial" },
      { url: "fotos/12-04/foto2.jpg", texto: "Miércoles perfecto" },
      { url: "fotos/12-04/foto3.jpg", texto: "Sonrisas eternas" },
    ],
    mensajes: ["3 fotos para un miércoles perfecto"],
  },

  "12-06": {
    tipo: "galeria",
    fotos: [
      { url: "fotos/12-06/foto1.jpg", texto: "6 de diciembre mágico" },
      { url: "fotos/12-06/foto2.jpg", texto: "Sábado perfecto" },
      { url: "fotos/12-06/foto3.jpg", texto: "Sonrisas eternas" },
      { url: "fotos/12-06/foto4.jpg", texto: "Complicidad única" },
    ],
    mensajes: ["4 fotos para un sábado perfecto"],
  },

  "12-10": {
    tipo: "galeria",
    fotos: [{ url: "fotos/12-10/foto1.jpg", texto: "10 de diciembre inolvidable" }],
    mensajes: ["Martes de amor"],
  },

  "12-11": {
    tipo: "galeria",
    fotos: [{ url: "fotos/12-11/foto1.jpg", texto: "11 de diciembre especial" }],
    mensajes: ["Miércoles de amor"],
  },

  "12-15": {
    tipo: "galeria",
    fotos: [
      { url: "fotos/12-15/foto1.jpg", texto: "15 de diciembre mágico" },
      { url: "fotos/12-15/foto2.jpg", texto: "Lunes perfecto" },
      { url: "fotos/12-15/foto3.jpg", texto: "Sonrisas eternas" },
      { url: "fotos/12-15/foto4.jpg", texto: "Risas compartidas" },
      { url: "fotos/12-15/foto5.jpg", texto: "Abrazos que curan" },
      { url: "fotos/12-15/foto6.jpg", texto: "Momentos únicos" },
    ],
    mensajes: ["6 fotos para un lunes perfecto"],
  },

  "12-19": {
    tipo: "galeria",
    fotos: [
      { url: "fotos/12-19/foto1.jpg", texto: "19 de diciembre inolvidable" },
      { url: "fotos/12-19/foto2.jpg", texto: "Viernes perfecto" },
      { url: "fotos/12-19/foto3.jpg", texto: "Sonrisas eternas" },
      { url: "fotos/12-19/foto4.jpg", texto: "Risas compartidas" },
      { url: "fotos/12-19/foto5.jpg", texto: "Abrazos que curan" },
      { url: "fotos/12-19/foto6.jpg", texto: "Miradas cómplices" },
      { url: "fotos/12-19/foto7.jpg", texto: "Momentos únicos" },
      { url: "fotos/12-19/foto8.jpg", texto: "Complicidad total" },
    ],
    mensajes: ["8 fotos para un viernes perfecto"],
  },

  "12-20": {
    tipo: "galeria",
    fotos: [
      { url: "fotos/12-20/foto1.jpg", texto: "20 de diciembre especial" },
      { url: "fotos/12-20/foto2.jpg", texto: "Sábado perfecto" },
      { url: "fotos/12-20/foto3.jpg", texto: "Sonrisas eternas" },
      { url: "fotos/12-20/foto4.jpg", texto: "Complicidad única" },
    ],
    mensajes: ["4 fotos para un sábado perfecto"],
  },

  "12-21": {
    tipo: "galeria",
    fotos: [
      { url: "fotos/12-21/foto1.jpg", texto: "21 de diciembre mágico" },
      { url: "fotos/12-21/foto2.jpg", texto: "Domingo perfecto" },
      { url: "fotos/12-21/foto3.jpg", texto: "Sonrisas eternas" },
      { url: "fotos/12-21/foto4.jpg", texto: "Risas compartidas" },
      { url: "fotos/12-21/foto5.jpg", texto: "Abrazos que curan" },
      { url: "fotos/12-21/foto6.jpg", texto: "Momentos únicos" },
    ],
    mensajes: ["6 fotos para un domingo perfecto"],
  },

  "12-28": {
    tipo: "galeria",
    fotos: [
      { url: "fotos/12-28/foto1.jpg", texto: "28 de diciembre inolvidable" },
      { url: "fotos/12-28/foto2.jpg", texto: "Domingo perfecto" },
      { url: "fotos/12-28/foto3.jpg", texto: "Sonrisas eternas" },
      { url: "fotos/12-28/foto4.jpg", texto: "Risas compartidas" },
      { url: "fotos/12-28/foto5.jpg", texto: "Abrazos que curan" },
      { url: "fotos/12-28/foto6.jpg", texto: "Miradas cómplices" },
      { url: "fotos/12-28/foto7.jpg", texto: "Momentos únicos" },
    ],
    mensajes: ["7 fotos para un domingo perfecto"],
  },

  "12-30": {
    tipo: "galeria",
    fotos: [
      { url: "fotos/12-30/foto1.jpg", texto: "30 de diciembre especial" },
      { url: "fotos/12-30/foto2.jpg", texto: "Martes perfecto" },
      { url: "fotos/12-30/foto3.jpg", texto: "Sonrisas eternas" },
      { url: "fotos/12-30/foto4.jpg", texto: "Risas compartidas" },
      { url: "fotos/12-30/foto5.jpg", texto: "Abrazos que curan" },
      { url: "fotos/12-30/foto6.jpg", texto: "Miradas cómplices" },
      { url: "fotos/12-30/foto7.jpg", texto: "Momentos únicos" },
      { url: "fotos/12-30/foto8.jpg", texto: "Complicidad total" },
    ],
    mensajes: ["8 fotos para despedir el año"],
  },

  "12-31": {
    tipo: "galeria",
    fotos: [
      { url: "fotos/12-31/foto1.jpg", texto: "¡Último día del año!" },
      { url: "fotos/12-31/foto2.jpg", texto: "Celebrando juntos" },
      { url: "fotos/12-31/foto3.jpg", texto: "Sonrisas de fin de año" },
      { url: "fotos/12-31/foto4.jpg", texto: "Risas compartidas" },
      { url: "fotos/12-31/foto5.jpg", texto: "Abrazos que curan" },
      { url: "fotos/12-31/foto6.jpg", texto: "Miradas cómplices" },
      { url: "fotos/12-31/foto7.jpg", texto: "Momentos únicos" },
      { url: "fotos/12-31/foto8.jpg", texto: "Complicidad total" },
      { url: "fotos/12-31/foto9.jpg", texto: "¡Feliz Año Nuevo!" },
    ],
    mensajes: ["9 fotos para despedir el año con amor"],
  },

  "01-02": {
    tipo: "galeria",
    fotos: [
      { url: "fotos/01-02/foto1.jpg", texto: "Ese abdomen perfecto" },
    ],
  },

  "01-05": {
    tipo: "galeria",
    fotos: [
      { url: "fotos/01-05/foto1.jpg" },
      { url: "fotos/01-05/foto2.jpg" },
      { url: "fotos/01-05/foto3.jpg" },
      { url: "fotos/01-05/foto4.jpg" },
      { url: "fotos/01-05/foto5.jpg" },
    ],
    mensajes: ["5ta y A"],
  },

    "01-06": {
    tipo: "galeria",
    fotos: [
      { url: "fotos/01-06/foto1.jpg" },
      { url: "fotos/01-06/foto2.jpg" },
 ],
    mensajes: ["Mi pullover"],
  },

  "01-11": {
    tipo: "galeria",
    fotos: [
      { url: "fotos/01-11/foto1.jpg" },
 ],
    mensajes: ["Saliendo contigo jóven y contigo vieja "],
  },

  "01-12": {
    tipo: "galeria",
    fotos: [
      { url: "fotos/01-12/foto1.jpg" },
      { url: "fotos/01-12/foto2.jpg" },
      { url: "fotos/01-12/foto3.jpg" },
      { url: "fotos/01-12/foto4.jpg" },
      { url: "fotos/01-12/foto5.jpg" },
      { url: "fotos/01-12/foto6.jpg" },
      { url: "fotos/01-12/foto7.jpg" },
      { url: "fotos/01-12/foto8.jpg" },
      { url: "fotos/01-12/foto9.jpg" },
    ],
    mensajes: ["El faro"],
  },

   "01-13": {
    tipo: "galeria",
    fotos: [
      { url: "fotos/01-13/foto1.jpg" },
 ],
    mensajes: ["Dejándome noticas "],
  },

  "01-24": {
    tipo: "galeria",
    fotos: [
      { url: "fotos/01-24/foto1.jpg" },
      { url: "fotos/01-24/foto2.jpg" },
      { url: "fotos/01-24/foto3.jpg" },
      { url: "fotos/01-24/foto4.jpg" },
      { url: "fotos/01-24/foto5.jpg" },
      { url: "fotos/01-24/foto6.jpg" },
      { url: "fotos/01-24/foto7.jpg" },
    ],
    mensajes: ["Wapa estabas tú"],
  },

  "01-25": {
    tipo: "galeria",
    fotos: [
      { url: "fotos/01-25/foto1.jpg" },
      { url: "fotos/01-25/foto2.jpg" },
      { url: "fotos/01-25/foto3.jpg" },
      { url: "fotos/01-25/foto4.jpg" },
      { url: "fotos/01-25/foto5.jpg" },
      { url: "fotos/01-25/foto6.jpg" },
    ],
    mensajes: ["Tu primera vez en el latino"],
  },

  "01-29": {
    tipo: "galeria",
    fotos: [
      { url: "fotos/01-29/foto1.jpg" },
      { url: "fotos/01-29/foto2.jpg" },
    ],
    mensajes: ["Terminando nuestro 1er rompecabezas"],
  },

"01-31": {
    tipo: "galeria",
    fotos: [
      { url: "fotos/01-31/foto1.jpg" },
      { url: "fotos/01-31/foto2.jpg" },
      { url: "fotos/01-31/foto3.jpg" },
      { url: "fotos/01-31/foto4.jpg" },
    ],
    mensajes: ["Mini Pochi"],
  },

  "02-01": {
    tipo: "galeria",
    fotos: [
      { url: "fotos/02-01/foto1.jpg", texto: "Una therian?" },
    ],
  },

  "02-02": {
    tipo: "galeria",
    fotos: [
      { url: "fotos/02-02/foto1.jpg" },
      { url: "fotos/02-02/foto2.jpg" },
      { url: "fotos/02-02/foto3.jpg" },
      { url: "fotos/02-02/foto4.jpg" },
      { url: "fotos/02-02/foto5.jpg" },
      { url: "fotos/02-02/foto6.jpg" },
      { url: "fotos/02-02/foto7.jpg" },
    ],
    mensajes: ["Mochila Mochila"],
  },

    "02-03": {
    tipo: "galeria",
    fotos: [
      { url: "fotos/02-03/foto1.jpg", texto: "Que linda mi mulata" },
    ],
  },

    "02-05": {
    tipo: "galeria",
    fotos: [
      { url: "fotos/02-05/foto1.jpg" },
      { url: "fotos/02-05/foto2.jpg" },
      { url: "fotos/02-05/foto3.jpg" },
      { url: "fotos/02-05/foto4.jpg" },
    ],
    mensajes: ["Esa enguatada te queda mejor que a mí"],
  },

    "02-06": {
    tipo: "galeria",
    fotos: [
      { url: "fotos/02-06/foto1.jpg" },
      { url: "fotos/02-06/foto2.jpg" },
      { url: "fotos/02-06/foto3.jpg" },
      { url: "fotos/02-06/foto4.jpg" },
      { url: "fotos/02-06/foto5.jpg" },
      { url: "fotos/02-06/foto6.jpg" },
    ],
    mensajes: ["Otro latino juntos"],
  },

   "02-07": {
    tipo: "galeria",
    fotos: [
      { url: "fotos/02-07/foto1.jpg", texto: "Que bellos somos" },
      { url: "fotos/02-07/foto2.jpg" },
      { url: "fotos/02-07/foto3.jpg" },
      { url: "fotos/02-07/foto4.jpg" },
      { url: "fotos/02-07/foto5.jpg", texto: "Vampirito" },
      { url: "fotos/02-07/foto6.jpg", texto: "y ese beso?" },
      { url: "fotos/02-07/foto7.jpg", texto: "Al fin lo terminamos" },
    ],
  },

   "02-08": {
    tipo: "galeria",
    fotos: [
      { url: "fotos/02-08/foto1.jpg" },
      { url: "fotos/02-08/foto2.jpg" },
    ],
    mensajes: ["Acabados de despertar"],
  },

      "02-09": {
    tipo: "galeria",
    fotos: [
      { url: "fotos/02-09/foto1.jpg", texto: "y ese culón?" },
    ],
  },

  "02-13": {
    tipo: "galeria",
    fotos: [
      { url: "fotos/02-13/foto1.jpg" },
      { url: "fotos/02-13/foto2.jpg" },
      { url: "fotos/02-13/foto3.jpg" },
      { url: "fotos/02-13/foto4.jpg" },
      { url: "fotos/02-13/foto5.jpg" },
      { url: "fotos/02-13/foto6.jpg" },
    ],
    mensajes: ["Los desesperados, ni al 14 pudimos esperar"],
  },

  "02-14": {
    tipo: "galeria",
    fotos: [
      { url: "fotos/02-14/foto1.jpg" },
      { url: "fotos/02-14/foto2.jpg" },
      { url: "fotos/02-14/foto3.jpg" },
      { url: "fotos/02-14/foto4.jpg" },
      { url: "fotos/02-14/foto5.jpg" },
      { url: "fotos/02-14/foto6.jpg" },
      { url: "fotos/02-14/foto7.jpg" },
      { url: "fotos/02-14/foto8.jpg" },
      { url: "fotos/02-14/foto9.jpg" },
      { url: "fotos/02-14/foto10.jpg" },
      { url: "fotos/02-14/foto11.jpg" },
      { url: "fotos/02-14/foto12.jpg" },
      { url: "fotos/02-14/foto13.jpg" },
      { url: "fotos/02-14/foto14.jpg" },
      { url: "fotos/02-14/foto15.jpg" },
      { url: "fotos/02-14/foto16.jpg" },
      { url: "fotos/02-14/foto17.jpg" },
    ],
    mensajes: ["Nuestro 1er 14 de febrero juntos"],
  },

        "02-17": {
    tipo: "galeria",
    fotos: [
      { url: "fotos/02-17/foto1.jpg", texto: "y esas cejas tan lindas?" },
    ],
  },

"02-20": { // 20 de febrero - 3 fotos
    tipo: "galeria",
    fotos: [
      { url: "fotos/02-20/foto1.jpg", texto: "20 de febrero especial" },
      { url: "fotos/02-20/foto2.jpg", texto: "Risas compartidas" },
      { url: "fotos/02-20/foto3.jpg", texto: "Momentos únicos" },
    ],
    mensajes: ["3 fotos para un jueves perfecto"],
  },

  "02-21": { // 21 de febrero - 5 fotos
    tipo: "galeria",
    fotos: [
      { url: "fotos/02-21/foto1.jpg", texto: "21 de febrero inolvidable" },
      { url: "fotos/02-21/foto2.jpg", texto: "Viernes perfecto" },
      { url: "fotos/02-21/foto3.jpg", texto: "Sonrisas eternas" },
      { url: "fotos/02-21/foto4.jpg", texto: "Complicidad única" },
      { url: "fotos/02-21/foto5.jpg", texto: "Amor en cada instante" },
    ],
    mensajes: ["5 fotos para un viernes perfecto"],
  },

  "02-22": { // 22 de febrero - 16 fotos
    tipo: "galeria",
    fotos: [
      { url: "fotos/02-22/foto1.jpg", texto: "22 de febrero mágico" },
      { url: "fotos/02-22/foto2.jpg", texto: "Sábado perfecto" },
      { url: "fotos/02-22/foto3.jpg", texto: "Sonrisas eternas" },
      { url: "fotos/02-22/foto4.jpg", texto: "Risas compartidas" },
      { url: "fotos/02-22/foto5.jpg", texto: "Abrazos que curan" },
      { url: "fotos/02-22/foto6.jpg", texto: "Miradas cómplices" },
      { url: "fotos/02-22/foto7.jpg", texto: "Momentos únicos" },
      { url: "fotos/02-22/foto8.jpg", texto: "Complicidad total" },
      { url: "fotos/02-22/foto9.jpg", texto: "Amor en cada instante" },
      { url: "fotos/02-22/foto10.jpg", texto: "Recuerdos eternos" },
      { url: "fotos/02-22/foto11.jpg", texto: "Felicidad plena" },
      { url: "fotos/02-22/foto12.jpg", texto: "Aventuras juntos" },
      { url: "fotos/02-22/foto13.jpg", texto: "Miradas que enamoran" },
      { url: "fotos/02-22/foto14.jpg", texto: "Juntos para siempre" },
      { url: "fotos/02-22/foto15.jpg", texto: "Sonrisas contagiosas" },
      { url: "fotos/02-22/foto16.jpg", texto: "Amor infinito" },
    ],
    mensajes: ["¡16 fotos para un sábado espectacular!"],
  },

  "02-23": { // 23 de febrero - 2 fotos
    tipo: "galeria",
    fotos: [
      { url: "fotos/02-23/foto1.jpg", texto: "23 de febrero especial" },
      { url: "fotos/02-23/foto2.jpg", texto: "Domingo perfecto" },
    ],
    mensajes: ["2 fotos para un domingo perfecto"],
  },

  "02-24": { // 24 de febrero - 3 fotos
    tipo: "galeria",
    fotos: [
      { url: "fotos/02-24/foto1.jpg", texto: "24 de febrero inolvidable" },
      { url: "fotos/02-24/foto2.jpg", texto: "Lunes perfecto" },
      { url: "fotos/02-24/foto3.jpg", texto: "Complicidad única" },
    ],
    mensajes: ["3 fotos para un lunes perfecto"],
  },

  "02-26": { // 25 de febrero - 1 foto
    tipo: "galeria",
    fotos: [
      { url: "fotos/02-26/foto1.jpg", texto: "25 de febrero mágico" },
    ],
    mensajes: ["Martes de amor"],
  },

  "02-28": { // 28 de febrero - 1 foto
    tipo: "galeria",
    fotos: [
      { url: "fotos/02-28/foto1.jpg", texto: "28 de febrero especial" },
    ],
    mensajes: ["Despidiendo febrero con amor"],
  },

  "03-01": { // 1 de marzo - 8 fotos
    tipo: "galeria",
    fotos: [
      { url: "fotos/03-01/foto1.jpg", texto: "¡Comienza marzo!" },
      { url: "fotos/03-01/foto2.jpg", texto: "Domingo perfecto" },
      { url: "fotos/03-01/foto3.jpg", texto: "Sonrisas eternas" },
      { url: "fotos/03-01/foto4.jpg", texto: "Risas compartidas" },
      { url: "fotos/03-01/foto5.jpg", texto: "Abrazos que curan" },
      { url: "fotos/03-01/foto6.jpg", texto: "Miradas cómplices" },
      { url: "fotos/03-01/foto7.jpg", texto: "Momentos únicos" },
      { url: "fotos/03-01/foto8.jpg", texto: "Complicidad total" },
    ],
    mensajes: ["¡Nuevo mes con 8 fotos de felicidad!"],
  },


  // Día del aniversario (5 abril 2026)
  "2026-04-05": {
    tipo: "galeria",
    fotos: [
      { url: "fotos/aniversario/foto1.jpg", texto: "¡365 días de amor! 🎉", descripcion: "Un año entero contigo" },
      { url: "fotos/aniversario/foto2.jpg", texto: "Celebrando cada momento", descripcion: "Las risas que compartimos" },
      { url: "fotos/aniversario/foto3.jpg", texto: "Más unidos que nunca", descripcion: "Nuestro amor crece cada día" },
      { url: "fotos/aniversario/foto4.jpg", texto: "Por muchos años más", descripcion: "El futuro nos espera" },
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
  "Por darme a entender que un sábado en casa a veces es mejor que estar de fiestas",
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
  "Por ver que ya no imagino un día sin ti",
  "Por darme cuenta que eres todo lo que siempre pedi",
  "Se que te amo desde el día que empecé a imaginarme un futuro contigo",
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
    significado: "Ese día en el baño nunca lo voy a superar jajaja",
  },
  {
    palabra: "Casa de muñecas",
    significado: "La casa esa llena de muñecas que siempre te asusta en 11 y paseo",
  },
  {
    palabra: "Deepzeek",
    significado: "Todas nuestras dudas las resuelve además de hacernos Quiz de pareja",
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
    palabra: "Mochila mochila",
    significado: "Cuando te da complejo de mochila y no te safas de mi espalda",
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
      "Días aguantando tu fetidez a ajo en la boca ya que eres excesiva con el ajo",
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
    palabra: "días 5",
    significado: "Por el resto de tu vida ese día va a ser mío siempre",
  },
  {
    palabra: "marianao es un campo",
    significado: "Frase que te decía al principo de tu pueblito",
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
    palabra: "corazón con flecha",
    significado:
      "El emoji que desde el día que lo vimos en el malecón lo elegimos los dos y que x siempre estará reservado para ti",
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
    palabra: "2 días sin vernos",
    significado:
      "Obviamente todo no iba a er bueno y hay que acabar de solucionar todas esas peleas innecesarias que desgastan la relación",
  },
  {
    palabra: "Balcón de casa de mi tía May",
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
    significado: "Algun día dejarás de ser oriental y le dirás azotea ?",
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
    palabra: "inválido",
    significado:
      "Como olvidar cuando en tu futuro me quedaba sin piernas ni brazos",
  },
  {
    palabra: "sueños",
    significado: "creo que es lo que más tenemos, nos quedan muchos por cumplir",
  },
  {
    palabra: "oscar",
    significado: "Una de las muchas cosas que te tuve que enseñar jajaja",
  },
  { palabra: "paletica", significado: "Las paleticas del MioSid " },
  {
    palabra: "sangría",
    significado:
      "Probablemente la bebida que más has pedido en nuestras salidas",
  },
  {
    palabra: "bar capablanca",
    significado: "Pasamos muchos mesiversarios ahi",
  },
  {
    palabra: "2do columpio en el nacional",
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
    palabra: "fotógrafo",
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
      "Los míos de 20min y bien dados para luego recibir uno de 2min y oir ¨Estoy cansada¨",
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
    palabra: "tu corsel el día de habachela",
    significado:
      "Nunca te lo dije pero ese día ese corsel te quedaba de locura",
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
    significado: "A día de hoy llevo una en la billetera de nosotros",
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
      "Dios mío cuando llegas de hacerte la keratina, nunca habia visto una trigueña tan linda",
  },
  {
    palabra: "ay dios mío esas nalgas mías",
    significado:
      "Escribiendo esta línea se me paró lo siento, es que esas nalgassss...ay dios míoooo",
  },
  {
    palabra: "los 4 dedos",
    significado:
      "A cada dedo le pusimos un significado (Te amo, me quiero ir, te quiero, quiero singarte)",
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
    significado: "El primer regalo que me hiciste el día de mi cumpleaños",
  },
  {
    palabra: "letras de fritiqui de otro color",
    significado:
      "El día que te dichavaste y admitiste que habías completado la palabra en la carta de mi cumpleaños",
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
      "Un día te hice uno y de x vida estuve condenado a hacértelo todas las mañanas",
  },
  {
    palabra: "esa barriguita mía",
    significado: "Ese abdomen perfecto...dios míoooo que hot",
  },
  {
    palabra: "69",
    significado: "La pose fantasma...Imposible hacerla contigo",
  },
  {
    palabra: "tú arriba",
    significado:
      "Que locura cuando estás arriba...te vuelves una locota amor jajaja",
  },
  {
    palabra: "la sábana en el medio en 4",
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
  { palabra: "fusión frappe", significado: "Buenos frapus nos tomamos x ahi" },
  {
    palabra: "dominó en pazillo",
    significado:
      "Aunque fue antes de estar juntos me acuerdo un día en pazillo que me llamaste para jugar dominó(Cuando aun eras mala)",
  },
  {
    palabra: "dominó",
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
    palabra: "15 días sin hablar",
    significado:
      "Antes de tallar cuando hablábamos x orgullosos estuvimos 15 días sin hablar, después de eso no hemos estado más de 1 dia sin hablar",
  },
  {
    palabra: "Sandro como es Adrián en una relación",
    significado:
      "Imposible olvidar cuando pensaste que sandro no me iba a decir lo que le dijeras jajaja",
  },
  {
    palabra: "daily chat",
    significado:
      "No se como pasó pero un día te convertiste en mi chat diario sin darme cuenta hasta el día de hoy",
  },
  {
    palabra: "Condones rotos",
    significado: "Como olvidar cuando se nos rompieron 3 condones en una noche y una mañana",
  },
  {
    palabra: "Pastilla del día después",
    significado: "Cuando casi somos padres",
  },
  {
    palabra: "promesa de dormir encueros",
    significado:
      "La mejor promesa que pudimos hacer",
  },
  {
    palabra: "Colcha morada",
    significado: "Un día se convirtió en tu colcha preferida",
  },
  {
    palabra: "gordo",
    significado: "Un poco despectivo pero tu manera de llamarme con amor",
  },

  {
    palabra: "Cómplice",
    significado: "Perfume con olor a jabón destinado a ambientar el cuarto tras gases expulsados por la pareja",
  },
  
  {
    palabra: "lilo y stich en persona",
    significado: "Una vez la vimos en la sala de mi ksa",
  },

  {
    palabra: "Los juegos del hambre",
    significado: "Otra de las sagas que vimos una y tuvimos que copiar todas las partes",
  },

  {
    palabra: "Maze Runner 1,2,3",
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
      "Esta palabra resume que lo que cojas tu lo cojo yo, con esto me refiero a que tus problemas siempre van a ser los míos también",
  },
  {
    palabra: "dormirte viendo una película",
    significado: "No se la cantidad de película que hemos empezado a ver y a los 10min estás dormida",
  },
  
  { palabra: "quivican", significado: "Cuando conocí a toda tu familia" },
  {
    palabra: "alicia sal de ese cuerpo",
    significado: "No tengo dudas de que eres la versión jóven de mi abuela",
  },
  {
    palabra: "el tunel de linea",
    significado:
      "Esa nariz tuya se parece bastante, a veces la confundo con el tunel",
  },
  {
    palabra: "Cafetera",
    significado:
      "Tu eres una cafeteraaa...calientas pero no quemasss!!!(Tú sabes por qué)",
  },

  {
    palabra: "Cafetera",
    significado:
      "Tu eres una cafeteraaa...calientas pero no quemasss!!!(Tú sabes por qué)",
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


