import { countNeighbor, playGame } from "./games";

describe("Given an array of length 9", () => {
  describe("When we call countNeighbor function", () => {
    test("Should be a neighbor count ", () => {
      playGame();
      const result = countNeighbor(0, 0);
      expect(result).toBe(2);
    });
    test("Should be a neighbor count case 2 ", () => {
      const result = countNeighbor(1, 1);
      expect(result).toBe(3);
    });
    test("Should be a neighbor cont case 3 ", () => {
      const result = countNeighbor(0, 1);
      expect(result).toBe(1);
    });
    test("Should be a neighbor cont case 3 ", () => {
      const result = countNeighbor(0, 1);
      expect(result).toBe(1);
    });
  });
});
