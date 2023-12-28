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
  _isError = false;
  _isGameOver = false;
  _score = 0;

  moveDownFigure(): Board {
    const allFigures = this._figures;
    if (allFigures.length === 0) {
      console.log("newFigure-start");
      const newFigure = this.getRandomFigure([0, 3]);
      !!newFigure && this.addFigure(newFigure);
    } else {
      const scoreRows = this.checkScoringAPoint();
      if (scoreRows.length > 0) {
        console.log("makeAPoint");
        this.makeAPoint(scoreRows);
      } else {
        console.log("makeAPoint-else");
        const tmpFigure = allFigures[allFigures.length - 1].createClone().moveDown();
        if (this.checkVerticalMove(tmpFigure)) {
          allFigures[allFigures.length - 1].moveDown();
        } else {
          console.log("newFigure-else");
          const newFigure = this.getRandomFigure([0, 3]);
          if (newFigure) {
            this.addFigure(newFigure);
          } else this.setGameOver();
        }
      }
    }
    return this;
  }

  moveLeftFigure(): Board {
    const allFigures = this._figures;
    const tmpFigure = allFigures[allFigures.length - 1].createClone().moveLeft();

    if (this.checkHorizontalMove(tmpFigure)) {
      allFigures[allFigures.length - 1].moveLeft();
    }
    return this;
  }

  moveRightFigure(): Board {
    const allFigures = this._figures;
    const tmpFigure = allFigures[allFigures.length - 1].createClone().moveRight();

    if (this.checkHorizontalMove(tmpFigure)) {
      allFigures[allFigures.length - 1].moveRight();
    }
    return this;
  }

  rotateLeftFigure(): Board {
    const allFigures = this._figures;
    const tmpFigure = allFigures[allFigures.length - 1].createClone().rotateLeft();

    if (this.checkHorizontalMove(tmpFigure) && this.checkVerticalMove(tmpFigure)) {
      allFigures[allFigures.length - 1] = allFigures[allFigures.length - 1].createClone().rotateLeft();
    }

    return this;
  }

  rotateRightFigure(): Board {
    const allFigures = this._figures;
    const tmpFigure = allFigures[allFigures.length - 1].createClone().rotateRight();

    if (this.checkHorizontalMove(tmpFigure) && this.checkVerticalMove(tmpFigure)) {
      allFigures[allFigures.length - 1] = allFigures[allFigures.length - 1].createClone().rotateRight();
    }

    return this;
  }

  private addFigure(newFigure: Figure): Board {
    if (this.checkVerticalMove(newFigure)) {
      this._figures.push(newFigure);
    } else {
      this.setGameOver();
    }
    return this;
  }

  private checkVerticalMove(figureToCheck: Figure): boolean {
    const lowestCoordinates = figureToCheck.getLowestCoordinates();
    const allFigures = this._figures;

    let allCoordinates = new Array<CoordinatesType>();
    for (let i = 0; i < allFigures.length - 1; i++) {
      allCoordinates = allCoordinates.concat(allFigures[i]._coordinates);
    }

    if (allCoordinates.length === 0) {
      return lowestCoordinates.every((lco) => lco[0] < this._rows);
    } else {
      return allCoordinates.every((co) => lowestCoordinates.every((lco) => !(co[0] === lco[0] && co[1] === lco[1]) && lco[0] < this._rows));
    }
  }

  private checkHorizontalMove(figureToCheck: Figure): boolean {
    const lowestCoordinates = figureToCheck._coordinates;
    const allFigures = this._figures;

    let allCoordinates = new Array<CoordinatesType>();
    for (let i = 0; i < allFigures.length - 1; i++) {
      allCoordinates = allCoordinates.concat(allFigures[i]._coordinates);
    }

    if (allCoordinates.length === 0) {
      return lowestCoordinates.every((lco) => lco[1] !== -1 && lco[1] < this._columns);
    } else {
      return allCoordinates.every((co) => lowestCoordinates.every((lco) => !(co[0] === lco[0] && co[1] === lco[1]) && lco[1] !== -1 && lco[1] < this._columns));
    }
  }

  private checkScoringAPoint(): number[] {
    const allFigures = Array.from(this._figures);
    let rowsToRemove: number[] = [];

    let allRows: any[] = [];
    for (let i = 0; i < allFigures.length; i++) {
      allFigures[i]._coordinates.forEach((coor) => {
        allRows = allRows.concat(coor[0]);
      });
    }

    for (let i = 0; i < this._rows; i++) {
      const aaa = allRows.filter((bbb) => bbb === i);
      if (aaa.length === this._columns) {
        rowsToRemove.push(i);
      }
    }

    return rowsToRemove;
  }

  private makeAPoint(rowsToRemove: number[]): Board {
    const allFigures = Array.from(this._figures);

    this._score = this._score + rowsToRemove.length;
    for (let i = 0; i < allFigures.length; i++) {
      for (let j = 0; j < rowsToRemove.length; j++) {
        let www = allFigures[i]._coordinates.filter((coor) => coor[0] !== rowsToRemove[j]);
        www = www.map((coor) => {
          if (coor[0] < rowsToRemove[j]) {
            return [coor[0] + 1, coor[1]];
          } else {
            return [coor[0], coor[1]];
          }
        });
        allFigures[i]._coordinates = www as FigureCoordinatesType;
      }
    }
    this._figures = allFigures;

    return this;
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
    this._isError = true;
  }

  private setGameOver() {
    this._isGameOver = true;
  }
}

export default Board;
