function getValue(value){
    var input = document.getElementById("input1")
    input.value += value;
}
function clearAll(){
    var input = document.getElementById("input1")
    input.value = "";

}
function del(){
    var input = document.getElementById("input1");    
   input.value = input.value.slice(0, -1);
}
function results(){
    var input = document.getElementById("input1");
    var results = eval(input.value);
    input.value = results;
}
