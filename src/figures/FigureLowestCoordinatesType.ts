import CoordinatesType from "./CoordinatesType";

type FigureLowestCoordinatesType =
  | [CoordinatesType, CoordinatesType, CoordinatesType, CoordinatesType]
  | [CoordinatesType, CoordinatesType, CoordinatesType]
  | [CoordinatesType, CoordinatesType]
  | [CoordinatesType];

export default FigureLowestCoordinatesType;
