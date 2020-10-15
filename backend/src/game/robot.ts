import CommandParser from './command/command-parser';
import { getCommandImpl } from './command/command-factory';
import { defaultCoordinate } from './coordinate';
import { Values } from './command';

export const NO_COMMANDS_FOUND_MSG = 'No commands were provided';

export const play = (rawCommands: string): string => {

    if (!rawCommands) {
        return NO_COMMANDS_FOUND_MSG;
    }

    const commandParser = new CommandParser();

    let result: Values = {
        coordinate: defaultCoordinate
    };

    commandParser
        .parse(rawCommands)
        .forEach(parsedCommand => {
            const command = getCommandImpl(parsedCommand.command);
            const mergedCoordinate = Object.assign({}, result.coordinate, parsedCommand.coordinate);
            const values = {
                ...result,
                coordinate: mergedCoordinate
            };

            result = command.execute(values);
        });

    return result.output as string;
};
