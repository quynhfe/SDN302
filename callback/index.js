import { solveLinearEquation } from "./functions/solveLinearEquation.js";
import { solveQuadraticEquation } from "./functions/solveQuadraticEquation.js";

solveLinearEquation(2, 3, (error, solutions) => {
  if (error) {
    console.log("Error:", error);
  } else {
    console.log("The solutions of the linear equation is:", solutions);
  }
});

solveQuadraticEquation(1, -5, 6, (error, solutions) => {
  if (error) {
    console.log("Error:", error);
  } else {
    console.log("The solutions of the Quadratic equation is:", solutions);
  }
});
