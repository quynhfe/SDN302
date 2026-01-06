export const solveLinearEquation = (a, b) => {
  return new Promise((resolve, reject) => {
    if (a === 0) {
      if (b === 0) {
        reject("The equation has infinitely many solution");
      } else {
        reject("The equation has no solution");
      }
    } else {
      let x = -b / a;
      resolve([x.toFixed(2)]);
    }
  });
};
