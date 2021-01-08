var screen = document.getElementById("screen");
 
function show(s) {
    var sv = screen.innerHTML;
    if (sv == '0') {
    screen.innerHTML = s;
    } else {
        screen.innerHTML = screen.innerHTML + s;
    }     
}

function result() {
    var sv = screen.innerHTML;
    if (sv[sv.length-1] == "+" || sv[sv.length] == "-") {
      sv += 0;  
    }
    if (sv[sv.length-1] == "*" || sv[sv.length] == "/") {
      sv += 1;  
    }
    var result = eval(sv);
    screen.innerHTML = result
}