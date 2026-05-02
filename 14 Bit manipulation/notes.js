# Bit Manipulation in JavaScript 

## 1. Why Bit Manipulation Matters

Bit manipulation is not about memorizing tricks — it's about understanding how data is represented at the lowest level. It gives you:

* Constant-time optimizations
* Space-efficient solutions
* Elegant solutions to tricky problems

If you ignore this topic, you're voluntarily handicapping yourself in interviews.

---

## 2. Number Representation in JavaScript

JavaScript uses **64-bit floating point (IEEE 754)** for numbers, BUT:

👉 Bitwise operations convert numbers to **32-bit signed integers**.

### Key implications:

* Range: **-2^31 to 2^31 - 1**
* Decimal parts are truncated
* Operates in **two’s complement form**

---

## 3. Core Bitwise Operators

| Operator             | Symbol | Meaning                          |                               |
| -------------------- | ------ | -------------------------------- | ----------------------------- |
| AND                  | &      | Sets bit to 1 if both bits are 1 |                               |
| OR                   |        |                                  | Sets bit to 1 if any bit is 1 |
| XOR                  | ^      | Sets bit to 1 if bits differ     |                               |
| NOT                  | ~      | Inverts bits                     |                               |
| Left Shift           | <<     | Shift bits left                  |                               |
| Right Shift          | >>     | Signed right shift               |                               |
| Unsigned Right Shift | >>>    | Zero-fill right shift            |                               |

---

## 4. Binary Fundamentals You MUST Know

### Even / Odd Check

```js
n & 1
```

* 0 → even
* 1 → odd

---

### Multiply / Divide by 2

```js
n << 1   // multiply by 2
n >> 1   // divide by 2
```

---

### Check if ith bit is set

```js
(n >> i) & 1
```

---

### Set ith bit

```js
n | (1 << i)
```

---

### Clear ith bit

```js
n & ~(1 << i)
```

---

### Toggle ith bit

```js
n ^ (1 << i)
```

---

## 5. Two’s Complement (Critical Concept)

To get negative of a number:

```js
~n + 1
```

Example:

```
5  -> 00000101
~5 -> 11111010
+1 -> 11111011 (-5)
```

👉 This is why:

```js
~n === -(n + 1)
```

---

## 6. Important Patterns (Interview Gold)

### 1. Check if power of 2

```js
(n & (n - 1)) === 0
```

👉 Works because power of 2 has only ONE set bit.

---

### 2. Count set bits (Hamming Weight)

#### Naive:

```js
let count = 0;
while (n) {
  count += n & 1;
  n >>= 1;
}
```

#### Brian Kernighan’s Algorithm (IMPORTANT)

```js
let count = 0;
while (n) {
  n = n & (n - 1);
  count++;
}
```

👉 Removes lowest set bit each iteration.

---

### 3. Find single number (others appear twice)

```js
let res = 0;
for (let num of arr) {
  res ^= num;
}
```

👉 XOR cancels duplicates.

---

### 4. Find two unique numbers

```js
let xor = 0;
for (let num of arr) xor ^= num;

let diffBit = xor & -xor;

let a = 0, b = 0;
for (let num of arr) {
  if (num & diffBit) a ^= num;
  else b ^= num;
}
```

---

### 5. Subsets using Bitmasking

```js
for (let mask = 0; mask < (1 << n); mask++) {
  let subset = [];
  for (let i = 0; i < n; i++) {
    if (mask & (1 << i)) {
      subset.push(arr[i]);
    }
  }
}
```

👉 Each number represents a subset.

---

### 6. Missing Number (0 to n)

```js
let xor = 0;
for (let i = 0; i <= n; i++) xor ^= i;
for (let num of arr) xor ^= num;
```

---

### 7. Fast Exponentiation

```js
function power(a, b) {
  let res = 1;
  while (b > 0) {
    if (b & 1) res *= a;
    a *= a;
    b >>= 1;
  }
  return res;
}
```

---

## 7. Advanced Tricks (High ROI)

### 1. Extract lowest set bit

```js
n & -n
```

---

### 2. Remove lowest set bit

```js
n & (n - 1)
```

---

### 3. Check if bits differ at same position

```js
(a ^ b)
```

---

### 4. Swap without temp (avoid in real code)

```js
a ^= b;
b ^= a;
a ^= b;
```

---

## 8. JavaScript-Specific Pitfalls

### 1. Numbers become 32-bit signed

```js
(1 << 31) // negative number
```

---

### 2. Unsigned shift for large numbers

```js
n >>> 0
```

👉 Converts to unsigned 32-bit integer.

---

### 3. Bitwise on large numbers (danger)

* JS loses precision beyond 2^53
* Bitwise truncates to 32-bit

---

## 9. Common Interview Problems

You MUST practice these:

* Single Number (LeetCode 136)
* Counting Bits (338)
* Missing Number (268)
* Subsets (78)
* Maximum XOR of Two Numbers
* Bitwise AND of Range
* Power of Two

---

## 10. Mental Models

* Bits = independent switches
* XOR = difference detector
* AND = filter
* OR = builder

---

## 11. What Interviewers Actually Test

They are NOT testing syntax.

They are testing:

* Pattern recognition
* Ability to reduce complexity
* Understanding of binary representation

If you can’t explain WHY a trick works, you don’t know it.

---

## 12. Final Advice

* Don’t memorize — derive
* Practice writing binary manually
* Solve problems under time pressure
* Focus on patterns, not isolated tricks

If you skip this topic, someone else won’t — and they’ll take your offer.

---

## 13. Quick Revision Sheet

```js
// even/odd
n & 1

// power of 2
n & (n - 1)

// set bit
n | (1 << i)

// clear bit
n & ~(1 << i)

// toggle bit
n ^ (1 << i)

// remove lowest set bit
n & (n - 1)

// extract lowest set bit
n & -n
```

---

End of Notes.
