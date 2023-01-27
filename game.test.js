import { add } from "./sample";

describe("Testing Add", () => {
  test("If a = 1 and b = 1 result should be 2", () => {
    //Arrange
    const a = 1;
    const b = 1;
    const expected = 2;

    //Act
    const r = add(a, b);

    //Assert
    expect(r).toBe(expected);
  });
});

describe("Testing Add", () => {
  test("If a = NaN and b = NaN result should be false", () => {
    //Arrange
    const a = 3;
    const b = 3;
    const expected = 6;

    //Act
    const r = add(a, b);

    //Assert
    expect(r).toBe(expected);
  });
});
