import { Place } from '../../../src/game/command/place';
import { Values } from '../../../src/game/command';
import { Coordinate, defaultCoordinate } from '../../../src/game/coordinate';

describe('Place', () => {

    const assertResult = (result: Values, isRobotOnTable: boolean, coordinate: Coordinate) => {
        expect(result.output).toBeUndefined();
        expect(result.isRobotOnTable).toEqual(isRobotOnTable);
        expect(result.coordinate).toStrictEqual(coordinate);
    };

    test('should execute command Place and return coordinate and isRobotOnTable = true', () => {
        const place = new Place();
        const values: Values = {
            coordinate: defaultCoordinate
        };

        const result = place.execute(values);
        assertResult(result, true, values.coordinate);
    });

    test('should execute command Place and return coordinate and isRobotOnTable = false', () => {
        const place = new Place();
        const values: Values = {
            coordinate: {
                ...defaultCoordinate,
                column: 5
            }
        };

        const result = place.execute(values);
        assertResult(result, false, values.coordinate);
    });

});
