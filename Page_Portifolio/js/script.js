function swapNomesEquipe() {
    var n1 = document.getElementById("nome1");
    var n2 = document.getElementById("nome2");

    if (n1 && n2) {

        var li1 = n1.parentNode;
        var li2 = n2.parentNode;

        var temp = li1.innerHTML;
        li1.innerHTML = li2.innerHTML;
        li2.innerHTML = temp;
    }
}
swapNomesEquipe();

function shuffleHeader() {
    var navs = document.getElementsByClassName("header-navigation");
    for (var i = 0; i < navs.length; i++) {
        var ol = navs[i].getElementsByTagName("ol")[0];
        if (ol) {
            var lis = ol.getElementsByTagName("li");
            for (var j = 0; j < 10; j++) {
                var pos1 = Math.floor(Math.random() * 5); // 0 a 4
                var pos2 = Math.floor(Math.random() * 5); // 0 a 4

                if (pos1 !== pos2 && lis[pos1] && lis[pos2]) {
                    var tempHTML = lis[pos1].innerHTML;
                    lis[pos1].innerHTML = lis[pos2].innerHTML;
                    lis[pos2].innerHTML = tempHTML;
                }
            }
        }
    }
}

shuffleHeader();

function validaDados() {
    var nomeInput = document.getElementById("nome");
    if (nomeInput) {
        var nome = nomeInput.value;

        if (nome.length <= 10) {
            nomeInput.value = "Sem nome fornecido";
        } else {
            nomeInput.value = nome.toUpperCase();
        }
    }

    var emailInput = document.getElementById("email");
    if (emailInput) {
        var email = emailInput.value;

        if (email.indexOf("@") === -1) {
            emailInput.value = email + "@unilasalle.edu.br";
        }
    }
}
