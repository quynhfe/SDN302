import { solveLinearEquation } from "./solveLinearEquation.js";

export const solveQuadraticEquation = (a, b, c) => {
  return new Promise((resolve, reject) => {
    if (a === 0) {
      solveLinearEquation(b, c)
        .then((result) => {
          resolve(result);
        })
        .catch((error) => {
          reject(error);
        });
    } else {
      const delta = b ** 2 - 4 * a * c;
      if (delta < 0) reject("The equation has no real solution");
      else if (delta === 0) {
        let x = -b / (2 * a);
        reject([x.toFixed(2)]);
      } else {
        let x1 = (-b + Math.sqrt(delta)) / (2 * a);
        let x2 = (-b - Math.sqrt(delta)) / (2 * a);
        reject([x1.toFixed(2), x2.toFixed(2)]);
      }
    }
  });
};
