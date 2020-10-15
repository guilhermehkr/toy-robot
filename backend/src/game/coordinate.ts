import { DirectionType, NORTH } from './direction';

export type Coordinate = {
    column: number;
    row: number;
    currentDirection: DirectionType;
}

export const defaultCoordinate: Coordinate = {
    column: 0,
    row: 0,
    currentDirection: NORTH
};
