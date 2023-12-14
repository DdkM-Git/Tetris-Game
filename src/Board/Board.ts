import CoordinatesType from "../figures/CoordinatesType";
import Figure from "../figures/Figure";

class Board {

    _rows = 16;
    _columns = 10;
    _matrix = new Array<number[]>();
    _figures = new Array<Figure>();
    _error = false;


    constructor() {
        for (let i = 0; i < this._rows; i++) {
            let tmpArray = new Array<number>();

            for (let j = 0; j < this._columns; j++) {
                tmpArray.push(0);
            }

            this._matrix.push(tmpArray);
        }
    }

    addFigure(newFigure: Figure): Board {
        if (this.checkMove(newFigure)) {
            this._figures.push(newFigure);
        }
        else {
            this.setError();
        }
        return this;
    }

    moveFigure(): Board {
        const tmpFigure = this._figures[this._figures.length - 1];
        if (this.checkMove(tmpFigure)) {
            this._figures[this._figures.length - 1]._coordinates =
                tmpFigure._coordinates.map((co) => {
                    return [co[0] + 1, co[1]];
                })
        }
        else {
            this.setError();
        }
        return this;
    }

    private checkMove(figureToCheck: Figure): boolean {
        const lowestCoordinates = figureToCheck.getLowestCoordinates();
        this._figures.forEach((fig) => {
            allCoordinates.concat(fig._coordinates);
        });
        const allCoordinates = new Array<CoordinatesType>();
        return allCoordinates.every((co) => {
            return lowestCoordinates.every((lco) => {
                return co[0] !== lco[0] && co[1] !== lco[1];
            });
        })
    }

    /*setError(coordinates: CoordinatesType) {*/
    setError() {
        this._error = true;
        //this._matrix[coordinates[0]][coordinates[1]] = -1;
    }
}

export default Board;