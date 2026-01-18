// ============================================
// ARCHIVO: script.js
// CONTIENE: Solo funciones, lógica completa
// ============================================

// CONSTANTES GLOBALES
const MESES = ["ENERO", "FEBRERO", "MARZO", "ABRIL", "MAYO", "JUNIO", "JULIO", "AGOSTO", "SEPTIEMBRE", "OCTUBRE", "NOVIEMBRE", "DICIEMBRE"];
const DIAS_POR_MES = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// VARIABLES DE ESTADO
let diaSeleccionado = 1;
let momentosDesbloqueados = 0;
let codigoSecreto = [];
let musicaActiva = false;
let modoNocturno = false;

// DATOS (se cargan desde datos.js)
let diasEspeciales = window.datosConfig?.diasEspeciales || {};
let frasesGenericas = window.datosConfig?.frasesGenericas || [];
let razonesTeAmo = window.datosConfig?.razonesTeAmo || [];
let codigoCorrecto = window.datosConfig?.codigoCorrecto || [];

// ==================== FUNCIONES AUXILIARES ====================
function numeroAFecha(numeroDia) {
    let mes = 0;
    let dia = numeroDia;
    
    while (dia > DIAS_POR_MES[mes]) {
        dia -= DIAS_POR_MES[mes];
        mes++;
    }
    
    return {
        formato: `${(mes + 1).toString().padStart(2, '0')}-${dia.toString().padStart(2, '0')}`,
        mes: mes,
        dia: dia,
        numero: numeroDia
    };
}

function fechaANumero(mes, dia) {
    let numero = dia;
    for (let i = 0; i < mes; i++) {
        numero += DIAS_POR_MES[i];
    }
    return numero;
}

// ==================== PANTALLA DE BIENVENIDA ====================
function mostrarBienvenida() {
    console.log("🎬 Mostrando pantalla de bienvenida...");
    
    const bienvenidaHTML = `
        <div id="bienvenida" style="
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background: linear-gradient(135deg, #e91e63 0%, #9c27b0 100%);
            z-index: 10000; display: flex; justify-content: center; align-items: center;
            animation: fadeIn 1s ease;
        ">
            <div style="
                background: rgba(255, 255, 255, 0.95); padding: 40px 30px;
                border-radius: 20px; text-align: center; max-width: 500px; width: 90%;
                box-shadow: 0 15px 40px rgba(0,0,0,0.3); animation: slideUp 1s ease;
            ">
                <h2 style="font-size: 2.2rem; color: #e91e63; margin-bottom: 20px; font-family: Georgia, serif;">
                    Para mi amor ❤️
                </h2>
                <p style="font-size: 1.2rem; line-height: 1.6; margin-bottom: 15px; color: #555;">
                    Este calendario guarda 365 días de felicidad contigo
                </p>
                <p style="font-size: 1.1rem; line-height: 1.6; margin-bottom: 25px; color: #666; font-style: italic;">
                    Cada día es un recuerdo, una risa, un momento especial que atesoro en mi corazón
                </p>
                <button onclick="cerrarBienvenida()" style="
                    background: linear-gradient(45deg, #e91e63, #ff4081); color: white;
                    border: none; padding: 15px 35px; font-size: 1.1rem; border-radius: 50px;
                    cursor: pointer; margin-top: 20px; font-weight: bold; transition: all 0.3s ease;
                    box-shadow: 0 5px 20px rgba(233, 30, 99, 0.4);
                ">
                    Abrir nuestro año juntos 💕
                </button>
            </div>
        </div>
    `;
    
    // Agregar animaciones CSS
    const estiloAnimaciones = document.createElement('style');
    estiloAnimaciones.textContent = `
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeOut { from { opacity: 1; } to { opacity: 0; visibility: hidden; } }
    `;
    document.head.appendChild(estiloAnimaciones);
    
    document.body.insertAdjacentHTML('afterbegin', bienvenidaHTML);
}

function cerrarBienvenida() {
    const bienvenida = document.getElementById('bienvenida');
    if (bienvenida) {
        bienvenida.style.animation = 'fadeOut 0.5s ease forwards';
        setTimeout(() => {
            if (bienvenida.parentNode) {
                bienvenida.parentNode.removeChild(bienvenida);
            }
        }, 500);
        localStorage.setItem('vistoBienvenida', 'true');
    }
}

// ==================== GENERAR CALENDARIO ====================
function generarCalendario() {
    console.log("📅 Generando calendario...");
    const calendar = document.getElementById('calendar');
    const cargando = document.getElementById('cargando-calendario');
    
    if (!calendar) {
        console.error("❌ No se encontró el elemento #calendar");
        return;
    }
    
    if (cargando) cargando.style.display = 'none';
    
    calendar.innerHTML = '';
    let diaAcumulado = 1;
    
    for (let mes = 0; mes < 12; mes++) {
        // Título del mes
        const tituloMes = document.createElement('div');
        tituloMes.className = 'mes-titulo';
        tituloMes.textContent = MESES[mes];
        calendar.appendChild(tituloMes);
        
        // Días del mes
        for (let dia = 1; dia <= DIAS_POR_MES[mes]; dia++) {
            const fecha = numeroAFecha(diaAcumulado);
            const elementoDia = document.createElement('div');
            elementoDia.className = 'dia';
            elementoDia.innerHTML = `<span class="numero-dia">${dia}</span>`;
            
            // Marcar días con contenido
            if (diasEspeciales[fecha.formato]) {
                elementoDia.classList.add('tiene-contenido');
                momentosDesbloqueados++;
            }
            
            // Marcar día actual (opcional)
            const hoy = new Date();
            if (hoy.getMonth() === mes && hoy.getDate() === dia) {
                elementoDia.classList.add('dia-especial');
                elementoDia.innerHTML += `<span class="estrella">⭐</span>`;
            }
            
            // Evento click
            elementoDia.addEventListener('click', () => {
                diaSeleccionado = diaAcumulado;
                mostrarContenidoDia(diaAcumulado);
            });
            
            calendar.appendChild(elementoDia);
            diaAcumulado++;
        }
    }
    
    actualizarEstadisticas();
    console.log("✅ Calendario generado con éxito");
}

// ==================== MOSTRAR CONTENIDO DEL DÍA ====================
function mostrarContenidoDia(numeroDia) {
    const fecha = numeroAFecha(numeroDia);
    const visorContenido = document.getElementById('visorContenido');
    const viewer = document.getElementById('viewer');
    
    if (!visorContenido || !viewer) {
        console.error("❌ No se encontró el visor");
        return;
    }
    
    let contenidoHTML = '';
    const dato = diasEspeciales[fecha.formato];
    
    if (dato) {
        if (dato.tipo === "foto") {
            contenidoHTML = `
                <h2 class="frase-titulo">Día ${numeroDia} - ${fecha.dia} de ${MESES[fecha.mes]}</h2>
                <img src="${dato.contenido}" alt="Recuerdo del día ${fecha.dia}" 
                     onerror="this.onerror=null; this.style.display='none';">
                <div class="texto-contenido">
                    ${dato.texto || 'Un día especial contigo 💕'}
                </div>
            `;
        } else {
            contenidoHTML = `
                <h2 class="frase-titulo">Día ${numeroDia} - ${fecha.dia} de ${MESES[fecha.mes]}</h2>
                <div class="texto-contenido" style="font-size: 1.4rem;">
                    "${dato.contenido}"
                    ${dato.texto ? `<p style="margin-top: 15px; font-size: 1.1rem;">${dato.texto}</p>` : ''}
                </div>
            `;
        }
        lanzarEfectosEspeciales();
    } else {
        const fraseAleatoria = frasesGenericas[Math.floor(Math.random() * frasesGenericas.length)];
        contenidoHTML = `
            <h2 class="frase-titulo">Día ${numeroDia} - ${fecha.dia} de ${MESES[fecha.mes]}</h2>
            <div class="texto-contenido" style="font-size: 1.4rem;">
                "${fraseAleatoria}"
                <p style="margin-top: 20px; font-size: 1rem; color: #ffccd5;">
                    💕 Aunque no haya una foto especial, este día fue perfecto porque estuviste en él.
                </p>
            </div>
        `;
    }
    
    visorContenido.innerHTML = contenidoHTML;
    viewer.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Actualizar navegación
    actualizarNavegacionDias(numeroDia);
}

// ==================== FUNCIONES DEL VISOR ====================
function cerrarVisor() {
    const viewer = document.getElementById('viewer');
    if (viewer) {
        viewer.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

function actualizarNavegacionDias(numeroDia) {
    const btnAnterior = document.getElementById('btnDiaAnterior');
    const btnSiguiente = document.getElementById('btnDiaSiguiente');
    
    if (btnAnterior) {
        btnAnterior.disabled = numeroDia <= 1;
        btnAnterior.onclick = () => {
            if (numeroDia > 1) mostrarContenidoDia(numeroDia - 1);
        };
    }
    
    if (btnSiguiente) {
        btnSiguiente.disabled = numeroDia >= 365;
        btnSiguiente.onclick = () => {
            if (numeroDia < 365) mostrarContenidoDia(numeroDia + 1);
        };
    }
}

// ==================== CONTROLES DE MÚSICA ====================
function controlarMusica() {
    const musica = document.getElementById('musicaFondo');
    const btn = document.getElementById('btnMusica');
    
    if (!musica || !btn) return;
    
    // Forzar que el audio se cargue
    musica.load();
    
    // Intentar reproducir cuando el usuario haga clic
    musica.play().then(() => {
        // Si funciona
        musicaActiva = true;
        btn.innerHTML = '<i class="fas fa-pause"></i>';
        btn.title = "Pausar música";
    }).catch(error => {
        // Si falla, mostrar ayuda
        console.log("🎵 El usuario necesita interactuar primero:", error);
        btn.innerHTML = '<i class="fas fa-volume-mute"></i>';
        btn.title = "Haz clic aquí para activar audio";
        
        // Mostrar mensaje de ayuda
        alert("🎵 Para activar la música, primero haz clic en cualquier parte de la página y luego en el botón de música.");
    });
}

    // Asegurar que el buscador está configurado
    setTimeout(() => {
        configurarBuscador();
        console.log("🔍 Buscador configurado");
    }, 500);

// ==================== MODO NOCTURNO ====================
function toggleModoNocturno() {
    modoNocturno = !modoNocturno;
    document.body.classList.toggle('modo-nocturno', modoNocturno);
    
    const btn = document.getElementById('btnModoNocturno');
    if (btn) {
        if (modoNocturno) {
            btn.innerHTML = '<i class="fas fa-sun"></i>';
            btn.title = "Modo diurno";
        } else {
            btn.innerHTML = '<i class="fas fa-moon"></i>';
            btn.title = "Modo nocturno";
        }
    }
    
    localStorage.setItem('modoNocturno', modoNocturno);
}

// ==================== BUSCADOR DE FECHAS ====================
function configurarBuscador() {
    const inputFecha = document.getElementById('buscarFecha');
    const btnBuscar = document.getElementById('btnBuscar');
    
    if (!inputFecha || !btnBuscar) return;
    
    // Establecer fecha máxima (hoy)
    const hoy = new Date().toISOString().split('T')[0];
    inputFecha.max = hoy;
    
    btnBuscar.addEventListener('click', buscarPorFecha);
    inputFecha.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') buscarPorFecha();
    });
}

function buscarPorFecha() {
    const inputFecha = document.getElementById('buscarFecha');
    if (!inputFecha || !inputFecha.value) return;
    
    const fechaSeleccionada = new Date(inputFecha.value);
    const mes = fechaSeleccionada.getMonth();
    const dia = fechaSeleccionada.getDate();
    
    // Calcular número de día
    let numeroDia = dia;
    for (let i = 0; i < mes; i++) {
        numeroDia += DIAS_POR_MES[i];
    }
    
    if (numeroDia >= 1 && numeroDia <= 365) {
        mostrarContenidoDia(numeroDia);
        inputFecha.value = ''; // Limpiar input
    } else {
        alert("⚠️ Fecha fuera del rango del primer año");
    }
}

// ==================== GALERÍA DE MOMENTOS ====================
function inicializarGaleria() {
    const carrusel = document.getElementById('carruselMomentos');
    const btnAnterior = document.getElementById('btnAnterior');
    const btnSiguiente = document.getElementById('btnSiguiente');
    
    if (!carrusel) return;
    
    // Crear galería con días que tienen fotos
    let galeriaHTML = '';
    let contadorFotos = 0;
    
    for (let i = 1; i <= 365; i++) {
        const fecha = numeroAFecha(i);
        const dato = diasEspeciales[fecha.formato];
        
        if (dato && dato.tipo === "foto") {
            galeriaHTML += `
                <div class="momento" onclick="mostrarContenidoDia(${i})">
                    <img src="${dato.contenido}" alt="${dato.texto || 'Momento especial'}">
                    <p>${dato.texto || `Día ${fecha.dia} de ${MESES[fecha.mes]}`}</p>
                    <small>${fecha.dia}/${fecha.mes + 1}</small>
                </div>
            `;
            contadorFotos++;
        }
    }
    
    carrusel.innerHTML = galeriaHTML || '<p style="text-align:center; padding:20px; color:#666;">Pronto agregaremos más fotos 💕</p>';
    
    // Actualizar contador de fotos
    const contadorFotosElement = document.getElementById('contador-fotos');
    if (contadorFotosElement) {
        contadorFotosElement.textContent = contadorFotos;
    }
    
    // Configurar controles del carrusel
    if (btnAnterior && btnSiguiente) {
        btnAnterior.addEventListener('click', () => {
            carrusel.scrollBy({ left: -300, behavior: 'smooth' });
        });
        
        btnSiguiente.addEventListener('click', () => {
            carrusel.scrollBy({ left: 300, behavior: 'smooth' });
        });
    }
}

// ==================== ESTADÍSTICAS ====================
function actualizarEstadisticas() {
    const contadorMomentos = document.getElementById('contador-momentos');
    const contadorRazones = document.getElementById('contador-razones');
    const contadorFotos = document.getElementById('contador-fotos');
    
    if (contadorMomentos) {
        contadorMomentos.textContent = `${momentosDesbloqueados}/365`;
    }
    
    if (contadorRazones && razonesTeAmo) {
        contadorRazones.textContent = `${razonesTeAmo.length}+`;
    }
    
    // Calcular días juntos
    calcularDiasJuntos();
}

function calcularDiasJuntos() {
    const fechaInicio = new Date('2025-04-05'); // CAMBIA ESTA FECHA
    const hoy = new Date();
    const diferencia = Math.floor((hoy - fechaInicio) / (1000 * 60 * 60 * 24));
    const diasJuntosElement = document.getElementById('dias-juntos');
    
    if (diasJuntosElement && diferencia > 0 && diferencia <= 365) {
        diasJuntosElement.textContent = diferencia;
    }
}

// ==================== RAZONES DE AMOR ALEATORIAS ====================
function mostrarRazonAleatoria() {
    if (!razonesTeAmo || razonesTeAmo.length === 0) return;
    
    const razon = razonesTeAmo[Math.floor(Math.random() * razonesTeAmo.length)];
    const numero = Math.floor(Math.random() * razonesTeAmo.length) + 1;
    
    // Crear notificación
    const notificacion = document.createElement('div');
    notificacion.className = 'mensaje-emergente';
    notificacion.innerHTML = `
        <strong>💖 Razón #${numero} por la que te amo:</strong><br>
        "${razon}"
    `;
    
    document.body.appendChild(notificacion);
    
    // Remover después de 5 segundos
    setTimeout(() => {
        if (notificacion.parentNode) {
            notificacion.parentNode.removeChild(notificacion);
        }
    }, 5000);
}

// ==================== EFECTOS ESPECIALES ====================
function lanzarEfectosEspeciales() {
    // Crear 20 partículas de confeti
    for (let i = 0; i < 20; i++) {
        crearParticula();
    }
}

function crearParticula() {
    const particula = document.createElement('div');
    particula.style.cssText = `
        position: fixed; width: 10px; height: 10px; border-radius: 50%;
        background: ${['#ff0080', '#00ff88', '#0088ff', '#ffaa00'][Math.floor(Math.random()*4)]};
        pointer-events: none; z-index: 9998; top: ${Math.random() * 100}vh;
        left: ${Math.random() * 100}vw; animation: flotar 2s ease forwards;
    `;
    
    document.body.appendChild(particula);
    
    setTimeout(() => {
        if (particula.parentNode) {
            particula.parentNode.removeChild(particula);
        }
    }, 2000);
}

// ==================== CÓDIGO SECRETO (KONAMI) ====================
function configurarCodigoSecreto() {
    document.addEventListener('keydown', (e) => {
        codigoSecreto.push(e.keyCode);
        if (codigoSecreto.length > 10) codigoSecreto.shift();
        
        if (JSON.stringify(codigoSecreto) === JSON.stringify(codigoCorrecto)) {
            mostrarSorpresaSecreta();
            codigoSecreto = []; // Resetear
        }
    });
}

function mostrarSorpresaSecreta() {
    const sorpresaHTML = `
        <div style="
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            z-index: 10001; display: flex; justify-content: center; align-items: center;
            animation: fadeIn 0.5s ease;
        ">
            <div style="
                background: rgba(255, 255, 255, 0.95); padding: 40px;
                border-radius: 20px; text-align: center; max-width: 500px; width: 90%;
            ">
                <h2 style="color: #764ba2; font-size: 2.5rem; margin-bottom: 20px;">
                    💝 ¡SORPRESA SECRETA! 💝
                </h2>
                <p style="font-size: 1.2rem; line-height: 1.6; margin-bottom: 20px;">
                    ¡Encontraste el código secreto! Eres la persona más especial de mi vida.
                </p>
                <p style="font-size: 1.1rem; font-style: italic; color: #666;">
                    "Te amo más de lo que las palabras pueden expresar. Eres mi todo."
                </p>
                <button onclick="cerrarSorpresa()" style="
                    background: #764ba2; color: white; border: none;
                    padding: 12px 30px; font-size: 1rem; border-radius: 50px;
                    cursor: pointer; margin-top: 30px; font-weight: bold;
                ">
                    Cerrar 💕
                </button>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', sorpresaHTML);
}

function cerrarSorpresa() {
    const sorpresa = document.querySelector('div[style*="z-index: 10001"]');
    if (sorpresa && sorpresa.parentNode) {
        sorpresa.parentNode.removeChild(sorpresa);
    }
}

// ==================== COMPARTIR DÍA ====================
function configurarCompartir() {
    const btnCompartir = document.getElementById('btnCompartir');
    if (btnCompartir) {
        btnCompartir.addEventListener('click', () => {
            if (navigator.share) {
                navigator.share({
                    title: `Día ${diaSeleccionado} de nuestro año`,
                    text: `Mira lo especial que fue el día ${diaSeleccionado} para nosotros 💕`,
                    url: window.location.href
                });
            } else {
                alert(`Día ${diaSeleccionado}\n💕 Un día más de nuestro amor 💕\n\nComparte: ${window.location.href}`);
            }
        });
    }
}

// ==================== REINICIAR VISITAS ====================
function configurarReiniciar() {
    const btnReiniciar = document.getElementById('btnReiniciar');
    if (btnReiniciar) {
        btnReiniciar.addEventListener('click', () => {
            if (confirm("¿Reiniciar todas las visitas? Esto mostrará la bienvenida nuevamente.")) {
                localStorage.removeItem('vistoBienvenida');
                localStorage.removeItem('ultimaVisita');
                location.reload();
            }
        });
    }
}

// ==================== FORZAR GENERACIÓN DEL CALENDARIO ====================
function forzarCargaCalendario() {
    console.log("🔄 Forzando carga del calendario...");
    
    // Ocultar mensaje de carga
    const cargando = document.getElementById('cargando-calendario');
    if (cargando) {
        cargando.style.display = 'none';
    }
    
    // Generar calendario inmediatamente
    generarCalendario();
    
    // Inicializar galería
    inicializarGaleria();
    
    console.log("✅ Calendario forzado a cargar");
}

// ==================== INICIALIZACIÓN PRINCIPAL ====================
function inicializarAplicacion() {
    console.log("🚀 Inicializando Calendario de Amor...");
    
    // Verificar datos cargados
    if (!window.datosConfig) {
        console.error("❌ No se cargaron los datos. Revisa datos.js");
        return;
    }
    
    // Cargar datos
    diasEspeciales = window.datosConfig.diasEspeciales || {};
    frasesGenericas = window.datosConfig.frasesGenericas || [];
    razonesTeAmo = window.datosConfig.razonesTeAmo || [];
    codigoCorrecto = window.datosConfig.codigoCorrecto || [];
    
    // Configurar modo nocturno guardado
    modoNocturno = localStorage.getItem('modoNocturno') === 'true';
    if (modoNocturno) {
        document.body.classList.add('modo-nocturno');
        const btn = document.getElementById('btnModoNocturno');
        if (btn) btn.innerHTML = '<i class="fas fa-sun"></i>';
    }
    
    // Mostrar bienvenida si es primera vez hoy
    const hoy = new Date().toDateString();
    const vistoHoy = localStorage.getItem('ultimaVisita') === hoy;
    if (!vistoHoy) {
        setTimeout(mostrarBienvenida, 800);
        localStorage.setItem('ultimaVisita', hoy);
    }
    
    // Generar calendario
    setTimeout(generarCalendario, 100);
    
    // Inicializar componentes
    inicializarGaleria();
    configurarBuscador();
    configurarCompartir();
    configurarReiniciar();
    configurarCodigoSecreto();
    
    // Configurar eventos
       document.getElementById('btnCerrarViewer')?.addEventListener('click', cerrarVisor);
    document.getElementById('btnMusica')?.addEventListener('click', controlarMusica);
    document.getElementById('btnModoNocturno')?.addEventListener('click', toggleModoNocturno);
    document.getElementById('btnRazonAleatoria')?.addEventListener('click', mostrarRazonAleatoria);
    
    // Evento para doble click en título
    document.querySelector('h1')?.addEventListener('dblclick', mostrarRazonAleatoria);
    
    // Cerrar visor con ESC o click fuera
    document.addEventListener('keydown', (e) => e.key === 'Escape' && cerrarVisor());
    document.getElementById('viewer')?.addEventListener('click', (e) => {
        if (e.target.id === 'viewer') cerrarVisor();
    });
    
    console.log("✅ Aplicación inicializada correctamente");
}

// ==================== INICIAR CUANDO EL DOM ESTÉ LISTO ====================
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        inicializarAplicacion();
        // Forzar carga después de 1 segundo
        setTimeout(forzarCargaCalendario, 1000);
    });
} else {
    inicializarAplicacion();
    setTimeout(forzarCargaCalendario, 1000);
}

// Hacer funciones disponibles globalmente
window.mostrarBienvenida = mostrarBienvenida;
window.cerrarBienvenida = cerrarBienvenida;
window.cerrarVisor = cerrarVisor;
window.controlarMusica = controlarMusica;
window.toggleModoNocturno = toggleModoNocturno;
window.buscarPorFecha = buscarPorFecha;
window.mostrarRazonAleatoria = mostrarRazonAleatoria;
window.cerrarSorpresa = cerrarSorpresa;
window.mostrarContenidoDia = mostrarContenidoDia;