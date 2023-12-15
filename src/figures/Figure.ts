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
          newCoordinates[currentCoordinatesIndex] = [startCoordinates[0] - 1 + mRowIndex, startCoordinates[1] + mElementIndex];
          currentCoordinatesIndex++;
        }
      });
    });

    this._coordinates = newCoordinates;
    console.log("newCoordinates", newCoordinates);
    return newCoordinates;
  }

  getLowestCoordinates(): FigureLowestCoordinatesType {
    console.log("this._coordinates", this._coordinates);
    let lowestCoordinates = new Array<CoordinatesType>();
    let tmpCoordinates = Array.from(this._coordinates);

    for (let i = 0; i < tmpCoordinates.length - 1; i++) {
      if (tmpCoordinates[i][1] > tmpCoordinates[i + 1][1]) {
        let tmp = tmpCoordinates[i];
        tmpCoordinates[i] = tmpCoordinates[i + 1];
        tmpCoordinates[i + 1] = tmp;
      }
    }

    console.log("tmpCoordinates", tmpCoordinates);

    return lowestCoordinates as FigureLowestCoordinatesType;
  }
}

export default Figure;
