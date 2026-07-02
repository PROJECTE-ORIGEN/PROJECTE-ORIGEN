async function mostrarFitxaAgent(agent){

    output.innerHTML="";

    await escriu("<span class='system'>IDENTITAT VERIFICADA</span>");

    await espera(900);

    await escriu("");

    await escriu("Recuperant expedient...");

    await espera(1200);

    output.innerHTML="";

    output.innerHTML=`

<div id="fitxaAgent">

    <div id="fitxaFoto">

        <img src="${agent.foto}" alt="Agent">

    </div>

    <div class="fitxaBloc">

        <span class="fitxaTitol">AGENT</span>

        <span>${agent.id}</span>

    </div>

    <div class="fitxaBloc">

        <span class="fitxaTitol">NOM</span>

        <span>${agent.nom}</span>

    </div>

    <div class="fitxaBloc">

        <span class="fitxaTitol">ÀLIES</span>

        <span>${agent.alias}</span>

    </div>

    <div class="fitxaBloc">

        <span class="fitxaTitol">ESPECIALITAT</span>

        <span>${agent.especialitat}</span>

    </div>

    <div class="fitxaBloc">

        <span class="fitxaTitol">IMAGINACIÓ</span>

        <span>${agent.imaginacio}%</span>

    </div>

    <div class="fitxaBloc">

        <span class="fitxaTitol"></span>

        <span class="success">

Compatible amb PROJECTE ORIGEN

        </span>

    </div>

</div>

`;

}