const fs = require('fs');
const ss = require('simple-statistics')
const { chiSquaredDistributionTable } = require('simple-statistics');
const { default: chiSquaredGoodnessOfFit } = require('simple-statistics/src/chi_squared_goodness_of_fit');
const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"," "];
const count = 
const freq = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
fs.readFile('inputtext.txt','utf8', (err, data) => {
    if (err) {
        console.error(err);
        throw err;
    }
    data = data.toLowerCase()
    console.log(data)
    let data1 = data.split('');
    console.log(data1);
    let size  = 0;
    for (let i = 0; i < data1.length; i++) {
        for (let f = 0; f < count.length; f++) {
            if (data1[i] == alphabet[f] ) {
                count [f] = count[f] + 1;
                size = size + 1;
            }
            
        }
    }
    let whole = 0
    for (let i = 0; i < count.length - 1; i++) {
        freq[i] = count[i]/ (size - count[26])
    }
    for (let i = 0; i < count.length - 1; i++) {
        whole = whole + freq[i]
    }
    data = ss.chiSquaredGoodnessOfFit(freq, ss.instanceDistribution, .12)
})



console.log(freq)
    console.log(count)
    console.log(whole)
    console.log(data.length)
    console.log(size)