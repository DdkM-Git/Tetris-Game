type FigureMatrixRowType2 = [a: number, b: number];
type FigureMatrixRowType3 = [a: number, b: number, c: number];
type FigureMatrixRowType4 = [a: number, b: number, c: number, d: number];

type FigureMatrixType =
  | [FigureMatrixRowType2, FigureMatrixRowType2]
  | [FigureMatrixRowType2, FigureMatrixRowType2, FigureMatrixRowType2]
  | [FigureMatrixRowType2, FigureMatrixRowType2, FigureMatrixRowType2, FigureMatrixRowType2]
  | [FigureMatrixRowType3, FigureMatrixRowType3]
  | [FigureMatrixRowType3, FigureMatrixRowType3, FigureMatrixRowType3]
  | [FigureMatrixRowType4]
  | [FigureMatrixRowType4, FigureMatrixRowType4, FigureMatrixRowType4, FigureMatrixRowType4];

export default FigureMatrixType;
