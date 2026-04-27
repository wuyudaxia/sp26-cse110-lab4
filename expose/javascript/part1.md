# Part 1 - Variables & Scoping

## 1
Line 9 prints `values added: 20` because `add` is `true`, so the `if` block runs and `result = num1 + num2 = 20`.

## 2
Line 13 prints `final result: 20`. There is no error because `result` is declared with `var`, which is function-scoped, so it is still available after the `if` block.

## 3
You should avoid `var` because it is function-scoped instead of block-scoped, which can cause variables to leak outside blocks. It also allows redeclaration and has hoisting behavior, both of which can lead to confusing bugs.

## 4
Line 9 prints `values added: 20` because `add` is `true`, so the `if` block runs and `result` is computed as `10 + 10 = 20`.

## 5
Line 13 throws a `ReferenceError` (`result is not defined`). `result` is declared with `let`, which is block-scoped, so it only exists inside the `if` block and cannot be accessed outside it.

## 6
Nothing is printed by line 9. The script throws a **`TypeError`** at **line 7** first (`Assignment to constant variable`). Line 7 tries to assign `num1 + num2` to `result`, but `result` was declared with **`const`** and cannot be reassigned after its initial value (`0`). Execution never reaches line 9.

## 7
Nothing is printed by line 13 either. Execution already stopped at line 7 with the **`TypeError`** above. If line 7 did not exist, line 13 would still be invalid because `result` is **`const`** and **block-scoped** like **`let`**, so it would not exist outside the `if` block (that would cause a **`ReferenceError`** instead).
