function palindrome(str) {
	//lowercase the string and use a regular expression to remove unwanted characters
	var re = /[^A-Za-z0–9]/g;
	var reverseStr = lowRegStr.split('').reverse().join('');
	return reverseStr === lowRegStr;
}

palindrome("tacocat");