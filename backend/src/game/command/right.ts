import { RIGHT, turnFrom } from '../direction';
import { Command, State } from './command';

export class Right implements Command {

    public execute(state: State): State {

        if (!state.isRobotOnTable) {
            return state;
        }

        const { currentDirection, column, row } = state.coordinate;
        const nextDirection = turnFrom(currentDirection, RIGHT);

        return {
            ...state,
            coordinate: {
                currentDirection: nextDirection,
                column,
                row
            }
        }
    }
}
