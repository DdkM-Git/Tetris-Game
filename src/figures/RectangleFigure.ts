import CoordinatesType from "./CoordinatesType";
import Figure from "./Figure";

class RectangleFigure extends Figure {
  constructor(startCoordinates: CoordinatesType) {
    super();
    this._matrix = [
      [0, 0, 0, 0],
      [1, 1, 1, 1],
    ];
    this.makeCoordinates(startCoordinates);
  }
}

export default RectangleFigure;
