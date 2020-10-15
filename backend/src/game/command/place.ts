import { isCoordinateWithinBoundaries } from '../board';
import { Command, Values } from './command';

export class Place implements Command {

    public execute(values: Values): Values {

        const { column, row } = values.coordinate;
        const isRobotOnTable = isCoordinateWithinBoundaries(column, row);

        return {
            ...values,
            isRobotOnTable
        };
    }
}
