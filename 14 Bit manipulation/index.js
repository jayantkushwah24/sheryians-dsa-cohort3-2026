// bit manipulation

// 1. check if the number is even or odd
function isEven(num) {
  return (num & 1) === 0;
}
function isOdd(num) {
  return (num & 1) === 1;
}

// 2. check if the number is a power of 2
function isPowerOfTwo(num) {
  return (num & (num - 1)) === 0 && num !== 0;
}
// 3. count the number of set bits in a number
function countSetBits(num) {
  let count = 0;
  while (num) {
    count += num & 1;
    num >>= 1;
  }
  return count;
}
// 4. get the value of the bit at a specific position
function getBit(num, pos) {
  return (num >> pos) & 1;
}
// 5. set the bit at a specific position
function setBit(num, pos) {
  return num | (1 << pos);
}
// 6. clear the bit at a specific position
function clearBit(num, pos) {
  return num & ~(1 << pos);
}
// 7. toggle the bit at a specific position
function toggleBit(num, pos) {
  return num ^ (1 << pos);
}
// 8. check if the bit at a specific position is set
function isBitSet(num, pos) {
  return (num & (1 << pos)) !== 0;
}
// 9. check if the bit at a specific position is clear
function isBitClear(num, pos) {
  return (num & (1 << pos)) === 0;
}
// 10. get the value of the least significant bit
function getLSB(num) {
  return num & -num;
}
// 11. get the value of the most significant bit
function getMSB(num) {
  let msb = 0;
  while (num > 0) {
    num >>= 1;
    msb++;
  }
  return 1 << (msb - 1);
}
// 12. reverse the bits of a number
function reverseBits(num) {
  let result = 0;
  for (let i = 0; i < 32; i++) {
    result <<= 1;
    result |= num & 1;
    num >>= 1;
  }
  return result;
}
// 13. swap two numbers using XOR
function swap(a, b) {
  a ^= b;
  b ^= a;
  a ^= b;
  return [a, b];
}

// 14. find the single number in an array where every other number appears twice
function singleNumber(nums) {
  let result = 0;
  for (let num of nums) {
    result ^= num;
  }
  return result;
}

// 15. find the missing number in an array of n-1 numbers where every number is between 1 and n
function missingNumber(nums) {
  let n = nums.length + 1;
    let total = (n * (n + 1)) / 2;
    for (let num of nums) {
        total -= num;
    }
    return total;
}   
