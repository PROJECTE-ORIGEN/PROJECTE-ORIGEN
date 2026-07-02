/*==========================================================
RUTES D'ENIGMES
==========================================================*/

const RUTES={

    1:["observacio","memoria","descodificacio"],

    2:["ombres","reconstruccio","raonament"],

    3:["memoria","descodificacio","observacio"],

    4:["reconstruccio","raonament","ombres"],

    5:["descodificacio","observacio","memoria"],

    6:["raonament","ombres","reconstruccio"]

};

/*==========================================================
PROVES MEMÒRIA
==========================================================*/

let provesMemoria=[];

/*==========================================================
CARREGAR MEMÒRIA
==========================================================*/

async function carregarMemoria(){

    if(provesMemoria.length>0)return;

    const resposta=

        await fetch("data/provesMemoria.json");

    provesMemoria=

        await resposta.json();

}

/*==========================================================
INICIAR ENIGMES
==========================================================*/

async function iniciarEnigmes(agent){

    const ruta=RUTES[agent.enigma];

    for(const prova of ruta){

        switch(prova){

    case "observacio":
        await provaObservacio(agent);
        break;

    case "memoria":
        await provaMemoria(agent);
        break;

    case "descodificacio":
        await provaDescodificacio(agent);
        break;

    case "ombres":
        await provaOmbres(agent);
        break;

    case "reconstruccio":
        await provaReconstruccio(agent);
        break;

    case "raonament":
        await provaRaonament(agent);
        break;

}

    }

    await animacioRecuperacioFitxa(agent);

}

/*==========================================================
EXECUTOR DE PROVES
==========================================================*/

async function executarProva(nom,agent){

    switch(nom){

        case "observacio":

            return provaObservacio(agent);

        case "memoria":

            return provaMemoria(agent);

        case "descodificacio":

            return provaDescodificacio(agent);

        case "ombres":

            return provaOmbres(agent);

        case "reconstruccio":

            return provaReconstruccio(agent);

        case "raonament":

            return provaRaonament(agent);

    }

}

/*==========================================================
PROVA OBSERVACIÓ
==========================================================*/

async function provaObservacio(agent){

    const provesObservacio=[

        {
        categoria:"IDENTIFICACIÓ GEOGRÀFICA",
        imatge:"bandera01.jpg",
        pregunta:"La bandera de quin país és?",
        resposta:2,
        opcions:[
            "Argentina",
            "Noruega",
            "Japó",
            "Suïssa"
        ]
    },

    {
        categoria:"RECONEIXEMENT FACIAL",
        imatge:"einstein.jpg",
        pregunta:"Qui és?",
        resposta:1,
        opcions:[
            "Beethoven",
            "Albert Einstein",
            "Dalí",
            "Chaplin"
        ]
    },

    {
        categoria:"IDENTIFICACIÓ D'ARTEFACTES",
        imatge:"astrolabi.jpg",
        pregunta:"Quin objecte és?",
        resposta:3,
        opcions:[
            "Brúixola",
            "Microscopi",
            "Gramòfon",
            "Astrolabi"
        ]
    },

    {
        categoria:"IDENTIFICACIÓ DE MONUMENTS",
        imatge:"torreEiffel.jpg",
        pregunta:"Quin monument és?",
        resposta:0,
        opcions:[
            "Torre Eiffel",
            "Big Ben",
            "Torre de Pisa",
            "Taj Mahal"
        ]
    },

    {
        categoria:"IDENTIFICACIÓ BIOLÒGICA",
        imatge:"camaleo.jpg",
        pregunta:"Quin animal és?",
        resposta:2,
        opcions:[
            "Iguana",
            "Gecko",
            "Camaleó",
            "Dragó de Komodo"
        ]
    },

    {
        categoria:"RECONEIXEMENT FACIAL",
        imatge:"dali.jpg",
        pregunta:"Qui és?",
        resposta:1,
        opcions:[
            "Picasso",
            "Salvador Dalí",
            "Gaudí",
            "Miró"
        ]
    },

    {
        categoria:"IDENTIFICACIÓ D'ARTEFACTES",
        imatge:"gramofon.jpg",
        pregunta:"Quin objecte és?",
        resposta:0,
        opcions:[
            "Gramòfon",
            "Fonògraf",
            "Projector",
            "Telègraf"
        ]
    },

    {
        categoria:"IDENTIFICACIÓ GEOGRÀFICA",
        imatge:"novaYork.jpg",
        pregunta:"Quina ciutat és?",
        resposta:3,
        opcions:[
            "Chicago",
            "Toronto",
            "Boston",
            "Nova York"
        ]
    },

    {
        categoria:"RECONEIXEMENT FACIAL",
        imatge:"marieCurie.jpg",
        pregunta:"Qui és?",
        resposta:2,
        opcions:[
            "Ada Lovelace",
            "Rosalind Franklin",
            "Marie Curie",
            "Jane Goodall"
        ]
    },

    {
        categoria:"IDENTIFICACIÓ BIOLÒGICA",
        imatge:"mussol.jpg",
        pregunta:"Quin animal és?",
        resposta:1,
        opcions:[
            "Falcó",
            "Mussol",
            "Àliga",
            "Corb"
        ]
    }

];

    const prova=provesObservacio[
    Math.floor(Math.random()*provesObservacio.length)
    ];

    await mostrarProvaObservacio(prova);

}

/*==========================================================
MOSTRAR PROVA OBSERVACIÓ
==========================================================*/

async function mostrarProvaObservacio(prova){

    return new Promise(async resolve=>{

        /*==================================================
        PANTALLA D'INSTRUCCIONS
        ==================================================*/

        const overlay=obrirPopup();

        const popup=document.createElement("div");

        popup.className="popup visorEnigma";

        overlay.appendChild(popup);

        popup.innerHTML=`

            <div class="popupTitle">

                IDENTITAT.KEY

            </div>

            <div class="enigmaCap">

                PROVA D'OBSERVACIÓ

            </div>

            <div class="enigmaLinia"></div>

            <div class="textInstruccions">

                Observa atentament la fotografia.

                <br><br>

                La imatge està degradada.

                <br>

                Només es recuperarà informació quan
                el sistema detecti errors.

                <br><br>

                Quan estiguis segur del que veus,
                selecciona la resposta correcta.

            </div>

            <button
                id="botoComencar"
                class="botoResposta">

                INICIAR PROVA

            </button>

        `;

        popup.querySelector("#botoComencar").onclick=async()=>{

            /*==============================================
            TRANSICIÓ
            ==============================================*/

            popup.innerHTML=`

                <div class="popupTitle">

                    IDENTITAT.KEY

                </div>

                <div class="enigmaCap">

                    SINCRONITZANT SISTEMA IDENTITAT.KEY

                </div>

                <div class="enigmaLinia"></div>

            `;

            await espera(1200);

            /*==============================================
            FOTO
            ==============================================*/

            popup.innerHTML=`

                <div class="popupTitle">

                    IDENTITAT.KEY

                </div>

                <div class="enigmaCap">

                    ${prova.categoria}

                </div>

                <div class="enigmaLinia"></div>

                <img
                    id="imatgeObservacio"
                    class="imatgeObservacio"
                    src="img/enigmes/observacio/${prova.imatge}"
                >

                <div class="textObservacio">

                    Observa atentament...

                </div>

            `;

            await espera(5000);

            popup.innerHTML+=`

                <div class="preguntaEnigma">

                    ${prova.pregunta}

                </div>

                <div class="opcionsEnigma"></div>

                <div
                    id="estatObservacio"
                    class="estatObservacio">

                    Cada error permetrà recuperar
                    més informació.

                </div>

            `;

            const imatge=popup.querySelector("#imatgeObservacio");

            const estat=popup.querySelector("#estatObservacio");

            let blur=36;

            imatge.style.filter=`blur(${blur}px)`;

            const opcions=popup.querySelector(".opcionsEnigma");

            prova.opcions.forEach((text,index)=>{

                const boto=document.createElement("button");

                boto.className="botoResposta";

                boto.textContent=text;

                boto.onclick=async()=>{

                    if(index===prova.resposta){

    estat.textContent="✓ TEST D'OBSERVACIÓ SUPERAT";

    estat.classList.add("correcte");

    // Mostrar la imatge completament nítida
    imatge.style.filter="blur(0px)";

    // Esperar un segon perquè l'usuari la pugui veure
    await espera(1000);

    tancarPopup(overlay);

    resolve();

    return;

}

                    boto.classList.add("incorrecte");

                    setTimeout(()=>{

                        boto.classList.remove("incorrecte");

                    },350);

                    estat.textContent="PROCESSANT IMATGE...";

                    await espera(450);

                    estat.textContent="RECUPERANT INFORMACIÓ...";

                    await espera(450);

                    blur=Math.max(0,blur-8);

                    imatge.style.filter=`blur(${blur}px)`;

                    estat.textContent="Torna-ho a provar.";

                };

                opcions.appendChild(boto);

            });

        };

    });

}

/*==========================================================
PROVA MEMÒRIA
==========================================================*/

async function provaMemoria(agent){

    await carregarMemoria();

    const prova=

        provesMemoria[
            Math.floor(
                Math.random()*provesMemoria.length
            )
        ];

    await mostrarInstruccionsMemoria(prova);

}

/*==========================================================
INSTRUCCIONS
==========================================================*/

async function mostrarInstruccionsMemoria(prova){

    return new Promise(resolve=>{

        const overlay=obrirPopup();

        const popup=document.createElement("div");

        popup.className="popup visorEnigma";

        overlay.appendChild(popup);

        popup.innerHTML=`

            <div class="popupTitle">

                IDENTITAT.KEY

            </div>

            <div class="enigmaCap">

                PROVA DE MEMÒRIA

            </div>

            <div class="enigmaLinia"></div>

            <div class="textInstruccions">

                Observa atentament la imatge.

                <br><br>

                Disposes de <b>20 segons</b>
                per memoritzar-la.

                <br><br>

                Després hauràs de respondre
                cinc preguntes.

                <br><br>

                Si t'equivoques,

                tornaràs a veure la imatge

                durant 5 segons.

                <br><br>

                Només tindràs

                una segona oportunitat.

            </div>

            <button
                id="botoComencar"
                class="botoResposta">

                INICIAR PROVA

            </button>

        `;

        document
            .getElementById("botoComencar")
            .onclick=async()=>{

                await mostrarImatgeMemoria(
                    prova,
                    popup,
                    overlay
                );

                resolve();

            };

    });

}

/*==========================================================
MOSTRAR IMATGE MEMÒRIA
==========================================================*/

async function mostrarImatgeMemoria(prova,popup,overlay){

    let segons=20;

    popup.innerHTML=`

        <div class="popupTitle">

            IDENTITAT.KEY

        </div>

        <div class="enigmaCap">

            PROVA DE MEMÒRIA

        </div>

        <div class="enigmaLinia"></div>

        <!--==========================================
        BLOC IMATGE
        ===========================================-->

        <div id="blocImatge">

            <div
                id="comptadorMemoria"
                class="comptadorMemoria">

                ${segons}

            </div>

            <img
                class="imatgeMemoria"
                src="img/enigmes/memoria/${prova.imatge}"
            >

            <div
        id="textMemoria"
        class="textObservacio">

            Memoritza tots els detalls...

        </div>

        </div>

        <!--==========================================
        BLOC PREGUNTES
        ===========================================-->

        <div
            id="blocPreguntes"
            style="display:none;">

            <div
                id="numeroPregunta"
                class="preguntaNumero">

            </div>

            <div
                id="preguntaMemoria"
                class="preguntaMemoria">

            </div>

            <div
                id="opcionsMemoria"
                class="opcionsEnigma">

            </div>

            <div
                id="estatMemoria"
                class="estatObservacio">

            </div>

        </div>

    `;

    const blocImatge=

    popup.querySelector("#blocImatge");

const blocPreguntes=

    popup.querySelector("#blocPreguntes");

const comptador=

    popup.querySelector("#comptadorMemoria");

const numeroPregunta=

    popup.querySelector("#numeroPregunta");

const preguntaMemoria=

    popup.querySelector("#preguntaMemoria");

const opcionsMemoria=

    popup.querySelector("#opcionsMemoria");

const estatMemoria=

    popup.querySelector("#estatMemoria");

/*==============================================
COMPTE ENRERE
==============================================*/

await new Promise(resolve=>{

    const interval=setInterval(()=>{

        segons--;

        comptador.textContent=segons;

        if(segons<=0){

            clearInterval(interval);

            resolve();

        }

    },1000);

});

/*==============================================
CANVI DE PANTALLA
==============================================*/

blocImatge.style.display="none";

blocPreguntes.style.display="block";

/*==============================================
PREGUNTES
==============================================*/

for(let i=0;i<prova.preguntes.length;i++){

    const pregunta=prova.preguntes[i];

    numeroPregunta.textContent=

        `Pregunta ${i+1} de ${prova.preguntes.length}`;

    preguntaMemoria.textContent=

        pregunta.pregunta;

    opcionsMemoria.innerHTML="";

    estatMemoria.textContent="";

    let segonIntent=false;

    let resolta=false;

    await new Promise(resolvePregunta=>{

        pregunta.opcions.forEach((text,index)=>{

            const boto=document.createElement("button");

            boto.className="botoResposta";

            boto.textContent=text;

            boto.onclick=async()=>{

                if(resolta)return;

                /*==================================
                RESPOSTA CORRECTA
                ==================================*/

                if(index===pregunta.resposta){

    resolta=true;

    boto.classList.add("correcte");

    estatMemoria.textContent=

        "✓ Correcte";

    await espera(700);
    
    opcionsMemoria.innerHTML="";

    resolvePregunta();

    return;

}

                /*==================================
                PRIMER ERROR
                ==================================*/

                if(!segonIntent){

                    segonIntent=true;

                    boto.classList.add("incorrecte");

                    estatMemoria.textContent=

                        "✗ Incorrecte";

                    await espera(600);

                    boto.classList.remove("incorrecte");

                                        /*==================================
                    TORNAR A MOSTRAR LA IMATGE
                    ==================================*/

                    textMemoria.textContent=

                    "Revisa la imatge...";

                    blocPreguntes.style.display="none";

                    blocImatge.style.display="block";

                    let segonsExtra=5;

                    comptador.textContent=segonsExtra;

                    await new Promise(resolveTemps=>{

                        const interval=setInterval(()=>{

                            segonsExtra--;

                            comptador.textContent=segonsExtra;

                            if(segonsExtra<=0){

                                clearInterval(interval);

                                resolveTemps();

                            }

                        },1000);

                    });

                    blocImatge.style.display="none";

                    blocPreguntes.style.display="block";

                    estatMemoria.textContent=

                        "Segon i últim intent.";

                    return;

                }

                /*==================================
                SEGON ERROR
                ==================================*/

                resolta=true;

                boto.classList.add("incorrecte");

                estatMemoria.textContent=

                    "Resposta incorrecta.";

                await espera(900);

                opcionsMemoria.innerHTML="";

                resolvePregunta();

            };

            opcionsMemoria.appendChild(boto);

        });

    });

}

/*==============================================
PROVA SUPERADA
==============================================*/

estatMemoria.classList.add("correcte");

estatMemoria.textContent=

    "✓ PROVA DE MEMÒRIA SUPERADA";

await espera(1000);

tancarPopup(overlay);

return;

}


/*==========================================================
PROVA DESCODIFICACIÓ
==========================================================*/

async function provaDescodificacio(agent){

    const paraules=[

        {
            paraula:"SABATILLES",
            pistes:[
                "Ho utilitzes habitualment a casa.",
                "De vegades els hotels te'n ofereixen.",
                "Són un tipus de calçat."
            ]
        },

        {
            paraula:"VACANCES",
            pistes:[
                "És una època de l'any.",
                "Sovint implica viatjar o no treballar.",
                "Les fan els estudiants a l'estiu."
            ]
        },

        {
            paraula:"ORDINADOR",
            pistes:[
                "Fa anys normalment era a casa; ara molta gent el porta a sobre.",
                "Serveix per treballar, estudiar o jugar.",
                "Té pantalla, teclat i ratolí."
            ]
        },

        {
            paraula:"BIBLIOTECA",
            pistes:[
                "Lloc tranquil on hi ha molt silenci.",
                "Hi pots consultar molts llibres.",
                "Molta gent hi va a estudiar."
            ]
        },

        {
            paraula:"SEMÀFOR",
            pistes:[
                "Entre països poden tenir formes diferents.",
                "Regula el trànsit.",
                "Té tres colors: verd, taronja i vermell."
            ]
        },

        {
            paraula:"FORMATGE",
            pistes:[
                "N'hi ha de molts tipus diferents.",
                "Es posa sovint als entrepans o a la pizza.",
                "Prové de la llet."
            ]
        },

        {
            paraula:"TOVALLOLA",
            pistes:[
                "És una peça tèxtil.",
                "Normalment la trobem al lavabo.",
                "Serveix per eixugar-se després de mullar-se."
            ]
        },

        {
            paraula:"FORQUILLA",
            pistes:[
                "Normalment té quatre pues, però n'hi ha de dues o tres.",
                "La trobem a taula o al calaix.",
                "Serveix per punxar el menjar."
            ]
        },

        {
            paraula:"ASCENSOR",
            pistes:[
                "Va amunt i avall.",
                "Hi poden entrar diverses persones.",
                "Evita haver de pujar escales."
            ]
        },

        {
            paraula:"ESCOMBRA",
            pistes:[
                "Alguns l'utilitzen com a mitjà de transport.",
                "Normalment va acompanyada del recollidor.",
                "Serveix per netejar el terra."
            ]
        },

        {
            paraula:"PARAIGUA",
            pistes:[
                "Té un mànec i es pot obrir i tancar.",
                "Només el recordes quan no et vols mullar.",
                "Et protegeix de la pluja."
            ]
        }

    ];

    const prova=

        paraules[
            Math.floor(
                Math.random()*paraules.length
            )
        ];

    await mostrarInstruccionsDescodificacio(prova);

}

/*==========================================================
INSTRUCCIONS DESCODIFICACIÓ
==========================================================*/

async function mostrarInstruccionsDescodificacio(prova){

    return new Promise(resolve=>{

        const overlay=obrirPopup();

        const popup=document.createElement("div");

        popup.className="popup visorEnigma";

        overlay.appendChild(popup);

        popup.innerHTML=`

            <div class="popupTitle">

                IDENTITAT.KEY

            </div>

            <div class="enigmaCap">

                PROVA DE DESCODIFICACIÓ

            </div>

            <div class="enigmaLinia"></div>

            <div class="textInstruccions">

                S'ha interceptat una paraula.

                <br><br>

                Les seves lletres han estat
                desordenades.

                <br><br>

                Hauràs de reconstruir-la.

                <br><br>

                Si ho necessites,
                podràs demanar fins a
                <b>3 pistes</b>.

            </div>

            <button
                id="botoComencar"
                class="botoResposta">

                INICIAR PROVA

            </button>

        `;

        document
            .getElementById("botoComencar")
            .onclick=async()=>{

                await mostrarDescodificacio(

                    prova,
                    popup,
                    overlay

                );

                resolve();

            };

    });

}

/*==========================================================
MOSTRAR DESCODIFICACIÓ
==========================================================*/

async function mostrarDescodificacio(prova,popup,overlay){

    return new Promise(resolve=>{

    const paraulaBarrejada=

        barrejarParaula(prova.paraula);

    let pistesUtilitzades=0;

    popup.innerHTML=`

        <div class="popupTitle">

            IDENTITAT.KEY

        </div>

        <div class="enigmaCap">

            PROVA DE DESCODIFICACIÓ

        </div>

        <div class="enigmaLinia"></div>

        <div
            class="paraulaBarrejada">

            ${paraulaBarrejada}

        </div>

        <input

            id="respostaDescodificacio"

            class="inputResposta"

            type="text"

            autocomplete="off"

            spellcheck="false"

        >

        <div class="opcionsEnigma">

            <button

                id="botoComprovar"

                class="botoResposta">

                COMPROVAR

            </button>

            <button

                id="botoPista"

                class="botoResposta">

                PISTA (3)

            </button>

        </div>

        <div

            id="estatDescodificacio"

            class="estatObservacio">

        </div>

    `;

    const input=

        popup.querySelector("#respostaDescodificacio");

    const estat=

        popup.querySelector("#estatDescodificacio");

    const botoPista=

        popup.querySelector("#botoPista");

    popup
    .querySelector("#botoComprovar")
    .onclick=async()=>{

        const resposta=

            input.value
                .trim()
                .toUpperCase();

        if(resposta===prova.paraula){

            estat.classList.add("correcte");

            estat.textContent=

                "✓ DESCODIFICACIÓ CORRECTA";

            await espera(900);

            tancarPopup(overlay);

            resolve();

            return;

        }

        estat.classList.remove("correcte");

        estat.textContent=

            "✗ Paraula incorrecta.";

        input.select();

    };

    botoPista.onclick=()=>{

        if(pistesUtilitzades>=3)return;

        estat.textContent=

            prova.pistes[pistesUtilitzades];

        pistesUtilitzades++;

        botoPista.textContent=

            `PISTA (${3-pistesUtilitzades})`;

        if(pistesUtilitzades>=3){

            botoPista.disabled=true;

        }

    };

});

}

/*==========================================================
BARREJAR PARAULA
==========================================================*/

function barrejarParaula(text){

    let lletres;

    do{

        lletres=text
            .split("")
            .sort(()=>Math.random()-0.5);

    }while(lletres.join("")===text);

    return lletres.join("");

}

/*==========================================================
PROVA DE RECONEIXEMENT
==========================================================*/

async function provaOmbres(agent){

    const proves=[

        {
            imatge:"sagradafamilia.png",
            correcta:0,
            opcions:[
                "Sagrada Família",
                "Torre Eiffel",
                "Big Ben",
                "Òpera de Sydney"
            ]
        },

        {
            imatge:"estatuallibertat.png",
            correcta:2,
            opcions:[
                "Crist Redemptor",
                "Big Ben",
                "Estàtua de la Llibertat",
                "Òpera de Sydney"
            ]
        },

        {
            imatge:"bigben.png",
            correcta:1,
            opcions:[
                "Sagrada Família",
                "Big Ben",
                "Torre de Pisa",
                "Òpera de Sydney"
            ]
        },

        {
            imatge:"operasydney.png",
            correcta:3,
            opcions:[
                "Palau Reial",
                "Museu Guggenheim",
                "Coliseu",
                "Òpera de Sydney"
            ]
        },

        {
            imatge:"spiderman.png",
            correcta:2,
            opcions:[
                "Batman",
                "Superman",
                "Spider-Man",
                "Iron Man"
            ]
        },

        {
            imatge:"mickeymouse.png",
            correcta:0,
            opcions:[
                "Mickey Mouse",
                "Jerry",
                "Goofy",
                "Donald"
            ]
        },

        {
            imatge:"shrek.png",
            correcta:1,
            opcions:[
                "Hulk",
                "Shrek",
                "Yoda",
                "Gru"
            ]
        },

        {
            imatge:"supermario.png",
            correcta:3,
            opcions:[
                "Luigi",
                "Sonic",
                "Pac-Man",
                "Super Mario"
            ]
        },

        {
            imatge:"michaeljackson.png",
            correcta:0,
            opcions:[
                "Michael Jackson",
                "Elvis Presley",
                "Freddie Mercury",
                "David Bowie"
            ]
        },

        {
            imatge:"elvispresley.png",
            correcta:2,
            opcions:[
                "Frank Sinatra",
                "Johnny Cash",
                "Elvis Presley",
                "Michael Jackson"
            ]
        },

        {
            imatge:"cangur.png",
            correcta:1,
            opcions:[
                "Cérvol",
                "Cangur",
                "Antílop",
                "Cabra"
            ]
        },

        {
            imatge:"cavalletmar.png",
            correcta:3,
            opcions:[
                "Dofí",
                "Pop",
                "Peix globus",
                "Cavallet de mar"
            ]
        },

        {
            imatge:"flamenc.png",
            correcta:2,
            opcions:[
                "Cigonya",
                "Pelicà",
                "Flamenc",
                "Grua"
            ]
        },

        {
            imatge:"cocodril.png",
            correcta:0,
            opcions:[
                "Cocodril",
                "Llangardaix",
                "Iguana",
                "Camaleó"
            ]
        },

        {
            imatge:"saxofon.png",
            correcta:1,
            opcions:[
                "Trompeta",
                "Saxòfon",
                "Clarinet",
                "Trombó"
            ]
        },

        {
            imatge:"bombeta.png",
            correcta:3,
            opcions:[
                "Llanterna",
                "Espelma",
                "Fanal",
                "Bombeta"
            ]
        },

        {
            imatge:"bicicleta.png",
            correcta:2,
            opcions:[
                "Motocicleta",
                "Patinet",
                "Bicicleta",
                "Tricicle"
            ]
        },

        {
            imatge:"tisores.png",
            correcta:0,
            opcions:[
                "Tisores",
                "Alicates",
                "Pinces",
                "Cúter"
            ]
        },

        {
            imatge:"pop.png",
            correcta:1,
            opcions:[
                "Calamar",
                "Pop",
                "Medusa",
                "Estrella de mar"
            ]
        }

    ];

    const prova=

        proves[
            Math.floor(
                Math.random()*proves.length
            )
        ];

    await mostrarInstruccionsOmbres(prova);

}

/*==========================================================
INSTRUCCIONS RECONEIXEMENT
==========================================================*/

async function mostrarInstruccionsOmbres(prova){

    return new Promise(resolve=>{

        const overlay=obrirPopup();

        const popup=document.createElement("div");

        popup.className="popup visorEnigma";

        overlay.appendChild(popup);

        popup.innerHTML=`

            <div class="popupTitle">

                IDENTITAT.KEY

            </div>

            <div class="enigmaCap">

                PROVA DE RECONEIXEMENT

            </div>

            <div class="enigmaLinia"></div>

            <div class="textInstruccions">

                Es mostrarà la silueta

                d'un objecte, animal,

                monument o personatge.

                <br><br>

                Hauràs d'identificar

                correctament què representa.

                <br><br>

                Només una resposta

                és correcta.

            </div>

            <button

                id="botoComencar"

                class="botoResposta">

                INICIAR PROVA

            </button>

        `;

        document

            .getElementById("botoComencar")

            .onclick=async()=>{

                await mostrarOmbra(

                    prova,

                    popup,

                    overlay

                );

                resolve();

            };

    });

}

/*==========================================================
MOSTRAR RECONEIXEMENT
==========================================================*/

async function mostrarOmbra(prova,popup,overlay){

    popup.innerHTML=`

        <div class="popupTitle">

            IDENTITAT.KEY

        </div>

        <div class="enigmaCap">

            PROVA DE RECONEIXEMENT

        </div>

        <div class="enigmaLinia"></div>

        <img

            class="imatgeReconeixement"

            src="img/enigmes/ombres/${prova.imatge}"

        >

        <div class="preguntaMemoria">

            Què representa aquesta silueta?

        </div>

        <div

            id="opcionsReconeixement"

            class="opcionsEnigma">

        </div>

        <div

            id="estatReconeixement"

            class="estatObservacio">

        </div>

    `;

    const opcions=

        popup.querySelector("#opcionsReconeixement");

    const estat=

        popup.querySelector("#estatReconeixement");

    await new Promise(resolve=>{

        prova.opcions.forEach((text,index)=>{

            const boto=document.createElement("button");

            boto.className="botoResposta";

            boto.textContent=text;

            boto.onclick=async()=>{

                if(index===prova.correcta){

                    boto.classList.add("correcte");

                    estat.classList.add("correcte");

                    estat.textContent=

                        "✓ RECONEIXEMENT CORRECTE";

                    await espera(900);

                    tancarPopup(overlay);

                    resolve();

                    return;

                }

                boto.classList.add("incorrecte");

                estat.classList.remove("correcte");

                estat.textContent=

                    "✗ Resposta incorrecta.";

                await espera(600);

                boto.classList.remove("incorrecte");

                estat.textContent="";

            };

            opcions.appendChild(boto);

        });

    });

}

async function provaReconstruccio(agent){

    return provaDescodificacio(agent);

}

/*==========================================================
PROVA DE RAONAMENT
==========================================================*/

async function provaRaonament(agent){

    const enigmes=[

    {

        pregunta:`A

C

F

J

?`,

        opcions:[

            "L",

            "M",

            "O",

            "P"

        ],

        correcta:2,

        explicacio:`

Els salts entre les lletres són:

+2

+3

+4

+5

Per això la resposta correcta és:

O

`

    },

    {

        pregunta:`Z

X

U

Q

?`,

        opcions:[

            "N",

            "M",

            "L",

            "K"

        ],

        correcta:2,

        explicacio:`

Els salts són:

-2

-3

-4

-5

Per això la resposta és:

L

`

    },

    {

        pregunta:`2    A

4    C

8    F

16   J

?`,

        opcions:[

            "32 N",

            "24 M",

            "32 O",

            "18 N"

        ],

        correcta:2,

        explicacio:`

Hi ha dos patrons.

Els nombres:

2

4

8

16

32

Les lletres:

+2

+3

+4

+5

Per això la resposta és:

32 O

`

    },

    {

        pregunta:`1

11

21

1211

?`,

        opcions:[

            "2111",

            "1221",

            "111221",

            "12121"

        ],

        correcta:2,

        explicacio:`

Cada línia descriu l'anterior.

1

↓

11

↓

21

↓

1211

↓

111221

`

    },

    {

        pregunta:`▲

■

▲▲

■■

▲▲▲

?`,

        opcions:[

            "▲▲▲▲",

            "■■■",

            "▲■■",

            "■▲▲"

        ],

        correcta:1,

        explicacio:`

Alternen triangles i quadrats.

Cada vegada augmenta

el nombre de símbols.

▲

■

▲▲

■■

▲▲▲

■■■

`

    }

    ];

    await mostrarInstruccionsRaonament(enigmes);

}

/*==========================================================
INSTRUCCIONS RAONAMENT
==========================================================*/

async function mostrarInstruccionsRaonament(enigmes){

    return new Promise(resolve=>{

        const overlay=obrirPopup();

        const popup=document.createElement("div");

        popup.className="popup visorEnigma";

        overlay.appendChild(popup);

        popup.innerHTML=`

            <div class="popupTitle">

                IDENTITAT.KEY

            </div>

            <div class="enigmaCap">

                PROVA DE RAONAMENT

            </div>

            <div class="enigmaLinia"></div>

            <div class="textInstruccions">

                Analitza el patró.

                <br><br>

                Selecciona la resposta

                que consideris correcta.

                <br><br>

                Si no trobes la solució,

                pots passar al següent repte.

                <br><br>

                Només cal resoldre

                correctament un enigma.

            </div>

            <button

                id="botoComencar"

                class="botoResposta">

                INICIAR PROVA

            </button>

        `;

        document

            .getElementById("botoComencar")

            .onclick=async()=>{

                await mostrarEnigmaRaonament(

                    enigmes,

                    popup,

                    overlay

                );

                resolve();

            };

    });

}

/*==========================================================
MOSTRAR ENIGMA
==========================================================*/

async function mostrarEnigmaRaonament(enigmes,popup,overlay){

    const pendents=[...enigmes];

    while(true){

        /*==============================================
NO QUEDEN MÉS REPTES
==============================================*/

if(pendents.length===0){

    popup.innerHTML=`

        <div class="popupTitle">

            IDENTITAT.KEY

        </div>

        <div class="enigmaCap">

            ANÀLISI FINAL

        </div>

        <div class="enigmaLinia"></div>

        <div class="textInstruccions">

            No s'ha pogut obtenir una
            resposta concloent.

            <br><br>

            S'han consumit tots els
            reptes disponibles.

            <br><br>

            El protocol continuarà
            amb la següent fase
            d'avaluació.

        </div>

        <button

            id="continuarRaonament"

            class="botoResposta">

            CONTINUAR

        </button>

    `;

    await new Promise(resolve=>{

        document

        .getElementById("continuarRaonament")

        .onclick=resolve;

    });

    tancarPopup(overlay);

    return;

}

        const index=

            Math.floor(
                Math.random()*pendents.length
            );

        const enigma=pendents.splice(index,1)[0];

        const resultat=

            await executarEnigmaRaonament(

                enigma,
                popup

            );

        /*==============================================
        ENCERTAT
        ==============================================*/

        if(resultat){

            popup.innerHTML=`

                <div class="popupTitle">

                    IDENTITAT.KEY

                </div>

                <div class="enigmaCap">

                    ANÀLISI DEL PATRÓ

                </div>

                <div class="enigmaLinia"></div>

                <div class="textInstruccions">

                    ✓ Correcte

                    <br><br>

                    ${enigma.explicacio}

                </div>

                <button
                    id="continuarRaonament"
                    class="botoResposta">

                    CONTINUAR

                </button>

            `;

            await new Promise(resolve=>{

                document

                .getElementById("continuarRaonament")

                .onclick=resolve;

            });

            tancarPopup(overlay);

            return;

        }

        /*==============================================
        PASSAR
        ==============================================*/

        popup.innerHTML=`

            <div class="popupTitle">

                IDENTITAT.KEY

            </div>

            <div class="enigmaCap">

                ANÀLISI DEL PATRÓ

            </div>

            <div class="enigmaLinia"></div>

            <div class="textInstruccions">

                ${enigma.explicacio}

            </div>

            <button
                id="seguentRepte"
                class="botoResposta">

                SEGÜENT REPTE

            </button>

        `;

        await new Promise(resolve=>{

            document

            .getElementById("seguentRepte")

            .onclick=resolve;

        });

    }

}

/*==========================================================
EXECUTAR ENIGMA
==========================================================*/

async function executarEnigmaRaonament(enigma,popup){

    return new Promise(resolve=>{

        popup.innerHTML=`

            <div class="popupTitle">

                IDENTITAT.KEY

            </div>

            <div class="enigmaCap">

                PROVA DE RAONAMENT

            </div>

            <div class="enigmaLinia"></div>

            <div
                class="preguntaEnigma"
                style="white-space:pre-line;">

                ${enigma.pregunta}

            </div>

            <div
                id="opcionsRaonament"
                class="opcionsEnigma">

            </div>

            <div
                id="estatRaonament"
                class="estatObservacio">

            </div>

            <button

                id="passarRaonament"

                class="botoResposta">

                SEGÜENT REPTE

            </button>

        `;

        const opcions=

            popup.querySelector("#opcionsRaonament");

        const estat=

            popup.querySelector("#estatRaonament");

        enigma.opcions.forEach((text,index)=>{

            const boto=document.createElement("button");

            boto.className="botoResposta";

            boto.textContent=text;

            boto.onclick=async()=>{

                if(index===enigma.correcta){

                    boto.classList.add("correcte");

                    estat.classList.add("correcte");

                    estat.textContent=

                        "✓ Correcte";

                    await espera(700);

                    resolve(true);

                    return;

                }

                boto.classList.add("incorrecte");

                estat.textContent=

                    "✗ Incorrecte";

                await espera(600);

                boto.classList.remove("incorrecte");

                estat.textContent="";

            };

            opcions.appendChild(boto);

        });

        document

            .getElementById("passarRaonament")

            .onclick=()=>{

                resolve(false);

            };

    });

}