export const solveLinearEquation = (a, b, callback) => {
  if (a === 0) {
    if (b === 0) {
      callback("The equation has infinitely many solutions.", null);
    } else {
      callback("The equation has no solution.", null);
    }
  } else {
    let x = -b / a;
    callback(null, [x.toFixed(2)]);
  }
};
