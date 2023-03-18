interface GetChangeAmounts {
  piecesOfTen: number;
  piecesOfFive: number;
  piecesOfTwo: number;
  error?: string;
}

export const getNumberOfPieces = (amount: number, pieceValue: number): number =>
  Math.floor(amount / pieceValue);

export const getChangeAmounts = (
  amount: number
): GetChangeAmounts => {
    if (amount < 0 )
    return {
      piecesOfTen: 0,
      piecesOfFive: 0,
      piecesOfTwo: 0,
      error: "amount should be a positif number",
    };
  if (amount === 1 || amount === 3)
    return {
      piecesOfTen: 0,
      piecesOfFive: 0,
      piecesOfTwo: 0,
      error: "can not give you change for this amount",
    };
  if (amount % 2 === 0)
    return {
      piecesOfFive: 0,
      piecesOfTen: getNumberOfPieces(amount, 10),
      piecesOfTwo: getNumberOfPieces(amount % 10, 2),
    };
  return {
    piecesOfFive: 1,
    piecesOfTen: getNumberOfPieces(amount - 5, 10),
    piecesOfTwo: getNumberOfPieces((amount - 5) % 10, 2),
  };
};
