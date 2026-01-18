// ============================================
// ARCHIVO: reproductor-simple.js - VERSIÓN ESTÁTICA
// REPRODUCTOR SIMPLE Y ESTÁTICO
// ============================================

console.log("🎵 Inicializando reproductor estático...");

// Lista de canciones
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

// Inicializar cuando el DOM cargue
document.addEventListener('DOMContentLoaded', function() {
    console.log("🎵 DOM cargado, inicializando reproductor estático...");
    inicializarReproductor();
});

function inicializarReproductor() {
    console.log("🎵 Inicializando reproductor estático...");
    
    const audio = document.getElementById('musicaFondo');
    const reproductor = document.getElementById('reproductorMusica');
    const btnMusicaPrincipal = document.getElementById('btnMusica');
    
    // Verificar que los elementos existen
    if (!audio) {
        console.error("❌ Elemento de audio no encontrado");
        return;
    }
    
    if (!reproductor) {
        console.error("❌ Reproductor no encontrado");
        return;
    }
    
    if (!btnMusicaPrincipal) {
        console.error("❌ Botón de música principal no encontrado");
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
    configurarControles();
    
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
    
    console.log("✅ Reproductor estático inicializado correctamente");
}

function configurarControles() {
    console.log("🎵 Configurando controles...");
    
    const audio = document.getElementById('musicaFondo');
    const reproductor = document.getElementById('reproductorMusica');
    
    if (!audio || !reproductor) {
        console.error("❌ Audio o reproductor no encontrados");
        return;
    }
    
    // Botón cerrar reproductor
    const btnCerrar = document.getElementById('btnCerrarReproductor');
    if (btnCerrar) {
        btnCerrar.onclick = function() {
            reproductor.style.display = 'none';
            const btnMusica = document.getElementById('btnMusica');
            if (btnMusica) {
                btnMusica.innerHTML = '<i class="fas fa-music"></i>';
                btnMusica.title = "Mostrar reproductor";
            }
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
                    const btnMusica = document.getElementById('btnMusica');
                    if (btnMusica) btnMusica.innerHTML = '<i class="fas fa-pause"></i>';
                }
            } else {
                // Pausar
                console.log("⏸️ Pausando...");
                audio.pause();
                this.innerHTML = '<i class="fas fa-play"></i>';
                const btnMusica = document.getElementById('btnMusica');
                if (btnMusica) btnMusica.innerHTML = '<i class="fas fa-music"></i>';
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
            mostrarNotificacion("No se pudo reproducir la canción", "error");
            
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

function mostrarNotificacion(mensaje, tipo = 'error') {
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

// Hacer funciones disponibles globalmente
window.reproducirCancionActual = reproducirCancionActual;
window.siguienteCancion = siguienteCancion;
window.actualizarNombreCancion = actualizarNombreCancion;