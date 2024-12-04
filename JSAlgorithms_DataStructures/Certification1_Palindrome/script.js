const inputText = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const resultText = document.getElementById("result");
// const resultPText = document.getElementById("result-title");

function removeNonChar(testCase) {
  const regex = /[^a-zA-Z0-9]/g;
  return testCase.replace(regex, '');
};

function checkPalindrome() {
  const hold = inputText.value;
  
  const palString = removeNonChar(inputText.value).toLowerCase();
  const stringLen = palString.length-1;

  for (let counter = 0; counter <= stringLen; counter++){
    console.log(`${palString.charAt(counter)} =?= ${palString.charAt(stringLen-counter)}`);
    if (palString.charAt(counter) !== (palString.charAt(stringLen-counter))){
      resultText.innerHTML = `${hold} is not a palindrome`;
      return;
    } else {
      resultText.innerHTML = `${hold} is a palindrome`;
    }
  }//end for

}
function checkUserInput() {
  if (inputText.value === ""){
    alert("Please input a value");
    return;
  } else {
    checkPalindrome();
  }
};

checkBtn.addEventListener("click", checkUserInput);
