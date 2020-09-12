function getvalue(num) {
    var a = document.forms[0]["textview"];
    a.value += num;
}
function getopcode(opt) {
    var a = document.forms[0]["textview"];
    if (a.value != "") {
        if (opt == "s") {
            a.value += "**2";
        }
        else {
            a.value += opt;
        }
    }
    else if (opt == "(" || opt == ")") {
        a.value += opt;
    }
    else if (opt == '.') {
        a.value += "0.";
    }
}
function zero() {
    var a = document.forms[0]["textview"];
    if (a.value != "") {
        a.value += "0";
    }
}
function equal() {
    var a = document.forms[0]["result"];
    var temp = eval(document.forms[0]["textview"].value);
    if (temp == "Infinity") {
        a.value = "Hа ноль нельзя делить";
    }
    else if (document.forms[0]["textview"].value == '') {
        a.value = "Введите выражение";
    }
    else {
        a.value = temp;
        var table = document.getElementsByTagName("table")[0];
        if (table.rows.length >= 3) {
            table.deleteRow(0);
        }
        var trow = table.insertRow(table.rows.length);
        var cel0 = trow.insertCell(0);
        var cel1 = trow.insertCell(1);
        var cel2 = trow.insertCell(2);
        cel0.innerHTML = document.forms[0]["textview"].value;
        cel1.innerHTML = "=";
        cel2.innerHTML = temp;
        clean();
    }
}
function clean() {
    var a = document.forms[0]["textview"];
    a.value = '';
    var b = document.forms[0]["result"];
    b.value = '';
}
function back() {
    var a = document.forms[0]["textview"];
    a.value = document.forms[0]["textview"].value.substring(0, document.forms[0]["textview"].value.length - 1);
    var b = document.forms[0]["result"];
    b.value = '';
}
