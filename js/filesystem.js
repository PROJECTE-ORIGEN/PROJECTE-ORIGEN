async function mostrarExpedient(agent){

    output.innerHTML="";

    await escriu("DIRECTORI SEGUR ORIGEN");
    await espera(700);

    await escriu("");
    await escriu("Carregant expedient...");
    await barraCarrega();

    await espera(600);

    output.innerHTML="";

    await escriu("══════════════════════════════");
    await escriu("EXPEDIENT CLASSIFICAT");
    await escriu("══════════════════════════════");

    await espera(400);

    await escriu("");

    await escriu("AGENT.............. "+agent.id);
    await escriu("NOM................ "+agent.nom);
    await escriu("ESPECIALITAT....... "+agent.especialitat);

    await espera(800);

    await escriu("");

    await escriu("ESTAT.............. PENDENT");

    await espera(1000);

    await escriu("");

    await escriu("MISSIÓ............. BLOQUEJADA");

    await espera(1200);

    await escriu("");

    await escriu("Desbloquejant transmissió...");

    await barraCarrega();

    await espera(1000);

    iniciarTransmissio(agent);

}