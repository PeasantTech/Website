//
/*
const testCaseBase = "abcd 1234 !@#$ $#@! 4321 DCBA";
console.log("testCaseBase: " + testCaseBase);
const testCaseEmpty = "";
console.log("Empty: " + testCaseEmpty);
const testCaseLower = testCaseBase.toLowerCase();
console.log("lower: " + testCaseLower);
const testCaseRemoved = removeNonChar(testCaseLower);
console.log("Removed: " + testCaseRemoved);
*/
/*
const testCaseChecked = checkPalindrome(testCaseEmpty);
console.log("Checked: " + testCaseChecked);
*/


//Real vars for final build
const inputText = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const resultText = document.getElementById("result");
const resultPText = document.getElementById("result-title");

//other vars
let palCheck;

function removeNonChar(testCase) {
  const regex = /[^a-zA-Z0-9]/g;
  return testCase.replace(regex, '');
};

function checkPalindrome() {
  //console.log("held: " + hold);
  const hold = inputText.value;
  //console.log("held: " + hold);
  console.log("click");
  
  const palString = removeNonChar(inputText.value).toLowerCase();
  const stringLen = palString.length-1;

  console.log(palString);

  for (let counter = 0; counter <= stringLen; counter++){
    console.log(`${palString.charAt(counter)} =?= ${palString.charAt(stringLen-counter)}`);
    if (palString.charAt(counter) !== (palString.charAt(stringLen-counter))){
      resultPText.style.display = "none";
      resultText.style.display = "block";
      resultText.innerHTML = `${hold} is not a palindrome`;
      return;
    } else {
      resultPText.style.display = "none";
      resultText.style.display = "block";
      resultText.innerHTML = `${hold} is a palindrome`;
    }
  }//end for
  if (inputText.value === ""){
    alert("Please input a value");
    return;
  }
};

checkBtn.addEventListener("click", checkPalindrome);
