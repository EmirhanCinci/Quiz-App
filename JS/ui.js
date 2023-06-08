function UI() {
    this.btnStart = document.querySelector(".btn-start");
    this.btnNext = document.querySelector(".btn-next");
    this.btnReplay = document.querySelector(".btn-replay");
    this.btnQuit = document.querySelector(".btn-quit");
    this.quizBox = document.querySelector(".quiz-box");
    this.questionText = document.querySelector(".question-text");
    this.questionIndex = document.querySelector(".question-index");
    this.scoreBox = document.querySelector(".score-box");
    this.scoreText = document.querySelector(".score-text");
    this.optionList = document.querySelector(".option-list");
    this.correctIcon = '<div class="icon"><i class="fas fa-check"></i></div>';
    this.incorrectIcon = '<div class="icon"><i class="fas fa-times"></i></div>';
    this.timeText = document.querySelector(".time-text");
    this.timeSecond = document.querySelector(".time-second");
    this.timeLine = document.querySelector(".time-line");
}

// Soruyu gösteren metotdur.
UI.prototype.soruGoster = function(soru) {
    let question = `<span>${soru.soruMetni}</span>`;
    this.questionText.innerHTML = question;

    let options = '';
    for(let cevap in soru.cevapSecenekleri) {
        options += 
            `
                <div class="option">
                    <span><b>${cevap}</b>: ${soru.cevapSecenekleri[cevap]}</span>
                </div>
            `;
    }
    this.optionList.innerHTML = options;

    const option = this.optionList.querySelectorAll(".option");
    for(let opt of option) {
        opt.setAttribute("onclick", "optionSelected(this)")
    }
}

// Soru sayısını gösteren metotdur.
UI.prototype.soruSayisiniGoster = function(soruSirasi, toplamSoru) {
    let tag = `<span class="badge bg-warning">${soruSirasi} / ${toplamSoru}</span>`;
    this.questionIndex.innerHTML = tag;
}

UI.prototype.skoruGoster = function (toplamSoru, dogruCevap) { 
    let tag = `Toplam ${toplamSoru} sorudan ${dogruCevap} doğru cevap verdiniz.`;
    this.scoreText.innerHTML = tag;
}