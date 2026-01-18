// ============================================
// ARCHIVO: calendario-fix.js
// SOLUCIÓN RÁPIDA PARA EL CALENDARIO
// ============================================

console.log("🔧 Cargando solución para calendario...");

// Esperar a que todo cargue
window.addEventListener('DOMContentLoaded', function() {
    console.log("✅ DOM cargado, iniciando solución...");
    
    // Ocultar el mensaje de carga inmediatamente
    const cargando = document.getElementById('cargando-calendario');
    if (cargando) {
        cargando.style.display = 'none';
        console.log("❌ Ocultando mensaje de carga");
    }
    
    // Generar calendario básico
    generarCalendarioSimple();
    
    // Hacer que los botones funcionen
    configurarBotonesBasicos();
    
    // Actualizar estadísticas básicas
    actualizarEstadisticasBasicas();
});

// ==================== CALENDARIO SIMPLE ====================
function generarCalendarioSimple() {
    console.log("📅 Generando calendario simple...");
    
    const calendar = document.getElementById('calendar');
    if (!calendar) {
        console.error("❌ No se encontró el calendario");
        return;
    }
    
    // Limpiar contenido
    calendar.innerHTML = '';
    
    // Meses y días
    const meses = ["ENERO", "FEBRERO", "MARZO", "ABRIL", "MAYO", "JUNIO", 
                   "JULIO", "AGOSTO", "SEPTIEMBRE", "OCTUBRE", "NOVIEMBRE", "DICIEMBRE"];
    const diasPorMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    
    let contadorDiasTotales = 0;
    
    for (let mes = 0; mes < 12; mes++) {
        // Título del mes
        const tituloMes = document.createElement('div');
        tituloMes.className = 'mes-titulo';
        tituloMes.textContent = meses[mes];
        calendar.appendChild(tituloMes);
        
        // Días del mes
        for (let dia = 1; dia <= diasPorMes[mes]; dia++) {
            contadorDiasTotales++;
            
            const elementoDia = document.createElement('div');
            elementoDia.className = 'dia';
            elementoDia.innerHTML = `<span class="numero-dia">${dia}</span>`;
            
            // Marcar días especiales (basado en datos.js)
            const fechaKey = `${(mes + 1).toString().padStart(2, '0')}-${dia.toString().padStart(2, '0')}`;
            
            // Verificar si es día especial
            if (window.datosConfig && window.datosConfig.diasEspeciales) {
                if (window.datosConfig.diasEspeciales[fechaKey]) {
                    elementoDia.classList.add('tiene-contenido');
                    elementoDia.title = window.datosConfig.diasEspeciales[fechaKey].texto || 'Día especial';
                }
            }
            
            // Marcar día actual
            const hoy = new Date();
            if (hoy.getMonth() === mes && hoy.getDate() === dia) {
                elementoDia.classList.add('dia-especial');
                elementoDia.innerHTML += `<span class="estrella">⭐</span>`;
            }
            
            // Evento click para mostrar contenido
            elementoDia.addEventListener('click', function() {
                mostrarContenidoSimple(contadorDiasTotales, mes, dia);
            });
            
            calendar.appendChild(elementoDia);
        }
    }
    
    console.log(`✅ Calendario generado: ${contadorDiasTotales} días`);
}

// ==================== MOSTRAR CONTENIDO SIMPLE ====================
function mostrarContenidoSimple(numeroDia, mes, dia) {
    console.log(`📱 Mostrando día ${numeroDia} (${dia}/${mes + 1})`);
    
    const meses = ["ENERO", "FEBRERO", "MARZO", "ABRIL", "MAYO", "JUNIO", 
                   "JULIO", "AGOSTO", "SEPTIEMBRE", "OCTUBRE", "NOVIEMBRE", "DICIEMBRE"];
    const fechaKey = `${(mes + 1).toString().padStart(2, '0')}-${dia.toString().padStart(2, '0')}`;
    
    let contenidoHTML = '';
    let titulo = `Día ${numeroDia} - ${dia} de ${meses[mes]}`;
    
    // Buscar si es día especial
    let esEspecial = false;
    if (window.datosConfig && window.datosConfig.diasEspeciales) {
        const dato = window.datosConfig.diasEspeciales[fechaKey];
        if (dato) {
            esEspecial = true;
            if (dato.tipo === "foto") {
                contenidoHTML = `
                    <h2>${titulo}</h2>
                    <img src="${dato.contenido}" alt="Foto especial" style="max-width: 100%; border-radius: 10px; margin: 20px 0;">
                    <div style="font-size: 1.2rem; padding: 15px; background: #ffebee; border-radius: 10px;">
                        ${dato.texto || 'Un día especial contigo ❤️'}
                    </div>
                `;
            } else {
                contenidoHTML = `
                    <h2>${titulo}</h2>
                    <div style="font-size: 1.4rem; padding: 20px; background: #f3e5f5; border-radius: 10px; margin: 20px 0;">
                        "${dato.contenido}"
                        ${dato.texto ? `<p style="margin-top: 15px; font-size: 1rem;">${dato.texto}</p>` : ''}
                    </div>
                `;
            }
        }
    }
    
    // Si no es especial, mostrar frase genérica
    if (!esEspecial) {
        const frases = [
            "Un día más a tu lado es un regalo",
            "Hoy es perfecto porque estás en mi vida",
            "Cada momento contigo es especial",
            "Te amo más que ayer, menos que mañana"
        ];
        const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];
        
        contenidoHTML = `
            <h2>${titulo}</h2>
            <div style="font-size: 1.4rem; padding: 20px; background: #e8f5e9; border-radius: 10px; margin: 20px 0;">
                "${fraseAleatoria}"
                <p style="margin-top: 15px; font-size: 1rem; color: #666;">
                    💕 Aunque no haya un recuerdo especial registrado, este día fue perfecto porque estuviste en él.
                </p>
            </div>
        `;
    }
    
    // Mostrar en un popup simple
    const popup = document.createElement('div');
    popup.id = 'popup-simple';
    popup.style.cssText = `
        position: fixed;
        top: 0; left: 0;
        width: 100%; height: 100%;
        background: rgba(0,0,0,0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    `;
    
    popup.innerHTML = `
        <div style="
            background: white;
            padding: 30px;
            border-radius: 15px;
            max-width: 500px;
            width: 90%;
            text-align: center;
            position: relative;
        ">
            <button onclick="cerrarPopup()" style="
                position: absolute;
                top: 10px;
                right: 10px;
                background: #e91e63;
                color: white;
                border: none;
                width: 30px;
                height: 30px;
                border-radius: 50%;
                cursor: pointer;
            ">X</button>
            
            ${contenidoHTML}
            
            <button onclick="cerrarPopup()" style="
                margin-top: 20px;
                background: #e91e63;
                color: white;
                border: none;
                padding: 10px 20px;
                border-radius: 25px;
                cursor: pointer;
                font-weight: bold;
            ">Cerrar ❤️</button>
        </div>
    `;
    
    document.body.appendChild(popup);
}

// ==================== CERRAR POPUP ====================
function cerrarPopup() {
    const popup = document.getElementById('popup-simple');
    if (popup) {
        popup.remove();
    }
}

// ==================== CONFIGURAR BOTONES ====================
function configurarBotonesBasicos() {
    console.log("🔄 Configurando botones básicos...");
    
    // Botón de música
    const btnMusica = document.getElementById('btnMusica');
    if (btnMusica) {
        btnMusica.onclick = function() {
            const audio = document.getElementById('musicaFondo');
            if (audio) {
                try {
                    audio.play();
                    alert("🎵 Música activada (puede que necesites interactuar con la página primero)");
                    this.innerHTML = '<i class="fas fa-pause"></i>';
                } catch (error) {
                    alert("🎵 Para la música, primero haz clic en cualquier parte de la página, luego en el botón de música.");
                }
            }
        };
    }
    
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
            alert(esNocturno ? "🌙 Modo nocturno activado" : "☀️ Modo diurno activado");
        };
    }
    
    // Botón razón aleatoria
    const btnRazon = document.getElementById('btnRazonAleatoria');
    if (btnRazon) {
        btnRazon.onclick = function() {
            const razones = [
                "Por tu sonrisa que ilumina mi día",
                "Por cómo me haces reír sin esfuerzo",
                "Por tu paciencia cuando soy terco/a",
                "Por apoyarme en todos mis sueños",
                "Por esos pequeños gestos que solo tú haces"
            ];
            const razon = razones[Math.floor(Math.random() * razones.length)];
            alert(`💖 Razón para amarte:\n\n"${razon}"`);
        };
    }
    
    // Buscador de fechas
    const inputFecha = document.getElementById('buscarFecha');
    const btnBuscar = document.getElementById('btnBuscar');
    if (inputFecha && btnBuscar) {
        btnBuscar.onclick = function() {
            if (!inputFecha.value) {
                alert("⚠️ Selecciona una fecha primero");
                return;
            }
            
            const fecha = new Date(inputFecha.value);
            const mes = fecha.getMonth();
            const dia = fecha.getDate();
            
            alert(`📅 Buscando fecha: ${dia}/${mes + 1}\n\n(Próximamente: mostrar contenido de esta fecha)`);
            inputFecha.value = '';
        };
    }
}

// ==================== ESTADÍSTICAS ====================
function actualizarEstadisticasBasicas() {
    console.log("📊 Actualizando estadísticas...");
    
    // Contador de días juntos (basado en 2025-04-05)
    const fechaInicio = new Date('2025-04-05');
    const hoy = new Date();
    const diferencia = Math.floor((hoy - fechaInicio) / (1000 * 60 * 60 * 24));
    
    const diasJuntosElement = document.getElementById('dias-juntos');
    if (diasJuntosElement && diferencia > 0) {
        diasJuntosElement.textContent = diferencia;
    }
    
    // Contador de momentos
    if (window.datosConfig && window.datosConfig.diasEspeciales) {
        const momentosCount = Object.keys(window.datosConfig.diasEspeciales).length;
        const contadorMomentos = document.getElementById('contador-momentos');
        if (contadorMomentos) {
            contadorMomentos.textContent = `${momentosCount}/365`;
        }
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
}

// Hacer funciones disponibles globalmente
window.cerrarPopup = cerrarPopup;
window.mostrarContenidoSimple = mostrarContenidoSimple;