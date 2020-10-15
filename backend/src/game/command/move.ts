import { EAST, NORTH, SOUTH, WEST } from '../direction';
import { isNotFirstColumn, isNotFirstRow, isNotLastColumn, isNotLastRow } from '../board';
import { Command, Values } from './command';

export class Move implements Command {

    public execute(values: Values): Values {

        if (!values.isRobotOnTable) {
            return values;
        }

        let { column, row } = values.coordinate;

        switch (values.coordinate.currentDirection) {
            case NORTH:
                if (isNotLastRow(row)) row ++;
                break;
            case EAST:
                if (isNotLastColumn(column)) column ++;
                break;
            case SOUTH:
                if (isNotFirstRow(row)) row --;
                break;
            case WEST:
                if (isNotFirstColumn(column)) column --;
                break;
            default:
        }

        return {
            ...values,
            coordinate: {
                currentDirection: values.coordinate.currentDirection,
                column,
                row
            }
        }
    }
}
