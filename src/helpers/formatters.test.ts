import { formatDollars, formatSnakeCaseToWords } from "./formatters";

describe("Test formatSnakeCaseToWords helpers", () => {
  it("Given empty string, should return empty string", () => {
    expect(formatSnakeCaseToWords("")).toBe("");
  });
  it("Given 'text' string, should return 'Text'", () => {
    expect(formatSnakeCaseToWords("text")).toBe("Text");
  });
  it("Given 'text_to_test' string, should return 'Text To Test'", () => {
    expect(formatSnakeCaseToWords("text_to_test")).toBe("Text To Test");
  });
});

describe("Test formatDollars helper", () => {
  it("Given 1000, should return $1,000.00", () => {
    expect(formatDollars(1000)).toBe("$1,000.00");
  });
  it("Given 500.10, should return $500.10", () => {
    expect(formatDollars(500.1)).toBe("$500.10");
  });
  it("Given 100.34555, should return $100.35", () => {
    expect(formatDollars(100.34555)).toBe("$100.35");
  });
  it("Given -100.50, should return -$100.50", () => {
    expect(formatDollars(-100.5)).toBe("-$100.50");
  });
});
