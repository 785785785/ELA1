
// const tab = ["oko", "ucho", "nos"];
// console.log(tab);

// tab.push("czoło", "broda");
// console.log(tab);
// tab.unshift("policzek");
// console.log(tab);
// tab.shift(); 
// console.log(tab);

// -----------------------------------------------------------------------------------------------------------------
// Żeby sprawdzić czy dana zmienna jest tablicą, powinniśmy skorzystać z metody Array.isArray(). Wynika to z faktu, że tablice w Javascript także są obiektami i typeof zwraca nam "object":

// const tab = ["ala", "bala"]
// const ob = { name : "Piotr" }

// console.log(Array.isArray(tab)); //true
// console.log(Array.isArray(ob)); //false

// console.log(typeof tab); //"object";
// console.log(typeof ob); //"object";

// --------------------------------------------------------------------------------------------------------------------

// push() i pop() - na końcu tablicy
// Metoda Array.push(el1, el2*...) wstawia nowy element (lub kilka) do tablicy na jej końcu i zwraca długość nowej tablicy. Elementów wstawianych można podać kilka lub jeden.

// const tab = ["Marcin", "Ania", "Agnieszka"];
// tab.push("Grzegorz");
// tab.push("Piotr", "Karol");

// console.log(tab) //["Marcin", "Ania", "Agnieszka", "Grzegorz", "Piotr", "Karol"]

// Metoda pop() w przeciwieństwie do push() zabiera ostatni element z tablicy i go zwraca:

// const tab = ["Marcin", "Ania", "Agnieszka"];
// const last =  tab.pop();

// console.log(last); //Agnieszka
// console.log(tab); //[Marcin, Ania]

// -----------------------------------------------------------------------------------------------------------
// Metoda join(separator) służy do łączenia kolejnych elementów tablicy w jeden wspólny tekst.
// Opcjonalnym parametrem tej metody jest separator - tekst, który będzie oddzielał kolejne elementy w utworzonym tekście. Jeżeli go nie podamy będzie użyty domyślny znak przecinka:

// const ourTable = ["Marcin", "Ania", "Agnieszka"];

// console.log(ourTable.join()); //wypisze się "Marcin,Ania,Agnieszka"

// console.log(ourTable.join(" - ")); //wypisze się "Marcin - Ania - Agnieszka"

// console.log(ourTable.join(" <--> ")); //wypisze się "Marcin <--> Ania <--> Agnieszka"

// -------------------------------------------------------------------------------------------------------

// Zamiana tekstu na tablicę
// Skoro zamieniliśmy tablicę na tekst, to spróbujmy zrobić to w drugą stronę. Aby to zrobić, wystarczy użyć składni spread:

// const txt = "kartofel";
// const tab = [...txt];
// console.log(tab); //["k", "a", "r", "t", "o", "f", "e", "l"]


// Jeżeli chcielibyśmy tekst podzielić na podstawie znaku podziału, użyjemy tutaj metody split() dostępnej dla stringów:

// const txt = "Ala ma kota";
// const tab = txt.split(" ");
// console.log(tab); //["Ala", "ma", "kota"];

// -------------------------------------------------------------------------------------------------------------
// Dzięki metodzie reverse() możemy odwrócić elementy naszej tablicy:

// const tab = [1, 2, 3, 4];

// console.log("Przed: " + tab); //Przed: [1, 2, 3, 4]
// tab.reverse()
// console.log("Po: " + tab); //Po: [4, 3, 2, 1]

// ------------------------------------------------------------------------------------------------------
// Łączenie tablic

// W dzisiejszych czasach o wiele przyjemniejszą metodą jest użycie użytego już przez nas spread syntax:

// const anim1 = ["Pies", "Kot"];
// const anim2 = ["Słoń", "Wieloryb"];
// const table = [...anim1, ...anim2];
// console.log(table)


// inaczej łączenie tablic
// by połączyć ze sobą kilka tablic wykorzystamy metodę concat(), która jako parametr przyjmuje jedną lub kilka tablic:

// const anim1 = ["Pies", "Kot"];
// const anim2 = ["Słoń", "Wieloryb"];
// const anim3 = ["Chomik ninja", "Świnka morderca"];

// const table = anim1.concat(anim2);
// console.log(table); //wypisze ["Pies", "Kot", "Słoń", "Wieloryb"]

// const tableBig = anim1.concat(anim2, anim3);
// console.log(tableBig); //wypisze ["Pies", "Kot", "Słoń", "Wieloryb", "Chomik ninja", "Świnka mor


// -----------------------------------------------------------------------------------------------------
// slice ---------- slice --------------- slice ------------ slice
// slice() - zwracanie kawałka tablicy
// Metoda Array.slice(od, do*) tak samo jak przy stringach, zwraca kawałek tablicy na której 
// została wywołana. 
// Pierwszy parametr od wskazuje na indeks, od którego ma "wyciąć" elementy, a do analogicznie wskazuje 
// indeks do jakiego będziemy ciąć. Jeżeli go nie podamy, zostanie wycięty kawałek od danego indeksu 
// do końca tablicy.

// const tab = ["Marcin", "Ania", "Agnieszka", "Monika", "Magda"];

// const tab2 = tab.slice(0, 1);
// console.log(tab2); //["Marcin"]
// console.log(tab); //["Marcin", "Ania", "Agnieszka", "Monika", "Magda"]

// const tab3 = tab.slice(2);
// console.log(tab3); //["Agnieszka", "Monika", "Magda"]

// const tab4 = tab.slice(0, 5);
// console.log(tab4); //["Marcin", "Ania", "Agnieszka", "Monika", "Magda"]

// const tab5 = tab.slice(-2); //od końca
// console.log(tab5); //["Monika", "Magda"]

// const tab6 = tab.slice(2, -1);
// console.log(tab6); //["Agnieszka", "Monika"]


// -----------------------------------------------------------------------------------------------------

// splice() - usuwanie lub dodawanie elementów
// Metoda splice(index, ileUsunąć, noweElementy*...) służy zarówno do usuwania jak i wstawiania nowych elementów do tablicy.
// Parametr index określa miejsce w tablicy od którego zacznie się usuwanie elementów.
// Parametr ileUsunąć mówi ile elementów powinno być usuniętych z tablicy. Jeżeli podamy 0, wtedy nic nie zostanie z tablicy usunięte.
// Opcjonalne parametry elementyWstawiane to elementy, które będą wstawiane tuż przed usuwanymi elementami, lub tuż przed danym elementem, jeżeli nic nie usuwamy.

const tab = ["Marcin", "Ania", "Agnieszka", "Monika"];

tab.splice(2, 1); //usuwam 1 element na indeksie 2
console.log(tab); //["Marcin", "Ania", "Monika"]

// const tab = ["Marcin", "Ania", "Agnieszka", "Monika"];
// tab.splice(1, 0, "A", "B") //nic nie usuwam i wstawiam nowe elementy przed indeks 1
// console.log(tab); //["Marcin", "A", "B", "Ania", "Agnieszka", "Monika"]


// const tab = ["pies", "kot", "chomik", "aligator", "świnka", "kanarek"];
// const index = tab.indexOf("aligator"); //szukamy miejsce niepasującego zwierzaka
// if (index >= 0) {
//     tab.splice(index, 1);
//     console.log(tab); //["pies", "kot", "chomik", "świnka", "kanarek"];
// }
