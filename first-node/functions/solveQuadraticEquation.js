import { solveLinearEquation } from "./solveLinearEquation.js";

export const solveQuadraticEquation = (a, b, c) => {
  const delta = b * b - 4 * a * c;
  if (a === 0) return solveLinearEquation(b, c);
  if (delta < 0) {
    return "The equation has no real solutions";
  } else if (delta === 0) {
    let x = -b / (2 * a);
    return [x.toFixed(2)];
  } else {
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);
    return [x1.toFixed(2), x2.toFixed(2)];
  }
};
