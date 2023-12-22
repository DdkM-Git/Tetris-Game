import CoordinatesType from "./CoordinatesType";
import Figure from "./Figure";
import FigureMatrixType from "./FigureMatrixType";

class SquareFigure extends Figure {
  constructor(startCoordinates: CoordinatesType, matrix?: FigureMatrixType) {
    super();
    if (matrix) {
      this._matrix = matrix;
    } else {
      this._matrix = [
        [1, 1],
        [1, 1],
      ];
    }
    this.makeCoordinates(startCoordinates);
  }

  createClone(): Figure {
    return new SquareFigure(this.getStartCoordinates(), this._matrix);
  }
}

export default SquareFigure;
