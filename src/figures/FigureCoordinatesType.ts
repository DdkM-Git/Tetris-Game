import CoordinatesType from "./CoordinatesType";

type FigureCoordinatesType =
  | [CoordinatesType, CoordinatesType, CoordinatesType, CoordinatesType]
  | [CoordinatesType, CoordinatesType, CoordinatesType]
  | [CoordinatesType, CoordinatesType]
  | [CoordinatesType];

export default FigureCoordinatesType;
