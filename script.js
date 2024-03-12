const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const resultDiv = document.getElementById("result");


// Clean the input string
function cleanInput(str) {
    const regex = /[^a-zA-Z0-9]/g;
    const cleanStr = str.replace(regex, '');
    return cleanStr.toLowerCase();
}

// Check if the string is a palindrome
function isPalindrome(str) {
    return str === str.split('').reverse().join('');
}

// Function to handle the palindrome check
function palindromeChecker() {
    const inputString = textInput.value.trim();
    // trim removes white spaces
    if (inputString === '') {
        alert('Please input a value');
        return;
    }
    
    // Clean the input
    const cleanedAndNormalizedStr = cleanInput(inputString);
    
    // Check if it's a palindrome
    if (isPalindrome(cleanedAndNormalizedStr)) {
        resultDiv.textContent = `${inputString} is a palindrome!`;
    } else {
        resultDiv.textContent = `${inputString} is not a palindrome.`;
    }
}

// Event listener for the check button
checkButton.addEventListener('click', palindromeChecker);