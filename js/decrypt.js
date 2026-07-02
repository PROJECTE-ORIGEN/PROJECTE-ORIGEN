async function desxifrarArxiu(){

    output.innerHTML="";

    await escriu("<span class='system'>RECUPERANT FRAGMENTS...</span>");

    await espera(1000);

    await escriu("");

    await escriu("Integritat: 12%");

    await espera(800);

    await escriu("");

    const text=generarRepte(agentActual.alias);

    respostaCorrecta=text.resposta;

    await escriu(text.codi);

    await espera(1000);

    await escriu("");

    await escriu("Introdueix la descodificació:");

    modeDesxifrat=true;

    inputArea.classList.remove("hidden");

    codeInput.focus();

}