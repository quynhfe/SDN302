import { solveLinearEquation } from "./solveLinearEquation.js";

export const solveQuadraticEquation = (a, b, c, callback) => {
  if (a === 0) return solveLinearEquation(b, c, callback);
  const delta = b * b - 4 * a * c;
  if (delta < 0) {
    callback("The equation has no real solutions.", null);
  } else if (delta === 0) {
    let x = -b / (2 * a);
    callback(null, [x.toFixed(2)]);
  } else {
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);
    callback(null, [x1.toFixed(2), x2.toFixed(2)]);
  }
};
