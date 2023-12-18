import { forEach } from "mathjs";
import CoordinatesType from "./CoordinatesType";
import Figure from "./Figure";

class SquareFigure extends Figure {
  constructor(startCoordinates: CoordinatesType) {
    super();
    this._matrix = [
      [0, 1, 1, 0],
      [0, 1, 1, 0],
    ];
    this.makeCoordinates(startCoordinates);
  }

  createClone(): Figure {
    const matrix = this.getLowestCoordinates();
    return new SquareFigure([matrix[0][0], matrix[0][1] - 1]);
  }
}

export default SquareFigure;
