function vms() {}

function entrar() {
    window.document.getElementById('entrar')
    window.location.href = "entrar.html"
}

function sobre() {
    var sobre = window.document.getElementById('sobre')
    window.location.href = "sobre.html"
}


document.addEventListener("DOMContentLoaded", function() {entrar
    var idioma = document.querySelector(".idioma")

    idioma.addEventListener("change", function() {
        if (this.value === "en") {
            document.querySelector("header h1").textContent =  "Watch movies, series and much more, with unlimited access to the best streaming content!"
            document.querySelector(".p1 p").textContent = "Starting at R$ 31.90. Cancel anytime."
            document.querySelector(".p2 p").textContent = "Want to watch? Enter your email to start your subscription."
            document.querySelector(".sobre").value = "Over"
            document.querySelector(".entrar").value = "Sign in"
            document.querySelector("input#vms").value = "Get Started >" 
            document.querySelector(".p3").innerHTML = "Discover incredible films and have your next movie<br>marathon!"
            document.querySelector(".p4").innerHTML = "Enjoy your favorite content anytime, without limitations!"
            document.querySelector(".p5").innerHTML = "Entertainment for all family members, at any time!"
            document.querySelector(".p6").innerHTML = "Discover incredible new titles and<br>movies, with fresh releases<br>every week!"
            document.querySelector(".s1").innerHTML = "Unmissable Films"
            document.querySelector(".s2").innerHTML = "Watch whenever you want"
            document.querySelector(".s3").innerHTML = "Family Fun"
            document.querySelector(".s4").innerHTML = "Weekly Releases"
            document.querySelector(".titulo_estreia").innerHTML = "Premieres that will give you something to talk about"
        } else {
            document.querySelector("header h1").textContent = "Assista a filmes, séries e muito mais, com acesso ilimitado ao melhor conteúdo em streaming!"
            document.querySelector(".p1 p").textContent = "A partir de R$ 31,90. Cancele quando quiser."
            document.querySelector(".p2 p").textContent = "Quer assistir? informe seu email para fazer a sua assinatura"
            document.querySelector(".sobre").value = "Sobre"
            document.querySelector(".entrar").value = "Entrar"
            document.querySelector("input#vms").value = "Vamos Lá >"
            document.querySelector(".p3").innerHTML = "Descubra filmes incríveis e<br>faça sua próxima maratona cinematográfica!"
            document.querySelector(".p4").innerHTML = "Aproveite seu conteúdo<br>favorito a qualquer hora,<br> sem limitações!"
            document.querySelector(".p5").innerHTML = "Entretenimento para todos<br>os membros da familia, em<br>qualquer momento!"
            document.querySelector(".p6").innerHTML = "Descubra novos títulos e<br>filmes incríveis, com lançamentos fresquinhos<br>toda semana!"
            document.querySelector(".s1").innerHTML = "Filmes Imperdíveis"
            document.querySelector(".s2").innerHTML = "Assista Quando Quiser"
            document.querySelector(".s3").innerHTML = "Diversão para a família"
            document.querySelector(".s4").innerHTML = "Lançamentos Semanais"
            document.querySelector(".titulo_estreia").innerHTML = "Estreias que vão dar o que falar"
        }   
    })
})

