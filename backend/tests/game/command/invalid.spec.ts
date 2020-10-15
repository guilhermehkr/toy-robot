import { Invalid } from '../../../src/game/command/invalid';
import { Values } from '../../../src/game/command';
import { defaultCoordinate } from '../../../src/game/coordinate';

describe('Invalid', () => {
    test('should just return values', () => {
        const invalid = new Invalid();
        const values: Values = {
            coordinate: defaultCoordinate,
            isRobotOnTable: false,
            output: 'output'
        };

        const result = invalid.execute(values);

        expect(result.isRobotOnTable).toBeFalsy();
        expect(result.output).toEqual(values.output);
        expect(result.coordinate).toStrictEqual(defaultCoordinate);
    });
});
