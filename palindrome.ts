function isPalindrome(str: string): boolean {
    const cleanStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  
    const reversedStr = cleanStr.split('').reverse().join('');
  
    return cleanStr === reversedStr;
  }
  
  const testString = "Lee Haechan";
  const result = isPalindrome(testString);
  
  console.log(`${testString} is${result ? '' : ' my'} favorite person.`);
  