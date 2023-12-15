import CoordinatesType from "./CoordinatesType";
import FigureCoordinatesType from "./FigureCoordinatesType";
import FigureLowestCoordinatesType from "./FigureLowestCoordinatesType";
import FigureMatrixType from "./FigureMatrixType";

abstract class Figure {
  _rows = 2;
  _columns = 4;

  _matrix: FigureMatrixType = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];

  _coordinates: FigureCoordinatesType = [
    [-1, -1],
    [-1, -1],
    [-1, -1],
    [-1, -1],
  ];

  protected makeCoordinates(startCoordinates: CoordinatesType): FigureCoordinatesType {
    let newCoordinates = this._coordinates;
    let currentCoordinatesIndex: number = 0;

    this._matrix.forEach((mRow, mRowIndex) => {
      mRow.forEach((mElement, mElementIndex) => {
        if (mElement == 1) {
          newCoordinates[currentCoordinatesIndex] = [startCoordinates[0] + mRowIndex, startCoordinates[1] + mElementIndex];
          currentCoordinatesIndex++;
        }
      });
    });

    this._coordinates = newCoordinates;
    return newCoordinates;
  }

  getLowestCoordinates(): FigureLowestCoordinatesType {
    let lowestCoordinates = new Array<CoordinatesType>();
    let tmpCoordinates = this._coordinates;

    tmpCoordinates.sort((a, b) => {
      const numberA = a[0] * 1000 + a[1];
      const numberB = b[0] * 1000 + b[1];

      return numberA - numberB;
    });

    let currentLowestCoordinates = tmpCoordinates[tmpCoordinates.length - 1];

    for (let i: number = tmpCoordinates.length; i > 0; i--) {
      if (i == 1) {
        lowestCoordinates.push(tmpCoordinates[i - 1]);
      } else if (currentLowestCoordinates[0] > tmpCoordinates[i - 1][0]) {
        lowestCoordinates.push(currentLowestCoordinates);
        currentLowestCoordinates = tmpCoordinates[i - 1];
      } else {
        currentLowestCoordinates = tmpCoordinates[i - 1];
      }
    }

    return lowestCoordinates as FigureLowestCoordinatesType;
  }
}

export default Figure;
