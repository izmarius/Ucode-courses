/*Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].*/

const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
};
console.log("toSum: ", twoSum([2, 9, 11, 7], 9));

const twoSumv2 = (nums, target) => {
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    let x = nums[i];
    if (arr.includes(target - x)) {
      return [arr.indexOf(target - x), i];
    }
    arr.push(x);
  }
  return [];
};

console.log("toSumV2: ", twoSumv2([2, 9, 7, 11], 9));

/*Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.
Follow up: Could you solve it without converting the integer to a string?
Input: x = 121
Output: true*/

const getArrayOfDigits = (num) => {
  let copyNum = num,
    digitArr = [];
  while (copyNum > 0) {
    digitArr.push(copyNum % 10);
    copyNum = Math.floor(copyNum / 10);
  }
  return digitArr;
};

const isPalindrome = (x) => {
  if (x < 0) {
    return false;
  }
  let digitArr = getArrayOfDigits(x);
  while (digitArr.length > 1) {
    if (digitArr.pop() !== digitArr.shift()) {
      return false;
    }
  }
  return true;
};
console.log("isPalindrome: ", isPalindrome(-1221));

const isPalindrome2 = (x) => {
  if (x < 0) {
    return false;
  }
  let numLength = x.toString().length;
  let numStr = x.toString();
  for (let i = 0; i < Math.floor(numLength / 2); i++) {
    let lasTDigit = x % 10;
    let firstDigit = parseInt(numStr.substr(0, 1));
    if (firstDigit !== lasTDigit) {
      return false;
    }
    numStr = numStr.substr(1, numStr.length + 1);
    x = Math.floor(x / 10);
  }
  return true;
};
console.log("isPalindrome2: ", isPalindrome2(1000030001));

/*Given a 32-bit signed integer, reverse digits of an integer.
Input: x = 123
Output: 321
*/

const reverse = (x) => {
  let reverseX =
    parseInt(x.toString().split("").reverse().join("")) * Math.sign(x);
  return reverseX > -Math.pow(2, 31) && reverseX < Math.pow(2, 31) - 1
    ? reverseX
    : 0;
};
console.log("reverse: ", reverse(-567));

/* Given a roman numeral, convert it to an integer. 
For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II. */

const romanNums = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
  IV: 4,
  IX: 9,
  XL: 40,
  XC: 90,
  CD: 400,
  CM: 900,
};

const romanToInt = (s) => {
  let arr = s.split("");
  let year = 0;
  let i = 0;
  while (i < arr.length) {
    if (romanNums[arr[i].concat(arr[i + 1])] !== undefined) {
      year += romanNums[arr[i] + arr[i + 1]];
      i += 2;
    } else if (romanNums[arr[i]] !== undefined) {
      year += romanNums[arr[i]];
      i++;
    }
  }
  return year;
};
console.log("roman to int: ", romanToInt("VIII"));

/* Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "". 
Input: strs = ["flower","flow","flight"]
Output: "fl"
*/

const longestCommonPrefix = (strs) => {
  if (!Array.isArray(strs) || !strs.length) {
    return "";
  }
  strs = strs.sort((a, b) => a.length - b.length);
  const shortStr = strs[0];
  let prefix = "";
  let result = "";
  for (let i = 0; i < shortStr.length; i++) {
    let count = 0;
    prefix += shortStr[i];
    for (let j = 0; j < strs.length; j++) {
      if (strs[j].search(prefix) === 0) {
        count++;
      }
    }
    if (count === strs.length) {
      result = prefix;
    }
  }
  return result;
};
console.log(longestCommonPrefix([]));
// longestCommonPrefix(["flower","flow","flight"])
