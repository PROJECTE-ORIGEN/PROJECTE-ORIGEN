const terminal = document.getElementById("terminal");

function glitch(){

    terminal.classList.add("glitch");

    setTimeout(()=>{

        terminal.classList.remove("glitch");

    },100);

}

setInterval(()=>{

    if(Math.random()<0.35){

        glitch();

    }

},2500);

async function glitchCurt(){

    document.body.classList.add("glitchCurt");

    await espera(220);

    document.body.classList.remove("glitchCurt");

}

/*==========================================================
GLITCH FORT
==========================================================*/

async function glitchFort(){

    for(let i=0;i<10;i++){

    await glitchCurt();

    await espera(20);

}

}