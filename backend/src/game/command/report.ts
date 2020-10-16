import { Command, State } from './command';

export class Report implements Command {

    execute(state: State): State {

        const { isRobotOnTable, coordinate } = state;
        if (!isRobotOnTable) {
            return state;
        }

        return {
            ...state,
            output: `${coordinate.column},${coordinate.row},${coordinate.currentDirection}`
        };
    }
}
