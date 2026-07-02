let estatDocuments={

    registre:false,

    missio:false,

    foto:false,

    identitat:false

};

/*==========================================================
REBRE PAQUET DE DOCUMENTS
==========================================================*/

async function rebreDocuments(agent){

    const overlay=obrirPopup();

    const popup=document.createElement("div");

    popup.className="popup documentPopup";

    overlay.appendChild(popup);

    popup.innerHTML=`

        <div class="popupTitle">

            TRANSMISSIÓ ENTRANT

        </div>

        <div class="popupText">

            Paquet de dades detectat.

        </div>

        <button id="obrirDocs" class="botoPopup">

            OBRIR

        </button>

    `;

    await new Promise(resolve=>{

        document.getElementById("obrirDocs").onclick=resolve;

    });

    await carregarPaquet(popup);

    await mostrarDirectori(popup);

    await new Promise(resolve=>{

        document.getElementById("continuarDirectori").onclick=resolve;

    });

    await mostrarExploradorDocuments(agent,popup,overlay);

}

/*==========================================================
CARREGANT PAQUET
==========================================================*/

async function carregarPaquet(popup){

    popup.innerHTML=`

        <div class="popupTitle">

            RECUPERANT DADES

        </div>

        <div id="barraDocs"></div>

    `;

    const barra=popup.querySelector("#barraDocs");

    for(let i=0;i<=100;i++){

        const blocs=Math.floor(i/5);

        barra.innerHTML=

            "["+

            "■".repeat(blocs)+

            "□".repeat(20-blocs)+

            "] "+i+"%";

        await espera(25);

    }

    await espera(400);

    popup.innerHTML=`

        <div class="popupTitle">

            ANALITZANT INTEGRITAT

        </div>

        <div id="llistaDocs"></div>

    `;

    const llista=popup.querySelector("#llistaDocs");

    const fitxers=[

        ["⚠","REGISTRE_0047.LOG","warning"],

        ["✕","NARAX_ZYN.JPG","error"],

        ["✓","MISSIO.ENC","success"],

        ["✓","IDENTITAT.KEY","success"]

    ];

    for(const f of fitxers){

        const div=document.createElement("div");

        div.className=f[2];

        div.innerHTML=`${f[0]} ${f[1]}`;

        llista.appendChild(div);

        await espera(650);

    }

}

/*==========================================================
DIRECTORI RECUPERAT
==========================================================*/

async function mostrarDirectori(popup){

    popup.innerHTML=`

        <div class="popupTitle">

            DIRECTORI RECUPERAT

        </div>

        <br>

        <div class="success">

            ✓ 4 ARXIUS RECUPERATS

        </div>

        <br>

        <div class="warning">

            Integritat global del paquet: 61%

        </div>

        <br><br>

        <div class="popupText">

            Els arxius estan preparats per ser examinats.

        </div>

        <br>

        <button id="continuarDirectori" class="botoPopup">

            OBRIR DIRECTORI

        </button>

    `;

}

/*==========================================================
OBRIR EXPLORADOR
==========================================================*/

async function obrirExplorador(agent){

    const overlay=obrirPopup();

    const popup=document.createElement("div");

    popup.className="popup";

    overlay.appendChild(popup);

    await mostrarExploradorDocuments(agent,popup,overlay);

}

/*==========================================================
EXPLORADOR
==========================================================*/

async function mostrarExploradorDocuments(agent,popup,overlay){

    popup.innerHTML=`

        <div class="popupTitle">

            DIRECTORI DE RECUPERACIÓ

        </div>

        <div id="llistaDocuments"></div>

    `;

    const llista=popup.querySelector("#llistaDocuments");

    // REGISTRE

    afegirDocument(

        llista,

        estatDocuments.registre ? "✓" : "📄",

        "REGISTRE_0047.LOG",

        !estatDocuments.registre,

        async()=>{

            estatDocuments.registre=true;

            tancarPopup(overlay);

            await documentRegistre0047(agent);

        }

    );

    // FOTO

    afegirDocument(

        llista,

        estatDocuments.registre ? "📷" : "🔒",

        "NARAX_ZYN.JPG",

        estatDocuments.registre,

        async()=>{

            tancarPopup(overlay);

            await documentFoto(agent);

        }

    );

    // MISSIÓ

    afegirDocument(

        llista,

        estatDocuments.foto ? "📄" : "🔒",

        "MISSIO.ENC",

        estatDocuments.foto,

        async()=>{

            estatDocuments.missio=true;

            tancarPopup(overlay);

            await documentMissio(agent);

        }

    );

    // IDENTITAT

    afegirDocument(

        llista,

        estatDocuments.missio ? "🔐" : "🔒",

        "IDENTITAT.KEY",

        estatDocuments.missio,

        async()=>{

            estatDocuments.identitat=true;

            tancarPopup(overlay);

            await iniciarEnigmes(agent);

        }

    );

}

/*==========================================================
FILA DOCUMENT
==========================================================*/

function afegirDocument(llista,icona,nom,actiu,onclick){

    const fila=document.createElement("div");

    fila.className="documentFila";

    fila.innerHTML=`

        <span>${icona}</span>

        <span>${nom}</span>

    `;

    if(actiu){

        fila.classList.add("documentActiu");

        fila.onclick=onclick;

    }

    llista.appendChild(fila);

}

/*==========================================================
VISOR DE DOCUMENTS
==========================================================*/

async function obrirDocumentPopup(
    titol,
    linies,
    boto="TANCAR DOCUMENT",
    tipus="normal"
){

    return new Promise(async(resolve)=>{

        const overlay=obrirPopup();

        const popup=document.createElement("div");

        popup.className =

            tipus==="error"

                ? "popup popupError"

                : "popup";

        overlay.appendChild(popup);

        popup.innerHTML=`

            <div class="popupTitle">${titol}</div>

            <div id="contingutDocument"></div>

            <div id="accioDocument"></div>

        `;

        const contingut=popup.querySelector("#contingutDocument");

        for(const linia of linies){

            const div=document.createElement("div");

            div.innerHTML=linia;

            contingut.appendChild(div);

            await espera(600);

        }

        const botoFinal=document.createElement("button");

        botoFinal.className="botoPopup";

        botoFinal.textContent=boto;

        popup.querySelector("#accioDocument").appendChild(botoFinal);

        botoFinal.onclick=()=>{

            tancarPopup(overlay);

            resolve();

        };

    });

}

/*==========================================================
REGISTRE 0047
==========================================================*/

async function documentRegistre0047(agent){

    await obrirDocumentPopup(

        "REGISTRE 0047",

        [

            "Dia 186.",

            "",

            "...",

            "",
            
            "Si algú llegeix aquest registre",

            "ha de saber que necessitem la seva ajuda.",

            "És urgent!",

            "",

            "...",

            "",

            "Per més que ho intentem,",

            "està sent impossible.",

            "",

            "Cada vegada costa més.",

            "",

            "Cada vegada ens ho posen més difícil.",

            "",

            "Sembla que, a poc a poc,",

            "tot s'oblida.",

            "",

            "...",

            "",

            "Si aquest registre arriba a algú",

            "",

            "vol dir que encara hi ha esperança.",

            "",

            "Que encara no està tot perdut.",

            "",

            "",

            "<div class='dataRegistre'>Laboratori Central<br>7 de març de 2312</div>"

        ]

    );

    await fitxerOK("REGISTRE_0047.LOG");

    await parlar("zyn",[

        `${nomAgent()}, has pogut llegir-lo?`

    ]);

    await parlar("narax",[

        "És un dels últims registres que vam poder conservar."

    ]);

    await parlar("zyn",[

        "La resta es van perdre durant les primeres interferències."

    ]);

    await parlar("narax",[

        "Sí, una llàstima...",

        "Per sort, vam poder recuperar una fotografia amb informació important!"

    ]);

    await parlar("zyn",[

        "Te l'hem enviada.",
        
        "Si t'ha arribat bé, potser hi pots descobrir alguna cosa interessant."

    ]);

    await parlar("narax",[

        `${nomAgent()}, prova d'obrir-la.`

    ]);

    await obrirExplorador(agent);

}

async function documentFoto(agent){

    estatDocuments.foto=true;

    const overlay=obrirPopup();

    const popup=document.createElement("div");

    popup.className="popup popupError visorFoto";

    overlay.appendChild(popup);

    popup.innerHTML=`

        <div class="popupTitle">
            NARAX_ZYN.JPG
        </div>

        <div class="fotoBloc">

            <div class="errorBarra">
                ████████████████████
            </div>

            <div class="errorTitol">
                ARXIU CORRUPTE
            </div>

            <div class="integritat">
                Integritat: <b>0%</b>
            </div>

        </div>

        <div id="fotoText" class="fotoText"></div>

        <button class="botoPopup" id="tancarFoto">

            TORNAR

        </button>

    `;

    await espera(300);

    document.getElementById("fotoText").innerHTML=`

        <div class="errorLinia"></div>

        <p>Impossible recuperar la imatge original.</p>

        <p>No s'han detectat fragments útils.</p>

        <div class="errorLinia"></div>

    `;

    await new Promise(resolve=>{

    document.getElementById("tancarFoto").onclick=()=>{

        tancarPopup(overlay);

        resolve();

    };

    });

    await fitxerError("NARAX_ZYN.JPG");

    await parlar("zyn",[
        "Ja m'ho temia..."
    ]);

    await parlar("narax",[
        "Deuen haver-nos interceptat i destruït la fotografia."
    ]);

    await parlar("zyn",[
        "És igual.",
        "Encara queda una última possibilitat."
    ]);

    await parlar("narax",[
        "MISSIO.ENC."
    ]);

    await parlar("zyn",[
        "Sí.",
        "Intentem-ho!"
    ]);

    await obrirExplorador(agent);

}

/*==========================================================
MISSIO.ENC
==========================================================*/

async function documentMissio(agent){

    estatDocuments.missio=true;

    const salutacio =

    (agent.genere || "").toLowerCase()==="noia"

        ? "Benvinguda"

        : "Benvingut";

    const overlay=obrirPopup();

    const popup=document.createElement("div");

    popup.className="popup visorMissio";

    overlay.appendChild(popup);

    popup.innerHTML=`

        <div class="popupTitle">

            MISSIO.ENC

        </div>

        <div class="missioBloc">

            <div class="missioTitol">
                CLASSIFICACIÓ OMEGA
            </div>

            <div class="integritat">
                Integritat: <b>100%</b>
            </div>

            <div class="missioLinia"></div>

        </div>

        <div id="missioText"></div>

        <div style="height:28px;"></div>

        <button class="botoPopup" id="tancarMissio">

            TANCAR DOCUMENT

        </button>

    `;

    const text=popup.querySelector("#missioText");

    const linies=[

        `${salutacio}, Agent ${agent.id}.`,

        "",

        "No sabem quant temps",

        "podrem mantenir aquest canal obert.",

        "",

        "No sabem si encara hi serem",

        "quan hagis llegit aquest missatge.",

        "",

        "...",

        "",

        "Per això necessitem",

        "confirmar una última cosa...",

       "",
       "",
       "<span class='missioClau'>LA TEVA IDENTITAT</span>",
       "",
       "",

        "Només així podrem saber",

        "si ets qui estem buscant..."

    ];

    for(const linia of linies){

        const div=document.createElement("div");

        div.innerHTML=linia;

        text.appendChild(div);

        await espera(520);

    }

    await new Promise(resolve=>{

        document.getElementById("tancarMissio").onclick=()=>{

            tancarPopup(overlay);

            resolve();

        };

    });

    await fitxerBloquejat("MISSIO.ENC");

    await parlar("zyn",[

        "Sembla que encara ens funciona la connexió..."

    ]);

    await parlar("narax",[

        "Perfecte, però no durarà massa.",

        "He detectat una activitat sospitosa..."

    ]);

    await parlar("zyn",[

        "Creus que hi ha algú més escoltant-nos?"
    
    ]);

    await parlar("narax",[

        "És molt probable...",

        "No diguis res que pugui comprometre la missió, Zyn."

    ]);

    await parlar("zyn",[

        "D4c0rd...",
        "4g3n7, qu3d4 un @l7r3 4rx1u p3r 0br1r."

    ]);

    await espera(1600);

     await parlar("narax",[

        "Vols dir que cal xifrar els missatges?",

    ]);

    await parlar("zyn",[

        "S1! P3r s1 3ns v1g1l3n!",
        "Qu3 1nt3nt1 0br1r 31 d0cum3nt,",
        "t0t 1 qu3 n0 cr3c qu3 pugu1 4cc3d1r-h1."

    ]);

    await espera(2800);

    await parlar("narax",[

        `${nomAgent()}, només hi ha una manera de saber-ho.`,
        "Inicia el protocol d'identificació i comprovem si el sistema et reconeix.",
        "És hora de saber si ets qui estem buscant..."

    ]);

    await parlar("zyn",[

        "Creuem els dits..."

    ]);

    await espera(500);

    await obrirExplorador(agent);

}
