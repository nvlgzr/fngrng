    // returns the index of the nth occurance of a char or string
    export function getPosition(target, subString, n) {
      return target.split(subString, n).join(subString).length;
    }