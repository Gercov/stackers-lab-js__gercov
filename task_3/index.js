
export const f3 = (operator, f, s) => {
  switch (operator) {
    case "+":
      return f + s;
    case "-":
      return f - s;
    case "/":
      return f / s;
    case "*":
      return f * s;
    default:
      throw new Error("Operator is invalid");
  }
};
