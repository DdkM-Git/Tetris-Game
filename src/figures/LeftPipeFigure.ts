import CoordinatesType from "./CoordinatesType";
import Figure from "./Figure";

class LeftPipeFigure extends Figure {
  constructor(startCoordinates: CoordinatesType) {
    super();
    this._matrix = [
      [0, 1, 0, 0],
      [0, 1, 1, 1],
    ];
    this.makeCoordinates(startCoordinates);
  }
  createClone(): Figure {
    const matrix = this.getLowestCoordinates();
    return new LeftPipeFigure([matrix[0][0], matrix[0][1] - 1]);
  }
}

export default LeftPipeFigure;
