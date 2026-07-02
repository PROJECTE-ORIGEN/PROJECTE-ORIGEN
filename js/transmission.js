async function iniciarTransmissio(agent){

    output.innerHTML = "";

    await animarProces("Sintonitzant canal");

    await sistema("[CANAL 7 · ESTABLE]");

    await espera(700);

    await parlar("narax",[
        "Zyn...",
        "Em reps?"
    ]);

    await parlar("zyn",[
        "Ara sí.",
        "La connexió és molt inestable."
    ]);

    await parlar("narax",[
        "No importa.",
        "Hem trobat la temporalitat."
    ]);

    await parlar("zyn",[
        "Per fi...",
        "Confirmada?"
    ]);

    await parlar("narax",[
        "Sí!",
        "2026."
    ]);

    await parlar("zyn",[
        "Encara hi són?"
    ]);

    await parlar("narax",[
        "Sí.",
        "I sembla que es reuniran del 6 al 12 de juliol."
    ]);

    await parlar("zyn",[
        "Llavors...",
        "encara hi ha esperança."
    ]);

    await parlar("narax",[
        "Envia els documents."
    ]);

    await parlar("zyn",[
        "Narax, saps que ens vigilen...",
        "No aconseguirem que arribin tots..."
    ]);

    await parlar("narax",[
        "Amb un n'hi haurà prou.",
        "Provem-ho!"
    ]);

    await parlar("zyn",[
    "Espera...",
    "Crec que ens està escoltant algú."
    ]);

    await espera(800);

    await parlar("narax",[
    `${nomAgent()}...`,
    "Ens reps?"
    ]);

    await esperarRespostaAgent();

    await espera(500);

    await rebreDocuments(agent);

}