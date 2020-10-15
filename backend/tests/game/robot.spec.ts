import { play } from '../../src/game/robot';
import { Commands, ParsedCommand } from '../../src/game/command';
import { getCommandImpl } from '../../src/game/command/command-factory';

jest.mock('../../src/game/command/command-factory', () => ({
    getCommandImpl: jest.fn()
}));

const mockParse = jest.fn();
jest.mock('../../src/game/command/command-parser', () => ({
    __esModule: true,
    default: jest.fn(() => ({
        parse: mockParse
    }))
}));

const parsedCommands: ParsedCommand[] = [
    {
        command: Commands.PLACE,
        coordinate: { column: 0, row: 1, currentDirection: 'SOUTH' }
    },
    { command: Commands.MOVE },
    { command: Commands.LEFT },
    {
        command: Commands.PLACE,
        coordinate: { column: 2, row: 3, currentDirection: 'EAST' }
    },
    { command: Commands.REPORT }
];

const firstPlaceValues = {
    coordinate: { column: 0, row: 1, currentDirection: 'SOUTH' },
    isRobotOnTable: true
};

const secondPlaceValues = {
    coordinate: { column: 2, row: 3, currentDirection: 'EAST' },
    isRobotOnTable: true
};

const mockPlaceExecute = jest.fn()
    .mockReturnValueOnce(firstPlaceValues)
    .mockReturnValueOnce(secondPlaceValues);

const mockPlace = {
    execute: mockPlaceExecute
};

const mockMoveExecute = jest.fn(() => (firstPlaceValues));
const mockMove = {
    execute: mockMoveExecute
};

const mockLeftExecute = jest.fn(() => (firstPlaceValues));
const mockLeft = {
    execute: mockLeftExecute
};

const output = 'output';
const mockReportExecute = jest.fn(() => ({
    ...secondPlaceValues,
    output
}));
const mockReport = {
    execute: mockReportExecute
};

describe('robot', () => {
    describe('play', () => {
        test('should parse and run all commands', () => {

            const rawCommands = 'rawCommands';
            mockParse.mockReturnValue(parsedCommands);

            (getCommandImpl as jest.Mock)
                .mockReturnValueOnce(mockPlace)
                .mockReturnValueOnce(mockMove)
                .mockReturnValueOnce(mockLeft)
                .mockReturnValueOnce(mockPlace)
                .mockReturnValueOnce(mockReport);

            const result = play(rawCommands);

            expect(result).toEqual(output);
            expect(mockParse).toHaveBeenCalledWith(rawCommands);

            expect(getCommandImpl).toHaveBeenCalledWith(Commands.PLACE);
            expect(getCommandImpl).toHaveBeenCalledWith(Commands.MOVE);
            expect(getCommandImpl).toHaveBeenCalledWith(Commands.LEFT);
            expect(getCommandImpl).toHaveBeenCalledWith(Commands.PLACE);
            expect(getCommandImpl).toHaveBeenCalledWith(Commands.REPORT);

            expect(mockPlaceExecute).toHaveBeenCalledWith({
                coordinate: firstPlaceValues.coordinate
            });

            expect(mockMoveExecute).toHaveBeenCalledWith(firstPlaceValues);
            expect(mockLeftExecute).toHaveBeenCalledWith(firstPlaceValues);
            expect(mockPlaceExecute).toHaveBeenCalledWith(secondPlaceValues);
            expect(mockReportExecute).toHaveBeenCalledWith(secondPlaceValues);
        });
    });
});
