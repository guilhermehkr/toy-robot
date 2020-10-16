import { Coordinate } from '../coordinate';

export enum CommandEnum {
    PLACE = 'PLACE',
    MOVE = 'MOVE',
    LEFT = 'LEFT',
    RIGHT = 'RIGHT',
    REPORT = 'REPORT',
    INVALID = 'INVALID'
}

export type ParsedCommand = {
    command: CommandEnum;
    coordinate?: Coordinate;
}

export type State = {
    coordinate: Coordinate;
    output?: string;
    isRobotOnTable?: boolean;
}

export interface Command {
    execute(state: State): State;
}
