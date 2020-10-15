import CommandParser from '../../../src/game/command/command-parser';

const rawCommands = `

    PLACE 0,1,NORTH
    MOVE
    LEFT
    PLACE 2,3,EAST
    RIGHT
    PLACE 4,3,SOUTH
    REPORT
    PLACE 2,1,WEST
    REPORT
    PLACE 10,1,NORTH
    PLACE 1,5,NORTH
    PLACE 0,0, NORTH
    PLACE -1,0,NORTH
`;

const expectedCommands = [
    {
        command: 'PLACE',
        coordinate: { column: 0, row: 1, currentDirection: 'NORTH' }
    },
    { command: 'MOVE' },
    { command: 'LEFT' },
    {
        command: 'PLACE',
        coordinate: { column: 2, row: 3, currentDirection: 'EAST' }
    },
    { command: 'RIGHT' },
    {
        command: 'PLACE',
        coordinate: { column: 4, row: 3, currentDirection: 'SOUTH' }
    },
    { command: 'REPORT' },
    {
        command: 'PLACE',
        coordinate: { column: 2, row: 1, currentDirection: 'WEST' }
    },
    { command: 'REPORT' },
    { command: 'INVALID' },
    { command: 'INVALID' },
    { command: 'INVALID' },
    { command: 'INVALID' }
];

const commandParser = new CommandParser();

describe('CommandParser', () => {
    describe('parse', () => {
        test('should parse raw commands and return an array of commands including invalid ones', () => {
            const expectedCommandsJson = JSON.stringify(expectedCommands);
            const parsedCommandsJson = JSON.stringify(commandParser.parse(rawCommands));
            expect(expectedCommandsJson).toEqual(parsedCommandsJson);
        })
    });
});
