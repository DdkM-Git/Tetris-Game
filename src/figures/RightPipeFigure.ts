import CoordinatesType from "./CoordinatesType";
import Figure from "./Figure";

class RightPipeFigure extends Figure {
  constructor(startCoordinates: CoordinatesType) {
    super();
    this._matrix = [
      [0, 0, 1, 0],
      [1, 1, 1, 0],
    ];
    this.makeCoordinates(startCoordinates);
  }
}

export default RightPipeFigure;
