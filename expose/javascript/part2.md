# Part 2 - Variables, Types, Operators, Loops, Functions

## 1
Line **12** prints **`3`** to the console. There is **no error**.

The loop declares `for (var i = 0; ...`. Because **`var`** is **function-scoped**, the variable **`i`** still exists **after** the loop finishes inside `discountPrices`. The array `[100, 200, 300]` has length **3**, so the loop runs for `i = 0, 1, 2`; then **`i`** becomes **3**, the condition **`i < prices.length`** (`3 < 3`) is **false**, and the loop stops. **`console.log(i)`** therefore logs the final value **3**.

## 2
Line **13** prints **`150`** to the console. There is **no error**.

`discountedPrice` is declared with **`var`** on line 7 inside the `for` loop. **`var`** is **function-scoped**, not block-scoped, so **`discountedPrice`** still exists **after** the loop ends and can be read at line 13. After three iterations (`i = 0, 1, 2`), the last assignment uses `prices[2]` (`300`), so `discountedPrice = 300 * (1 - 0.5) = 150`. That value remains when **`console.log(discountedPrice)`** runs.

## 3
Line **14** prints **`150`** to the console. There is **no error**.

`finalPrice` is declared with **`var`** on line 4 at the top of the function, so it exists for the whole function body. Inside the loop it is reassigned each iteration; after the loop finishes, it still holds the value from the **last** iteration (`i = 2`): `discountedPrice = 300 * (1 - 0.5) = 150`, and `finalPrice = Math.round(150 * 100) / 100 = 150`. **`console.log(finalPrice)`** therefore logs **150**.

## 4
The function **`return`s** the array **`[50, 100, 150]`**. There is **no error**.

For each price in **`[100, 200, 300]`** with **`discount = 0.5`**, the code computes `prices[i] * (1 - discount)` (half price), rounds to two decimals with **`Math.round(... * 100) / 100`**, and **`push`**es each value into **`discounted`**. So you get **`50`**, **`100`**, and **`150`** in order. (The caller on line 19 does not store that return value, but the function still evaluates to **`[50, 100, 150]`**.)

## 5
Line **12** throws a **`ReferenceError`** (for example: **`i is not defined`**). Nothing useful is printed before the error.

The loop declares **`for (let i = 0; ...)`**. **`let`** is **block-scoped**, so **`i`** only exists **inside** the `for` loop’s `{ ... }` (lines 6–10). Line **12** is **outside** that block, so **`i`** is not in scope there. **`console.log(i)`** therefore fails.

## 6
Line **13** throws a **`ReferenceError`** (for example: **`discountedPrice is not defined`**).

`discountedPrice` is declared with **`let`** on line **7** **inside** the `for` loop body. **`let`** is **block-scoped**, so `discountedPrice` only exists **inside** the loop’s `{ ... }` (lines 6–10). Line **13** is **outside** that block, so **`console.log(discountedPrice)`** references a variable that is **out of scope**.

## 7
Line **14** prints **`150`** to the console. There is **no error**.

`finalPrice` is declared with **`let`** on line **4** at the **top of the function**, so its scope is the **whole function body** (not just the loop). The loop **reassigns** `finalPrice` each time; after the last iteration (`prices[2] = 300`, discount `0.5`), **`finalPrice`** is **150**. Line 14 is still inside the same function block, so **`console.log(finalPrice)`** works and logs **150**.

## 8
The function **`return`s** the array **`[50, 100, 150]`**. There is **no error**.

Changing declarations from **`var`** to **`let`** does **not** change how the **`discounted`** array is built: each iteration computes a discounted value, rounds it, and **`push`**es it. With **`[100, 200, 300]`** and **`discount = 0.5`**, the results are **50**, **100**, and **150** in order. The **`console.log`** lines are commented out, so nothing throws at runtime.

## 9
Line **11** throws a **`ReferenceError`** (for example: **`i is not defined`**).

`i` is declared with **`let`** in the **`for`** loop header on line **6**. That binding is **scoped to the `for` loop** (it is **not** visible after the loop finishes). Line **11** is **outside** the loop, so **`console.log(i)`** tries to read a variable that **no longer exists** in that scope.

## 10
Line **12** prints **`3`** to the console. There is **no error**.

`length` is declared with **`const`** on line **4** at the **function** level: **`const length = prices.length`**. For the call **`discountPrices([100, 200, 300], 0.5)`**, the array has **3** elements, so **`length`** is **3**. Line 12 is still inside the same function, so **`console.log(length)`** can read it and logs **3**.

## 11
The function **`return`s** the array **`[50, 100, 150]`**. There is **no error**.

The loop runs once per price in **`[100, 200, 300]`**. Each time it computes **`discountedPrice = prices[i] * (1 - discount)`** with **`discount = 0.5`**, which halves each value (**50**, **100**, **150**), and **`push`**es it into **`discounted`**. **`const discounted = []`** only means you cannot reassign **`discounted`** to a different array; **`push`** still mutates that same array, which is allowed.

## 12

### Object Access

- a) Value of **`name`**: `student.name`
- b) Value of **`Grad Year`** (key has a space, use bracket notation): `student['Grad Year']`
- c) Call **`greeting`** (it is a function property): `student.greeting()`
- d) **`name`** inside **`Favorite Teacher`** (nested object with a string key): `student['Favorite Teacher'].name`
- e) First item (**index 0**) in **`courseLoad`**: `student.courseLoad[0]`

### Type Conversion

#### Arithmetic

- `'3' + 2`: **`'32'`**. With **`+`**, if any operand is a **string**, the other side is converted to a **string** and the values are **concatenated** ( **`2` → `'2'`** ).
- `'3' - 2`: **`1`**. With **`-`**, both sides are converted to **numbers** ( **`'3'` → `3`** ), then **`3 - 2`**.
- `3 + null`: **`3`**. **`null`** becomes **`0`** in **numeric** addition, so **`3 + 0`**.
- `'3' + null`: **`'3null'`**. Left side is a **string**, so **`+`** does **string concatenation**; **`null`** becomes **`'null'`**.
- `true + 3`: **`4`**. **`true`** becomes **`1`** in numeric addition, so **`1 + 3`**.
- `false + null`: **`0`**. **`false` → `0`**, **`null` → `0`** in numeric addition.
- `'3' + undefined`: **`'3undefined'`**. **String** + value → **`undefined`** is turned into **`'undefined'`** and concatenated.
- `'3' - undefined`: **`NaN`**. **`'3'` → `3`**, **`undefined` → `NaN`** in numeric subtraction, and **`3 - NaN`** is **`NaN`**.

#### Comparison

- `'2' > 1`: **`true`**. **`'2'`** is converted to the **number `2`**, then **`2 > 1`**.
- `'2' < '12'`: **`false`**. **Both** sides are **strings**, so **lexicographic** comparison is used. The first characters **`'2'`** and **`'1'`** satisfy **`'2' > '1'`**, so **`'2'`** is **not** less than **`'12'`**.
- `2 == '2'`: **`true`**. **`==`** allows **type coercion**; the string **`'2'`** becomes the number **`2`**, so **`2 == 2`**.
- `2 === '2'`: **`false`**. **`===`** requires **same type and value**; a **number** is not strictly equal to a **string**.
- `true == 2`: **`false`**. **`true`** coerces to **`1`** for **`==`**, and **`1 == 2`** is **false**.
- `true === Boolean(2)`: **`true`**. **`Boolean(2)`** is **`true`** (non‑zero numbers are truthy), and **`true === true`**.

#### `==` vs `===`

- **`==` (loose equality)**: compares values after applying **type coercion** if the types differ (can be surprising).
- **`===` (strict equality)**: compares **without** converting types; **`true`** only if **same type** and **same value** (usually safer and clearer).

## 17
**Result:** **`modifyArray` returns the new array `[2, 4, 6]`** (the line that calls it does not store that value, but the expression still evaluates to **`[2, 4, 6]`**).

**Walkthrough:**
1. **`modifyArray([1, 2, 3], doSomething)`** starts with **`newArr = []`**.
2. The loop runs for **`i = 0, 1, 2`**.
3. Each iteration does **`newArr.push(callback(array[i]))`**, where **`callback`** is **`doSomething`**.
4. **`doSomething(x)`** returns **`x * 2`**:
   - **`i = 0`**: **`doSomething(1)` → `2`**, push **`2`**
   - **`i = 1`**: **`doSomething(2)` → `4`**, push **`4`**
   - **`i = 2`**: **`doSomething(3)` → `6`**, push **`6`**
5. The function **`return`s** **`[2, 4, 6]`**.

So **`doSomething`** is used as a **callback**: **`modifyArray`** decides *when* to call it and *what argument* to pass, and collects the returned values into a new array.

## 19
**Console output order:** **`1`**, then **`4`**, then **`3`**, then **`2`** (with **`2`** appearing about **1 second** after the rest).

**Why:** Synchronous code runs first: **`console.log(1)`** runs immediately, then both **`setTimeout`** calls **schedule** their callbacks (they do **not** run yet), then **`console.log(4)`** runs. After the call stack is clear, the **timer / task queue** runs pending callbacks: the **`0 ms`** timeout logs **`3`** before the **`1000 ms`** timeout, which finally logs **`2`**.
