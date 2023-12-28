import CoordinatesType from "./CoordinatesType";
import Figure from "./Figure";
import FigureMatrixType from "./FigureMatrixType";

class RightSnakeFigure extends Figure {
  constructor(startCoordinates: CoordinatesType, matrix?: FigureMatrixType) {
    super();
    if (matrix) {
      this._matrix = matrix;
    } else {
      this._matrix = [
        [0, 1, 1],
        [1, 1, 0],
      ];
    }
    this.makeCoordinates(startCoordinates);
  }
  createClone(): Figure {
    return new RightSnakeFigure(this.getStartCoordinates(), this._matrix);
  }
}

export default RightSnakeFigure;
