
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
  



  function reverseWords(string) {
    const stringArr = string.split('');
    let counter = 0;
    let regWord = '';
    let revWord = '';
    let finalArr = [];
    console.log(finalArr);
    for (let letter of stringArr) {
      if (letter === ' ') {
        if (counter >= 5) {
          revWord += letter
          finalArr.push(revWord);
          console.log(revWord);
          revWord = '';
          regWord = '';
          counter === -1;
        }
      }
      else {
        finalArr.push(regWord)
        regWord = '';
        revWord = '';
      }
      if (finalArr.join('').length + regWord === string.length - 1) {
        finalArr.push(regWord);
      }
      if (finalArr.join('').length + revWord === string.length - 1) {
        finalArr.push(revWord);
      }
      regWord += letter;
      revWord = letter + revWord;
      counter++;
    }
    console.log('final', finalArr.join(' '));
    return finalArr.join(' ');
  }
  const string = 'a dog named Roverdog ran for President';
  reverseWords(string);

  


function reverseWords(string) {
    const stringArr = string.split('');
    let counter = 0;
    let regWord = '';
    let revWord = '';
    let finalArr = [];
    for (let letter of stringArr) {
      if (letter === ' ') {
        if (counter >= 5) {
          revWord += letter
          finalArr.push(revWord);
          revWord = '';
          regWord = '';
          counter = -1;
        }
        else {
          regWord += letter;
          finalArr.push(regWord);
          regWord = '';
          revWord = '';
          counter = -1;
        }
      }
   
    if (finalArr.join('').length + revWord.length === string.length) {
      if (regWord.length <= 5) {
         finalArr.push(regWord);
      }
      else {
        finalArr.push(revWord)
      }
    }
      regWord += letter;
      revWord = letter + revWord;
      counter++;
    }
    return finalArr.join(' ');
  }
  const string = 'a dog named Roverdog ran for President things';
  reverseWords(string);
  


function spinWords(string) {
    const stringArr = string.split('');
    let regWord = '';
    let revWord = '';
    let finalArr = [];
    for (let letter of stringArr) {
      if (letter === ' ') {
        if (revWord.length < 5) {
          finalArr.push(regWord);
        }
        else {
          finalArr.push(revWord);
        }
        revWord = '';
        regWord = '';
    } else {
        regWord += letter;
        revWord = letter + revWord;
      }
      if (finalArr.join(' ').length + revWord.length === string.length - 1) {
        if (revWord.length < 5) {
          finalArr.push(regWord);
        } else {
          finalArr.push(revWord);
        }
      }
    }
    return finalArr.join(' ');
  }