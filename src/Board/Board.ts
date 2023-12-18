import CoordinatesType from "../figures/CoordinatesType";
import Figure from "../figures/Figure";
import FigureCoordinatesType from "../figures/FigureCoordinatesType";
import LeftPipeFigure from "../figures/LeftPipeFigure";
import RectangleFigure from "../figures/RectangleFigure";
import RightPipeFigure from "../figures/RightPipeFigure";
import SquareFigure from "../figures/SquareFigure";
import getRandomInt from "../utils/getRandomInt";

class Board {
  _rows = 16;
  _columns = 10;
  _figures = new Array<Figure>();
  _error = false;

  moveDownFigure(allFigures: Figure[]): Board {
    if (allFigures.length === 0) {
      const newFigure = this.getRandomFigure([0, 3]);
      !!newFigure && this.addFigure(newFigure, allFigures);
    } else {
      let tmpFigure = allFigures[allFigures.length - 1].createClone();
      tmpFigure._coordinates = tmpFigure._coordinates.map((co: CoordinatesType) => {
        return [co[0] + 1, co[1]];
      }) as FigureCoordinatesType;
      if (this.checkVerticalMove(tmpFigure, allFigures)) {
        allFigures[allFigures.length - 1]._coordinates = tmpFigure._coordinates;
      } else {
        const newFigure = this.getRandomFigure([0, 4]);
        if (newFigure) {
          this.addFigure(newFigure, allFigures);
        } else this.setError();
      }
    }
    return this;
  }

  moveLeftFigure(allFigures: Figure[]): Board {
    let tmpFigure = allFigures[allFigures.length - 1].createClone();
    tmpFigure._coordinates = tmpFigure._coordinates.map((co: CoordinatesType) => {
      return [co[0], co[1] - 1];
    }) as FigureCoordinatesType;

    if (this.checkHorizontalMove(tmpFigure, allFigures)) {
      allFigures[allFigures.length - 1]._coordinates = tmpFigure._coordinates;
    }

    return this;
  }

  moveRightFigure(allFigures: Figure[]): Board {
    let tmpFigure = allFigures[allFigures.length - 1].createClone();
    tmpFigure._coordinates = tmpFigure._coordinates.map((co: CoordinatesType) => {
      return [co[0], co[1] + 1];
    }) as FigureCoordinatesType;

    if (this.checkHorizontalMove(tmpFigure, allFigures)) {
      allFigures[allFigures.length - 1]._coordinates = tmpFigure._coordinates;
    }

    return this;
  }

  private addFigure(newFigure: Figure, allFigures: Figure[]): Board {
    if (this.checkVerticalMove(newFigure, allFigures)) {
      this._figures.push(newFigure);
    } else {
      this.setError();
    }
    return this;
  }

  private checkVerticalMove(figureToCheck: Figure, allFigures: Figure[]): boolean {
    const lowestCoordinates = figureToCheck.getLowestCoordinates();
    let allCoordinates = new Array<CoordinatesType>();

    for (let i = 0; i < allFigures.length - 1; i++) {
      allCoordinates = allCoordinates.concat(allFigures[i]._coordinates);
    }

    if (allCoordinates.length === 0) {
      return lowestCoordinates.every((lco) => lco[0] !== this._rows);
    } else {
      return allCoordinates.every((co) => lowestCoordinates.every((lco) => !(co[0] === lco[0] && co[1] === lco[1]) && lco[0] !== this._rows));
    }
  }

  private checkHorizontalMove(figureToCheck: Figure, allFigures: Figure[]): boolean {
    const lowestCoordinates = figureToCheck.getLowestCoordinates();
    let allCoordinates = new Array<CoordinatesType>();

    for (let i = 0; i < allFigures.length - 1; i++) {
      allCoordinates = allCoordinates.concat(allFigures[i]._coordinates);
    }

    if (allCoordinates.length === 0) {
      return lowestCoordinates.every((lco) => lco[1] !== -1 && lco[1] !== this._columns);
    } else {
      return allCoordinates.every((co) =>
        lowestCoordinates.every((lco) => !(co[0] === lco[0] && co[1] === lco[1]) && lco[1] !== -1 && lco[1] !== this._columns)
      );
    }
  }

  private getRandomFigure(startCoordinates: CoordinatesType): Figure | undefined {
    switch (getRandomInt(4)) {
      case 0:
        return new SquareFigure(startCoordinates);
      case 1:
        return new RectangleFigure(startCoordinates);
      case 2:
        return new LeftPipeFigure(startCoordinates);
      case 3:
        return new RightPipeFigure(startCoordinates);
      default:
        return undefined;
    }
  }

  getMatrix(): number[][] {
    let tmpMatrix = new Array<number[]>();

    for (let i = 0; i < this._rows; i++) {
      let tmpArray = new Array<number>();

      for (let j = 0; j < this._columns; j++) {
        if (this._figures.some((fig) => fig._coordinates.some((co) => co[0] === i && co[1] === j))) {
          tmpArray.push(1);
        } else {
          tmpArray.push(0);
        }
      }

      tmpMatrix.push(tmpArray);
    }

    return tmpMatrix;
  }

  private setError() {
    this._error = true;
  }
}

export default Board;
