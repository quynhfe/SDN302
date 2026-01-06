export const solveLinearEquation = async (a, b) => {
  if (a === 0) {
    if (b === 0) {
      throw new Error("The equation has infinitely many solution");
    } else {
      throw new Error("The equation has no solution");
    }
  } else {
    let x = -b / a;
    return [x.toFixed(2)];
  }
};
