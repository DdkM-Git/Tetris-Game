import CoordinatesType from "./CoordinatesType";

class Figure {

    _rows = 2;
    _columns = 4;

    _matrix = new Array<number[]>();

    _coordinates = new Array<CoordinatesType>();

    constructor(newCoordinates: Array<CoordinatesType>) {
        this._matrix = [[0, 0, 0, 0], [0, 0, 0, 0]];
        this._coordinates = newCoordinates;
    }

    getLowestCoordinates(): Array<CoordinatesType> {
        let lowestCoordinates = new Array<CoordinatesType>();
        let tmpCoordinates = this._coordinates;

        tmpCoordinates.sort((a, b) => {

            const numberA = a[0] * 1000 + a[1];
            const numberB = b[0] * 1000 + b[1];

            return numberA - numberB;
        });

        let currentLowestCoordinates = tmpCoordinates[tmpCoordinates.length - 1];

        for (let i = tmpCoordinates.length; i > 0; i--) {
            if (i == 1) {
                lowestCoordinates.push(tmpCoordinates[i]);
            }
            else if (currentLowestCoordinates[0] > tmpCoordinates[i][0]) {
                lowestCoordinates.push(currentLowestCoordinates);
                currentLowestCoordinates = tmpCoordinates[i];
            }
            else {
                currentLowestCoordinates = tmpCoordinates[i];
            }
        }

        return lowestCoordinates;
    }
}

export default Figure;