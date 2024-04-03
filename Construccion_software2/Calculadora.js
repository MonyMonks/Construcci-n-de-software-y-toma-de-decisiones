let fulloperation='';
function number(value){
    console.log(value);
    fulloperation=value;
    rendernumber();
}

function rendernumber(value){
    console.log(value);
}

function operator(op){
    console.log(op);
}

function rendernumber(){
    document.getElementById("screen").innerHTML=fulloperation;
}