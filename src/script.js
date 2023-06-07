var conta = 0;
function teste() {
    var usuario = document.querySelector('#usuario');
    var senha = document.querySelector('#senha');
    if ((usuario === null || usuario === void 0 ? void 0 : usuario.value) == "AlunosSESI2023" && (senha === null || senha === void 0 ? void 0 : senha.value) == "devsistemas") {
        window.location.href = "index.html";
    }
    else if ((usuario === null || usuario === void 0 ? void 0 : usuario.value) != "AlunoSESI2023" && (senha === null || senha === void 0 ? void 0 : senha.value) != "devsistemas") {
        alert("usuario ou senha incorreta");
        conta++;
    }
    else if (conta == 5) {
        window.location.href = "index1.html";
    }
}
