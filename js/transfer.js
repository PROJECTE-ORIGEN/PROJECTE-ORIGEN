async function transferirFitxers(agent){

    output.innerHTML="";

    await escriu("<span class='system'>INICIANT TRANSFERÈNCIA QUÀNTICA...</span>");

    await espera(900);

    await escriu("");

    const fitxers=[

        {nom:"registre_0047.log",estat:"ok"},
        {nom:"protocol_Δ.enc",estat:"ok"},
        {nom:"omega.sys",estat:"error"},
        {nom:"missio.enc",estat:"ok"}

    ];

    for(let i=0;i<fitxers.length;i++){

        let percent=Math.round(((i+1)/fitxers.length)*100);

        await escriu(`<span class="system">${percent}%</span>`);

        await espera(500);

        if(fitxers[i].estat=="ok"){

            await escriu(`<span class="success">✔ ${fitxers[i].nom}</span>`);

        }else{

            terminal.classList.add("glitch");

            await espera(180);

            terminal.classList.remove("glitch");

            await escriu(`<span class="error">✖ ${fitxers[i].nom}</span>`);

            await escriu("<span class='warning'>INTERFERÈNCIA DETECTADA</span>");

        }

        await espera(700);

    }

    await escriu("");

    await escriu("<span class='success'>TRANSFERÈNCIA FINALITZADA</span>");

    await espera(1500);

    await mostrarFitxers(agent);

}