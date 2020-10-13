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
console.log(
  "longest common prefix: ",
  longestCommonPrefix(["flower", "flow", "flight"])
);

/*Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
An input string is valid if:
st be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Input: s = "()[]{}"
Output: true*/

const isValid = (s) => {
  const stack = [];
  let n = stack.length;
  if (s.length % 2 !== 0) {
    return false;
  }
  for (let i = 0; i < s.length; i++) {
    let symbol = s[i];
    if (symbol === "{" || symbol === "[" || symbol === "(") {
      stack.push(symbol);
      n = stack.length;
    } else if (symbol === "}" || symbol === "]" || symbol === ")") {
      stack.unshift(symbol);
      n = stack.length;
    }
    if (
      (symbol === "}" && stack[n - 1] === "{") ||
      (symbol === "]" && stack[n - 1] === "[") ||
      (symbol === ")" && stack[n - 1] === "(")
    ) {
      stack.pop();
      stack.shift();
      n = stack.length;
    }
  }
  if (n) {
    return false;
  }
  return true;
};
console.log("is valid: ", isValid("([}}])"));

/*Merge two sorted linked lists and return it as a new sorted list. The new list should be made by splicing together the nodes of the first two lists.
Input: l1 = [1,2,4], l2 = [1,3,4]
Output: [1,1,2,3,4,4]
-100 <= Node.val <= 100*/

function LinkedList() {
  this.head = null;
  this.length = 0;

  function Node(data) {
    this.data = data;
    this.next = null;
  }

  this.add = (data) => {
    this.head = this.addNode(this.head, data);
    this.length++;
  };

  this.addNode = (node, data) => {
    if (node === null) {
      node = new Node(data);
    } else {
      node.next = this.addNode(node.next, data);
    }
    return node;
  };
};

const addFromArrToList = (arr) => {
  let list = new LinkedList();
  arr.forEach((el) => {
    list.add(el);
  });
  return list;
};

const mergeTwoList = (l1, l2) => {
  l1 = addFromArrToList(l1);
  l2 = addFromArrToList(l2);
  let l3 = new LinkedList();
  l3.add(-101);

  let n1 = l1.head;
  let n2 = l2.head;
  let n3 = l3.head;

  if (n1 === null) {
    return l2;
  }

  if (n2 === null) {
    return l1;
  }

  while (n1 !== null && n2 !== null) {

    if (n2.data <= n1.data) {
      let temp = n2.next;
      n3.next = n2;
      n2 = temp;
    } else {
      let temp = n1.next;
      n3.next = n1;
      n1 = temp;
    }
    n3 = n3.next;

  }

  if (n1 === null) {
    n3.next = n2;
  }
  if (n2 === null) {
    n3.next = n1;
  }

  return l3.head.next;
};
console.log('merged sorted list: ', mergeTwoList([1, 2, 3], [1, 2, 4]));

/*Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.
Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory. 

Given nums = [1,1,2],
Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.
It doesn't matter what you leave beyond the returned length.
*/

const removeDuplicates = (nums) => {
  let poz = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i+1]) {
      nums[poz] = nums[i];
      poz++;
    }
  }
  nums.length = poz;
  return nums.length;
};
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));