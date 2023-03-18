import { getChangeAmounts, getNumberOfPieces } from "./utils";

describe("utils", () => {
  describe("getNumberOfPieces", () => {
    it("should return the correct number of pieces", () => {
      const amount = 45;
      const pieceValue = 10;
      expect(getNumberOfPieces(amount, pieceValue)).toEqual(4);
    });
  });
  describe("getChangeAmounts", () => {
    it("should return negatif number error", () => {
      const expected = {
        piecesOfTen: 0,
        piecesOfFive: 0,
        piecesOfTwo: 0,
        error: "amount should be a positif number",
      };
      expect(getChangeAmounts(-23)).toEqual(expected);
    });
    it("should return not possible error when amount is 1 or 3 ", () => {
      const expected = {
        piecesOfTen: 0,
        piecesOfFive: 0,
        piecesOfTwo: 0,
        error: "can not give you change for this amount",
      };
      expect(getChangeAmounts(1)).toEqual(expected);
      expect(getChangeAmounts(3)).toEqual(expected);
    });
    it("should return not possible error when amount is 1 or 3 ", () => {
      const expected = {
        piecesOfTen: 0,
        piecesOfFive: 0,
        piecesOfTwo: 0,
        error: "can not give you change for this amount",
      };
      expect(getChangeAmounts(1)).toEqual(expected);
      expect(getChangeAmounts(3)).toEqual(expected);
    });
    describe.each(
      Array.from(new Array(50).keys()).filter((number) => number != 1 && number != 3)
    )("", (amount: number) => {
      it(`should return correct change amounts for ${amount}`, () => {
        const { piecesOfTen, piecesOfFive, piecesOfTwo } =
          getChangeAmounts(amount);
        expect(piecesOfTen * 10 + piecesOfFive * 5 + piecesOfTwo * 2).toEqual(
          amount
        );
      });
    });
  });
});
