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
    console.log("newCoordinates1", newCoordinates);
    let currentCoordinatesIndex: number = 0;

    this._matrix.forEach((mRow, mRowIndex) => {
      mRow.forEach((mElement, mElementIndex) => {
        if (mElement == 1) {
          newCoordinates[currentCoordinatesIndex] = [startCoordinates[0] - 1 + mRowIndex, startCoordinates[1] + mElementIndex];
          currentCoordinatesIndex++;
        }
      });
    });

    return newCoordinates;
  }

  getLowestCoordinates(): FigureLowestCoordinatesType {
    let lowestCoordinates = new Array<CoordinatesType>();
    let tmpCoordinates = Array.from(this._coordinates);

    let min: number, minIndex: number, temp: CoordinatesType;

    for (let i = 0; i < tmpCoordinates.length - 1; i++) {
      min = tmpCoordinates[i][1];
      minIndex = i;

      for (let j = i; j < tmpCoordinates.length; j++) {
        if (tmpCoordinates[j][1] < min) {
          min = tmpCoordinates[j][1];
          minIndex = j;
        }
      }

      temp = tmpCoordinates[i];
      tmpCoordinates[i] = tmpCoordinates[minIndex];
      tmpCoordinates[minIndex] = temp;
    }

    for (let i = 1; i < tmpCoordinates.length; i++) {
      if (tmpCoordinates[i - 1][1] < tmpCoordinates[i][1]) {
        lowestCoordinates.push(tmpCoordinates[i - 1]);
      }
    }
    lowestCoordinates.push(tmpCoordinates[tmpCoordinates.length - 1]);

    return lowestCoordinates as FigureLowestCoordinatesType;
  }
}

export default Figure;
