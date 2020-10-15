import { Report } from '../../../src/game/command/report';
import { Values } from '../../../src/game/command';
import { defaultCoordinate } from '../../../src/game/coordinate';
import { WEST } from '../../../src/game/direction';

describe('Report', () => {
    test('should do nothing when isRobotOnTable = false', () => {
        const report = new Report();
        const values: Values = {
            coordinate: defaultCoordinate,
            isRobotOnTable: false,
            output: 'output'
        };

        const result = report.execute(values);

        expect(result.isRobotOnTable).toBeFalsy();
        expect(result.output).toEqual(values.output);
        expect(result.coordinate).toStrictEqual(defaultCoordinate);
    });

    test('should return a report', () => {
        const report = new Report();
        const values: Values = {
            coordinate: {
                column: 1,
                row: 2,
                currentDirection: WEST
            },
            isRobotOnTable: true,
            output: 'output'
        };

        const result = report.execute(values);

        expect(result.isRobotOnTable).toBeTruthy();
        expect(result.output).toEqual('1,2,WEST');
        expect(result.coordinate).toStrictEqual(values.coordinate);
    })
});
