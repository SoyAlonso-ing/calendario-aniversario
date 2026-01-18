// Agregar al principio de script.js
function mostrarBienvenida() {
    const bienvenida = document.createElement('div');
    bienvenida.id = 'bienvenida';
    bienvenida.innerHTML = `
        <div class="bienvenida-contenido">
            <h2>Para mi amor ❤️</h2>
            <p>Este calendario guarda 365 días de felicidad contigo</p>
            <p>Cada día es un recuerdo, una risa, un momento especial</p>
            <button onclick="cerrarBienvenida()" class="btn-romantico">
                Abrir nuestro año juntos
            </button>
        </div>
    `;
    document.body.appendChild(bienvenida);
}
// Variables globales
let diaSeleccionado = 1;

// Nombres de los meses para mostrar
const meses = [
    "ENERO", "FEBRERO", "MARZO", "ABRIL", "MAYO", "JUNIO",
    "JULIO", "AGOSTO", "SEPTIEMBRE", "OCTUBRE", "NOVIEMBRE", "DICIEMBRE"
];

// Días por mes (año no bisiesto)
const diasPorMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// Función para convertir número de día a fecha (MM-DD)
function numeroAFecha(numeroDia) {
    let mes = 0;
    let dia = numeroDia;
    
    while (dia > diasPorMes[mes]) {
        dia -= diasPorMes[mes];
        mes++;
    }
    
    // Formato: MM-DD (mes de 01-12, día de 01-31)
    const mesStr = (mes + 1).toString().padStart(2, '0');
    const diaStr = dia.toString().padStart(2, '0');
    
    return {
        formato: `${mesStr}-${diaStr}`,
        mes: mes,
        dia: dia
    };
}

// Generar el calendario completo
function generarCalendario() {
    const calendar = document.getElementById('calendar');
    calendar.innerHTML = '';
    
    let diaAcumulado = 1;
    
    for (let mes = 0; mes < 12; mes++) {
        // Agregar título del mes
        const tituloMes = document.createElement('div');
        tituloMes.className = 'mes-titulo';
        tituloMes.textContent = meses[mes];
        calendar.appendChild(tituloMes);
        
        // Generar días del mes
        for (let dia = 1; dia <= diasPorMes[mes]; dia++) {
            const fecha = numeroAFecha(diaAcumulado);
            const elementoDia = document.createElement('div');
            
            elementoDia.className = 'dia';
            elementoDia.innerHTML = `<span class="numero-dia">${dia}</span>`;
            
            // Verificar si tiene contenido especial
            if (diasEspeciales[fecha.formato]) {
                elementoDia.classList.add('tiene-contenido');
            }
            
            // Asignar evento click
            elementoDia.addEventListener('click', () => {
                diaSeleccionado = diaAcumulado;
                mostrarContenidoDia(diaAcumulado);
            });
            
            calendar.appendChild(elementoDia);
            diaAcumulado++;
        }
    }
}

// Mostrar contenido del día seleccionado
function mostrarContenidoDia(numeroDia) {
    const fecha = numeroAFecha(numeroDia);
    const visorContenido = document.getElementById('visorContenido');
    const viewer = document.getElementById('viewer');
    
    let contenidoHTML = '';
    
    // Verificar si hay contenido especial para este día
    if (diasEspeciales[fecha.formato]) {
        const dato = diasEspeciales[fecha.formato];
        
        if (dato.tipo === "foto") {
            contenidoHTML = `
                <h2 class="frase-titulo">Día ${numeroDia} - ${fecha.dia} de ${meses[fecha.mes]}</h2>
                <img src="${dato.contenido}" alt="Recuerdo del día ${fecha.dia}" 
                     onerror="this.style.display='none'; document.getElementById('mensajeError').style.display='block'">
                <div id="mensajeError" style="display:none; color:#ff6b6b; margin:20px;">
                    💕 La foto está en mi corazón
                </div>
                <div class="texto-contenido">
                    ${dato.texto || 'Un día especial contigo'}
                </div>
            `;
        } else {
            contenidoHTML = `
                <h2 class="frase-titulo">Día ${numeroDia} - ${fecha.dia} de ${meses[fecha.mes]}</h2>
                <div class="texto-contenido" style="font-size: 1.4rem;">
                    "${dato.contenido}"
                    ${dato.texto ? `<p style="margin-top: 15px; font-size: 1.1rem;">${dato.texto}</p>` : ''}
                </div>
            `;
        }
    } else {
        // Contenido genérico
        const fraseAleatoria = frasesGenericas[Math.floor(Math.random() * frasesGenericas.length)];
        contenidoHTML = `
            <h2 class="frase-titulo">Día ${numeroDia} - ${fecha.dia} de ${meses[fecha.mes]}</h2>
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
    
    // Bloquear scroll del body
    document.body.style.overflow = 'hidden';
}

// Cerrar el visor
function cerrarVisor() {
    const viewer = document.getElementById('viewer');
    viewer.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Cerrar con tecla ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        cerrarVisor();
    }
});

// Cerrar haciendo click fuera del contenido
document.getElementById('viewer').addEventListener('click', (e) => {
    if (e.target.id === 'viewer') {
        cerrarVisor();
    }
});

// Calcular días desde que empezaron (opcional)
function calcularDiasJuntos() {
    // Cambia esta fecha por la fecha real de cuando empezaron
    const fechaInicio = new Date('2025-04-05'); // FECHA DE INICIO - CÁMBIALA
    const hoy = new Date();
    const diferencia = hoy - fechaInicio;
    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    
    if (dias > 0 && dias <= 365) {
        document.getElementById('dias-juntos').textContent = dias;
    }
}

// Inicializar cuando cargue la página
document.addEventListener('DOMContentLoaded', () => {
    generarCalendario();
    calcularDiasJuntos(); // Opcional: quita si no quieres esta función
    
    // Mensaje de bienvenida (opcional)
    setTimeout(() => {
        console.log("💕 Bienvenida al calendario de nuestro amor 💕");
    }, 1000);
});

function detectarModoNocturno() {
    const ahora = new Date();
    const hora = ahora.getHours();
    
    if (hora >= 20 || hora < 6) {
        document.body.classList.add('modo-nocturno');
    }
}

function compartirDia(dia) {
    if (navigator.share) {
        navigator.share({
            title: `Día ${dia} de nuestro año`,
            text: `Mira lo especial que fue el día ${dia} para nosotros 💕`,
            url: window.location.href
        });
    }
}

// Código secreto de teclas
let codigoSecreto = [];
const codigoCorrecto = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // ↑↑↓↓←→←→BA

document.addEventListener('keydown', (e) => {
    codigoSecreto.push(e.keyCode);
    if (codigoSecreto.length > 10) codigoSecreto.shift();
    
    if (JSON.stringify(codigoSecreto) === JSON.stringify(codigoCorrecto)) {
        mostrarSorpresaSecreta();
    }
});

function mostrarSorpresaSecreta() {
    // Muestra algo especial como una foto oculta o mensaje
    alert("💝 ¡Encontraste nuestro secreto! Te amo más de lo que las palabras pueden decir.");
}

const diasFuturos = {
    "2024-01-15": {
        titulo: "Nuestro segundo aniversario",
        promesa: "Este año visitaremos [lugar soñado]",
        emoji: "🌟"
    },
    "2024-06-01": {
        titulo: "Nuestra primera aventura del segundo año",
        promesa: "Iremos a [actividad pendiente]",
        emoji: "🧳"
    }
};

function lanzarConfeti() {
    // Usar una librería simple o crear partículas
    for(let i = 0; i < 150; i++) {
        crearParticula();
    }
}

function crearParticula() {
    const particula = document.createElement('div');
    particula.style.cssText = `
        position: fixed;
        width: 10px;
        height: 10px;
        background: ${['#ff0080', '#00ff88', '#0088ff'][Math.floor(Math.random()*3)]};
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
    `;
    // Animación con JavaScript
}