async function bootSistema(){

    output.innerHTML=`

        <div class="bootTitle">

            PROJECTE ORIGEN OS v3.7

        </div>

        <div id="bootProgress">

            <div id="bootFill"></div>

        </div>

        <div id="bootText"></div>

    `;

    const barra=document.getElementById("bootFill");
    const text=document.getElementById("bootText");

    const passos=[

        "Inicialitzant nucli...",
        "Comprovant memòria temporal...",
        "Protocols de seguretat...",
        "Canal quàntic...",
        "Motor de transmissió...",
        "Intel·ligència ORIGEN...",
        "Buscant agents..."

    ];

    for(let i=0;i<passos.length;i++){

        barra.style.width=((i+1)/passos.length*100)+"%";

        text.innerHTML+=`

            <div class="bootInfo">

                ${passos[i]}

            </div>

        `;

        await espera(500);

    }

    text.innerHTML+=`

        <br>

        <div class="bootOk">

            ✔ SISTEMA PREPARAT

        </div>

    `;

    await espera(1200);

    output.innerHTML="";

}