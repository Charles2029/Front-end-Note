/*
const poemDisplay = document.querySelector("pre");

verseChoose.addEventListener("change", () => {
  const verse = verseChoose.value;
  updateDisplay(verse);
});*/


const verseChoose = document.querySelector("select");
const poemDisplay = document.querySelector("pre");

verseChoose.addElementListener("change",()=>{
    const verse = verseChoose.value;
    updateDisplay(verse);
});

function updateDisplay(verse){
    verse =verse.replace(" ","").toLowerCase();
   
    const url=`${verse}.txt`;

}

fetch(url)
.then((response)=>{
    if(!response.ok){
        throw new Error(`HTTP error: ${reponse.status}`);
    }
    return response.text();
})

.then((text)=>{
    poemDisplay.textContent= text;
})
.catch((error)=>{
    poemDisplay.textContent =`Could not fetch verse: ${error}`;
});
// Call `fetch()`, passing in the URL.

updateDisplay("Verse 1");
verseChoose.value = "Verse 1";
