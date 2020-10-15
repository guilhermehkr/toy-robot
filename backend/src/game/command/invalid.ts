import { Command, Values } from './command';

export class Invalid implements Command {

    execute(values: Values): Values {
        return values;
    }
}
