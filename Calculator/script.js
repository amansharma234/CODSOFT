var result = document.getElementById("result");

function display(number){
    result.value += number;
}

function calc(){
    var num = result.value;
    result.value = eval(result.value);
}

function allClear(){
    result.value = "";
}


function del(){
    result.value = result.value.slice(0,-1);
}

