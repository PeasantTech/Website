const numInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const outputPara = document.getElementById("output");

const checkUserInput = () => {
  const inputParse = parseInt(numInput.value);

  if (isNaN(inputParse)) {
    outputPara.innerText = "Please enter a valid number";
    return;
  }
  else if (inputParse <= -1) {
    outputPara.innerText = "Please enter a number greater than or equal to 1";
    return;
  }
  else if (inputParse >= 4000) {
    outputPara.innerText = "Please enter a number less than or equal to 3999";
    return;
  } else {
    outputPara.innerText = decToRoman(inputParse);
  }

}

function decToRoman (inputParse) {
      const arrRomDec = [
        { value: 1, string: "I" },
        { value: 4, string: "IV" },
        { value: 5, string: "V" },
        { value: 9, string: "IX" },
        { value: 10, string: "X" },
        { value: 40, string: "XL" },
        { value: 50, string: "L" },
        { value: 90, string: "XC" },
        { value: 100, string: "C" },
        { value: 400, string: "CD" },
        { value: 500, string: "D" },
        { value: 900, string: "CM" },
        { value: 1000, string: "M" }
    ];

    let finString = "";

    for (let i = 12; i >= 0; i--) {
        const arrRomDecVal = arrRomDec[i].value;
        while (inputParse >= arrRomDecVal) {
            inputParse -= arrRomDecVal;
            finString += arrRomDec[i].string;
        }
    }
    return finString;
}

convertBtn.addEventListener("click", checkUserInput);
//convertBtn.addEventListener("click", checkUserInput);
