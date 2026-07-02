let agentActual = null;

function nomAgent(){

    return `Agent ${agentActual.id}`;

}

let modeTerminal = "login";

let respostaCorrecta = "";

let callbackResposta = null;

async function buscarTemporalitat(){

    const anys=[1813,1926,1985,2013, 2026];

    for(const any of anys){

        // Mostrem primer només l'any
        await escriu(any.toString(),20);

        await espera(180);

        // Després actualitzem la mateixa línia
        if(any!==2026){

            output.lastChild.innerHTML=
                any+
                " <span class='error'>✕ Cap coincidència</span>";

        }else{

            output.lastChild.innerHTML=
                any+
                " <span class='success'>✓ Coincidència trobada</span>";

        }

        await espera(350);

    }

}

async function iniciarSistema(){

    await carregarAgents();

    await bootSistema();

    await escriu("Inicialitzant terminal...",25);

    await espera(600);

    espai(28);

    await escriu("<span class='success'>TEMPORALITAT DETECTADA: ANY 1746</span>");

    await canviarTemps("TEMPORALITAT: 1746");

    await espera(1400);

    espai();

    await animarProces("Buscant agents compatibles");

    await escriu("<span class='error'>Cap agent compatible.</span>");

    await espera(1500);

    terminal.classList.add("glitch");

    await espera(180);

    terminal.classList.remove("glitch");

    espai();

    await animarProces("Canviant coordenades temporals");

    await espera(900);

    await buscarTemporalitat();

    await espera(800);

    await escriu("<span class='success'>TEMPORALITAT DETECTADA: ANY 2026</span>");

    await canviarTemps("TEMPORALITAT: 2026");

    await espera(1200);

    espai(28);

    await escriu("<span class='system'>CANAL SEGUR ESTABLERT</span>");

    await canviarSignal("📡 CANAL SEGUR");

    await espera(700);

    await animarProces("ESCANEJANT... Buscant agents compatibles");

    await espera(900);

    await escriu("<span class='warning'>Interferències detectades.</span>");

    await canviarSignal("⚠ INTERFERÈNCIES","statusWarning");

    await espera(1800);

    await animarProces("Reiniciant exploració");

    await espera(1500);

    await escriu("<span class='success'>NOVA PRESÈNCIA COMPATIBLE</span>");

    await espera(1200);

    espai(28);

    await escriu("<span class='system'>AGENT LOCALITZAT</span>");

    await canviarSignal("📡 CANAL SEGUR");

    await espera(800);

    await escriu("Introdueix la teva credencial:");

    inputArea.classList.remove("hidden");

    codeInput.focus();

}

codeInput.addEventListener("keydown", async e=>{

    if(e.key!=="Enter") return;

    // ============================
    // MODE TRANSMISSIÓ
    // ============================

    if(modeTerminal==="transmissio"){

        const resposta = codeInput.value.trim();

        codeInput.value="";

        inputArea.classList.add("hidden");

        if(callbackResposta){

            await callbackResposta(resposta);

        }

        return;

    }

    // ============================
    // MODE DESXIFRAT
    // ============================

    if(modeTerminal==="desxifrat"){
        const resposta=codeInput.value.trim().toUpperCase();

        codeInput.value="";

        if(resposta===respostaCorrecta){

            modeTerminal="login";

            inputArea.classList.add("hidden");

            await mostrarFitxaAgent(agentActual);

        }else{

            await escriu("");

            await escriu("<span class='error'>Descodificació incorrecta.</span>");

        }

        return;

    }

    /*==================================================
      LOGIN
    ==================================================*/

    const codi=codeInput.value.trim().toUpperCase();

    const agent=obtenirAgent(codi);

    if(!agent){

        espai();

        await error("ERROR");

        await escriu("Credencial desconeguda.");

        await espera(900);

        espai();

        await escriu("Introdueix la teva credencial:");

        codeInput.value="";

        codeInput.focus();

        return;

    }

inputArea.classList.add("hidden");

    agentActual=agent;

    output.innerHTML="";

    await sistema("Credencial validada.");

    await espera(500);

    const salutacio =
    agent.genere.trim().toLowerCase()==="noia"
        ? "Benvinguda"
        : "Benvingut";

    await escriu(`${salutacio}, Agent ${agent.id}.`);

    await espera(700);

    espai(28);

    await sistema("T'han localitzat i hi ha algú que es vol comunicar amb tu...");

    await espera(700);

    espai();

    await espera(500);

// Botó
const boto=document.createElement("div");

boto.className="botoTerminal";

boto.innerHTML=`
    <div class="titolBoto">TRANSMISSIÓ PRIORITÀRIA</div>
    <div class="accioBoto">CONNECTAR-SE</div>
`;

boto.onclick = async ()=>{

    // Desactivem el botó perquè no es pugui clicar dues vegades
    boto.style.pointerEvents="none";

    // Canviem el contingut de la finestra
    boto.innerHTML=`

        <div class="titolBoto">
            CONNECTANT...
        </div>

        <div class="accioBoto">
            Esperant resposta...
        </div>

    `;

    await espera(1200);

    boto.innerHTML=`

        <div class="titolBoto success">
            CONNEXIÓ ACCEPTADA
        </div>

        <div class="accioBoto">
            Canal xifrat establert
        </div>

    `;

    await espera(1000);

    overlay.style.display="none";

    output.innerHTML="";

    await popupConnexio();

    document.body.classList.add("transmissio");

    await iniciarTransmissio(agent);

};

const overlay=document.getElementById("overlay");

overlay.style.display="flex";

overlay.innerHTML="";

overlay.appendChild(boto);

output.scrollTop=output.scrollHeight;

});

iniciarSistema();