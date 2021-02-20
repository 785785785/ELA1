
// let aktualnyElement = ["code.html", "code.css"];
// let b = "code.html";
// let c = indexOf(b);
// console.log(c);



// const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

// const searchTerm = 'dog';
// const indexOfFirst = paragraph.indexOf(searchTerm);

// console.log(`The index of the first "${searchTerm}" from the beginning is ${indexOfFirst}`);


//  console.log(aktualnyElement.charAt(aktualnyElement.length-3,5));
//  console.log(aktualnyElement.charAt(aktualnyElement.length-3));
//  console.log(aktualnyElement.charAt(aktualnyElement.length-2));
//  console.log(aktualnyElement.charAt(aktualnyElement.length-1));
//  console.log(aktualnyElement.charAt(aktualnyElement.length));
// let b = aktualnyElement.substr(".", 3);
// console.log(b);


//  console.log(aktualnyElement.slice(".",-4));
 // console.log(aktualnyElement.slice(-3));

//  indices = [];
// idx = array.indexOf(element)
// while (idx != -1) {
//    indices.push(idx);
//    idx = array.indexOf(element, idx + 1);
// }

// const tablica = ["code.html", "code.css", "fgh.css", "ass.jpg"]
// console.log(tablica.map(rozszerzenie));

// function rozszerzenie(element, index,tab){
//     let w = element.indexOf(".");
//     console.log(w);
//     let zmiana = tablica.splice(0,2,"html", "css");
//     return zmiana;
// }
// console.log(tablica);
// console.log(rozszerzenie[, "ind.html", "inss.css", "ikl.jpg" ]);



// const tablica = ["code.html", "code.css", "fgh.css", "ass.jpg"]

// let zmiana = tablica.splice(0,2,"html", "css");
// console.log(zmiana);


// losowanie liczb ---------------losowanie liczb

// const min = 1;
// const max = 15;
// const random = Math.floor(Math.random()*(max-min+1)+min);
// console.log(random);

// switch ============ switch ============= switch Z FUNKCJĄ POŁĄCZONY============

// const nr = 5;

// const nr = Number(prompt("Wpisz liczbę"));
// function result (){
// let wynik = 0;
// switch (true) {
//     case (nr> 0 && nr <= 5):
//         console.log("Mało");
//         {wynik = "mało"};
//     break;
//     case (nr > 5 && nr <= 10):
//         console.log("Średnio");
//         {wynik = "średnio"}
//     break;
//     case (nr > 15) :
//         console.log("Dużo");
//         {wynik = "dużo"}
//     break;
// }
// return wynik;
// };
// console.log(result());

// PĘTLE ------------PĘTLE ============PĘTLE

//pętla od 0 do 99
// for (let i=0; i<100; i++) {
//     console.log("Nie będę rozmawiał na lekcji Informatyki.");
// }


// licznik pętli

// W każdej pętli mamy dostęp do jej licznika:

// for (let i=0; i<10; i++) {
//     console.log("Wykonanie pętli ", i);
// }

// =========================suma liczb

// let sum = 0;

// for (let i=0; i<10; i++) {
//     sum += i;
// }

// console.log(sum);

// ==================================różnica liczb

// for (let i=10; i>0; i--) {
//     console.log("Trwa odliczanie", i);
// }

// console.log(str);


// pętla WHILE==============WHILE==============WHILE ---------WHILE PĘTLA

// while (wyrażenie_sprawdzające_zakończenie_pętli) {
//     ...fragment kodu który będzie powtarzany...
// }

// ''''''''''''''''''''''''''''''''''''''''''''''''''''
// let i = 0;

// while (i < 0.5) {
//     console.log(i);
//     i = Math.random();
// }

// console.log(i);

// ''''''''''''''''''''''''''''''''''''''''''''''''''''''''
// let number = 5;
// while (number <=10){
//     console.log(number);
//     number++;
// }


// Zadanie 1) wypisz liczby od 1 do 100

// for (let i=0; i<101; i++ )
// {console.log (i); }

// Zadanie 2) - wypisz liczby od 5 do 50 z krokiem co 1

// metoda nr 1
// let number = 5;
// while (number <=50){
//     console.log (number);
//     number++;
// }

// metoda nr 2
// for (let i=5; i<=50; i++ )
// {console.log (i); }

// metoda nr 3
// let number = 5;
// do
// {
//     console.log(number);
//     number++;
// }
// while (number <=50)

// Zadanie nr 3) Wypisz liczby podzielne przez 8 bez reszty w zakresie od 1 do 100

// for (let i=0; i<=100; i++) {
//     if ((i % 8) === 0) console.log(i);
// }


// ZADANIE FUNKCJA Kwaśna zasadowa itd plus pROMPT i bez prompt

// const nr = Number(prompt("Wpisz wynik"));

// function phName (nr){
// let wynik = 0;
// switch (true) {
//     case (nr > 7 && nr <= 14):
//         // console.log("zasadowa");
//         {wynik = "zasadowa"};
//     break;
//     case (nr < 7 && nr >= 0):
//         // console.log("kwaśna");
//         {wynik = "kwaśna"}
//     break;
//     case (nr === 7):
//         // console.log("obojętna");
//         {wynik = "obojętna"}
//     break;
//     case (nr > 14) :
//         // console.log("nieprawidłowy");
//         {wynik = "nieprwidłowy"}
// }
// return wynik;
// };
// console.log(phName(5));
// console.log(phName(8.7));
// console.log(phName(7));

// ================================zmiana liter z małych na duże toUpperCase================
// const txt = "Ala ma kota";
// txt.length //długość
// console.log(txt.length);
// const big = txt.toUpperCase(); //na duże litery
// console.log(big);



// Do sprawdzenia typu danych korzystamy z instrukcji typeof:  typeof===== typeof=====

// const nr = 10;
// const txt = "przykładowy tekst";
// const arr = [1, 2, 3];
// const ob = {};
// const n = null;
//zmiennej zzz specjalnie nie zadeklarowałem

// console.log( typeof nr ); //"number"
// console.log( typeof txt ); //"string"
// console.log( typeof arr ); //"object" hmm?
// console.log( typeof ob ); //"object"
// console.log( typeof n ); //"object" hmm?
// console.log( typeof zzz ); //"undefined"

//sprawdzamy typy zmiennych
// if (typeof nr === "number") {...}
// if (typeof txt === "string") {...}
// if (Array.isArray(arr)) {...}
// if (typeof ob === "object") {...}
// if (n === null) {...}
// if (typeof zzz === "undefined") {...}


// Do konwersji danych na string, możemy posłużyć się kilkoma technikami:

// const nr = 102;

// console.log("" + nr); //"102"
// console.log(nr.toString()); //"102"
// console.log(String(nr)); //"102"

// Zamiana stringa na liczbę---------------

// za pomocą Number();  string musi zawierać tylko liczby
// const a = "12.45";
// console.log(Number(a));

// za pomocą parseInt(str,system liczbowy)  string musi zacznać się od liczby 
// -parsuje na liczbę całkowitą
// za pomocą parseFloat(str) - parsuje na liczbę (z przecinkami)

// const a = "1222.45 px";
// console.log(parseInt(a,10));
// console.log(parseFloat(a));

// Inne metody ---- inne metody stringa na liczbę----

// const txt = "20"
// console.log( +txt ); //20
// console.log( txt * 1 ); //20
// console.log( txt / 1 ); //20
// console.log( ~~txt ); //20


// Liczba miejsc po przecinku ----------------- w nawiasie podajemy liczbę po przecinku

// const nr = 123.456789;

// nr.toFixed()      // "123"
// nr.toFixed(0)     // "123"
// nr.toFixed(1)     // "123.5"
// nr.toFixed(2)     // "123.46"
// nr.toFixed(3)     // "123.457


// console.log(Math);

// losowanie kolorów  --- kolorów ------------------------------------------------

// function randomColor() {
//     const letters = "0123456789ABCDEF";
//     let color = "#";

//     for (let i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }

//     return color;
// }

// console.log( randomColor() );
// console.log( randomColor() );
// console.log( randomColor() );

// losowanie kolorów wersja nr 2---------------------------------------------

// const color =  "#" + Math.random().toString(16).substr(2,6);
// console.log(color);


// STRINGI   STRINGI ------------------------------------------------------------

// Metody toUpperCase() i toLowerCase() służą odpowiednio do zamieniania tekstu na duże i małe litery.

// const text = "Ala ma kota";

// console.log(text.toUpperCase()); //"ALA MA KOTA"
// console.log(text.toLowerCase()); //"ala ma kota"

// split ---------------------- split -------------------split

// const text = "Ala ma kota, a kot ma Alę, Ala go kocha, a Kot ją wcale ;("
// const parts = text.split(", ");

// parts.forEach(function(letter) {
//     console.log(letter.toUpperCase());
// });
































