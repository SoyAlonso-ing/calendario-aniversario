// ============================================
// ARCHIVO: reproductor-simple.js - VERSIÓN CORREGIDA
// REPRODUCTOR SIMPLE FUNCIONAL
// ============================================

console.log("🎵 Inicializando reproductor simple corregido...");

// Lista de canciones (solo archivos, sin nombres visibles)
const canciones = [
    "audio/teAmo.mp3",
    "audio/labiosCompartidos.mp3", 
    "audio/barbacoa.mp3",
    "audio/jardin.mp3"
];

// Nombres para mostrar de las canciones
const nombresCanciones = [
    "Te Amo (Pochi) 💘",
    "Labios (Mine Mine Mine) 💋",
    "Barbacoa (las mejores papas) 🍖",
    "Una de tu artista (Melendi) 🌸"
];

let cancionActual = 0;
let volumen = 0.7;
let isDragging = false;

// Inicializar cuando el DOM cargue
document.addEventListener('DOMContentLoaded', function() {
    console.log("🎵 DOM cargado, inicializando reproductor...");
    inicializarReproductorSimple();
});

function inicializarReproductorSimple() {
    console.log("🎵 Inicializando reproductor...");
    
    const audio = document.getElementById('musicaFondo');
    const reproductor = document.getElementById('reproductorMusica');
    const btnMusicaPrincipal = document.getElementById('btnMusica');
    
    // Verificar que los elementos existen
    if (!audio) {
        console.error("❌ Elemento de audio no encontrado (id='musicaFondo')");
        // Crear elemento de audio si no existe
        const audioElement = document.createElement('audio');
        audioElement.id = 'musicaFondo';
        audioElement.preload = 'auto';
        document.body.appendChild(audioElement);
    }
    
    if (!reproductor) {
        console.error("❌ Reproductor no encontrado (id='reproductorMusica')");
        return;
    }
    
    if (!btnMusicaPrincipal) {
        console.error("❌ Botón de música no encontrado (id='btnMusica')");
        return;
    }
    
    console.log("✅ Elementos encontrados, configurando...");
    
    // Configurar volumen inicial
    audio.volume = volumen;
    
    // 1. Configurar botón principal de música
    btnMusicaPrincipal.onclick = function() {
        console.log("🎵 Botón principal clickeado");
        if (reproductor.style.display === 'none' || reproductor.style.display === '') {
            reproductor.style.display = 'block';
            this.innerHTML = '<i class="fas fa-pause"></i>';
            this.title = "Ocultar reproductor";
            
            // Solo reproducir si está pausado o no hay fuente
            if (audio.paused || !audio.src) {
                console.log("🎵 Reproduciendo canción actual...");
                reproducirCancionActual();
            }
        } else {
            reproductor.style.display = 'none';
            this.innerHTML = '<i class="fas fa-music"></i>';
            this.title = "Mostrar reproductor";
        }
    };
    
    // 2. Configurar controles del reproductor
    configurarControlesSimples();
    
    // 3. Actualizar barra de progreso cada segundo
    setInterval(actualizarBarraProgreso, 1000);
    
    // 4. Actualizar duración cuando se carga la canción
    audio.addEventListener('loadedmetadata', function() {
        console.log("🎵 Metadatos cargados");
        actualizarDuracionTotal();
    });
    
    // 5. Cuando termine la canción, pasar a la siguiente
    audio.addEventListener('ended', function() {
        console.log("🎵 Canción terminada, siguiente...");
        siguienteCancion();
    });
    
    // 6. Hacer reproductor arrastrable en móviles
    hacerReproductorArrastrable();
    
    console.log("✅ Reproductor simple inicializado correctamente");
}

function configurarControlesSimples() {
    console.log("🎵 Configurando controles...");
    
    const audio = document.getElementById('musicaFondo');
    const reproductor = document.getElementById('reproductorMusica');
    
    if (!audio || !reproductor) {
        console.error("❌ Audio o reproductor no encontrados en controles");
        return;
    }
    
    // Botón cerrar reproductor
    const btnCerrar = document.getElementById('btnCerrarReproductor');
    if (btnCerrar) {
        btnCerrar.onclick = function() {
            reproductor.style.display = 'none';
            document.getElementById('btnMusica').innerHTML = '<i class="fas fa-music"></i>';
            document.getElementById('btnMusica').title = "Mostrar reproductor";
        };
    }
    
    // Botón play/pause
    const btnPlayPause = document.getElementById('btnPlayPause');
    if (btnPlayPause) {
        btnPlayPause.onclick = function() {
            console.log("⏯️ Play/Pause clickeado");
            if (audio.paused) {
                // Si no hay fuente o la canción terminó, cargar la actual
                if (!audio.src || audio.ended || audio.currentTime >= audio.duration) {
                    console.log("🎵 No hay fuente, cargando canción actual...");
                    reproducirCancionActual();
                } else {
                    // Si está pausada, reanudar
                    console.log("▶️ Reanudando...");
                    audio.play();
                    this.innerHTML = '<i class="fas fa-pause"></i>';
                    document.getElementById('btnMusica').innerHTML = '<i class="fas fa-pause"></i>';
                }
            } else {
                // Pausar
                console.log("⏸️ Pausando...");
                audio.pause();
                this.innerHTML = '<i class="fas fa-play"></i>';
                document.getElementById('btnMusica').innerHTML = '<i class="fas fa-music"></i>';
            }
        };
    }
    
    // Botón anterior
    const btnAnterior = document.getElementById('btnMusicaAnterior');
    if (btnAnterior) {
        btnAnterior.onclick = function() {
            console.log("⏮️ Canción anterior...");
            cancionActual = (cancionActual - 1 + canciones.length) % canciones.length;
            reproducirCancionActual();
        };
    }
    
    // Botón siguiente
    const btnSiguiente = document.getElementById('btnMusicaSiguiente');
    if (btnSiguiente) {
        btnSiguiente.onclick = function() {
            console.log("⏭️ Canción siguiente...");
            siguienteCancion();
        };
    }
    
    // Hacer la barra de progreso clickeable
    const barraProgreso = document.getElementById('barraProgreso');
    if (barraProgreso) {
        barraProgreso.onclick = function(e) {
            const rect = this.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const porcentaje = clickX / rect.width;
            
            if (audio.duration) {
                audio.currentTime = audio.duration * porcentaje;
                actualizarBarraProgreso();
            }
        };
    }
    
    console.log("✅ Controles configurados");
}

function reproducirCancionActual() {
    console.log(`🎵 Reproduciendo canción ${cancionActual + 1}: ${canciones[cancionActual]}`);
    
    const audio = document.getElementById('musicaFondo');
    if (!audio) {
        console.error("❌ Elemento de audio no encontrado");
        return;
    }
    
    // Verificar que la canción existe
    if (!canciones[cancionActual]) {
        console.error(`❌ Canción ${cancionActual} no encontrada`);
        siguienteCancion();
        return;
    }
    
    // Establecer la fuente de la canción actual
    audio.src = canciones[cancionActual];
    
    // Resetear el tiempo actual
    audio.currentTime = 0;
    
    // Actualizar nombre de la canción
    actualizarNombreCancion();
    
    // Cargar y reproducir
    audio.load();
    
    // Intentar reproducir
    const playPromise = audio.play();
    
    if (playPromise !== undefined) {
        playPromise.then(() => {
            // Éxito: cambiar iconos a "pause"
            const btnPlayPause = document.getElementById('btnPlayPause');
            const btnMusica = document.getElementById('btnMusica');
            
            if (btnPlayPause) btnPlayPause.innerHTML = '<i class="fas fa-pause"></i>';
            if (btnMusica) btnMusica.innerHTML = '<i class="fas fa-pause"></i>';
            
            console.log(`✅ Reproduciendo: ${canciones[cancionActual]}`);
            
        }).catch(error => {
            console.error("❌ Error al reproducir:", error);
            
            // Mostrar notificación de error
            mostrarNotificacionMusica("No se pudo reproducir la canción");
            
            // Intentar con la siguiente canción
            setTimeout(() => {
                console.log("⏭️ Intentando siguiente canción...");
                siguienteCancion();
            }, 1000);
        });
    }
}

function siguienteCancion() {
    console.log("🎵 Cambiando a siguiente canción...");
    cancionActual = (cancionActual + 1) % canciones.length;
    reproducirCancionActual();
}

function actualizarNombreCancion() {
    const nombreCancionElement = document.getElementById('nombre-cancion');
    if (nombreCancionElement) {
        nombreCancionElement.textContent = nombresCanciones[cancionActual] || `Canción ${cancionActual + 1}`;
    }
}

function actualizarBarraProgreso() {
    const audio = document.getElementById('musicaFondo');
    const progreso = document.getElementById('progresoActual');
    const tiempoActual = document.getElementById('tiempoActual');
    
    if (audio && audio.duration && !isNaN(audio.duration)) {
        const porcentaje = (audio.currentTime / audio.duration) * 100;
        if (progreso) progreso.style.width = `${porcentaje}%`;
        
        // Formatear tiempo actual (MM:SS)
        if (tiempoActual) {
            const minutos = Math.floor(audio.currentTime / 60);
            const segundos = Math.floor(audio.currentTime % 60);
            tiempoActual.textContent = `${minutos}:${segundos.toString().padStart(2, '0')}`;
        }
    }
}

function actualizarDuracionTotal() {
    const audio = document.getElementById('musicaFondo');
    const duracionTotal = document.getElementById('duracionTotal');
    
    if (audio && audio.duration && !isNaN(audio.duration) && duracionTotal) {
        const minutos = Math.floor(audio.duration / 60);
        const segundos = Math.floor(audio.duration % 60);
        duracionTotal.textContent = `${minutos}:${segundos.toString().padStart(2, '0')}`;
    }
}

function mostrarNotificacionMusica(mensaje) {
    const notificacion = document.createElement('div');
    notificacion.style.cssText = `
        position: fixed;
        bottom: 80px;
        right: 20px;
        background: #f44336;
        color: white;
        padding: 10px 15px;
        border-radius: 8px;
        box-shadow: 0 3px 10px rgba(0,0,0,0.2);
        z-index: 9999;
        max-width: 200px;
        animation: slideInUp 0.3s ease, slideOutDown 0.3s ease 3s forwards;
    `;
    
    notificacion.innerHTML = `
        <div style="display: flex; align-items: center; gap: 8px;">
            <i class="fas fa-exclamation-triangle"></i>
            <span style="font-size: 0.8rem;">${mensaje}</span>
        </div>
    `;
    
    // Agregar animaciones CSS si no existen
    if (!document.getElementById('animaciones-notificaciones')) {
        const style = document.createElement('style');
        style.id = 'animaciones-notificaciones';
        style.textContent = `
            @keyframes slideInUp {
                from { transform: translateY(100%); opacity: 0; }
                to { transform: translateY(0); opacity: 1; }
            }
            @keyframes slideOutDown {
                from { transform: translateY(0); opacity: 1; }
                to { transform: translateY(100%); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notificacion);
    
    setTimeout(() => {
        if (notificacion.parentNode) {
            notificacion.parentNode.removeChild(notificacion);
        }
    }, 3000);
}

// ============================================
// FUNCIONALIDAD DE ARRASTRE PARA EL REPRODUCTOR
// ============================================

function hacerReproductorArrastrable() {
    const reproductor = document.getElementById('reproductorMusica');
    const indicadorArrastre = document.getElementById('indicadorArrastre');
    
    if (!reproductor) return;
    
    // Solo habilitar arrastre en móviles
    const esMovil = window.innerWidth <= 768;
    
    if (esMovil && indicadorArrastre) {
        indicadorArrastre.style.display = 'block';
    }
    
    reproductor.addEventListener('mousedown', iniciarArrastre);
    reproductor.addEventListener('touchstart', iniciarArrastreTouch, { passive: false });
    
    function iniciarArrastre(e) {
        if (!esMovil) return;
        
        isDragging = true;
        reproductor.classList.add('dragging');
        
        document.addEventListener('mousemove', arrastrar);
        document.addEventListener('mouseup', detenerArrastre);
        
        e.preventDefault();
    }
    
    function iniciarArrastreTouch(e) {
        if (!esMovil) return;
        
        isDragging = true;
        reproductor.classList.add('dragging');
        
        document.addEventListener('touchmove', arrastrarTouch, { passive: false });
        document.addEventListener('touchend', detenerArrastre);
        
        e.preventDefault();
    }
    
    function arrastrar(e) {
        if (!isDragging) return;
        
        const x = e.clientX - (reproductor.offsetWidth / 2);
        const y = e.clientY - (reproductor.offsetHeight / 2);
        
        // Limitar a los bordes de la pantalla
        const maxX = window.innerWidth - reproductor.offsetWidth;
        const maxY = window.innerHeight - reproductor.offsetHeight;
        
        const posX = Math.max(0, Math.min(x, maxX));
        const posY = Math.max(0, Math.min(y, maxY));
        
        reproductor.style.left = posX + 'px';
        reproductor.style.top = posY + 'px';
    }
    
    function arrastrarTouch(e) {
        if (!isDragging) return;
        
        const touch = e.touches[0];
        const x = touch.clientX - (reproductor.offsetWidth / 2);
        const y = touch.clientY - (reproductor.offsetHeight / 2);
        
        // Limitar a los bordes de la pantalla
        const maxX = window.innerWidth - reproductor.offsetWidth;
        const maxY = window.innerHeight - reproductor.offsetHeight;
        
        const posX = Math.max(0, Math.min(x, maxX));
        const posY = Math.max(0, Math.min(y, maxY));
        
        reproductor.style.left = posX + 'px';
        reproductor.style.top = posY + 'px';
        
        e.preventDefault();
    }
    
    function detenerArrastre() {
        isDragging = false;
        reproductor.classList.remove('dragging');
        document.removeEventListener('mousemove', arrastrar);
        document.removeEventListener('touchmove', arrastrarTouch);
        document.removeEventListener('mouseup', detenerArrastre);
        document.removeEventListener('touchend', detenerArrastre);
    }
}

// Hacer funciones disponibles globalmente
window.reproducirCancionActual = reproducirCancionActual;
window.siguienteCancion = siguienteCancion;
window.actualizarNombreCancion = actualizarNombreCancion;