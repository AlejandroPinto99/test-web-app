const MathHelper = {
  /**
   * Clamps a value between an upper and lower bound.
   * If min or max is not specified, original number is returned
   * @example
   *  MathHelper.clamp(33, 10, 20); // Returns 20
   *  MathHelper.clamp(5, 10, 20); // Returns 10
   *  MathHelper.clamp(15, 10, 20); // Returns 15
   * @param {number} num Number to evaluate
   * @param {number | undefined} min Lower bound
   * @param {number | undefined} max Upper bound
   * @returns {number} Clamped number
   * **/
  clamp: (num: number, min: number, max: number) => {
    if (typeof min === "undefined" || typeof max === "undefined") return num;
    return Math.max(min, Math.min(num, max));
  },
};

export { MathHelper };
