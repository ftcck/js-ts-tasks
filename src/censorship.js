/**
 * Write a function which returns a function to replace forbidden words in string by * symbols
 * Array 'forbidden' is specifying the words you have to detect and replace by *
 * Amount of * symbols should be equal word length (words and spaces between them if there are many words)
 *
 * ATTENTION: There might be one or several symbols '\n' or '\\n'.
 * That's a special symbol declaring a new line and should stay in a final string.
 *
 * Example:
 * forbidden = ['ship', 'blow', 'blew up']
 * str = 'There once was a ship that put to sea\nThe name of the ship was the Billy of Tea\nThe winds blew up, her bow dipped down\nOh blow, my bully boys, blow (huh)'
 * str = 'There once was a **** that put to sea\nThe name of the **** was the Billy of Tea\nThe winds *******, her bow dipped down\nOh ****, my bully boys, **** (huh)'
 * @param {Array} forbidden
 * @returns {function}
 */
module.exports.censorship = function censorship(forbidden) {
  function censorship1(text) {
    {
      let result = text; // 1. Инициализация переменной result исходным текстом

      let indexToSearchFrom;
      for (const banword of forbidden) {
        // 2. Цикл по всем запрещенным словам

        let indexOfBanword = result.indexOf(banword); // 3. Поиск первого вхождения banword в result
        while (indexOfBanword !== -1) {
          // 4. Цикл while выполняется, пока banword находится в result (index не равен -1)
          const starReplacement = '*'.repeat(banword.length); // 5. Создание строки замены из символов '*'
          result = result.substring(0, indexOfBanword) + starReplacement + result.substring(indexOfBanword + banword.length); // 6. Замена banword на replacement
          indexToSearchFrom = indexOfBanword + starReplacement.length;
          indexOfBanword = result.indexOf(banword, indexToSearchFrom); // 7. Поиск следующего вхождения banword, начиная с позиции после замены
        }
      }
      return result;
    }
  }
  return censorship1;
};
