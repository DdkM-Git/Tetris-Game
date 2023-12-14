import CoordinatesType from "./CoordinatesType";
import Figure from "./Figure";

class RightPipeFigure extends Figure {

    constructor(newCoordinates: Array<CoordinatesType>) {
        super(newCoordinates);
        this._matrix = [[0, 0, 1, 0], [1, 1, 1, 0]]
    }
}

export default RightPipeFigure;