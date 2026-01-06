import { solveLinearEquation } from "./functions/solveLinearEquation.js";
import { solveQuadraticEquation } from "./functions/solveQuadraticEquation.js";

(async () => {
  try {
    const a = 1,
      b = -5,
      c = 6;
    const quadraticEquation = await solveQuadraticEquation(a, b, c);
    console.log(
      "The Solution of the Quadratic equation is:",
      quadraticEquation
    );

    const d = 0,
      e = 3;
    const linearEquation = await solveLinearEquation(d, e);
    console.log("The Solution of the Linear equation is:", linearEquation);
  } catch (error) {
    console.log("Error:", error.message);
  }
})();
