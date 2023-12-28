import CoordinatesType from "../../types/CoordinatesType";
import FigureCoordinatesType from "../../types/FigureCoordinatesType";
import FigureMatrixType from "../../types/FigureMatrixType";

abstract class Figure extends Object {
  _rows = 2;
  _columns = 4;

  _matrix: FigureMatrixType = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
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
    let currentCoordinatesIndex: number = 0;

    this._matrix.forEach((mRow, mRowIndex) => {
      mRow.forEach((mElement, mElementIndex) => {
        if (mElement == 1) {
          this._coordinates[currentCoordinatesIndex] = [startCoordinates[0] + mRowIndex, startCoordinates[1] + mElementIndex];
          currentCoordinatesIndex++;
        }
      });
    });

    return this._coordinates;
  }

  protected getStartCoordinates(): CoordinatesType {
    let columnIndex = -1;
    const rowIndex = this._matrix.findIndex((row) => {
      let tmpColumnIndex = row.findIndex((col) => col === 1);
      if (tmpColumnIndex !== -1) {
        columnIndex = tmpColumnIndex;
      }
      return tmpColumnIndex !== -1;
    });

    return [this._coordinates[0][0] - rowIndex, this._coordinates[0][1] - columnIndex];
  }

  moveDown(): Figure {
    this._coordinates = this._coordinates.map((co: CoordinatesType) => {
      return [co[0] + 1, co[1]];
    }) as FigureCoordinatesType;
    return this;
  }

  moveLeft(): Figure {
    this._coordinates = this._coordinates.map((co: CoordinatesType) => {
      return [co[0], co[1] - 1];
    }) as FigureCoordinatesType;
    return this;
  }

  moveRight(): Figure {
    this._coordinates = this._coordinates.map((co: CoordinatesType) => {
      return [co[0], co[1] + 1];
    }) as FigureCoordinatesType;
    return this;
  }

  rotateLeft(): Figure {
    const newMatrix: number[][] = [];
    for (let col = this._matrix[0].length - 1; col >= 0; col--) {
      const newRow = [];
      for (let row = 0; row < this._matrix.length; row++) {
        newRow.push(this._matrix[row][col]);
      }
      newMatrix.push(newRow);
    }

    this._matrix = newMatrix as FigureMatrixType;
    this.makeCoordinates(this.getStartCoordinates());

    return this;
  }

  rotateRight(): Figure {
    const newMatrix: number[][] = [];

    for (let col = 0; col < this._matrix[0].length; col++) {
      const newRow = [];
      for (let row = this._matrix.length - 1; row >= 0; row--) {
        newRow.push(this._matrix[row][col]);
      }
      newMatrix.push(newRow);
    }

    this._matrix = newMatrix as FigureMatrixType;
    this.makeCoordinates(this.getStartCoordinates());

    return this;
  }

  getLowestCoordinates(): FigureCoordinatesType {
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

    return lowestCoordinates as FigureCoordinatesType;
  }

  abstract createClone(): Figure;
}

export default Figure;
