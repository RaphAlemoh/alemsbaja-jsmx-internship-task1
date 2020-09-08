function toLowerCase(str) {
    return str.split(' ').map(function(word) {
      return (word.toLowerCase());
    }).join(' ');
}

function titleCase(str) {
    return str.split(' ').map(function(word) {
      return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
}

string_to_array = function (str) {
    return str.trim().split(" ");
};

function confirmEndingofString(string) {
    let target = "ing";
    return  (string.substr(-target.length) === target) ? true : false;
}

function searchResult(sentence_to_search) {    
    return sentence_to_search.filter(confirmEndingofString);
}   

function palindromeChecker(str) {
    let  re = /[\W_]/g;
    let lowRegStr = str.toLowerCase().replace(re, '');
    let reverseStr = lowRegStr.split("").reverse().join(''); 
    return  (reverseStr === lowRegStr) ? true : false;
}

function palindromeResult(titleCaseStr) {    
    return titleCaseStr.filter(palindromeChecker);
}


let sentence = "maDam aYO Who Stays In oYo Was in a Bus to Lagos whEn Her Son Sold the rAceCar";

swapLetterCase = function swapLetterCase(str) {
  let reveresedUpperCase =  str.replace(/([a-z]+)|([A-Z]+)/g, function(match, chr) {
       return  chr ? match.toUpperCase() : match.toLowerCase();
    });

    let lowerCaseStr = toLowerCase(reveresedUpperCase);

    let titleCaseWord = titleCase(lowerCaseStr);

    let new_word = string_to_array(reveresedUpperCase);

    let withEndingStr = searchResult(new_word);

    let word_array_for_palindrome = string_to_array(titleCaseWord);

    let palindrome =  palindromeResult(word_array_for_palindrome);

    let result = {
            'uppercase' : reveresedUpperCase,
            'ing' : withEndingStr,
            'palindrome': palindrome,
        }

    return result;
}


swapLetterCase(sentence);