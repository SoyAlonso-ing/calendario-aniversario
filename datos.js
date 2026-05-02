// ============================================
// ARCHIVO: datos.js - VERSIÓN MULTIFOTO
// CONTIENE: Datos con múltiples fotos por día
// ============================================

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
  "01-01": {
    tipo: "galeria",
    importancia: "media",
    videos: [{ url: "fotos/01-01/video1.mp4", miniatura: "fotos/01-01/foto1.jpg", texto: "❤️" }],
    mensajes: ["Brindis de año nuevo"],
  },

  "01-02": {
    tipo: "galeria",
    fotos: [{ url: "fotos/01-02/foto1.jpg", texto: "Ese abdomen perfecto" }],
    mensajes: ["Empezando el año a tu lado ❤️"],
  },

  "01-05": {
    tipo: "galeria",
    importancia: "alta",
    fotos: [
      { url: "fotos/01-05/foto1.jpg", texto: "❤️" },
      { url: "fotos/01-05/foto3.jpg", texto: "❤️" },
      { url: "fotos/01-05/foto4.jpg", texto: "❤️" },
      { url: "fotos/01-05/foto5.jpg", texto: "❤️" },
    ],
    videos: [{ url: "fotos/01-05/video1.mp4", miniatura: "fotos/01-05/foto1.jpg", texto: "❤️" }],
    mensajes: ["Mesiversario a 5ta y A", "Las mejores hamburguezas de la habana"],
  },

  "01-06": {
    tipo: "galeria",
    fotos: [
      { url: "fotos/01-06/foto1.jpg", texto: "❤️" },
      { url: "fotos/01-06/foto2.jpg", texto: "❤️" },
    ],
    videos: [{ url: "fotos/01-06/video1.mp4", miniatura: "fotos/01-06/foto1.jpg", texto: "❤️" }],
    mensajes: ["Que lindos te quedan mis pullovers "],
  },

  "01-07": {
    tipo: "galeria",
    importancia: "media",
    videos: [{ url: "fotos/01-07/video1.mp4", miniatura: "fotos/01-07/foto1.jpg", texto: "❤️" }],
    mensajes: ["❤️"],
  },

  "01-11": {
    tipo: "galeria",
    importancia: "media",
    fotos: [{ url: "fotos/01-11/foto1.jpg", texto: "Tú joven y tú vieja" }],
    mensajes: ["Sacando a pasear a la abuela"],
  },

  "01-12": {
    tipo: "galeria",
    importancia: "media",
    fotos: [
      { url: "fotos/01-12/foto1.jpg", texto: "❤️" },
      { url: "fotos/01-12/foto2.jpg", texto: "❤️" },
      { url: "fotos/01-12/foto3.jpg", texto: "❤️" },
      { url: "fotos/01-12/foto4.jpg", texto: "❤️" },
      { url: "fotos/01-12/foto5.jpg", texto: "❤️" },
      { url: "fotos/01-12/foto6.jpg", texto: "❤️" },
      { url: "fotos/01-12/foto7.jpg", texto: "❤️" },
      { url: "fotos/01-12/foto8.jpg", texto: "❤️" },
      { url: "fotos/01-12/foto9.jpg", texto: "❤️" },
    ],
    mensajes: ["Buenas vistas se veían del faro, no tanto como las que tengo en mi cama"],
  },

  "01-13": {
    tipo: "galeria",
    fotos: [{ url: "fotos/01-13/foto1.jpg", texto: "Tan bella en mi espejo" }],
  },

  "01-17": {
    tipo: "galeria",
    importancia: "media",
    videos: [
      { url: "fotos/01-17/video1.mp4", miniatura: "fotos/01-17/foto1.jpg", texto: "Sabemos quien ganó esa partida" },
      { url: "fotos/01-17/video2.mp4", miniatura: "fotos/01-17/foto2.jpg", texto: "Barbera personal" },
    ],
    mensajes: ["❤️"],
  },

  "01-24": {
    tipo: "galeria",
    importancia: "media",
    fotos: [
      { url: "fotos/01-24/foto1.jpg", texto: "Más acabados de levantar imposible" },
      { url: "fotos/01-24/foto2.jpg", texto: "Que linda saliste ahí" },
      { url: "fotos/01-24/foto3.jpg", texto: "❤️" },
      { url: "fotos/01-24/foto4.jpg", texto: "❤️" },
      { url: "fotos/01-24/foto5.jpg", texto: "Tremendo wapetón" },
      { url: "fotos/01-24/foto6.jpg", texto: "En verdad wapa estaba fresco" },
      { url: "fotos/01-24/foto7.jpg", texto: "❤️" },
    ],
    videos: [{ url: "fotos/01-24/video1.mp4", miniatura: "fotos/01-24/foto1.jpg", texto: "❤️" }],
    mensajes: ["❤️"],
  },

  "01-25": {
    tipo: "galeria",
    importancia: "media",
    fotos: [
      { url: "fotos/01-25/foto1.jpg", texto: "❤️" },
      { url: "fotos/01-25/foto2.jpg", texto: "❤️" },
      { url: "fotos/01-25/foto3.jpg", texto: "❤️" },
      { url: "fotos/01-25/foto4.jpg", texto: "❤️" },
      { url: "fotos/01-25/foto5.jpg", texto: "❤️" },
      { url: "fotos/01-25/foto6.jpg", texto: "❤️" },
    ],
    mensajes: ["Primera vez que fuiste al Latino"],
  },

  "01-29": {
    tipo: "galeria",
    importancia: "media",
    fotos: [
      { url: "fotos/01-29/foto1.jpg", texto: "Estaba bueno" },
      { url: "fotos/01-29/foto2.jpg", texto: "y difícil" },
    ],
    mensajes: ["1er rompecabezas juntos"],
  },

  "01-31": {
    tipo: "galeria",
    fotos: [
      { url: "fotos/01-31/foto1.jpg", texto: "❤️" },
      { url: "fotos/01-31/foto2.jpg", texto: "❤️" },
      { url: "fotos/01-31/foto3.jpg", texto: "❤️" },
      { url: "fotos/01-31/foto4.jpg", texto: "❤️" },
    ],
    mensajes: ["Una mini pochi"],
  },

  "02-01": {
    tipo: "galeria",
    fotos: [{ url: "fotos/02-01/foto1.jpg", texto: "Una therian?" }],
    mensajes: ["Que lindas esas pestañas"],
  },

  "02-02": {
    tipo: "galeria",
    importancia: "media",
    fotos: [
      { url: "fotos/02-02/foto1.jpg", texto: "❤️" },
      { url: "fotos/02-02/foto2.jpg", texto: "❤️" },
      { url: "fotos/02-02/foto3.jpg", texto: "❤️" },
      { url: "fotos/02-02/foto4.jpg", texto: "❤️" },
      { url: "fotos/02-02/foto5.jpg", texto: "❤️" },
      { url: "fotos/02-02/foto6.jpg", texto: "❤️" },
      { url: "fotos/02-02/foto7.jpg", texto: "❤️" },
    ],
    videos: [{ url: "fotos/02-02/video1.mp4", miniatura: "fotos/02-02/foto1.jpg", texto: "❤️" }],
    mensajes: ["Mochila Mochila"],
  },

  "02-03": {
    tipo: "galeria",
    fotos: [{ url: "fotos/02-03/foto1.jpg", texto: "Que linda mi mulata" }],
  },

  "02-05": {
    tipo: "galeria",
    importancia: "alta",
    fotos: [
      { url: "fotos/02-05/foto1.jpg", texto: "❤️" },
      { url: "fotos/02-05/foto2.jpg", texto: "❤️" },
      { url: "fotos/02-05/foto3.jpg", texto: "❤️" },
      { url: "fotos/02-05/foto4.jpg", texto: "❤️" },
      { url: "fotos/02-05/foto5.jpg", texto: "❤️" },
    ],
    mensajes: ["Otro mesiversario juntos", "Esa enguatada te queda mejor que a mí"],
  },

  "02-06": {
    tipo: "galeria",
    importancia: "media",
    fotos: [
      { url: "fotos/02-06/foto1.jpg", texto: "❤️" },
      { url: "fotos/02-06/foto2.jpg", texto: "❤️" },
      { url: "fotos/02-06/foto3.jpg", texto: "❤️" },
      { url: "fotos/02-06/foto4.jpg", texto: "❤️" },
      { url: "fotos/02-06/foto5.jpg", texto: "❤️" },
      { url: "fotos/02-06/foto6.jpg", texto: "❤️" },
    ],
    mensajes: ["Otro latino juntos"],
  },

  "02-07": {
    tipo: "galeria",
    importancia: "media",
    fotos: [
      { url: "fotos/02-07/foto1.jpg", texto: "❤️" },
      { url: "fotos/02-07/foto2.jpg", texto: "❤️" },
      { url: "fotos/02-07/foto3.jpg", texto: "❤️" },
      { url: "fotos/02-07/foto4.jpg", texto: "❤️" },
      { url: "fotos/02-07/foto5.jpg", texto: "❤️" },
      { url: "fotos/02-07/foto6.jpg", texto: "❤️" },
      { url: "fotos/02-07/foto7.jpg", texto: "❤️" },
    ],
    videos: [{ url: "fotos/02-07/video1.mp4", miniatura: "fotos/02-07/foto1.jpg", texto: "❤️" }],
    mensajes: ["El día que por fin terminamos el rompecabezas"],
  },

  "02-08": {
    tipo: "galeria",
    importancia: "media",
    fotos: [
      { url: "fotos/02-08/foto1.jpg", texto: "❤️" },
      { url: "fotos/02-08/foto2.jpg", texto: "❤️" },
    ],
    mensajes: ["Acabados de despertar"],
  },

  "02-09": {
    tipo: "galeria",
    fotos: [{ url: "fotos/02-09/foto1.jpg", texto: "❤️" }],
    mensajes: ["Que perro culón"],
  },

  "02-13": {
    tipo: "galeria",
    importancia: "alta",
    fotos: [
      { url: "fotos/02-13/foto1.jpg", texto: "❤️" },
      { url: "fotos/02-13/foto2.jpg", texto: "❤️" },
      { url: "fotos/02-13/foto3.jpg", texto: "❤️" },
      { url: "fotos/02-13/foto4.jpg", texto: "❤️" },
      { url: "fotos/02-13/foto5.jpg", texto: "❤️" },
      { url: "fotos/02-13/foto6.jpg", texto: "❤️" },
    ],
    videos: [
      { url: "fotos/02-13/video1.mp4", miniatura: "fotos/02-13/foto1.jpg", texto: "❤️" },
      { url: "fotos/02-13/video2.mp4", miniatura: "fotos/02-13/foto2.jpg", texto: "❤️" },
    ],
    mensajes: ["Los desesperados, ni al 14 pudimos esperar", "En verdad nos botamos", "Como nostros nadie"],
  },

  "02-14": {
    tipo: "galeria",
    importancia: "alta",
    fotos: [
      { url: "fotos/02-14/foto1.jpg", texto: "❤️" },
      { url: "fotos/02-14/foto2.jpg", texto: "❤️" },
      { url: "fotos/02-14/foto3.jpg", texto: "❤️" },
      { url: "fotos/02-14/foto4.jpg", texto: "❤️" },
      { url: "fotos/02-14/foto5.jpg", texto: "❤️" },
      { url: "fotos/02-14/foto6.jpg", texto: "❤️" },
      { url: "fotos/02-14/foto7.jpg", texto: "❤️" },
      { url: "fotos/02-14/foto8.jpg", texto: "❤️" },
      { url: "fotos/02-14/foto9.jpg", texto: "❤️" },
      { url: "fotos/02-14/foto10.jpg", texto: "❤️" },
      { url: "fotos/02-14/foto11.jpg", texto: "❤️" },
      { url: "fotos/02-14/foto12.jpg", texto: "❤️" },
      { url: "fotos/02-14/foto13.jpg", texto: "❤️" },
      { url: "fotos/02-14/foto14.jpg", texto: "❤️" },
      { url: "fotos/02-14/foto15.jpg", texto: "❤️" },
      { url: "fotos/02-14/foto16.jpg", texto: "❤️" },
      { url: "fotos/02-14/foto17.jpg", texto: "❤️" },
    ],
    mensajes: ["Nuestro primer 14 de febrero juntos", "Fangio", "A pesar de no ser la gran cosa y estar caro desayunaos bien"],
  },

  "02-17": {
    tipo: "galeria",
    fotos: [{ url: "fotos/02-17/foto1.jpg", texto: "❤️" }],
    mensajes: ["Y esas cejas tan perfectas?"],
  },

  "02-20": {
    tipo: "galeria",
    importancia: "media",
    fotos: [
      { url: "fotos/02-20/foto1.jpg", texto: "❤️" },
      { url: "fotos/02-20/foto2.jpg", texto: "❤️" },
      { url: "fotos/02-20/foto3.jpg", texto: "❤️" },
    ],
    mensajes: ["Campo de tiro con tus amigas"],
  },

  "02-21": {
    tipo: "galeria",
    importancia: "media",
    fotos: [
      { url: "fotos/02-21/foto1.jpg", texto: "❤️" },
      { url: "fotos/02-21/foto2.jpg", texto: "❤️" },
      { url: "fotos/02-21/foto3.jpg", texto: "❤️" },
      { url: "fotos/02-21/foto4.jpg", texto: "❤️" },
      { url: "fotos/02-21/foto5.jpg", texto: "❤️" },
    ],
    videos: [
      { url: "fotos/02-21/video1.mp4", miniatura: "fotos/02-21/foto1.jpg", texto: "❤️" },
      { url: "fotos/02-21/video2.mp4", miniatura: "fotos/02-21/foto2.jpg", texto: "❤️" },
    ],
    mensajes: ["De la Crem", "La sugar me invitó a tomar helado"],
  },

  "02-22": {
    tipo: "galeria",
    importancia: "media",
    fotos: [
      { url: "fotos/02-22/foto1.jpg", texto: "❤️" },
      { url: "fotos/02-22/foto2.jpg", texto: "❤️" },
      { url: "fotos/02-22/foto3.jpg", texto: "❤️" },
      { url: "fotos/02-22/foto4.jpg", texto: "❤️" },
      { url: "fotos/02-22/foto5.jpg", texto: "❤️" },
      { url: "fotos/02-22/foto6.jpg", texto: "❤️" },
      { url: "fotos/02-22/foto7.jpg", texto: "❤️" },
      { url: "fotos/02-22/foto8.jpg", texto: "❤️" },
      { url: "fotos/02-22/foto9.jpg", texto: "❤️" },
      { url: "fotos/02-22/foto10.jpg", texto: "❤️" },
      { url: "fotos/02-22/foto11.jpg", texto: "❤️" },
      { url: "fotos/02-22/foto12.jpg", texto: "❤️" },
      { url: "fotos/02-22/foto13.jpg", texto: "❤️" },
      { url: "fotos/02-22/foto14.jpg", texto: "❤️" },
      { url: "fotos/02-22/foto15.jpg", texto: "❤️" },
      { url: "fotos/02-22/foto16.jpg", texto: "❤️" },
    ],
    videos: [
      { url: "fotos/02-22/video1.mp4", miniatura: "fotos/02-22/foto1.jpg", texto: "❤️" },
      { url: "fotos/02-22/video2.mp4", miniatura: "fotos/02-22/foto2.jpg", texto: "❤️" },
      { url: "fotos/02-22/video3.mp4", miniatura: "fotos/02-22/foto3.jpg", texto: "❤️" },
    ],
    mensajes: ["Recordando viejos tiempos en el malecón","Buenos spaguettis tiramos","Uno de los muchos días que nos creemos chefs"],
  },

  "02-23": {
    tipo: "galeria",
    importancia: "media",
    fotos: [
      { url: "fotos/02-23/foto1.jpg", texto: "❤️" },
      { url: "fotos/02-23/foto2.jpg", texto: "❤️" },
    ],
    mensajes: ["A coger triciclo en 23 titi"],
  },

  "02-24": {
    tipo: "galeria",
    importancia: "media",
    fotos: [
      { url: "fotos/02-24/foto1.jpg", texto: "❤️" },
      { url: "fotos/02-24/foto2.jpg", texto: "❤️" },
      { url: "fotos/02-24/foto3.jpg", texto: "❤️" },
    ],
    videos: [{ url: "fotos/02-24/video1.mp4", miniatura: "fotos/02-24/foto1.jpg", texto: "❤️" }],
    mensajes: ["Mis galletas quedaron mejores dicho x tu mamá"],
  },

  "02-26": {
    tipo: "galeria",
    fotos: [{ url: "fotos/02-26/foto1.jpg", texto: "❤️" }],
    mensajes: ["Verdad que lo que yo me como","Ni la nutella está más rica"],
  },

  "02-28": {
    tipo: "galeria",
    importancia: "media",
    fotos: [{ url: "fotos/02-28/foto1.jpg", texto: "❤️" }],
    mensajes: ["Comiéndome el postre"],
  },

  "03-01": {
    tipo: "galeria",
    importancia: "media",
    fotos: [
      { url: "fotos/03-01/foto1.jpg", texto: "❤️" },
      { url: "fotos/03-01/foto2.jpg", texto: "❤️" },
      { url: "fotos/03-01/foto3.jpg", texto: "❤️" },
      { url: "fotos/03-01/foto4.jpg", texto: "❤️" },
      { url: "fotos/03-01/foto5.jpg", texto: "❤️" },
      { url: "fotos/03-01/foto6.jpg", texto: "❤️" },
      { url: "fotos/03-01/foto7.jpg", texto: "❤️" },
      { url: "fotos/03-01/foto8.jpg", texto: "❤️" },
    ],
    videos: [{ url: "fotos/03-01/video1.mp4", miniatura: "fotos/03-01/foto1.jpg", texto: "❤️" }],
    mensajes: ["Recordando viejos tiempos en el nacional"],
  },

  "03-04": {
    tipo: "galeria",
    fotos: [{ url: "fotos/03-04/foto1.jpg", texto: "❤️" }],
    mensajes: ["Que culote puti","Se nota el gym titi"],
  },

  "03-05": {
    tipo: "galeria",
    importancia: "media",
    fotos: [
      { url: "fotos/03-05/foto1.jpg", texto: "❤️" },
      { url: "fotos/03-05/foto2.jpg", texto: "❤️" },
    ],
    mensajes: ["Mi comida favorita"],
  },

  "03-06": {
    tipo: "galeria",
    importancia: "media",
    fotos: [{ url: "fotos/03-06/foto1.jpg", texto: "❤️" }],
    mensajes: ["La menos cursi"],
  },

  "03-07": {
    tipo: "galeria",
    importancia: "media",
    fotos: [
      { url: "fotos/03-07/foto1.jpg", texto: "❤️" },
      { url: "fotos/03-07/foto2.jpg", texto: "❤️" },
      { url: "fotos/03-07/foto3.jpg", texto: "❤️" },
    ],
    mensajes: ["Sabor Cid"],
  },

  "03-08": {
    tipo: "galeria",
    importancia: "media",
    fotos: [
      { url: "fotos/03-08/foto1.jpg", texto: "❤️" },
      { url: "fotos/03-08/foto2.jpg", texto: "❤️" },
      { url: "fotos/03-08/foto3.jpg", texto: "❤️" },
      { url: "fotos/03-08/foto4.jpg", texto: "❤️" },
      { url: "fotos/03-08/foto5.jpg", texto: "❤️" },
      { url: "fotos/03-08/foto6.jpg", texto: "❤️" },
    ],
    mensajes: ["Compartiendo con tu family","Tremendo pelado el del consorte"],
  },

  "03-09": {
    tipo: "galeria",
    fotos: [{ url: "fotos/03-09/foto1.jpg", texto: "❤️" }],
    mensajes: ["Tu móvil fanático a mi"],
  },

  "03-11": {
    tipo: "galeria",
    fotos: [
      { url: "fotos/03-11/foto1.jpg", texto: "❤️" },
      { url: "fotos/03-11/foto2.jpg", texto: "❤️" },
      { url: "fotos/03-11/foto3.jpg", texto: "❤️" },
      { url: "fotos/03-11/foto4.jpg", texto: "❤️" },
      { url: "fotos/03-11/foto5.jpg", texto: "❤️" },
    ],
    mensajes: ["como siempre llenándome el movil de fotos tuyas"],
  },

  "03-13": {
    tipo: "galeria",
    fotos: [{ url: "fotos/03-13/foto1.jpg", texto: "❤️" }],
    mensajes: ["La chica fitness"],
  },

  "03-14": {
    tipo: "galeria",
    importancia: "media",
    fotos: [
      { url: "fotos/03-14/foto1.jpg", texto: "❤️" },
      { url: "fotos/03-14/foto2.jpg", texto: "❤️" },
      { url: "fotos/03-14/foto3.jpg", texto: "❤️" },
      { url: "fotos/03-14/foto4.jpg", texto: "❤️" },
      { url: "fotos/03-14/foto5.jpg", texto: "❤️" },
      { url: "fotos/03-14/foto6.jpg", texto: "❤️" },
      { url: "fotos/03-14/foto7.jpg", texto: "❤️" },
    ],
    videos: [{ url: "fotos/03-14/video1.mp4", miniatura: "fotos/03-14/foto1.jpg", texto: "❤️" }],
    mensajes: ["Donde nació el Frecho"],
  },

  "03-15": {
    tipo: "galeria",
    importancia: "media",
    fotos: [
      { url: "fotos/03-15/foto1.jpg", texto: "❤️" },
      { url: "fotos/03-15/foto2.jpg", texto: "❤️" },
      { url: "fotos/03-15/foto3.jpg", texto: "❤️" },
    ],
    mensajes: ["Arca de Noe", "El pato ese que mal nos atendió", "Pato tenía que ser"],
  },

  "03-17": {
    tipo: "galeria",
    fotos: [
      { url: "fotos/03-17/foto1.jpg", texto: "❤️" },
      { url: "fotos/03-17/foto2.jpg", texto: "❤️" },
    ],
    mensajes: ["Oye pero verdad que los vestidos a ti te quedan"],
  },

  "03-18": {
    tipo: "galeria",
    importancia: "media",
    fotos: [{ url: "fotos/03-18/foto1.jpg", texto: "❤️" }],
    mensajes: ["Cumple de Ricardo"],
  },

  "03-19": {
    tipo: "galeria",
    fotos: [{ url: "fotos/03-19/foto1.jpg", texto: "❤️" }],
    mensajes: ["La niña con sus espejuelos nuevos"],
  },

  "03-21": {
    tipo: "galeria",
    importancia: "media",
    fotos: [
      { url: "fotos/03-21/foto1.jpg", texto: "❤️" },
      { url: "fotos/03-21/foto2.jpg", texto: "❤️" },
      { url: "fotos/03-21/foto3.jpg", texto: "❤️" },
      { url: "fotos/03-21/foto4.jpg", texto: "❤️" },
      { url: "fotos/03-21/foto5.jpg", texto: "❤️" },
    ],
    videos: [
      { url: "fotos/03-21/video1.mp4", miniatura: "fotos/03-21/foto1.jpg", texto: "❤️" },
      { url: "fotos/03-21/video2.mp4", miniatura: "fotos/03-21/foto2.jpg", texto: "❤️" },
      { url: "fotos/03-21/video3.mp4", miniatura: "fotos/03-21/foto3.jpg", texto: "❤️" },
    ],
    mensajes: ["Massage time"],
  },

  "03-22": {
    tipo: "galeria",
    importancia: "alta",
    fotos: [
      { url: "fotos/03-22/foto1.jpg", texto: "❤️" },
      { url: "fotos/03-22/foto2.jpg", texto: "❤️" },
      { url: "fotos/03-22/foto3.jpg", texto: "❤️" },
      { url: "fotos/03-22/foto4.jpg", texto: "❤️" },
      { url: "fotos/03-22/foto5.jpg", texto: "❤️" },
      { url: "fotos/03-22/foto6.jpg", texto: "❤️" },
    ],
    mensajes: ["Empezamos con la remodelación del cuarto"],
  },

  "03-24": {
    tipo: "galeria",
    fotos: [{ url: "fotos/03-24/foto1.jpg", texto: "❤️" }],
    mensajes: ["Adicta a robarme pullovers"],
  },

  "03-25": {
    tipo: "galeria",
    fotos: [
      { url: "fotos/03-25/foto1.jpg", texto: "❤️" },
      { url: "fotos/03-25/foto2.jpg", texto: "❤️" },
      { url: "fotos/03-25/foto3.jpg", texto: "❤️" },
      { url: "fotos/03-25/foto4.jpg", texto: "❤️" },
      { url: "fotos/03-25/foto5.jpg", texto: "❤️" },
    ],
    mensajes: ["Ropita nueva","Todas te quedaron bien"],
  },

  "03-26": {
    tipo: "galeria",
    fotos: [
      { url: "fotos/03-26/foto1.jpg", texto: "❤️" },
      { url: "fotos/03-26/foto2.jpg", texto: "❤️" },
    ],
    mensajes: ["Los menos anormales"],
  },

  "03-27": {
    tipo: "galeria",
    importancia: "media",
    fotos: [
      { url: "fotos/03-27/foto1.jpg", texto: "❤️" },
      { url: "fotos/03-27/foto2.jpg", texto: "❤️" },
      { url: "fotos/03-27/foto3.jpg", texto: "❤️" },
      { url: "fotos/03-27/foto4.jpg", texto: "❤️" },
      { url: "fotos/03-27/foto5.jpg", texto: "❤️" },
      { url: "fotos/03-27/foto6.jpg", texto: "❤️" },
      { url: "fotos/03-27/foto7.jpg", texto: "❤️" },
      { url: "fotos/03-27/foto8.jpg", texto: "❤️" },
      { url: "fotos/03-27/foto9.jpg", texto: "❤️" },
      { url: "fotos/03-27/foto10.jpg", texto: "❤️" },
      { url: "fotos/03-27/foto11.jpg", texto: "❤️" },
      { url: "fotos/03-27/foto12.jpg", texto: "❤️" },
    ],
    videos: [{ url: "fotos/03-27/video1.mp4", miniatura: "fotos/03-27/foto1.jpg", texto: "❤️" }],
    mensajes: ["¡Estrés!"],
  },

  "03-28": {
    tipo: "galeria",
    importancia: "alta",
    fotos: [
      { url: "fotos/03-28/foto1.jpg", texto: "❤️" },
      { url: "fotos/03-28/foto2.jpg", texto: "❤️" },
      { url: "fotos/03-28/foto3.jpg", texto: "❤️" },
      { url: "fotos/03-28/foto4.jpg", texto: "❤️" },
      { url: "fotos/03-28/foto5.jpg", texto: "❤️" },
    ],
    videos: [
      { url: "fotos/03-28/video1.mp4", miniatura: "fotos/03-28/foto1.jpg", texto: "❤️" },
      { url: "fotos/03-28/video2.mp4", miniatura: "fotos/03-28/foto2.jpg", texto: "❤️" },
    ],
    mensajes: ["Cuarto oficialmente terminado", "Sacado de un hotel,"],
  },

  "03-29": {
    tipo: "galeria",
    importancia: "media",
    fotos: [
      { url: "fotos/03-29/foto1.jpg", texto: "❤️" },
      { url: "fotos/03-29/foto2.jpg", texto: "❤️" },
      { url: "fotos/03-29/foto3.jpg", texto: "❤️" },
      { url: "fotos/03-29/foto4.jpg", texto: "❤️" },
      { url: "fotos/03-29/foto5.jpg", texto: "❤️" },
    ],
    mensajes: ["El día de las empanadas", "Las mejores las de fresa y las de guayaba", "En verdad nos botamos, hay que hacer de nuevo"],
  },

  "03-30": {
    tipo: "galeria",
    importancia: "media",
    fotos: [
      { url: "fotos/03-30/foto1.jpg", texto: "❤️" },
      { url: "fotos/03-30/foto2.jpg", texto: "❤️" },
      { url: "fotos/03-30/foto3.jpg", texto: "❤️" },
      { url: "fotos/03-30/foto4.jpg", texto: "❤️" },
      { url: "fotos/03-30/foto5.jpg", texto: "❤️" },
      { url: "fotos/03-30/foto6.jpg", texto: "❤️" },
      { url: "fotos/03-30/foto7.jpg", texto: "❤️" },
      { url: "fotos/03-30/foto8.jpg", texto: "❤️" },
      { url: "fotos/03-30/foto9.jpg", texto: "❤️" },
      { url: "fotos/03-30/foto10.jpg", texto: "❤️" },
      { url: "fotos/03-30/foto11.jpg", texto: "❤️" },
    ],
    videos: [{ url: "fotos/03-30/video1.mp4", miniatura: "fotos/03-30/foto1.jpg", texto: "❤️" }],
    mensajes: ["¡Café Kore!"],
  },

  "03-31": {
    tipo: "galeria",
    fotos: [
      { url: "fotos/03-31/foto1.jpg", texto: "❤️" },
      { url: "fotos/03-31/foto2.jpg", texto: "❤️" },
      { url: "fotos/03-31/foto3.jpg", texto: "❤️" },
      { url: "fotos/03-31/foto4.jpg", texto: "❤️" },
    ],
    mensajes: ["❤️"],
  },

  "04-01": {
    tipo: "galeria",
    importancia: "media",
    fotos: [
      { url: "fotos/04-01/foto1.jpg", texto: "❤️" },
      { url: "fotos/04-01/foto2.jpg", texto: "❤️" },
      { url: "fotos/04-01/foto3.jpg", texto: "❤️" },
      { url: "fotos/04-01/foto4.jpg", texto: "❤️" },
      { url: "fotos/04-01/foto5.jpg", texto: "❤️" },
      { url: "fotos/04-01/foto6.jpg", texto: "❤️" },
    ],
    videos: [{ url: "fotos/04-01/video1.mp4", miniatura: "fotos/04-01/foto1.jpg", texto: "❤️" }],
    mensajes: ["Empezando abril bonitos y gorditos"],
  },

  "04-02": {
    tipo: "galeria",
    importancia: "media",
    fotos: [{ url: "fotos/04-02/foto1.jpg", texto: "❤️" }],
    mensajes: ["No puedo explicarte lo rico que estás tus nalgas","Si no las tuvieras asi de ricas no estaría contigo seguramente"],
  },

  "04-03": {
    tipo: "galeria",
    fotos: [{ url: "fotos/04-03/foto1.jpg", texto: "❤️" }],
    mensajes: ["❤️"],
  },

    "04-04": {
    tipo: "galeria",
    fotos: [{ url: "fotos/04-04/foto1.jpg", texto: "❤️" },{url: "fotos/04-04/foto2.jpg", texto: "❤️" }],
    mensajes: ["FRITIQUIII"],
  },

  "04-14": {
    tipo: "galeria",
    importancia: "alta",
    fotos: [
      { url: "fotos/04-14/foto1.jpg", texto: "❤️" },
      { url: "fotos/04-14/foto2.jpg", texto: "❤️" },
      { url: "fotos/04-14/foto3.jpg", texto: "❤️" },
      { url: "fotos/04-14/foto4.jpg", texto: "❤️" },
      { url: "fotos/04-14/foto5.jpg", texto: "❤️" },
    ],
    mensajes: [
      "Nuestro primer beso",
      "Toda la noche para que pasara lo inevitable al final",
      "Nunca vamos a saber como nos despedimos ese día",
      "Ese día bautizamos nuestro banco y nuestro lugar",
    ],
  },

  "04-20": {
    tipo: "galeria",
    importancia: "media",
    fotos: [
      { url: "fotos/04-20/foto1.jpg", texto: "❤️" },
      { url: "fotos/04-20/foto2.jpg", texto: "❤️" },
      { url: "fotos/04-20/foto3.jpg", texto: "❤️" },
      { url: "fotos/04-20/foto4.jpg", texto: "❤️" },
      { url: "fotos/04-20/foto5.jpg", texto: "❤️" },
      { url: "fotos/04-20/foto6.jpg", texto: "❤️" },
      { url: "fotos/04-20/foto7.jpg", texto: "❤️" },
    ],
    mensajes: ["Mi primera vez en tu casa"],
  },

  "04-24": {
    tipo: "galeria",
    importancia: "media",
    fotos: [{ url: "fotos/04-24/foto1.jpg", texto: "❤️" }],
    videos: [{ url: "fotos/04-24/video1.mp4", miniatura: "fotos/04-24/foto1.jpg", texto: "❤️" }],
    mensajes: ["Cuando iba a verte a la UH"],
  },

  "04-30": {
    tipo: "galeria",
    fotos: [
      { url: "fotos/04-30/foto1.jpg", texto: "❤️" },
      { url: "fotos/04-30/foto2.jpg", texto: "❤️" },
    ],
    mensajes: ["Domineta en la casa FEU"],
  },

  "05-05": {
    tipo: "galeria",
    fotos: [{ url: "fotos/05-05/foto1.jpg", texto: "❤️" }],
    mensajes: ["Las BBQ siempre serán las mejores"],
  },

  "05-06": {
    tipo: "galeria",
    fotos: [{ url: "fotos/05-06/foto1.jpg", texto: "❤️" }],
    videos: [{ url: "fotos/05-06/video1.mp4", miniatura: "fotos/05-06/foto1.jpg", texto: "❤️" }],
    mensajes: ["Cuando empezaste a venir mi casa"],
  },

  "05-07": {
    tipo: "galeria",
    fotos: [{ url: "fotos/05-07/foto1.jpg", texto: "❤️" }],
    mensajes: ["Cuando ibas a verme a la CUJAE"],
  },

  "05-16": {
    tipo: "galeria",
    importancia: "media",
    fotos: [
      { url: "fotos/05-16/foto1.jpg", texto: "❤️" },
      { url: "fotos/05-16/foto2.jpg", texto: "❤️" },
      { url: "fotos/05-16/foto3.jpg", texto: "❤️" },
    ],
    mensajes: ["Cuando empezamos algo que sería costumbre", "Nuestro primer beso captado en cámaras"],
  },

  "05-17": {
    tipo: "galeria",
    fotos: [{ url: "fotos/05-17/foto1.jpg", texto: "❤️" }],
    mensajes: ["Tú como siempre porfiándome todo"],
  },

  "05-18": {
    tipo: "galeria",
    importancia: "media",
    fotos: [
      { url: "fotos/05-18/foto1.jpg", texto: "❤️" },
      { url: "fotos/05-18/foto2.jpg", texto: "❤️" },
      { url: "fotos/05-18/foto3.jpg", texto: "❤️" },
      { url: "fotos/05-18/foto4.jpg", texto: "❤️" },
      { url: "fotos/05-18/foto5.jpg", texto: "❤️" },
      { url: "fotos/05-18/foto6.jpg", texto: "❤️" },
      { url: "fotos/05-18/foto7.jpg", texto: "❤️" },
      { url: "fotos/05-18/foto8.jpg", texto: "❤️" },
    ],
    mensajes: ["Kanda", "El día que ya nos fuimos al berro", "El día que subimos por primera vez una foto dándonos un beso"],
  },

  "05-19": {
    tipo: "galeria",
    fotos: [{ url: "fotos/05-19/foto1.jpg", texto: "❤️" }],
    mensajes: ["Esos vendedores del malecónnnn"],
  },

  "05-22": {
    tipo: "galeria",
    fotos: [
      { url: "fotos/05-22/foto1.jpg", texto: "❤️" },
      { url: "fotos/05-22/foto2.jpg", texto: "❤️" },
    ],
    mensajes: ["Llevándome la contraria como siempre"],
  },

  "05-23": {
    tipo: "galeria",
    importancia: "media",
    fotos: [
      { url: "fotos/05-23/foto1.jpg", texto: "❤️" },
      { url: "fotos/05-23/foto2.jpg", texto: "❤️" },
      { url: "fotos/05-23/foto3.jpg", texto: "❤️" },
      { url: "fotos/05-23/foto4.jpg", texto: "❤️" },
    ],
    mensajes: ["Salidita pija"],
  },

  "05-24": {
    tipo: "galeria",
    importancia: "media",
    fotos: [
      { url: "fotos/05-24/foto1.jpg", texto: "❤️" },
      { url: "fotos/05-24/foto2.jpg", texto: "❤️" },
      { url: "fotos/05-24/foto3.jpg", texto: "❤️" },
      { url: "fotos/05-24/foto4.jpg", texto: "❤️" },
    ],
    mensajes: ["Pelegrín"],
  },

  "05-27": {
    tipo: "galeria",
    fotos: [{ url: "fotos/05-27/foto1.jpg", texto: "❤️" }],
    mensajes: ["Ya estabas Fritiqui"],
  },

  "05-30": {
    tipo: "galeria",
    fotos: [{ url: "fotos/05-30/foto1.jpg", texto: "❤️" }],
    mensajes: ["Mi vicio antes de que fueras tú"],
  },

  "05-31": {
    tipo: "galeria",
    fotos: [
      { url: "fotos/05-31/foto1.jpg", texto: "❤️" },
      { url: "fotos/05-31/foto2.jpg", texto: "❤️" },
      { url: "fotos/05-31/foto3.jpg", texto: "❤️" },
      { url: "fotos/05-31/foto4.jpg", texto: "❤️" },
      { url: "fotos/05-31/foto5.jpg", texto: "❤️" },
      { url: "fotos/05-31/foto6.jpg", texto: "❤️" },
    ],
    mensajes: ["El fortuna", "La Habana"],
  },

  "06-04": {
    tipo: "galeria",
    importancia: "alta",
    fotos: [
      { url: "fotos/06-04/foto1.jpg", texto: "❤️" },
      { url: "fotos/06-04/foto2.jpg", texto: "❤️" },
      { url: "fotos/06-04/foto3.jpg", texto: "❤️" },
      { url: "fotos/06-04/foto4.jpg", texto: "❤️" },
      { url: "fotos/06-04/foto5.jpg", texto: "❤️" },
    ],
    mensajes: ["Mi cumple", "Primera vez que te quedaste a dormir conmigo", "Los primeros regalos que me diste", "Primeras veces que me tocaste a trompin disimuladamente"],
  },

  "06-07": {
    tipo: "galeria",
    importancia: "media",
    fotos: [
      { url: "fotos/06-07/foto1.jpg", texto: "❤️" },
      { url: "fotos/06-07/foto2.jpg", texto: "❤️" },
      { url: "fotos/06-07/foto3.jpg", texto: "❤️" },
      { url: "fotos/06-07/foto4.jpg", texto: "❤️" },
      { url: "fotos/06-07/foto5.jpg", texto: "❤️" },
    ],
    mensajes: ["Día de Dumplings"],
  },

  "06-11": {
    tipo: "galeria",
    fotos: [{ url: "fotos/06-11/foto1.jpg", texto: "❤️" }],
    mensajes: ["Tu dejando tu termo en mi casa para tener excusa para venir"],
  },

  "06-13": {
    tipo: "galeria",
    fotos: [{ url: "fotos/06-13/foto1.jpg", texto: "❤️" }],
    mensajes: ["Ni sueñes en comprarme eso"],
  },

  "06-19": {
    tipo: "galeria",
    importancia: "alta",
    fotos: [
      { url: "fotos/06-19/foto1.jpg", texto: "❤️" },
      { url: "fotos/06-19/foto2.jpg", texto: "❤️" },
      { url: "fotos/06-19/foto3.jpg", texto: "❤️" },
      { url: "fotos/06-19/foto4.jpg", texto: "❤️" },
    ],
    mensajes: ["Tu cumple", "Aunque no estuve fue un lindo día para ti", "Primero y último en el que no estoy"],
  },

  "06-21": {
    tipo: "galeria",
    importancia: "alta",
    fotos: [
      { url: "fotos/06-21/foto1.jpg", texto: "❤️" },
      { url: "fotos/06-21/foto2.jpg", texto: "❤️" },
      { url: "fotos/06-21/foto3.jpg", texto: "❤️" },
      { url: "fotos/06-21/foto4.jpg", texto: "❤️" },
      { url: "fotos/06-21/foto5.jpg", texto: "❤️" },
      { url: "fotos/06-21/foto6.jpg", texto: "❤️" },
    ],
    mensajes: ["Para mi este día fue tu cumple", "Lo pude celebrar contigo", "Que linda estabas ese día", "Ya parecíamos una pareja y ni habíamos empezado", "Ahí dije:-esta tiene que ser mi novia si o si"],
  },

  "06-22": {
    tipo: "galeria",
    importancia: "alta",
    fotos: [
      { url: "fotos/06-22/foto1.jpg", texto: "❤️" },
      { url: "fotos/06-22/foto2.jpg", texto: "❤️" },
      { url: "fotos/06-22/foto3.jpg", texto: "❤️" },
      { url: "fotos/06-22/foto4.jpg", texto: "❤️" },
      { url: "fotos/06-22/foto5.jpg", texto: "❤️" },
      { url: "fotos/06-22/foto6.jpg", texto: "❤️" },
      { url: "fotos/06-22/foto7.jpg", texto: "❤️" },
      { url: "fotos/06-22/foto8.jpg", texto: "❤️" },
      { url: "fotos/06-22/foto9.jpg", texto: "❤️" },
    ],
    videos: [
      { url: "fotos/06-22/video1.mp4", miniatura: "fotos/06-22/foto1.jpg", texto: "❤️" },
      { url: "fotos/06-22/video2.mp4", miniatura: "fotos/06-22/foto2.jpg", texto: "❤️" },
    ],
    mensajes: ["Buenas fotos salieron de este dia","La mejor foto es la de yo dándote el masaje, que linda saliste dios mío"],
  },

  "06-28": {
    tipo: "galeria",
    fotos: [{ url: "fotos/06-28/foto1.jpg", texto: "❤️" }],
    mensajes: ["Cafezillo"],
  },

  "06-29": {
    tipo: "galeria",
    fotos: [
      { url: "fotos/06-29/foto1.jpg", texto: "❤️" },
      { url: "fotos/06-29/foto2.jpg", texto: "❤️" },
      { url: "fotos/06-29/foto3.jpg", texto: "❤️" },
      { url: "fotos/06-29/foto4.jpg", texto: "❤️" },
      { url: "fotos/06-29/foto5.jpg", texto: "❤️" },
      { url: "fotos/06-29/foto6.jpg", texto: "❤️" },
      { url: "fotos/06-29/foto7.jpg", texto: "❤️" },
    ],
    videos: [{ url: "fotos/06-29/video1.mp4", miniatura: "fotos/06-29/foto1.jpg", texto: "❤️" }],
    mensajes: ["Ese vestido te quedaaaaa"],
  },

  "07-01": {
    tipo: "galeria",
    importancia: "media",
    fotos: [{ url: "fotos/07-01/foto1.jpg", texto: "❤️" }],
    mensajes: ["Que estudiosa"],
  },

  "07-04": {
    tipo: "galeria",
    importancia: "alta",
    fotos: [
      { url: "fotos/07-04/foto1.jpg", texto: "❤️" },
      { url: "fotos/07-04/foto2.jpg", texto: "❤️" },
      { url: "fotos/07-04/foto3.jpg", texto: "❤️" },
      { url: "fotos/07-04/foto4.jpg", texto: "❤️" },
      { url: "fotos/07-04/foto5.jpg", texto: "❤️" },
    ],
    mensajes: ["Salida al nacional sin saber que sería nuestro lugar", "Ya ese día veniía preparado para pasar al siguiente nivel contigo", "24h después serías mi novia para siempre"],
  },

  "07-05": {
    tipo: "galeria",
    importancia: "alta",
    fotos: [
      { url: "fotos/07-05/foto1.jpg", texto: "❤️" },
      { url: "fotos/07-05/foto2.jpg", texto: "❤️" },
    ],
    mensajes: ["Uno de los días más importantes de mi vida", "Que nervios, se suponía que el mismo 4 te preguntaría", "Este día empezó legalmente nuestra historia y el número 5 sería el nuestro para siempre", "Sorprendentemente de este día no tenemos ni fotos pero si recuerdos"],
    cartaTexto: "Aqui quiero decirte todo lo que no te dije ese día que te pedí ser mi novia. Este es el Adrián de ese tiempo, no el de ahora. Hoy 5 de julio quiero decirte que te has vuelto alguien muy especial, que en tan poco tiempo has logrado meterte en mi corazón y en mi mente de una manera que no esperaba. LLevamos alrededor de 3 meses conociéndonos y saliendo, aunque parece que nos conociéramos hace años y me he dado cuenta que eres literalmente lo que buscaba para tener a mi lado, tienes todas las cualidades que me gustan de una mujer, tienes todo lo que necesito para ser feliz. Me he dado cuenta en estos 3 meses que ya no quiero que seamos solo una talla, xq me he dado cuenta que te quiero para mi na ma y quiero que todos lo vean y sepan que eres mine mine mine, y xq creo que vamos a hacer una linda pareja, xq a pesar de nuestras diferencias y pensar distinto tenemos muchas otras cosas en común y creo que puedo enamorarme de ti de una forma que nunca me ha pasado. Por todo esto y más te quiero preguntar:  ¿Quieres ser mi novia?. Att: Tu pochi pa' rato (;",
  },

  "07-13": {
    tipo: "galeria",
    importancia: "media",
    fotos: [
      { url: "fotos/07-13/foto1.jpg", texto: "❤️" },
      { url: "fotos/07-13/foto2.jpg", texto: "❤️" },
      { url: "fotos/07-13/foto3.jpg", texto: "❤️" },
      { url: "fotos/07-13/foto4.jpg", texto: "❤️" },
      { url: "fotos/07-13/foto5.jpg", texto: "❤️" },
      { url: "fotos/07-13/foto6.jpg", texto: "❤️" },
      { url: "fotos/07-13/foto7.jpg", texto: "❤️" },
      { url: "fotos/07-13/foto8.jpg", texto: "❤️" },
      { url: "fotos/07-13/foto9.jpg", texto: "❤️" },
    ],
    videos: [
      { url: "fotos/07-13/video1.mp4", miniatura: "fotos/07-13/foto1.jpg", texto: "❤️" },
      { url: "fotos/07-13/video2.mp4", miniatura: "fotos/07-13/foto2.jpg", texto: "❤️" },
    ],
    mensajes: ["1ra piscina siendo jevis", "1ra salida siendo jevis", "Oficialmente novios ya publicamente"],
  },

  "07-18": {
    tipo: "galeria",
    importancia: "media",
    fotos: [
      { url: "fotos/07-18/foto1.jpg", texto: "Hala Madrid" },
      { url: "fotos/07-18/foto2.jpg", texto: "❤️" },
      { url: "fotos/07-18/foto3.jpg", texto: "La única foto que tenemos asi" },
      { url: "fotos/07-18/foto4.jpg", texto: "❤️" },
      { url: "fotos/07-18/foto5.jpg", texto: "❤️" },
      { url: "fotos/07-18/foto6.jpg", texto: "❤️" },
    ],
  },

  "07-19": {
    tipo: "galeria",
    fotos: [
      { url: "fotos/07-19/foto1.jpg", texto: "❤️" },
      { url: "fotos/07-19/foto2.jpg", texto: "❤️" },
      { url: "fotos/07-19/foto3.jpg", texto: "❤️" },
    ],
    mensajes: ["Una flor para otra flor jajaja"],
  },

  "07-20": {
    tipo: "galeria",
    importancia: "media",
    fotos: [{ url: "fotos/07-20/foto1.jpg", texto: "❤️" }],
    mensajes: ["Ups, nos cogieron las cámaras"],
  },

  "07-21": {
    tipo: "galeria",
    fotos: [{ url: "fotos/07-21/foto1.jpg", texto: "❤️" }],
    mensajes: ["Cumple de Sandrine"],
  },

  "07-23": {
    tipo: "galeria",
    fotos: [{ url: "fotos/07-23/foto1.jpg", texto: "❤️" }],
    mensajes: ["No se xq te gusta esa foto mía"],
  },

  "07-24": {
    tipo: "galeria",
    importancia: "media",
    fotos: [
      { url: "fotos/07-24/foto1.jpg", texto: "❤️" },
      { url: "fotos/07-24/foto2.jpg", texto: "❤️" },
      { url: "fotos/07-24/foto3.jpg", texto: "❤️" },
      { url: "fotos/07-24/foto4.jpg", texto: "❤️" },
      { url: "fotos/07-24/foto5.jpg", texto: "❤️" },
      { url: "fotos/07-24/foto6.jpg", texto: "❤️" },
      { url: "fotos/07-24/foto7.jpg", texto: "❤️" },
      { url: "fotos/07-24/foto8.jpg", texto: "❤️" },
      { url: "fotos/07-24/foto9.jpg", texto: "❤️" },
    ],
    mensajes: ["Cohiba"],
  },

  "07-25": {
    tipo: "galeria",
    fotos: [{ url: "fotos/07-25/foto1.jpg", texto: "❤️" }],
    mensajes: ["Ni idea de cuando fue esta foto"],
  },

  "07-26": {
    tipo: "galeria",
    importancia: "media",
    fotos: [
      { url: "fotos/07-26/foto1.jpg", texto: "❤️" },
      { url: "fotos/07-26/foto2.jpg", texto: "❤️" },
      { url: "fotos/07-26/foto3.jpg", texto: "❤️" },
      { url: "fotos/07-26/foto4.jpg", texto: "❤️" },
      { url: "fotos/07-26/foto5.jpg", texto: "❤️" },
    ],
    mensajes: ["Pret a Potter"],
  },

  "07-27": {
    tipo: "galeria",
    importancia: "media",
    fotos: [
      { url: "fotos/07-27/foto1.jpg", texto: "❤️" },
      { url: "fotos/07-27/foto2.jpg", texto: "❤️" },
      { url: "fotos/07-27/foto3.jpg", texto: "❤️" },
      { url: "fotos/07-27/foto4.jpg", texto: "❤️" },
      { url: "fotos/07-27/foto5.jpg", texto: "❤️" },
    ],
    videos: [{ url: "fotos/07-27/video1.mp4", miniatura: "fotos/07-27/foto1.jpg", texto: "❤️" }],
    mensajes: ["Jugando Monopoly con los gordos"],
  },

  "07-28": {
    tipo: "galeria",
    importancia: "media",
    fotos: [
      { url: "fotos/07-28/foto1.jpg", texto: "❤️" },
      { url: "fotos/07-28/foto2.jpg", texto: "❤️" },
      { url: "fotos/07-28/foto3.jpg", texto: "❤️" },
      { url: "fotos/07-28/foto4.jpg", texto: "❤️" },
      { url: "fotos/07-28/foto5.jpg", texto: "❤️" },
      { url: "fotos/07-28/foto6.jpg", texto: "❤️" },
      { url: "fotos/07-28/foto7.jpg", texto: "❤️" },
    ],
    mensajes: ["El dia de las famosas fotas en la azotea(La placa)"],
  },

  "08-05": {
    tipo: "galeria",
    importancia: "alta",
    fotos: [
      { url: "fotos/08-05/foto1.jpg", texto: "❤️" },
      { url: "fotos/08-05/foto2.jpg", texto: "❤️" },
      { url: "fotos/08-05/foto3.jpg", texto: "❤️" },
    ],
    mensajes: ["1er mesiversario", "Donde surgieron las noticas cuando las pusiste en las papas Barbacoas", "Desde ese día las noticas nunca pararon hasta llenarme el closet"],
  },

  "08-06": {
    tipo: "galeria",
    importancia: "media",
    fotos: [
      { url: "fotos/08-06/foto1.jpg", texto: "❤️" },
      { url: "fotos/08-06/foto2.jpg", texto: "❤️" },
      { url: "fotos/08-06/foto3.jpg", texto: "❤️" },
      { url: "fotos/08-06/foto4.jpg", texto: "❤️" },
      { url: "fotos/08-06/foto5.jpg", texto: "❤️" },
    ],
    mensajes: ["En la embajada de Perú","Oye pero yo no me acordaba de esas fotos con ese culón","Ya tengo contenido para las noches jujuju"],
  },

  "08-07": {
    tipo: "galeria",
    importancia: "media",
    fotos: [
      { url: "fotos/08-07/foto1.jpg", texto: "❤️" },
      { url: "fotos/08-07/foto2.jpg", texto: "❤️" },
      { url: "fotos/08-07/foto3.jpg", texto: "❤️" },
      { url: "fotos/08-07/foto4.jpg", texto: "❤️" },
      { url: "fotos/08-07/foto5.jpg", texto: "❤️" },
      { url: "fotos/08-07/foto6.jpg", texto: "❤️" },
      { url: "fotos/08-07/foto7.jpg", texto: "❤️" },
      { url: "fotos/08-07/foto8.jpg", texto: "❤️" },
      { url: "fotos/08-07/foto9.jpg", texto: "❤️" },
    ],
    mensajes: ["Embajadad de Perú","El día que me robaste un pullover por primera vez","Desde ese día he perdido más de 10 pullovers"],
  },

  "08-09": {
    tipo: "galeria",
    importancia: "media",
    fotos: [
      { url: "fotos/08-09/foto1.jpg", texto: "❤️" },
      { url: "fotos/08-09/foto2.jpg", texto: "❤️" },
      { url: "fotos/08-09/foto3.jpg", texto: "❤️" },
      { url: "fotos/08-09/foto4.jpg", texto: "❤️" },
    ],
    mensajes: ["Cangri con mi prima"],
  },

  "08-10": {
    tipo: "galeria",
    importancia: "media",
    fotos: [
      { url: "fotos/08-10/foto1.jpg", texto: "❤️" },
      { url: "fotos/08-10/foto2.jpg", texto: "❤️" },
      { url: "fotos/08-10/foto3.jpg", texto: "❤️" },
      { url: "fotos/08-10/foto4.jpg", texto: "❤️" },
      { url: "fotos/08-10/foto5.jpg", texto: "❤️" },
      { url: "fotos/08-10/foto6.jpg", texto: "❤️" },
      { url: "fotos/08-10/foto7.jpg", texto: "❤️" },
    ],
    mensajes: ["Desayunando en La Chuchería","Eres de Alonso JR "],
  },

  "08-11": {
    tipo: "galeria",
    fotos: [{ url: "fotos/08-11/foto1.jpg", texto: "❤️" }],
    mensajes: ["Fiona?"],
  },

  "08-16": {
    tipo: "galeria",
    importancia: "media",
    fotos: [
      { url: "fotos/08-16/foto1.jpg", texto: "❤️" },
      { url: "fotos/08-16/foto2.jpg", texto: "❤️" },
      { url: "fotos/08-16/foto3.jpg", texto: "❤️" },
      { url: "fotos/08-16/foto4.jpg", texto: "❤️" },
      { url: "fotos/08-16/foto5.jpg", texto: "❤️" },
      { url: "fotos/08-16/foto6.jpg", texto: "❤️" },
      { url: "fotos/08-16/foto7.jpg", texto: "❤️" },
      { url: "fotos/08-16/foto8.jpg", texto: "❤️" },
      { url: "fotos/08-16/foto9.jpg", texto: "❤️" },
    ],
    mensajes: ["Vampirito"],
  },

  "08-17": {
    tipo: "galeria",
    importancia: "alta",
    fotos: [
      { url: "fotos/08-17/foto1.jpg", texto: "❤️" },
      { url: "fotos/08-17/foto2.jpg", texto: "❤️" },
      { url: "fotos/08-17/foto3.jpg", texto: "❤️" },
      { url: "fotos/08-17/foto4.jpg", texto: "❤️" },
      { url: "fotos/08-17/foto5.jpg", texto: "❤️" },
      { url: "fotos/08-17/foto6.jpg", texto: "❤️" },
      { url: "fotos/08-17/foto7.jpg", texto: "❤️" },
      { url: "fotos/08-17/foto8.jpg", texto: "❤️" },
      { url: "fotos/08-17/foto9.jpg", texto: "❤️" },
      { url: "fotos/08-17/foto10.jpg", texto: "❤️" },
      { url: "fotos/08-17/foto11.jpg", texto: "❤️" },
      { url: "fotos/08-17/foto12.jpg", texto: "❤️" },
      { url: "fotos/08-17/foto13.jpg", texto: "❤️" },
      { url: "fotos/08-17/foto14.jpg", texto: "❤️" },
    ],
    videos: [{ url: "fotos/08-17/video1.mp4", miniatura: "fotos/08-17/foto1.jpg", texto: "❤️" }],
    mensajes: ["¡Viñales!", "1ra excursión juntos", "Uno de los mejores días de nuestra relación", "Creo que este día fue un antes y un después en nosotros como pareja", "Después de este día salimos como una relacíon más consolidada", "Definitivamente es de los días más importantes de nosotros"],
  },

  "08-20": {
    tipo: "galeria",
    importancia: "media",
    fotos: [
      { url: "fotos/08-20/foto1.jpg", texto: "❤️" },
      { url: "fotos/08-20/foto2.jpg", texto: "❤️" },
      { url: "fotos/08-20/foto3.jpg", texto: "❤️" },
      { url: "fotos/08-20/foto4.jpg", texto: "❤️" },
      { url: "fotos/08-20/foto5.jpg", texto: "❤️" },
    ],
    mensajes: ["Despedida de mi prima"],
  },

  "08-21": {
    tipo: "galeria",
    importancia: "media",
    videos: [{ url: "fotos/08-21/video1.mp4", miniatura: "fotos/08-21/foto1.jpg", texto: "❤️" }],
    mensajes: ["Viendo Lilo y Stich en persona"],
  },

  "08-22": {
    tipo: "galeria",
    importancia: "media",
    fotos: [
      { url: "fotos/08-22/foto1.jpg", texto: "❤️" },
      { url: "fotos/08-22/foto2.jpg", texto: "❤️" },
      { url: "fotos/08-22/foto3.jpg", texto: "❤️" },
    ],
    mensajes: ["Casi igaules los ojos"],
  },

  "08-30": {
    tipo: "galeria",
    importancia: "media",
    fotos: [
      { url: "fotos/08-30/foto1.jpg", texto: "❤️" },
      { url: "fotos/08-30/foto2.jpg", texto: "❤️" },
      { url: "fotos/08-30/foto3.jpg", texto: "❤️" },
      { url: "fotos/08-30/foto4.jpg", texto: "❤️" },
      { url: "fotos/08-30/foto5.jpg", texto: "❤️" },
      { url: "fotos/08-30/foto6.jpg", texto: "❤️" },
    ],
    mensajes: ["Melia Habana"],
  },

  "09-01": {
    tipo: "galeria",
    importancia: "media",
    fotos: [
      { url: "fotos/09-01/foto1.jpg", texto: "❤️" },
      { url: "fotos/09-01/foto2.jpg", texto: "❤️" },
      { url: "fotos/09-01/foto3.jpg", texto: "❤️" },
      { url: "fotos/09-01/foto4.jpg", texto: "❤️" },
    ],
    videos: [{ url: "fotos/09-01/video1.mp4", miniatura: "fotos/09-01/foto1.jpg", texto: "❤️" }],
    mensajes: ["Tosquina"],
  },

  "09-05": {
    tipo: "galeria",
    importancia: "alta",
    fotos: [
      { url: "fotos/09-05/foto1.jpg", texto: "❤️" },
      { url: "fotos/09-05/foto2.jpg", texto: "❤️" },
      { url: "fotos/09-05/foto3.jpg", texto: "❤️" },
      { url: "fotos/09-05/foto4.jpg", texto: "❤️" },
      { url: "fotos/09-05/foto5.jpg", texto: "❤️" },
      { url: "fotos/09-05/foto6.jpg", texto: "❤️" },
      { url: "fotos/09-05/foto7.jpg", texto: "❤️" },
      { url: "fotos/09-05/foto8.jpg", texto: "❤️" },
      { url: "fotos/09-05/foto9.jpg", texto: "❤️" },
      { url: "fotos/09-05/foto10.jpg", texto: "❤️" },
      { url: "fotos/09-05/foto11.jpg", texto: "❤️" },
    ],
    videos: [
      { url: "fotos/09-05/video1.mp4", miniatura: "fotos/09-05/foto1.jpg", texto: "❤️" },
      { url: "fotos/09-05/video2.mp4", miniatura: "fotos/09-05/foto2.jpg", texto: "❤️" },
      { url: "fotos/09-05/video3.mp4", miniatura: "fotos/09-05/foto3.jpg", texto: "❤️" },
    ],
    mensajes: ["El día donde empezó la costumbre de todos los 5 ir al Nacional", "Y donde empezó tu vicio con los Dumplings"],
  },

  "09-06": {
    tipo: "galeria",
    importancia: "media",
    fotos: [
      { url: "fotos/09-06/foto1.jpg", texto: "❤️" },
      { url: "fotos/09-06/foto2.jpg", texto: "❤️" },
      { url: "fotos/09-06/foto3.jpg", texto: "❤️" },
      { url: "fotos/09-06/foto4.jpg", texto: "❤️" },
      { url: "fotos/09-06/foto5.jpg", texto: "❤️" },
      { url: "fotos/09-06/foto6.jpg", texto: "❤️" },
      { url: "fotos/09-06/foto7.jpg", texto: "❤️" },
    ],
    mensajes: ["Fusión Frappe"],
  },

  "09-07": {
    tipo: "galeria",
    importancia: "media",
    fotos: [
      { url: "fotos/09-07/foto1.jpg", texto: "❤️" },
      { url: "fotos/09-07/foto2.jpg", texto: "❤️" },
      { url: "fotos/09-07/foto3.jpg", texto: "❤️" },
      { url: "fotos/09-07/foto4.jpg", texto: "❤️" },
      { url: "fotos/09-07/foto5.jpg", texto: "❤️" },
      { url: "fotos/09-07/foto6.jpg", texto: "❤️" },
      { url: "fotos/09-07/foto7.jpg", texto: "❤️" },
      { url: "fotos/09-07/foto8.jpg", texto: "❤️" },
    ],
    videos: [{ url: "fotos/09-07/video1.mp4", miniatura: "fotos/09-07/foto1.jpg", texto: "❤️" }],
    mensajes: ["Salida con tus abuelos"],
  },

  "09-08": {
    tipo: "galeria",
    importancia: "media",
    videos: [
      { url: "fotos/09-08/video1.mp4", miniatura: "fotos/09-08/foto1.jpg", texto: "❤️" },
      { url: "fotos/09-08/video2.mp4", miniatura: "fotos/09-08/foto2.jpg", texto: "❤️" },
      { url: "fotos/09-08/video3.mp4", miniatura: "fotos/09-08/foto3.jpg", texto: "❤️" },
    ],
    mensajes: ["❤️"],
  },

  "09-09": {
    tipo: "galeria",
    fotos: [{ url: "fotos/09-09/foto1.jpg", texto: "❤️" }],
    mensajes: ["El termo que me regalaste"],
  },

  "09-11": {
    tipo: "galeria",
    importancia: "media",
    fotos: [
      { url: "fotos/09-11/foto1.jpg", texto: "❤️" },
      { url: "fotos/09-11/foto2.jpg", texto: "❤️" },
      { url: "fotos/09-11/foto3.jpg", texto: "❤️" },
      { url: "fotos/09-11/foto4.jpg", texto: "❤️" },
      { url: "fotos/09-11/foto5.jpg", texto: "❤️" },
      { url: "fotos/09-11/foto6.jpg", texto: "❤️" },
      { url: "fotos/09-11/foto7.jpg", texto: "❤️" },
    ],
    videos: [
      { url: "fotos/09-11/video1.mp4", miniatura: "fotos/09-11/foto1.jpg", texto: "❤️" },
      { url: "fotos/09-11/video2.mp4", miniatura: "fotos/09-11/foto2.jpg", texto: "❤️" },
      { url: "fotos/09-11/video3.mp4", miniatura: "fotos/09-11/foto3.jpg", texto: "❤️" },
    ],
    mensajes: ["Tremendo tolete"],
  },

  "09-13": {
    tipo: "galeria",
    fotos: [
      { url: "fotos/09-13/foto1.jpg", texto: "❤️" },
      { url: "fotos/09-13/foto2.jpg", texto: "❤️" },
      { url: "fotos/09-13/foto3.jpg", texto: "❤️" },
      { url: "fotos/09-13/foto4.jpg", texto: "❤️" },
    ],
    mensajes: ["La IA me mató","Quien le dijo a la IA que me iba a quedar calvo"],
  },

  "09-18": {
    tipo: "galeria",
    importancia: "alta",
    fotos: [
      { url: "fotos/09-18/foto1.jpg", texto: "❤️" },
      { url: "fotos/09-18/foto2.jpg", texto: "❤️" },
      { url: "fotos/09-18/foto3.jpg", texto: "❤️" },
      { url: "fotos/09-18/foto4.jpg", texto: "❤️" },
      { url: "fotos/09-18/foto5.jpg", texto: "❤️" },
      { url: "fotos/09-18/foto6.jpg", texto: "❤️" },
      { url: "fotos/09-18/foto7.jpg", texto: "❤️" },
      { url: "fotos/09-18/foto8.jpg", texto: "❤️" },
      { url: "fotos/09-18/foto9.jpg", texto: "❤️" },
    ],
    videos: [{ url: "fotos/09-18/video1.mp4", miniatura: "fotos/09-18/foto1.jpg", texto: "❤️" }],
    mensajes: ["Camino a Varadero"],
  },

  "09-19": {
    tipo: "galeria",
    importancia: "alta",
    fotos: [
      { url: "fotos/09-19/foto1.jpg", texto: "❤️" },
      { url: "fotos/09-19/foto2.jpg", texto: "❤️" },
      { url: "fotos/09-19/foto3.jpg", texto: "❤️" },
      { url: "fotos/09-19/foto4.jpg", texto: "❤️" },
      { url: "fotos/09-19/foto5.jpg", texto: "❤️" },
      { url: "fotos/09-19/foto6.jpg", texto: "❤️" },
      { url: "fotos/09-19/foto7.jpg", texto: "❤️" },
      { url: "fotos/09-19/foto8.jpg", texto: "❤️" },
      { url: "fotos/09-19/foto9.jpg", texto: "❤️" },
      { url: "fotos/09-19/foto10.jpg", texto: "❤️" },
      { url: "fotos/09-19/foto11.jpg", texto: "❤️" },
      { url: "fotos/09-19/foto12.jpg", texto: "❤️" },
      { url: "fotos/09-19/foto13.jpg", texto: "❤️" },
      { url: "fotos/09-19/foto14.jpg", texto: "❤️" },
      { url: "fotos/09-19/foto15.jpg", texto: "❤️" },
      { url: "fotos/09-19/foto16.jpg", texto: "❤️" },
      { url: "fotos/09-19/foto17.jpg", texto: "❤️" },
      { url: "fotos/09-19/foto18.jpg", texto: "❤️" },
      { url: "fotos/09-19/foto19.jpg", texto: "❤️" },
      { url: "fotos/09-19/foto20.jpg", texto: "❤️" },
      { url: "fotos/09-19/foto21.jpg", texto: "❤️" },
    ],
    videos: [
      { url: "fotos/09-19/video1.mp4", miniatura: "fotos/09-19/foto1.jpg", texto: "❤️" },
      { url: "fotos/09-19/video2.mp4", miniatura: "fotos/09-19/foto2.jpg", texto: "❤️" },
    ],
    mensajes: ["Cafeccino","Josone",],
  },

  "09-20": {
    tipo: "galeria",
    importancia: "alta",
    fotos: [
      { url: "fotos/09-20/foto1.jpg", texto: "❤️" },
      { url: "fotos/09-20/foto2.jpg", texto: "❤️" },
      { url: "fotos/09-20/foto3.jpg", texto: "❤️" },
      { url: "fotos/09-20/foto4.jpg", texto: "❤️" },
      { url: "fotos/09-20/foto5.jpg", texto: "❤️" },
      { url: "fotos/09-20/foto6.jpg", texto: "❤️" },
      { url: "fotos/09-20/foto7.jpg", texto: "❤️" },
      { url: "fotos/09-20/foto8.jpg", texto: "❤️" },
      { url: "fotos/09-20/foto9.jpg", texto: "❤️" },
    ],
    mensajes: ["Pasando día en el hotel"],
  },

  "09-21": {
    tipo: "galeria",
    importancia: "alta",
    fotos: [
      { url: "fotos/09-21/foto1.jpg", texto: "❤️" },
      { url: "fotos/09-21/foto2.jpg", texto: "❤️" },
      { url: "fotos/09-21/foto3.jpg", texto: "❤️" },
      { url: "fotos/09-21/foto4.jpg", texto: "❤️" },
      { url: "fotos/09-21/foto5.jpg", texto: "❤️" },
      { url: "fotos/09-21/foto6.jpg", texto: "❤️" },
    ],
    videos: [
      { url: "fotos/09-21/video1.mp4", miniatura: "fotos/09-21/foto1.jpg", texto: "❤️" },
      { url: "fotos/09-21/video2.mp4", miniatura: "fotos/09-21/foto2.jpg", texto: "❤️" },
    ],
    mensajes: ["Montaña rusa","Billar por la noche"],
  },

  "09-28": {
    tipo: "galeria",
    importancia: "media",
    fotos: [
      { url: "fotos/09-28/foto1.jpg", texto: "❤️" },
      { url: "fotos/09-28/foto2.jpg", texto: "❤️" },
      { url: "fotos/09-28/foto3.jpg", texto: "❤️" },
      { url: "fotos/09-28/foto4.jpg", texto: "❤️" },
      { url: "fotos/09-28/foto5.jpg", texto: "❤️" },
      { url: "fotos/09-28/foto6.jpg", texto: "❤️" },
      { url: "fotos/09-28/foto7.jpg", texto: "❤️" },
      { url: "fotos/09-28/foto8.jpg", texto: "❤️" },
    ],
    mensajes: ["La Vitrola "],
  },

  "10-02": {
    tipo: "galeria",
    importancia: "media",
    fotos: [
      { url: "fotos/10-02/foto1.jpg", texto: "❤️" },
      { url: "fotos/10-02/foto2.jpg", texto: "❤️" },
      { url: "fotos/10-02/foto3.jpg", texto: "❤️" },
      { url: "fotos/10-02/foto4.jpg", texto: "❤️" },
      { url: "fotos/10-02/foto5.jpg", texto: "❤️" },
    ],
    videos: [
      { url: "fotos/10-02/video1.mp4", miniatura: "fotos/10-02/foto1.jpg", texto: "❤️" },
      { url: "fotos/10-02/video2.mp4", miniatura: "fotos/10-02/foto2.jpg", texto: "❤️" },
      { url: "fotos/10-02/video3.mp4", miniatura: "fotos/10-02/foto3.jpg", texto: "❤️" },
    ],
    mensajes: ["1ra vez que sacaste a Buki","Nos quedó de pinga el reel de Ratatouille, lástima que te importe más lo que pienses tus seguidores de instagram"],
  },

  "10-05": {
    tipo: "galeria",
    importancia: "alta",
    fotos: [
      { url: "fotos/10-05/foto1.jpg", texto: "❤️" },
      { url: "fotos/10-05/foto2.jpg", texto: "❤️" },
      { url: "fotos/10-05/foto3.jpg", texto: "❤️" },
      { url: "fotos/10-05/foto4.jpg", texto: "❤️" },
      { url: "fotos/10-05/foto5.jpg", texto: "❤️" },
      { url: "fotos/10-05/foto6.jpg", texto: "❤️" },
      { url: "fotos/10-05/foto7.jpg", texto: "❤️" },
    ],
    mensajes: ["Mesiversario y al Nacional"],
  },

  "10-08": {
    tipo: "galeria",
    fotos: [{ url: "fotos/10-08/foto1.jpg", texto: "❤️" }],
    mensajes: ["Casa FEU"],
  },

  "10-09": {
    tipo: "galeria",
    fotos: [{ url: "fotos/10-09/foto1.jpg", texto: "❤️" }],
    mensajes: ["Desayuno de tu novio"],
  },

  "10-11": {
    tipo: "galeria",
    importancia: "media",
    fotos: [
      { url: "fotos/10-11/foto1.jpg", texto: "❤️" },
      { url: "fotos/10-11/foto2.jpg", texto: "❤️" },
      { url: "fotos/10-11/foto3.jpg", texto: "❤️" },
      { url: "fotos/10-11/foto4.jpg", texto: "❤️" },
      { url: "fotos/10-11/foto5.jpg", texto: "❤️" },
      { url: "fotos/10-11/foto6.jpg", texto: "❤️" },
      { url: "fotos/10-11/foto7.jpg", texto: "❤️" },
      { url: "fotos/10-11/foto8.jpg", texto: "❤️" },
    ],
    videos: [
      { url: "fotos/10-11/video1.mp4", miniatura: "fotos/10-11/foto1.jpg", texto: "❤️" },
      { url: "fotos/10-11/video2.mp4", miniatura: "fotos/10-11/foto2.jpg", texto: "❤️" },
    ],
    mensajes: ["SuperMarket Hod Dogs"],
  },

  "10-16": {
    tipo: "galeria",
    importancia: "media",
    fotos: [
      { url: "fotos/10-16/foto1.jpg", texto: "❤️" },
      { url: "fotos/10-16/foto2.jpg", texto: "❤️" },
      { url: "fotos/10-16/foto3.jpg", texto: "❤️" },
      { url: "fotos/10-16/foto4.jpg", texto: "❤️" },
    ],
    videos: [
      { url: "fotos/10-16/video1.mp4", miniatura: "fotos/10-16/foto1.jpg", texto: "❤️" },
      { url: "fotos/10-16/video2.mp4", miniatura: "fotos/10-16/foto2.jpg", texto: "❤️" },
      { url: "fotos/10-16/video3.mp4", miniatura: "fotos/10-16/foto3.jpg", texto: "❤️" },
    ],
    mensajes: ["Fanática a Buki en secreto","Que bonitos esos tacos putiii","Rayaste todo el bloque de queso"],
  },

  "10-18": {
    tipo: "galeria",
    fotos: [{ url: "fotos/10-18/foto1.jpg", texto: "❤️" }],
    videos: [{ url: "fotos/10-18/video1.mp4", miniatura: "fotos/10-18/foto1.jpg", texto: "❤️" }],
    mensajes: ["Cardrián"],
  },

  "10-21": {
    tipo: "galeria",
    importancia: "media",
    videos: [{ url: "fotos/10-21/video1.mp4", miniatura: "fotos/10-21/foto1.jpg", texto: "❤️" }],
    mensajes: ["❤️"],
  },

  "10-26": {
    tipo: "galeria",
    importancia: "media",
    fotos: [
      { url: "fotos/10-26/foto1.jpg", texto: "❤️" },
      { url: "fotos/10-26/foto2.jpg", texto: "❤️" },
    ],
    mensajes: ["Sapori"],
  },

  "10-31": {
    tipo: "galeria",
    importancia: "alta",
    fotos: [
      { url: "fotos/10-31/foto1.jpg", texto: "❤️" },
      { url: "fotos/10-31/foto2.jpg", texto: "❤️" },
      { url: "fotos/10-31/foto3.jpg", texto: "❤️" },
      { url: "fotos/10-31/foto4.jpg", texto: "❤️" },
      { url: "fotos/10-31/foto5.jpg", texto: "❤️" },
      { url: "fotos/10-31/foto6.jpg", texto: "❤️" },
      { url: "fotos/10-31/foto7.jpg", texto: "❤️" },
      { url: "fotos/10-31/foto8.jpg", texto: "❤️" },
      { url: "fotos/10-31/foto9.jpg", texto: "❤️" },
    ],
    mensajes: ["¡Men in Black!", "1er Halloween juntos", "La rompimos con esos disfraces", "Otro día que marcó nuestra relación"],
  },

  "11-01": {
    tipo: "galeria",
    fotos: [{ url: "fotos/11-01/foto1.jpg", texto: "❤️" }],
    mensajes: ["Los mejores abrazos son los tuyos"],
  },

  "11-04": {
    tipo: "galeria",
    fotos: [{ url: "fotos/11-04/foto1.jpg", texto: "❤️" }],
    mensajes: ["Tu oso"],
  },

  "11-06": {
    tipo: "galeria",
    importancia: "media",
    videos: [{ url: "fotos/11-06/video1.mp4", miniatura: "fotos/11-06/foto1.jpg", texto: "❤️" }],
    mensajes: ["En verdad me boté, pero ni cerca con esto que estás viendo"],
  },

  "11-16": {
    tipo: "galeria",
    importancia: "media",
    fotos: [
      { url: "fotos/11-16/foto1.jpg", texto: "❤️" },
      { url: "fotos/11-16/foto2.jpg", texto: "❤️" },
    ],
    mensajes: ["Nacional, pero esta vez no para un mesiversario jajaja"],
  },

  "11-22": {
    tipo: "galeria",
    importancia: "media",
    fotos: [
      { url: "fotos/11-22/foto1.jpg", texto: "❤️" },
      { url: "fotos/11-22/foto2.jpg", texto: "❤️" },
      { url: "fotos/11-22/foto3.jpg", texto: "❤️" },
    ],
    mensajes: ["La vi llegar al Don Cangrejo", "con ese vestido azul", "que hasta el mar le dio envidia"],
  },

  "11-23": {
    tipo: "galeria",
    importancia: "media",
    fotos: [
      { url: "fotos/11-23/foto1.jpg", texto: "❤️" },
      { url: "fotos/11-23/foto2.jpg", texto: "❤️" },
      { url: "fotos/11-23/foto3.jpg", texto: "❤️" },
      { url: "fotos/11-23/foto4.jpg", texto: "❤️" },
      { url: "fotos/11-23/foto5.jpg", texto: "❤️" },
      { url: "fotos/11-23/foto6.jpg", texto: "❤️" },
    ],
    mensajes: ["Mamá, Papá y Yedli"],
  },

  "11-30": {
    tipo: "galeria",
    importancia: "media",
    fotos: [
      { url: "fotos/11-30/foto1.jpg", texto: "❤️" },
      { url: "fotos/11-30/foto2.jpg", texto: "❤️" },
    ],
    mensajes: ["Noche de Stranger Things","Papas, Hamburguezas y batidos de 5ta y A","Y la mejor compañía, tú"],
  },

  "12-02": {
    tipo: "galeria",
    fotos: [
      { url: "fotos/12-02/foto1.jpg", texto: "❤️" },
      { url: "fotos/12-02/foto2.jpg", texto: "❤️" },
      { url: "fotos/12-02/foto3.jpg", texto: "❤️" },
    ],
    mensajes: ["Ni mi mamá me deja la cómoda asi, verdad que mi novia es la mejor"],
  },

  "12-04": {
    tipo: "galeria",
    fotos: [
      { url: "fotos/12-04/foto1.jpg", texto: "❤️" },
      { url: "fotos/12-04/foto2.jpg", texto: "❤️" },
      { url: "fotos/12-04/foto3.jpg", texto: "❤️" },
    ],
    mensajes: ["Virando de tu casa"],
  },

  "12-06": {
    tipo: "galeria",
    importancia: "media",
    fotos: [
      { url: "fotos/12-06/foto1.jpg", texto: "❤️" },
      { url: "fotos/12-06/foto2.jpg", texto: "❤️" },
      { url: "fotos/12-06/foto3.jpg", texto: "❤️" },
      { url: "fotos/12-06/foto4.jpg", texto: "❤️" },
    ],
    mensajes: ["Festival de cine"],
  },

  "12-10": {
    tipo: "galeria",
    fotos: [{ url: "fotos/12-10/foto1.jpg", texto: "❤️" }],
    mensajes: ["Tus favoritos"],
  },

  "12-11": {
    tipo: "galeria",
    fotos: [{ url: "fotos/12-11/foto1.jpg", texto: "❤️" }],
    mensajes: ["Carla novia de Adrián, forever always"],
  },

  "12-15": {
    tipo: "galeria",
    importancia: "media",
    fotos: [
      { url: "fotos/12-15/foto1.jpg", texto: "❤️" },
      { url: "fotos/12-15/foto2.jpg", texto: "❤️" },
      { url: "fotos/12-15/foto3.jpg", texto: "❤️" },
      { url: "fotos/12-15/foto4.jpg", texto: "❤️" },
      { url: "fotos/12-15/foto5.jpg", texto: "❤️" },
      { url: "fotos/12-15/foto6.jpg", texto: "❤️" },
    ],
    mensajes: ["Al Forno"],
  },

  "12-19": {
    tipo: "galeria",
    importancia: "media",
    fotos: [
      { url: "fotos/12-19/foto1.jpg", texto: "❤️" },
      { url: "fotos/12-19/foto2.jpg", texto: "❤️" },
      { url: "fotos/12-19/foto3.jpg", texto: "❤️" },
      { url: "fotos/12-19/foto4.jpg", texto: "❤️" },
      { url: "fotos/12-19/foto5.jpg", texto: "❤️" },
      { url: "fotos/12-19/foto6.jpg", texto: "❤️" },
      { url: "fotos/12-19/foto7.jpg", texto: "❤️" },
      { url: "fotos/12-19/foto8.jpg", texto: "❤️" },
    ],
    mensajes: ["Mixtura"],
  },

  "12-20": {
    tipo: "galeria",
    importancia: "media",
    fotos: [
      { url: "fotos/12-20/foto1.jpg", texto: "❤️" },
      { url: "fotos/12-20/foto2.jpg", texto: "❤️" },
      { url: "fotos/12-20/foto3.jpg", texto: "❤️" },
      { url: "fotos/12-20/foto4.jpg", texto: "❤️" },
    ],
    mensajes: ["Buenos recuerdos tengo de ese día en el balcón"],
  },

  "12-21": {
    tipo: "galeria",
    importancia: "media",
    fotos: [
      { url: "fotos/12-21/foto1.jpg", texto: "❤️" },
      { url: "fotos/12-21/foto2.jpg", texto: "❤️" },
      { url: "fotos/12-21/foto3.jpg", texto: "❤️" },
      { url: "fotos/12-21/foto4.jpg", texto: "❤️" },
      { url: "fotos/12-21/foto5.jpg", texto: "❤️" },
      { url: "fotos/12-21/foto6.jpg", texto: "❤️" },
    ],
    mensajes: ["Fusión Frappe","Los mejores atardeceres son el malecón contigo"],
  },

  "12-25": {
    tipo: "galeria",
    importancia: "media",
    videos: [{ url: "fotos/12-25/video1.mp4", miniatura: "fotos/12-25/foto1.jpg", texto: "❤️" }],
    mensajes: ["Que tierna eres"],
  },

  "12-28": {
    tipo: "galeria",
    importancia: "media",
    fotos: [
      { url: "fotos/12-28/foto1.jpg", texto: "❤️" },
      { url: "fotos/12-28/foto2.jpg", texto: "❤️" },
      { url: "fotos/12-28/foto3.jpg", texto: "❤️" },
      { url: "fotos/12-28/foto4.jpg", texto: "❤️" },
      { url: "fotos/12-28/foto5.jpg", texto: "❤️" },
      { url: "fotos/12-28/foto6.jpg", texto: "❤️" },
      { url: "fotos/12-28/foto7.jpg", texto: "❤️" },
    ],
    videos: [{ url: "fotos/12-28/video1.mp4", miniatura: "fotos/12-28/foto1.jpg", texto: "❤️" }],
    mensajes: ["Mixtura x2", "LLegamos fajados y nos arreglamos allá", "Como podrás ver en el calendario antes de este día llevábamos 6 días sin vernos", "Este día descubrí que pasados 3 días te vueleves loca literal", "Y quieres fajarte por cualquier cosa", "Pero quitando eso fue un buen día que terminño en sexo x suerte"],
  },

  "12-30": {
    tipo: "galeria",
    importancia: "media",
    fotos: [
      { url: "fotos/12-30/foto1.jpg", texto: "❤️" },
      { url: "fotos/12-30/foto2.jpg", texto: "❤️" },
      { url: "fotos/12-30/foto3.jpg", texto: "❤️" },
      { url: "fotos/12-30/foto4.jpg", texto: "❤️" },
      { url: "fotos/12-30/foto5.jpg", texto: "❤️" },
      { url: "fotos/12-30/foto6.jpg", texto: "❤️" },
      { url: "fotos/12-30/foto7.jpg", texto: "❤️" },
      { url: "fotos/12-30/foto8.jpg", texto: "❤️" },
    ],
    mensajes: ["Perú"],
  },

  "12-31": {
    tipo: "galeria",
    importancia: "alta",
    fotos: [
      { url: "fotos/12-31/foto1.jpg", texto: "❤️" },
      { url: "fotos/12-31/foto2.jpg", texto: "❤️" },
      { url: "fotos/12-31/foto3.jpg", texto: "❤️" },
      { url: "fotos/12-31/foto4.jpg", texto: "❤️" },
      { url: "fotos/12-31/foto5.jpg", texto: "❤️" },
      { url: "fotos/12-31/foto6.jpg", texto: "❤️" },
      { url: "fotos/12-31/foto7.jpg", texto: "❤️" },
      { url: "fotos/12-31/foto8.jpg", texto: "❤️" },
      { url: "fotos/12-31/foto9.jpg", texto: "❤️" },
    ],
    videos: [{ url: "fotos/12-31/video1.mp4", miniatura: "fotos/12-31/foto1.jpg", texto: "❤️" }],
    mensajes: ["1er fin de año juntos", "El día con tu familia y la noche con la mía", "Este día fue perfecto y creo que también marcó un antes y un después"],
  },

  // Día del aniversario (5 abril 2026)
  "2026-04-05": {
    tipo: "galeria",
    importancia: "alta",
    fotos: [
      { url: "fotos/aniversario/foto1.jpg", texto: "¡365 días de amor! 🎉", descripcion: "Un año entero contigo" },
      { url: "fotos/aniversario/foto2.jpg", texto: "Celebrando cada momento", descripcion: "Las risas que compartimos" },
      { url: "fotos/aniversario/foto3.jpg", texto: "Más unidos que nunca", descripcion: "Nuestro amor crece cada día" },
      { url: "fotos/aniversario/foto4.jpg", texto: "Por muchos años más", descripcion: "El futuro nos espera" },
      { url: "fotos/aniversario/foto5.jpg", texto: "¡365 días de amor! 🎉", descripcion: "Un año entero contigo" },
      { url: "fotos/aniversario/foto6.jpg", texto: "Celebrando cada momento", descripcion: "Las risas que compartimos" },
      { url: "fotos/aniversario/foto7.jpg", texto: "Más unidos que nunca", descripcion: "Nuestro amor crece cada día" },
      { url: "fotos/aniversario/foto8.jpg", texto: "Por muchos años más", descripcion: "El futuro nos espera" },
      { url: "fotos/aniversario/foto9.jpg", texto: "¡365 días de amor! 🎉", descripcion: "Un año entero contigo" },
      { url: "fotos/aniversario/foto10.jpg", texto: "Celebrando cada momento", descripcion: "Las risas que compartimos" },
      { url: "fotos/aniversario/foto11.jpg", texto: "Más unidos que nunca", descripcion: "Nuestro amor crece cada día" },
      { url: "fotos/aniversario/foto12.jpg", texto: "Por muchos años más", descripcion: "El futuro nos espera" },
      { url: "fotos/aniversario/foto13.jpg", texto: "¡365 días de amor! 🎉", descripcion: "Un año entero contigo" },
      { url: "fotos/aniversario/foto14.jpg", texto: "Celebrando cada momento", descripcion: "Las risas que compartimos" },
      { url: "fotos/aniversario/foto15.jpg", texto: "Más unidos que nunca", descripcion: "Nuestro amor crece cada día" },
      { url: "fotos/aniversario/foto16.jpg", texto: "Por muchos años más", descripcion: "El futuro nos espera" },
      { url: "fotos/aniversario/foto17.jpg", texto: "¡365 días de amor! 🎉", descripcion: "Un año entero contigo" },
      { url: "fotos/aniversario/foto18.jpg", texto: "Celebrando cada momento", descripcion: "Las risas que compartimos" },
      { url: "fotos/aniversario/foto19.jpg", texto: "Más unidos que nunca", descripcion: "Nuestro amor crece cada día" },
      { url: "fotos/aniversario/foto20.jpg", texto: "Por muchos años más", descripcion: "El futuro nos espera" },
      { url: "fotos/aniversario/foto21.jpg", texto: "¡365 días de amor! 🎉", descripcion: "Un año entero contigo" },
      { url: "fotos/aniversario/foto22.jpg", texto: "Celebrando cada momento", descripcion: "Las risas que compartimos" },
      { url: "fotos/aniversario/foto23.jpg", texto: "Más unidos que nunca", descripcion: "Nuestro amor crece cada día" },
      { url: "fotos/aniversario/foto24.jpg", texto: "Por muchos años más", descripcion: "El futuro nos espera" },
      { url: "fotos/aniversario/foto25.jpg", texto: "¡365 días de amor! 🎉", descripcion: "Un año entero contigo" },
      { url: "fotos/aniversario/foto26.jpg", texto: "Celebrando cada momento", descripcion: "Las risas que compartimos" },
      { url: "fotos/aniversario/foto27.jpg", texto: "Más unidos que nunca", descripcion: "Nuestro amor crece cada día" },
      { url: "fotos/aniversario/foto28.jpg", texto: "Por muchos años más", descripcion: "El futuro nos espera" },
      { url: "fotos/aniversario/foto29.jpg", texto: "Por muchos años más", descripcion: "El futuro nos espera" },
    ],
    videos: [
      { url: "fotos/aniversario/video1.mp4", miniatura: "fotos/aniversario/foto1.jpg", texto: "❤️" },
      { url: "fotos/aniversario/video2.mp4", miniatura: "fotos/aniversario/foto2.jpg", texto: "❤️" },
      { url: "fotos/aniversario/video3.mp4", miniatura: "fotos/aniversario/foto3.jpg", texto: "❤️" },
      { url: "fotos/aniversario/video4.mp4", miniatura: "fotos/aniversario/foto4.jpg", texto: "❤️" },
      { url: "fotos/aniversario/video5.mp4", miniatura: "fotos/aniversario/foto5.jpg", texto: "❤️" },
      { url: "fotos/aniversario/video6.mp4", miniatura: "fotos/aniversario/foto6.jpg", texto: "❤️" },
    ],
    mensajes: [
      "¡FELIZ PRIMER ANIVERSARIO! 365 días a tu lado",
      "Te amo más cada día. 💘",
      "El mejor año de mi vida",
      "Vivimos tantas cosas este año, muchas buenas y otras malas, pero me quedo con todo porque fue perfecto",
      "Como de costumbre fuimos al Nacional y a comer Dumplings",
      "Espero que este solo sea el primero de muchos, porque me quedan muchas cosas que quiero vivir contigo todavía",
      "TE AMO CARLA SARIEGO RODRÍGUEZ",
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
    palabra: "Jamoncito",
    significado: "Amor amor adivina cuántas veces digo jamoncito y cuántas veces digo amorcito",
  },

  {
    palabra: "Jamorcito",
    significado: "Tú y tus ocurrencias",
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
    palabra: "Última hora de telegram",
    significado:
      "No la he quitado porque si lo hago ya terminas de volverte loca",
  },
    {
    palabra: "La vieja negra",
    significado:
      "la vieja de his and her asesina serie que nos dejó impresionados",
  },
   {
    palabra: "Frecho",
    significado:
      "La mezcla perfecta para comer algo dulce cuando no hay más nada",
  },
    {
    palabra: "Ese vestido azul",
    significado:
      "Canción escrita por un famoso músico cubano que narra una bonita historia de amor",
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


