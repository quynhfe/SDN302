export const solveLinearEquation = (a, b) => {
  if (a === 0) {
    if (b === 0) {
      return "The equation has infinitely many solutions";
    } else {
      return "The equation has no solution";
    }
  } else {
    let x = -b / a;
    return [x.toFixed(2)];
  }
};
