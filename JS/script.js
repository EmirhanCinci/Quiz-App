const quiz = new Quiz(sorular);
const ui = new UI();

// Quiz'i başlatan metotdur.
ui.btnStart.addEventListener("click", function() {
    ui.quizBox.classList.add("active");
    starTimer(10);
    startTimerLine();
    ui.soruGoster(quiz.soruGetir());    
    ui.btnNext.classList.remove("show");
    ui.soruSayisiniGoster(quiz.soruIndex + 1, quiz.sorular.length);
});

// Diğer soruya geçen metotdur.
ui.btnNext.addEventListener("click", function() {
    if(quiz.sorular.length != quiz.soruIndex + 1) {
        quiz.soruIndex += 1;
        clearInterval(counterLine);
        clearInterval(counter);
        starTimer(10);
        startTimerLine();
        ui.soruGoster(quiz.soruGetir());
        ui.btnNext.classList.remove("show");
        ui.soruSayisiniGoster(quiz.soruIndex + 1, quiz.sorular.length);
    }
    else {
        clearInterval(counter);
        clearInterval(counterLine);
        ui.quizBox.classList.remove("active");
        ui.scoreBox.classList.add("active");
        ui.skoruGoster(quiz.sorular.length, quiz.dogruCevapSayisi);
    }
});

// Sayfayı günceller.
ui.btnQuit.addEventListener("click", function () {  
    window.location.reload();
});

// Quizi yeniden başlatır.
ui.btnReplay.addEventListener("click", function () {  
    quiz.soruIndex = 0;
    quiz.dogruCevapSayisi = 0;
    ui.btnStart.click();
    ui.scoreBox.classList.remove("active");
});

// Kullanıcı seçim yaptığında cevabı kontrol eden metotdur.
function optionSelected(option) {
    clearInterval(counterLine);
    clearInterval(counter);
    let cevap = option.querySelector("span b").textContent;
    let soru = quiz.soruGetir();

    if(soru.cevabiKontrolEt(cevap)){
        quiz.dogruCevapSayisi += 1;
        option.classList.add("correct");
        option.insertAdjacentHTML("beforeend", ui.correctIcon);
    }
    else {
        option.classList.add("incorrect");
        option.insertAdjacentHTML("beforeend", ui.incorrectIcon);
    }

    for(let i = 0; i < ui.optionList.children.length; i++) {
        ui.optionList.children[i].classList.add("disabled");
    }

    ui.btnNext.classList.add("show");
}

let counter;
// Soru için süreyi ayarlayan metotdur.
function starTimer(time) {
    counter = setInterval(timer, 1000);

    function timer() {
        ui.timeSecond.textContent = time;
        time--;
        if(time < 0) {
            clearInterval(counter);
            ui.timeText.textContent = "Süre Bitti.";
            let cevap = quiz.soruGetir().dogruCevap;
            for(let option of ui.optionList.children) {
                if(option.querySelector("span b").textContent == cevap) {
                    option.classList.add("correct");
                    option.insertAdjacentHTML("beforeend", ui.correctIcon);
                }
                option.classList.add("disabled");
                ui.btnNext.classList.add("show");
            }
        }
    }
}

let counterLine;
// Süre çizgisini ayarlayan metotdur.
function startTimerLine() {
    let lineWidth = 0;
    counterLine = setInterval(timer, 110);

    function timer() {
        lineWidth += 1;
        ui.timeLine.style.width = lineWidth + "%";
        if (lineWidth > 99) {
            clearInterval(counterLine);
        }
    }
}