const arr = ["hi", "hello", "bye", "hi", "hello;"];
const wordsWithcounter = [];
let counter = 0;
let isWordInCounterArr = 0;

for (let i=0; i <arr.length; i++) {
    //checking if word already in arr
    const tempArr = wordsWithcounter.filter((word)=> word === arr[i]);

    if (tempArr.length===0) { //means the word wasn't counted yet
    wordsWithcounter.push(arr[i]);
    counter++;    
        for (let j=1; i< arr.length; j++) {
            if (arr[i] === arr[j]) {
                counter++;
            }
        }

        wordsWithcounter.push(counter);
        counter = 0;
    }

}

console.log(wordsWithcounter);

