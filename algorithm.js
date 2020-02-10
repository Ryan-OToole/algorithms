
function reverseWords(string) {
    const stringArr = string.split('');
    let newArr = [];
    let newWord = '';
    for (let letter of stringArr) {
      console.log(newArr.join('').length + newWord.length);
      if (letter === ' ') {
        newWord += ' '
        newArr.push(newWord);
        newWord = '';
      }
      else if (newArr.join('').length + newWord.length === string.length - 1 ) {
        newWord = letter + newWord;
        newArr.push(newWord);
        }
      else {
        newWord = letter + newWord;
  
      }
    }
    return newArr.join(' ');
  };
  const string = 'a dog is a god';
  reverseWords(string);
  