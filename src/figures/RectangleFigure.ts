import CoordinatesType from "./CoordinatesType";
import Figure from "./Figure";
import FigureMatrixType from "./FigureMatrixType";

class RectangleFigure extends Figure {
  constructor(startCoordinates: CoordinatesType, matrix?: FigureMatrixType) {
    super();
    if (matrix) {
      this._matrix = matrix;
    } else {
      this._matrix = [[1, 1, 1, 1]];
    }
    this.makeCoordinates(startCoordinates);
  }
  createClone(): Figure {
    return new RectangleFigure(this.getStartCoordinates(), this._matrix);
  }
}

export default RectangleFigure;
