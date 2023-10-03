function clearscr(){
    document.getElementById("output-box").value = "";
}

function display(val){
    document.getElementById("output-box").value += val;
}

function calc(){
    var p = document.getElementById("output-box").value;
    var q = eval(p);
    document.getElementById("output-box").value = q;
}