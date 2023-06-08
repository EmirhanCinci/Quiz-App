function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
}

Soru.prototype.cevabiKontrolEt = function(cevap) {
    return cevap === this.dogruCevap;
}

let sorular = [
    new Soru("1- Hangisi javascript paket yönetim uygulamasıdır?", { a: "Node.js", b: "Typescript", c: "Npm", d: "Java"}, "c"),
    new Soru("2- Hangisi .net paket yönetim uygulamasıdır?", { a: "Node.js", b: "Nuget", c: "Npm", d: "C#"}, "b"),
    new Soru("3- İstanbul ne zaman fethedilmiştir?", { a: "1450", b: "1451", c: "1452", d: "1453"}, "d"),
    new Soru("4- 2+2 kaçtır?", { a: "4", b: "5", c: "8", d: "12"}, "a"),
    new Soru("5- Türkiye'nin başkenti hangi şehirdir?", { a: "İstanbul", b: "Bursa", c: "Ankara", d: "İzmir"}, "c"),
    new Soru("6- Hangisi tarihteki Türk devletlerinden biri değildir?", { a: "Avar Hanlığı", b: "Emevi Devleti", c: "Hun İmparatorluğu", d: "Göktürk Kağanlığı"}, "b"),
    new Soru("7- Türkiye'de 2017 yılında asgari ücret ne kadardı?", { a: "1400", b: "2500", c: "4500", d: "8500"}, "a"),
    new Soru("8- Türkiye’nin sahip olduğu uluslararası telefon kodu nedir?", { a: "+90", b: "+30", c: "+40", d: "+91"}, "a"),
    new Soru("9- Aspirinin ilk kez çıkış yılı nedir?", { a: "1897", b: "1898", c: "1899", d: "1900"}, "c"),
    new Soru("10- Dinler arasında “Davut Yıldızı” sembolünün mensup olduğu din hangisidir?", { a: "İslamiyet", b: "Musevilik", c: "Hristiyanlık", d: "Budizm"}, "b"),
];