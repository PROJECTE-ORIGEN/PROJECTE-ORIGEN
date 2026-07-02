const signal=document.getElementById("signal");

const timeStatus=document.getElementById("timeStatus");

async function canviarSignal(text,color=""){

    signal.innerHTML=text;

    signal.className="";

    if(color){

        signal.classList.add(color);

    }

}

async function canviarTemps(text){

    timeStatus.innerHTML=text;

}