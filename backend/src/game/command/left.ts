import { LEFT, turnFrom } from '../direction';
import { Command, State } from './command';

export class Left implements Command {

    public execute(state: State): State {

        if (!state.isRobotOnTable) {
            return state;
        }

        const { currentDirection, column, row } = state.coordinate;
        const nextDirection = turnFrom(currentDirection, LEFT);

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
