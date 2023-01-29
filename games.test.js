import { countNeighbor } from "./games";

describe("Given an array of length 9", () => {
  describe("When we call countNeighbor function", () => {
    test("Should be a neighbor count ", () => {
      const array = [
        [0, 1, 0],
        [1, 0, 0],
        [1, 0, 0],
      ];

      const result = countNeighbor(array[0], array[0][0]);
      expect(result).toHaveBeenCalled();
    });
  });
});
