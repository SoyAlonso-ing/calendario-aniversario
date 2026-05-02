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
        // Configurar triple clic en el emoji secreto
    const emojiSecreto = document.querySelector('.emoji-secreto');
    if (emojiSecreto) {
        emojiSecreto.addEventListener('click', iniciarContadorClicks);
        console.log("🎬 Emoji secreto configurado para triple clic");
    }

// Secreto de Carla Sariego - CARTA CON ESTILOS RESPONSIVOS CORREGIDOS
const carlaSpan = document.querySelector('.secreto-carla');
if (carlaSpan) {
    carlaSpan.addEventListener('click', function() {
        const contenidoUnico = `
            <style>
                @keyframes latido-carla {
                    0% { transform: scale(1); }
                    25% { transform: scale(1.1); }
                    50% { transform: scale(1.15); }
                    75% { transform: scale(1.1); }
                    100% { transform: scale(1); }
                }
                .carta-carla {
                    background: #fef9e7;
                    background-image: linear-gradient(145deg, #fef9e7 0%, #fdf5e6 100%);
                    border: 2px solid #d4b28c;
                    border-radius: 20px;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.2), inset 0 0 30px rgba(255,215,140,0.3);
                    padding: 25px 20px;
                    max-width: 500px;
                    margin: 0 auto;
                    position: relative;
                    text-align: center;
                }
                .carta-carla::before {
                    content: '';
                    position: absolute;
                    top: 10px;
                    left: 10px;
                    right: 10px;
                    bottom: 10px;
                    border: 1px dashed #e6c9a8;
                    border-radius: 15px;
                    pointer-events: none;
                }
                .corazon-carla {
                    font-size: 3rem;
                    display: inline-block;
                    animation: latido-carla 1.5s infinite ease-in-out;
                    color: #e63946;
                    text-shadow: 0 0 10px #ffb3b3;
                    margin-bottom: 10px;
                }
                .titulo-carla {
                    font-size: 1.6rem;
                    color: #b76e2e;
                    margin: 8px 0 5px;
                    font-weight: 700;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                    text-shadow: 1px 1px 0 #f3d9b1;
                    font-family: 'Poppins', sans-serif;
                }
                .subtitulo-carla {
                    font-size: 1rem;
                    color: #a1571e;
                    margin-bottom: 15px;
                    border-bottom: 1px solid #e6c9a8;
                    padding-bottom: 8px;
                    display: inline-block;
                    font-family: 'Poppins', sans-serif;
                }
                .detalle-carla {
                    display: flex;
                    justify-content: center;
                    flex-wrap: wrap;
                    gap: 10px;
                    margin: 15px 0 10px;
                    font-size: 0.8rem;
                    color: #b38b5d;
                }
                .detalle-carla span {
                    background: #f5e1c0;
                    padding: 4px 10px;
                    border-radius: 30px;
                    border: 1px solid #d4a373;
                    font-size: 0.75rem;
                }
                .mensaje-carla {
                    font-size: 0.85rem;
                    line-height: 1.55;
                    color: #5d3a1a;
                    text-align: left;
                    margin: 15px 0;
                    background: rgba(255, 235, 205, 0.5);
                    border-radius: 12px;
                    padding: 15px;
                    box-shadow: inset 0 0 10px #e6ccb2;
                    font-family: 'Georgia', 'Times New Roman', serif;
                }
                .mensaje-carla br {
                    display: block;
                    margin: 5px 0;
                }
                .firma-carla {
                    font-size: 1.3rem;
                    color: #8b5a2b;
                    margin-top: 15px;
                    font-weight: bold;
                    position: relative;
                    font-family: 'Dancing Script', cursive;
                }
                .firma-carla::after {
                    content: '✧';
                    font-size: 1.5rem;
                    color: #c49a6c;
                    margin-left: 8px;
                    opacity: 0.7;
                }
                .btn-cerrar-carla {
                    background: #b76e2e;
                    border: none;
                    color: white;
                    padding: 10px 25px;
                    border-radius: 40px;
                    font-size: 1rem;
                    font-family: 'Dancing Script', cursive;
                    font-weight: bold;
                    cursor: pointer;
                    margin-top: 15px;
                    box-shadow: 0 5px 15px rgba(183, 110, 46, 0.4);
                    transition: all 0.3s;
                    border: 1px solid #f5d5a0;
                }
                /* Estilos específicos para móvil */
                @media (max-width: 768px) {
                    .carta-carla { 
                        padding: 18px 15px; 
                    }
                    .titulo-carla { 
                        font-size: 1.3rem; 
                    }
                    .subtitulo-carla {
                        font-size: 0.9rem;
                    }
                    .mensaje-carla { 
                        font-size: 0.8rem; 
                        line-height: 1.5;
                        padding: 12px;
                    }
                    .firma-carla {
                        font-size: 1.1rem;
                    }
                    .detalle-carla span {
                        font-size: 0.7rem;
                        padding: 3px 8px;
                    }
                    .corazon-carla {
                        font-size: 2.5rem;
                    }
                }
                @media (max-width: 480px) {
                    .carta-carla { 
                        padding: 15px 12px; 
                    }
                    .titulo-carla { 
                        font-size: 1.2rem; 
                    }
                    .mensaje-carla { 
                        font-size: 0.75rem; 
                        line-height: 1.45;
                        padding: 10px;
                    }
                    .firma-carla {
                        font-size: 1rem;
                    }
                }
            </style>
            <div class="carta-carla">
                <div class="corazon-carla">💖</div>
                <div class="titulo-carla">Carla Sariego</div>
                <div class="subtitulo-carla">El nombre que lo cambió todo</div>
                <div class="detalle-carla">
                    <span>🎭 Habachela</span>
                    <span>💍 5 de julio</span>
                    <span>💫 Nacional</span>
                </div>
                <div class="mensaje-carla">
                    "Carla Sariego" no es solo un nombre.<br>
                    .Es la chica del vestido azul en el Don Cangrejo.<br>
                    .La que me escribió por Instagram lo del proyecto Habachela.<br>
                    .La que me recostó la cabeza en el hombro aquella noche.<br>
                    .La que respondió "No lo mires mucho, que eso es mío".<br>
                    .La del primer beso en el Nacional.<br>
                    .La que se tiró un peo cuando le pedí ser su novio.<br>
                    .La Tosquina del billar.<br>
                    .La que me roba los pullovers.<br>
                    .La que duerme calva a mi lado.<br>
                    .La que hizo un teatro de recuerdos el 14 de febrero.<br>
                    .La que me ayudó a cambiar el cuarto.<br>
                    .La que come dumplings y papitas de barbacoa.<br>
                    <br>
                    <strong>La que es mi Pochi. Te amo.</strong>
                </div>
                <div class="firma-carla">Siempre tuyo,</div>
                <div style="font-size: 1.2rem; color: #b76e2e; margin-top: 5px; font-family: 'Dancing Script', cursive;">El del beso en el Nacional</div>
            </div>
        `;
        
        mostrarPopupContenido(contenidoUnico, false, [], null, false);
    });
}
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
        const importancia = window.datosConfig.diasEspeciales[fechaKeyConAnio].importancia;
        elementoDia.classList.add(`importancia-${importancia || 'media'}`);
        elementoDia.title = window.datosConfig.diasEspeciales[fechaKeyConAnio].texto || 'Día especial';
        momentosDesbloqueados++;
    } 
    // Luego buscar sin año (fecha anual) - ¡AQUÍ FALTA AGREGAR LA CLASE DE IMPORTANCIA!
    else if (window.datosConfig.diasEspeciales[fechaKey]) {
        elementoDia.classList.add('tiene-contenido');
        // 👇 AÑADE ESTAS 2 LÍNEAS 👇
        const importancia = window.datosConfig.diasEspeciales[fechaKey].importancia;
        elementoDia.classList.add(`importancia-${importancia || 'baja'}`);
        // 👆 HASTA AQUÍ 👆
        elementoDia.title = window.datosConfig.diasEspeciales[fechaKey].texto || 'Día especial';
        momentosDesbloqueados++;
    }
}
            
            // Marcar días importantes
            
            // Día de inicio (5 abril 2025)
            if (dia === 5 && mes === 3 && año === 2025) {
                elementoDia.classList.add('dia-especial', 'inicio-especial');
                elementoDia.innerHTML = `<span class="numero-dia">${dia}</span><span class="estrella">🎉</span>`;

                
                
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
                elementoDia.classList.add('dia-especial', 'aniversario-especial');
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
    let videosArray = [];
    
    // Determinar la importancia del día para el estilo del popup
    let claseImportancia = '';
    let esInicio = false;
    let esAniversario = false;
    
    // ==================== 1. VERIFICAR SI ES EL ANIVERSARIO (2026-04-05) ====================
    if (dia === 5 && mes === 3 && año === 2026) {
        esAniversario = true;
        claseImportancia = 'popup-aniversario-especial';
        
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
            videosArray = datoAniversario.videos || [];
        } else if (datoAniversario && datoAniversario.tipo === "foto") {
            tieneFotos = true;
            fotosArray = [{
                url: datoAniversario.contenido,
                texto: datoAniversario.texto || 'Foto especial',
                descripcion: datoAniversario.texto || ''
            }];
        }
        
        // HTML especial para aniversario
        if ((tieneFotos && fotosArray.length > 0) || (videosArray && videosArray.length > 0)) {
            contenidoHTML = crearHTMLGaleria(numeroDia, fecha, fotosArray, mensajesArray, videosArray, true);
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
        esInicio = true;
        claseImportancia = 'popup-inicio-especial';
        
        let datoInicio = null;
        let videosArray = [];
        if (window.datosConfig && window.datosConfig.diasEspeciales) {
            datoInicio = window.datosConfig.diasEspeciales[fechaKeyConAnio] || 
                        window.datosConfig.diasEspeciales[fechaKey];
        }
        
        // Configurar para galería
        if (datoInicio && datoInicio.tipo === "galeria") {
            tieneFotos = true;
            fotosArray = datoInicio.fotos || [];
            mensajesArray = datoInicio.mensajes || [];
            videosArray = datoInicio.videos || [];
        } else if (datoInicio && datoInicio.tipo === "foto") {
            tieneFotos = true;
            fotosArray = [{
                url: datoInicio.contenido,
                texto: datoInicio.texto || 'Foto especial',
                descripcion: datoInicio.texto || ''
            }];
        }
        
        // HTML para día de inicio con galería
       if ((tieneFotos && fotosArray.length > 0) || (videosArray && videosArray.length > 0)) {
            contenidoHTML = crearHTMLGaleria(numeroDia, fecha, fotosArray, mensajesArray, videosArray, false);
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
            // Asignar clase de importancia según el dato
            if (dato.importancia) {
                switch(dato.importancia) {
                    case 'baja':
                        claseImportancia = 'popup-importancia-baja';
                        break;
                    case 'media':
                        claseImportancia = 'popup-importancia-media';
                        break;
                    case 'alta':
                        claseImportancia = 'popup-importancia-alta';
                        break;
                    default:
                        claseImportancia = 'popup-importancia-baja';
                }
            } else {
                claseImportancia = 'popup-importancia-baja';
            }
            
            let videosArray = [];
            // Configurar para galería
            if (dato.tipo === "galeria") {
                tieneFotos = true;
                fotosArray = dato.fotos || [];
                mensajesArray = dato.mensajes || [];
                videosArray = dato.videos || [];
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
            if ((tieneFotos && fotosArray.length > 0) || (videosArray && videosArray.length > 0)) {
                contenidoHTML = crearHTMLGaleria(numeroDia, fecha, fotosArray, mensajesArray, videosArray, false);
                lanzarEfectosEspeciales();
            }
            
// CARTA SECRETA PARA EL 5 DE JULIO - OJO PEQUEÑO PEGADO AL BORDE DERECHO
if (fechaKey === "07-05" && dato.cartaTexto) {
    const textoEscapado = dato.cartaTexto.replace(/'/g, "\\'").replace(/"/g, '&quot;');
    const cartaHTML = `
        <div style="
            text-align: right;
            margin-right: -15px;
            margin-top: -10px;
            margin-bottom: 0px;
            position: relative;
        ">
            <span style="
                cursor: pointer; 
                font-size: 1rem; 
                opacity: 0.5; 
                transition: opacity 0.2s, transform 0.2s; 
                display: inline-block;
                line-height: 1;
                padding: 2px 5px;
            " 
                  onclick="mostrarCartaSecretaDirecta('${textoEscapado}')"
                  onmouseover="this.style.opacity='0.8'; this.style.transform='scale(1.05)'" 
                  onmouseout="this.style.opacity='0.5'; this.style.transform='scale(1)'"
                  title="📜 Carta secreta">
                👁️
            </span>
        </div>
    `;
    // Insertar la carta ANTES del contenido
    contenidoHTML = cartaHTML + contenidoHTML;
}
        } else {
            // No es día especial, asignar clase baja por defecto
            claseImportancia = 'popup-importancia-baja';
        }
    }
    
    // ==================== 4. SI NO ES ESPECIAL, MOSTRAR FRASE GENÉRICA ====================
    if (!contenidoHTML) {
        claseImportancia = 'popup-importancia-baja';
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
        
        tieneFotos = false;
        fotosArray = [];
    }

    // ==================== 5. MOSTRAR EL CONTENIDO ====================
    if (contenidoHTML && contenidoHTML.trim() !== '') {
        if (numeroDia) {
            sessionStorage.removeItem('volverAFavoritos');
        }
        const botonFavorito = agregarBotonFavoritoPopup(numeroDia, fecha);
        contenidoHTML += botonFavorito;
        mostrarPopupContenido(contenidoHTML, tieneFotos, fotosArray, fecha, false, claseImportancia);
    } else {
        console.error("❌ Error: contenidoHTML está vacío o indefinido");
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
        mostrarPopupContenido(contenidoError, false, [], fecha, false, 'popup-importancia-baja');
    }
}


// ==================== FUNCIÓN PARA CERRAR POPUP DE FAVORITOS ====================
function cerrarPopupFavoritos() {
    sessionStorage.removeItem('volverAFavoritos'); // Limpiar flag
    cerrarPopup(); // Usar la función normal
}

function crearHTMLGaleria(numeroDia, fecha, fotosArray, mensajesArray, videosArray = [], esAniversario = false) {
    const mes = fecha.getMonth();
    const dia = fecha.getDate();
    const año = fecha.getFullYear();
    const titulo = `Día ${numeroDia} - ${dia} de ${MESES[mes]} ${año}`;

    // Combinar fotos y videos en un solo array multimedia con tipo
    const multimediaArray = [
        ...fotosArray.map(foto => ({ ...foto, tipo: 'imagen' })),
        ...videosArray.map(video => ({ ...video, tipo: 'video' }))
    ];

    const totalElementos = multimediaArray.length;

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
        <div class="foto-principal-container-horizontal" data-multimedia='${JSON.stringify(multimediaArray)}'>
            <div class="carousel-track">
                ${multimediaArray.map((item, index) => `
                    <div class="carousel-slide ${index === 0 ? 'active' : ''}">
                        <div class="slide-image-container">
                            ${item.tipo === 'imagen' ? `
                                <img src="${item.url}" 
                                     alt="${item.texto || 'Nuestro recuerdo'}" 
                                     class="slide-image"
                                     loading="lazy">
                            ` : `
                                <video src="${item.url}" 
                                       class="slide-video" 
                                       controls 
                                       preload="metadata">
                                    Tu navegador no soporta el elemento de video.
                                </video>
                            `}
                        </div>
                        <div class="slide-text">
                            <h4>${item.texto || (item.tipo === 'imagen' ? 'Nuestra foto' : 'Nuestro video')}</h4>
                            ${item.descripcion ? `<p>${item.descripcion}</p>` : ''}
                        </div>
                    </div>
                `).join('')}
            </div>
            
            <!-- Botones de navegación -->
            <button class="btn-carrusel-horizontal btn-anterior-horizontal">
                <i class="fas fa-chevron-left"></i>
            </button>
            <button class="btn-carrusel-horizontal btn-siguiente-horizontal">
                <i class="fas fa-chevron-right"></i>
            </button>
            
            <!-- Contador de posición -->
            <div class="carousel-counter">
                <span class="current-slide">1</span>
                <span class="total-slides"> / ${totalElementos}</span>
            </div>
        </div>

<!-- BOTÓN DE DESCARGA (para imágenes y videos) -->
<button class="btn-descarga-individual" 
        style="
            margin: 20px auto;
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
            width: fit-content;
            box-shadow: 0 4px 15px rgba(76, 175, 80, 0.3);
        ">
    <i class="fas fa-download"></i>
    <span class="btn-descarga-texto">Descargando...</span>
</button>

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
    `;
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
function generarNombreDescarga(fecha, texto, tipo = 'imagen') {
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

    // CAMBIO: Extensión diferente para foto vs video
    const extension = tipo === 'video' ? '.mp4' : '.jpg';
    return `${nombreBase}${extension}`;
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

// ==================== FUNCIÓN PARA DESCARGAR VIDEOS ====================
function descargarVideo(urlVideo, nombreArchivo = 'video-especial.mp4') {
    console.log(`📥 Intentando descargar video: ${urlVideo} como ${nombreArchivo}`);
    
    mostrarNotificacion('Preparando descarga del video...', 'info');

    const link = document.createElement('a');
    link.href = urlVideo;
    link.download = nombreArchivo;
    link.target = '_blank';
    link.setAttribute('download', nombreArchivo);

    if (typeof link.download === 'undefined') {
        link.target = '_blank';
        mostrarNotificacion('El video se abrirá en una nueva pestaña. Mantén presionado para guardarlo.', 'info');
    }

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
        mostrarNotificacion('¡Video descargado! 🎬', 'success');
        console.log(`✅ Descarga de video iniciada: ${nombreArchivo}`);
    }, 500);

    setTimeout(() => {
        const esMovil = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        if (esMovil) {
            mostrarNotificacion('Si no se descargó, mantén presionado el video y selecciona "Guardar video"', 'info');
        }
    }, 3000);
}

// ==================== FUNCIÓN PARA MOSTRAR POPUP - VERSIÓN RESPONSIVE ====================
function mostrarPopupContenido(contenidoHTML, tieneFoto = false, fotosArray = [], fecha = null, esFavoritos = false, claseImportancia = '') {
    // Guardar posición del scroll
    scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    isPopupOpen = true;
    document.body.setAttribute('data-scroll-pos', scrollPosition);

    // Bloquear scroll de manera efectiva
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollPosition}px`;
    document.body.style.width = '100%';
    document.body.style.overflow = 'hidden';

    // Cerrar popup anterior si existe
    const popupAnterior = document.getElementById('popup-simple');
    if (popupAnterior) popupAnterior.remove();

    // Botón de cerrar
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

    // Crear popup con estructura responsive
    const popup = document.createElement('div');
    popup.id = 'popup-simple';
    
    // Agregar clase de importancia si existe
    if (claseImportancia) {
        popup.classList.add(claseImportancia);
    }
    
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
        box-sizing: border-box;
    `;

    popup.innerHTML = `
        <div style="
            background: white;
            padding: 20px;
            border-radius: 15px;
            max-width: 550px;
            width: 95%;
            max-height: 95vh;
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;
            text-align: center;
            position: relative;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
            animation: slideUp 0.4s ease;
            box-sizing: border-box;
        " id="contenedor-popup">
            ${contenidoHTML}
            ${botonCerrarHTML}
        </div>
        
        <style>
            @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
            @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
            
            /* Scroll suave dentro del popup */
            #contenedor-popup::-webkit-scrollbar { width: 6px; }
            #contenedor-popup::-webkit-scrollbar-track { background: #f1f1f1; border-radius: 3px; }
            #contenedor-popup::-webkit-scrollbar-thumb { background: #9C27B0; border-radius: 3px; }
            
            /* Asegurar que las imágenes no se desborden */
            #contenedor-popup img, 
            #contenedor-popup video {
                max-width: 100%;
                height: auto;
                display: block;
            }
        </style>
    `;

    document.body.classList.add('popup-abierto');
    document.body.appendChild(popup);

    if (esFavoritos) {
        popup.setAttribute('data-es-favoritos', 'true');
    }

    // Configurar carousel DESPUÉS de que el DOM esté listo
    setTimeout(() => {
        const contenedorGaleria = popup.querySelector('.contenedor-galeria');
        if (contenedorGaleria && fecha) {
            contenedorGaleria.setAttribute('data-fecha', fecha.toISOString());
        }
        
        const carouselContainer = popup.querySelector('.foto-principal-container-horizontal');
        if (carouselContainer) {
            const multimediaData = JSON.parse(carouselContainer.getAttribute('data-multimedia') || '[]');
            configurarCarouselHorizontal(carouselContainer, multimediaData);
            
            // FORZAR recálculo de dimensiones para móvil
            if (window.innerWidth <= 768) {
                setTimeout(() => {
                    window.dispatchEvent(new Event('resize'));
                }, 100);
            }
        }
    }, 100);
}

function mostrarPopupPersonalizado(contenidoHTML, claseAdicional = '') {

      // Guardar posición del scroll
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    document.body.setAttribute('data-scroll-pos', scrollPosition);
    
    // Bloquear scroll de manera efectiva
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollPosition}px`;
    document.body.style.width = '100%';
    document.body.style.overflow = 'hidden';
    // Cerrar popup anterior si existe
    const popupAnterior = document.getElementById('popup-personalizado');
    if (popupAnterior) popupAnterior.remove();

    const popup = document.createElement('div');
    popup.id = 'popup-personalizado';
    popup.className = claseAdicional;
    popup.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.95);
        z-index: 10000;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px;
        overflow: auto;
    `;

    const contenedor = document.createElement('div');
    contenedor.style.cssText = `
        background: white;
        border-radius: 20px;
        width: 95%;
        max-width: 1400px;
        height: 95vh;
        overflow: hidden;
        display: flex;
        flex-direction: column;
    `;
    contenedor.innerHTML = contenidoHTML;

    popup.appendChild(contenedor);
    document.body.appendChild(popup);
    document.body.style.overflow = 'hidden';
}

function cerrarPopupPersonalizado() {
    const popup = document.getElementById('popup-personalizado');
    if (popup) {
        popup.style.animation = 'fadeOut 0.3s ease forwards';
        setTimeout(() => {
            if (popup.parentNode) popup.parentNode.removeChild(popup);
            
            // Restaurar estilos del body
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.width = '';
            document.body.style.overflow = '';
            
            // Restaurar scroll
            const savedPosition = parseInt(document.body.getAttribute('data-scroll-pos') || '0');
            window.scrollTo(0, savedPosition);
            document.body.removeAttribute('data-scroll-pos');
            
            // Eliminar cualquier popup residual (por si acaso)
            const popupSimple = document.getElementById('popup-simple');
            if (popupSimple) popupSimple.remove();
        }, 300);
    }
}
function configurarCarouselHorizontal(contenedorCarousel, multimediaArray) {
    if (!contenedorCarousel || !multimediaArray.length) return;
    
    console.log("🎠 Configurando carrusel horizontal con", multimediaArray.length, "elementos");
    
    // Obtener elementos del DOM
    const track = contenedorCarousel.querySelector('.carousel-track');
    const slides = contenedorCarousel.querySelectorAll('.carousel-slide');
    const btnAnterior = contenedorCarousel.querySelector('.btn-anterior-horizontal');
    const btnSiguiente = contenedorCarousel.querySelector('.btn-siguiente-horizontal');
    const currentSlideElement = contenedorCarousel.querySelector('.current-slide');
    const popup = document.getElementById('popup-simple');
    const btnDescargaIndividual = popup ? popup.querySelector('.btn-descarga-individual') : null;
    
    const contenedorGaleria = contenedorCarousel.closest('.contenedor-galeria');

    let slideActual = 0;
    const totalSlides = slides.length;

    // Función para obtener el ancho del contenedor
    function getContainerWidth() {
        return contenedorCarousel.offsetWidth;
    }

    // Función para actualizar la posición del carrusel
    function actualizarPosicion() {
        const containerWidth = getContainerWidth();
        const desplazamiento = slideActual * containerWidth;
        track.style.transform = `translateX(-${desplazamiento}px)`;
        
        console.log(`📍 Slide ${slideActual + 1}/${totalSlides}, desplazamiento: ${desplazamiento}px`);
        
        // Actualizar clases active en TODOS los slides
        slides.forEach((slide, index) => {
            slide.classList.remove('active', 'prev', 'next');
            
            if (index === slideActual) {
                slide.classList.add('active');
                
                // Reproducir video si es el slide activo
                const video = slide.querySelector('video');
                if (video) {
                    video.play().catch(e => console.log("Video autoplay bloqueado"));
                }
            } else if (index === slideActual - 1) {
                slide.classList.add('prev');
            } else if (index === slideActual + 1) {
                slide.classList.add('next');
            }
            
            // Pausar videos que no son activos
            if (index !== slideActual) {
                const video = slide.querySelector('video');
                if (video) video.pause();
            }
        });
        
        // Actualizar contador
        if (currentSlideElement) {
            currentSlideElement.textContent = slideActual + 1;
        }
        
        // Actualizar botones de navegación
        if (btnAnterior) {
            btnAnterior.disabled = slideActual === 0;
            btnAnterior.style.opacity = slideActual === 0 ? '0.3' : '1';
            btnAnterior.style.cursor = slideActual === 0 ? 'not-allowed' : 'pointer';
        }
        
        if (btnSiguiente) {
            btnSiguiente.disabled = slideActual === totalSlides - 1;
            btnSiguiente.style.opacity = slideActual === totalSlides - 1 ? '0.3' : '1';
            btnSiguiente.style.cursor = slideActual === totalSlides - 1 ? 'not-allowed' : 'pointer';
        }
        
        // Actualizar botón de descarga
        actualizarBotonDescarga();
    }

    // Función para actualizar el botón de descarga
    function actualizarBotonDescarga() {
        if (!btnDescargaIndividual) return;
        
        const elementoActual = multimediaArray[slideActual];
        const fechaAttr = contenedorGaleria?.getAttribute('data-fecha');
        const fecha = fechaAttr ? new Date(fechaAttr) : new Date();
        
        btnDescargaIndividual.style.display = 'flex';
        
        btnDescargaIndividual.onclick = function() {
            const nombreArchivo = generarNombreDescarga(fecha, elementoActual.texto || '', elementoActual.tipo);
            if (elementoActual.tipo === 'imagen') {
                descargarFoto(elementoActual.url, nombreArchivo);
            } else {
                descargarVideo(elementoActual.url, nombreArchivo);
            }
        };
        
        const textoBtn = btnDescargaIndividual.querySelector('.btn-descarga-texto');
        if (textoBtn) {
            if (elementoActual.tipo === 'imagen') {
                textoBtn.textContent = `Descargar esta foto (${slideActual + 1}/${totalSlides})`;
            } else {
                textoBtn.textContent = `Descargar este video (${slideActual + 1}/${totalSlides})`;
            }
        }
    }

    // Configurar eventos de navegación con FLECHAS
    if (btnAnterior) {
        // Eliminar eventos anteriores
        const nuevoBtnAnterior = btnAnterior.cloneNode(true);
        btnAnterior.parentNode.replaceChild(nuevoBtnAnterior, btnAnterior);
        
        nuevoBtnAnterior.onclick = function(e) {
            e.stopPropagation();
            if (slideActual > 0) {
                slideActual--;
                actualizarPosicion();
            }
        };
    }

    if (btnSiguiente) {
        // Eliminar eventos anteriores
        const nuevoBtnSiguiente = btnSiguiente.cloneNode(true);
        btnSiguiente.parentNode.replaceChild(nuevoBtnSiguiente, btnSiguiente);
        
        nuevoBtnSiguiente.onclick = function(e) {
            e.stopPropagation();
            if (slideActual < totalSlides - 1) {
                slideActual++;
                actualizarPosicion();
            }
        };
    }

    // ========== SOLO BLOQUEAR SWIPE, PERO PERMITIR CLIC EN IMÁGENES ==========
    // Bloquear eventos táctiles SOLO para prevenir swipe, pero NO para los clics
    
    let touchStartX = 0;
    let touchStartY = 0;
    let touchMoved = false;
    
    const handleTouchStart = function(e) {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
        touchMoved = false;
    };
    
    const handleTouchMove = function(e) {
        const touchEndX = e.touches[0].clientX;
        const touchEndY = e.touches[0].clientY;
        const diffX = Math.abs(touchEndX - touchStartX);
        const diffY = Math.abs(touchEndY - touchStartY);
        
        // Si el movimiento es principalmente horizontal (swipe)
        if (diffX > diffY && diffX > 15) {
            touchMoved = true;
            e.preventDefault(); // Prevenir el swipe/arrastre
            return false;
        }
    };
    
    const handleTouchEnd = function(e) {
        // No hacemos nada aquí, solo reseteamos
        touchStartX = 0;
        touchStartY = 0;
        // No prevenir el evento para que los clics funcionen
    };
    
    // IMPORTANTE: Agregar eventos SOLO para prevenir swipe, pero no bloquear clics
    contenedorCarousel.addEventListener('touchstart', handleTouchStart, { passive: false });
    contenedorCarousel.addEventListener('touchmove', handleTouchMove, { passive: false });
    contenedorCarousel.addEventListener('touchend', handleTouchEnd);
    
    // ========== CONFIGURAR ZOOM EN IMÁGENES (CORREGIDO PARA MÓVIL) ==========
    slides.forEach((slide, index) => {
        // Buscar imagen dentro del slide
        const img = slide.querySelector('.slide-image');
        if (img) {
            // Limpiar eventos anteriores clonando
            const nuevaImg = img.cloneNode(true);
            img.parentNode.replaceChild(nuevaImg, img);
            
            // Agregar evento para clic (mouse y touch)
            nuevaImg.addEventListener('click', function(e) {
                e.stopPropagation();
                e.preventDefault();
                console.log("🔍 Abriendo zoom de imagen:", this.src);
                abrirZoomImagen(this.src);
            });
            
            // Para móviles, asegurar que el touch también funcione
            nuevaImg.addEventListener('touchstart', function(e) {
                // No prevenir para que el click funcione
                e.stopPropagation();
            });
            
            nuevaImg.addEventListener('touchend', function(e) {
                e.stopPropagation();
                e.preventDefault();
                console.log("🔍 Touch end - abriendo zoom");
                abrirZoomImagen(this.src);
            });
        }
        
        // Opcional: para videos, pantalla completa
        const video = slide.querySelector('.slide-video');
        if (video) {
            const nuevoVideo = video.cloneNode(true);
            video.parentNode.replaceChild(nuevoVideo, video);
            
            nuevoVideo.addEventListener('click', function(e) {
                e.stopPropagation();
                if (this.requestFullscreen) {
                    this.requestFullscreen();
                }
            });
        }
    });

    // Configurar teclado (solo flechas)
    const keydownHandler = function(e) {
        if (!document.getElementById('popup-simple')) return;
        if (!document.getElementById('popup-simple').contains(contenedorCarousel)) return;
        
        if (e.key === 'ArrowLeft') {
            e.preventDefault();
            if (slideActual > 0) {
                slideActual--;
                actualizarPosicion();
            }
        } else if (e.key === 'ArrowRight') {
            e.preventDefault();
            if (slideActual < totalSlides - 1) {
                slideActual++;
                actualizarPosicion();
            }
        }
    };
    
    document.removeEventListener('keydown', keydownHandler);
    document.addEventListener('keydown', keydownHandler);
    
    // Agregar listener para redimensionamiento de ventana
    window.addEventListener('resize', function() {
        actualizarPosicion();
    });

    // Inicializar posición
    actualizarPosicion();

    console.log("✅ Carrusel configurado: SOLO flechas para cambiar, ZOOM al tocar imagen");
}

// ==================== FUNCIÓN PARA ZOOM DE IMÁGENES ====================
function abrirZoomImagen(src) {
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.95);
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: zoom-out;
        animation: fadeIn 0.3s ease;
    `;
    
    const img = document.createElement('img');
    img.src = src;
    img.style.cssText = `
        max-width: 90%;
        max-height: 90%;
        object-fit: contain;
        border-radius: 8px;
        box-shadow: 0 25px 60px rgba(0, 0, 0, 0.8);
        border: 10px solid white;
        animation: zoomIn 0.3s ease;
    `;
    
    overlay.appendChild(img);
    document.body.appendChild(overlay);
    
    // Cerrar al hacer click
    overlay.addEventListener('click', function() {
        overlay.style.animation = 'fadeIn 0.3s ease reverse';
        setTimeout(() => {
            if (overlay.parentNode) {
                overlay.parentNode.removeChild(overlay);
            }
        }, 300);
    });
    
    // Cerrar con Escape
    const closeOnEscape = function(e) {
        if (e.key === 'Escape') {
            overlay.click();
            document.removeEventListener('keydown', closeOnEscape);
        }
    };
    document.addEventListener('keydown', closeOnEscape);
}

// ==================== FUNCIÓN PARA ZOOM DE IMÁGENES ====================
function abrirZoomImagen(src) {
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.95);
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: zoom-out;
        animation: fadeIn 0.3s ease;
    `;
    
    const img = document.createElement('img');
    img.src = src;
    img.style.cssText = `
        max-width: 90%;
        max-height: 90%;
        object-fit: contain;
        border-radius: 8px;
        box-shadow: 0 25px 60px rgba(0, 0, 0, 0.8);
        border: 10px solid white;
        animation: zoomIn 0.3s ease;
    `;
    
    overlay.appendChild(img);
    document.body.appendChild(overlay);
    
    // Cerrar al hacer click
    overlay.addEventListener('click', function() {
        overlay.style.animation = 'fadeIn 0.3s ease reverse';
        setTimeout(() => {
            if (overlay.parentNode) {
                overlay.parentNode.removeChild(overlay);
            }
        }, 300);
    });
    
    // Cerrar con Escape
    const closeOnEscape = function(e) {
        if (e.key === 'Escape') {
            overlay.click();
            document.removeEventListener('keydown', closeOnEscape);
        }
    };
    document.addEventListener('keydown', closeOnEscape);
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

// Configurar estadística de rompecabezas como clickeable
const estadisticaRompecabezas = document.querySelector('.estadistica-item:nth-child(4)');
if (estadisticaRompecabezas) {
    estadisticaRompecabezas.style.cursor = 'pointer';
    estadisticaRompecabezas.title = "Haz clic para jugar rompecabezas";
    
    estadisticaRompecabezas.addEventListener('click', function() {
         mostrarPuzzlePantallaCompleta();
    });
    
    // Actualizar contador inicial
    actualizarContadorRompecabezas();
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
        padding: 20px;
        box-sizing: border-box;
    `;
    
    // Función para actualizar el contenido del popup
    function actualizarPopup() {
        const palabraSecreta = palabras[currentIndex];
        
        popup.innerHTML = `
            <!-- Contenedor interno con pointer-events: auto -->
            <div id="contenido-popup" style="
                width: 100%;
                height: 100%;
                pointer-events: auto;
            ">
                <!-- Icono decorativo -->
                <div style="
                    width: 70px;
                    height: 70px;
                    background: linear-gradient(135deg, #9C27B0, #7B1FA2);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 auto 20px;
                    box-shadow: 0 8px 20px rgba(156, 39, 176, 0.3);
                ">
                    <i class="fas fa-book" style="font-size: 2.4rem; color: white;"></i>
                </div>
                
                <!-- Título -->
                <h3 style="
                    font-family: 'Poppins', sans-serif;
                    font-size: 1.2rem;
                    color: #333;
                    margin-bottom: 20px;
                    font-weight: 600;
                    letter-spacing: 0.5px;
                ">
                    Nuestro Diccionario Secreto
                </h3>
                
                <!-- Contenedor de la palabra - CLICKEABLE -->
                <div id="contenedor-palabra" style="
                    background: linear-gradient(135deg, #f8f9fa, #e9ecef);
                    border-radius: 12px;
                    padding: 20px;
                    margin-bottom: 20px;
                    border: 1px solid rgba(0, 0, 0, 0.05);
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
                    cursor: pointer;
                    transition: transform 0.2s ease, background 0.3s ease;
                " onmouseenter="this.style.transform='translateY(-2px)'; this.style.background='linear-gradient(135deg, #f0f2f5, #e3e6ea)';"
                onmouseleave="this.style.transform=''; this.style.background='linear-gradient(135deg, #f8f9fa, #e9ecef)';">
                    <!-- Palabra -->
                    <div style="
                        font-family: 'Poppins', sans-serif;
                        font-size: 1.8rem;
                        font-weight: 700;
                        color: #9C27B0;
                        margin-bottom: 12px;
                        letter-spacing: 1px;
                    ">
                        "${palabraSecreta.palabra}"
                    </div>
                    
                    <!-- Separador sutil -->
                    <div style="
                        width: 50px;
                        height: 2px;
                        background: linear-gradient(90deg, transparent, #9C27B0, transparent);
                        margin: 12px auto;
                    "></div>
                    
                    <!-- Significado -->
                    <div style="
                        font-family: 'Poppins', sans-serif;
                        font-size: 1rem;
                        line-height: 1.5;
                        color: #555;
                        font-style: italic;
                        padding-top: 8px;
                    ">
                        ${palabraSecreta.significado}
                    </div>
                </div>
                
                <!-- Contador -->
                <div style="
                    font-family: 'Poppins', sans-serif;
                    font-size: 0.85rem;
                    color: #999;
                    margin-top: 12px;
                ">
                    Palabra #${currentIndex + 1} de ${palabras.length}
                </div>
                
                <!-- Instrucción sutil -->
                <div style="
                    font-family: 'Poppins', sans-serif;
                    font-size: 0.75rem;
                    color: #bbb;
                    margin-top: 8px;
                    font-style: italic;
                ">
                    Toca la tarjeta para ver otra palabra
                </div>
                
                <!-- Botón de cerrar -->
                <button id="btn-cerrar-palabra-secreta" style="
                    margin-top: 20px;
                    background: linear-gradient(135deg, #9C27B0, #7B1FA2);
                    color: white;
                    border: none;
                    padding: 12px 30px;
                    border-radius: 25px;
                    cursor: pointer;
                    font-family: 'Poppins', sans-serif;
                    font-size: 0.9rem;
                    font-weight: 600;
                    letter-spacing: 0.5px;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 15px rgba(156, 39, 176, 0.3);
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    width: 100%;
                    justify-content: center;
                    max-width: 200px;
                " onmouseenter="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 20px rgba(156, 39, 176, 0.4)';"
                onmouseleave="this.style.transform=''; this.style.boxShadow='0 4px 15px rgba(156, 39, 176, 0.3)';">
                    <i class="fas fa-times"></i>
                    Cerrar
                </button>
            </div>
        `;
        
        // Reasignar el event listener al botón de cerrar
        const btnCerrar = popup.querySelector('#btn-cerrar-palabra-secreta');
        btnCerrar.addEventListener('click', function(e) {
            e.stopPropagation();
            cerrarPopupPalabraSecreta();
        });
        
        // Event listener para el contenedor de palabra
        const contenedorPalabra = popup.querySelector('#contenedor-palabra');
        contenedorPalabra.addEventListener('click', function(e) {
            e.stopPropagation();
            cambiarPalabra();
        });
    }
    
    // Función para cambiar de palabra
    function cambiarPalabra() {
        // Cambiar a una nueva palabra aleatoria (diferente a la actual)
        currentIndex = obtenerNuevaPalabraAleatoria();
        actualizarPopup();
        
        console.log(`📚 Nueva palabra secreta: "${palabras[currentIndex].palabra}"`);
    }
    
    // Crear popup elegante y básico
    const popup = document.createElement('div');
    popup.id = 'popup-palabra-secreta';
    popup.style.cssText = `
        background: white;
        border-radius: 20px;
        max-width: 500px;
        width: 100%;
        text-align: center;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        animation: slideUpPopup 0.4s ease;
        cursor: default;
        position: relative;
        border: 1px solid rgba(0, 0, 0, 0.1);
        pointer-events: auto;
        overflow: hidden;
    `;
    
    // Estilos responsive para el popup
    const responsiveStyles = `
        @media (max-width: 768px) {
            #popup-palabra-secreta {
                border-radius: 16px;
                width: calc(100% - 40px);
                max-width: 400px;
                padding: 30px 20px;
            }
            
            #contenedor-palabra {
                padding: 15px !important;
            }
            
            #contenedor-palabra > div:first-child {
                font-size: 1.6rem !important;
            }
            
            #contenedor-palabra > div:last-child {
                font-size: 0.95rem !important;
            }
        }
        
        @media (max-width: 480px) {
            #popup-palabra-secreta {
                border-radius: 12px;
                width: calc(100% - 30px);
                padding: 20px 15px;
            }
            
            #popup-palabra-secreta h3 {
                font-size: 1.1rem !important;
                margin-bottom: 15px !important;
            }
            
            #contenedor-palabra {
                padding: 12px !important;
            }
            
            #contenedor-palabra > div:first-child {
                font-size: 1.4rem !important;
                margin-bottom: 10px !important;
            }
            
            #contenedor-palabra > div:last-child {
                font-size: 0.9rem !important;
            }
            
            #btn-cerrar-palabra-secreta {
                padding: 10px 20px !important;
                font-size: 0.85rem !important;
            }
        }
        
        @media (max-height: 600px) {
            #popup-palabra-secreta {
                max-height: 90vh;
                overflow-y: auto;
            }
        }
    `;
    
    // GUARDAR POSICIÓN DEL SCROLL ANTES DE ABRIR EL POPUP
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    document.body.setAttribute('data-scroll-pos', scrollY);
    
    // Inicializar el contenido del popup
    actualizarPopup();
    
    // Agregar popup al overlay
    overlay.appendChild(popup);
    
    // Evento para cambiar palabra al hacer clic en el overlay (pero no en el popup)
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
            ${responsiveStyles}
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
    
    // Calcular días totales del primer año (366 días)
    const totalDiasPrimerAnio = Math.floor((FECHA_FIN - FECHA_INICIO) / (1000 * 60 * 60 * 24));
    
    // Calcular días desde el inicio hasta hoy (sin límite)
    const hoy = new Date();
    let diasTotales = 0;
    
    if (hoy >= FECHA_INICIO) {
        // Calcular días transcurridos desde el inicio (5/4/2025)
        const inicioPuro = new Date(2025, 3, 5); // 5 abril 2025
        const hoyPuro = new Date(hoy.getFullYear(), hoy.getMonth(), hoy.getDate());
        const diffMs = hoyPuro - inicioPuro;
        diasTotales = Math.floor(diffMs / (1000 * 60 * 60 * 24)) + 1; // +1 porque el día 1 es el inicio
    }
    
    // Asegurar que no sea negativo
    if (diasTotales < 0) diasTotales = 0;
    
    // Actualizar contador de días juntos (SIN LÍMITE, sigue contando)
    const diasJuntosElement = document.getElementById('dias-juntos');
    if (diasJuntosElement) {
        diasJuntosElement.textContent = diasTotales;
        
        // Cambiar color si ya pasó el aniversario (opcional)
        if (diasTotales > totalDiasPrimerAnio) {
            diasJuntosElement.style.color = '#9C27B0'; // Color naranja para días extra
            diasJuntosElement.title = `¡${diasTotales - totalDiasPrimerAnio} días más allá del primer aniversario! 💪💘`;
        } else {
            diasJuntosElement.style.color = '#9C27B0';
            diasJuntosElement.title = "Contando cada día desde que empezó todo";
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
        contadorPalabras.style.color = '#3752ca';
    }
    
    actualizarContadorRompecabezas();
    console.log(`📊 Estadísticas actualizadas: ${diasTotales} días totales (primer año: ${totalDiasPrimerAnio} días)`);
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
        if (diasFavoritos.length > -1) {
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

// ==================== SISTEMA DE ROMPECABEZAS CORREGIDO ====================
let puzzleGame = {
    activo: false,
    fotoSeleccionada: null,
    dificultad: 3,
    piezas: [],
    piezasCorrectas: 0,
    timer: null,
    segundos: 0,
    piezaSeleccionada: null,
    historial: JSON.parse(localStorage.getItem('rompecabezasCompletados')) || []
};

// ==================== FUNCIÓN PARA MOSTRAR ROMPECABEZAS ====================
function mostrarRompecabezas() {
    console.log("🧩 Abriendo rompecabezas...");
    
    const fotosDisponibles = obtenerFotosParaPuzzle();
    const fotosParaMostrar = seleccionar3FotosAleatorias(fotosDisponibles);
    
    // Guardar fotos en el objeto del juego
    puzzleGame.fotosDisponibles = fotosParaMostrar;
    puzzleGame.fotoSeleccionada = fotosParaMostrar[0];
    
    let contenidoHTML = `
        <div class="puzzle-container">
            <div class="puzzle-header">
                <h2>🧩 Arma Nuestro Rompecabezas</h2>
                <p>Elige una foto y completa el puzzle</p>
            </div>
            
            <!-- PANTALLA DE SELECCIÓN -->
            <div class="photo-selection-screen" id="photoSelectionScreen">
                <!-- Selector de dificultad -->
                <div class="difficulty-selector">
                    <button class="difficulty-btn active" onclick="cambiarDificultadPuzzle(3)">Fácil (3x3)</button>
                    <button class="difficulty-btn" onclick="cambiarDificultadPuzzle(4)">Medio (4x4)</button>
                    <button class="difficulty-btn" onclick="cambiarDificultadPuzzle(5)">Difícil (5x5)</button>
                </div>
                
                <!-- Selector de fotos -->
                <div class="photo-selection-container">
                    <div class="photo-selection-title">📸 Elige una foto para el puzzle:</div>
                    <div class="photo-options" id="photoOptions">
                        ${fotosParaMostrar.map((foto, index) => `
                            <div class="photo-option ${index === 0 ? 'selected' : ''}" 
                                 onclick="seleccionarFotoPuzzle(${index})" 
                                 data-index="${index}">
                                <img src="${foto.url}" alt="Foto ${index + 1}">
                                <div class="checkmark">✓</div>
                            </div>
                        `).join('')}
                    </div>
                    <button class="btn-puzzle nueva-foto" onclick="nuevasFotosPuzzle()">
                        <i class="fas fa-sync"></i> Nuevas Fotos
                    </button>
                </div>
                
                <!-- Controles -->
                <div class="puzzle-controls">
                    <button class="btn-puzzle" id="btnIniciarPuzzle" onclick="iniciarPuzzle()">
                        <i class="fas fa-play"></i> Iniciar Puzzle
                    </button>
                    <button class="btn-puzzle historial" onclick="mostrarHistorialPuzzles()">
                        <i class="fas fa-trophy"></i> Historial
                    </button>
                </div>
            </div>
            
            <!-- PANTALLA DEL TABLERO -->
            <div class="puzzle-board-screen" id="puzzleBoardScreen">
                <!-- Información -->
                <div class="puzzle-info">
                    <div class="puzzle-timer" id="puzzleTimer">00:00</div>
                    <div class="puzzle-progress" id="puzzleProgress">Piezas: 0/9</div>
                </div>
                
                <!-- Controles del tablero -->
                <div class="puzzle-controls">
                    <button class="btn-puzzle volver" onclick="volverASeleccion()">
                        <i class="fas fa-arrow-left"></i> Volver
                    </button>
                    <button class="btn-puzzle pista" id="btnPista" onclick="mostrarPista()">
                        <i class="fas fa-lightbulb"></i> Pista
                    </button>
                </div>
                
                <!-- Tablero + Panel de pista -->
                <div class="puzzle-board-wrapper">
                    <div class="puzzle-board" id="puzzleBoard"></div>
                    
                    <!-- Panel de pista lateral -->
                    <div class="puzzle-hint-panel" id="hintPanel">
                        <h4>📸 Vista Previa</h4>
                        <img id="hintImage" src="" alt="Pista">
                        <div class="puzzle-hint-timer" id="hintTimer"></div>
                    </div>
                </div>
                
                <!-- Mensaje de completado -->
                <div id="puzzleComplete" class="puzzle-complete">
                    <h3>🎉 ¡Completado!</h3>
                    <p id="puzzleCompleteMessage"></p>
                    <button class="btn-puzzle" onclick="volverASeleccion()">
                        <i class="fas fa-redo"></i> Otro Puzzle
                    </button>
                </div>
            </div>
            
            <!-- Historial -->
            <div id="puzzleHistory" class="puzzle-history">
                <h3>🏆 Puzzles Completados</h3>
                <div class="history-list" id="historyList"></div>
                <button class="btn-puzzle" style="margin-top: 15px;" onclick="ocultarHistorial()">
                    <i class="fas fa-arrow-left"></i> Volver
                </button>
            </div>
        </div>
    `;
    
    mostrarPopupContenido(contenidoHTML, false, [], null, false);
}

// ==================== OBTENER FOTOS PARA PUZZLE - VERSIÓN CORREGIDA ====================
function obtenerFotosParaPuzzle() {
    const fotos = [];
    const diasEspeciales = window.datosConfig?.diasEspeciales || {};
    
    // Recorrer todos los días especiales
    Object.values(diasEspeciales).forEach(dia => {
        // Si el día tiene fotos
        if (dia.fotos && Array.isArray(dia.fotos) && dia.fotos.length > 0) {
            dia.fotos.forEach(foto => {
                // Verificar que la foto tenga URL válida
                if (foto && foto.url && typeof foto.url === 'string') {
                    fotos.push({
                        url: foto.url,
                        texto: foto.texto || 'Nuestro recuerdo'
                    });
                }
            });
        }
    });
    
    // Si no hay fotos suficientes, agregar fotos de respaldo
    if (fotos.length < 10) {
        console.warn("⚠️ Pocas fotos encontradas, usando respaldos");
        for (let i = 0; i < 10; i++) {
            fotos.push({
                url: `fotos/respaldo/foto${i+1}.jpg`,
                texto: `Foto especial ${i+1}`
            });
        }
    }
    
    console.log(`📸 Fotos encontradas para puzzle: ${fotos.length}`);
    return fotos;
}

// ==================== SELECCIONAR 3 FOTOS ALEATORIAS - VERSIÓN SEGURA ====================
function seleccionar3FotosAleatorias(fotosDisponibles) {
    // Verificar que tenemos un array válido
    if (!fotosDisponibles || !Array.isArray(fotosDisponibles) || fotosDisponibles.length === 0) {
        console.error("❌ No hay fotos disponibles para seleccionar");
        // Devolver fotos de respaldo
        return [
            { url: 'fotos/respaldo/respaldo1.jpg', texto: 'Recuerdo 1' },
            { url: 'fotos/respaldo/respaldo2.jpg', texto: 'Recuerdo 2' },
            { url: 'fotos/respaldo/respaldo3.jpg', texto: 'Recuerdo 3' }
        ];
    }
    
    // Filtrar fotos que tienen URL válida
    const fotosValidas = fotosDisponibles.filter(foto => {
        return foto && 
               foto.url && 
               typeof foto.url === 'string' && 
               foto.url.trim() !== '' &&
               !foto.url.includes('undefined');
    });
    
    console.log(`📸 Fotos válidas: ${fotosValidas.length} de ${fotosDisponibles.length}`);
    
    // Si no hay fotos válidas, crear respaldos en base64
    if (fotosValidas.length === 0) {
        console.warn("⚠️ No hay fotos válidas, creando respaldos");
        return crearFotosRespaldo();
    }
    
    // CASO CRÍTICO: Si hay menos de 3 fotos
    if (fotosValidas.length < 3) {
        console.warn(`⚠️ Solo hay ${fotosValidas.length} fotos, duplicando para tener 3`);
        const resultado = [];
        
        // Duplicar las fotos hasta tener 3
        for (let i = 0; i < 3; i++) {
            const indice = i % fotosValidas.length;
            // Crear copia para no modificar el original
            resultado.push({
                url: fotosValidas[indice].url,
                texto: `${fotosValidas[indice].texto || 'Foto'} ${i+1}`
            });
        }
        
        return resultado;
    }
    
    // CASO NORMAL: Hay suficientes fotos, seleccionar 3 aleatorias
    const copiadas = [...fotosValidas];
    const seleccionadas = [];
    
    // Mezclar array (Fisher-Yates)
    for (let i = copiadas.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copiadas[i], copiadas[j]] = [copiadas[j], copiadas[i]];
    }
    
    // Tomar las primeras 3
    for (let i = 0; i < 3; i++) {
        seleccionadas.push({
            url: copiadas[i].url,
            texto: copiadas[i].texto || `Foto ${i+1}`
        });
    }
    
    console.log("📸 Fotos seleccionadas:", seleccionadas.map(f => f.url));
    return seleccionadas;
}

// ==================== CREAR FOTOS DE RESPALDO EN BASE64 ====================
function crearFotosRespaldo() {
    const colores = ['#9C27B0', '#7B1FA2', '#4A148C'];
    const textos = ['Te amo 💘', 'Mi amor ❤️', 'Siempre juntos 💑'];
    
    return colores.map((color, index) => {
        // Crear un canvas para generar imagen en base64
        const canvas = document.createElement('canvas');
        canvas.width = 400;
        canvas.height = 400;
        const ctx = canvas.getContext('2d');
        
        // Fondo con gradiente
        const gradient = ctx.createLinearGradient(0, 0, 400, 400);
        gradient.addColorStop(0, color);
        gradient.addColorStop(1, '#4A148C');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 400, 400);
        
        // Texto
        ctx.fillStyle = 'white';
        ctx.font = 'bold 24px Poppins, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('🧩', 200, 180);
        ctx.font = '18px Poppins, sans-serif';
        ctx.fillText(textos[index], 200, 240);
        
        return {
            url: canvas.toDataURL('image/jpeg'),
            texto: textos[index]
        };
    });
}
// ==================== NUEVAS FOTOS PARA PUZZLE ====================
function nuevasFotosPuzzle() {
    const fotosDisponibles = obtenerFotosParaPuzzle();
    const fotosParaMostrar = seleccionar3FotosAleatorias(fotosDisponibles);
    
    puzzleGame.fotosDisponibles = fotosParaMostrar;
    puzzleGame.fotoSeleccionada = fotosParaMostrar[0];
    
    const photoOptions = document.getElementById('photoOptions');
    if (photoOptions) {
        photoOptions.innerHTML = fotosParaMostrar.map((foto, index) => `
            <div class="photo-option ${index === 0 ? 'selected' : ''}" 
                 onclick="seleccionarFotoPuzzle(${index})" 
                 data-index="${index}">
                <img src="${foto.url}" alt="Foto ${index + 1}">
                <div class="checkmark">✓</div>
            </div>
        `).join('');
    }
}

// ==================== SELECCIONAR FOTO ====================
function seleccionarFotoPuzzle(index) {
    const fotosParaMostrar = puzzleGame.fotosDisponibles;
    
    document.querySelectorAll('.photo-option').forEach((opt, i) => {
        opt.classList.toggle('selected', i === index);
    });
    
    // CORRECCIÓN: Guardar la foto seleccionada correctamente
    puzzleGame.fotoSeleccionada = fotosParaMostrar[index];
    
    console.log(`🖼️ Foto seleccionada: ${puzzleGame.fotoSeleccionada.texto}`);
    console.log(`🖼️ URL: ${puzzleGame.fotoSeleccionada.url}`);
}

// ==================== CAMBIAR DIFICULTAD ====================
function cambiarDificultadPuzzle(nivel) {
    puzzleGame.dificultad = nivel;
    
    document.querySelectorAll('.difficulty-btn').forEach((btn, index) => {
        btn.classList.toggle('active', index + 3 === nivel);
    });
}

// ==================== INICIAR PUZZLE ====================
function iniciarPuzzle() {
    if (!puzzleGame.fotoSeleccionada) {
        mostrarNotificacion('Selecciona una foto primero', 'info');
        return;
    }
    
    console.log("🧩 Iniciando puzzle con foto:", puzzleGame.fotoSeleccionada);
    
    // Ocultar pantalla de selección, mostrar tablero
    document.getElementById('photoSelectionScreen').classList.add('hidden');
    document.getElementById('puzzleBoardScreen').classList.add('active');
    
    // Configurar tablero
    const board = document.getElementById('puzzleBoard');
    const dificultad = puzzleGame.dificultad;
    const tamanoTablero = Math.min(350, dificultad * 70);
    
    board.style.gridTemplateColumns = `repeat(${dificultad}, 1fr)`;
    board.style.width = `${tamanoTablero}px`;
    board.style.height = `${tamanoTablero}px`;
    
    // Generar piezas con formas de puzzle
    generarPiezasPuzzle();
    
    // Iniciar timer
    iniciarTimerPuzzle();
    
    puzzleGame.activo = true;
}

// ==================== VOLVER A SELECCIÓN ====================
function volverASeleccion() {
    detenerTimerPuzzle();
    ocultarPista();
    
    puzzleGame.activo = false;
    puzzleGame.piezas = [];
    puzzleGame.piezasCorrectas = 0;
    puzzleGame.segundos = 0;
    
    document.getElementById('photoSelectionScreen').classList.remove('hidden');
    document.getElementById('puzzleBoardScreen').classList.remove('active');
    document.getElementById('puzzleComplete').classList.remove('active');
    document.getElementById('puzzleHistory').classList.remove('active');
}

// ==================== GENERAR PIEZAS CON FORMAS DE PUZZLE ====================
function generarPiezasPuzzle() {
    const board = document.getElementById('puzzleBoard');
    const dificultad = puzzleGame.dificultad;
    const totalPiezas = dificultad * dificultad;
    
    board.innerHTML = '';
    puzzleGame.piezas = [];
    puzzleGame.piezasCorrectas = 0;
    puzzleGame.piezaSeleccionada = null;
    
    // Crear array de posiciones correctas
    const posiciones = [];
    for (let i = 0; i < totalPiezas; i++) {
        posiciones.push(i);
    }
    
    // Mezclar posiciones (Fisher-Yates)
    for (let i = posiciones.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [posiciones[i], posiciones[j]] = [posiciones[j], posiciones[i]];
    }
    
    // Tamaño de cada pieza en px
    const tamanoPieza = 350 / dificultad;
    
    // CORRECCIÓN: Usar la foto seleccionada correctamente
    const fotoUrl = puzzleGame.fotoSeleccionada.url;
    
    console.log("🧩 Generando piezas con foto:", fotoUrl);
    
    // Crear piezas
    posiciones.forEach((posCorrecta, index) => {
        const pieza = document.createElement('div');
        pieza.className = 'puzzle-piece';
        pieza.style.width = `${tamanoPieza}px`;
        pieza.style.height = `${tamanoPieza}px`;
        pieza.dataset.posCorrecta = posCorrecta;
        pieza.dataset.posActual = index;
        
        // Calcular posición del background para esta pieza
        const filaCorrecta = Math.floor(posCorrecta / dificultad);
        const colCorrecta = posCorrecta % dificultad;
        
        // CORRECCIÓN: Crear SVG con forma de puzzle y imagen correcta
        const svg = crearFormaPiezaPuzzleSVG(
            tamanoPieza, 
            filaCorrecta, 
            colCorrecta, 
            dificultad,
            fotoUrl,
            posCorrecta,
            dificultad
        );
        
        pieza.innerHTML = svg;
        pieza.onclick = () => seleccionarPieza(pieza);
        
        board.appendChild(pieza);
        puzzleGame.piezas.push(pieza);
    });
    
    actualizarProgresoPuzzle();
}

// ==================== CREAR FORMA DE PIEZA DE PUZZLE (SVG) ====================
function crearFormaPiezaPuzzleSVG(tamano, fila, col, grid, imageUrl, posCorrecta, gridSize) {
    const s = tamano;
    const tab = s * 0.25; // tamaño del tab
    
    // Determinar qué lados tienen tabs (salientes/entrantes)
    // Usar patrón consistente para que las piezas encajen
    const tieneTabArriba = fila > 0 && ((fila + col) % 2 === 0);
    const tieneTabAbajo = fila < grid - 1 && ((fila + col + 1) % 2 === 0);
    const tieneTabIzq = col > 0 && ((fila + col) % 2 === 1);
    const tieneTabDer = col < grid - 1 && ((fila + col + 1) % 2 === 1);
    
    // CORRECCIÓN: Calcular posición del background para que la imagen se alinee correctamente
    const bgX = -((posCorrecta % grid) * s);
    const bgY = -Math.floor(posCorrecta / grid) * s;
    
    // CORRECCIÓN: Crear path SVG con forma de puzzle real
    let path = `M 0 ${tieneTabArriba ? tab : 0} `;
    
    // Lado superior
    if (tieneTabArriba) {
        path += `C ${s*0.2} ${tab*0.3}, ${s*0.3} ${-tab*0.5}, ${s*0.5} ${-tab} `;
        path += `C ${s*0.7} ${-tab*0.5}, ${s*0.8} ${tab*0.3}, ${s} ${tieneTabDer ? tab : 0} `;
    } else {
        path += `L ${s} 0 `;
    }
    
    // Lado derecho
    if (tieneTabDer) {
        path += `C ${s+tab*0.3} ${s*0.2}, ${s+tab*0.5} ${s*0.3}, ${s+tab} ${s*0.5} `;
        path += `C ${s+tab*0.5} ${s*0.7}, ${s+tab*0.3} ${s*0.8}, ${s} ${s} `;
    } else {
        path += `L ${s} ${s} `;
    }
    
    // Lado inferior
    if (tieneTabAbajo) {
        path += `C ${s*0.8} ${s+tab*0.3}, ${s*0.7} ${s+tab*0.5}, ${s*0.5} ${s+tab} `;
        path += `C ${s*0.3} ${s+tab*0.5}, ${s*0.2} ${s+tab*0.3}, 0 ${s} `;
    } else {
        path += `L 0 ${s} `;
    }
    
    // Lado izquierdo
    if (tieneTabIzq) {
        path += `C ${-tab*0.3} ${s*0.8}, ${-tab*0.5} ${s*0.7}, ${-tab} ${s*0.5} `;
        path += `C ${-tab*0.5} ${s*0.3}, ${-tab*0.3} ${s*0.2}, 0 0 `;
    } else {
        path += `L 0 0 `;
    }
    
    path += `Z`;
    
    // CORRECCIÓN: Crear patrón de imagen que cubra toda la pieza correctamente
    const patronId = `piece-pattern-${posCorrecta}`;
    
    // CORRECCIÓN: El patrón debe tener el tamaño del tablero completo
    const patronWidth = s * gridSize;
    const patronHeight = s * gridSize;
    
    return `
        <svg width="${s}" height="${s}" viewBox="0 0 ${s} ${s}" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <pattern id="${patronId}" x="${bgX}" y="${bgY}" width="${patronWidth}" height="${patronHeight}" patternUnits="userSpaceOnUse">
                    <image href="${imageUrl}" x="0" y="0" width="${patronWidth}" height="${patronHeight}" preserveAspectRatio="xMidYMid slice"/>
                </pattern>
                <clipPath id="clip-${posCorrecta}">
                    <path d="${path}"/>
                </clipPath>
            </defs>
            <rect width="${s}" height="${s}" fill="url(#${patronId})" clip-path="url(#clip-${posCorrecta})"/>
            <path d="${path}" fill="none" stroke="white" stroke-width="2"/>
        </svg>
    `;
}

// ==================== SELECCIONAR PIEZA ====================
function seleccionarPieza(pieza) {
    if (!puzzleGame.activo) return;
    
    if (puzzleGame.piezaSeleccionada === null) {
        // Primera selección
        puzzleGame.piezaSeleccionada = pieza;
        pieza.classList.add('selected');
    } else {
        // Segunda selección - intercambiar
        const primera = puzzleGame.piezas[puzzleGame.piezaSeleccionada.dataset.posActual];
        
        if (primera === pieza) {
            // Deseleccionar
            primera.classList.remove('selected');
            puzzleGame.piezaSeleccionada = null;
        } else {
            // Intercambiar posiciones
            intercambiarPiezas(primera, pieza);
            primera.classList.remove('selected');
            puzzleGame.piezaSeleccionada = null;
        }
    }
}

// ==================== INTERCAMBIAR PIEZAS ====================
function intercambiarPiezas(pieza1, pieza2) {
    const pos1 = parseInt(pieza1.dataset.posActual);
    const pos2 = parseInt(pieza2.dataset.posActual);
    
    // Intercambiar en el array
    [puzzleGame.piezas[pos1], puzzleGame.piezas[pos2]] = [puzzleGame.piezas[pos2], puzzleGame.piezas[pos1]];
    
    // Actualizar dataset
    pieza1.dataset.posActual = pos2;
    pieza2.dataset.posActual = pos1;
    
    // Reordenar en el DOM
    const board = document.getElementById('puzzleBoard');
    const temp = document.createElement('div');
    board.insertBefore(temp, pieza1);
    board.insertBefore(pieza1, pieza2);
    board.insertBefore(pieza2, temp);
    board.removeChild(temp);
    
    // Verificar si están correctas
    verificarPieza(pieza1);
    verificarPieza(pieza2);
    
    // Verificar victoria
    verificarVictoriaPuzzle();
    
    actualizarProgresoPuzzle();
}

// ==================== VERIFICAR PIEZA ====================
function verificarPieza(pieza) {
    const posCorrecta = parseInt(pieza.dataset.posCorrecta);
    const posActual = parseInt(pieza.dataset.posActual);
    
    if (posCorrecta === posActual) {
        pieza.classList.add('correct');
        puzzleGame.piezasCorrectas++;
    } else {
        pieza.classList.remove('correct');
    }
}

// ==================== VERIFICAR VICTORIA ====================
function verificarVictoriaPuzzle() {
    const totalPiezas = puzzleGame.dificultad * puzzleGame.dificultad;
    
    if (puzzleGame.piezasCorrectas === totalPiezas) {
        completarPuzzle();
    }
}

// ==================== COMPLETAR PUZZLE ====================
function completarPuzzle() {
    detenerTimerPuzzle();
    ocultarPista();
    
    const complete = document.getElementById('puzzleComplete');
    const board = document.getElementById('puzzleBoard');
    const mensaje = document.getElementById('puzzleCompleteMessage');
    
    board.style.display = 'none';
    complete.classList.add('active');
    
    const mensajes = {
        3: "¡Excelente! Eres un maestro del amor 💘",
        4: "¡Increíble! Nuestro amor encaja perfecto 🧩",
        5: "¡LEGENDARIO! Como nuestro amor, imposible de separar 💑"
    };
    
    mensaje.innerHTML = `
        <strong>Tiempo: ${formatoTimer(puzzleGame.segundos)}</strong><br>
        ${mensajes[puzzleGame.dificultad]}<br>
        <small>Rompecabezas completados: ${puzzleGame.historial.length + 1}</small>
    `;
    
    // Guardar en localStorage
    puzzleGame.historial.push({
        fecha: new Date().toISOString(),
        dificultad: puzzleGame.dificultad,
        tiempo: puzzleGame.segundos,
        foto: puzzleGame.fotoSeleccionada?.texto || 'Foto especial',
        fotoUrl: puzzleGame.fotoSeleccionada?.url || ''
    });
    localStorage.setItem('rompecabezasCompletados', JSON.stringify(puzzleGame.historial));
    
    // Actualizar estadística
    actualizarContadorRompecabezas();
    
    // Lanzar confeti
    lanzarConfetiPuzzle();
}

// ==================== MOSTRAR PISTA (PANEL LATERAL) ====================
function mostrarPista() {
    if (!puzzleGame.fotoSeleccionada) return;
    
    const hintPanel = document.getElementById('hintPanel');
    const hintImage = document.getElementById('hintImage');
    const hintTimer = document.getElementById('hintTimer');
    
    if (!hintPanel || !hintImage) return;
    
    hintImage.src = puzzleGame.fotoSeleccionada.url;
    hintPanel.classList.add('visible');
    
    let segundosRestantes = 3;
    hintTimer.textContent = `${segundosRestantes}s`;
    
    const timer = setInterval(() => {
        segundosRestantes--;
        hintTimer.textContent = `${segundosRestantes}s`;
        
        if (segundosRestantes <= 0) {
            clearInterval(timer);
            ocultarPista();
        }
    }, 1000);
}

// ==================== OCULTAR PISTA ====================
function ocultarPista() {
    const hintPanel = document.getElementById('hintPanel');
    if (hintPanel) {
        hintPanel.classList.remove('visible');
    }
}

// ==================== TIMER ====================
function iniciarTimerPuzzle() {
    detenerTimerPuzzle();
    puzzleGame.segundos = 0;
    actualizarTimerDisplay();
    
    puzzleGame.timer = setInterval(() => {
        puzzleGame.segundos++;
        actualizarTimerDisplay();
    }, 1000);
}

function detenerTimerPuzzle() {
    if (puzzleGame.timer) {
        clearInterval(puzzleGame.timer);
        puzzleGame.timer = null;
    }
}

function actualizarTimerDisplay() {
    const timer = document.getElementById('puzzleTimer');
    if (timer) {
        timer.textContent = formatoTimer(puzzleGame.segundos);
    }
}

function formatoTimer(segundos) {
    const mins = Math.floor(segundos / 60).toString().padStart(2, '0');
    const secs = (segundos % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
}

// ==================== ACTUALIZAR PROGRESO ====================
function actualizarProgresoPuzzle() {
    const progress = document.getElementById('puzzleProgress');
    const total = puzzleGame.dificultad * puzzleGame.dificultad;
    if (progress) {
        progress.textContent = `Piezas: ${puzzleGame.piezasCorrectas}/${total}`;
    }
}

// ==================== MOSTRAR HISTORIAL ====================
function mostrarHistorialPuzzles() {
    document.getElementById('photoSelectionScreen').classList.add('hidden');
    document.getElementById('puzzleHistory').classList.add('active');
    
    const historyList = document.getElementById('historyList');
    
    if (puzzleGame.historial.length === 0) {
        historyList.innerHTML = `
            <div class="no-history">
                <i class="fas fa-trophy" style="font-size: 3rem; color: #ccc; margin-bottom: 10px;"></i>
                <p>Aún no has completado ningún puzzle<br>¡Anímate a empezar!</p>
            </div>
        `;
    } else {
        const ordenados = [...puzzleGame.historial].reverse();
        
        historyList.innerHTML = ordenados.map((puzzle, index) => {
            const fecha = new Date(puzzle.fecha);
            const fechaFormateada = fecha.toLocaleDateString('es-ES', { 
                day: 'numeric', 
                month: 'short',
                hour: '2-digit',
                minute: '2-digit'
            });
            
            const dificultadTexto = {3: 'Fácil', 4: 'Medio', 5: 'Difícil'}[puzzle.dificultad];
            
            return `
                <div class="history-item">
                    <img src="${puzzle.fotoUrl || 'fotos/01-05/foto1.jpg'}" alt="Puzzle">
                    <div class="history-item-info">
                        <h4>Puzzle #${ordenados.length - index} - ${dificultadTexto}</h4>
                        <p>${fechaFormateada} • ${formatoTimer(puzzle.tiempo)}</p>
                    </div>
                    <div class="history-item-badge">✓</div>
                </div>
            `;
        }).join('');
    }
}

// ==================== OCULTAR HISTORIAL ====================
function ocultarHistorial() {
    document.getElementById('puzzleHistory').classList.remove('active');
    document.getElementById('photoSelectionScreen').classList.remove('hidden');
}

// ==================== CONFETI ====================
function lanzarConfetiPuzzle() {
    const colores = ['#9C27B0', '#E91E63', '#2196F3', '#4CAF50', '#FF9800'];
    
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confeti = document.createElement('div');
            confeti.style.cssText = `
                position: fixed;
                width: 10px;
                height: 10px;
                background: ${colores[Math.floor(Math.random() * colores.length)]};
                border-radius: ${Math.random() > 0.5 ? '50%' : '0'};
                pointer-events: none;
                z-index: 9999;
                top: -10px;
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
}

// ==================== ACTUALIZAR CONTADOR ====================
function actualizarContadorRompecabezas() {
    const contador = document.getElementById('contador-rompecabezas');
    if (contador) {
        contador.textContent = puzzleGame.historial.length;
    }
}

// ==================== INICIALIZAR ROMPECABEZAS ====================
function inicializarRompecabezas() {

        actualizarContadorRompecabezas();
}

// Hacer funciones disponibles globalmente
window.mostrarRompecabezas = mostrarRompecabezas;
window.cambiarDificultadPuzzle = cambiarDificultadPuzzle;
window.seleccionarFotoPuzzle = seleccionarFotoPuzzle;
window.nuevasFotosPuzzle = nuevasFotosPuzzle;
window.iniciarPuzzle = iniciarPuzzle;
window.volverASeleccion = volverASeleccion;
window.mostrarPista = mostrarPista;
window.mostrarHistorialPuzzles = mostrarHistorialPuzzles;
window.ocultarHistorial = ocultarHistorial;


/// ==================== ROMPECABEZAS CANVAS - VERSIÓN FINAL FUNCIONAL ====================
let puzzleCanvas = {
    activo: false,
    canvas: null,
    ctx: null,
    img: null,
    fotoUrl: null,
    rows: 3,
    cols: 3,
    pieceWidth: 80,
    pieceHeight: 80,
    tabSize: 20,
    pieces: [],
    selectedPiece: null,
    offsetX: 0,
    offsetY: 0,
    timer: null,
    segundos: 0,
    historial: JSON.parse(localStorage.getItem('rompecabezasCompletados')) || [],
    completado: false,
    fotosDisponibles: []
};

// ==================== MOSTRAR PUZZLE CANVAS - VERSIÓN MEJORADA ====================
function mostrarPuzzleCanvas() {
    console.log("🧩 === ABRIENDO PUZZLE CANVAS ===");
    
    const fotos = obtenerFotosParaPuzzle();
    console.log("📸 Fotos disponibles (totales):", fotos.length);
    
    // CORRECCIÓN: Usar la función mejorada
    const fotosParaMostrar = seleccionar3FotosAleatorias(fotos);
    console.log("📸 Fotos seleccionadas (después de filtro):", fotosParaMostrar.length);

    // Verificar que tenemos 3 fotos
    if (!fotosParaMostrar || fotosParaMostrar.length === 0) {
        console.error("❌ No se pudieron seleccionar fotos");
        mostrarNotificacion('Error cargando fotos para el puzzle', 'error');
        return;
    }

    puzzleCanvas.fotosDisponibles = fotosParaMostrar;
    puzzleCanvas.rows = 3;
    puzzleCanvas.cols = 3;
    puzzleCanvas.completado = false;

    let contenidoHTML = `
        <div class="puzzle-canvas-wrapper">
            <h3 class="puzzle-canvas-title">🧩 Arma Nuestro Rompecabezas</h3>
            
            <div class="puzzle-difficulty-selector">
                <button class="difficulty-btn-canvas active" onclick="cambiarDificultadCanvas(3)">Fácil (3x3)</button>
                <button class="difficulty-btn-canvas" onclick="cambiarDificultadCanvas(4)">Medio (4x4)</button>
                <button class="difficulty-btn-canvas" onclick="cambiarDificultadCanvas(5)">Difícil (5x5)</button>
            </div>
            
            <div class="puzzle-photo-selector" id="puzzlePhotoSelector">
                ${fotosParaMostrar.map((foto, index) => `
                    <div class="puzzle-photo-option ${index === 0 ? 'selected' : ''}" 
                        onclick="seleccionarFotoYPuzzle('${foto.url}', ${index})">
                        <img src="${foto.url}" alt="Foto ${index + 1}" 
                            onerror="this.onerror=null; this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><rect width=%22100%22 height=%22100%22 fill=%22%239C27B0%22/><text x=%2250%22 y=%2255%22 font-size=%2214%22 text-anchor=%22middle%22 fill=%22white%22>Foto ${index+1}</text></svg>'">
                        <div class="checkmark">✓</div>
                    </div>
                `).join('')}
            </div>
            
            <button class="btn-puzzle-canvas nueva-foto" onclick="nuevasFotosPuzzleCanvas()">
                <i class="fas fa-sync"></i> Nuevas Fotos
            </button>
            
            <div class="puzzle-canvas-info">
                <div class="puzzle-canvas-timer" id="puzzleCanvasTimer">00:00</div>
                <div class="puzzle-canvas-progress" id="puzzleCanvasProgress">Piezas: 0/9</div>
            </div>
            
            <div class="puzzle-canvas-container">
                <canvas id="puzzleCanvas"></canvas>
                
                <div class="puzzle-hint-panel-always">
                    <h4>📸 Referencia</h4>
                    <img id="hintImageAlways" src="${fotosParaMostrar[0]?.url || ''}" alt="Referencia"
                         onerror="this.onerror=null; this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><rect width=%22100%22 height=%22100%22 fill=%22%239C27B0%22/><text x=%2250%22 y=%2255%22 font-size=%2214%22 text-anchor=%22middle%22 fill=%22white%22>Referencia</text></svg>'">
                    <span class="puzzle-hint-label">Vista completa</span>
                </div>
            </div>
            
            <div id="puzzleCanvasComplete" class="puzzle-canvas-complete" style="display: none;">
                <h3>🎉 ¡Completado!</h3>
                <p id="puzzleCanvasCompleteMessage"></p>
                <button class="btn-puzzle-canvas" onclick="volverAlSelectorPuzzle()">
                    <i class="fas fa-redo"></i> Otro Puzzle
                </button>
            </div>
            
            <div class="puzzle-canvas-history">
                <h4>🏆 Puzzles Completados</h4>
                <div class="history-list-canvas" id="historyListCanvas"></div>
            </div>
        </div>
    `;

    mostrarPopupContenido(contenidoHTML, false, [], null, false);

    // Iniciar con la primera foto después de un pequeño delay
    setTimeout(() => {
        if (fotosParaMostrar[0]?.url) {
            console.log("🔄 Iniciando con foto:", fotosParaMostrar[0].url);
            seleccionarFotoYPuzzle(fotosParaMostrar[0].url, 0);
        }
    }, 200);
}

function mostrarPuzzlePantallaCompleta() {
    console.log("🧩 === ABRIENDO PUZZLE PANTALLA COMPLETA ===");
    
    const fotos = obtenerFotosParaPuzzle();
    const fotosParaMostrar = seleccionar3FotosAleatorias(fotos);

    if (!fotosParaMostrar || fotosParaMostrar.length === 0) {
        mostrarNotificacion('Error cargando fotos para el puzzle', 'error');
        return;
    }

    puzzleCanvas.fotosDisponibles = fotosParaMostrar;
    puzzleCanvas.rows = 3;
    puzzleCanvas.cols = 3;
    puzzleCanvas.completado = false;

    let contenidoHTML = `
    <div class="puzzle-fullscreen">
        <div class="puzzle-fullscreen-header">
            <h2>🧩 Rompecabezas</h2>
            <button class="btn-cerrar-fullscreen" onclick="cerrarPopupPersonalizado()">
                <i class="fas fa-times"></i>
            </button>
        </div>
        
        <div class="puzzle-fullscreen-content">
            <!-- Barra lateral (visible en escritorio, se oculta en móvil) -->
            <div class="puzzle-sidebar desktop-only">
                <div class="puzzle-difficulty-selector">
                    <button class="difficulty-btn-canvas active" onclick="cambiarDificultadCanvasFull(3)">Fácil (3x3)</button>
                    <button class="difficulty-btn-canvas" onclick="cambiarDificultadCanvasFull(4)">Medio (4x4)</button>
                    <button class="difficulty-btn-canvas" onclick="cambiarDificultadCanvasFull(5)">Difícil (5x5)</button>
                </div>
                
                <div class="puzzle-photo-selector" id="puzzlePhotoSelectorFull">
                    ${fotosParaMostrar.map((foto, index) => `
                        <div class="puzzle-photo-option ${index === 0 ? 'selected' : ''}" 
                            onclick="seleccionarFotoYPuzzleFull('${foto.url}', ${index})">
                            <img src="${foto.url}" alt="Foto ${index + 1}" 
                                onerror="this.onerror=null; this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><rect width=%22100%22 height=%22100%22 fill=%22%239C27B0%22/><text x=%2250%22 y=%2255%22 font-size=%2214%22 text-anchor=%22middle%22 fill=%22white%22>Foto ${index+1}</text></svg>'">
                            <div class="checkmark">✓</div>
                        </div>
                    `).join('')}
                </div>
                
                <button class="btn-puzzle-canvas nueva-foto" onclick="nuevasFotosPuzzleCanvasFull()">
                    <i class="fas fa-sync"></i> Nuevas Fotos
                </button>
                
                <div class="puzzle-canvas-info">
                    <div class="puzzle-canvas-timer" id="puzzleCanvasTimerFull">00:00</div>
                    <div class="puzzle-canvas-progress" id="puzzleCanvasProgressFull">Piezas: 0/9</div>
                </div>
                
                <div class="puzzle-history-preview" id="historyPreviewFull">
                    <h4>🏆 Últimos completados</h4>
                    <div class="history-list-canvas" id="historyListCanvasFull"></div>
                </div>
                
                <!-- BOTÓN CERRAR ADICIONAL -->
                <button class="btn-puzzle-canvas cerrar" onclick="cerrarPopupPersonalizado()" style="margin-top: 15px; width: 100%;">
                    <i class="fas fa-times"></i> Cerrar
                </button>
            </div>
            
            <!-- Área principal (siempre visible) -->
            <div class="puzzle-main-area">
                <!-- Versión móvil: controles compactos (se muestran solo en móvil) -->
                <div class="mobile-controls mobile-only">
                    <div class="mobile-difficulty">
                        <button class="difficulty-btn-canvas active" onclick="cambiarDificultadCanvasFull(3)">3x3</button>
                        <button class="difficulty-btn-canvas" onclick="cambiarDificultadCanvasFull(4)">4x4</button>
                        <button class="difficulty-btn-canvas" onclick="cambiarDificultadCanvasFull(5)">5x5</button>
                    </div>
        <div class="mobile-photos">
                        <div class="puzzle-photo-selector" id="puzzlePhotoSelectorFullMobile">
                            ${fotosParaMostrar.map((foto, index) => `
                                <div class="puzzle-photo-option ${index === 0 ? 'selected' : ''}" 
                                    onclick="seleccionarFotoYPuzzleFull('${foto.url}', ${index})">
                                    <img src="${foto.url}" alt="Foto ${index + 1}">
                                    <div class="checkmark">✓</div>
                                </div>
                            `).join('')}
                        </div>
                        <button class="btn-puzzle-canvas nueva-foto mobile-btn" onclick="nuevasFotosPuzzleCanvasFull()">
                            <i class="fas fa-sync"></i> Nuevas
                        </button>
                    </div>
                    <div class="mobile-info">
                        <span class="puzzle-canvas-timer" id="puzzleCanvasTimerFullMobile">00:00</span>
                        <span class="puzzle-canvas-progress" id="puzzleCanvasProgressFullMobile">0/9</span>
                    </div>
                </div>
                
                <div class="puzzle-canvas-container-full">
                    <canvas id="puzzleCanvasFull"></canvas>
                    <div class="puzzle-hint-panel-always">
                        <h4>📸 Referencia</h4>
                        <img id="hintImageAlwaysFull" src="${fotosParaMostrar[0]?.url || ''}" alt="Referencia">
                    </div>
                </div>
                
                <div id="puzzleCanvasCompleteFull" class="puzzle-canvas-complete" style="display: none;">
                    <h3>🎉 ¡Completado!</h3>
                    <p id="puzzleCanvasCompleteMessageFull"></p>
                    <button class="btn-puzzle-canvas" onclick="volverAlSelectorPuzzleFull()">
                        <i class="fas fa-redo"></i> Otro Puzzle
                    </button>
                </div>
                
              <!-- Historial y ayuda en móvil (juntos en la misma línea) -->
<div class="mobile-history mobile-only">
    <div style="display: flex; justify-content: space-between; align-items: center; width: 100%; gap: 10px;">
        <details style="flex: 1;">
            <summary>🏆 Historial</summary>
            <div class="history-list-canvas" id="historyListCanvasFullMobile"></div>
        </details>
        <button class="btn-puzzle-canvas ayuda-btn" onclick="mostrarAyudaMovil()" style="white-space: nowrap;">
            <i class="fas fa-lightbulb"></i> Ver foto (5s)
        </button>
    </div>
</div>
<!-- Overlay para ayuda visual (foto completa) -->
<div id="ayudaOverlayMovil" class="ayuda-overlay" onclick="ocultarAyudaMovil()">
    <img id="ayudaImagenMovil" src="" alt="Foto completa">
    <div class="ayuda-timer" id="ayudaTimerMovil">5s</div>
</div>
            </div>
        </div>
    </div>
    `;

    mostrarPopupPersonalizado(contenidoHTML, 'puzzle-fullscreen-popup');

    setTimeout(() => {
        if (fotosParaMostrar[0]?.url) {
            seleccionarFotoYPuzzleFull(fotosParaMostrar[0].url, 0);
        }
        mostrarHistorialPuzzleCanvasFull();
        // También actualizar los elementos móviles
        setTimeout(() => {
            const timerMobile = document.getElementById('puzzleCanvasTimerFullMobile');
            const progressMobile = document.getElementById('puzzleCanvasProgressFullMobile');
            if (timerMobile) timerMobile.textContent = '00:00';
            if (progressMobile) progressMobile.textContent = '0/9';
        }, 100);
    }, 200);
}



// ==================== EVENTOS DE ARRASTRE PARA MODO FULL ====================

function configurarEventosCanvasFull() {
    const canvas = document.getElementById('puzzleCanvasFull');
    if (!canvas) return;
    
    canvas.addEventListener('mousedown', handleCanvasMouseDownFull);
    canvas.addEventListener('mousemove', handleCanvasMouseMoveFull);
    canvas.addEventListener('mouseup', handleCanvasMouseUpFull);
    canvas.addEventListener('mouseleave', handleCanvasMouseLeaveFull);
    
    canvas.addEventListener('touchstart', handleCanvasTouchStartFull, { passive: false });
    canvas.addEventListener('touchmove', handleCanvasTouchMoveFull, { passive: false });
    canvas.addEventListener('touchend', handleCanvasTouchEndFull);
}

// Manejadores (copia de los originales pero con puzzleCanvas como variable global)
function handleCanvasMouseDownFull(e) {
    if (puzzleCanvas.completado) return;
    
    const canvas = document.getElementById('puzzleCanvasFull');
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;   // Relación tamaño real / tamaño en pantalla
    const scaleY = canvas.height / rect.height;
    
    const mouseX = (e.clientX - rect.left) * scaleX;
    const mouseY = (e.clientY - rect.top) * scaleY;
    
    for (let i = puzzleCanvas.pieces.length - 1; i >= 0; i--) {
        const piece = puzzleCanvas.pieces[i];
        // Verificar si el click está dentro del área de la pieza (considerando pestañas)
        if (mouseX >= piece.currentX - puzzleCanvas.tabSize && 
            mouseX <= piece.currentX + puzzleCanvas.pieceWidth + puzzleCanvas.tabSize &&
            mouseY >= piece.currentY - puzzleCanvas.tabSize && 
            mouseY <= piece.currentY + puzzleCanvas.pieceHeight + puzzleCanvas.tabSize) {
            
            puzzleCanvas.selectedPiece = piece;
            piece.isDragging = true;
            puzzleCanvas.offsetX = mouseX - piece.currentX;
            puzzleCanvas.offsetY = mouseY - piece.currentY;
            
            // Mover la pieza al frente (última en el array)
            puzzleCanvas.pieces.splice(i, 1);
            puzzleCanvas.pieces.push(piece);
            break;
        }
    }
    dibujarPuzzle();
}

function handleCanvasMouseMoveFull(e) {
    if (!puzzleCanvas.selectedPiece) return;
    
    const canvas = document.getElementById('puzzleCanvasFull');
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    
    const mouseX = (e.clientX - rect.left) * scaleX;
    const mouseY = (e.clientY - rect.top) * scaleY;
    
    puzzleCanvas.selectedPiece.currentX = mouseX - puzzleCanvas.offsetX;
    puzzleCanvas.selectedPiece.currentY = mouseY - puzzleCanvas.offsetY;
    
    // Limitar dentro del canvas (opcional, para que no se salga)
    puzzleCanvas.selectedPiece.currentX = Math.max(puzzleCanvas.tabSize, Math.min(puzzleCanvas.selectedPiece.currentX, canvas.width - puzzleCanvas.pieceWidth - puzzleCanvas.tabSize));
    puzzleCanvas.selectedPiece.currentY = Math.max(puzzleCanvas.tabSize, Math.min(puzzleCanvas.selectedPiece.currentY, canvas.height - puzzleCanvas.pieceHeight - puzzleCanvas.tabSize));
    
    dibujarPuzzle();
}

function handleCanvasMouseUpFull() {
    if (puzzleCanvas.selectedPiece) {
        puzzleCanvas.selectedPiece.isDragging = false;
        
        // Snap a la posición correcta
        const snapDistance = 30;
        const piece = puzzleCanvas.selectedPiece;
        
        if (Math.abs(piece.currentX - piece.correctX) < snapDistance &&
            Math.abs(piece.currentY - piece.correctY) < snapDistance) {
            piece.currentX = piece.correctX;
            piece.currentY = piece.correctY;
            piece.isCorrect = true;
        } else {
            piece.isCorrect = false;
        }
        
        puzzleCanvas.selectedPiece = null;
        dibujarPuzzle();
        verificarVictoriaCanvas(); // Verificar si se completó
    }
}

function handleCanvasMouseLeaveFull() {
    if (puzzleCanvas.selectedPiece) {
        puzzleCanvas.selectedPiece.isDragging = false;
        puzzleCanvas.selectedPiece = null;
        dibujarPuzzle();
    }
}

// Versiones táctiles
function handleCanvasTouchStartFull(e) {
    e.preventDefault();
    const touch = e.touches[0];
    handleCanvasMouseDownFull({ clientX: touch.clientX, clientY: touch.clientY });
}

function handleCanvasTouchMoveFull(e) {
    e.preventDefault();
    const touch = e.touches[0];
    handleCanvasMouseMoveFull({ clientX: touch.clientX, clientY: touch.clientY });
}

function handleCanvasTouchEndFull(e) {
    e.preventDefault();
    handleCanvasMouseUpFull();
}

// ==================== CAMBIO DE DIFICULTAD Y NUEVAS FOTOS (MODO FULL) ====================

function cambiarDificultadCanvasFull(nivel) {
    if (puzzleCanvas.rows === nivel) return; // No hacer nada si es la misma dificultad
    
    puzzleCanvas.rows = nivel;
    puzzleCanvas.cols = nivel;
    puzzleCanvas.completado = false;
    
    // Actualizar botones activos
    document.querySelectorAll('#popup-personalizado .difficulty-btn-canvas').forEach((btn, index) => {
        btn.classList.toggle('active', index + 3 === nivel);
    });
    
    // Si hay imagen cargada, reiniciar el puzzle
    if (puzzleCanvas.img && puzzleCanvas.img.complete && puzzleCanvas.img.naturalWidth > 0) {
        iniciarPuzzleCanvasFull();
    }
}
function nuevasFotosPuzzleCanvasFull() {
    const fotos = obtenerFotosParaPuzzle();
    const nuevas = seleccionar3FotosAleatorias(fotos);
    puzzleCanvas.fotosDisponibles = nuevas;
    
    const selectorDesktop = document.getElementById('puzzlePhotoSelectorFull');
    const selectorMobile = document.getElementById('puzzlePhotoSelectorFullMobile');
    
    const html = nuevas.map((foto, index) => `
        <div class="puzzle-photo-option ${index === 0 ? 'selected' : ''}" 
             onclick="seleccionarFotoYPuzzleFull('${foto.url}', ${index})">
            <img src="${foto.url}" alt="Foto ${index + 1}"
                 onerror="this.onerror=null; this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><rect width=%22100%22 height=%22100%22 fill=%22%239C27B0%22/><text x=%2250%22 y=%2255%22 font-size=%2214%22 text-anchor=%22middle%22 fill=%22white%22>Foto ${index+1}</text></svg>'">
            <div class="checkmark">✓</div>
        </div>
    `).join('');
    
    if (selectorDesktop) selectorDesktop.innerHTML = html;
    if (selectorMobile) selectorMobile.innerHTML = html;
    
    if (nuevas[0]?.url) {
        seleccionarFotoYPuzzleFull(nuevas[0].url, 0);
    }
}

// También necesitamos una función para volver al selector después de completar
function volverAlSelectorPuzzleFull() {
    detenerTimerPuzzleCanvas();
    puzzleCanvas.activo = false;
    puzzleCanvas.completado = false;
    
    const complete = document.getElementById('puzzleCanvasCompleteFull');
    if (complete) complete.style.display = 'none';
    
    // Si hay fotos disponibles, seleccionar una diferente aleatoria
    if (puzzleCanvas.fotosDisponibles && puzzleCanvas.fotosDisponibles.length > 0) {
        // Obtener índice actual (si hay una foto seleccionada)
        let currentIndex = 0;
        if (puzzleCanvas.fotoUrl) {
            currentIndex = puzzleCanvas.fotosDisponibles.findIndex(f => f.url === puzzleCanvas.fotoUrl);
            if (currentIndex === -1) currentIndex = 0;
        }
        
        // Elegir un índice diferente aleatorio
        let newIndex;
        if (puzzleCanvas.fotosDisponibles.length === 1) {
            newIndex = 0; // solo una foto, no hay opción
        } else {
            do {
                newIndex = Math.floor(Math.random() * puzzleCanvas.fotosDisponibles.length);
            } while (newIndex === currentIndex);
        }
        
        // Seleccionar la nueva foto
        const nuevaFoto = puzzleCanvas.fotosDisponibles[newIndex];
        seleccionarFotoYPuzzleFull(nuevaFoto.url, newIndex);
    } else {
        // Si no hay fotos, reiniciar con la misma (fallback)
        if (puzzleCanvas.fotoUrl && puzzleCanvas.img) {
            iniciarPuzzleCanvasFull();
        }
    }
}

// ==================== TIMER Y PROGRESO PARA MODO FULL ====================

function iniciarTimerPuzzleCanvasFull() {
    detenerTimerPuzzleCanvas();
    puzzleCanvas.segundos = 0;
    actualizarTimerDisplayCanvasFull();
    
    puzzleCanvas.timer = setInterval(() => {
        puzzleCanvas.segundos++;
        actualizarTimerDisplayCanvasFull();
    }, 1000);
}

function actualizarTimerDisplayCanvasFull() {
    const timerDesktop = document.getElementById('puzzleCanvasTimerFull');
    const timerMobile = document.getElementById('puzzleCanvasTimerFullMobile');
    const tiempo = formatoTimer(puzzleCanvas.segundos);
    if (timerDesktop) timerDesktop.textContent = tiempo;
    if (timerMobile) timerMobile.textContent = tiempo;
}

function actualizarProgresoPuzzleFull() {
    const progressDesktop = document.getElementById('puzzleCanvasProgressFull');
    const progressMobile = document.getElementById('puzzleCanvasProgressFullMobile');
    if (puzzleCanvas.pieces) {
        const total = puzzleCanvas.rows * puzzleCanvas.cols;
        const correctas = puzzleCanvas.pieces.filter(p => p.isCorrect).length;
        const texto = `Piezas: ${correctas}/${total}`;
        if (progressDesktop) progressDesktop.textContent = texto;
        if (progressMobile) progressMobile.textContent = `${correctas}/${total}`;
    }
}

function mostrarHistorialPuzzleCanvasFull() {
    const historyDesktop = document.getElementById('historyListCanvasFull');
    const historyMobile = document.getElementById('historyListCanvasFullMobile');
    if (!historyDesktop && !historyMobile) return;
    
    const html = puzzleCanvas.historial.length === 0 
        ? `<div class="no-history-canvas">¡Completa tu primer puzzle!</div>`
        : [...puzzleCanvas.historial].reverse().slice(0, 5).map(puzzle => {
            const fecha = new Date(puzzle.fecha);
            const fechaFormateada = fecha.toLocaleDateString('es-ES', { day: 'numeric', month: 'short' });
            const dificultadTexto = {3: 'Fácil', 4: 'Medio', 5: 'Difícil'}[puzzle.dificultad];
            return `
                <div class="history-item-canvas">
                    <img src="${puzzle.foto || 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><rect fill=%22%23f0f0f0%22 width=%22100%22 height=%22100%22/></svg>'}" alt="Puzzle">
                    <div class="history-item-canvas-info">
                        <h5>${dificultadTexto} • ${formatoTimer(puzzle.tiempo)}</h5>
                        <p>${fechaFormateada}</p>
                    </div>
                    <div class="history-item-canvas-badge">✓</div>
                </div>
            `;
        }).join('');
    
    if (historyDesktop) historyDesktop.innerHTML = html;
    if (historyMobile) historyMobile.innerHTML = html;
}
// ==================== OBTENER FOTOS ====================
function obtenerFotosParaPuzzle() {
    const fotos = [];
    const diasEspeciales = window.datosConfig?.diasEspeciales || {};
    
    Object.values(diasEspeciales).forEach(dia => {
        if (dia.fotos && dia.fotos.length > 0) {
            dia.fotos.forEach(foto => {
                fotos.push({ url: foto.url, texto: foto.texto || 'Nuestro recuerdo' });
            });
        }
    });
    
    if (fotos.length < 10) {
        for (let i = 0; i < 10; i++) {
            fotos.push({ url: `fotos/01-05/foto${i + 1}.jpg`, texto: `Foto especial ${i + 1}` });
        }
    }
    
    return fotos;
}

function seleccionar3FotosAleatorias(fotosDisponibles) {
    const copiadas = [...fotosDisponibles];
    const seleccionadas = [];
    for (let i = 0; i < Math.min(3, copiadas.length); i++) {
        const idx = Math.floor(Math.random() * copiadas.length);
        seleccionadas.push(copiadas[idx]);
        copiadas.splice(idx, 1);
    }
    return seleccionadas;
}

function nuevasFotosPuzzleCanvas() {
mostrarHistorialPuzzleCanvasFull();
    const fotos = obtenerFotosParaPuzzle();
    const nuevas = seleccionar3FotosAleatorias(fotos);
    puzzleCanvas.fotosDisponibles = nuevas;
    
    const selector = document.getElementById('puzzlePhotoSelector');
    if (selector) {
        selector.innerHTML = nuevas.map((foto, index) => `
            <div class="puzzle-photo-option ${index === 0 ? 'selected' : ''}" 
                 onclick="seleccionarFotoYPuzzle('${foto.url}', ${index})">
                <img src="${foto.url}" alt="Foto ${index + 1}">
                <div class="checkmark">✓</div>
            </div>
        `).join('');
    }
    
    if (nuevas[0]?.url) {
        seleccionarFotoYPuzzle(nuevas[0].url, 0);
    }
}

// ==================== SELECCIONAR FOTO E INICIAR PUZZLE - CORREGIDA ===
function seleccionarFotoYPuzzle(url, index) {
    console.log("🖼️ === SELECCIONANDO FOTO ===");
    console.log("🖼️ URL:", url);
    console.log("🖼️ Índice:", index);
    
    // Marcar foto seleccionada
    document.querySelectorAll('.puzzle-photo-option').forEach((opt, i) => {
        opt.classList.toggle('selected', i === index);
    });

    puzzleCanvas.fotoUrl = url;

    // Actualizar imagen de referencia
    const hintImg = document.getElementById('hintImageAlways');
    if (hintImg) {
        hintImg.src = url;
    }

    // CREAR IMAGEN Y ESPERAR QUE CARGUE COMPLETAMENTE
    puzzleCanvas.img = new Image();
    
    // Agregar timestamp para evitar cache
    const urlConCache = url + (url.includes('?') ? '&' : '?') + 't=' + new Date().getTime();
    
    puzzleCanvas.img.onload = function() {
        console.log("✅ === IMAGEN CARGADA ===");
        console.log("✅ naturalWidth:", this.naturalWidth);
        console.log("✅ naturalHeight:", this.naturalHeight);
        console.log("✅ width:", this.width);
        console.log("✅ height:", this.height);
        console.log("✅ complete:", this.complete);
        console.log("✅ src:", this.src);
        
        if (this.naturalWidth > 0 && this.naturalHeight > 0) {
            console.log("✅ Imagen válida, iniciando puzzle en 200ms...");
            setTimeout(() => {
                iniciarPuzzleCanvas();
            }, 200);
        } else {
            console.error("❌ Imagen sin dimensiones válidas");
            crearImagenRespaldo(url);
        }
    };

    puzzleCanvas.img.onerror = function(e) {
        console.error("❌ === ERROR CARGANDO IMAGEN ===");
        console.error("❌ URL:", url);
        console.error("❌ Error:", e);
        crearImagenRespaldo(url);
    };

    console.log("🔄 Cargando imagen:", urlConCache);
    puzzleCanvas.img.src = urlConCache;
}

function seleccionarFotoYPuzzleFull(url, index) {
    console.log("🖼️ Seleccionando foto para pantalla completa:", url);
    mostrarHistorialPuzzleCanvasFull();
    // Marcar foto seleccionada
    document.querySelectorAll('#puzzlePhotoSelectorFull .puzzle-photo-option').forEach((opt, i) => {
        opt.classList.toggle('selected', i === index);
    });

    document.querySelectorAll('#puzzlePhotoSelectorFullMobile .puzzle-photo-option').forEach((opt, i) => {
    opt.classList.toggle('selected', i === index);
});

    puzzleCanvas.fotoUrl = url;

    // Actualizar imagen de referencia
    const hintImg = document.getElementById('hintImageAlwaysFull');
    if (hintImg) hintImg.src = url;

    // Cargar imagen
    puzzleCanvas.img = new Image();
    const urlConCache = url + (url.includes('?') ? '&' : '?') + 't=' + new Date().getTime();
    
    puzzleCanvas.img.onload = function() {
        console.log("✅ Imagen cargada para puzzle full");
        iniciarPuzzleCanvasFull();
    };
    
    puzzleCanvas.img.onerror = function() {
        console.error("❌ Error cargando imagen, usando fallback");
        crearImagenRespaldoFull(url);
    };
    
    puzzleCanvas.img.src = urlConCache;
}

function iniciarPuzzleCanvasFull() {
    console.log("🧩 === INICIANDO PUZZLE CANVAS FULL ===");
    
    const canvas = document.getElementById('puzzleCanvasFull');
    if (!canvas) { console.error("❌ Canvas no encontrado"); return; }
    
    if (!puzzleCanvas.img || !puzzleCanvas.img.complete || puzzleCanvas.img.naturalWidth === 0) {
        console.error("❌ Imagen no válida");
        return;
    }

    puzzleCanvas.canvas = canvas;
    puzzleCanvas.ctx = canvas.getContext('2d');
    puzzleCanvas.completado = false;

    const complete = document.getElementById('puzzleCanvasCompleteFull');
    if (complete) complete.style.display = 'none';

    const rows = puzzleCanvas.rows;
    const cols = puzzleCanvas.cols;
    const imgW = puzzleCanvas.img.naturalWidth;
    const imgH = puzzleCanvas.img.naturalHeight;
    const aspectRatio = imgH / imgW;

// Dentro de iniciarPuzzleCanvasFull, después de obtener rows, cols, etc.

let baseWidth;
if (window.innerWidth <= 480) {
    baseWidth = 180;          // Móvil pequeño (antes 240)
} else if (window.innerWidth <= 768) {
    baseWidth = 280;          // Móvil grande / tablet (antes 350)
} else {
    baseWidth = 500;          // Escritorio
}

const baseHeight = baseWidth * aspectRatio;

puzzleCanvas.pieceWidth = baseWidth / cols;
puzzleCanvas.pieceHeight = baseHeight / rows;
puzzleCanvas.tabSize = Math.min(16, puzzleCanvas.pieceWidth * 0.25); // Pestañas un poco más pequeñas

const totalWidth = baseWidth + puzzleCanvas.tabSize * 2;
const totalHeight = baseHeight + puzzleCanvas.tabSize * 2;

canvas.width = totalWidth;
canvas.height = totalHeight;
canvas.style.width = '100%';
canvas.style.height = 'auto';
canvas.style.maxWidth = totalWidth + 'px';
canvas.style.display = 'block';
canvas.style.margin = '0 auto';
    
    // CSS responsive: que ocupe el ancho disponible pero sin deformarse
    canvas.style.width = '100%';
    canvas.style.height = 'auto';
    canvas.style.maxWidth = totalWidth + 'px'; // no más grande que su tamaño real
    canvas.style.display = 'block';
    canvas.style.margin = '0 auto'; // centrado

    console.log(`🧩 Canvas full: ${totalWidth}x${totalHeight}, pieza: ${puzzleCanvas.pieceWidth}x${puzzleCanvas.pieceHeight}`);

    generarFormasPiezas();
    crearPiezas();
    dibujarPuzzle();
    configurarEventosCanvasFull();
    iniciarTimerPuzzleCanvasFull();

    puzzleCanvas.activo = true;
}
// Función de respaldo para imágenes (similar a la original)
function crearImagenRespaldoFull(urlOriginal) {
    const canvas = document.createElement('canvas');
    canvas.width = 400;
    canvas.height = 400;
    const ctx = canvas.getContext('2d');
    
    const gradient = ctx.createLinearGradient(0, 0, 400, 400);
    gradient.addColorStop(0, '#9C27B0');
    gradient.addColorStop(1, '#7B1FA2');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 400, 400);
    
    ctx.fillStyle = 'white';
    ctx.font = 'bold 20px Poppins';
    ctx.textAlign = 'center';
    ctx.fillText('Imagen No Disponible', 200, 180);
    ctx.font = '14px Poppins';
    ctx.fillText(urlOriginal.split('/').pop() || 'Verifica la ruta', 200, 220);

    const dataUrl = canvas.toDataURL('image/jpeg');
    puzzleCanvas.fotoUrl = dataUrl;

    puzzleCanvas.img = new Image();
    puzzleCanvas.img.onload = function() {
        console.log("✅ Respaldo cargado");
        iniciarPuzzleCanvasFull();
    };
    puzzleCanvas.img.src = dataUrl;
}
// ==================== INICIAR PUZZLE CANVAS - CORREGIDA ===
function iniciarPuzzleCanvas() {
    console.log("🧩 === INICIANDO PUZZLE CANVAS ===");
    
    const canvas = document.getElementById('puzzleCanvas');
    
    if (!canvas) {
        console.error("❌ Canvas no encontrado");
        return;
    }
    
    if (!puzzleCanvas.img) {
        console.error(" puzzleCanvas.img no existe");
        return;
    }
    
    if (!puzzleCanvas.img.complete || puzzleCanvas.img.naturalWidth === 0) {
        console.error("❌ Imagen no está lista");
        return;
    }

    puzzleCanvas.canvas = canvas;
    puzzleCanvas.ctx = canvas.getContext('2d');
    puzzleCanvas.completado = false;

    const complete = document.getElementById('puzzleCanvasComplete');
    if (complete) complete.style.display = 'none';

    const rows = puzzleCanvas.rows;
    const cols = puzzleCanvas.cols;

    // USAR naturalWidth y naturalHeight
    const imgRatio = puzzleCanvas.img.naturalHeight / puzzleCanvas.img.naturalWidth;
    const baseSize = 360;

    puzzleCanvas.pieceWidth = baseSize / cols;
    puzzleCanvas.pieceHeight = (baseSize * imgRatio) / rows;
    puzzleCanvas.tabSize = Math.min(20, puzzleCanvas.pieceWidth * 0.25);

    const canvasWidth = cols * puzzleCanvas.pieceWidth + puzzleCanvas.tabSize * 2;
    const canvasHeight = rows * puzzleCanvas.pieceHeight + puzzleCanvas.tabSize * 2;

    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    
    const maxWidth = Math.min(canvasWidth, window.innerWidth - 100);
    canvas.style.width = maxWidth + 'px';
    canvas.style.height = (canvasHeight * (maxWidth / canvasWidth)) + 'px';

    console.log("🧩 Canvas:", canvasWidth, "x", canvasHeight);
    console.log("🧩 Pieza:", puzzleCanvas.pieceWidth, "x", puzzleCanvas.pieceHeight);
    console.log("🧩 Imagen:", puzzleCanvas.img.naturalWidth, "x", puzzleCanvas.img.naturalHeight);
    console.log("🧩 Filas:", rows, "Columnas:", cols);

    generarFormasPiezas();
    crearPiezas();
    dibujarPuzzle();
    configurarEventosCanvas();
    iniciarTimerPuzzleCanvas();

    puzzleCanvas.activo = true;
    console.log("✅ === PUZZLE INICIADO ===");
}

function iniciarPuzzleCanvasFull() {
    console.log("🧩 === INICIANDO PUZZLE CANVAS FULL ===");
    
    const canvas = document.getElementById('puzzleCanvasFull');
    if (!canvas) { console.error("❌ Canvas no encontrado"); return; }
    
    if (!puzzleCanvas.img || !puzzleCanvas.img.complete || puzzleCanvas.img.naturalWidth === 0) {
        console.error("❌ Imagen no válida");
        return;
    }

    puzzleCanvas.canvas = canvas;
    puzzleCanvas.ctx = canvas.getContext('2d');
    puzzleCanvas.completado = false;

    // Ocultar mensaje de completado si estaba visible
    const complete = document.getElementById('puzzleCanvasCompleteFull');
    if (complete) complete.style.display = 'none';

    const rows = puzzleCanvas.rows;
    const cols = puzzleCanvas.cols;
    const imgW = puzzleCanvas.img.naturalWidth;
    const imgH = puzzleCanvas.img.naturalHeight;
    const aspectRatio = imgH / imgW;

    // Tamaño deseado para el canvas (ancho máximo 800px, alto proporcional)
    const maxWidth = 800;
    const canvasWidth = maxWidth;
    const canvasHeight = maxWidth * aspectRatio;

    // Tamaño de cada pieza (incluyendo el espacio para las pestañas)
    puzzleCanvas.pieceWidth = canvasWidth / cols;
    puzzleCanvas.pieceHeight = canvasHeight / rows;
    puzzleCanvas.tabSize = Math.min(20, puzzleCanvas.pieceWidth * 0.25);

    // El canvas total necesita espacio extra para las pestañas
    const totalWidth = canvasWidth + puzzleCanvas.tabSize * 2;
    const totalHeight = canvasHeight + puzzleCanvas.tabSize * 2;

    canvas.width = totalWidth;
    canvas.height = totalHeight;
    canvas.style.width = totalWidth + 'px';
    canvas.style.height = totalHeight + 'px';

    console.log(`🧩 Canvas full: ${totalWidth}x${totalHeight}, pieza: ${puzzleCanvas.pieceWidth}x${puzzleCanvas.pieceHeight}`);

    generarFormasPiezas();
    crearPiezas(); // Esta función debe usar las nuevas dimensiones
    dibujarPuzzle(); // Esta función debe usar el contexto correcto
    configurarEventosCanvasFull(); // Versión adaptada para este canvas
    iniciarTimerPuzzleCanvasFull();

    puzzleCanvas.activo = true;
}
// ==================== GENERAR FORMAS DE PIEZAS ====================
function generarFormasPiezas() {
    puzzleCanvas.pieceShapes = [];
    
    for (let r = 0; r < puzzleCanvas.rows; r++) {
        puzzleCanvas.pieceShapes[r] = [];
        for (let c = 0; c < puzzleCanvas.cols; c++) {
            puzzleCanvas.pieceShapes[r][c] = { top: 0, right: 0, bottom: 0, left: 0 };
        }
    }

    for (let r = 0; r < puzzleCanvas.rows; r++) {
        for (let c = 0; c < puzzleCanvas.cols; c++) {
            if (c < puzzleCanvas.cols - 1) {
                const shape = Math.random() > 0.5 ? 1 : -1;
                puzzleCanvas.pieceShapes[r][c].right = shape;
                puzzleCanvas.pieceShapes[r][c + 1].left = -shape;
            }
            if (r < puzzleCanvas.rows - 1) {
                const shape = Math.random() > 0.5 ? 1 : -1;
                puzzleCanvas.pieceShapes[r][c].bottom = shape;
                puzzleCanvas.pieceShapes[r + 1][c].top = -shape;
            }
        }
    }
}

// ==================== CREAR PIEZAS ====================
function crearPiezas() {
    puzzleCanvas.pieces = [];
    const rows = puzzleCanvas.rows;
    const cols = puzzleCanvas.cols;
    const canvas = puzzleCanvas.canvas;
    const margin = puzzleCanvas.margin || 0;
    
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            const correctX = margin + c * puzzleCanvas.pieceWidth;
            const correctY = margin + r * puzzleCanvas.pieceHeight;


            const minX = puzzleCanvas.tabSize;
            const maxX = canvas.width - puzzleCanvas.pieceWidth - puzzleCanvas.tabSize;
            const minY = puzzleCanvas.tabSize;
            const maxY = canvas.height - puzzleCanvas.pieceHeight - puzzleCanvas.tabSize;

            // Posición aleatoria inicial
               let randomX, randomY;
            do {
                randomX = minX + Math.random() * (maxX - minX);
                randomY = minY + Math.random() * (maxY - minY);
            } while (Math.abs(randomX - correctX) < 50 && Math.abs(randomY - correctY) < 50); // evitar que aparezca muy cerca
            
            puzzleCanvas.pieces.push({
                row: r,
                col: c,
                currentX: randomX,
                currentY: randomY,
                correctX: correctX,
                correctY: correctY,
                shape: puzzleCanvas.pieceShapes[r][c],
                isDragging: false,
                isCorrect: false
            });
        }
    }
}

// ==================== DIBUJAR PUZZLE ====================
function dibujarPuzzle() {
    if (!puzzleCanvas.ctx || !puzzleCanvas.img) {
        console.error("❌ ctx o img no disponibles para dibujar");
        return;
    }
    
    puzzleCanvas.ctx.clearRect(0, 0, puzzleCanvas.canvas.width, puzzleCanvas.canvas.height);
    
    // DIBUJAR CADA PIEZA CON SU FRAGMENTO DE IMAGEN
    puzzleCanvas.pieces.forEach(piece => dibujarPieza(piece));
    
    verificarVictoriaCanvas();
    if (document.getElementById('puzzleCanvasFull')) {
        actualizarProgresoPuzzleFull();
    }
}


// ==================== DIBUJAR PIEZA - CORREGIDA DEFINITIVAMENTE ===
function dibujarPieza(piece) {
    const ctx = puzzleCanvas.ctx;
    const img = puzzleCanvas.img;
    
    if (!ctx) {
        console.error("❌ Contexto no disponible");
        return;
    }
    
    if (!img || !img.complete || img.naturalWidth === 0 || img.naturalHeight === 0) {
        console.warn("⚠️ Imagen no válida, dibujando fallback");
        dibujarPiezaFallback(piece);
        return;
    }

    const x = piece.currentX;
    const y = piece.currentY;
    const shape = piece.shape;
    const pw = puzzleCanvas.pieceWidth;
    const ph = puzzleCanvas.pieceHeight;
    const tab = puzzleCanvas.tabSize; // <-- DEFINIR AQUÍ

    ctx.save();
    ctx.beginPath();
    ctx.moveTo(x, y);
    dibujarBordePieza(ctx, x, y, x + pw, y, shape.top, tab);
    dibujarBordePieza(ctx, x + pw, y, x + pw, y + ph, shape.right, tab);
    dibujarBordePieza(ctx, x + pw, y + ph, x, y + ph, shape.bottom, tab);
    dibujarBordePieza(ctx, x, y + ph, x, y, shape.left, tab);
    ctx.closePath();
    ctx.clip();

    // === CALCULAR FRAGMENTO DE IMAGEN CON MARGEN PARA PESTAÑAS ===
    const imgPieceWidth = img.naturalWidth / puzzleCanvas.cols;
    const imgPieceHeight = img.naturalHeight / puzzleCanvas.rows;

    // Factores de escala para convertir tamaño de pieza a tamaño de imagen
    const scaleX = imgPieceWidth / pw;
    const scaleY = imgPieceHeight / ph;

    // Calcular el área de origen (imagen) que cubre la pieza más las pestañas
    const sourceX = Math.max(0, piece.col * imgPieceWidth - tab * scaleX);
    const sourceY = Math.max(0, piece.row * imgPieceHeight - tab * scaleY);
    const sourceW = Math.min(img.naturalWidth - sourceX, imgPieceWidth + 2 * tab * scaleX);
    const sourceH = Math.min(img.naturalHeight - sourceY, imgPieceHeight + 2 * tab * scaleY);

    // Área de destino (canvas) que incluye el espacio para las pestañas
    const destX = x - tab;
    const destY = y - tab;
    const destW = pw + 2 * tab;
    const destH = ph + 2 * tab;

    console.log("🎨 Pieza", piece.row, "x", piece.col);
    console.log("   Fuente:", sourceX, sourceY, sourceW, sourceH);
    console.log("   Destino:", destX, destY, destW, destH);

    // === DIBUJAR FRAGMENTO DE IMAGEN ===
    ctx.drawImage(
        img,
        sourceX, sourceY, sourceW, sourceH,
        destX, destY, destW, destH
    );

    ctx.restore();

    // === DIBUJAR CONTORNO ===
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(x, y);
    dibujarBordePieza(ctx, x, y, x + pw, y, shape.top, tab);
    dibujarBordePieza(ctx, x + pw, y, x + pw, y + ph, shape.right, tab);
    dibujarBordePieza(ctx, x + pw, y + ph, x, y + ph, shape.bottom, tab);
    dibujarBordePieza(ctx, x, y + ph, x, y, shape.left, tab);
    ctx.closePath();

    ctx.strokeStyle = piece.isDragging ? '#e94560' : (piece.isCorrect ? '#4CAF50' : '#ffffff');
    ctx.lineWidth = piece.isCorrect ? 3 : 2;
    ctx.stroke();
    ctx.restore();
}

// === FALLBACK SOLO SI LA IMAGEN NO CARGA ===
function dibujarPiezaFallback(piece) {
    const ctx = puzzleCanvas.ctx;
    const x = piece.currentX;
    const y = piece.currentY;
    const shape = piece.shape;
    const pw = puzzleCanvas.pieceWidth;
    const ph = puzzleCanvas.pieceHeight;
    const tab = puzzleCanvas.tabSize;

    ctx.save();
    ctx.beginPath();
    ctx.moveTo(x, y);
    dibujarBordePieza(ctx, x, y, x + pw, y, shape.top, tab);
    dibujarBordePieza(ctx, x + pw, y, x + pw, y + ph, shape.right, tab);
    dibujarBordePieza(ctx, x + pw, y + ph, x, y + ph, shape.bottom, tab);
    dibujarBordePieza(ctx, x, y + ph, x, y, shape.left, tab);
    ctx.closePath();
    
    ctx.fillStyle = '#9C27B0';
    ctx.fill();
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.restore();
}


function dibujarBordePieza(ctx, x1, y1, x2, y2, shape, tabSize) {
    if (shape === 0) {
        ctx.lineTo(x2, y2);
        return;
    }

    const dx = x2 - x1;
    const dy = y2 - y1;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    const perpX = -dy / distance;
    const perpY = dx / distance;
    const neckWidth = 0.35;
    
    const neck1X = x1 + dx * neckWidth;
    const neck1Y = y1 + dy * neckWidth;
    const neck2X = x1 + dx * (1 - neckWidth);
    const neck2Y = y1 + dy * (1 - neckWidth);
    const headCenterX = x1 + dx * 0.5;
    const headCenterY = y1 + dy * 0.5;
    const headTipX = headCenterX + perpX * tabSize * shape;
    const headTipY = headCenterY + perpY * tabSize * shape;

    ctx.lineTo(neck1X, neck1Y);
    ctx.bezierCurveTo(
        neck1X + perpX * (tabSize * 0.3 * shape),
        neck1Y + perpY * (tabSize * 0.3 * shape),
        headTipX - perpX * (tabSize * 0.2 * shape),
        headTipY - perpY * (tabSize * 0.2 * shape),
        headTipX, headTipY
    );
    ctx.bezierCurveTo(
        headTipX + perpX * (tabSize * 0.2 * shape),
        headTipY + perpY * (tabSize * 0.2 * shape),
        neck2X + perpX * (tabSize * 0.3 * shape),
        neck2Y + perpY * (tabSize * 0.3 * shape),
        neck2X, neck2Y
    );
    ctx.lineTo(x2, y2);
}

// ==================== EVENTOS DE ARRASTRAR ====================
function configurarEventosCanvas() {
    const canvas = puzzleCanvas.canvas;
    if (!canvas) return;
    
    canvas.addEventListener('mousedown', handleCanvasMouseDown);
    canvas.addEventListener('mousemove', handleCanvasMouseMove);
    canvas.addEventListener('mouseup', handleCanvasMouseUp);
    canvas.addEventListener('mouseleave', handleCanvasMouseLeave);
    
    canvas.addEventListener('touchstart', handleCanvasTouchStart, { passive: false });
    canvas.addEventListener('touchmove', handleCanvasTouchMove, { passive: false });
    canvas.addEventListener('touchend', handleCanvasTouchEnd);
}

function handleCanvasMouseDown(e) {
    if (puzzleCanvas.completado) return;
    
    const rect = puzzleCanvas.canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    for (let i = puzzleCanvas.pieces.length - 1; i >= 0; i--) {
        const piece = puzzleCanvas.pieces[i];
        if (mouseX >= piece.currentX - puzzleCanvas.tabSize && 
            mouseX <= piece.currentX + puzzleCanvas.pieceWidth + puzzleCanvas.tabSize &&
            mouseY >= piece.currentY - puzzleCanvas.tabSize && 
            mouseY <= piece.currentY + puzzleCanvas.pieceHeight + puzzleCanvas.tabSize) {
            
            puzzleCanvas.selectedPiece = piece;
            piece.isDragging = true;
            puzzleCanvas.offsetX = mouseX - piece.currentX;
            puzzleCanvas.offsetY = mouseY - piece.currentY;
            
            puzzleCanvas.pieces.splice(i, 1);
            puzzleCanvas.pieces.push(piece);
            break;
        }
    }
    dibujarPuzzle();
}

function handleCanvasMouseMove(e) {
    if (puzzleCanvas.selectedPiece) {
        const rect = puzzleCanvas.canvas.getBoundingClientRect();
        puzzleCanvas.selectedPiece.currentX = e.clientX - rect.left - puzzleCanvas.offsetX;
        puzzleCanvas.selectedPiece.currentY = e.clientY - rect.top - puzzleCanvas.offsetY;
        dibujarPuzzle();
    }
}

function handleCanvasMouseUp() {
    if (puzzleCanvas.selectedPiece) {
        puzzleCanvas.selectedPiece.isDragging = false;
        
        const snapDistance = 25;
        const piece = puzzleCanvas.selectedPiece;
        
        if (Math.abs(piece.currentX - piece.correctX) < snapDistance &&
            Math.abs(piece.currentY - piece.correctY) < snapDistance) {
            piece.currentX = piece.correctX;
            piece.currentY = piece.correctY;
            piece.isCorrect = true;
        }
        
        puzzleCanvas.selectedPiece = null;
        dibujarPuzzle();
    }
}

function handleCanvasMouseLeave() {
    if (puzzleCanvas.selectedPiece) {
        puzzleCanvas.selectedPiece.isDragging = false;
        puzzleCanvas.selectedPiece = null;
        dibujarPuzzle();
    }
}

function handleCanvasTouchStart(e) {
    if (puzzleCanvas.completado) return;
    e.preventDefault();
    const touch = e.touches[0];
    const rect = puzzleCanvas.canvas.getBoundingClientRect();
    handleCanvasMouseDown({ clientX: touch.clientX, clientY: touch.clientY });
}

function handleCanvasTouchMove(e) {
    e.preventDefault();
    const touch = e.touches[0];
    handleCanvasMouseMove({ clientX: touch.clientX, clientY: touch.clientY });
}

function handleCanvasTouchEnd() {
    handleCanvasMouseUp();
}

// ==================== VERIFICAR VICTORIA ====================
function verificarVictoriaCanvas() {
    const total = puzzleCanvas.rows * puzzleCanvas.cols;
    const correctas = puzzleCanvas.pieces.filter(p => p.isCorrect).length;
    
    // Actualizar progreso si estamos en modo full
    if (document.getElementById('puzzleCanvasFull')) {
        const progress = document.getElementById('puzzleCanvasProgressFull');
        if (progress) progress.textContent = `Piezas: ${correctas}/${total}`;
    }
    
    if (correctas === total && puzzleCanvas.activo && !puzzleCanvas.completado) {
        if (document.getElementById('puzzleCanvasFull')) {
            completarPuzzleCanvasFull();
        } else {
            completarPuzzleCanvas(); // la versión original (asumo que existe)
        }
    }
}

// ==================== COMPLETAR PUZZLE ====================
function completarPuzzleCanvasFull() {
    detenerTimerPuzzleCanvas();
    puzzleCanvas.completado = true;
    
    const complete = document.getElementById('puzzleCanvasCompleteFull');
    const mensaje = document.getElementById('puzzleCanvasCompleteMessageFull');
    
    if (complete) {
        complete.style.display = 'block';
    }
    
    const mensajes = {
        3: "¡Excelente! Eres un maestro del amor 💘",
        4: "¡Increíble! Nuestro amor encaja perfecto 🧩",
        5: "¡LEGENDARIO! Como nuestro amor, imposible de separar 💑"
    };
    
    if (mensaje) {
        mensaje.innerHTML = `
            <strong>Tiempo: ${formatoTimer(puzzleCanvas.segundos)}</strong><br>
            ${mensajes[puzzleCanvas.rows]}<br>
            <small>Rompecabezas completados: ${puzzleCanvas.historial.length + 1}</small>
        `;
    }
    
    // Guardar en historial
    puzzleCanvas.historial.push({
        fecha: new Date().toISOString(),
        dificultad: puzzleCanvas.rows,
        tiempo: puzzleCanvas.segundos,
        foto: puzzleCanvas.fotoUrl || ''
    });
    localStorage.setItem('rompecabezasCompletados', JSON.stringify(puzzleCanvas.historial));
    
    actualizarContadorRompecabezas();
    mostrarHistorialPuzzleCanvasFull();
    lanzarConfetiPuzzle();
}

// ==================== TIMER ====================
function iniciarTimerPuzzleCanvas() {
    detenerTimerPuzzleCanvas();
    puzzleCanvas.segundos = 0;
    actualizarTimerDisplayCanvas();
    
    puzzleCanvas.timer = setInterval(() => {
        puzzleCanvas.segundos++;
        actualizarTimerDisplayCanvas();
    }, 1000);
}

function detenerTimerPuzzleCanvas() {
    if (puzzleCanvas.timer) {
        clearInterval(puzzleCanvas.timer);
        puzzleCanvas.timer = null;
    }
}

function actualizarTimerDisplayCanvas() {
    const timer = document.getElementById('puzzleCanvasTimer');
    if (timer) {
        timer.textContent = formatoTimer(puzzleCanvas.segundos);
    }
}

function formatoTimer(segundos) {
    const mins = Math.floor(segundos / 60).toString().padStart(2, '0');
    const secs = (segundos % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
}

// ==================== HISTORIAL ====================
function mostrarHistorialPuzzleCanvas() {
    const historyList = document.getElementById('historyListCanvas');
    if (!historyList) return;
    
    if (puzzleCanvas.historial.length === 0) {
        historyList.innerHTML = `<div class="no-history-canvas">¡Completa tu primer puzzle para verlo aquí! 🧩</div>`;
        return;
    }
    
    const ordenados = [...puzzleCanvas.historial].reverse().slice(0, 5);
    
    historyList.innerHTML = ordenados.map((puzzle, index) => {
        const fecha = new Date(puzzle.fecha);
        const fechaFormateada = fecha.toLocaleDateString('es-ES', { day: 'numeric', month: 'short' });
        const dificultadTexto = {3: 'Fácil', 4: 'Medio', 5: 'Difícil'}[puzzle.dificultad];
        
        return `
            <div class="history-item-canvas">
                <img src="${puzzle.foto || 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><rect fill=%22%23f0f0f0%22 width=%22100%22 height=%22100%22/></svg>'}" alt="Puzzle">
                <div class="history-item-canvas-info">
                    <h5>${dificultadTexto} • ${formatoTimer(puzzle.tiempo)}</h5>
                    <p>${fechaFormateada}</p>
                </div>
                <div class="history-item-canvas-badge">✓</div>
            </div>
        `;
    }).join('');
}

// ==================== VOLVER AL SELECTOR ====================
function volverAlSelectorPuzzle() {
    detenerTimerPuzzleCanvas();
    puzzleCanvas.activo = false;
    puzzleCanvas.completado = false;
    
    const complete = document.getElementById('puzzleCanvasComplete');
    if (complete) complete.style.display = 'none';
    
    if (puzzleCanvas.fotoUrl && puzzleCanvas.img) {
        iniciarPuzzleCanvas();
    }
}

// ==================== CAMBIAR DIFICULTAD ====================
function cambiarDificultadCanvas(nivel) {
    puzzleCanvas.rows = nivel;
    puzzleCanvas.cols = nivel;
    puzzleCanvas.completado = false;
    
    document.querySelectorAll('.difficulty-btn-canvas').forEach((btn, index) => {
        btn.classList.toggle('active', index + 3 === nivel);
    });
    
    if (puzzleCanvas.img && puzzleCanvas.img.complete && puzzleCanvas.img.naturalWidth > 0) {
        iniciarPuzzleCanvas();
    }
}

// ==================== CONFETI ====================
function lanzarConfetiPuzzle() {
    const colores = ['#9C27B0', '#E91E63', '#2196F3', '#4CAF50', '#FF9800'];
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confeti = document.createElement('div');
            confeti.style.cssText = `
                position: fixed; width: 10px; height: 10px;
                background: ${colores[Math.floor(Math.random() * colores.length)]};
                border-radius: ${Math.random() > 0.5 ? '50%' : '0'};
                pointer-events: none; z-index: 9999;
                top: -10px; left: ${Math.random() * 100}vw;
                animation: caerConfeti ${2 + Math.random() * 2}s linear forwards;
            `;
            document.body.appendChild(confeti);
            setTimeout(() => { if (confeti.parentNode) confeti.parentNode.removeChild(confeti); }, 3000);
        }, i * 50);
    }
}

// ==================== ACTUALIZAR CONTADOR ====================
function actualizarContadorRompecabezas() {
    const contador = document.getElementById('contador-rompecabezas');
    if (contador) {
        contador.textContent = puzzleCanvas.historial.length;
    }
}
function mostrarAyudaMovil() {
    const overlay = document.getElementById('ayudaOverlayMovil');
    const img = document.getElementById('ayudaImagenMovil');
    if (!overlay || !img) return;
    
    const url = puzzleCanvas.fotoUrl;
    if (!url) return;
    
    img.src = url;
    overlay.classList.add('visible');
    
    let segundos = 5;
    const timerSpan = document.getElementById('ayudaTimerMovil');
    if (timerSpan) timerSpan.textContent = segundos + 's';
    
    const intervalo = setInterval(() => {
        segundos--;
        if (timerSpan) timerSpan.textContent = segundos + 's';
        if (segundos <= 0) {
            clearInterval(intervalo);
            ocultarAyudaMovil();
        }
    }, 1000);
    
    overlay.dataset.intervalo = intervalo;
}

function ocultarAyudaMovil() {
    const overlay = document.getElementById('ayudaOverlayMovil');
    if (!overlay) return;
    
    if (overlay.dataset.intervalo) {
        clearInterval(parseInt(overlay.dataset.intervalo));
        delete overlay.dataset.intervalo;
    }
    
    overlay.classList.remove('visible');
}

// ==================== VIDEO SECRETO POR TRIPLE CLIC ====================
let contadorClicksTitulo = 0;
let timerClicksTitulo;

function iniciarContadorClicks() {
    contadorClicksTitulo++;
    
    // Si es el primer clic, iniciamos temporizador de 2 segundos
    if (contadorClicksTitulo === 1) {
        timerClicksTitulo = setTimeout(() => {
            contadorClicksTitulo = 0; // Reiniciamos si pasa demasiado tiempo
        }, 2000);
    }
    
    // Si llegamos a 3 clics
    if (contadorClicksTitulo === 3) {
        clearTimeout(timerClicksTitulo);
        contadorClicksTitulo = 0;
        mostrarVideoSecreto();
    }
}

function mostrarVideoSecreto() {
    // CAMBIA ESTA URL POR LA DEL VIDEO QUE QUIERAS
    const videoUrl = 'fotos/video-secreto.mp4'; // Para video local
    // const videoUrl = 'https://www.youtube.com/watch?v=VIDEO_ID'; // Para YouTube
    
    // Detectar si es YouTube
    const esYouTube = videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be');
    
    let contenidoHTML;
    if (esYouTube) {
        // Extraer ID del video de YouTube
        let videoId = '';
        if (videoUrl.includes('youtu.be')) {
            videoId = videoUrl.split('/').pop().split('?')[0];
        } else {
            const match = videoUrl.match(/[?&]v=([^&]+)/);
            videoId = match ? match[1] : '';
        }
        
        if (videoId) {
            contenidoHTML = `
                <h3 style="color: #9C27B0; margin-bottom: 15px;">🎬 Video Secreto</h3>
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/${videoId}" 
                    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            `;
        } else {
            contenidoHTML = `<p style="color:red;">Error: URL de YouTube no válida</p>`;
        }
    } else {
        // Video local
        contenidoHTML = `
            <h3 style="color: #9C27B0; margin-bottom: 15px;">🎬 Video Secreto</h3>
            <video src="${videoUrl}" controls autoplay style="max-width:100%; max-height:400px; border-radius:10px;"></video>
        `;
    }
    
    mostrarPopupContenido(contenidoHTML, false, [], null, false);
}

function mostrarCartaSecretaDirecta(texto) {
    // Limpiar el texto - eliminar espacios múltiples y saltos de línea excesivos
    let textoLimpio = texto.replace(/\s+/g, ' ').trim();
    // Restaurar puntos y mayúsculas
    textoLimpio = textoLimpio.replace(/\.\s+/g, '. ').replace(/\s+\./g, '.');
    
    // Separar contenido y firma
    let contenidoPrincipal = textoLimpio;
    let firma = "";
    
    // Buscar "Att:" o "Att " para separar la firma
    const attIndex = textoLimpio.search(/Att:|Att\s/);
    if (attIndex !== -1) {
        contenidoPrincipal = textoLimpio.substring(0, attIndex).trim();
        firma = textoLimpio.substring(attIndex).trim();
        // Limpiar la firma
        firma = firma.replace(/Att:|Att\s/, '').trim();
    }
    
    // Dividir en frases por puntos, signos de exclamación o interrogación
    // pero mantener los puntos dentro de números (ej: 3.5 no se separa)
    const frases = contenidoPrincipal.split(/(?<=[.!?])\s+(?=[A-ZÁÉÍÓÚÜÑ])/);
    
    // Construir los párrafos (cada 3-4 frases)
    let parrafos = [];
    let parrafoActual = "";
    const frasesPorParrafo = 3;
    
    for (let i = 0; i < frases.length; i++) {
        let frase = frases[i].trim();
        if (!frase) continue;
        
        // Asegurar que termine con punto si no tiene
        if (!frase.match(/[.!?]$/)) {
            frase += ".";
        }
        
        if (parrafoActual.split(' ').length < 60 && parrafoActual.split('.').length < frasesPorParrafo) {
            parrafoActual += (parrafoActual ? " " : "") + frase;
        } else {
            if (parrafoActual) parrafos.push(parrafoActual);
            parrafoActual = frase;
        }
    }
    if (parrafoActual) parrafos.push(parrafoActual);
    
    // Construir HTML de los párrafos con espaciado normal
    let htmlContenido = '';
    for (let i = 0; i < parrafos.length; i++) {
        let parrafo = parrafos[i];
        // Eliminar espacios múltiples dentro del párrafo
        parrafo = parrafo.replace(/\s{2,}/g, ' ');
        htmlContenido += `<p style="margin: 0 0 15px 0; line-height: 1.65; text-align: left; word-spacing: normal; letter-spacing: normal;">${parrafo}</p>`;
    }
    
    // Procesar la firma
    let firmaHTML = '';
    if (firma) {
        firmaHTML = `
            <div style="margin-top: 25px; padding-top: 15px; text-align: right; border-top: 2px solid #e6c9a8;">
                <p style="margin: 0; font-family: 'Dancing Script', cursive; font-size: 1.4rem; font-weight: 600; color: #5d3a1a; font-style: italic;">
                    ${firma}
                </p>
            </div>
        `;
    }
    
  const html = `
    <div style="background: #fff9e6; border-radius: 20px; padding: 20px; max-width: 580px; margin: 0 auto; border: 3px solid #9C27B0; box-shadow: 0 20px 40px rgba(0,0,0,0.25);">
        <h3 style="color: #9C27B0; margin-bottom: 15px; display: flex; align-items: center; gap: 8px; font-family: 'Poppins', sans-serif; font-size: 1.2rem; border-bottom: 2px solid #f0e0c0; padding-bottom: 12px;">
            <span style="font-size: 1.5rem;">💌</span> Para ti, en este 5 de julio
        </h3>
        
        <div style="background: white; border-radius: 15px; padding: 18px; max-height: 500px; overflow-y: auto; font-family: 'Poppins', sans-serif; font-size: 0.85rem; line-height: 1.5; color: #3a2a1f; text-align: left; box-shadow: inset 0 0 10px rgba(0,0,0,0.03);">
            ${htmlContenido}
            ${firmaHTML}
        </div>
    </div>
`;
    
    mostrarPopupContenido(html, false, [], null, false);
}

// Hacer funciones disponibles globalmente
window.mostrarPuzzleCanvas = mostrarPuzzleCanvas;
window.cambiarDificultadCanvas = cambiarDificultadCanvas;
window.seleccionarFotoYPuzzle = seleccionarFotoYPuzzle;
window.nuevasFotosPuzzleCanvas = nuevasFotosPuzzleCanvas;
window.volverAlSelectorPuzzle = volverAlSelectorPuzzle;
// ============================================
// EXPORTAR FUNCIONES GLOBALES
// ============================================
window.mostrarRazonAleatoria = mostrarRazonAleatoria;
window.mostrarPalabraSecreta = mostrarPalabraSecreta;
window.actualizarEstadisticasAjustadas = actualizarEstadisticasAjustadas;
window.configurarBotonesBasicosAjustados = configurarBotonesBasicosAjustados;

function diagnosticarPuzzle() {
    console.log("🔍 === DIAGNÓSTICO ===");
    console.log("img:", puzzleCanvas.img);
    console.log("img.complete:", puzzleCanvas.img?.complete);
    console.log("img.naturalWidth:", puzzleCanvas.img?.naturalWidth);
    console.log("img.naturalHeight:", puzzleCanvas.img?.naturalHeight);
    console.log("img.src:", puzzleCanvas.img?.src);
    console.log("ctx:", puzzleCanvas.ctx);
    console.log("canvas:", puzzleCanvas.canvas);
    console.log("pieces:", puzzleCanvas.pieces?.length);
}