import { RIGHT, turnFrom } from '../direction';
import { Command, Values } from './command';

export class Right implements Command {

    public execute(values: Values): Values {

        if (!values.isRobotOnTable) {
            return values;
        }

        const { currentDirection, column, row } = values.coordinate;
        const nextDirection = turnFrom(currentDirection, RIGHT);

        return {
            ...values,
            coordinate: {
                currentDirection: nextDirection,
                column,
                row
            }
        }
    }
}
