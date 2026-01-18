// ============================================
// ARCHIVO: calendario-fix-ajustado.js
// CALENDARIO DE 5 ABRIL 2025 A 5 ABRIL 2026
// ============================================

console.log("📅 Cargando calendario ajustado (5/4/2025 - 5/4/2026)...");

// Fechas de inicio y fin
const FECHA_INICIO = new Date('2025-04-05');
const FECHA_FIN = new Date('2026-04-06');

// Meses en español
const MESES = ["ENERO", "FEBRERO", "MARZO", "ABRIL", "MAYO", "JUNIO", 
               "JULIO", "AGOSTO", "SEPTIEMBRE", "OCTUBRE", "NOVIEMBRE", "DICIEMBRE"];

// Días por mes (considerando año bisiesto 2024 pero no 2025/2026)
const DIAS_POR_MES = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// Variables
let momentosDesbloqueados = 0;

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
    
    // Crear título especial
    const tituloEspecial = document.createElement('div');
    tituloEspecial.className = 'mes-titulo';
    tituloEspecial.style.background = 'linear-gradient(45deg, #e91e63, #9c27b0)';
    tituloEspecial.style.color = 'white';
    tituloEspecial.style.marginBottom = '20px';
    tituloEspecial.innerHTML = `
        <div style="display: flex; align-items: center; justify-content: center; gap: 10px;">
            <i class="fas fa-heart"></i>
            <span>NUESTRO PRIMER AÑO JUNTOS (5 Abril 2025 - 5 Abril 2026)</span>
            <i class="fas fa-heart"></i>
        </div>
        <div style="font-size: 0.9rem; margin-top: 5px; opacity: 0.9;">
            ${totalDias} días de amor
        </div>
    `;
    calendar.appendChild(tituloEspecial);
    
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
                mostrarContenidoAjustado(contadorDiasTotales, fechaCompleta);
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
    const mes = fecha.getMonth();
    const dia = fecha.getDate();
    const año = fecha.getFullYear();
    
    console.log(`📱 Mostrando día ${numeroDia} (${dia}/${mes + 1}/${año})`);
    
    // Crear dos formatos de clave
    const fechaKey = `${(mes + 1).toString().padStart(2, '0')}-${dia.toString().padStart(2, '0')}`;
    const fechaKeyConAnio = `${año}-${(mes + 1).toString().padStart(2, '0')}-${dia.toString().padStart(2, '0')}`;
    
    let contenidoHTML = '';
    
    // ==================== 1. PRIMERO VERIFICAR SI ES EL ANIVERSARIO (2026-04-05) ====================
    if (dia === 5 && mes === 3 && año === 2026) {
        // Buscar contenido específico para el aniversario
        let datoAniversario = null;
        if (window.datosConfig && window.datosConfig.diasEspeciales) {
            datoAniversario = window.datosConfig.diasEspeciales[fechaKeyConAnio] || 
                             window.datosConfig.diasEspeciales[fechaKey];
        }
        
        contenidoHTML = `
            <h2 style="color: #9C27B0; margin-bottom: 20px; font-family: 'Dancing Script', cursive; font-size: 2.5rem; text-align: center;">
                ¡FELIZ PRIMER ANIVERSARIO! 🎉
            </h2>
            <div style="background: linear-gradient(135deg, #f3e5f5, #e1bee7); padding: 25px; border-radius: 20px; margin: 20px 0; text-align: center;">
                <h3 style="color: #7B1FA2; margin-bottom: 15px; font-size: 1.8rem;">Día ${numeroDia} - 5 de Abril 2026</h3>
                
                <div style="background: white; padding: 20px; border-radius: 15px; margin-bottom: 20px; box-shadow: 0 5px 15px rgba(0,0,0,0.1);">
                    <p style="font-size: 1.4rem; color: #4A148C; margin-bottom: 15px; line-height: 1.6;">
                        <i class="fas fa-heart" style="color: #E91E63; margin-right: 10px;"></i>
                        365 días juntos, 525,600 minutos de felicidad, un amor infinito.
                    </p>
                    <p style="font-size: 1.1rem; color: #666; font-style: italic;">
                        "Hoy celebramos un año de risas, abrazos y momentos inolvidables"
                    </p>
                </div>
                
                <!-- IMAGEN CON PROPORCIONES CORRECTAS -->
                <div style="width: 100%; max-width: 500px; margin: 0 auto 20px;">
                    <img src="fotos/aniversario.jpg" alt="Nuestro aniversario" 
                         style="width: 100%; height: auto; border-radius: 15px; border: 5px solid white; box-shadow: 0 8px 25px rgba(0,0,0,0.2); object-fit: contain; background: #f8f9fa;"
                         onerror="this.onerror=null; this.src='data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"500\" height=\"300\" viewBox=\"0 0 500 300\"><rect width=\"500\" height=\"300\" fill=\"%239C27B0\"/><text x=\"250\" y=\"150\" font-family=\"Arial\" font-size=\"40\" text-anchor=\"middle\" fill=\"white\" dy=\".3em\">🎉 1 AÑO JUNTOS 🎉</text></svg>';">
                </div>
                
                <div style="font-size: 1.3rem; padding: 25px; background: white; border-radius: 15px; margin-top: 20px; border-left: 5px solid #E91E63; text-align: left; line-height: 1.6;">
                    <i class="fas fa-heart" style="color: #E91E63; margin-right: 10px; font-size: 1.5rem; vertical-align: middle;"></i>
                    ${datoAniversario?.texto || '"El día que cumplimos nuestro primer año juntos. Cada risa, cada abrazo, cada momento contigo ha sido el mejor regalo. Te amo más que ayer y menos que mañana."'}
                </div>
                
                <div style="margin-top: 25px; padding: 15px; background: linear-gradient(45deg, #FF9800, #FF5722); color: white; border-radius: 10px; font-size: 1.2rem;">
                    <i class="fas fa-champagne-glasses" style="margin-right: 10px;"></i>
                    ¡Por muchos años más juntos! 🥂
                </div>
            </div>
        `;
        
        lanzarConfetiEspecial();
        
    } 
    // ==================== 2. VERIFICAR SI ES DÍA DE INICIO (2025-04-05) ====================
    else if (dia === 5 && mes === 3 && año === 2025) {
        let datoInicio = null;
        if (window.datosConfig && window.datosConfig.diasEspeciales) {
            datoInicio = window.datosConfig.diasEspeciales[fechaKeyConAnio] || 
                        window.datosConfig.diasEspeciales[fechaKey];
        }
        
        const titulo = `Día ${numeroDia} - ${dia} de ${MESES[mes]} ${año}`;
        contenidoHTML = `
            <h2 style="color: #FF9800; margin-bottom: 20px; font-family: 'Dancing Script', cursive; font-size: 2.5rem; text-align: center;">
                ¡COMIENZA NUESTRA AVENTURA! 🚀
            </h2>
            <div style="background: linear-gradient(135deg, #FFF3E0, #FFECB3); padding: 25px; border-radius: 20px; margin: 20px 0; text-align: center;">
                <h3 style="color: #F57C00; margin-bottom: 15px; font-size: 1.8rem;">${titulo}</h3>
                
                <div style="background: white; padding: 20px; border-radius: 15px; margin-bottom: 20px; box-shadow: 0 5px 15px rgba(0,0,0,0.1);">
                    <p style="font-size: 1.4rem; color: #E65100; margin-bottom: 15px; line-height: 1.6;">
                        <i class="fas fa-star" style="color: #FF9800; margin-right: 10px;"></i>
                        El día en que nuestros caminos se unieron para siempre
                    </p>
                </div>
                
                <!-- IMAGEN CON PROPORCIONES CORRECTAS -->
                <div style="width: 100%; max-width: 500px; margin: 0 auto 20px;">
                    <img src="fotos/inicio.jpg" alt="Nuestro comienzo" 
                         style="width: 100%; height: auto; border-radius: 15px; border: 5px solid white; box-shadow: 0 8px 25px rgba(0,0,0,0.2); object-fit: contain; background: #f8f9fa;"
                         onerror="this.onerror=null; this.src='data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"500\" height=\"300\" viewBox=\"0 0 500 300\"><rect width=\"500\" height=\"300\" fill=\"%23FF9800\"/><text x=\"250\" y=\"150\" font-family=\"Arial\" font-size=\"40\" text-anchor=\"middle\" fill=\"white\" dy=\".3em\">🌟 COMIENZO 🌟</text></svg>';">
                </div>
                
                <div style="font-size: 1.3rem; padding: 25px; background: white; border-radius: 15px; margin-top: 20px; border-left: 5px solid #FF9800; text-align: left; line-height: 1.6;">
                    <i class="fas fa-heart" style="color: #E91E63; margin-right: 10px; font-size: 1.5rem; vertical-align: middle;"></i>
                    ${datoInicio?.texto || '"El primer día de nuestra historia juntos. Todo comenzó aquí, con una sonrisa y la promesa de muchos días felices por venir."'}
                </div>
            </div>
        `;
        
        lanzarEfectosEspeciales();
        
    }
    // ==================== 3. LUEGO VERIFICAR OTROS DÍAS ESPECIALES ====================
    else if (window.datosConfig && window.datosConfig.diasEspeciales) {
        // Buscar primero con año, luego sin año
        const dato = window.datosConfig.diasEspeciales[fechaKeyConAnio] || 
                    window.datosConfig.diasEspeciales[fechaKey];
        
        if (dato) {
            const titulo = `Día ${numeroDia} - ${dia} de ${MESES[mes]} ${año}`;
            
            if (dato.tipo === "foto") {
                contenidoHTML = `
                    <h2 style="color: #e91e63; margin-bottom: 20px; font-family: 'Dancing Script', cursive; font-size: 2rem; text-align: center;">${titulo}</h2>
                    
                    <div style="width: 100%; max-width: 500px; margin: 0 auto 25px;">
                        <img src="${dato.contenido}" alt="Foto especial" 
                             style="width: 100%; height: auto; max-height: 400px; border-radius: 15px; border: 3px solid #ffebee; box-shadow: 0 8px 20px rgba(0,0,0,0.15); object-fit: contain; background: #f8f9fa;"
                             onerror="this.onerror=null; this.style.display='none'">
                    </div>
                    
                    <div style="font-size: 1.3rem; padding: 20px; background: linear-gradient(135deg, #ffebee, #fce4ec); border-radius: 15px; margin: 20px 0; text-align: center; line-height: 1.6;">
                        <i class="fas fa-heart" style="color: #e91e63; margin-right: 10px;"></i>
                        ${dato.texto || 'Un día especial contigo ❤️'}
                    </div>
                `;
            } else {
                contenidoHTML = `
                    <h2 style="color: #e91e63; margin-bottom: 20px; font-family: 'Dancing Script', cursive; font-size: 2rem; text-align: center;">${titulo}</h2>
                    <div style="font-size: 1.5rem; padding: 30px; background: linear-gradient(135deg, #f3e5f5, #e8eaf6); border-radius: 15px; margin: 20px 0; text-align: center; font-style: italic; line-height: 1.6;">
                        "${dato.contenido}"
                        ${dato.texto ? `<p style="margin-top: 20px; font-size: 1.1rem; color: #666; font-style: normal;">${dato.texto}</p>` : ''}
                    </div>
                `;
            }
            
            lanzarEfectosEspeciales();
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
            <h2 style="color: #e91e63; margin-bottom: 20px; font-family: 'Dancing Script', cursive; font-size: 2rem; text-align: center;">${titulo}</h2>
            <div style="font-size: 1.5rem; padding: 30px; background: linear-gradient(135deg, #e8f5e9, #f1f8e9); border-radius: 15px; margin: 20px 0; text-align: center; font-style: italic; line-height: 1.6;">
                "${fraseAleatoria}"
                <p style="margin-top: 20px; font-size: 1rem; color: #666; font-style: normal;">
                    <i class="fas fa-heart" style="color: #e91e63;"></i>
                    Aunque no haya un recuerdo especial registrado, este día fue perfecto porque estuviste en él.
                </p>
            </div>
        `;
    }
    
    // ==================== 5. MOSTRAR EL CONTENIDO ====================
    mostrarPopupContenido(contenidoHTML);
}

// ==================== FUNCIÓN PARA CONFETI ESPECIAL DE ANIVERSARIO ====================
function lanzarConfetiEspecial() {
    console.log("🎉 Lanzando confeti especial de aniversario!");
    
    // Crear más confeti y de colores especiales
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confeti = document.createElement('div');
            confeti.style.cssText = `
                position: fixed;
                width: 15px;
                height: 15px;
                background: ${['#9C27B0', '#673AB7', '#E91E63', '#FF9800', '#4CAF50'][Math.floor(Math.random()*5)]};
                border-radius: ${Math.random() > 0.5 ? '50%' : '0'};
                pointer-events: none;
                z-index: 9998;
                top: -20px;
                left: ${Math.random() * 100}vw;
                animation: caerConfeti ${2 + Math.random() * 2}s linear forwards;
            `;
            
            document.body.appendChild(confeti);
            
            // Auto-eliminar
            setTimeout(() => {
                if (confeti.parentNode) {
                    confeti.parentNode.removeChild(confeti);
                }
            }, 3000);
        }, i * 50);
    }
    
    // Agregar animación CSS para el confeti
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

// ==================== FUNCIÓN PARA EFECTOS ESPECIALES NORMALES ====================
function lanzarEfectosEspeciales() {
    // Confeti normal (menos cantidad)
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const confeti = document.createElement('div');
            confeti.style.cssText = `
                position: fixed;
                width: 10px;
                height: 10px;
                background: ${['#e91e63', '#ff4081', '#00bcd4', '#ffeb3b'][Math.floor(Math.random()*4)]};
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

// ==================== BUSCADOR AJUSTADO ====================
function configurarBuscadorAjustado() {
    const inputFecha = document.getElementById('buscarFecha');
    const btnBuscar = document.getElementById('btnBuscar');
    
    if (!inputFecha || !btnBuscar) {
        console.error("❌ Elementos del buscador no encontrados");
        return;
    }
    
    // Establecer fecha mínima y máxima (5 abril 2025 - 5 abril 2026)
    const fechaMin = '2025-04-05';
    const fechaMax = '2026-04-05';
    
    inputFecha.min = fechaMin;
    inputFecha.max = fechaMax;
    inputFecha.value = ''; // Limpiar valor inicial
    
    // Configurar evento de búsqueda
    btnBuscar.onclick = function() {
        if (!inputFecha.value) {
            // Indicación visual
            inputFecha.style.borderColor = '#e91e63';
            inputFecha.style.boxShadow = '0 0 0 3px rgba(233, 30, 99, 0.2)';
            setTimeout(() => {
                inputFecha.style.borderColor = '';
                inputFecha.style.boxShadow = '';
            }, 1000);
            return;
        }
        
        const fechaSeleccionada = new Date(inputFecha.value);
        
        // Verificar que esté dentro del rango
        if (fechaSeleccionada < FECHA_INICIO || fechaSeleccionada > FECHA_FIN) {
            mostrarNotificacion('⚠️ Fecha fuera de nuestro primer año (5/4/2025 - 5/4/2026)', 'error');
            inputFecha.value = '';
            return;
        }
        
        // Calcular número de día
        const diffTiempo = fechaSeleccionada - FECHA_INICIO;
        const diffDias = Math.floor(diffTiempo / (1000 * 60 * 60 * 24)) + 1;
        
        // Mostrar contenido
        mostrarContenidoAjustado(diffDias, fechaSeleccionada);
        inputFecha.value = '';
    };
    
    // También buscar al presionar Enter
    inputFecha.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            btnBuscar.click();
        }
    });
    
    // Cambiar placeholder para mostrar el rango
    inputFecha.placeholder = "5/4/2025 a 5/4/2026";
    
    console.log("✅ Buscador ajustado configurado");
}

// ==================== FUNCIONES AUXILIARES ====================
function mostrarPopupContenido(contenidoHTML) {
    // Cerrar popup anterior si existe
    const popupAnterior = document.getElementById('popup-simple');
    if (popupAnterior) {
        popupAnterior.remove();
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
    `;
    
    popup.innerHTML = `
        <div style="
            background: white;
            padding: 30px;
            border-radius: 20px;
            max-width: 600px;
            width: 90%;
            max-height: 80vh;
            overflow-y: auto;
            text-align: center;
            position: relative;
            box-shadow: 0 15px 40px rgba(0,0,0,0.3);
            animation: slideUp 0.4s ease;
        ">
            <button onclick="cerrarPopup()" style="
                position: absolute;
                top: 15px;
                right: 15px;
                background: #e91e63;
                color: white;
                border: none;
                width: 35px;
                height: 35px;
                border-radius: 50%;
                cursor: pointer;
                font-size: 1rem;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: all 0.2s;
            ">
                <i class="fas fa-times"></i>
            </button>
            
            ${contenidoHTML}
            
            <button onclick="cerrarPopup()" style="
                margin-top: 25px;
                background: linear-gradient(45deg, #e91e63, #ff4081);
                color: white;
                border: none;
                padding: 12px 30px;
                border-radius: 25px;
                cursor: pointer;
                font-weight: bold;
                font-size: 1rem;
                transition: all 0.2s;
            ">
                <i class="fas fa-heart" style="margin-right: 8px;"></i>
                Cerrar
            </button>
        </div>
        
        <style>
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            @keyframes slideUp {
                from { opacity: 0; transform: translateY(30px); }
                to { opacity: 1; transform: translateY(0); }
            }
        </style>
    `;
    
    document.body.appendChild(popup);
}

function cerrarPopup() {
    const popup = document.getElementById('popup-simple');
    if (popup) {
        popup.style.animation = 'fadeOut 0.3s ease forwards';
        setTimeout(() => {
            if (popup.parentNode) {
                popup.parentNode.removeChild(popup);
            }
        }, 300);
    }
}

function mostrarNotificacion(mensaje, tipo = 'info') {
    const notificacion = document.createElement('div');
    notificacion.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${tipo === 'error' ? '#f44336' : '#4CAF50'};
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 9999;
        max-width: 300px;
        animation: slideIn 0.3s ease, slideOut 0.3s ease 3s forwards;
    `;
    
    notificacion.innerHTML = `
        <div style="display: flex; align-items: center; gap: 10px;">
            <i class="fas fa-${tipo === 'error' ? 'exclamation-triangle' : 'info-circle'}"></i>
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
    
    // Botón modo nocturno
    const btnModo = document.getElementById('btnModoNocturno');
    if (btnModo) {
        btnModo.onclick = function() {
            document.body.classList.toggle('modo-nocturno');
            const esNocturno = document.body.classList.contains('modo-nocturno');
            this.innerHTML = esNocturno ? 
                '<i class="fas fa-sun"></i>' : 
                '<i class="fas fa-moon"></i>';
            this.title = esNocturno ? "Modo diurno" : "Modo nocturno";
        };
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
                background: linear-gradient(45deg, #e91e63, #ff4081);
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
}

function actualizarEstadisticasAjustadas() {
    console.log("📊 Actualizando estadísticas ajustadas...");
    
    // Calcular días totales (INCLUYENDO 5 abril 2026)
    const totalDias = Math.floor((FECHA_FIN - FECHA_INICIO) / (1000 * 60 * 60 * 24));
    
    // Calcular días transcurridos desde 5 abril 2025
    const hoy = new Date();
    let diasTranscurridos = 0;
    
    if (hoy >= FECHA_INICIO) {
        if (hoy >= FECHA_FIN) {
            diasTranscurridos = totalDias; // Ya pasó el aniversario
        } else {
            diasTranscurridos = Math.floor((hoy - FECHA_INICIO) / (1000 * 60 * 60 * 24)) + 1;
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
    
    // Actualizar contador de momentos
    const contadorMomentos = document.getElementById('contador-momentos');
    if (contadorMomentos) {
        contadorMomentos.textContent = `${momentosDesbloqueados}/${totalDias}`;
    }
    
    // Contador de razones
    if (window.datosConfig && window.datosConfig.razonesTeAmo) {
        const contadorRazones = document.getElementById('contador-razones');
        if (contadorRazones) {
            contadorRazones.textContent = `${window.datosConfig.razonesTeAmo.length}+`;
        }
    }
    
    // Contador de fotos
    if (window.datosConfig && window.datosConfig.diasEspeciales) {
        let fotosCount = 0;
        Object.values(window.datosConfig.diasEspeciales).forEach(dia => {
            if (dia.tipo === "foto") fotosCount++;
        });
        
        const contadorFotos = document.getElementById('contador-fotos');
        if (contadorFotos) {
            contadorFotos.textContent = fotosCount;
        }
    }
    
    console.log(`📊 Estadísticas: ${diasTranscurridos}/${totalDias} días`);
}

// Hacer funciones disponibles globalmente
window.cerrarPopup = cerrarPopup;
window.mostrarContenidoAjustado = mostrarContenidoAjustado;