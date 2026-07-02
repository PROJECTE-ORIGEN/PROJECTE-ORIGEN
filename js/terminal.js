const output = document.getElementById("output");
const inputArea = document.getElementById("inputArea");
const codeInput = document.getElementById("codeInput");

const espera = ms => new Promise(r => setTimeout(r, ms));

const screen = document.getElementById("screen");

const personatges={

        narax:{
            nom:"NARAX-83",
            classe:"narax"
        },

        zyn:{
            nom:"ZYN_33",
            classe:"zyn"
        }

    };
    
function baixarTerminal(){

    requestAnimationFrame(()=>{

        screen.scrollTop = screen.scrollHeight;

    });

}

let primeraLiniaTerminal = true;

async function escriu(text, velocitat = 32){

    if(primeraLiniaTerminal){

        espai(26);

        primeraLiniaTerminal = false;

    }

    const linea=document.createElement("div");

    output.appendChild(linea);

    // Si el text és buit, creem una línia en blanc real
    if(text === ""){

    linea.innerHTML = "&nbsp;";

    baixarTerminal();

    return;

}

    // Si és HTML, el mostrem directament
    if(text.includes("<")){

        linea.innerHTML=text;

        baixarTerminal();

        await espera(180);

        return;

    }

    // Si és text normal, l'escrivim lletra a lletra
    for(const lletra of text){

        linea.textContent+=lletra;

        baixarTerminal();

        await espera(velocitat);

    }

}

async function barraCarrega(){

    const linea = document.createElement("div");

    output.appendChild(linea);

    const passos = [

        "█□□□□□□□□□",
        "██□□□□□□□□",
        "███□□□□□□□",
        "████□□□□□□",
        "█████□□□□□",
        "██████□□□□",
        "███████□□□",
        "████████□□",
        "█████████□",
        "██████████"

    ];

    for(const pas of passos){

        linea.innerHTML = pas;

        await espera(90);

    }

}

async function barraConnexio(){

    const linea=document.createElement("div");

    output.appendChild(linea);

    for(let i=0;i<=100;i++){

        const blocs=Math.floor(i/10);

        linea.innerHTML=

        "["+

        "■".repeat(blocs)+

        "□".repeat(10-blocs)+

        "] "+i+"%";

        baixarTerminal();

        await espera(18);

    }

}

async function interferencia(){

    await canviarSignal("⚠ INTERFERÈNCIES","statusWarning");

    espai();

    const linia=document.createElement("div");

    output.appendChild(linia);

    const textos=[

        "▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒",

        "█████████████████████",

        "▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓",

        "ERROR DE SENYAL",

        "RECUPERANT CONNEXIÓ"

    ];

    for(const t of textos){

        linia.innerHTML=t;

        terminal.classList.add("glitch");

        await espera(140);

    }

    terminal.classList.remove("glitch");

    espai();

    await espera(700);

    await canviarSignal("📡 TRANSMISSIÓ EN CURS");

}

async function parlar(personatge, missatges){

    const info=personatges[personatge];

    // Creem un bloc per a tot el diàleg del personatge
    const bloc=document.createElement("div");

    bloc.className="blocDialeg";

    output.appendChild(bloc);

    // Nom del personatge
    const speaker=document.createElement("div");

    speaker.className=`${info.classe} speaker`;

    speaker.textContent="> "+info.nom;

    bloc.appendChild(speaker);

    baixarTerminal();

    // Petita pausa perquè primer es vegi qui parla
    await espera(450);

    // Frases del personatge
    for(const frase of missatges){
        const linia=document.createElement("div");

        linia.className=`${info.classe} dialogue`;

        bloc.appendChild(linia);

        for(const lletra of frase){

            linia.textContent+=lletra;

            baixarTerminal();

            await espera(38);

        }

        // Petita pausa entre frases del mateix personatge
        await espera(500);

    }

    // Espai abans que parli un altre personatge
    espai();

}

async function parlarAgent(text){

    if(!text) return;

    const bloc=document.createElement("div");

    bloc.className="blocDialeg";

    output.appendChild(bloc);

    const speaker=document.createElement("div");

    speaker.className="speaker user";

    speaker.textContent="> Agent "+agentActual.id;

    bloc.appendChild(speaker);

    baixarTerminal();

    await espera(250);

    const linia=document.createElement("div");

    linia.className="dialogue user";

    bloc.appendChild(linia);

    for(const lletra of text){

        linia.textContent+=lletra;

        baixarTerminal();

        await espera(20);

    }

    espai();

}

async function escriuInstant(text){

    const linea=document.createElement("div");

    linea.className="blocInstant";

    linea.innerHTML=text.trim();

    output.appendChild(linea);

    baixarTerminal();

}

async function sistema(text){

    await escriu(`<span class="system">${text}</span>`);

    espai();

}

async function error(text){

    await escriu(`<span class="error">${text}</span>`);

    espai();

}

async function warning(text){

    await escriu(`<span class="warning">${text}</span>`);

    espai();

}

async function animarProces(text, cicles = 2){

    const linea = document.createElement("div");

    output.appendChild(linea);

    for(let c = 0; c < cicles; c++){

        for(let i = 1; i <= 4; i++){

            linea.innerHTML = text + ".".repeat(i);

            baixarTerminal();

            await espera(250);

        }

    }

    // Petita pausa abans de confirmar
    await espera(150);

    // Deixem els tres punts i afegim el símbol verd
    linea.innerHTML =
        text +
        "... <span class='success'>✓</span>";

    baixarTerminal();

    // Petita pausa perquè es pugui llegir
    await espera(180);

    // Línia en blanc per separar blocs
    espai();

}

function espai(alcada = 12){

    const div = document.createElement("div");

    div.style.height = alcada + "px";

    output.appendChild(div);

    baixarTerminal();

}

async function esperarRespostaAgent(){

    modeTerminal="transmissio";

    inputArea.classList.remove("hidden");

    codeInput.value="";

    codeInput.focus();

    return new Promise(resolve=>{

        callbackResposta = async(resposta)=>{

            modeTerminal="login";

            callbackResposta=null;

            // ESCRIU EL QUE HA DIT L'AGENT A LA CONVERSA
            await parlarAgent(resposta);

            espai(10);

            inputArea.classList.add("hidden");

            const text=resposta.trim().toLowerCase();

            if(

                text==="si" ||
                text==="sí" ||
                text==="hola" ||
                text==="estic" ||
                text==="aqui" ||
                text==="aquí"

            ){

                await parlar("narax",[
                    "Perfecte."
                ]);

                await parlar("zyn",[
                    "Encara tenim connexió."
                ]);

                await parlar("narax",[
                    "T'enviarem els documents."
                ]);

            }else{

                await parlar("narax",[
                    "Rebut!",
                    "Cal anar de pressa..."
                ]);

                await parlar("zyn",[
                    "Hem detectat una presència."
                ]);

                await parlar("narax",[
                    "Sí! T'enviem els documents igualment.",
                    "No tenim massa temps..."
                ]);

            }

            resolve();

        };

    });

}

function obrirPopup(){

    const overlay=document.createElement("div");

    overlay.className="popupOverlay";

    document.body.appendChild(overlay);

    return overlay;

}

function tancarPopup(popup){

    popup.remove();

}

async function popupConnexio(){

    const overlay=obrirPopup();

    const popup=document.createElement("div");

    popup.className="popup";

    overlay.appendChild(popup);

    popup.innerHTML=`

        <div class="popupTitle">
            ESTABLINT CONNEXIÓ
        </div>

        <div id="barraPopup"></div>

    `;

    const barra=popup.querySelector("#barraPopup");

    for(let i=0;i<=98;i++){

        const blocs=Math.floor(i/10);

        barra.innerHTML=

            "["+

            "■".repeat(blocs)+

            "□".repeat(10-blocs)+

            "] "+i+"%";

        await espera(22);

    }

    // Petita pausa dramàtica
    await espera(450);

    barra.innerHTML=
        "[■■■■■■■■■■] 100%";

    await espera(350);

    tancarPopup(overlay);

}

/*==========================================================
FITXERS EN LÍNIA
==========================================================*/

async function fitxerOK(nom){

    await escriu(`
<span class="fitxer">▶ ${nom} <span class="success">— ✓ OK</span></span>
    `);

}

async function fitxerError(nom){

    await escriu(`
<span class="fitxer">▶ ${nom} <span class="error">— ✕ CORRUPTE</span></span>
    `);

}

async function fitxerBloquejat(nom){

    await escriu(`
<span class="fitxer">▶ ${nom} <span class="warning">— 🔒 BLOQUEJAT</span></span>
    `);

}