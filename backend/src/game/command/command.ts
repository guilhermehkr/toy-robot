import { Coordinate } from '../coordinate';

export enum Commands {
    PLACE = 'PLACE',
    MOVE = 'MOVE',
    LEFT = 'LEFT',
    RIGHT = 'RIGHT',
    REPORT = 'REPORT',
    INVALID = 'INVALID'
}

export type ParsedCommand = {
    command: Commands;
    coordinate?: Coordinate;
}

export type Values = {
    coordinate: Coordinate;
    output?: string;
    isRobotOnTable?: boolean;
}

export interface Command {
    execute(values: Values): Values;
}
