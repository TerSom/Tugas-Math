document.write(`<h3>Variabel</h3>`)

// Variabel
let A = 8.4
document.write(`Variabel A adalah ${A} <br>`)
let B = 4.6
document.write(`Variabel B adalah ${B} <br>`)
let C = 5.7
document.write(`Variabel C adalah ${C} <br><br>`)

// Math Round
document.write(`<h3> Math Round </h3>`)

var Round1 = Math.round(A);
console.log(Round1);
document.write(`Hasil pembulatan tedekat A adalah ${Round1} <br>`);

const Round2 = Math.round(B);
console.log(Round2);
document.write(`Hasil pembulatan tedekat B adalah ${Round2} <br>`);

const Round3 = Math.round(C);
console.log(Round3);
document.write(`Hasil pembulatan tedekat C adalah ${Round3} <br>`);

// Math Floor
document.write(`<h3> Math Flor </h3>`)

const Floor1 = Math.floor(A);
console.log(Floor1)
document.write(`Hasil pembulatan kebawah A adalah ${Floor1} <br>`);

const Floor2 = Math.floor(B);
console.log(Floor2)
document.write(`Hasil pembulatan kebawah B adalah ${Floor2} <br>`);

const Floor3 = Math.floor(C);
console.log(Floor3)
document.write(`Hasil pembulatan kebawah C adalah ${Floor3} <br>`);

// Math Ceil
document.write(`<h3> Math Ceil </h3>`)

const Ceil1 = Math.ceil(A);
console.log(Ceil1)
document.write(`Hasil pembulatan Ke Atas A adalah ${Ceil1} <br>`);

const Ceil2 = Math.ceil(B);
console.log(Ceil2)
document.write(`Hasil pembulatan Ke Atas B adalah ${Ceil2} <br>`);

const Ceil3 = Math.ceil(C);
console.log(Ceil3)
document.write(`Hasil pembulatan Ke Atas C adalah ${Ceil3} <br>`);

document.write(`<h3> Variabel Pemangkatan (Pow)</h3>`)
let a = 1
document.write(`Variable A = ${a}<br>`);
let b = 2
document.write(`Variable B = ${b}<br>`);
let c = 3
document.write(`Variable C = ${c}<br>`);
let d = 4
document.write(`Variable D = ${d}<br>`);
let e = 5
document.write(`Variable E = ${e}<br>`);
let f = 6
document.write(`Variable F = ${f}<br>`);

// Math Pow
document.write(`<h3> Math Pow </h3>`)

const Pow1 = Math.pow(a,f)
console.log(Pow1)
document.write(`Hasil pemangkatan dari A dan f (1 pangkat 6) adalah ${Pow1} <br>`);

const Pow2 = Math.pow(e,c);
console.log(Pow2)
document.write(`Hasil pemangkatan dari E dan C (5 pangkat 3) adalah ${Pow2} <br>`);

const Pow3 = Math.pow(b,d);
console.log(Pow3)
document.write(`Hasil pemangkatan dari B dan D (2 pangkat 4) adalah ${Pow3} <br>`);

// Math Srqt

document.write(`<h3> Variabel Menghitung akar kuadrat (Srqt)</h3>`)
let g = 25
document.write(`Variable G = ${g}<br>`);
let h = 64
document.write(`Variable H = ${h}<br>`);
let i = 125
document.write(`Variable I = ${i}<br>`);

document.write(`<h3> Math Srqt </h3>`)

const Srqt1 = Math.sqrt(g)
console.log(Srqt1)
document.write(`Hasil akar kuadrat dari G adalah  ${Srqt1} <br>`);

const Srqt2 = Math.sqrt(h);
console.log(Srqt2)
document.write(`Hasil akar kuadrat dari H adalah ${Srqt2} <br>`);

const Srqt3 = Math.sqrt(i);
console.log(Srqt3)
document.write(`Hasil akar kuadrat dari I adalah ${Srqt3} <br>`);
