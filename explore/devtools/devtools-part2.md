# DevTools Part 2 - Debugging

Site: https://cse110-sp26.github.io/Lab4_Hosted/

## Required screenshots
- `expand/screenshots/result-calculateSum.png`
- `expand/screenshots/result-dataType.png`
- `expand/screenshots/fix.png`

## Debug steps I performed
1. Opened the site and DevTools.
2. Opened `Sources`.
3. Found the JavaScript file containing `calculateSum()`.
4. Added a breakpoint at the initialization of local variable `result`.
5. Triggered the function from the page to hit the breakpoint.
6. Added watch expressions:
   - `num1`
   - `num2`
   - `typeof result`
7. Identified the bug and tested a fix.

## Answers
### What was the bug?
The bug was a **type mismatch**. `num1` and `num2` were read from input fields as **strings**, so `calculateSum(num1, num2)` used `+` for **string concatenation** (e.g., `"2" + "3" = "23"`) instead of numeric addition.

### How would you fix it?
Convert both inputs to numbers before adding. For example:
`let result = Number(num1) + Number(num2);`
(Using `parseInt`/`parseFloat` would also work.)

### Verification
Tested with input values `2` and `3`.
- Before fix: output showed `Sum: 23`.
- After fix: output showed `Sum: 5`.
This confirms the calculation now performs numeric addition correctly.
