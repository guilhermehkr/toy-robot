import { EAST, NORTH, SOUTH, WEST } from '../direction';
import { isNotFirstColumn, isNotFirstRow, isNotLastColumn, isNotLastRow } from '../board';
import { Command, State } from './command';

export class Move implements Command {

    public execute(state: State): State {

        if (!state.isRobotOnTable) {
            return state;
        }

        let { column, row } = state.coordinate;

        switch (state.coordinate.currentDirection) {
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
            ...state,
            coordinate: {
                currentDirection: state.coordinate.currentDirection,
                column,
                row
            }
        }
    }
}
