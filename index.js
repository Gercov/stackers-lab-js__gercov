import { f1 } from "./task_1/index.js";
import { f2 } from "./task_2/index.js";
import { f3 } from "./task_3/index.js";

/** Task 1 */
console.log(
  `Task 1: ${f1([4, 6, 9, 1, 3])}`
);


/** Task 3 */
console.log(
  `Task 2: ${f2([19, 5, 42, 2, 77])}`
);


/** Task 3 */
console.log(
  `Task 3:
  +: ${f3('+', 4, 7)}
  -: ${f3('-', 7, 4)}
  *: ${f3('*', 5, 5)}
  /: ${f3('/', 25, 5)}
  `
);
