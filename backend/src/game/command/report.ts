import { Command, Values } from './command';

export class Report implements Command {

    execute(values: Values): Values {

        const { isRobotOnTable, coordinate } = values;
        if (!isRobotOnTable) {
            return values;
        }

        return {
            ...values,
            output: Object.values(coordinate).join(',')
        };
    }
}