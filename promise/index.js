import { solveLinearEquation } from "./functions/solveLinearEquation.js";
import { solveQuadraticEquation } from "./functions/solveQuadraticEquation.js";

const a = 1,
  b = -5,
  c = 6;

solveQuadraticEquation(a, b, c)
  .then((result) => {
    console.log("The solutions of the Quadratic equation is: ", result);
  })
  .catch((error) => {
    console.log("Error: ", error);
  });

const d = 0,
  e = 3;

solveLinearEquation(d, e)
  .then((result) => {
    console.log("The solution of the Linear equation is: ", result);
  })
  .catch((error) => {
    console.log("Error: ", error);
  });
