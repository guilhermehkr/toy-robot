import { Commands, ParsedCommand } from './command';
import { DirectionType } from '../direction';
import { isCoordinateWithinBoundaries } from '../board';

const PLACE_COMMAND_REGEX = /^(?:PLACE)\s(\d+),(\d+),(NORTH|SOUTH|EAST|WEST)+$/;
const OTHER_COMMANDS_REGEX = /^(MOVE|LEFT|RIGHT|REPORT)$/;

const COMMAND_SPLITTER = /\n/;
const COMMAND_INDEX = 0;
const COLUMN_INDEX = 1;
const ROW_INDEX = 2;
const DIRECTION_INDEX = 3;

const INVALID_PARSED_COMMAND: ParsedCommand = {
    command: Commands.INVALID
};

export default class CommandParser {

    public parse(rawCommands: string): ParsedCommand[] {

        return rawCommands
            .split(COMMAND_SPLITTER)
            .filter(rawCommand => Boolean(rawCommand))
            .map(rawCommand => rawCommand.trim())
            .map(rawCommand => this.mapRawCommand(rawCommand));
    }

    private mapRawCommand(rawCommand: string): ParsedCommand {

        let parsedCommand = INVALID_PARSED_COMMAND;

        if (this.isPlaceCommand(rawCommand)) {
            parsedCommand = this.handlePlaceCommand(rawCommand);

        } else if (this.isOtherCommands(rawCommand)) {
            parsedCommand = this.handleOtherCommands(rawCommand);
        }

        return parsedCommand;
    }

    private handlePlaceCommand(rawCommand: string): ParsedCommand {

        const matches = this.executePlaceRegex(rawCommand) || [];
        const column = parseInt(matches[COLUMN_INDEX], 10);
        const row = parseInt(matches[ROW_INDEX], 10);
        const currentDirection = matches[DIRECTION_INDEX] as DirectionType;

        const isValidCoordinate = isCoordinateWithinBoundaries(column, row);

        if (!isValidCoordinate) {
            return INVALID_PARSED_COMMAND;
        }

        return {
            command: Commands.PLACE,
            coordinate: {
                column,
                row,
                currentDirection
            }
        };
    }

    private handleOtherCommands(rawCommand: string): ParsedCommand {
        const match = this.executeCommandRegex(rawCommand) || [];
        return {
            command: match[COMMAND_INDEX] as Commands
        }
    }

    private executePlaceRegex(rawCommand: string): RegExpExecArray | null {
        return PLACE_COMMAND_REGEX.exec(rawCommand);
    }

    private executeCommandRegex(rawCommand: string): RegExpExecArray | null {
        return OTHER_COMMANDS_REGEX.exec(rawCommand);
    }

    private isPlaceCommand(rawCommand: string): boolean {
        return PLACE_COMMAND_REGEX.test(rawCommand);
    }

    private isOtherCommands(rawCommand: string): boolean {
        return OTHER_COMMANDS_REGEX.test(rawCommand);
    }
}
