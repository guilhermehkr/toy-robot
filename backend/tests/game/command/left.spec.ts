import { Left } from '../../../src/game/command/left';
import { Values } from '../../../src/game/command';
import { defaultCoordinate } from '../../../src/game/coordinate';
import { WEST } from '../../../src/game/direction';

describe('Left', () => {
    test('should do nothing when isRobotOnTable = false', () => {
        const left = new Left();
        const values: Values = {
            coordinate: defaultCoordinate,
            isRobotOnTable: false,
            output: 'output'
        };

        const result = left.execute(values);

        expect(result.isRobotOnTable).toBeFalsy();
        expect(result.output).toEqual(values.output);
        expect(result.coordinate).toStrictEqual(defaultCoordinate);
    });

    test('should rotate robot to left', () => {
        const left = new Left();
        const values: Values = {
            coordinate: defaultCoordinate,
            isRobotOnTable: true,
            output: 'output'
        };

        const result = left.execute(values);

        expect(result.isRobotOnTable).toBeTruthy();
        expect(result.output).toEqual(values.output);
        expect(result.coordinate.column).toEqual(defaultCoordinate.column);
        expect(result.coordinate.row).toEqual(defaultCoordinate.row);
        expect(result.coordinate.currentDirection).toEqual(WEST);
    });
});
