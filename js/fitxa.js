/*==========================================================
FITXA AGENT
PART 1
==========================================================*/

async function mostrarFitxaAgent(agent){

    const overlay = obrirPopup();

    const popup = document.createElement("div");

    popup.className = "popup popupFitxa";

    overlay.appendChild(popup);

    const percent = Math.round(agent.imaginacio * 100);

    popup.innerHTML = `

<div class="fitxaDocument">

    <!--==================================================
    CAPÇALERA
    ==================================================-->

    <div class="fitxaHeader">

        <div class="expedient">

    <div class="petit">

        EXPEDIENT

    </div>

    <div class="numero">

        ${agent.id}

    </div>

</div>

        <div class="titols">

            <div class="titolPrincipal">

                PROJECTE ORIGEN

            </div>

            <div class="subtitol">

                FITXA D'IDENTITAT

            </div>

            <div class="subtitolPetit">

                ÚS EXCLUSIU INTERN

            </div>

        </div>

        <div class="segell">

            CLASSIFICAT

        </div>

    </div>

    <!--==================================================
    BLOC PRINCIPAL
    ==================================================-->

    <div class="blocPrincipal">

    <!-- FOTO -->

    <div class="blocFoto">

        <div class="marcFoto">

            <img
                class="fotoAgent"
                src="img/agents/${agent.foto}"
                alt="${agent.alias}"
            >

        </div>

        <div class="peuFoto">

            DOCUMENT OFICIAL

        </div>

    </div>

    <!-- IDENTITAT -->

    <div class="blocIdentitat">

        <div class="valorAgent">

            AGENT ${agent.id}

        </div>

        <div class="camp">

            <div class="etiqueta">

                ÀLIES

            </div>

            <div class="valorGran">

                ${agent.alias.toUpperCase()}

            </div>

        </div>

        <div class="camp">

            <div class="etiqueta">

                NOM COMPLET

            </div>

            <div class="valor">

                ${agent.nom} ${agent.cognoms}

            </div>

        </div>

        <div class="camp">

            <div class="etiqueta">

                ESPECIALITAT

            </div>

            <div class="valor">

                ${agent.especialitat}

            </div>

        </div>

        <div class="autoritzat">

            <span class="checkAutoritzat">✓</span>

            <span>PERSONAL AUTORITZAT</span>

        </div>

    </div>

    <!-- LATERAL -->

    <div class="blocLateral">

        <div class="blocDada">

            <div class="etiqueta">

                NIVELL

            </div>

            <div class="valorNivell">

                ${agent.nivell}

            </div>

        </div>

        <div class="blocDada">

            <div class="etiqueta">

                ESTAT

            </div>

            <div class="valorEstat">

                ${agent.estat}

            </div>

        </div>

        <div class="blocDada">

            <div class="etiqueta">

                CLASSIFICACIÓ

            </div>

            <div class="valor">

                INTERNA

            </div>

        </div>

            <div class="blocDada">

                <div class="etiqueta">

                    ÍNDEX D'IMAGINACIÓ

                </div>

                <div class="barraExterior">

                    <div
                        class="barraInterior"
                        style="width:${percent}%"
                    ></div>

                </div>

                <div class="percentatge">

                    ${percent}%

                </div>

            </div>

        </div>

    </div>

    <div class="liniaSeparadora"></div>

        <!--==================================================
    MISSIÓ
    ==================================================-->

    <section class="blocMissio">

        <div class="titolBloc">

            MISSIÓ PERSONAL

        </div>

        <div class="textMissio">

            ▸ ${agent.missio}

        </div>

    </section>

    <div class="liniaSeparadora"></div>

    <!--==================================================
    PEU
    ==================================================-->

    <footer class="fitxaFooter">

        <div class="esquerraFooter">

            <div class="codiBarres">

                |||| ||| || |||||| || ||||

            </div>

            <div class="numeroExpedient">

                EXP. ${agent.id} · REGISTRE PO-01

            </div>

            <div class="validacio">

                VALIDAT · SISTEMA CENTRAL

            </div>

        </div>

        <div class="dretaFooter">

    <div class="signatura">

        <img
            src="img/signatures/signatura_negre.png"
            class="firmaDirector"
        >

        <div class="nomDirector">

            Direcció Executiva<br>
            PROJECTE ORIGEN

        </div>

    </div>

</div>

    </footer>

    <div class="liniaSeparadora"></div>
    
    <div class="fitxaAccions">

    <button
        id="descarregarFitxa"
        class="botoFitxa"
    >
        DESCARREGAR FITXA
    </button>

    <button
        id="continuarFitxa"
        class="botoFitxa principal"
    >
        CONTINUAR
    </button>

</div>

</div>

`;

const aliasFitxa = popup.querySelector(".valorGran");

const longitud = agent.alias.length;

if(longitud >= 8){

    aliasFitxa.style.fontSize = "4.3rem";

}

if(longitud >= 10){

    aliasFitxa.style.fontSize = "4rem";

}

if(longitud >= 12){

    aliasFitxa.style.fontSize = "3.6rem";

}

const botoContinuar=document.getElementById("continuarFitxa");

const botoDescarregar=document.getElementById("descarregarFitxa");

botoContinuar.onclick=async()=>{

    overlay.remove();

    await espera(400);

    await iniciarFinal(agent);

};

botoDescarregar.onclick=()=>{

    descarregarFitxa();

};

}