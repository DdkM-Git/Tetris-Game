import CoordinatesType from "./CoordinatesType";
import Figure from "./Figure";

class LeftPipeFigure extends Figure {

    constructor(newCoordinates: Array<CoordinatesType>) {
        super(newCoordinates);
        this._matrix = [[0, 1, 0, 0], [0, 1, 1, 1]]
    }
}

export default LeftPipeFigure;