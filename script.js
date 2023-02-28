



document.addEventListener("DOMContentLoaded",function(){
  
const colorfulPool = [
["Blue","1"],
["Red","2"],
["Yellow","3"],
["Green","4"],
["Violet","5"],
["Orange","6"],
["White","7"],
["Gray","8"],
["Black","9"],
["Cyan","10"],
["Indigo","11"],
["Magenta","12"]
];


  const colorsPool = [["#ECF5B7", "#9CB418", "#7D9014"],
                    ["#B7E1CE", "#358260", "#1E4835"],
                    ["#FFAB91", "#FF7043", "#E64A19"],
                    ["#C3C8BC", "#919A84", "#5E6553"],
                    ["#EF9A9A", "#F44336", "#D32F2F"],
                    ["#E6EE9C", "#CDDC39", "#827717"],
                    ["#90CAF9", "#2196F3", "#1565C0"],
                    ["#CE93D8", "#AB47BC", "#6A1B9A"],
                    ["#F8BBD0", "#F06292", "#E91E63"],
                    ["#C5CAE9", "#7986CB", "#3F51B5"],
                    ["#B0BEC5", "#78909C", "#546E7A"],
                    ["#B2EBF2", "#26C6DA", "#0097A7"],
                    ["#BCAAA4", "#795548", "#3E2723"]];

  let oldQuoteIndex;
  let oldColorIndex;

  function generateNumber(dataPool) {
    return Math.floor(Math.random() * dataPool.length);
  }

  function generateNewQuote() {
    let index = generateNumber(colorfulPool);

    while (index === oldQuoteIndex) {
      index = generateNumber(colorfulPool);
    }
    let newQuote = colorfulPool[index];
    let quote = document.getElementById("quote");
    let number = document.getElementById("number");

    quote.innerHTML = newQuote[0];
    number.innerHTML = newQuote[1];


    oldQuoteIndex = index;
  }

  function generateNewColor() {
    let index = generateNumber(colorsPool);

    while (index === oldColorIndex) {
      index = generateNumber(colorsPool);
    }
    let colorShade = colorsPool[index];
    let randomQuoteButton = document.querySelectorAll(".btn")[0];
    let background = document.body;
    let text = document.querySelector(".container");
    let border = document.querySelector(".border");
    let randomQuoteBorder = document.querySelectorAll(".border-smaller")[0];

    randomQuoteButton.style.background = colorShade[0];
    background.style.background = colorShade[0];
    text.style.color = colorShade[1];
    border.style.borderColor = colorShade[1];
    border.style.boxShadow = "4px 4px 0px 3px " + colorShade[2];
    randomQuoteBorder.style.borderColor = colorShade[1];
    randomQuoteBorder.style.boxShadow = "3px 3px 0px 2px " + colorShade[2];

    oldColorIndex = index;
  }

  function onQuoteButtonClick() {
    let randomQuoteButton = document.querySelector("#random-quote");
    randomQuoteButton.addEventListener("click", function(){
      generateNewQuote();
      generateNewColor();
    });
  }

  onQuoteButtonClick();

  window.onload = function () {
    generateNewQuote();
    generateNewColor();
  };
  
});