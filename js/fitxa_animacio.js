/*==========================================================
RECUPERACIÓ D'EXPEDIENT
==========================================================*/

async function animacioRecuperacioFitxa(agent){

    const overlay = obrirPopup();

    const popup = document.createElement("div");

    popup.className = "popup popupRecuperacio";

    overlay.appendChild(popup);

    popup.innerHTML=`

        <div class="recuperacioTitol">

            RECUPERANT EXPEDIENT

        </div>

        <div class="barraExteriorRec">

            <div
                id="barraRecuperacio"
                class="barraInteriorRec">
            </div>

        </div>

        <div
            id="percentatgeRec"
            class="percentatgeRec">

            0%

        </div>

        <div
            id="logsRecuperacio"
            class="logsRecuperacio">

        </div>

    `;

    const barra =
        popup.querySelector("#barraRecuperacio");

    const percentatge =
        popup.querySelector("#percentatgeRec");

    const logs =
        popup.querySelector("#logsRecuperacio");

    const passos=[

        {
            p:5,
            t:"✓ Verificació completada."
        },

        {
            p:12,
            t:"Accedint al Laboratori Central..."
        },

        {
            p:22,
            t:`Expedient ${agent.id} localitzat.`
        },

        {
            p:34,
            t:"Validant credencial..."
        },

        {
            p:42,
            t:"Recuperant fotografia oficial..."
        },

        {
            p:58,
            t:"Calculant índex d'imaginació..."
        },

        {
            p:70,
            t:"Verificant especialitat..."
        },

        {
            p:84,
            t:`Comprovant nivell ${agent.nivell}...`
        },

        {
            p:90,
            t:"Validant signatura..."
        },

        {
            p:96,
            t:"Esperant autorització de Direcció..."
        },

        {
            p:97,
            t:"Canal segur establert..."
        },

        {
            p:98,
            t:"Autorització rebuda."
        },

        {
            p:100,
            t:'<span class="successRec">✓ ACCÉS CONCEDIT</span>'
        }

    ];

    const historial=[];

    for(const pas of passos){

        barra.style.width = pas.p+"%";

        percentatge.textContent = pas.p+"%";

        historial.push(pas.t);

        while(historial.length>5){

            historial.shift();

        }

        logs.innerHTML="";

historial.forEach((text,index)=>{

    const div=document.createElement("div");

    if(index===historial.length-1){

        div.innerHTML=`<span class="actiu">►</span> ${text}`;

    }else{

        div.innerHTML=`<span class="fet">✓</span> ${text}`;

    }

    logs.appendChild(div);

});
        if(pas.p===96){

    await espera(2500);

}else if(pas.p===98){

    await espera(900);

}else{

    await espera(900);

}

    }

    await espera(1000);

const final=document.createElement("div");

final.className="finalRecuperacio";

final.textContent="OBRINT EXPEDIENT...";

logs.appendChild(final);

await espera(1800);

await glitchCurt();

await espera(180);

tancarPopup(overlay);

await espera(300);

await mostrarFitxaAgent(agent);

}