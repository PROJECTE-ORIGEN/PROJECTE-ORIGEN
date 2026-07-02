/*==========================================================
FINAL.JS
==========================================================*/

const headerCanal = document.getElementById("signal");
const headerTemps = document.getElementById("timeStatus");

async function iniciarFinal(agent){

    output.innerHTML="";

    await espera(500);

    await conversaFinal(agent);

    await tancarConnexio();

}

/*==========================================================
PREGUNTES
==========================================================*/

async function finalPregunta(agent, opcions){

    return new Promise(resolve=>{

        const contenidor=document.createElement("div");

        contenidor.className="opcionsFinal";

        opcions.forEach(opcio=>{

            const boto=document.createElement("button");

            boto.className="botoResposta";

            let textVisible=opcio;

            switch(opcio){

                case "SÍ":
                    textVisible="Sí, us rebo.";
                    break;

                case "NO":
                    textVisible="No...";
                    break;

                case "HI SERÉ":
                    textVisible="Hi seré.";
                    break;

                case "COMPTEU AMB MI":
                    textVisible="Compteu amb mi.";
                    break;

                case "HO INTENTARÉ":
                    textVisible="Ho intentaré.";
                    break;

            }

            boto.textContent=textVisible;

            boto.onclick=async()=>{

                contenidor.remove();

                await parlarAgent(textVisible);

                resolve(opcio);

            };

            contenidor.appendChild(boto);

        });

        output.appendChild(contenidor);

    });

}

/*==========================================================
INTERFERÈNCIA
==========================================================*/

async function finalInterferencia(){

    await escriu("");

    const alerta=document.createElement("div");

    alerta.className="liniaError";

    alerta.textContent="████ ALERTA";

    output.appendChild(alerta);

    baixarTerminal();

    await espera(180);

    const canal=document.createElement("div");

    canal.className="liniaError";

    canal.textContent="CANAL COMPROMÈS";

    output.appendChild(canal);

    baixarTerminal();

    await espera(250);

    await glitchCurt();

    await espera(600);

    await escriu("");

}

async function finalInterferenciaForta(){

    await escriu("");

    await escriu("████████████████████",15);

    let linies = output.querySelectorAll("div");
    linies[linies.length-1].classList.add("inestable");

    await escriu("CONNEXIÓ INESTABLE",20);

    linies = output.querySelectorAll("div");
    linies[linies.length-1].classList.add("inestable");

    await espera(120);

    await escriu("INTENTANT BLOQUEJAR EL CANAL",20);

    linies = output.querySelectorAll("div");
    linies[linies.length-1].classList.add("inestable");

    await escriu("");

    await glitchFort();

    await espera(900);

}

/*==========================================================
CONVERSA FINAL
==========================================================*/

async function conversaFinal(agent){

    await parlar("narax",[
        "Agent "+agent.id+"...",
        "Ens sents?"
    ]);

    await espera(350);

    const resposta1=await finalPregunta(agent,[
        "SÍ",
        "NO"
    ]);

    if(resposta1==="SÍ"){

        await parlar("narax",[
            "Perfecte. La connexió encara aguanta."
        ]);

    }else{

        await parlar("narax",[
            "No pateixis... sabem que continues aquí."
        ]);

    }

    await espera(350);

    await parlar("zyn",[
        "Per fi sabem que ets un dels que estàvem buscant."
    ]);

    await espera(350);

    await finalInterferencia();

    espai();

    await parlar("narax",[
        "Ara només queda una última pregunta...",
        "Vindràs a completar la missió?"
    ]);

    await espera(350);

    const resposta2=await finalPregunta(agent,[
    "HI SERÉ",
    "COMPTEU AMB MI"
]);

    if(resposta2==="HI SERÉ"){

        await parlar("zyn",[
            "Ho sabíem."
        ]);

    }else{

        await parlar("narax",[
            "No esperàvem una altra resposta."
        ]);

    }

    await espera(350);

    await finalInterferencia();

    espai();

    await parlar("narax",[
        "T'esperem dilluns.",
        "A Saifores."
    ]);

    await espera(350);

    await parlar("zyn",[
        "No arribis tard.",
        "Et necessitem a la missió."
    ]);

    await espera(350);

    await finalInterferenciaForta();

    await parlar("narax",[
        `${nomAgent()}...`,
        "Si encara ens pots sentir..."
    ]);

    await espera(350);

    await parlar("zyn",[
        "Recorda una cosa.",
        "A partir d'ara..."
    ]);

    await glitchCurt();

    await glitchFort();
    
    await parlar("narax",[
        "... formes part del Projecte Origen."
    ]);

    await espera(500);

    const conversa = parlar("zyn",[
        "Recorda el teu àlies."
    ]);

    await espera(300);
    await glitchCurt();

    await espera(600);
    await glitchCurt();

    await espera(500);
    await glitchFort();

    await conversa;

    await glitchFort();

    await sistema("IDENTITAT REGISTRADA");

    await espera(300);

    await sistema("ÀLIES: " + agent.alias.toUpperCase());
    
    await espera(700);

    await glitchCurt()

    const conversa2 = parlar("zyn",[
        "El necessitaràs."
    ]);

    await espera(250);
    await glitchCurt();

    await espera(500);
    await glitchCurt();

    await conversa2;

    await glitchCurt();
    await glitchCurt();
    await glitchCurt();

    await escriu("");

    await escriu("████ CONNEXIÓ DEGRADANT-SE ████",20);

    let linies = output.querySelectorAll("div");
    linies[linies.length-1].classList.add("inestable");

    await espera(700);

    await escriu("...",80);

    linies = output.querySelectorAll("div");
    linies[linies.length-1].classList.add("inestable");

    await glitchFort();

    await espera(230);

    await glitchFort();

    await escriu("Confiem en tu.",45);
    linies = output.querySelectorAll("div");
    linies[linies.length-1].classList.add("inestable");

    await espera(1200);

}

/*==========================================================
DESCÀRREGA FITXA
==========================================================*/

async function descarregarFitxa(){

    const fitxa=document.querySelector(".fitxaDocument");

    if(!fitxa) return;

    const colorOriginal=fitxa.style.background;

    fitxa.style.background="#f7f1df";

    const accions=document.querySelector(".fitxaAccions");

    if(accions){

        accions.style.display="none";

    }

    const canvas=await html2canvas(
    fitxa,
    {
        backgroundColor:"#f7f1df",
        scale:2
    }
);

    fitxa.style.background=colorOriginal;
    
    if(accions){

        accions.style.display="flex";

    }

    const link=document.createElement("a");

    link.download=`Expedient_${document.querySelector(".valorAgent").textContent}.png`;

    link.href=canvas.toDataURL("image/png");

    link.click();

}
/*==========================================================
TANCAMENT
==========================================================*/

async function tancarConnexio(){

    headerCanal.textContent="ERROR DE CONNEXIÓ";

    headerCanal.classList.add("errorFinal");

    headerTemps.textContent="---";

    await espera(1200);

    await glitchCurt();

    await espera(350);

    output.innerHTML="";

    await espera(250);

    await escriu("");

    await escriu("████████████████████████",10);

    await espera(200);

    await escriu("CONNEXIÓ BLOQUEJADA",22);

    await espera(300);

    await escriu("SERVIDOR DESCONECTAT",22);

    output.insertAdjacentHTML(
    "beforeend",
    '<span class="cursorFinal"></span>'
);

    await espera(2500);

}
