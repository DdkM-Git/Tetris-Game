import CoordinatesType from "../../types/CoordinatesType";
import Figure from "./Figure";
import FigureMatrixType from "../../types/FigureMatrixType";

class RightPipeFigure extends Figure {
  constructor(startCoordinates: CoordinatesType, matrix?: FigureMatrixType) {
    super();
    if (matrix) {
      this._matrix = matrix;
    } else {
      this._matrix = [
        [0, 0, 1],
        [1, 1, 1],
      ];
    }
    this.makeCoordinates(startCoordinates);
  }
  createClone(): Figure {
    return new RightPipeFigure(this.getStartCoordinates(), this._matrix);
  }
}

export default RightPipeFigure;
