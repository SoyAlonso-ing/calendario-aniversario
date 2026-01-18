// ============================================
// ARCHIVO: reproductor-simple.js
// REPRODUCTOR SIMPLE SIN SELECCIÓN DE CANCIONES
// ============================================

console.log("🎵 Inicializando reproductor simple...");

// Lista de canciones (solo archivos, sin nombres visibles)
const canciones = [
    "audio/teAmo.mp3",
    "audio/labiosCompartidos.mp3", 
    "audio/barbacoa.mp3",
    "audio/jardin.mp3"
];

let cancionActual = 0;
let volumen = 0.7;

// Inicializar cuando el DOM cargue
document.addEventListener('DOMContentLoaded', function() {
    inicializarReproductorSimple();
});

function inicializarReproductorSimple() {
    const audio = document.getElementById('musicaFondo');
    const reproductor = document.getElementById('reproductorMusica');
    const btnMusicaPrincipal = document.getElementById('btnMusica');
    
    if (!audio || !reproductor || !btnMusicaPrincipal) {
        console.error("❌ Elementos del reproductor no encontrados");
        return;
    }
    
    // Configurar volumen inicial
    audio.volume = volumen;
    
    // 1. Configurar botón principal de música
    btnMusicaPrincipal.onclick = function() {
        if (reproductor.style.display === 'none' || reproductor.style.display === '') {
            reproductor.style.display = 'block';
            this.innerHTML = '<i class="fas fa-pause"></i>';
            this.title = "Ocultar reproductor";
            
            // Solo reproducir si está pausado
            if (audio.paused) {
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
        actualizarDuracionTotal();
    });
    
    // 5. Cuando termine la canción, pasar a la siguiente
    audio.addEventListener('ended', function() {
        siguienteCancion();
    });
    
    console.log("✅ Reproductor simple inicializado");
}

function configurarControlesSimples() {
    const audio = document.getElementById('musicaFondo');
    const reproductor = document.getElementById('reproductorMusica');
    
    // Botón cerrar reproductor
    document.getElementById('btnCerrarReproductor').onclick = function() {
        reproductor.style.display = 'none';
        document.getElementById('btnMusica').innerHTML = '<i class="fas fa-music"></i>';
        document.getElementById('btnMusica').title = "Mostrar reproductor";
    };
    
    // Botón play/pause - CORREGIDO para reanudar
    document.getElementById('btnPlayPause').onclick = function() {
        if (audio.paused) {
            // Si no hay fuente o la canción terminó, cargar la actual
            if (!audio.src || audio.ended || audio.currentTime >= audio.duration) {
                reproducirCancionActual();
            } else {
                // Si está pausada, reanudar
                audio.play();
                this.innerHTML = '<i class="fas fa-pause"></i>';
                document.getElementById('btnMusica').innerHTML = '<i class="fas fa-pause"></i>';
            }
        } else {
            // Pausar
            audio.pause();
            this.innerHTML = '<i class="fas fa-play"></i>';
            document.getElementById('btnMusica').innerHTML = '<i class="fas fa-music"></i>';
        }
    };
    
   // Botón anterior - CORREGIDO ID
    document.getElementById('btnMusicaAnterior').onclick = function() {
        cancionActual = (cancionActual - 1 + canciones.length) % canciones.length;
        reproducirCancionActual();
    };
    
    // Botón siguiente - CORREGIDO ID
    document.getElementById('btnMusicaSiguiente').onclick = function() {
        siguienteCancion();
    };
    
   /* // Control de volumen (opcional)
    const controlVolumen = document.getElementById('controlVolumen');
    if (controlVolumen) {
        controlVolumen.value = volumen * 100;
        
        controlVolumen.oninput = function() {
            volumen = this.value / 100;
            audio.volume = volumen;
            
            // Cambiar icono según volumen
            const iconoVolumen = document.querySelector('#reproductorMusica .fa-volume-up');
            if (volumen === 0) {
                iconoVolumen.className = 'fas fa-volume-mute';
            } else if (volumen < 0.5) {
                iconoVolumen.className = 'fas fa-volume-down';
            } else {
                iconoVolumen.className = 'fas fa-volume-up';
            }
        };
    }*/
    
    // Hacer la barra de progreso clickeable
    const barraProgreso = document.getElementById('barraProgreso');
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

function reproducirCancionActual() {
    const audio = document.getElementById('musicaFondo');
    
    // Verificar que la canción existe
    if (!canciones[cancionActual]) {
        console.error(`Canción ${cancionActual} no encontrada: ${canciones[cancionActual]}`);
        siguienteCancion(); // Intentar con la siguiente
        return;
    }
    
    console.log(`🎵 Intentando cargar: ${canciones[cancionActual]}`);
    
    // Establecer la fuente de la canción actual
    audio.src = canciones[cancionActual];
    
    // Resetear el tiempo actual
    audio.currentTime = 0;
    
    // Cargar y reproducir
    audio.load();
    
    // Intentar reproducir con manejo de promesas
    const playPromise = audio.play();
    
    if (playPromise !== undefined) {
        playPromise.then(() => {
            // Éxito: cambiar iconos a "pause"
            document.getElementById('btnPlayPause').innerHTML = '<i class="fas fa-pause"></i>';
            document.getElementById('btnMusica').innerHTML = '<i class="fas fa-pause"></i>';
            
            console.log(`✅ Reproduciendo canción ${cancionActual + 1}: ${canciones[cancionActual]}`);
            
            // Actualizar título del reproductor
            const tituloReproductor = document.querySelector('#reproductorMusica strong');
            if (tituloReproductor) {
                const nombresCanciones = [
                    "Te Amo (Pochi) 💘",
                    "Labios Mine Mine Mine 💋",
                    "Barbacoa (las mejores) 🍖",
                    "Jardín (Tu Artista) 🌸"
                ];
                tituloReproductor.innerHTML = `<i class="fas fa-music" style="margin-right: 5px;"></i> ${nombresCanciones[cancionActual] || `Canción ${cancionActual + 1}`}`;
            }
            
        }).catch(error => {
            console.error("❌ Error al reproducir:", error);
            
            // Si falla, intentar con la siguiente canción después de un breve retraso
            setTimeout(() => {
                console.log("⏭️ Intentando siguiente canción...");
                siguienteCancion();
            }, 1000);
        });
    }
    
    // Forzar actualización de duración cuando se cargue
    audio.onloadedmetadata = function() {
        actualizarDuracionTotal();
    };
    
    // Manejar errores de carga
    audio.onerror = function() {
        console.error(`❌ Error al cargar la canción: ${canciones[cancionActual]}`);
        
        // Mostrar notificación de error
        mostrarNotificacionMusica(`No se pudo cargar: ${canciones[cancionActual].split('/').pop()}`);
        
        // Saltar a la siguiente canción
        setTimeout(siguienteCancion, 1500);
    };
}

// Función auxiliar para mostrar notificaciones de música
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

function siguienteCancion() {
    cancionActual = (cancionActual + 1) % canciones.length;
    reproducirCancionActual();
}

function actualizarBarraProgreso() {
    const audio = document.getElementById('musicaFondo');
    const progreso = document.getElementById('progresoActual');
    const tiempoActual = document.getElementById('tiempoActual');
    
    if (audio.duration && !isNaN(audio.duration)) {
        const porcentaje = (audio.currentTime / audio.duration) * 100;
        progreso.style.width = `${porcentaje}%`;
        
        // Formatear tiempo actual (MM:SS)
        const minutos = Math.floor(audio.currentTime / 60);
        const segundos = Math.floor(audio.currentTime % 60);
        tiempoActual.textContent = `${minutos}:${segundos.toString().padStart(2, '0')}`;
    }
}

function actualizarDuracionTotal() {
    const audio = document.getElementById('musicaFondo');
    const duracionTotal = document.getElementById('duracionTotal');
    
    if (audio.duration && !isNaN(audio.duration)) {
        const minutos = Math.floor(audio.duration / 60);
        const segundos = Math.floor(audio.duration % 60);
        duracionTotal.textContent = `${minutos}:${segundos.toString().padStart(2, '0')}`;
    }
}

// Hacer funciones disponibles globalmente
window.reproducirCancionActual = reproducirCancionActual;
window.siguienteCancion = siguienteCancion;