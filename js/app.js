/*
1.Funksiya yasang, ushbu funksiya 2ta argument qabul qilsin
va ularning yig’indisini qaytarib bersin.
function sum(x,y) {
// code...
}
Namunalar:
sum(3, 2) ᔍ 5
sum(-3, -6) ᔍ -9
sum(7, 3) ᔍ 10
*/

// JAVOBI

// let javob = 0

// function yigindi(x, y) {
//     javob = x + y
//     alert(`Yig'indi ${javob}`)
// }
// yigindi(3, 2)

/*
2.Minutlarni butun son sifatida qabul qilib, uni sekundlarga
o’girib beradigan funksiya yasang.
function toSekunds(minutes) {
// code...
}
Namunalar:
toSekunds(5) ᔍ 300
toSekunds(3) ᔍ 180
toSekunds(2) ᔍ 120
*/

// JAVOBI

// function toSekunds(minutes) {
//     let secund = minutes * 60
//     alert(`${secund} secund`)
// }
// toSekunds(5)

/*
3.Funksiya butun son qabul qiladi. Funksiya ushbu butun
sondan keyingi sonni qaytarsin.
function nextInteger(int) {
// code...
}
Namuna:
nextInteger(0) ᔍ 1
nextInteger(9) ᔍ 10
nextInteger(-3) ᔍ -2
*/

// JAVOBI

// function nextInteger(int) {
//     let nextNumber = int + 1
//     console.log(nextNumber);
// }
// nextInteger(0)

/*
4.Funskiya uchburchakning asosi va balandligini qabul qiladi.
Funksiya uchburchakning yuzini hisoblab qaytarsin. Uchburchak yuzini topish formulasi: S = (asos * balandlik) / 2
function uchburchakYuzi(asos, balandlik) {
// code...
}
Namuna:
uchburchakYuzi(3, 2) ᔍ 3
uchburchakYuzi(7, 4) ᔍ 14
uchburchakYuzi(10, 10) ᔍ 50
*/

// JAVOBI

// function uchburchakYuzi(asos, balandlik) {
//     let S = (asos * balandlik) / 2
//     console.log(S);
// }
// uchburchakYuzi(3, 2)

/*
5.Funksiya yoshni yil ko’rinishida qabul qiladi. ushbu funksiya
yoshni kunlarda hisoblab natijani qaytarsin. Bir yil 365 kun deb
oling.
function ageToDays(age) {
// code...
}
Namuna:
ageToDays(65) ᔍ 23725
ageToDays(0) ᔍ 0
ageToDays(20) ᔍ 7300
*/

// JAVOBI

// function ageToDays(age) {
//     let yosh = age * 365
//     console.log(yosh);
// }
// ageToDays(65)

/*
6.Quyidagi namunalarga muvofiq ravishda funksiyani tana
qismini yozing.

kub(3) ᔍ 27
kub(5) ᔍ 125
kub(10) ᔍ 1000
*/

// JAVOBI

// function kub(son) {
//     let sonningKubi = son * son *son
//     console.log(sonningKubi);
// }
// kub(3)

/*
7.Massivni ichidan birinchi elementini qaytaradigan funksiya
yasang.
function firstElement(arr) {
// code...
}
Namuna:
firstElement([1, 2, 3]) ᔍ 1
firstElement([80, 5, 100]) ᔍ 80
firstElement([-500, 0, 50]) ᔍ -500
*/

// JAVOBI

// function firstElement(arr) {
//     let a = arr
//     console.log(a[0]);
// }
// firstElement([[1, 2, 3]])

/*
8.Funksiya 2ta argument qabul qilsin. Ushbu funksiya birinchi
qiymatning ikkinchi qiymat bilan ko’paytmasini qaytarsin.
function power(x,y) {
// code...
}
Namuna:
power(230, 10) ᔍ 2300
power(110, 3) ᔍ 330
power(480, 20) ᔍ 9600
*/

// JAVOBI

// function power(x,y) {
//     let kopaytma = x * y
//     console.log(kopaytma);
// }
// power(230, 10)

/*
9.Soat ko’rinishida qiymat kiritilsa, sekundlarda qaytaradigan
funksiya yasang.
function hourToSekunds(hour) {
// code...
}
Namuna:
hourToSekunds(2) ᔍ 7200
hourToSekunds(10) ᔍ 36000
hourToSekunds(24) ᔍ 86400
*/

// JAVOBI

// function hourToSekunds(hour) {
//     let minutes = hour * 60
//     let secund = minutes * 60
//     console.log(secund);
// }
// hourToSekunds(2)

/*
10.Uchburchakning uchinchi tomonining eng uzun qiymatini
qaytaradigan funksiya yasang.
Formula: Eng uzun uchinchi tomon = (tomon1 + tomon2) - 1
function uchinchiTomon(tomon1, tomon2) {
// code...
}
Namuna:
uchinchiTomon(8, 10) ᔍ 17
uchinchiTomon(5, 7) ᔍ 11
uchinchiTomon(9, 2) ᔍ 10
*/

// JAVOBI

// let kattaTomoni
// function uchinchiTomon(tomon1, tomon2) {
//     kattaTomoni = (tomon1 + tomon2) - 1
//     console.log(kattaTomoni);
// }
// uchinchiTomon(8, 10)

/*
11.Ikkita son argument sifatida kiritilsa, ushbu ikkala sonni birinchisini ikkinchisiga bo’lgandagi qoldiqni qaytarib beradigan
funksiya yasang.
function qoldiq(son1, son2) {
// code...
}
Namuna:
qoldiq(1, 3) ᔍ 1
qoldiq(3, 4) ᔍ 3
qoldiq(-9, 45) ᔍ -9
qoldiq(5, 5) ᔍ 0
*/

// JAVOBI

// function qoldiq(son1, son2) {
//     let qoldigi = son1 % son2
//     console.log(qoldigi);
// }
// qoldiq(1, 3)

/*
12.Turtburchakning bo’yi va eni berilsa uning yuzini hisoblab
qaytaradigan funksiya yasang. Formula S = bo’yi * eni
function turtburchakYuzi(boyi, eni) {
// code...
}
Namuna:
turtburchakYuzi(6, 7) ᔍ 26
turtburchakYuzi(20, 10) ᔍ 60
turtburchakYuzi(2, 9) ᔍ 22
*/

// JAVOBI

// function turtburchakYuzi(boyi, eni) {
//     let yuzi = boyi * eni
//     console.log(yuzi);
// }
// turtburchakYuzi(6, 7)

/*
13.Funksiya “a” argument sifatida string ma’lumot qabul qiladi.
ushbu funksiya “Something” stringiga ” ” bo’sh joy va “a”
stringini birlashtirib qaytarsin.
function stringQoshish(a) {
// code...
}
Namuna:
stringQoshish("is better than nothing") ᔍ "something
is better than nothing"
stringQoshish("Bob Jane") ᔍ "something Bob Jane"
stringQoshish("something") ᔍ "something something"
*/

// JAVOBI

// function stringQoshish(a) {
//     let natija = "Something" + " " + a
//     console.log(natija);
// }
// stringQoshish("is better than nothing")

/*
14.Quyidagi namunalarga qaragan holatda funksiya yasang.
Namuna:
kvadrat(5) ᔍ 25
kvadrat(9) ᔍ 81
kvadrat(100) ᔍ 10000
*/

// JAVOBI

// function kvadrat(son) {
//     let sonKvadrat = son^2
//     console.log(sonKvadrat);
// }
// kvadrat(5)

/*
15.Funksiya raqam qabul qiladi. Agar ushbu raqam 0dan kichik
yoki teng bo’lsa funksiya rost qaytarsin aks holda yolg’on.
function noldan(raqam) {
// code...
}
Namuna:
noldan(5) ᔍ false
noldan(0) ᔍ true
noldan(-2) ᔍ true
*/

// JAVOBI

// function noldan(raqam) {
//     if (raqam <= 0) {
//         alert(true);
//     } else {
//         alert(false);
//     }
// }
// noldan(prompt("Sonni kiriting"))


/*
100.Quyidagi namunani kuzatgan holda funksiya yasang.
Namuna:
Namuna("div*2") ᔍ "<div></div><div></div>"
Namuna("p*1") ᔍ "<p></p>"
Namuna("li*3") ᔍ "<li></li><li></li><li></li>"
*/

// JAVOBI

// const divEl = document.querySelector('div')
// function kopaytma() {
//     let a = divEl
//     console.log(a);
// }
// kopaytma()

/*
101.Funksiya butun son qabul qilsa, 1dan ushbu butun
songacha bo’lgan sonlar yig’indisini qaytarsin.
Namuna:
namuna(3) ᔍ 6
// 1 + 2 + 3 = 6
namuna(10) ᔍ 55
// 1 + 2 + 3 + ... + 10 = 55
namuna(7) ᔍ 28
// 1 + 2 + 3 + ... + 7 = 28
*/

// JAVOBI

// function son(son) {
    
// }
// son(prompt("Sonni kiriting"))

/*
102.Funskiya son va object qabul qiladi. Objectni ichida min va
max degan propertilar mavjud. Agar ushbu son min va maxni
oralig’ida bo’lsa funksiya true qaytarsin, aks holda false
Namuna:
Namuna(4, { min: 0, max: 5 }) ᔍ true
Namuna(4, { min: 4, max: 5 }) ᔍ true
Namuna(4, { min: 6, max: 10 }) ᔍ false
Namuna(5, { min: 5, max: 5 }) ᔍ true
*/
// JAVOBI

// function sonlar(son, object) {
//     if (min < son > max) {
//         console.log(true);
//     } else {
//         console.log(false);
//     }
// }
// sonlar(4, [{min: 0, max: 5}])

/*
103.Funksiya son qabul qiladi, agar ushbu sonni kvadratga
ko’tarsak, ushbu natijaning oxirigi qiymati sonning o’ziga teng
bo’lsa funksiya true qaytarsin, aks holda false.
Namuna:
Namuna(1) ᔍ true
Namuna(3) ᔍ false
// 3^2 = 9
Namuna(6) ᔍ true
// 6^2 = 36 (ends with 6)
Namuna(95) ᔍ false
// 95^2 = 9025 (does not end with 95)
*/

// JAVOBI

function oxiri() {

}

/*
104.Funksiya massiv qabul qiladi. Funksiya massivning elementlariga o’sha elementning indexini qo’shgan holda yangi
massiv qaytarsin.
Namuna:
Namuna([0, 0, 0, 0, 0]) ᔍ [0, 1, 2, 3, 4]
Namuna([1, 2, 3, 4, 5]) ᔍ [1, 3, 5, 7, 9]
Namuna([5, 4, 3, 2, 1]) ᔍ [5, 5, 5, 5, 5]
*/


/*
105.Funksiya ichimliklar massivini qabul qiladi. Funksiya
ichida shakari yo’q ichimlilarinigina qaytarishi kerak. Ichida
shakari bor ichimliklar ro’yxati:
cola
fanta
Namuna:
Namuna(["fanta", "cola", "water"]) ᔍ ["water"]
Namuna(["fanta", "cola"]) ᔍ []
Namuna(["lemonade", "beer", "water"]) ᔍ ["lemonade",
"beer", "water"]
*/


// function shakarsiz(suv) {
//     if (("fanta" && "cola")) {
//         delite.suv[("fanta", "cola")]
//         console.log(suv);
//     } else {
//         console.log(suv);
//     }

// }
// shakarsiz(["fanta", "cola", "water"])


/*
106.Funksiya son qabul qilsa, Funksiya ushbu sonda nechta
raqam borligini qaytarsin.
Namuna:
Namuna(123) ᔍ 3
Namuna(56) ᔍ 2
Namuna(7154) ᔍ 4
Namuna(61217311514) ᔍ 11
Namuna(0) ᔍ 1
107.Funksiya son qabu qilsa, ushbu funksiya sonning raqamlari
o’rni istalgancha almashtirib eng katta hosil bo’lishi mumkin
bo’lgan sonni qaytarsin.
Namuna:
Namuna(123) ᔍ 321
Namuna("001") ᔍ 100
Namuna(999) ᔍ 999
Namuna(784) ᔍ 874
*/
// function sonlar(son) {
//     let kattason = son.length
//     console.log(kattason);
// }
// sonlar(123)

/*
108.Funksiya 2ta sonlar oralig’ini qabul qiladi. Funksiya ushbu
oraliqdan bironta random son qaytarsin.
Namuna:
Namuna(5, 9) ᔍ 7
Namuna(5, 9) ᔍ 9
Namuna(5, 9) ᔍ 5
109.Funksiya son qabul qiladi. Ushbu funksiya ushbu son narissistik son bo’lsa true qaytarsin, aks holda false. Narissistik son
degani sonning har bir raqamini sonning uzunligi miqdorida
darajaga ko’tarib qo’shib chiqilganda o’ziga teng bo’lgan son.
Namuna:
Namuna(153) ᔍ true
// 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
Namuna(370) ᔍ true
Namuna(1652) ᔍ false
110.Funksiya string qabul qiladi.Funksiya ushbu stringda
nechta katta harf ishtirok etganin qaytarsin.
Namuna:
Namuna("fvLzpxmgXSDrobbgMVrc") ᔍ 6
Namuna("JMZWCneOTFLWYwBWxyFw") ᔍ 14
*/