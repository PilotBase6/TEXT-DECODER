const coderText=document.querySelector("#w-i1");
const showText=document.querySelector("#w-i2");



function runCoder(){
    const btnCoder = coderMode(coderText.value);
    showText.value=btnCoder;
    coderText.value="";
    showText.style.backgroundImage="none";


}

function runDecoder(){
    const btnCoder = decoderMode(coderText.value);
    showText.value=btnCoder;
    coderText.value="";
    showText.style.backgroundImage="none";


}


function coderMode(finalText){
    let msjInfo=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    finalText=finalText.toLowerCase();
    for(let i=0;i<msjInfo.length;i++){
        if (finalText.includes(msjInfo[i][0])){
            finalText = finalText.replaceAll(msjInfo[i][0], msjInfo[i][1]);
        }
        
    };
    return finalText;
    
 

}

function decoderMode(finalText){
    let msjInfo=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    finalText=finalText.toLowerCase();
    for(let i=0;i<msjInfo.length;i++){
        if (finalText.includes(msjInfo[i][0])){
            finalText = finalText.replaceAll(msjInfo[i][1],msjInfo[i][0]);
        }
        
    };
    return finalText;
    
 

}

function copyBtn(){
    let cpText=showText.value;
    navigator.clipboard.writeText(cpText);
    
}

coderText.addEventListener("click",()=>{
    coderText.style.backgroundImage="none";
    
});





