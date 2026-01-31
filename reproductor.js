// ============================================
// ARCHIVO: reproductor-simple.js - VERSIÓN ESTÁTICA
// REPRODUCTOR SIMPLE Y ESTÁTICO - CORREGIDO
// ============================================

console.log("🎵 Inicializando reproductor estático (CORREGIDO)...");

// Lista de canciones - RUTAS CORREGIDAS
const canciones = [
    "audio/teAmo.mp3",
    "audio/labiosCompartidos.mp3", 
    "audio/barbacoa.mp3",
    "audio/jardin.mp3",
    "audio/rikaperry.mp3"
];

// Nombres para mostrar de las canciones
const nombresCanciones = [
    "Te Amo (Pochi)💘",
    "Tus Labios (Mine)👄",
    "Barbacoa (las #1)🍟",
    "Tu artista (Melendi)🌸",
    "Que buena estás (HOT!)🥭"
];

let cancionActual = 0;
let volumen = 0.7;
let intentosFallidos = 0; // Para evitar bucles infinitos

// Inicializar cuando el DOM cargue
document.addEventListener('DOMContentLoaded', function() {
    console.log("🎵 DOM cargado, inicializando reproductor estático CORREGIDO...");
    inicializarReproductor();
});

function inicializarReproductor() {
    console.log("🎵 Inicializando reproductor estático CORREGIDO...");
    
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
            } else if (audio.ended) {
                // Si la canción terminó, pasar a la siguiente
                siguienteCancion();
            } else {
                // Si está pausada, reanudar
                audio.play().then(() => {
                    this.innerHTML = '<i class="fas fa-pause"></i>';
                }).catch(e => {
                    console.error("Error al reanudar:", e);
                });
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
        console.log("🎵 Metadatos cargados correctamente");
        actualizarDuracionTotal();
        intentosFallidos = 0; // Resetear contador cuando se carga correctamente
    });
    
    // 5. Cuando termine la canción, pasar a la siguiente
    audio.addEventListener('ended', function() {
        console.log("🎵 Canción terminada correctamente, siguiente...");
        siguienteCancion();
    });
    
    console.log("✅ Reproductor estático CORREGIDO inicializado correctamente");
}

function configurarControles() {
    console.log("🎵 Configurando controles CORREGIDO...");
    
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
        
        // Cambiar icono inmediatamente
        if (audio.paused) {
            // Cambiar a icono de pausa (para mostrar que está reproduciendo/cargando)
            this.innerHTML = '<i class="fas fa-pause"></i>';
            const btnMusica = document.getElementById('btnMusica');
            if (btnMusica) btnMusica.innerHTML = '<i class="fas fa-pause"></i>';
            
            console.log("🔄 Intentando reproducir...");
            
            // Si no hay fuente o la canción terminó, cargar la actual
            if (!audio.src || audio.ended || audio.currentTime >= audio.duration) {
                console.log("🎵 No hay fuente, cargando canción actual...");
                reproducirCancionActual();
                return;
            }
            
            // Intentar reproducir (sin mostrar errores al usuario)
            audio.play().then(() => {
                console.log("▶️ Reproduciendo...");
                // El icono ya está en pausa desde arriba
            }).catch(error => {
                console.log("⏸️ No se pudo reproducir aún (puede estar cargando)");
                // Mantener el icono de pausa para indicar que está intentando reproducir
                // El audio.paused seguirá siendo true si falló
            });
            
        } else {
            // Pausar inmediatamente y cambiar a icono de play
            audio.pause();
            this.innerHTML = '<i class="fas fa-play"></i>';
            const btnMusica = document.getElementById('btnMusica');
            if (btnMusica) btnMusica.innerHTML = '<i class="fas fa-music"></i>';
            console.log("⏸️ Pausado...");
        }
    };
}
    
    // Botón anterior
    const btnAnterior = document.getElementById('btnMusicaAnterior');
    if (btnAnterior) {
        btnAnterior.onclick = function() {
            console.log("⏮️ Canción anterior...");
            // Guardar canción anterior para evitar bucles
            const anterior = cancionActual;
            cancionActual = (cancionActual - 1 + canciones.length) % canciones.length;
            
            // Si estamos cambiando a la misma canción, forzar cambio
            if (anterior === cancionActual && canciones.length > 1) {
                cancionActual = (cancionActual - 1 + canciones.length) % canciones.length;
            }
            
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
            
            if (audio.duration && !isNaN(audio.duration)) {
                audio.currentTime = audio.duration * porcentaje;
                actualizarBarraProgreso();
            }
        };
    }
    
    console.log("✅ Controles CORREGIDOS configurados");
}

function reproducirCancionActual() {
    console.log(`🎵 Reproduciendo canción ${cancionActual + 1}: ${canciones[cancionActual]}`);
    
    const audio = document.getElementById('musicaFondo');
    if (!audio) {
        console.error("❌ Elemento de audio no encontrado");
        return;
    }
    
    // Verificar que la canción existe en el array
    if (!canciones[cancionActual]) {
        console.error(`❌ Canción ${cancionActual} no encontrada en el array`);
        cancionActual = 0; // Resetear al inicio
        return;
    }
    
    // Mostrar el nombre de la canción primero
    actualizarNombreCancion();
    
    try {
        // Establecer la fuente de la canción actual
        audio.src = canciones[cancionActual];
        
        // Resetear el tiempo actual
        audio.currentTime = 0;
        
        // Cargar la canción
        audio.load();
        
        // Los iconos ya deberían estar en pausa desde el click del botón
        // Intentar reproducir automáticamente
        const playPromise = audio.play();
        
        if (playPromise !== undefined) {
            playPromise.then(() => {
                console.log(`✅ Reproduciendo: ${canciones[cancionActual]}`);
                intentosFallidos = 0; // Resetear contador de fallos
                
            }).catch(error => {
                console.log("🔄 Audio cargado pero esperando interacción o cargando...");
                // No hacemos nada, mantenemos los iconos como están
                // El audio se reproducirá cuando esté listo y el usuario vuelva a dar play
            });
        }
    } catch (error) {
        console.error("❌ Error al cargar canción:", error);
        // Si hay error, volver al estado de play
        const btnPlayPause = document.getElementById('btnPlayPause');
        const btnMusica = document.getElementById('btnMusica');
        
        if (btnPlayPause) btnPlayPause.innerHTML = '<i class="fas fa-play"></i>';
        if (btnMusica) btnMusica.innerHTML = '<i class="fas fa-music"></i>';
    }
}

function siguienteCancion() {
    console.log("🎵 Cambiando a siguiente canción CORREGIDO...");
    
    // Guardar canción actual para verificar
    const actual = cancionActual;
    
    // Avanzar a la siguiente
    cancionActual = (cancionActual + 1) % canciones.length;
    
    // Verificar que no estamos en la misma canción (solo si hay más de una)
    if (actual === cancionActual && canciones.length > 1) {
        cancionActual = (cancionActual + 1) % canciones.length;
    }
    
    // Reproducir la nueva canción
    reproducirCancionActual();
}

function actualizarNombreCancion() {
    const nombreCancionElement = document.getElementById('nombre-cancion');
    if (nombreCancionElement) {
        const nombre = nombresCanciones[cancionActual] || `Canción ${cancionActual + 1}`;
        nombreCancionElement.textContent = nombre;
        console.log(`📝 Mostrando nombre: ${nombre}`);
    }
}

function actualizarBarraProgreso() {
    const audio = document.getElementById('musicaFondo');
    const progreso = document.getElementById('progresoActual');
    const tiempoActual = document.getElementById('tiempoActual');
    
    if (audio && audio.duration && !isNaN(audio.duration) && audio.duration > 0) {
        const porcentaje = (audio.currentTime / audio.duration) * 100;
        if (progreso) progreso.style.width = `${porcentaje}%`;
        
        // Formatear tiempo actual (MM:SS)
        if (tiempoActual) {
            const minutos = Math.floor(audio.currentTime / 60);
            const segundos = Math.floor(audio.currentTime % 60);
            tiempoActual.textContent = `${minutos}:${segundos.toString().padStart(2, '0')}`;
        }
    } else if (tiempoActual && (!audio.duration || isNaN(audio.duration))) {
        tiempoActual.textContent = "0:00";
        if (progreso) progreso.style.width = "0%";
    }
}

function actualizarDuracionTotal() {
    const audio = document.getElementById('musicaFondo');
    const duracionTotal = document.getElementById('duracionTotal');
    
    if (audio && audio.duration && !isNaN(audio.duration) && audio.duration > 0 && duracionTotal) {
        const minutos = Math.floor(audio.duration / 60);
        const segundos = Math.floor(audio.duration % 60);
        duracionTotal.textContent = `${minutos}:${segundos.toString().padStart(2, '0')}`;
        console.log(`⏱️ Duración total: ${minutos}:${segundos.toString().padStart(2, '0')}`);
    } else if (duracionTotal) {
        duracionTotal.textContent = "0:00";
    }
}

function mostrarNotificacion(mensaje, tipo = 'error') {
    // Eliminar notificaciones anteriores para evitar acumulación
    const notificacionesAnteriores = document.querySelectorAll('.notificacion-temporal');
    notificacionesAnteriores.forEach(notif => {
        if (notif.parentNode) notif.parentNode.removeChild(notif);
    });
    
    const notificacion = document.createElement('div');
    notificacion.className = 'notificacion-temporal';
    notificacion.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${tipo === 'error' ? '#9C27B0' : tipo === 'info' ? '#2196F3' : '#4CAF50'};
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
            <i class="fas fa-${tipo === 'error' ? 'exclamation-triangle' : tipo === 'info' ? 'info-circle' : 'check-circle'}"></i>
            <span>${mensaje}</span>
        </div>
    `;
    
    // Agregar animaciones si no existen
    if (!document.querySelector('#estilos-notificacion')) {
        const style = document.createElement('style');
        style.id = 'estilos-notificacion';
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
    }
    
    document.body.appendChild(notificacion);
    
    // Auto-eliminar después de 3 segundos
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

// Función para probar las rutas de audio
function probarRutasAudio() {
    console.log("🔍 Probando rutas de audio:");
    canciones.forEach((ruta, index) => {
        console.log(`  ${index + 1}. ${ruta} -> ${nombresCanciones[index] || 'Sin nombre'}`);
    });
}

// Ejecutar prueba al cargar
setTimeout(probarRutasAudio, 1000);