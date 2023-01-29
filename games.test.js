import { countNeighbor } from "./games";

describe("Given an array of length 9", () => {
  describe("When we call countNeighbor function", () => {
    test("Should be a neighbor count ", () => {
      const result = countNeighbor(0, 0);
      expect(result).toBe(2);
    });
  });
});
