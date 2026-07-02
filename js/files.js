async function mostrarFitxers(agent){

    output.innerHTML="";

    await escriu("<span class='system'>TRANSFERÈNCIA SEGURA INICIADA</span>");

    await espera(800);

    await barraTransferencia();

    output.innerHTML="";

    await escriu("<span class='system'>DIRECTORI REMOT RECUPERAT</span>");

    await espera(700);

    await escriu("");

    const fitxers=[

        {
            nom:"📄 registre_0047.log",
            tipus:"registre"
        },

        {
            nom:"🔒 protocol_Δ.enc",
            tipus:"protocol"
        },

        {
            nom:"🔒 missio.enc",
            tipus:"missio"
        },

        {
            nom:"🔒 omega.sys",
            tipus:"omega"
        }

    ];

    for(const fitxer of fitxers){

        await espera(350);

        crearFitxer(fitxer.nom,fitxer.tipus);

    }

}

async function barraTransferencia(){

    const linea = document.createElement("div");
    output.appendChild(linea);

    for(let i=0;i<=100;i++){

        const blocs=Math.floor(i/10);

        linea.innerHTML=
        "["+
        "■".repeat(blocs)+
        "□".repeat(10-blocs)+
        "] "+i+"%";

        output.scrollTop=output.scrollHeight;

        await espera(22);

        // ---------- INTERFERÈNCIA ----------
        if(i===67){

            espai();

            await interferencia();

            espai();

            await parlar("zyn","ZYN_33");
            await parlar("zyn","Narax...");

            espai();

            await parlar("zyn","No estem sols.");

            espai();

            await parlar("narax","NARAX-83");
            await parlar("narax","Ja ens han localitzat.");

            espai();

            await parlar("zyn","ZYN_33");
            await parlar("zyn","La transmissió no aguantarà gaire més.");

            espai();

            await parlar("narax","NARAX-83");
            await parlar("narax","Si aquest missatge arriba...");

            await parlar("narax","Protegiu els documents.");

            espai();

            await parlar("zyn","ZYN_33");
            await parlar("zyn","Ens veurem aviat.");

            espai();

            await parlar("narax","NARAX-83");
            await parlar("narax","Això només és el principi...");

            espai();

            await parlar("error","CONNEXIÓ PERDUDA");

            espai();

            await espera(1800);

            await parlar("system","Recuperant transferència...");

            espai();

        }

    }

    espai();

    await animarProces("Verificant integritat");

    await animarProces("Descodificant blocs");

    await parlar("system","TRANSFERÈNCIA COMPLETADA");

    await espera(800);

}

function crearFitxer(nom,tipus){

    const div=document.createElement("div");

    div.className="fitxer";

    div.innerHTML=nom;

    div.style.opacity="0";

    div.style.transform="translateX(-20px)";

    output.appendChild(div);

    requestAnimationFrame(()=>{

        div.style.transition="all .35s ease";

        div.style.opacity="1";

        div.style.transform="translateX(0)";

    });

    switch(tipus){

        case "registre":

            div.onclick=()=>{

                obrirRegistre();

            };

        break;

        case "missio":

            div.classList.add("locked");

            div.onclick=()=>{

                desxifrarArxiu();

            };

        break;

        case "protocol":

            div.classList.add("locked");

            div.onclick=()=>{

                arxiuBloquejat();

            };

        break;

        case "omega":

            div.classList.add("locked");

            div.onclick=()=>{

                arxiuBloquejat();

            };

        break;

    }

}

function obrirRegistre(){

    obrirModal(`

<h2>📄 REGISTRE 0047</h2>

<br>

<p><b>Origen:</b> Temporalitat 2148</p>

<br>

<p>La transmissió s'ha recuperat només parcialment.</p>

<br>

<p>Hem detectat un patró.</p>

<p>No estan destruint les persones.</p>

<p>Estan destruint allò que les fa imaginar.</p>

<br>

<p>Les obres desapareixen.</p>

<p>Els llibres es buiden.</p>

<p>Les cançons deixen de sonar.</p>

<p>Els records s'esvaeixen.</p>

<br>

<p>Si aquest registre ha arribat fins aquí...</p>

<p>encara hi ha esperança.</p>

`);

}

function arxiuBloquejat(){

    obrirModal(`

<h2>🔒 ARXIU ENCRIPTAT</h2>

<br>

<p>Aquest arxiu encara no pot ser desxifrat.</p>

<br>

<p>Esperant una finestra temporal segura.</p>

`);

}