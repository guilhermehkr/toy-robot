import { isCoordinateWithinBoundaries } from '../board';
import { Command, State } from './command';

export class Place implements Command {

    public execute(state: State): State {

        const { column, row } = state.coordinate;
        const isRobotOnTable = isCoordinateWithinBoundaries(column, row);

        return {
            ...state,
            isRobotOnTable
        };
    }
}
