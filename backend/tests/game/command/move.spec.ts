import { State } from '../../../src/game/command';
import { Move } from '../../../src/game/command/move';
import { defaultCoordinate } from '../../../src/game/coordinate';
import { EAST, NORTH, SOUTH, WEST } from '../../../src/game/direction';

describe('Move', () => {
    test('should do nothing when isRobotOnTable = false', () => {
        const move = new Move();
        const state: State = {
            coordinate: defaultCoordinate,
            isRobotOnTable: false,
            output: 'output'
        };

        const result = move.execute(state);

        expect(result.isRobotOnTable).toBeFalsy();
        expect(result.output).toEqual(state.output);
        expect(result.coordinate).toEqual(defaultCoordinate);
    });

    describe(`${NORTH}`, () => {
        test('should not move to prevent robot from failing', () => {
            const move = new Move();
            const state: State = {
                coordinate: {
                    column: 0,
                    row: 4,
                    currentDirection: NORTH
                },
                isRobotOnTable: true,
                output: 'output'
            };

            const result = move.execute(state);

            expect(result.isRobotOnTable).toBeTruthy();
            expect(result.output).toEqual(state.output);
            expect(result.coordinate).toStrictEqual(state.coordinate);
        });

        test('should move to next unit', () => {
            const move = new Move();
            const state: State = {
                coordinate: {
                    column: 0,
                    row: 3,
                    currentDirection: NORTH
                },
                isRobotOnTable: true,
                output: 'output'
            };

            const result = move.execute(state);

            expect(result.isRobotOnTable).toBeTruthy();
            expect(result.output).toEqual(state.output);
            expect(result.coordinate.row).toEqual(state.coordinate.row + 1);
            expect(result.coordinate.column).toEqual(state.coordinate.column);
            expect(result.coordinate.currentDirection).toEqual(state.coordinate.currentDirection);
        });
    });

    describe(`${EAST}`, () => {
        test('should not move to prevent robot from failing', () => {
            const move = new Move();
            const state: State = {
                coordinate: {
                    column: 4,
                    row: 0,
                    currentDirection: EAST
                },
                isRobotOnTable: true,
                output: 'output'
            };

            const result = move.execute(state);

            expect(result.isRobotOnTable).toBeTruthy();
            expect(result.output).toEqual(state.output);
            expect(result.coordinate).toStrictEqual(state.coordinate);
        });

        test('should move to next unit', () => {
            const move = new Move();
            const state: State = {
                coordinate: {
                    column: 3,
                    row: 0,
                    currentDirection: EAST
                },
                isRobotOnTable: true,
                output: 'output'
            };

            const result = move.execute(state);

            expect(result.isRobotOnTable).toBeTruthy();
            expect(result.output).toEqual(state.output);
            expect(result.coordinate.row).toEqual(state.coordinate.row);
            expect(result.coordinate.column).toEqual(state.coordinate.column + 1);
            expect(result.coordinate.currentDirection).toEqual(state.coordinate.currentDirection);
        });
    });

    describe(`${SOUTH}`, () => {
        test('should not move to prevent robot from failing', () => {
            const move = new Move();
            const state: State = {
                coordinate: {
                    column: 4,
                    row: 0,
                    currentDirection: SOUTH
                },
                isRobotOnTable: true,
                output: 'output'
            };

            const result = move.execute(state);

            expect(result.isRobotOnTable).toBeTruthy();
            expect(result.output).toEqual(state.output);
            expect(result.coordinate).toStrictEqual(state.coordinate);
        });

        test('should move to next unit', () => {
            const move = new Move();
            const state: State = {
                coordinate: {
                    column: 4,
                    row: 1,
                    currentDirection: SOUTH
                },
                isRobotOnTable: true,
                output: 'output'
            };

            const result = move.execute(state);

            expect(result.isRobotOnTable).toBeTruthy();
            expect(result.output).toEqual(state.output);
            expect(result.coordinate.row).toEqual(state.coordinate.row - 1);
            expect(result.coordinate.column).toEqual(state.coordinate.column);
            expect(result.coordinate.currentDirection).toEqual(state.coordinate.currentDirection);
        });
    });

    describe(`${WEST}`, () => {
        test('should not move to prevent robot from failing', () => {
            const move = new Move();
            const state: State = {
                coordinate: {
                    column: 0,
                    row: 4,
                    currentDirection: WEST
                },
                isRobotOnTable: true,
                output: 'output'
            };

            const result = move.execute(state);

            expect(result.isRobotOnTable).toBeTruthy();
            expect(result.output).toEqual(state.output);
            expect(result.coordinate).toStrictEqual(state.coordinate);
        });

        test('should move to next unit', () => {
            const move = new Move();
            const state: State = {
                coordinate: {
                    column: 1,
                    row: 4,
                    currentDirection: WEST
                },
                isRobotOnTable: true,
                output: 'output'
            };

            const result = move.execute(state);

            expect(result.isRobotOnTable).toBeTruthy();
            expect(result.output).toEqual(state.output);
            expect(result.coordinate.row).toEqual(state.coordinate.row);
            expect(result.coordinate.column).toEqual(state.coordinate.column - 1);
            expect(result.coordinate.currentDirection).toEqual(state.coordinate.currentDirection);
        });
    });
});
