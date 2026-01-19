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
        // Recalcular por si acaso
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
    let tieneFoto = false;
    let urlFoto = '';
    let textoFoto = '';
    
    // ==================== 1. PRIMERO VERIFICAR SI ES EL ANIVERSARIO (2026-04-05) ====================
    if (dia === 5 && mes === 3 && año === 2026) {
        // Buscar contenido específico para el aniversario
        let datoAniversario = null;
        if (window.datosConfig && window.datosConfig.diasEspeciales) {
            datoAniversario = window.datosConfig.diasEspeciales[fechaKeyConAnio] || 
                             window.datosConfig.diasEspeciales[fechaKey];
        }
        
        tieneFoto = true;
        urlFoto = "fotos/aniversario.jpg";
        textoFoto = datoAniversario?.texto || 'Foto de nuestro aniversario';
        
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
                    <p style="font-size: 0.9rem; color: #666; font-style: italic;">
                        "Hoy celebramos un año de risas, abrazos y momentos inolvidables"
                    </p>
                </div>
                
                <!-- IMAGEN (tamaño original) -->
                <div style="width: 100%; max-width: 500px; margin: 0 auto 15px;">
                    <img src="${urlFoto}" alt="Nuestro aniversario" id="imagen-descargable" class="imagen-popup"
                         style="width: 100%; height: auto; border-radius: 12px; border: 3px solid white; box-shadow: 0 5px 15px rgba(0,0,0,0.15); object-fit: contain; background: #f8f9fa; cursor: pointer;"
                         onerror="this.onerror=null; this.src='data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"500\" height=\"300\" viewBox=\"0 0 500 300\"><rect width=\"500\" height=\"300\" fill=\"%239C27B0\"/><text x=\"250\" y=\"150\" font-family=\"Arial\" font-size=\"40\" text-anchor=\"middle\" fill=\"white\" dy=\".3em\">🎉 1 AÑO JUNTOS 🎉</text></svg>';">
                </div>
                
                <div style="font-size: 1.1rem; padding: 15px; background: white; border-radius: 12px; margin-top: 15px; border-left: 4px solid #9C27B0; text-align: left; line-height: 1.5;">
                    <i class="fas fa-heart" style="color: #9C27B0; margin-right: 8px; font-size: 1.2rem; vertical-align: middle;"></i>
                    ${datoAniversario?.texto || '"El día que cumplimos nuestro primer año juntos. Cada risa, cada abrazo, cada momento contigo ha sido el mejor regalo. Te amo más que ayer y menos que mañana."'}
                </div>
                
                <div style="margin-top: 15px; padding: 12px; background: linear-gradient(45deg, #FF9800, #FF5722); color: white; border-radius: 8px; font-size: 1rem;">
                    <i class="fas fa-champagne-glasses" style="margin-right: 8px;"></i>
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
        
        tieneFoto = true;
        urlFoto = "fotos/inicio.jpg";
        textoFoto = datoInicio?.texto || 'Foto de nuestro comienzo';
        
        const titulo = `Día ${numeroDia} - ${dia} de ${MESES[mes]} ${año}`;
          contenidoHTML = `
            <h2 style="color: #FF9800; margin-bottom: 15px; font-family: 'Poppins', sans-serif; font-size: 1.6rem; text-align: center; font-weight: 700;">
                ¡COMIENZA NUESTRA AVENTURA! 🚀
            </h2>
            <div style="background: linear-gradient(135deg, #ffffff, #f3e5f5); padding: 15px; border-radius: 15px; margin: 15px 0; text-align: center; border: 2px solid #FF9800;">
                <h3 style="color: #F57C00; margin-bottom: 10px; font-size: 1.3rem;">Día ${numeroDia} - 5 de Abril 2025</h3>
                
                <div style="background: white; padding: 15px; border-radius: 12px; margin-bottom: 15px; box-shadow: 0 3px 10px rgba(0,0,0,0.1);">
                    <p style="font-size: 1.1rem; color: #E65100; margin-bottom: 10px; line-height: 1.5;">
                        <i class="fas fa-star" style="color: #FF9800; margin-right: 8px;"></i>
                        El día en que nuestros caminos se unieron para siempre
                    </p>
                </div>
                
                <!-- IMAGEN (tamaño original) -->
                <div style="width: 100%; max-width: 500px; margin: 0 auto 15px;">
                    <img src="${urlFoto}" alt="Nuestro comienzo" id="imagen-descargable" class="imagen-popup"
                         style="width: 100%; height: auto; border-radius: 12px; border: 3px solid white; box-shadow: 0 5px 15px rgba(0,0,0,0.15); object-fit: contain; background: #f8f9fa; cursor: pointer;"
                         onerror="this.onerror=null; this.src='data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"500\" height=\"300\" viewBox=\"0 0 500 300\"><rect width=\"500\" height=\"300\" fill=\"%23FF9800\"/><text x=\"250\" y=\"150\" font-family=\"Arial\" font-size=\"40\" text-anchor=\"middle\" fill=\"white\" dy=\".3em\">🌟 COMIENZO 🌟</text></svg>';">
                </div>
                
                <div style="font-size: 1.1rem; padding: 15px; background: white; border-radius: 12px; margin-top: 15px; border-left: 4px solid #FF9800; text-align: left; line-height: 1.5;">
                    <i class="fas fa-heart" style="color: #9C27B0; margin-right: 8px; font-size: 1.2rem; vertical-align: middle;"></i>
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
            tieneFoto = true;
            urlFoto = dato.contenido;
            textoFoto = dato.texto || 'Foto especial de nuestro día';
            
            contenidoHTML = `
                <h2 style="color: #9C27B0; margin-bottom: 15px; font-family: 'Poppins', sans-serif; font-size: 1.6rem; text-align: center; font-weight: 700;">
                    ${titulo}
                </h2>
                
                <!-- IMAGEN (tamaño original) -->
                <div style="width: 100%; max-width: 500px; margin: 0 auto 15px;">
                    <img src="${dato.contenido}" alt="Foto especial" id="imagen-descargable" class="imagen-popup"
                         style="width: 100%; height: auto; max-height: 300px; border-radius: 12px; border: 2px solid #ffebee; box-shadow: 0 5px 15px rgba(0,0,0,0.12); object-fit: contain; background: #f8f9fa; cursor: pointer;"
                         onerror="this.onerror=null; this.style.display='none'; document.getElementById('mensaje-error-imagen')?.remove(); const errorDiv=document.createElement('div'); errorDiv.id='mensaje-error-imagen'; errorDiv.innerHTML='<p style=\'color:#FF5722;padding:10px;background:#ffebee;border-radius:8px;\'><i class=\'fas fa-exclamation-triangle\'></i> La imagen no pudo cargarse</p>'; this.parentNode.appendChild(errorDiv);">
                </div>
                
                <div style="font-size: 1.1rem; padding: 15px; background: linear-gradient(135deg, #ffebee, #fce4ec); border-radius: 12px; margin: 15px 0; text-align: center; line-height: 1.5;">
                    <i class="fas fa-heart" style="color: #9C27B0; margin-right: 8px;"></i>
                    ${dato.texto || 'Un día especial contigo 💘'}
                </div>
            `;
        } else {
            // Asegurar que dato.contenido existe
            const textoContenido = dato.contenido || dato.texto || 'Un mensaje especial para ti';
            
            contenidoHTML = `
                <h2 style="color: #9C27B0; margin-bottom: 15px; font-family: 'Poppins', sans-serif; font-size: 1.6rem; text-align: center; font-weight: 700;">
                    ${titulo}
                </h2>
                <div style="font-size: 1.2rem; padding: 20px; background: linear-gradient(135deg, #f3e5f5, #e8eaf6); border-radius: 12px; margin: 15px 0; text-align: center; font-style: italic; line-height: 1.5;">
                    "${textoContenido}"
                    ${dato.texto && dato.texto !== textoContenido ? `<p style="margin-top: 15px; font-size: 1rem; color: #666; font-style: normal;">${dato.texto}</p>` : ''}
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
    tieneFoto = false;
    urlFoto = '';
    textoFoto = '';
}

// ==================== 5. MOSTRAR EL CONTENIDO CON BOTÓN DE DESCARGA SI HAY FOTO ====================
// Verificar que el contenidoHTML no esté vacío
if (contenidoHTML && contenidoHTML.trim() !== '') {
    mostrarPopupContenido(contenidoHTML, tieneFoto, urlFoto, textoFoto, fecha);
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
    mostrarPopupContenido(contenidoError, false, '', '', fecha);
}
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
function mostrarPopupContenido(contenidoHTML, tieneFoto = false, urlFoto = '', textoFoto = '', fecha = null) {
    
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
    
    // Crear botón de descarga adicional si hay foto (más compacto)
    let botonDescargaExtra = '';
    if (tieneFoto && urlFoto) {
        const nombreArchivo = fecha ? generarNombreDescarga(fecha, textoFoto) : 'foto-especial.jpg';
        botonDescargaExtra = `
            <button onclick="descargarFoto('${urlFoto}', '${nombreArchivo}')" 
                    style="
                        margin-top: 12px;
                        background: linear-gradient(45deg, #4CAF50, #2E7D32);
                        color: white;
                        border: none;
                        padding: 10px 20px;
                        border-radius: 20px;
                        cursor: pointer;
                        font-weight: bold;
                        font-size: 0.9rem;
                        transition: all 0.2s;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        gap: 8px;
                        width: 100%;
                        max-width: 250px;
                        margin-left: auto;
                        margin-right: auto;
                    ">
                <i class="fas fa-download"></i>
                Descargar esta foto
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
            <button onclick="cerrarPopup(); event.stopPropagation();" style="
    position: absolute;
    top: 12px;
    right: 12px;
    background: #9C27B0;
    color: white;
    border: none;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    cursor: pointer;
    font-size: 0.9rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s;
    z-index: 10;
">
    <i class="fas fa-times"></i>
</button>
            
            ${contenidoHTML}
            
            ${botonDescargaExtra}
            
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
    
    // Agregar funcionalidad de zoom a la imagen (solo si existe)
    const imagen = document.getElementById('imagen-descargable');
    if (imagen) {
        // Quitar cualquier evento de toque largo existente
        imagen.addEventListener('touchstart', function(e) {
            // Solo prevenir el comportamiento por defecto, sin menú
            e.preventDefault();
        }, { passive: false });
        
        // Agregar funcionalidad de clic para zoom
        imagen.addEventListener('click', function() {
            this.classList.toggle('zoom');
            
            if (this.classList.contains('zoom')) {
                console.log("🔍 Imagen ampliada");
                // Desplazar la imagen a la vista si está muy arriba o abajo
                this.scrollIntoView({ behavior: 'smooth', block: 'center' });
            } else {
                console.log("📷 Imagen normal");
            }
        });
    }
    
    // Prevenir que el scroll se propague al body
    const contenedor = document.getElementById('contenedor-popup');
    if (contenedor) {
        contenedor.addEventListener('wheel', function(e) {
            // Si estamos en el top y seguimos scrolleando hacia arriba, o en el bottom y seguimos hacia abajo
            const isAtTop = this.scrollTop === 0;
            const isAtBottom = this.scrollTop + this.clientHeight >= this.scrollHeight - 1;
            
            if ((isAtTop && e.deltaY < 0) || (isAtBottom && e.deltaY > 0)) {
                e.preventDefault();
            }
        }, { passive: false });
    }
}
// ==================== FUNCIÓN PARA MENÚ DE DESCARGA EN MÓVILES ====================
/*function mostrarMenuDescargaMovil(urlFoto, fecha, textoFoto) {
    const nombreArchivo = fecha ? generarNombreDescarga(fecha, textoFoto) : 'foto-especial.jpg';
    
    // Crear menú contextual
    const menu = document.createElement('div');
    menu.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: white;
        border-radius: 15px;
        padding: 20px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        z-index: 1001;
        min-width: 250px;
        animation: fadeIn 0.2s ease;
    `;
    
    menu.innerHTML = `
        <h3 style="color: #9C27B0; margin-bottom: 15px; text-align: center;">
            <i class="fas fa-download"></i> Descargar foto
        </h3>
        <p style="margin-bottom: 20px; color: #666; font-size: 0.9rem; text-align: center;">
            ¿Quieres guardar esta foto en tu dispositivo?
        </p>
        <div style="display: flex; flex-direction: column; gap: 10px;">
            <button onclick="descargarFoto('${urlFoto}', '${nombreArchivo}'); this.parentNode.parentNode.remove();" 
                    style="
                        background: linear-gradient(45deg, #4CAF50, #2E7D32);
                        color: white;
                        border: none;
                        padding: 12px;
                        border-radius: 10px;
                        cursor: pointer;
                        font-weight: bold;
                    ">
                <i class="fas fa-download"></i> Descargar ahora
            </button>
            <button onclick="this.parentNode.parentNode.remove();" 
                    style="
                        background: #f5f5f5;
                        color: #666;
                        border: 1px solid #ddd;
                        padding: 12px;
                        border-radius: 10px;
                        cursor: pointer;
                    ">
                Cancelar
            </button>
        </div>
        <p style="margin-top: 15px; font-size: 0.8rem; color: #999; text-align: center;">
            También puedes mantener presionada la imagen para guardarla
        </p>
    `;
    
    // Fondo oscuro
    const fondo = document.createElement('div');
    fondo.style.cssText = `
        position: fixed;
        top: 0; left: 0;
        width: 100%; height: 100%;
        background: rgba(0,0,0,0.5);
        z-index: 1000;
    `;
    fondo.onclick = function() {
        document.body.removeChild(menu);
        document.body.removeChild(fondo);
    };
    
    document.body.appendChild(fondo);
    document.body.appendChild(menu);
}*/

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
    if (fechaSeleccionada < FECHA_INICIO || fechaSeleccionada > new Date('2026-04-05')) {
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
            diasTranscurridos = Math.floor((hoy - FECHA_INICIO) / (1000 * 60 * 60 * 24)) ;
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

function cerrarPopup() {
    const popup = document.getElementById('popup-simple');
    if (popup) {
        popup.style.animation = 'fadeOut 0.3s ease forwards';
        
        // Obtener la posición guardada ANTES de cerrar
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
            
            // Restaurar scroll después de que el DOM se actualice
            setTimeout(() => {
                window.scrollTo({
                    top: savedPosition,
                    behavior: 'instant' // Usar 'instant' en lugar de 'smooth'
                });
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

/*// Manejar clics fuera del popup para cerrarlo
document.addEventListener('click', function(event) {
    const popup = document.getElementById('popup-simple');
    if (popup && isPopupOpen) {
        const contenedor = document.getElementById('contenedor-popup');
        if (!contenedor.contains(event.target) && event.target !== popup) {
            cerrarPopup();
        }
    }
});*/

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