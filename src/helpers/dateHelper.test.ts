import { DateHelper } from "./dateHelper";

describe("Test getDifferenceCurrentAndGivenDateInDays helper", () => {
  it("Given '2022-03-22', should return 11", () => {
    const difference =
      DateHelper.getDifferenceCurrentAndGivenDateInDays("2022-03-22");
    expect(difference).toBe(11);
  });
  it("Given '2022-06-11', should return 92", () => {
    const difference =
      DateHelper.getDifferenceCurrentAndGivenDateInDays("2022-06-11");
    expect(difference).toBe(92);
  });
});
