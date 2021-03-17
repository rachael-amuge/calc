function add_number() {

    var Num1 = parseInt(document.getElementById("1").value);
    var Num2 = parseInt(document.getElementById("2").value);
    var answer = Num1 + Num2;

    document.getElementById("txtresult").value = answer;
}