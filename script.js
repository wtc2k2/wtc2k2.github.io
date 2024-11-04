function clickme() {
    var1 = document.getElementById("id1").checked
    var2 = document.getElementById("id2").checked
    var3 = document.getElementById("id3").checked

    document.getElementById("div1").textContent = var1
    document.getElementById("div2").textContent = var2
    document.getElementById("div3").textContent = var3

    if (var1) {
        document.getElementById("div4").textContent = "I play sports"
    }
    else {
        document.getElementById("div4").textContent = "I don't play sports"
    }
}

function selectChange(){
    var4 = document.getElementById("sports").value
    document.getElementById("div5").textContent = var4
}

