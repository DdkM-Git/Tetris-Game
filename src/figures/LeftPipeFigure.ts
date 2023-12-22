import CoordinatesType from "./CoordinatesType";
import Figure from "./Figure";
import FigureMatrixType from "./FigureMatrixType";

class LeftPipeFigure extends Figure {
  constructor(startCoordinates: CoordinatesType, matrix?: FigureMatrixType) {
    super();
    if (matrix) {
      this._matrix = matrix;
    } else {
      this._matrix = [
        [1, 0, 0],
        [1, 1, 1],
      ];
    }
    this.makeCoordinates(startCoordinates);
  }
  createClone(): Figure {
    return new LeftPipeFigure(this.getStartCoordinates(), this._matrix);
  }
}

export default LeftPipeFigure;
