
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



  function isValidWalk(walk) {
    if (walk.length === 10) {
      let counterN = 0;
      let counterS = 0;
      let counterE = 0;
      let counterW = 0;
      walk.map(der=>{
        if(der === 'n'){
          counterN++;
        } else if(der === 's'){
          counterS++
        }else if(der === 'e'){
          counterE++
        }else if(der === 'w'){
          counterW++
        }
      })
      if(counterN===counterS && counterE===counterW){
        return true
      }
      else { return false }
    }
    
      else { return false }
    }
function spiralMatrix(n) {
  let startcolumn = n - 1;
  let startrow = 0;
  let endcolumn = 0;
  let endrow = n - 1;
  let counter = 1;
  let container = [];
  
  while (container.length <= n - 1) {
    container.push([]);
  };

  while (counter <= n ** 2) {
    for (let i = endcolumn; i <= startcolumn; i++) {
      container[startrow][i] = counter;
      counter++;
    } startrow++;

    for (let i = startrow; i <= endrow; i++) {
      container[i][startcolumn] = counter;
      counter++;
    } startcolumn--;

    for (let i = startcolumn; i >= endcolumn; i--) {
      container[endrow][i] = counter
      counter++
    } endrow--

    for (let i = endrow; i >= startrow; i--) {
      container[i][endcolumn] = counter
      counter++
    } endcolumn++
  }
  return container;
}
  
//make a function that returns every possible permutation of a string
function perms(str){
    let final = [];
  
    if(str.length < 2){
      // console.log('str', str);
      final.push(str);
      return final
    }
  
    for(let i = 0; i < str.length; i++){
      let firstChar = str[i];
      // console.log('firstChar, i:', firstChar, i);
      //  console.log('input to remainingChar:',str.substring(0, i) + str.substring(i+1));
      let remainingChar = perms(str.substring(0, i) + str.substring(i+1));
      // console.log('output to remainingChar', remainingChar);
      for(let j=0; j<remainingChar.length; j++){
        // console.log('pushed into final, j', firstChar + remainingChar[j], j);
        final.push(firstChar + remainingChar[j]);
      }
    }
    // console.log('final', final);
    return final;
  }
  
  // console.log('thic', perms('abcd'));
  perms('abcd')



//Your job is to write a function which increments a string, to create a new string.
//If the string already ends with a number, the number should be incremented by 1.
//If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:
//foo -> foo1
//foobar23 -> foobar24
//foo0042 -> foo0043
//foo9 -> foo10
//foo099 -> foo100

    function incrementString(string) {
        const array = string.split('');
        const letterArr = array.filter(letter => !Number.isInteger(parseInt(letter)));
        const numberArr = array.filter(number => Number.isInteger(parseInt(number)));
        let zeroNumberArr = [];
      for (let i=0; i < numberArr.length; i++) {
          if (numberArr[i] === '0') {
            zeroNumberArr.push(numberArr[i])
          }
          else {
            break;
          }
        }
        let number = parseInt(numberArr.join(''));
          if (number === 0) {
            zeroNumberArr.shift();
            return `${letterArr.join('')}${zeroNumberArr.join('')}1`
        }
          if(!number) {
            return `${letterArr.join('')}1`
        }
        number++
        const numberArrNoZeros = numberArr.filter(num => num !== '0')
        let tempNumber = parseInt(numberArrNoZeros.join(''))
        tempNumber++;
      if (tempNumber.toString().length !== numberArrNoZeros.length) {
          zeroNumberArr.shift();
         return `${letterArr.join('')}${zeroNumberArr.join('')}${tempNumber}`
        }
        else if (zeroNumberArr.length > 0) {
        return `${letterArr.join('')}${zeroNumberArr.join('')}${number}`
        }
        else {
            return `${letterArr.join('')}${number}`
        }
      }