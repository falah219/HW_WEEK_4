

// --------- membuat array random ----------------------------------
const array = [];
let ganjil = 0;
let genap = 0;

while (array.length < 100) {
    const random = Math.floor(Math.random() * 50) + 1; 

    if ((random % 2 !== 0) && ganjil < 50) {
        array.push(random); 
        ganjil++;
    } else if ((random % 2 === 0) && genap < 50) {
        array.push(random); 
        genap++;
    }
}
console.log(array);

// ----------------------------------------------------------------

///// MEmisahkan Ganjil dan Genap
let arrayGanjil = [];
let arrayGenap = [];

for (let index = 0; index < array.length; index++) {
    if (array[index] % 2 === 0) {
        arrayGenap.push(array[index]);
    }
    else{
        arrayGanjil.push(array[index]);
    }
}

console.log(`array ganjil(jumlh index ${arrayGanjil.length}) ` + arrayGanjil);
console.log(`array genap(jumlh index ${arrayGenap.length}) ` + arrayGenap);

///----------------------------------------------------------------

const max = (x, y) => {
    let maxGanjil = x[0];
    for (let index = 0; index < x.length; index++) {
        if (maxGanjil < x[index]) {
            maxGanjil = x[index];
        } 
    }

    let maxGenap = y[0];
    for (let index = 0; index < y.length; index++) {
        if (maxGenap < y[index]) {
            maxGenap = y[index];
        } 
    }

    if (maxGenap > maxGanjil){
        console.log(`Hasil max dari array genap adalah ${maxGenap} dan Hasil max dari array ganjil adalah ${maxGanjil}. Maka yang lebih besar adalah array genap `)
    }

    else {
        console.log(`Hasil max dari array genap adalah ${maxGenap} dan Hasil max dari array ganjil adalah ${maxGanjil}. Maka yang lebih besar adalah array ganjil `)
    }
}

const min = (x,y) => {
    let minGanjil = x[0];
    for (let index = 0; index < x.length; index++) {
        if (minGanjil > x[index]) {
            minGanjil = x[index];
        } 
    }

    let minGenap = y[0];
    for (let index = 0; index < y.length; index++) {
        if (minGenap > y[index]) {
            minGenap = y[index];
        } 
    }

    if (minGenap > minGanjil){
        console.log(`Hasil min dari array genap adalah ${minGenap} dan Hasil min dari array ganjil adalah ${minGanjil}. Maka yang lebih besar adalah array genap `)
    }

    else {
        console.log(`Hasil min dari array genap adalah ${minGenap} dan Hasil min dari array ganjil adalah ${minGanjil}. Maka yang lebih besar adalah array ganjil `)
    }
    
    // console.log("Min dari array itu adalah " + banding);
}

const total = (x, y) => {
    

    let totalGanjil = 0;
    for (let index = 0; index < x.length; index++) {
        totalGanjil += x[index];
    }

    let totalGenap = 0;
    for (let index = 0; index < y.length; index++) {
        totalGenap += y[index];
    }

    if (totalGenap > totalGanjil){
        console.log(`Hasil total dari array genap adalah ${totalGenap} dan Hasil total dari array ganjil adalah ${totalGanjil}. Maka yang lebih besar adalah array genap `)
    }

    else {
        console.log(`Hasil total dari array genap adalah ${totalGenap} dan Hasil total dari array ganjil adalah ${totalGanjil}. Maka yang lebih besar adalah array ganjil `);
    }
    // console.log("Total jumlah dari array itu adalah " + total);

}

const average = (x, y) => {
    let averageGanjil = 0;
    for (let index = 0; index < x.length; index++) {
        averageGanjil += x[index];
    }
    averageGanjil /= x.length

    let averageGenap = 0;
    for (let index = 0; index < y.length; index++) {
        averageGenap += y[index];
    }
    averageGenap /= y.length

    if (averageGenap > averageGanjil){
        console.log(`Hasil average dari array genap adalah ${averageGenap} dan Hasil average dari array ganjil adalah ${averageGanjil}. Maka yang lebih besar adalah array genap `)
    }

    else {
        console.log(`Hasil average dari array genap adalah ${averageGenap} dan Hasil average dari array ganjil adalah ${averageGanjil}. Maka yang lebih besar adalah array ganjil `);
    }

    // console.log(`Rerata dari array itu adalah ` + total);
}

max(arrayGanjil, arrayGenap)
min(arrayGanjil, arrayGenap)
total(arrayGanjil, arrayGenap)
average(arrayGanjil, arrayGenap)