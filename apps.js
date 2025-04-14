let usuarioS = new Array()
usuarioS.push("Cleitin2212")
usuarioS.push("Vagnerinfo")
usuarioS.push("AnaCarolina221")
usuarioS.push("MatiasGamer")
usuarioS.push("CelsoPorta78")

console.dir(usuarioS)

document.getElementById("conteudo").innerHTML = "<ul>"
document.getElementById("conteudo").innerHTML += "<li>" + usuarioS[0] + "</li>"
document.getElementById("conteudo").innerHTML += "<li>" + usuarioS[1] + "</li>"
document.getElementById("conteudo").innerHTML += "<li>" + usuarioS[2] + "</li>"
document.getElementById("conteudo").innerHTML += "<li>" + usuarioS[3] + "</li>"
document.getElementById("conteudo").innerHTML += "<li>" + usuarioS[4] + "</li>"
document.getElementById("conteudo").innerHTML += "<li>" + usuarioS[5] + "</li>"
document.getElementById("conteudo").innerHTML += "</ul>"


