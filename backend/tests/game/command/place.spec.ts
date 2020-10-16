import { Place } from '../../../src/game/command/place';
import { State } from '../../../src/game/command';
import { Coordinate, defaultCoordinate } from '../../../src/game/coordinate';

describe('Place', () => {

    const assertResult = (result: State, isRobotOnTable: boolean, coordinate: Coordinate) => {
        expect(result.output).toBeUndefined();
        expect(result.isRobotOnTable).toEqual(isRobotOnTable);
        expect(result.coordinate).toStrictEqual(coordinate);
    };

    test('should execute command Place and return coordinate and isRobotOnTable = true', () => {
        const place = new Place();
        const state: State = {
            coordinate: defaultCoordinate
        };

        const result = place.execute(state);
        assertResult(result, true, state.coordinate);
    });

    test('should execute command Place and return coordinate and isRobotOnTable = false', () => {
        const place = new Place();
        const state: State = {
            coordinate: {
                ...defaultCoordinate,
                column: 5
            }
        };

        const result = place.execute(state);
        assertResult(result, false, state.coordinate);
    });

});
