/*==========================================================
BASE DE DADES D'AGENTS
==========================================================*/

let AGENTS=[];

async function carregarAgents(){

    const resposta=await fetch("data/agents.json");

    AGENTS=await resposta.json();

}

function obtenirAgent(credencial){

    return AGENTS.find(

        agent=>agent.codiCredencial===credencial

    );

}