function add() {
    event.preventDefault();
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    document.getElementById("answer").value = a + b
    document.getElementById("ans").style.display = "block";
}