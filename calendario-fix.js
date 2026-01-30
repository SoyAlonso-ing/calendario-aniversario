// ============================================
// ARCHIVO: calendario-fix-ajustado.js
// CALENDARIO DE 5 ABRIL 2025 A 5 ABRIL 2026
// ============================================

console.log("📅 Cargando calendario ajustado (5/4/2025 - 5/4/2026)...");

// Fechas de inicio y fin
const FECHA_INICIO = new Date('2025-04-05');
const FECHA_FIN = new Date('2026-04-06');

// Variables para controlar el scroll
let scrollPosition = 0;
let isPopupOpen = false;

// Función para calcular el día exacto desde el inicio (CORREGIDA PARA ZONA HORARIA)
function calcularDiaExacto(fecha) {
    // Crear fechas en hora local (sin problemas de zona horaria)
    const inicioLocal = new Date(2025, 3, 5); // 5 abril 2025 (mes 3 porque enero es 0)
    const fechaLocal = new Date(fecha.getFullYear(), fecha.getMonth(), fecha.getDate());
    
    // Calcular diferencia en milisegundos
    const diffMs = fechaLocal - inicioLocal;
    
    // Convertir a días (redondeando hacia abajo)
    const diffDias = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    
    // Sumar 1 porque el día 1 es 5/4/2025
    return diffDias + 1;
}

// Meses en español
const MESES = ["ENERO", "FEBRERO", "MARZO", "ABRIL", "MAYO", "JUNIO", 
               "JULIO", "AGOSTO", "SEPTIEMBRE", "OCTUBRE", "NOVIEMBRE", "DICIEMBRE"];

// Días por mes (considerando año bisiesto 2024 pero no 2025/2026)
const DIAS_POR_MES = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// Variables
let momentosDesbloqueados = 0;
let diaDesdeFavoritos = false; // <-- AÑADIR ESTA LÍNEA

// Esperar a que todo cargue
window.addEventListener('DOMContentLoaded', function() {
    console.log("✅ DOM cargado, iniciando calendario ajustado...");
    
    // Ocultar el mensaje de carga
    const cargando = document.getElementById('cargando-calendario');
    if (cargando) {
        cargando.style.display = 'none';
    }
    
    // Generar calendario ajustado
    generarCalendarioAjustado();
    
    // Configurar buscador ajustado
    configurarBuscadorAjustado();
    
    // Configurar botones básicos (sin música)
    configurarBotonesBasicosAjustados();
    
    // Actualizar estadísticas
    actualizarEstadisticasAjustadas();

     // ACTUALIZAR MARCADORES DE FAVORITOS (NUEVO)
    setTimeout(() => {
        actualizarMarcadoresFavoritos();
    }, 500);
});

// ==================== CALENDARIO AJUSTADO ====================
function generarCalendarioAjustado() {
    console.log("📅 Generando calendario del primer año juntos...");
    
    const calendar = document.getElementById('calendar');
    if (!calendar) {
        console.error("❌ No se encontró el calendario");
        return;
    }
    
    // Limpiar contenido
    calendar.innerHTML = '';
    
    // Calcular total de días (INCLUYENDO el 5 de abril 2026)
    const totalDias = Math.floor((FECHA_FIN - FECHA_INICIO) / (1000 * 60 * 60 * 24));
    console.log(`📆 Total de días: ${totalDias} días (5/4/2025 - 5/4/2026)`);
    
    // Generar calendario mes por mes
    let fechaActual = new Date(FECHA_INICIO);
    let contadorDiasTotales = 0;
    let tieneAniversario = false;
    
    while (fechaActual < FECHA_FIN) { // < en lugar de <=
        const mes = fechaActual.getMonth();
        const año = fechaActual.getFullYear();
        const diasEnMes = new Date(año, mes + 1, 0).getDate();
        
        // Título del mes con año
        const tituloMes = document.createElement('div');
        tituloMes.className = 'mes-titulo';
        tituloMes.textContent = `${MESES[mes]} ${año}`;
        calendar.appendChild(tituloMes);
        
        // Días del mes
        for (let dia = 1; dia <= diasEnMes; dia++) {
            const fechaDia = new Date(año, mes, dia);
            
            // Solo mostrar días dentro del rango (5 abril 2025 - 5 abril 2026 INCLUSIVE)
            if (fechaDia < FECHA_INICIO) continue;
            if (fechaDia >= FECHA_FIN) break; // >= para incluir hasta el 5 de abril 2026
            
            contadorDiasTotales++;
            
            const elementoDia = document.createElement('div');
            elementoDia.className = 'dia';
            elementoDia.innerHTML = `<span class="numero-dia">${dia}</span>`;
            
            // Formato para buscar en datos especiales
            const mesStr = (mes + 1).toString().padStart(2, '0');
            const diaStr = dia.toString().padStart(2, '0');
            const fechaKey = `${mesStr}-${diaStr}`;
            
            // También crear clave con año para fechas específicas
            const fechaKeyConAnio = `${año}-${mesStr}-${diaStr}`;
            
            // Verificar si es día especial
            if (window.datosConfig && window.datosConfig.diasEspeciales) {
                // Primero buscar con año completo (fecha específica)
                if (window.datosConfig.diasEspeciales[fechaKeyConAnio]) {
                    elementoDia.classList.add('tiene-contenido');
                    elementoDia.title = window.datosConfig.diasEspeciales[fechaKeyConAnio].texto || 'Día especial';
                    momentosDesbloqueados++;
                } 
                // Luego buscar sin año (fecha anual)
                else if (window.datosConfig.diasEspeciales[fechaKey]) {
                    elementoDia.classList.add('tiene-contenido');
                    elementoDia.title = window.datosConfig.diasEspeciales[fechaKey].texto || 'Día especial';
                    momentosDesbloqueados++;
                }
            }
            
            // Marcar días importantes
            
            // Día de inicio (5 abril 2025)
            if (dia === 5 && mes === 3 && año === 2025) {
                elementoDia.classList.add('dia-especial');
                elementoDia.style.background = 'linear-gradient(45deg, #FF9800, #FF5722)';
                elementoDia.innerHTML = `<span class="numero-dia">${dia}</span><span class="estrella">🎉</span>`;
                elementoDia.title = "¡Comenzamos nuestra aventura!";
                
                // Sobrescribir evento click para asegurar día 1
                elementoDia.addEventListener('click', function(e) {
                    e.stopPropagation();
                    const fechaCompleta = new Date(2025, 3, 5); // 5 abril 2025
                    console.log("🎉 Día de inicio - Día 1");
                    mostrarContenidoAjustado(1, fechaCompleta);
                }, true);
            }
            
            // Día de aniversario (5 abril 2026) - ¡ESTO ES LO QUE FALTABA!
            if (dia === 5 && mes === 3 && año === 2026) {
                elementoDia.classList.add('dia-especial');
                elementoDia.style.background = 'linear-gradient(45deg, #9C27B0, #673AB7)';
                elementoDia.style.color = 'white';
                elementoDia.innerHTML = `<span class="numero-dia">${dia}</span><span class="estrella">🌟</span>`;
                elementoDia.title = "¡FELIZ PRIMER ANIVERSARIO!";
                tieneAniversario = true;
                
                // Añadir tooltip especial
                elementoDia.setAttribute('data-tooltip', '🎉 ¡PRIMER AÑO JUNTOS! 🎉');
                
                // Sobrescribir evento click para aniversario (debería ser día 366)
                elementoDia.addEventListener('click', function(e) {
                    e.stopPropagation();
                    const fechaCompleta = new Date(2026, 3, 5); // 5 abril 2026
                    
                    // Calcular correctamente: 5/4/2026 - 5/4/2025 = 365 días
                    // Pero como es 1 año completo (año bisiesto?), debería ser 366 días
                    const inicioPuro = new Date(2025, 3, 5);
                    const aniversarioPuro = new Date(2026, 3, 5);
                    const diffMs = aniversarioPuro - inicioPuro;
                    const diffDias = Math.floor(diffMs / (1000 * 60 * 60 * 24));
                    const numeroDia = diffDias + 1; // +1 porque el primer día es 1
                    
                    console.log(`🎊 Aniversario - Día ${numeroDia}`);
                    mostrarContenidoAjustado(numeroDia, fechaCompleta);
                }, true);
            }
            
            // Marcar día actual si está dentro del rango
            const hoy = new Date();
            if (hoy.getDate() === dia && 
                hoy.getMonth() === mes && 
                hoy.getFullYear() === año) {
                elementoDia.classList.add('dia-hoy');
                elementoDia.innerHTML += `<span class="estrella">⭐</span>`;
                elementoDia.title = "Hoy";
            }
            
            // Evento click para mostrar contenido
            elementoDia.addEventListener('click', function() {
                const fechaCompleta = new Date(año, mes, dia);
                const numeroDia = calcularDiaExacto(fechaCompleta);
                console.log(`📅 Click: ${dia}/${mes+1}/${año} = Día ${numeroDia}`);
                mostrarContenidoAjustado(numeroDia, fechaCompleta);
            });
            
            calendar.appendChild(elementoDia);
        }
        
        // Avanzar al próximo mes
        fechaActual.setMonth(fechaActual.getMonth() + 1);
        fechaActual.setDate(1);
    }
    
    // Verificar que se incluyó el aniversario
    if (!tieneAniversario) {
        console.warn("⚠️ El día del aniversario (5/4/2026) no se incluyó en el calendario");
        // Forzar añadir el día del aniversario
        agregarDiaAniversarioManualmente();
    }
    
    console.log(`✅ Calendario generado: ${contadorDiasTotales} días (incluye 5/4/2026)`);
}

// ==================== FUNCIÓN DE RESPUESTO PARA AÑADIR ANIVERSARIO ====================
function agregarDiaAniversarioManualmente() {
    const calendar = document.getElementById('calendar');
    if (!calendar) return;
    
    // Buscar si ya existe abril 2026
    const titulos = calendar.querySelectorAll('.mes-titulo');
    let encontradoAbril2026 = false;
    
    titulos.forEach(titulo => {
        if (titulo.textContent.includes('ABRIL 2026')) {
            encontradoAbril2026 = true;
            
            // Añadir el día 5 después de este título
            const elementoDia = document.createElement('div');
            elementoDia.className = 'dia dia-especial';
            elementoDia.style.background = 'linear-gradient(45deg, #9C27B0, #673AB7)';
            elementoDia.style.color = 'white';
            elementoDia.innerHTML = `<span class="numero-dia">5</span><span class="estrella">🌟</span>`;
            elementoDia.title = "¡FELIZ PRIMER ANIVERSARIO!";
            elementoDia.setAttribute('data-tooltip', '🎉 ¡PRIMER AÑO JUNTOS! 🎉');
            
            elementoDia.addEventListener('click', function() {
                const fechaAniversario = new Date('2026-04-05');
                const diffDias = Math.floor((fechaAniversario - FECHA_INICIO) / (1000 * 60 * 60 * 24)) + 1;
                mostrarContenidoAjustado(diffDias, fechaAniversario);
            });
            
            // Insertar después del título
            titulo.parentNode.insertBefore(elementoDia, titulo.nextSibling);
            console.log("✅ Día del aniversario añadido manualmente");
        }
    });
    
    if (!encontradoAbril2026) {
        console.error("❌ No se encontró abril 2026 para añadir el aniversario");
    }
}

function mostrarContenidoAjustado(numeroDia, fecha) {
    // Verificar que el número de día sea válido
    if (numeroDia < 1 || numeroDia > 366) {
        const diffTiempo = fecha - FECHA_INICIO;
        numeroDia = Math.floor(diffTiempo / (1000 * 60 * 60 * 24)) + 1;
    }
    
    console.log(`📱 Mostrando: Día ${numeroDia} - ${fecha.toLocaleDateString()}`);
    
    const mes = fecha.getMonth();
    const dia = fecha.getDate();
    const año = fecha.getFullYear();
    
    // Crear dos formatos de clave
    const fechaKey = `${(mes + 1).toString().padStart(2, '0')}-${dia.toString().padStart(2, '0')}`;
    const fechaKeyConAnio = `${año}-${(mes + 1).toString().padStart(2, '0')}-${dia.toString().padStart(2, '0')}`;
    
    let contenidoHTML = '';
    let tieneFotos = false;
    let fotosArray = [];
    let mensajesArray = [];
    
    // ==================== 1. PRIMERO VERIFICAR SI ES EL ANIVERSARIO (2026-04-05) ====================
    if (dia === 5 && mes === 3 && año === 2026) {
        // Buscar contenido específico para el aniversario
        let datoAniversario = null;
        if (window.datosConfig && window.datosConfig.diasEspeciales) {
            datoAniversario = window.datosConfig.diasEspeciales[fechaKeyConAnio] || 
                             window.datosConfig.diasEspeciales[fechaKey];
        }
        
        // Configurar para galería
        if (datoAniversario && datoAniversario.tipo === "galeria") {
            tieneFotos = true;
            fotosArray = datoAniversario.fotos || [];
            mensajesArray = datoAniversario.mensajes || [];
        } else if (datoAniversario && datoAniversario.tipo === "foto") {
            // Compatibilidad con datos antiguos
            tieneFotos = true;
            fotosArray = [{
                url: datoAniversario.contenido,
                texto: datoAniversario.texto || 'Foto especial',
                descripcion: datoAniversario.texto || ''
            }];
        }
        
        // HTML especial para aniversario
        if (tieneFotos && fotosArray.length > 0) {
            contenidoHTML = crearHTMLGaleria(numeroDia, fecha, fotosArray, mensajesArray, true);
        } else {
            contenidoHTML = `
                <h2 style="color: #9C27B0; margin-bottom: 15px; font-family: 'Poppins', sans-serif; font-size: 1.6rem; text-align: center; font-weight: 700;">
                    ¡FELIZ PRIMER ANIVERSARIO! 🎉
                </h2>
                <div style="background: linear-gradient(135deg, #f3e5f5, #e1bee7); padding: 15px; border-radius: 15px; margin: 15px 0; text-align: center;">
                    <h3 style="color: #7B1FA2; margin-bottom: 10px; font-size: 1.3rem;">Día ${numeroDia} - 5 de Abril 2026</h3>
                    
                    <div style="background: white; padding: 15px; border-radius: 12px; margin-bottom: 15px; box-shadow: 0 3px 10px rgba(0,0,0,0.1);">
                        <p style="font-size: 1.1rem; color: #4A148C; margin-bottom: 10px; line-height: 1.5;">
                            <i class="fas fa-heart" style="color: #9C27B0; margin-right: 8px;"></i>
                            365 días juntos, 525,600 minutos de felicidad, un amor infinito.
                        </p>
                    </div>
                    
                    <div style="font-size: 1.1rem; padding: 15px; background: white; border-radius: 12px; margin-top: 15px; border-left: 4px solid #9C27B0; text-align: left; line-height: 1.5;">
                        <i class="fas fa-heart" style="color: #9C27B0; margin-right: 8px; font-size: 1.2rem; vertical-align: middle;"></i>
                        ${datoAniversario?.texto || '"El día que cumplimos nuestro primer año juntos. Cada risa, cada abrazo, cada momento contigo ha sido el mejor regalo. Te amo más que ayer y menos que mañana."'}
                    </div>
                </div>
            `;
        }
        
        lanzarConfetiEspecial();
    } 
    // ==================== 2. VERIFICAR SI ES DÍA DE INICIO (2025-04-05) ====================
    else if (dia === 5 && mes === 3 && año === 2025) {
        let datoInicio = null;
        if (window.datosConfig && window.datosConfig.diasEspeciales) {
            datoInicio = window.datosConfig.diasEspeciales[fechaKeyConAnio] || 
                        window.datosConfig.diasEspeciales[fechaKey];
        }
        
        // Configurar para galería
        if (datoInicio && datoInicio.tipo === "galeria") {
            tieneFotos = true;
            fotosArray = datoInicio.fotos || [];
            mensajesArray = datoInicio.mensajes || [];
        } else if (datoInicio && datoInicio.tipo === "foto") {
            // Compatibilidad con datos antiguos
            tieneFotos = true;
            fotosArray = [{
                url: datoInicio.contenido,
                texto: datoInicio.texto || 'Foto especial',
                descripcion: datoInicio.texto || ''
            }];
        }
        
        // HTML para día de inicio con galería
        if (tieneFotos && fotosArray.length > 0) {
            contenidoHTML = crearHTMLGaleria(numeroDia, fecha, fotosArray, mensajesArray, false);
        } else {
            const titulo = `Día ${numeroDia} - ${dia} de ${MESES[mes]} ${año}`;
            contenidoHTML = `
                <h2 style="color: #FF9800; margin-bottom: 15px; font-family: 'Poppins', sans-serif; font-size: 1.6rem; text-align: center; font-weight: 700;">
                    ¡COMIENZA NUESTRA AVENTURA! 🚀
                </h2>
                <div style="background: linear-gradient(135deg, #ffffff, #f3e5f5); padding: 15px; border-radius: 15px; margin: 15px 0; text-align: center; border: 2px solid #FF9800;">
                    <h3 style="color: #F57C00; margin-bottom: 10px; font-size: 1.3rem;">Día ${numeroDia} - 5 de Abril 2025</h3>
                    
                    <div style="font-size: 1.1rem; padding: 15px; background: white; border-radius: 12px; margin-top: 15px; border-left: 4px solid #FF9800; text-align: left; line-height: 1.5;">
                        <i class="fas fa-heart" style="color: #9C27B0; margin-right: 8px; font-size: 1.2rem; vertical-align: middle;"></i>
                        ${datoInicio?.texto || '"El primer día de nuestra historia juntos. Todo comenzó aquí, con una sonrisa y la promesa de muchos días felices por venir."'}
                    </div>
                </div>
            `;
        }
        
        lanzarEfectosEspeciales();
    }
    // ==================== 3. LUEGO VERIFICAR OTROS DÍAS ESPECIALES ====================
    else if (window.datosConfig && window.datosConfig.diasEspeciales) {
        // Buscar primero con año, luego sin año
        const dato = window.datosConfig.diasEspeciales[fechaKeyConAnio] || 
                    window.datosConfig.diasEspeciales[fechaKey];
        
        if (dato) {
            // Configurar para galería
            if (dato.tipo === "galeria") {
                tieneFotos = true;
                fotosArray = dato.fotos || [];
                mensajesArray = dato.mensajes || [];
            } else if (dato.tipo === "foto") {
                // Compatibilidad con datos antiguos
                tieneFotos = true;
                fotosArray = [{
                    url: dato.contenido,
                    texto: dato.texto || 'Foto especial',
                    descripcion: dato.texto || ''
                }];
            } else {
                // Solo texto
                const textoContenido = dato.contenido || dato.texto || 'Un mensaje especial para ti';
                const titulo = `Día ${numeroDia} - ${dia} de ${MESES[mes]} ${año}`;
                
                contenidoHTML = `
                    <h2 style="color: #9C27B0; margin-bottom: 15px; font-family: 'Poppins', sans-serif; font-size: 1.6rem; text-align: center; font-weight: 700;">
                        ${titulo}
                    </h2>
                    <div style="font-size: 1.2rem; padding: 20px; background: linear-gradient(135deg, #f3e5f5, #e8eaf6); border-radius: 12px; margin: 15px 0; text-align: center; font-style: italic; line-height: 1.5;">
                        "${textoContenido}"
                        ${dato.texto && dato.texto !== textoContenido ? `<p style="margin-top: 15px; font-size: 1rem; color: #666; font-style: normal;">${dato.texto}</p>` : ''}
                    </div>
                `;
                
                lanzarEfectosEspeciales();
            }
            
            // Si tiene fotos, crear galería
            if (tieneFotos && fotosArray.length > 0) {
                contenidoHTML = crearHTMLGaleria(numeroDia, fecha, fotosArray, mensajesArray, false);
                lanzarEfectosEspeciales();
            }
        }
    }
    
    // ==================== 4. SI NO ES ESPECIAL, MOSTRAR FRASE GENÉRICA ====================
    if (!contenidoHTML) {
        const titulo = `Día ${numeroDia} - ${dia} de ${MESES[mes]} ${año}`;
        const frases = window.datosConfig?.frasesGenericas || [
            "Un día más a tu lado es un regalo",
            "Hoy es perfecto porque estás en mi vida",
            "Cada momento contigo es especial",
            "Te amo más que ayer, menos que mañana"
        ];
        const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];
        
        contenidoHTML = `
            <h2 style="color: #9C27B0; margin-bottom: 15px; font-family: 'Poppins', sans-serif; font-size: 1.6rem; text-align: center; font-weight: 700;">
                ${titulo}
            </h2>
            <div style="font-size: 1.2rem; padding: 20px; background: linear-gradient(135deg, #e8f5e9, #f1f8e9); border-radius: 12px; margin: 15px 0; text-align: center; font-style: italic; line-height: 1.5;">
                "${fraseAleatoria}"
                <p style="margin-top: 15px; font-size: 0.9rem; color: #666; font-style: normal;">
                    <i class="fas fa-heart" style="color: #9C27B0;"></i>
                    Aunque no haya un recuerdo especial registrado, este día fue perfecto porque estuviste en él.
                </p>
            </div>
        `;
        
        // ¡IMPORTANTE! Agregar esto para que tenga contenido válido:
        tieneFotos = false;
        fotosArray = [];
    }

    // ==================== 5. MOSTRAR EL CONTENIDO ====================
    // Verificar que el contenidoHTML no esté vacío
    if (contenidoHTML && contenidoHTML.trim() !== '') {
        if (numeroDia) {
    sessionStorage.removeItem('volverAFavoritos');
}
         const botonFavorito = agregarBotonFavoritoPopup(numeroDia, fecha);
          contenidoHTML += botonFavorito;
        mostrarPopupContenido(contenidoHTML, tieneFotos, fotosArray, fecha, false);
    } else {
        console.error("❌ Error: contenidoHTML está vacío o indefinido");
        // Mostrar un mensaje de error o contenido por defecto
        const tituloError = `Día ${numeroDia} - ${dia} de ${MESES[mes]} ${año}`;
        const contenidoError = `
            <h2 style="color: #FF5722; margin-bottom: 15px; font-family: 'Poppins', sans-serif; font-size: 1.6rem; text-align: center; font-weight: 700;">
                ${tituloError}
            </h2>
            <div style="font-size: 1.2rem; padding: 20px; background: linear-gradient(135deg, #ffebee, #ffcdd2); border-radius: 12px; margin: 15px 0; text-align: center; line-height: 1.5;">
                <i class="fas fa-heart-broken" style="color: #FF5722; font-size: 2rem; margin-bottom: 15px;"></i>
                <p>¡Ups! Algo salió mal al cargar este día.</p>
                <p style="margin-top: 10px; font-size: 1rem; color: #666;">
                    Pero recuerda que cada día contigo es especial 💖
                </p>
            </div>
        `;
        mostrarPopupContenido(contenidoError, false, [], fecha);
    }
}


// ==================== FUNCIÓN PARA CERRAR POPUP DE FAVORITOS ====================
function cerrarPopupFavoritos() {
    sessionStorage.removeItem('volverAFavoritos'); // Limpiar flag
    cerrarPopup(); // Usar la función normal
}

// ==================== FUNCIÓN PARA CREAR HTML DE GALERÍA (CORREGIDA) ====================
function crearHTMLGaleria(numeroDia, fecha, fotosArray, mensajesArray, esAniversario = false) {
    const mes = fecha.getMonth();
    const dia = fecha.getDate();
    const año = fecha.getFullYear();
    
    const titulo = `Día ${numeroDia} - ${dia} de ${MESES[mes]} ${año}`;
    const totalFotos = fotosArray.length;
    
    // Título especial para aniversario
    const tituloEspecial = esAniversario ? 
        `<h2 style="color: #9C27B0; margin-bottom: 10px; font-family: 'Poppins', sans-serif; font-size: 1.6rem; text-align: center; font-weight: 700;">
            ¡FELIZ PRIMER ANIVERSARIO! 🎉
        </h2>
        <h3 style="color: #7B1FA2; margin-bottom: 15px; font-size: 1.3rem; text-align: center;">${titulo}</h3>` :
        `<h2 style="color: #9C27B0; margin-bottom: 15px; font-family: 'Poppins', sans-serif; font-size: 1.6rem; text-align: center; font-weight: 700;">
            ${titulo}
        </h2>`;
    
    return `${tituloEspecial}
    
<div class="contenedor-galeria">
    <!-- Carrusel Horizontal -->
    <div class="foto-principal-container-horizontal" data-fotos='${JSON.stringify(fotosArray)}' data-total="${totalFotos}">
        <!-- Contenedor de todas las fotos -->
        <div class="carousel-track" style="transform: translateX(0%);">
            ${fotosArray.map((foto, index) => `
                <div class="carousel-slide ${index === 0 ? 'active' : ''}" data-index="${index}">
                    <div class="slide-image-container">
                        <img src="${foto.url}" 
                             alt="${foto.texto}" 
                             class="slide-image"
                             onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"500\" height=\"375\" viewBox=\"0 0 500 375\"><rect width=\"500\" height=\"375\" fill=\"%239C27B0\"/><text x=\"250\" y=\"150\" font-family=\"Arial\" font-size=\"24\" text-anchor=\"middle\" fill=\"white\" dy=\".3em\">${foto.texto || 'Nuestra foto'}</text><text x=\"250\" y=\"200\" font-family=\"Arial\" font-size=\"14\" text-anchor=\"middle\" fill=\"white\" dy=\".3em\">Foto ${index + 1}/${totalFotos}</text></svg>'">
                    </div>
                    <div class="slide-text">
                        <h4>${foto.texto || 'Nuestra foto'}</h4>
                        ${foto.descripcion ? `<p>${foto.descripcion}</p>` : ''}
                    </div>
                </div>
            `).join('')}
        </div>
        
        <!-- Controles del carrusel -->
        <button class="btn-carrusel-horizontal btn-anterior-horizontal">
            <i class="fas fa-chevron-left"></i>
        </button>
        <button class="btn-carrusel-horizontal btn-siguiente-horizontal">
            <i class="fas fa-chevron-right"></i>
        </button>
        
        <!-- Contador de posición -->
        <div class="carousel-counter">
            <span class="current-slide">1</span>
            <span class="total-slides"> / ${totalFotos}</span>
        </div>
    </div>
    
    <!-- BOTÓN DE DESCARGA INDIVIDUAL (CORREGIDO) -->
    <button class="btn-descarga-individual" 
            style="
                margin-top: 20px;
                background: linear-gradient(135deg, #4CAF50, #2E7D32);
                color: white;
                border: none;
                padding: 12px 24px;
                border-radius: 25px;
                cursor: pointer;
                font-weight: bold;
                font-size: 0.9rem;
                transition: all 0.3s ease;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 10px;
                width: 100%;
                max-width: 300px;
                margin-left: auto;
                margin-right: auto;
                box-shadow: 0 4px 15px rgba(76, 175, 80, 0.3);
            ">
        <i class="fas fa-download"></i>
        Descargar esta foto (1/${totalFotos})
    </button>
    
    ${totalFotos > 1 ? `
        <!-- Opcional: Botón para descargar todas las fotos -->
        <button class="btn-descarga-multiple" 
                style="
                    margin-top: 10px;
                    background: linear-gradient(135deg, #9C27B0, #7B1FA2);
                    color: white;
                    border: none;
                    padding: 10px 20px;
                    border-radius: 20px;
                    cursor: pointer;
                    font-size: 0.85rem;
                    font-weight:bold;
                    transition: all 0.3s ease;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                    width: 100%;
                    max-width: 250px;
                    margin-left: auto;
                    margin-right: auto;
                    opacity: 0.8;
                ">
            <i class="fas fa-download"></i>
            Descargar todas las fotos (${totalFotos})
        </button>
    ` : ''}
    
    <!-- Mensajes del día -->
    ${mensajesArray && mensajesArray.length > 0 ? `
        <div class="mensajes-dia">
            ${mensajesArray.map(msg => `
                <div class="mensaje-item">
                    <i class="fas fa-heart"></i>
                    <p>${msg}</p>
                </div>
            `).join('')}
        </div>
    ` : ''}
</div>`;
}

// ==================== FUNCIONES AUXILIARES PARA CONFETI Y EFECTOS ====================
function lanzarConfetiEspecial() {
    console.log("🎉 Lanzando confeti especial de aniversario!");
    
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confeti = document.createElement('div');
            confeti.style.cssText = `
                position: fixed;
                width: 15px;
                height: 15px;
                background: ${['#9C27B0', '#673AB7', '#9C27B0', '#FF9800', '#4CAF50'][Math.floor(Math.random()*5)]};
                border-radius: ${Math.random() > 0.5 ? '50%' : '0'};
                pointer-events: none;
                z-index: 9998;
                top: -20px;
                left: ${Math.random() * 100}vw;
                animation: caerConfeti ${2 + Math.random() * 2}s linear forwards;
            `;
            
            document.body.appendChild(confeti);
            
            setTimeout(() => {
                if (confeti.parentNode) {
                    confeti.parentNode.removeChild(confeti);
                }
            }, 3000);
        }, i * 50);
    }
    
    const estiloConfeti = document.createElement('style');
    estiloConfeti.textContent = `
        @keyframes caerConfeti {
            0% {
                transform: translateY(0) rotate(0deg);
                opacity: 1;
            }
            100% {
                transform: translateY(100vh) rotate(${360 + Math.random() * 360}deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(estiloConfeti);
}

function lanzarEfectosEspeciales() {
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const confeti = document.createElement('div');
            confeti.style.cssText = `
                position: fixed;
                width: 10px;
                height: 10px;
                background: ${['#9C27B0', '#9C27B0', '#00bcd4', '#ffeb3b'][Math.floor(Math.random()*4)]};
                border-radius: 50%;
                pointer-events: none;
                z-index: 9998;
                top: -10px;
                left: ${Math.random() * 100}vw;
                animation: flotar 1.5s ease forwards;
            `;
            
            document.body.appendChild(confeti);
            
            setTimeout(() => {
                if (confeti.parentNode) {
                    confeti.parentNode.removeChild(confeti);
                }
            }, 1500);
        }, i * 100);
    }
}

// ==================== FUNCIÓN PARA GENERAR NOMBRE DE DESCARGA ====================
function generarNombreDescarga(fecha, texto) {
    const dia = fecha.getDate().toString().padStart(2, '0');
    const mes = (fecha.getMonth() + 1).toString().padStart(2, '0');
    const año = fecha.getFullYear();
    
    // Crear un nombre de archivo seguro
    let nombreBase = `nuestro-dia-${dia}-${mes}-${año}`;
    
    // Si hay texto, agregar palabras clave (máximo 3 palabras)
    if (texto && texto.length > 0) {
        const palabras = texto.split(' ').slice(0, 3);
        const palabrasSeguras = palabras.map(palabra => 
            palabra.replace(/[^a-zA-Z0-9áéíóúÁÉÍÓÚñÑ]/g, '').toLowerCase()
        ).filter(palabra => palabra.length > 0);
        
        if (palabrasSeguras.length > 0) {
            nombreBase += '-' + palabrasSeguras.join('-');
        }
    }
    
    return `${nombreBase}.jpg`;
}

// ==================== FUNCIÓN PARA DESCARGAR FOTOS ====================
function descargarFoto(urlFoto, nombreArchivo = 'foto-especial.jpg') {
    console.log(`📥 Intentando descargar: ${urlFoto} como ${nombreArchivo}`);
    
    // Mostrar mensaje de inicio
    mostrarNotificacion('Preparando descarga...', 'info');
    
    // Crear un enlace temporal
    const link = document.createElement('a');
    link.href = urlFoto;
    link.download = nombreArchivo;
    link.target = '_blank';
    
    // Configurar atributos para descarga
    link.setAttribute('download', nombreArchivo);
    
    // Para dispositivos móviles y diferentes navegadores
    if (typeof link.download === 'undefined') {
        // Fallback para navegadores antiguos: abrir en nueva pestaña
        link.target = '_blank';
        mostrarNotificacion('La foto se abrirá en una nueva pestaña. Mantén presionada para guardarla.', 'info');
    }
    
    // Simular clic en el enlace
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Mostrar mensaje de éxito después de un breve retraso
    setTimeout(() => {
        mostrarNotificacion('¡Foto descargada! 💖', 'success');
        console.log(`✅ Descarga iniciada: ${nombreArchivo}`);
    }, 500);
    
    // Si después de 3 segundos no pasó nada, mostrar instrucciones alternativas
    setTimeout(() => {
        // Verificar si estamos en un dispositivo móvil
        const esMovil = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        
        if (esMovil) {
            mostrarNotificacion('Si no se descargó, mantén presionada la imagen y selecciona "Guardar imagen"', 'info');
        }
    }, 3000);
}

// ==================== FUNCIÓN PARA MOSTRAR POPUP CON OPCIÓN DE DESCARGA ====================
// ==================== FUNCIÓN MODIFICADA PARA MOSTRAR POPUP ====================
function mostrarPopupContenido(contenidoHTML, tieneFoto = false, fotosArray = [], fecha = null, esFavoritos = false) {
    
    // Guardar posición del scroll ANTES de bloquear
    scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    isPopupOpen = true;
    
    // Guardar la posición como atributo para restaurarla
    document.body.setAttribute('data-scroll-pos', scrollPosition);
    
    // Bloquear scroll de manera más efectiva
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollPosition}px`;
    document.body.style.width = '100%';
    document.body.style.overflow = 'hidden';
    
    // Cerrar popup anterior si existe
    const popupAnterior = document.getElementById('popup-simple');
    if (popupAnterior) {
        popupAnterior.remove();
    }
    
    // Determinar si mostrar botón de cerrar
    let botonCerrarHTML = '';
    if (!esFavoritos) {
        botonCerrarHTML = `
            <button onclick="cerrarPopup()" style="
                margin-top: 20px;
                background: linear-gradient(45deg, #9C27B0, #7B1FA2);
                color: white;
                border: none;
                padding: 10px 25px;
                border-radius: 20px;
                cursor: pointer;
                font-weight: bold;
                font-size: 0.9rem;
                transition: all 0.2s;
            ">
                <i class="fas fa-heart" style="margin-right: 6px;"></i>
                Cerrar
            </button>
        `;
    }
    
    // Crear nuevo popup
    const popup = document.createElement('div');
    popup.id = 'popup-simple';
    popup.style.cssText = `
        position: fixed;
        top: 0; left: 0;
        width: 100%; height: 100%;
        background: rgba(0,0,0,0.85);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
        animation: fadeIn 0.3s ease;
        overflow: hidden;
        padding: 10px;
    `;
    
    popup.innerHTML = `
        <div style="
            background: white;
            padding: 20px;
            border-radius: 15px;
            max-width: 550px;
            width: 95%;
            max-height: 85vh;
            overflow-y: auto;
            text-align: center;
            position: relative;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
            animation: slideUp 0.4s ease;
        " id="contenedor-popup">
            ${contenidoHTML}
            ${botonCerrarHTML}
        </div>
        
        <style>
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            @keyframes slideUp {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
            }
            
            /* Estilos para la imagen con efecto hover y zoom */
            .imagen-popup {
                transition: transform 0.3s ease, box-shadow 0.3s ease;
                cursor: pointer;
            }
            
            .imagen-popup:hover {
                transform: scale(1.02);
                box-shadow: 0 10px 25px rgba(0,0,0,0.2);
            }
            
            .imagen-popup.zoom {
                transform: scale(1.4);
                z-index: 1001;
                position: relative;
                box-shadow: 0 15px 40px rgba(0,0,0,0.35);
            }
            
            /* Prevenir scroll del body cuando el popup está abierto */
            body.popup-abierto {
                overflow: hidden;
            }
        </style>
    `;
    
    // Agregar el popup al body y prevenir scroll
    document.body.classList.add('popup-abierto');
    document.body.appendChild(popup);
    
    // Marcar si es popup de favoritos
    if (esFavoritos) {
        popup.setAttribute('data-es-favoritos', 'true');
    }

    // DESPUÉS de agregar al DOM, buscar el contenedor-galeria y agregar data-fecha
    setTimeout(() => {
        const contenedorGaleria = popup.querySelector('.contenedor-galeria');
        if (contenedorGaleria && fecha) {
            contenedorGaleria.setAttribute('data-fecha', fecha.toISOString());
        }
        
        // Configurar el carrusel después de que se renderice
        const carouselContainer = popup.querySelector('.foto-principal-container-horizontal');
        if (carouselContainer) {
            const fotosData = JSON.parse(carouselContainer.getAttribute('data-fotos') || '[]');
            configurarCarouselHorizontal(carouselContainer, fotosData);
        }
    }, 50);
}
// ==================== CONFIGURAR CAROUSEL HORIZONTAL (VERSIÓN CORREGIDA) ====================
function configurarCarouselHorizontal(contenedorCarousel, fotosArray) {
    if (!contenedorCarousel || !fotosArray.length) return;
    
    // Obtener los botones DEL CONTENEDOR DE LA GALERÍA
    const contenedorGaleria = contenedorCarousel.closest('.contenedor-galeria');
    const btnDescargaIndividual = contenedorGaleria.querySelector('.btn-descarga-individual');
    const btnDescargaMultiple = contenedorGaleria.querySelector('.btn-descarga-multiple');
    
    const track = contenedorCarousel.querySelector('.carousel-track');
    const slides = contenedorCarousel.querySelectorAll('.carousel-slide');
    const btnAnterior = contenedorCarousel.querySelector('.btn-anterior-horizontal');
    const btnSiguiente = contenedorCarousel.querySelector('.btn-siguiente-horizontal');
    const currentSlideElement = contenedorCarousel.querySelector('.current-slide');
    const totalSlidesElement = contenedorCarousel.querySelector('.total-slides');
    
    let slideActual = 0;
    const totalSlides = slides.length;
    const slideWidth = 85; // Porcentaje que ocupa cada slide
    
    // Función para actualizar botones de descarga
    function actualizarBotonesDescarga() {
        // Obtener fecha para el nombre del archivo
        const fechaAttr = contenedorGaleria.getAttribute('data-fecha');
        const fecha = fechaAttr ? new Date(fechaAttr) : new Date();
        
        // Actualizar botón de descarga INDIVIDUAL
        if (btnDescargaIndividual) {
            const fotoActual = fotosArray[slideActual];
            
            // Configurar evento de clic
            btnDescargaIndividual.onclick = function() {
                const nombreArchivo = generarNombreDescarga(fecha, fotoActual.texto || '');
                descargarFoto(fotoActual.url, nombreArchivo);
            };
            
            // Actualizar texto del botón
            btnDescargaIndividual.innerHTML = `
                <i class="fas fa-download"></i>
                Descargar esta foto (${slideActual + 1}/${totalSlides})
            `;
            
            // Efecto visual al pasar el mouse
            btnDescargaIndividual.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-2px)';
                this.style.boxShadow = '0 6px 20px rgba(76, 175, 80, 0.4)';
            });
            
            btnDescargaIndividual.addEventListener('mouseleave', function() {
                this.style.transform = '';
                this.style.boxShadow = '0 4px 15px rgba(76, 175, 80, 0.3)';
            });
        }
        
        // Actualizar botón de descarga MÚLTIPLE (si existe)
        if (btnDescargaMultiple && totalSlides > 1) {
            btnDescargaMultiple.onclick = function() {
                const urls = fotosArray.map(foto => foto.url);
                const nombres = fotosArray.map((foto, index) => 
                    generarNombreDescarga(fecha, foto.texto || `Foto ${index + 1}`)
                );
                
                // Descargar todas las fotos
                mostrarNotificacion(`Descargando ${totalSlides} fotos...`, 'info');
                
                urls.forEach((url, index) => {
                    setTimeout(() => {
                        descargarFoto(url, nombres[index]);
                    }, index * 800); // Espaciado para evitar bloqueos
                });
            };
            
            // Efecto visual para el botón múltiple
            btnDescargaMultiple.addEventListener('mouseenter', function() {
                this.style.opacity = '1';
                this.style.transform = 'translateY(-2px)';
            });
            
            btnDescargaMultiple.addEventListener('mouseleave', function() {
                this.style.opacity = '0.8';
                this.style.transform = '';
            });
        }
    }
    
    // Función para actualizar carousel
    function actualizarCarousel() {
        // Calcular desplazamiento
        const desplazamiento = -slideActual * slideWidth;
        track.style.transform = `translateX(${desplazamiento}%)`;
        
        // Actualizar clases active
        slides.forEach((slide, index) => {
            slide.classList.toggle('active', index === slideActual);
        });
        
        // Actualizar indicador de posición
        if (currentSlideElement) {
            currentSlideElement.textContent = slideActual + 1;
        }
        
        if (totalSlidesElement) {
            totalSlidesElement.textContent = ` / ${totalSlides}`;
        }
        
        // Actualizar estado de botones de navegación
        if (btnAnterior) {
            const isDisabled = slideActual === 0;
            btnAnterior.disabled = isDisabled;
            btnAnterior.style.opacity = isDisabled ? '0.3' : '1';
            btnAnterior.style.cursor = isDisabled ? 'not-allowed' : 'pointer';
            btnAnterior.title = isDisabled ? 'Primera foto' : 'Foto anterior';
        }
        
        if (btnSiguiente) {
            const isDisabled = slideActual === totalSlides - 1;
            btnSiguiente.disabled = isDisabled;
            btnSiguiente.style.opacity = isDisabled ? '0.3' : '1';
            btnSiguiente.style.cursor = isDisabled ? 'not-allowed' : 'pointer';
            btnSiguiente.title = isDisabled ? 'Última foto' : 'Foto siguiente';
        }
        
        // Agregar funcionalidad de zoom a la imagen activa
        const slideActivo = slides[slideActual];
        const imagenActiva = slideActivo.querySelector('.slide-image');
        if (imagenActiva) {
            imagenActiva.onclick = function(e) {
                e.stopPropagation();
                
                // Crear overlay para zoom
                const overlay = document.createElement('div');
                overlay.className = 'zoom-overlay-carousel';
                
                const imgZoom = document.createElement('img');
                imgZoom.src = this.src;
                imgZoom.alt = this.alt;
                
                overlay.appendChild(imgZoom);
                overlay.onclick = function() {
                    document.body.removeChild(this);
                };
                
                document.body.appendChild(overlay);
                
                // También cerrar con Escape
                const closeOnEscape = function(e) {
                    if (e.key === 'Escape') {
                        if (overlay.parentNode) {
                            overlay.parentNode.removeChild(overlay);
                        }
                        document.removeEventListener('keydown', closeOnEscape);
                    }
                };
                document.addEventListener('keydown', closeOnEscape);
            };
        }
        
        // Actualizar botones de descarga
        actualizarBotonesDescarga();
    }
    
    // Configurar eventos de navegación
    if (btnAnterior) {
        btnAnterior.onclick = function() {
            if (slideActual > 0) {
                slideActual--;
                actualizarCarousel();
            }
        };
    }
    
    if (btnSiguiente) {
        btnSiguiente.onclick = function() {
            if (slideActual < totalSlides - 1) {
                slideActual++;
                actualizarCarousel();
            }
        };
    }
    
    // Configurar clic en slides para navegación directa
    slides.forEach((slide, index) => {
        slide.onclick = function(e) {
            // Solo navegar si no se hizo clic en la imagen (para no interferir con zoom)
            if (!e.target.classList.contains('slide-image')) {
                slideActual = index;
                actualizarCarousel();
            }
        };
    });
    
    // Inicializar
    actualizarCarousel();
    
    // Configurar eventos de teclado
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            if (slideActual > 0) {
                slideActual--;
                actualizarCarousel();
            }
        } else if (e.key === 'ArrowRight') {
            if (slideActual < totalSlides - 1) {
                slideActual++;
                actualizarCarousel();
            }
        }
    });
}

// ==================== BUSCADOR AJUSTADO ====================
function configurarBuscadorAjustado() {
    const inputFecha = document.getElementById('buscarFecha');
    const btnBuscar = document.getElementById('btnBuscar');
    
    if (!inputFecha || !btnBuscar) {
        console.error("❌ Elementos del buscador no encontrados");
        return;
    }
    
    // Forzar que el navegador muestre el calendario nativo
    inputFecha.addEventListener('click', function(e) {
        // Esto ayuda en algunos navegadores móviles
        this.showPicker ? this.showPicker() : this.focus();
    });
    
    // Configurar evento de búsqueda
    btnBuscar.onclick = function() {
        buscarFechaEspecial();
    };
    
    // También buscar al presentar Enter
    inputFecha.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            buscarFechaEspecial();
        }
    });
    
    // Actualizar visualmente cuando se selecciona una fecha
    inputFecha.addEventListener('change', function() {
        const label = document.querySelector('.input-label');
        if (this.value) {
            // Fecha seleccionada - mostrar en el input
            this.style.color = '#9C27B0';
            if (label) label.style.opacity = '0';
            
            // Efecto en el botón
            btnBuscar.style.background = 'linear-gradient(45deg, #9C27B0, #7B1FA2)';
            setTimeout(() => {
                btnBuscar.style.background =  'linear-gradient(45deg, #9C27B0, #7B1FA2)';
            }, 300);
            
            console.log('Fecha seleccionada:', this.value);
        } else {
            // Sin fecha seleccionada
            this.style.color = '';
            if (label) label.style.opacity = '1';
        }
    });
    
    // Efecto hover para el botón de búsqueda
    btnBuscar.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05) rotate(5deg)';
    });
    
    btnBuscar.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) rotate(0deg)';
    });
    
    console.log("✅ Buscador elegante configurado correctamente");
}

function buscarFechaEspecial() {
    const inputFecha = document.getElementById('buscarFecha');
    const contenedor = inputFecha.closest('.contenedor-buscador-elegante');
    
    if (!inputFecha || !inputFecha.value) {
        // Efecto visual de error
        if (contenedor) {
            contenedor.style.border = '2px solid #ff9800';
            contenedor.style.animation = 'shake 0.5s ease';
        }
        
        // Notificación
        mostrarNotificacion('Selecciona una fecha primero', 'error');
        
        setTimeout(() => {
            if (contenedor) {
                contenedor.style.border = '';
                contenedor.style.animation = '';
            }
        }, 2000);
        
        return;
    }
    
    // Convertir la fecha del input a fecha local (sin problemas de zona horaria)
    const fechaInput = inputFecha.value; // Formato: "YYYY-MM-DD"
    const partes = fechaInput.split('-');
    const año = parseInt(partes[0]);
    const mes = parseInt(partes[1]) - 1; // Restar 1 porque enero es 0
    const dia = parseInt(partes[2]);
    const fechaSeleccionada = new Date(año, mes, dia); // Fecha local
    
    // Verificar que esté dentro del rango (5/4/2025 - 5/4/2026)
    if (fechaSeleccionada < FECHA_INICIO || fechaSeleccionada > FECHA_FIN) {
        mostrarNotificacion('Selecciona una fecha entre el 5/4/2025 y el 5/4/2026', 'error');
        inputFecha.value = '';
        return;
    }
    
    // Calcular número de día usando la función corregida
    const numeroDia = calcularDiaExacto(fechaSeleccionada);
    console.log(`🔍 Búsqueda: ${fechaSeleccionada.toLocaleDateString()} = Día ${numeroDia}`);
    
    // Mostrar contenido
    mostrarContenidoAjustado(numeroDia, fechaSeleccionada);
}

function mostrarNotificacion(mensaje, tipo = 'info') {
    const notificacion = document.createElement('div');
    notificacion.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${tipo === 'error' ? ' #9C27B0' : tipo === 'success' ? '#4CAF50' : '#2196F3'};
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 9999;
        max-width: 300px;
        animation: slideIn 0.3s ease, slideOut 0.3s ease 3s forwards;
    `;
    
    const icono = tipo === 'error' ? 'exclamation-triangle' : 
                  tipo === 'success' ? 'check-circle' : 'info-circle';
    
    notificacion.innerHTML = `
        <div style="display: flex; align-items: center; gap: 10px;">
            <i class="fas fa-${icono}"></i>
            <span>${mensaje}</span>
        </div>
    `;
    
    // Agregar animaciones
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOut {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(notificacion);
    
    setTimeout(() => {
        if (notificacion.parentNode) {
            notificacion.parentNode.removeChild(notificacion);
        }
    }, 3000);
}

function configurarBotonesBasicosAjustados() {
    console.log("🔄 Configurando botones básicos ajustados...");
    
    
// ============================================
    // CONFIGURAR ESTADÍSTICA 3: DICCIONARIO SECRETO
    // ============================================
    const estadisticaDiccionario = document.querySelector('.estadistica-item:nth-child(3)');
    if (estadisticaDiccionario) {
        console.log("📚 Configurando estadística de diccionario secreto...");
        
        // Cambiar el texto
        const textoEstadistica = estadisticaDiccionario.querySelector('p');
        if (textoEstadistica) {
            textoEstadistica.textContent = ' Solo nosotros entendemos';
        }
        
        // Cambiar el icono
        const iconoEstadistica = estadisticaDiccionario.querySelector('i');
        if (iconoEstadistica) {
            iconoEstadistica.className = 'fas fa-book';
            iconoEstadistica.style.color = '#2196F3';
        }
        
        // Hacer clickeable
        estadisticaDiccionario.style.cursor = 'pointer';
        estadisticaDiccionario.title = "Haz clic para ver una palabra secreta de nuestra relación";
        
        // Efecto hover mejorado
        estadisticaDiccionario.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.05)';
            this.style.background = 'linear-gradient(135deg, #ffffff, #7dabda)';
            this.style.boxShadow = '0 10px 25px rgba(33, 150, 243, 0.3)';
            this.style.borderColor = '#2196F3';
            
            // Animación del icono
            const icono = this.querySelector('i');
            if (icono) {
                 icono.style.color = '#1976D2';
                icono.style.animation = 'latidoDiccionario 1s infinite';
            }
        });
        
        estadisticaDiccionario.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.background = '';
            this.style.boxShadow = '';
            this.style.borderColor = '';
            
            const icono = this.querySelector('i');
            if (icono) {
                icono.style.color = '#2196F3';
                icono.style.animation = '';
            }
        });
        
        // Evento click
        estadisticaDiccionario.addEventListener('click', function(e) {
            // Evitar que se dispare en los botones internos
            if (e.target.closest('.btn-favoritos, .btn-limpiar-favoritos')) {
                return;
            }
            mostrarPalabraSecreta();
        });
        
        // También hacer clickeable el icono y el texto dentro
        const iconoDiccionario = estadisticaDiccionario.querySelector('i');
        const textoDiccionario = estadisticaDiccionario.querySelector('p');
        const contadorDiccionario = estadisticaDiccionario.querySelector('span');
        
        if (iconoDiccionario) iconoDiccionario.style.cursor = 'pointer';
        if (textoDiccionario) textoDiccionario.style.cursor = 'pointer';
        if (contadorDiccionario) {
            contadorDiccionario.style.color = '#1772db'
            contadorDiccionario.style.cursor = 'pointer';
        }
        console.log("✅ Estadística de diccionario secreto configurada");
    }


    // Botón razón aleatoria
    const btnRazon = document.getElementById('btnRazonAleatoria');
    if (btnRazon) {
        btnRazon.onclick = function() {
            const razones = window.datosConfig?.razonesTeAmo || [
                "Por tu sonrisa que ilumina mi día",
                "Por cómo me haces reír sin esfuerzo",
                "Por tu paciencia cuando soy terco/a"
            ];
            
            const razon = razones[Math.floor(Math.random() * razones.length)];
            const numero = Math.floor(Math.random() * razones.length) + 1;
            
            // Notificación bonita
            const notificacion = document.createElement('div');
            notificacion.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                background: linear-gradient(45deg, #9C27B0, #7B1FA2);
                color: white;
                padding: 15px 20px;
                border-radius: 10px;
                box-shadow: 0 5px 15px rgba(0,0,0,0.2);
                z-index: 9999;
                max-width: 300px;
                animation: slideIn 0.3s ease, fadeOut 0.3s ease 4s forwards;
            `;
            
            notificacion.innerHTML = `
                <div style="display: flex; align-items: center; margin-bottom: 5px;">
                    <i class="fas fa-heart" style="margin-right: 10px;"></i>
                    <strong>Razón #${numero} por la que te amo:</strong>
                </div>
                <div style="font-style: italic;">"${razon}"</div>
            `;
            
            document.body.appendChild(notificacion);
            
            setTimeout(() => {
                if (notificacion.parentNode) {
                    notificacion.parentNode.removeChild(notificacion);
                }
            }, 4000);
        };
    }

    // Configurar estadística de momentos/favoritos como interactiva
    const estadisticaMomentos = document.querySelector('.estadistica-item:nth-child(1)');
    if (estadisticaMomentos) {
        // Cambiar el texto
        const textoEstadistica = estadisticaMomentos.querySelector('p');
        if (textoEstadistica) {
            textoEstadistica.textContent = 'Días favoritos';
        }
        
        // Cambiar el icono
        const iconoEstadistica = estadisticaMomentos.querySelector('i');
        if (iconoEstadistica) {
            iconoEstadistica.style.color = '#920909';
            iconoEstadistica.className = 'fas fa-heart';
        }
        
        // Hacer clickeable
        estadisticaMomentos.style.cursor = 'pointer';
        estadisticaMomentos.title = "Haz clic para ver tus días favoritos";
        
        // Efecto hover mejorado
        estadisticaMomentos.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.05)';
            this.style.background = 'linear-gradient(135deg, #fce4ec, #f8bbd9)';
            this.style.boxShadow = '0 10px 25px rgb(97, 5, 36)';
            this.style.borderColor = '#E91E63';
            this.style.color = '#5f0b0b';
        });
        
        estadisticaMomentos.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.background = '';
            this.style.boxShadow = '';
            this.style.borderColor = '';
        });
        
        // Evento click
        estadisticaMomentos.addEventListener('click', function() {
            mostrarFavoritosPopup();
        });
        
        // Actualizar contador inicial
        actualizarEstadisticaFavoritos();
    }

    // Buscar el elemento de estadísticas "Razones para amarte"
    const estadisticaRazones = document.querySelector('.estadistica-item:nth-child(2)');
    if (estadisticaRazones) {
        estadisticaRazones.style.cursor = 'pointer';
       // estadisticaRazones.title = "Haz clic para ver una razón por la que te amo";
        
        estadisticaRazones.addEventListener('click', function() {
            mostrarRazonAleatoria();
        });
        
        // También hacer clickeable el icono y el texto dentro
        const iconoRazones = estadisticaRazones.querySelector('i');
        const textoRazones = estadisticaRazones.querySelector('p');
        const contadorRazones = estadisticaRazones.querySelector('span');
        
        if (iconoRazones) iconoRazones.style.cursor = 'pointer';
        if (textoRazones) textoRazones.style.cursor = 'pointer';
        if (contadorRazones) contadorRazones.style.cursor = 'pointer';
    }
}

// ==================== FUNCIÓN PARA MOSTRAR RAZÓN ALEATORIA ====================
function mostrarRazonAleatoria() {
    const razones = window.datosConfig?.razonesTeAmo || [
        "Por tu sonrisa que ilumina mi día",
        "Por cómo me haces reír sin esfuerzo",
        "Por tu paciencia cuando soy terco/a",
        "Por tu forma de mirarme",
        "Por cada momento a tu lado",
        "Por ser mi mejor amigo/a y mi amor",
        "Por cómo me haces sentir especial",
        "Por tu corazón bondadoso",
        "Por todas nuestras aventuras juntos",
        "Por cómo me entiendes sin palabras"
    ];
    
    const razon = razones[Math.floor(Math.random() * razones.length)];
    const numero = Math.floor(Math.random() * razones.length) + 1;
    
    // Notificación bonita
    const notificacion = document.createElement('div');
    notificacion.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #9C27B0, #7B1FA2);
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 9999;
        max-width: 300px;
        animation: slideIn 0.3s ease, slideOut 0.3s ease 4s forwards;
        cursor: pointer;
    `;
    
    notificacion.innerHTML = `
        <div style="display: flex; align-items: center; margin-bottom: 5px;">
            <i class="fas fa-heart" style="margin-right: 10px; font-size: 1.2rem;"></i>
            <strong style="font-size: 0.95rem;">Razón #${numero} por la que te amo:</strong>
        </div>
        <div style="font-style: italic; font-size: 0.9rem; line-height: 1.4;">"${razon}"</div>
    `;
    
    // Hacer clicable la notificación para cerrarla
    notificacion.addEventListener('click', function() {
        if (notificacion.parentNode) {
            notificacion.parentNode.removeChild(notificacion);
        }
    });
    
    // Eliminar notificaciones anteriores
    const notificacionesAnteriores = document.querySelectorAll('[style*="position: fixed"][style*="top: 20px"][style*="right: 20px"]');
    notificacionesAnteriores.forEach(notif => {
        if (notif !== notificacion && notif.parentNode) {
            notif.parentNode.removeChild(notif);
        }
    });
    
    document.body.appendChild(notificacion);
    
    // Efecto visual en el elemento de estadísticas
    const estadisticaItem = document.querySelector('.estadistica-item:nth-child(2)');
    if (estadisticaItem) {
        estadisticaItem.style.transform = 'scale(1.05)';
        estadisticaItem.style.boxShadow = '0 10px 25px rgb(101, 59, 199)';
        setTimeout(() => {
            estadisticaItem.style.transform = '';
            estadisticaItem.style.boxShadow = '';
        }, 500);
    }
    
    // Auto-cerrar después de 4 segundos
    setTimeout(() => {
        if (notificacion.parentNode) {
            notificacion.parentNode.removeChild(notificacion);
        }
    }, 4000);
}

// ============================================
// FUNCIÓN PARA MOSTRAR PALABRA SECRETA - DISEÑO BÁSICO Y ELEGANTE
// ============================================
function mostrarPalabraSecreta() {
    console.log("📚 Mostrando palabra secreta...");
    
    // Obtener palabras secretas
    const palabras = window.datosConfig?.palabrasSecretas || [
        { palabra: "Barbacoa", significado: "Nuestro lugar especial 🍟" },
        { palabra: "Pochi", significado: "Tu apodo especial 💘" }
    ];
    
    let currentIndex = Math.floor(Math.random() * palabras.length);
    let ultimaPalabra = currentIndex;
    
    // Función para obtener una nueva palabra aleatoria diferente a la actual
    function obtenerNuevaPalabraAleatoria() {
        if (palabras.length <= 1) return 0;
        
        let nuevaPalabra;
        do {
            nuevaPalabra = Math.floor(Math.random() * palabras.length);
        } while (nuevaPalabra === ultimaPalabra && palabras.length > 1);
        
        ultimaPalabra = nuevaPalabra;
        return nuevaPalabra;
    }
    
    // Crear overlay oscuro (bloquea clics fuera del popup)
    const overlay = document.createElement('div');
    overlay.id = 'overlay-palabra-secreta';
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.7);
        backdrop-filter: blur(5px);
        z-index: 9998;
        display: flex;
        align-items: center;
        justify-content: center;
        animation: fadeInOverlay 0.3s ease;
        cursor: pointer;
    `;
    
    // Función para actualizar el contenido del popup
    function actualizarPopup() {
        const palabraSecreta = palabras[currentIndex];
        
        popup.innerHTML = `
            <!-- Icono decorativo -->
            <div style="
                width: 80px;
                height: 80px;
                background: linear-gradient(135deg, #9C27B0, #7B1FA2);
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 0 auto 25px;
                box-shadow: 0 8px 20px rgba(156, 39, 176, 0.3);
            ">
                <i class="fas fa-book" style="font-size: 2.8rem; color: white;"></i>
            </div>
            
            <!-- Título -->
            <h3 style="
                font-family: 'Poppins', sans-serif;
                font-size: 1.4rem;
                color: #333;
                margin-bottom: 30px;
                font-weight: 600;
                letter-spacing: 0.5px;
            ">
                Nuestro Diccionario Secreto
            </h3>
            
            <!-- Contenedor de la palabra -->
            <div style="
                background: linear-gradient(135deg, #f8f9fa, #e9ecef);
                border-radius: 15px;
                padding: 30px;
                margin-bottom: 25px;
                border: 1px solid rgba(0, 0, 0, 0.05);
                box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
            ">
                <!-- Palabra -->
                <div style="
                    font-family: 'Poppins', sans-serif;
                    font-size: 2.2rem;
                    font-weight: 700;
                    color: #9C27B0;
                    margin-bottom: 15px;
                    letter-spacing: 1px;
                ">
                    "${palabraSecreta.palabra}"
                </div>
                
                <!-- Separador sutil -->
                <div style="
                    width: 60px;
                    height: 2px;
                    background: linear-gradient(90deg, transparent, #9C27B0, transparent);
                    margin: 15px auto;
                "></div>
                
                <!-- Significado -->
                <div style="
                    font-family: 'Poppins', sans-serif;
                    font-size: 1.1rem;
                    line-height: 1.6;
                    color: #555;
                    font-style: italic;
                    padding-top: 10px;
                ">
                    ${palabraSecreta.significado}
                </div>
            </div>
            
            <!-- Contador -->
            <div style="
                font-family: 'Poppins', sans-serif;
                font-size: 0.9rem;
                color: #999;
                margin-top: 15px;
            ">
                Palabra #${currentIndex + 1} de ${palabras.length}
            </div>
            
            <!-- Instrucción sutil -->
            <div style="
                font-family: 'Poppins', sans-serif;
                font-size: 0.8rem;
                color: #bbb;
                margin-top: 10px;
                font-style: italic;
            ">
                Haz clic en la tarjeta para ver otra palabra
            </div>
            
            <!-- Botón de cerrar -->
            <button id="btn-cerrar-palabra-secreta" style="
                margin-top: 25px;
                background: linear-gradient(135deg, #9C27B0, #7B1FA2);
                color: white;
                border: none;
                padding: 12px 35px;
                border-radius: 25px;
                cursor: pointer;
                font-family: 'Poppins', sans-serif;
                font-size: 0.95rem;
                font-weight: 600;
                letter-spacing: 0.5px;
                transition: all 0.3s ease;
                box-shadow: 0 4px 15px rgba(156, 39, 176, 0.3);
                display: inline-flex;
                align-items: center;
                gap: 8px;
            " onmouseenter="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 20px rgba(156, 39, 176, 0.4)';"
            onmouseleave="this.style.transform=''; this.style.boxShadow='0 4px 15px rgba(156, 39, 176, 0.3)';">
                <i class="fas fa-times"></i>
                Cerrar
            </button>
        `;
        
        // Reasignar el event listener al botón de cerrar
        const btnCerrar = popup.querySelector('#btn-cerrar-palabra-secreta');
        btnCerrar.addEventListener('click', function(e) {
            e.stopPropagation();
            cerrarPopupPalabraSecreta();
        });
    }
    
    // Crear popup elegante y básico
    const popup = document.createElement('div');
    popup.id = 'popup-palabra-secreta';
    popup.style.cssText = `
        background: white;
        border-radius: 20px;
        padding: 40px 50px;
        max-width: 500px;
        width: 90%;
        text-align: center;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        animation: slideUpPopup 0.4s ease;
        cursor: pointer;
        position: relative;
        border: 1px solid rgba(0, 0, 0, 0.1);
    `;
    
    // GUARDAR POSICIÓN DEL SCROLL ANTES DE ABRIR EL POPUP
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    document.body.setAttribute('data-scroll-pos', scrollY);
    
    // Inicializar el contenido del popup
    actualizarPopup();
    
    // Agregar popup al overlay
    overlay.appendChild(popup);
    
    // Evento para cambiar palabra al hacer clic dentro del popup
    popup.addEventListener('click', function(e) {
        // No hacer nada si se hace clic en el botón de cerrar (ese ya tiene su propio handler)
        if (e.target.closest('#btn-cerrar-palabra-secreta')) {
            return;
        }
        
        // Cambiar a una nueva palabra aleatoria (diferente a la actual)
        currentIndex = obtenerNuevaPalabraAleatoria();
        actualizarPopup();
        
        // Efecto sutil de transición
        const palabraContainer = popup.querySelector('div[style*="background: linear-gradient(135deg, #f8f9fa, #e9ecef)"]');
        if (palabraContainer) {
            palabraContainer.style.transform = 'scale(0.98)';
            palabraContainer.style.transition = 'transform 0.2s ease';
            setTimeout(() => {
                palabraContainer.style.transform = 'scale(1)';
            }, 200);
        }
        
        console.log(`📚 Nueva palabra secreta: "${palabras[currentIndex].palabra}"`);
    });
    
    // Cerrar al hacer clic en el overlay (fuera del popup)
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) {
            cerrarPopupPalabraSecreta();
        }
    });
    
    // Cerrar con tecla Escape
    const closeOnEscape = function(e) {
        if (e.key === 'Escape') {
            cerrarPopupPalabraSecreta();
            document.removeEventListener('keydown', closeOnEscape);
        }
    };
    document.addEventListener('keydown', closeOnEscape);
    
    // Agregar estilos de animación si no existen
    if (!document.querySelector('#estilos-popup-palabras')) {
        const style = document.createElement('style');
        style.id = 'estilos-popup-palabras';
        style.textContent = `
            @keyframes fadeInOverlay {
                from {
                    opacity: 0;
                }
                to {
                    opacity: 1;
                }
            }
            
            @keyframes slideUpPopup {
                from {
                    opacity: 0;
                    transform: translateY(30px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            
            @keyframes slideDownPopup {
                from {
                    opacity: 1;
                    transform: translateY(0);
                }
                to {
                    opacity: 0;
                    transform: translateY(30px);
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Bloquear scroll del body (sin cambiar la posición)
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100%';
    
    // Agregar overlay al body
    document.body.appendChild(overlay);
    
    // Efecto visual en la estadística
    const estadisticaItem = document.querySelector('.estadistica-item:nth-child(3)');
    if (estadisticaItem) {
        estadisticaItem.style.transform = 'scale(1.05)';
        estadisticaItem.style.boxShadow = '0 10px 25px rgba(156, 39, 176, 0.4)';
        setTimeout(() => {
            estadisticaItem.style.transform = '';
            estadisticaItem.style.boxShadow = '';
        }, 500);
    }
    
    console.log(`📚 Palabra secreta mostrada: "${palabras[currentIndex].palabra}"`);
}

// ============================================
// FUNCIÓN PARA CERRAR POPUP DE PALABRA SECRETA
// ============================================
function cerrarPopupPalabraSecreta() {
    const overlay = document.getElementById('overlay-palabra-secreta');
    const popup = document.getElementById('popup-palabra-secreta');
    
    if (!overlay || !popup) return;
    
    // Animación de salida
    overlay.style.animation = 'fadeInOverlay 0.3s ease reverse';
    popup.style.animation = 'slideDownPopup 0.3s ease';
    
    // Obtener la posición del scroll guardada
    const scrollY = parseInt(document.body.getAttribute('data-scroll-pos') || '0');
    
    // Restaurar scroll del body después de la animación
    setTimeout(() => {
        if (overlay.parentNode) {
            overlay.parentNode.removeChild(overlay);
        }
        
        // Restaurar estilos del body
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        
        // RESTAURAR LA POSICIÓN DEL SCROLL EXACTAMENTE DONDE ESTABA
        window.scrollTo(0, scrollY);
        
        // Limpiar atributo
        document.body.removeAttribute('data-scroll-pos');
    }, 300);
}

function actualizarEstadisticasAjustadas() {
    console.log("📊 Actualizando estadísticas ajustadas...");
    
    // Calcular días totales
    const totalDias = Math.floor((FECHA_FIN - FECHA_INICIO) / (1000 * 60 * 60 * 24));
    
    // Calcular días transcurridos
    const hoy = new Date();
    let diasTranscurridos = 0;
    
    if (hoy >= FECHA_INICIO) {
        if (hoy >= FECHA_FIN) {
            diasTranscurridos = totalDias;
        } else {
            diasTranscurridos = Math.floor((hoy - FECHA_INICIO) / (1000 * 60 * 60 * 24));
        }
    }
    
    // Actualizar contador de días juntos
    const diasJuntosElement = document.getElementById('dias-juntos');
    if (diasJuntosElement) {
        if (diasTranscurridos > totalDias) {
            diasJuntosElement.textContent = totalDias;
            diasJuntosElement.style.color = '#9C27B0';
            diasJuntosElement.title = "¡Ya cumplimos nuestro primer año!";
        } else {
            diasJuntosElement.textContent = diasTranscurridos > 0 ? diasTranscurridos : 0;
        }
    }
    
    // Actualizar favoritos (nueva estadística)
    actualizarEstadisticaFavoritos();
    
    // Contador de razones (existente)
    if (window.datosConfig && window.datosConfig.razonesTeAmo) {
        const contadorRazones = document.getElementById('contador-razones');
        if (contadorRazones) {
            contadorRazones.textContent = `${window.datosConfig.razonesTeAmo.length}+`;
        }
    }
    
     // Contador de palabras secretas
    const contadorPalabras = document.getElementById('contador-fotos');
    if (window.datosConfig && window.datosConfig.palabrasSecretas && contadorPalabras) {
        contadorPalabras.textContent = window.datosConfig.palabrasSecretas.length;
        console.log(`📚 Contador de palabras secretas: ${window.datosConfig.palabrasSecretas.length}`);
        contadorPalabras.style.color = '#3752ca'
    }
    
    console.log(`📊 Estadísticas actualizadas: ${diasTranscurridos}/${totalDias} días, ${diasFavoritos.length} favoritos`);
}
// ==================== SISTEMA DE FAVORITOS ====================

// Inicializar favoritos desde localStorage
let diasFavoritos = JSON.parse(localStorage.getItem('diasFavoritos')) || [];

// ==================== FUNCIÓN MEJORADA PARA GUARDAR FAVORITOS ====================
function guardarFavorito(numeroDia, fecha) {
    const index = diasFavoritos.findIndex(fav => fav.dia === numeroDia);
    let agregado = false;
    
    if (index === -1) {
        // Agregar a favoritos
        diasFavoritos.push({
            dia: numeroDia,
            fecha: fecha.toISOString(),
            fechaFormateada: fecha.toLocaleDateString('es-ES', { 
                day: 'numeric', 
                month: 'long', 
                year: 'numeric' 
            })
        });
        agregado = true;
        mostrarNotificacion('❤️ ¡Día agregado a favoritos!', 'success');
    } else {
        // Remover de favoritos
        diasFavoritos.splice(index, 1);
        agregado = false;
        mostrarNotificacion('💔 Día removido de favoritos', 'info');
    }
    
    // Guardar en localStorage
    localStorage.setItem('diasFavoritos', JSON.stringify(diasFavoritos));
    
    // Actualizar estadísticas
    actualizarEstadisticaFavoritos();
    
    // Actualizar calendario para marcar días favoritos
    actualizarMarcadoresFavoritos();
    
    return agregado; // Devuelve true si se agregó, false si se removió
}

// ==================== FUNCIÓN PARA ACTUALIZAR MARCADORES EN CALENDARIO ====================
function actualizarMarcadoresFavoritos() {
    const diasCalendario = document.querySelectorAll('.dia');
    
    diasCalendario.forEach(diaElement => {
        // Obtener fecha del elemento día
        const mesTitulo = diaElement.closest('.mes-contenedor')?.querySelector('.mes-titulo')?.textContent;
        const numeroDia = diaElement.querySelector('.numero-dia')?.textContent;
        
        if (mesTitulo && numeroDia) {
            // Extraer mes y año del título
            const partes = mesTitulo.split(' ');
            const mesTexto = partes[0];
            const año = parseInt(partes[1]);
            
            // Convertir texto del mes a número (0-11)
            const meses = ["ENERO", "FEBRERO", "MARZO", "ABRIL", "MAYO", "JUNIO", 
                          "JULIO", "AGOSTO", "SEPTIEMBRE", "OCTUBRE", "NOVIEMBRE", "DICIEMBRE"];
            const mes = meses.indexOf(mesTexto);
            
            if (mes !== -1) {
                const fecha = new Date(año, mes, parseInt(numeroDia));
                const numeroDiaCalculado = calcularDiaExacto(fecha);
                
                // Verificar si es favorito
                const esFavorito = diasFavoritos.some(fav => fav.dia === numeroDiaCalculado);
                
                if (esFavorito) {
                    diaElement.classList.add('es-favorito');
                    if (!diaElement.querySelector('.corazon-favorito')) {
                        const corazon = document.createElement('span');
                        corazon.className = 'corazon-favorito';
                        corazon.innerHTML = '❤️';
                        corazon.style.cssText = `
                            position: absolute;
                            top: 2px;
                            right: 2px;
                            font-size: 10px;
                            z-index: 2;
                        `;
                        diaElement.appendChild(corazon);
                    }
                } else {
                    diaElement.classList.remove('es-favorito');
                    const corazonExistente = diaElement.querySelector('.corazon-favorito');
                    if (corazonExistente) {
                        corazonExistente.remove();
                    }
                }
            }
        }
    });
}

// Función para actualizar la estadística de favoritos
function actualizarEstadisticaFavoritos() {
    const contadorMomentos = document.getElementById('contador-momentos');
    if (contadorMomentos) {
        contadorMomentos.textContent = `${diasFavoritos.length} `;
        
        // Efecto visual si hay favoritos
        if (diasFavoritos.length > 0) {
            contadorMomentos.style.color = '#940a38';
            contadorMomentos.style.fontWeight = 'bold';
        } else {
            contadorMomentos.style.color = '';
            contadorMomentos.style.fontWeight = '';
        }
    }
}

// ==================== FUNCIÓN CORREGIDA PARA MOSTRAR POPUP DE FAVORITOS ====================
// ==================== FUNCIÓN CORREGIDA PARA MOSTRAR POPUP DE FAVORITOS ====================
function mostrarFavoritosPopup() {
    if (diasFavoritos.length === 0) {
        mostrarNotificacion('Aún no tienes días favoritos. ¡Haz clic en un día especial y guárdalo!', 'info');
        return;
    }
    
    let contenidoHTML = `
        <div style="max-width: 500px; margin: 0 auto;">
            <h2 style="color: #940a38; margin-bottom: 15px; font-family: 'Poppins', sans-serif; font-size: 1.6rem; text-align: center; font-weight: 700;">
                <i class="fas fa-heart"></i> Tus Días Favoritos (${diasFavoritos.length})
            </h2>
            <div style="max-height: 300px; overflow-y: auto; margin-bottom: 20px; padding: 10px; background: #f9f9f9; border-radius: 10px;">
    `;
    
    // Ordenar por número de día
    diasFavoritos.sort((a, b) => a.dia - b.dia);
    
    diasFavoritos.forEach((favorito, index) => {
        const fecha = new Date(favorito.fecha);
        contenidoHTML += `
            <div style="
                background: white;
                border-radius: 10px;
                padding: 12px 15px;
                margin-bottom: 10px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                border-left: 4px solid #940a38;
                cursor: pointer;
                transition: all 0.2s;
                box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            " onclick="abrirDiaDesdeFavoritos(${favorito.dia}, '${favorito.fecha}')">
                <div>
                    <strong style="color: #940a38; font-size: 1rem;">Día ${favorito.dia}</strong>
                    <div style="font-size: 0.85rem; color: #666; margin-top: 3px;">${favorito.fechaFormateada}</div>
                </div>
                <div style="display: flex; gap: 8px; align-items: center;">
                    <span style="color: #940a38; font-size: 0.9rem;">
                        <i class="fas fa-heart"></i>
                    </span>
                    <button onclick="event.stopPropagation(); quitarFavorito(${favorito.dia})" 
                            style="
                                background: #7314df;
                                border: none;
                                color: #ffffff;
                                width: 30px;
                                height: 30px;
                                border-radius: 50%;
                                cursor: pointer;
                                font-size: 0.8rem;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                            ">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            </div>
        `;
    });
    
    contenidoHTML += `
            </div>
            <div style="display: flex; gap: 10px; justify-content: center; flex-wrap: wrap;">
                <button onclick="exportarFavoritos()" style="
                    background: linear-gradient(135deg, #0b5f0d, #2E7D32);
                    color: white;
                    border: none;
                    padding: 10px 20px;
                    border-radius: 20px;
                    cursor: pointer;
                    font-size: 0.85rem;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    transition: all 0.3s;
                " onmouseenter="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 5px 15px rgba(76, 175, 80, 0.3)';"
                onmouseleave="this.style.transform=''; this.style.boxShadow='';">
                    <i class="fas fa-download"></i> Exportar
                </button>
                <button onclick="limpiarFavoritos()" style="
                    background: linear-gradient(135deg, #c7190d, #b60909);
                    color: white;
                    border: none;
                    padding: 10px 20px;
                    border-radius: 20px;
                    cursor: pointer;
                    font-size: 0.85rem;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    transition: all 0.3s;
                " onmouseenter="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 5px 15px rgba(244, 67, 54, 0.3)';"
                onmouseleave="this.style.transform=''; this.style.boxShadow='';">
                    <i class="fas fa-trash"></i> Limpiar
                </button>
                <button onclick="cerrarPopup()" style="
                    background: linear-gradient(135deg, #9C27B0, #7B1FA2);
                    color: white;
                    border: none;
                    padding: 10px 20px;
                    border-radius: 20px;
                    cursor: pointer;
                    font-size: 0.85rem;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    transition: all 0.3s;
                " onmouseenter="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 5px 15px rgba(156, 39, 176, 0.3)';"
                onmouseleave="this.style.transform=''; this.style.boxShadow='';">
                    <i class="fas fa-times"></i> Cerrar
                </button>
            </div>
        </div>
    `;
    
    // IMPORTANTE: Pasar true como último parámetro para indicar que es popup de favoritos
    mostrarPopupContenido(contenidoHTML, false, [], null, true);
}
// ==================== FUNCIÓN MEJORADA PARA ABRIR DÍA DESDE FAVORITOS ====================
function abrirDiaDesdeFavoritos(numeroDia, fechaISO) {
    // Guardar que venimos desde favoritos
    window.diaDesdeFavoritos = true;
    
    const fecha = new Date(fechaISO);
    
    // Cerrar popup actual (el de favoritos)
    const popupActual = document.getElementById('popup-simple');
    if (popupActual) {
        popupActual.style.animation = 'fadeOut 0.3s ease forwards';
        setTimeout(() => {
            if (popupActual.parentNode) {
                popupActual.parentNode.removeChild(popupActual);
            }
            
            // Restaurar estilos del body
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.overflow = '';
            document.body.classList.remove('popup-abierto');
            
            // Mostrar el día después de cerrar
            setTimeout(() => {
                mostrarContenidoAjustado(numeroDia, fecha);
            }, 100);
        }, 300);
    } else {
        // Si no hay popup, mostrar directamente
        mostrarContenidoAjustado(numeroDia, fecha);
    }
}
// Función para quitar favorito desde el popup
function quitarFavorito(numeroDia) {
    diasFavoritos = diasFavoritos.filter(fav => fav.dia !== numeroDia);
    localStorage.setItem('diasFavoritos', JSON.stringify(diasFavoritos));
    actualizarEstadisticaFavoritos();
    mostrarFavoritosPopup(); // Recargar popup
}

// Función para exportar favoritos
function exportarFavoritos() {
    if (diasFavoritos.length === 0) {
        mostrarNotificacion('No hay favoritos para exportar', 'info');
        return;
    }
    
    const texto = diasFavoritos.map(fav => 
        `Día ${fav.dia}: ${fav.fechaFormateada}`
    ).join('\n');
    
    const blob = new Blob([`Tus Días Favoritos:\n\n${texto}`], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'mis-dias-favoritos.txt';
    link.click();
    
    mostrarNotificacion('¡Favoritos exportados!', 'success');
}

// Función para limpiar favoritos
function limpiarFavoritos() {
    if (confirm('¿Estás seguro de que quieres eliminar todos tus días favoritos?')) {
        diasFavoritos = [];
        localStorage.removeItem('diasFavoritos');
        actualizarEstadisticaFavoritos();
        cerrarPopup();
        mostrarNotificacion('Favoritos eliminados', 'info');
    }
}

// ==================== FUNCIÓN CORREGIDA PARA AGREGAR BOTÓN DE FAVORITOS ====================
// ==================== FUNCIÓN CORREGIDA PARA AGREGAR BOTÓN DE FAVORITOS ====================
function agregarBotonFavoritoPopup(numeroDia, fecha) {
    const esFavorito = diasFavoritos.some(fav => fav.dia === numeroDia);
    
    return `
        <div class="contenedor-botones-popup" 
             style="
                display: flex;
                gap: 10px;
                margin-top: 20px;
                justify-content: center;
             ">
            <button onclick="toggleFavoritoDesdePopup(${numeroDia}, '${fecha.toISOString()}')" 
                    class="btn-favorito-popup"
                    style="
                        background: ${esFavorito ? 'linear-gradient(135deg, #E91E63, #C2185B)' : 'linear-gradient(135deg, #9C27B0, #7B1FA2)'};
                        color: white;
                        border: none;
                        padding: 10px 20px;
                        border-radius: 25px;
                        cursor: pointer;
                        font-weight: bold;
                        font-size: 0.9rem;
                        transition: all 0.3s;
                        display: flex;
                        align-items: center;
                        gap: 8px;
                        min-width: 180px;
                    ">
                ${esFavorito ? '❤️ Quitar de favoritos' : '🤍 Agregar a favoritos'}
            </button>
        </div>
    `;
}

// ==================== FUNCIÓN CORREGIDA PARA TOGGLE FAVORITOS ====================
// ==================== FUNCIÓN CORREGIDA PARA TOGGLE FAVORITOS ====================
window.toggleFavoritoDesdePopup = function(numeroDia, fechaISO) {
    const fecha = new Date(fechaISO);
    const agregado = guardarFavorito(numeroDia, fecha);
    
    // Actualizar botón en el popup
    const btnFavorito = document.querySelector('.btn-favorito-popup');
    if (btnFavorito) {
        if (agregado) {
            btnFavorito.innerHTML = '❤️ Quitar de favoritos';
            btnFavorito.style.background = 'linear-gradient(135deg, #E91E63, #C2185B)';
            
            // Efecto de latido
            btnFavorito.style.animation = 'latido 0.5s ease';
            setTimeout(() => {
                btnFavorito.style.animation = '';
            }, 500);
            
            // Efecto de confeti (solo si se agregó)
            lanzarConfetiFavorito();
        } else {
            btnFavorito.innerHTML = '🤍 Agregar a favoritos';
            btnFavorito.style.background = 'linear-gradient(135deg, #9C27B0, #7B1FA2)';
        }
    }
};
    

// Notificación mini más discreta
function mostrarNotificacionMini(mensaje, tipo) {
    const notificacion = document.createElement('div');
    notificacion.style.cssText = `
        position: fixed;
        top: 70px;
        right: 20px;
        background: ${tipo === 'success' ? '#4CAF50' : '#9C27B0'};
        color: white;
        padding: 8px 15px;
        border-radius: 20px;
        font-size: 0.8rem;
        z-index: 9999;
        animation: slideInMini 0.3s ease, slideOutMini 0.3s ease 2s forwards;
    `;
    
    notificacion.textContent = mensaje;
    
    document.body.appendChild(notificacion);
    
    setTimeout(() => {
        if (notificacion.parentNode) {
            notificacion.parentNode.removeChild(notificacion);
        }
    }, 2000);
}

function lanzarConfetiFavorito() {
    const colores = ['#E91E63', '#9C27B0', '#2196F3', '#4CAF50', '#FF9800'];
    
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            const confeti = document.createElement('div');
            confeti.style.cssText = `
                position: fixed;
                width: 8px;
                height: 8px;
                background: ${colores[Math.floor(Math.random() * colores.length)]};
                border-radius: 50%;
                pointer-events: none;
                z-index: 9998;
                top: 80px;
                right: 90px;
                animation: confeti-favorito 1s ease-out forwards;
            `;
            
            document.body.appendChild(confeti);
            
            setTimeout(() => {
                if (confeti.parentNode) {
                    confeti.parentNode.removeChild(confeti);
                }
            }, 1000);
        }, i * 50);
    }
}

// ==================== FUNCIÓN MEJORADA PARA CERRAR POPUP ====================
// ==================== FUNCIÓN MEJORADA PARA CERRAR POPUP ====================
function cerrarPopup() {
    const popup = document.getElementById('popup-simple');
    if (popup) {
        // Verificar si el popup actual NO es de favoritos pero veníamos desde favoritos
        const esPopupFavoritos = popup.getAttribute('data-es-favoritos') === 'true';
        const veniaDeFavoritos = window.diaDesdeFavoritos === true;
        
        popup.style.animation = 'fadeOut 0.3s ease forwards';
        
        const savedPosition = parseInt(document.body.getAttribute('data-scroll-pos') || '0');
        
        setTimeout(() => {
            if (popup.parentNode) {
                popup.parentNode.removeChild(popup);
            }
            
            // Remover clase de bloqueo de scroll
            document.body.classList.remove('body-no-scroll', 'popup-abierto');
            
            // Restaurar estilos del body
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.width = '';
            document.body.style.height = '';
            document.body.style.overflow = '';
            
            setTimeout(() => {
                window.scrollTo({
                    top: savedPosition,
                    behavior: 'instant'
                });
                
                // Si NO es popup de favoritos pero veníamos desde favoritos, volver
                if (!esPopupFavoritos && veniaDeFavoritos) {
                    // Limpiar flag
                    window.diaDesdeFavoritos = false;
                    
                    // Esperar un poco y volver a mostrar favoritos
                    setTimeout(() => {
                        mostrarFavoritosPopup();
                    }, 300);
                }
                
            }, 10);
            
            // Limpiar atributo
            document.body.removeAttribute('data-scroll-pos');
            isPopupOpen = false;
            
        }, 300);
    }
}

// Hacer funciones disponibles globalmente
window.cerrarPopup = cerrarPopup;
window.mostrarContenidoAjustado = mostrarContenidoAjustado;
window.descargarFoto = descargarFoto;
window.generarNombreDescarga = generarNombreDescarga;
window.mostrarRazonAleatoria = mostrarRazonAleatoria;
// Función para abrir día desde favoritos
function abrirDiaDesdeFavoritos(numeroDia, fechaISO) {
    // Guardar que venimos desde favoritos
    sessionStorage.setItem('volverAFavoritos', 'true');
    
    const fecha = new Date(fechaISO);
    
    // Cerrar popup actual
    const popupActual = document.getElementById('popup-simple');
    if (popupActual) {
        popupActual.style.animation = 'fadeOut 0.3s ease forwards';
        setTimeout(() => {
            if (popupActual.parentNode) {
                popupActual.parentNode.removeChild(popupActual);
            }
            document.body.classList.remove('popup-abierto');
            document.body.style.overflow = 'auto';
            
            // Mostrar el día después de cerrar
            setTimeout(() => {
                mostrarContenidoAjustado(numeroDia, fecha);
            }, 100);
        }, 300);
    } else {
        // Si no hay popup, mostrar directamente
        mostrarContenidoAjustado(numeroDia, fecha);
    }
}
// Función auxiliar para restaurar scroll correctamente
function restaurarScrollDespuesDePopup() {
    const savedPosition = parseInt(document.body.getAttribute('data-scroll-pos') || '0');
    
    // Restaurar estilos del body
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    document.body.style.height = '';
    document.body.style.overflow = '';
    
    // Forzar un reflow para asegurar que los estilos se aplican
    document.body.offsetHeight;
    
    // Restaurar scroll
    window.scrollTo(0, savedPosition);
    
    // Limpiar atributos
    document.body.removeAttribute('data-scroll-pos');
}

// Manejar tecla Escape para cerrar popup
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && isPopupOpen) {
        cerrarPopup();
    }
});

// Manejar resize de ventana
window.addEventListener('resize', function() {
    if (isPopupOpen) {
        const popup = document.getElementById('popup-simple');
        if (popup) {
            // Asegurar que el popup se mantenga centrado
            const contenedor = document.getElementById('contenedor-popup');
            if (contenedor) {
                contenedor.style.maxHeight = `${window.innerHeight * 0.85}px`;
            }
        }
    }
});

// ============================================
// EXPORTAR FUNCIONES GLOBALES
// ============================================
window.mostrarRazonAleatoria = mostrarRazonAleatoria;
window.mostrarPalabraSecreta = mostrarPalabraSecreta;
window.actualizarEstadisticasAjustadas = actualizarEstadisticasAjustadas;
window.configurarBotonesBasicosAjustados = configurarBotonesBasicosAjustados;