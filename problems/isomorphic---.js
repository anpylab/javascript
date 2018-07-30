 function isIsomorphic(source, target) {
     if (source.length != target.length) {
         return false;
     }
     const sourceMap = {};
     const targetMap = {};
     const sourceLen = source.length;
     for (let i = 0; i < sourceLen; i++) {
         let sc = source.charAt(i);
         let tc = target.charAt(i);
         if (sourceMap[sc] === undefined && targetMap[tc] === undefined) {
             sourceMap[sc] = tc;
             targetMap[tc] = sc;
         } else if (sourceMap[sc] !== tc) {
             return false;
         }
     }
     return true;
 }


 /**
        return inputArray.reduce((groups, word) => {
          let len = word.split('').filter((char, i, charArr) => {
              return charArr.indexOf(char) === i;
          }).length;
          groups[len] = groups[len] || [];
          groups[len].push(word);
          return groups;
      }, {});
  */
 function findIsomorphs(inputArray) {
     let out = [];
     let len = inputArray.length;
     for (let i = 0; i < len; i++) {
         for (let j = 1; j < (len - i); j++) {
             if (!isIsomorphic(inputArray[j - 1], inputArray[j])) {
                 out.push(inputArray[i]);
             }
         }
     }
     return out;
 }

 function filterIsomorphsWord(cb) {
     let newArr = [];
     for (let i = 0; i < this.length; i++) {
         if (cb.call(this[i], i, this)) {
             newArr.push(this[i]);
         }
     }
     return newArr;

 };

 function groupByUniCharArray(inputArray) {
     let groups = {};
     inputArray.forEach(word => {
         let len = word.split('').filter((char, i, charArr) => {
             return charArr.indexOf(char) === i;
         }).length;
         let key = "key_" + word.length + "_" + len;
         groups[key] = groups[key] || [];
         groups[key].push(word);
     });
     return groups;
 }

 function findWords(ar) {
     let len = ar.length;
     return ar.filter((word, i, ar) => {
         let index = i + 1;
         console.log(index,len)
         if (index == len) {
             return false;
         } else {
             return isIsomorphic(word, ar[index]);
         }
     });
 }

 function findIsomorphs(inputArray) {
     let out = [];
     let groups = groupByUniCharArray(inputArray);
     for (let key in groups) {
        out.push(findWords(groups[key]));
     }
     console.log(out);
 }
 const inputArray = ['abba', 'deed', 'zxxz', 'aaa', 'bbb', 'asdf', 'qwer'];
 //const inputArray = ['zzxx', 'abab', 'abba', 'deed', 'zxxz', 'aaa', 'bbb', 'asdf', 'qwer'];
 console.log(findIsomorphs(inputArray));

 /**
  *   console.log(groups[key].sort((a, b) => {
             if (isIsomorphic(a, b)) {
                 return -1;
             } else {
                 return 1;
             }
         }));
  */