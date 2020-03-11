let eerstehelft = [...Array(250)].map(() => Math.floor(Math.random ()*291 + 10)); 
let tweedehelft = [...Array(250)].map(() => Math.floor(Math.random ()*201 + 500));
let compleet = eerstehelft.concat(tweedehelft);

top = 0
for(let i = 1; i <compleet.length;i++){

    if(compleet [i] > top) {
        top = compleet[i];
    }
}
let topindex = compleet.indexOf(top);

let paragraph = document.createElement("p");
let text = document.createTextNode(`Uit het array van ${compleet.length} getallen is het getal ${top} het grootst. Dit getal zit in index ${topindex} in het array.`);
let element = document.getElementById("div1");
element.appendChild(paragraph);
paragraph.appendChild(text);

