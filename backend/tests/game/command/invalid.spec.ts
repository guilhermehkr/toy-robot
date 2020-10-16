import { Invalid } from '../../../src/game/command/invalid';
import { State } from '../../../src/game/command';
import { defaultCoordinate } from '../../../src/game/coordinate';

describe('Invalid', () => {
    test('should just return state', () => {
        const invalid = new Invalid();
        const state: State = {
            coordinate: defaultCoordinate,
            isRobotOnTable: false,
            output: 'output'
        };

        const result = invalid.execute(state);

        expect(result.isRobotOnTable).toBeFalsy();
        expect(result.output).toEqual(state.output);
        expect(result.coordinate).toStrictEqual(defaultCoordinate);
    });
});
