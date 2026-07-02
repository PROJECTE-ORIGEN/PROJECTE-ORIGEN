let modal;
let modalContent;

window.addEventListener("DOMContentLoaded",()=>{

    modal=document.getElementById("modal");

    modalContent=document.getElementById("modalContent");

    document
        .getElementById("closeModal")
        .addEventListener("click",()=>{

            modal.classList.add("hidden");

        });

});

function obrirModal(html){

    modalContent.innerHTML=html;

    modal.classList.remove("hidden");

}

async function desxifrarArxiu(){

    obrirModal(`

        <h2>🔐 DESXIFRANT ARXIU...</h2>

        <br>

        <div id="decryptBar">

            <div id="decryptProgress"></div>

        </div>

        <br>

        <p id="decryptText">

            Iniciant protocol...

        </p>

    `);

    const barra=document.getElementById("decryptProgress");
    const text=document.getElementById("decryptText");

    const passos=[

        "Buscant clau quàntica...",
        "Sincronitzant línia temporal...",
        "Verificant identitat de l'agent...",
        "Desxifrant...",
        "Comprovant permisos..."

    ];

    for(let i=0;i<passos.length;i++){

        barra.style.width=((i+1)*20)+"%";

        text.innerHTML=passos[i];

        await espera(900);

    }

    await espera(500);

    modalContent.innerHTML=`

        <h2>❌ ACCÉS DENEGAT</h2>

        <br>

        <p>

        Aquest arxiu només es podrà obrir

        quan arribis a <b>Cal Mata</b>.

        </p>

        <br>

        <p>

        <b>Nivell d'autorització insuficient.</b>

        </p>

    `;

}