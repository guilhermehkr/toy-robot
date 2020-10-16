import { Right } from '../../../src/game/command/right';
import { State } from '../../../src/game/command';
import { defaultCoordinate } from '../../../src/game/coordinate';
import { EAST } from '../../../src/game/direction';

describe('Right', () => {
    test('should do nothing when isRobotOnTable = false', () => {
        const right = new Right();
        const state: State = {
            coordinate: defaultCoordinate,
            isRobotOnTable: false,
            output: 'output'
        };

        const result = right.execute(state);

        expect(result.isRobotOnTable).toBeFalsy();
        expect(result.output).toEqual(state.output);
        expect(result.coordinate).toEqual(defaultCoordinate);
    });

    test('should rotate robot to right', () => {
        const right = new Right();
        const state: State = {
            coordinate: defaultCoordinate,
            isRobotOnTable: true,
            output: 'output'
        };

        const result = right.execute(state);

        expect(result.isRobotOnTable).toBeTruthy();
        expect(result.output).toEqual(state.output);
        expect(result.coordinate.column).toEqual(defaultCoordinate.column);
        expect(result.coordinate.row).toEqual(defaultCoordinate.row);
        expect(result.coordinate.currentDirection).toEqual(EAST);
    });
});
