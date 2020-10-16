import { Command, State } from './command';

export class Invalid implements Command {

    execute(state: State): State {
        return state;
    }
}
