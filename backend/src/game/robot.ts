import CommandParser from './command/command-parser';
import { getCommandImpl } from './command/command-factory';
import { defaultCoordinate } from './coordinate';
import { Values } from './command';

export const play = (rawCommands: string): string | undefined => {

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

    return result.output;
};
