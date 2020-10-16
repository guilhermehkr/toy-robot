import CommandParser from './command/command-parser';
import { getCommandImpl } from './command/command-factory';
import { defaultCoordinate } from './coordinate';
import { State } from './command';

export const NO_COMMANDS_FOUND_MSG = 'No commands were provided';

export const play = (rawCommands: string): string => {

    if (!rawCommands) {
        return NO_COMMANDS_FOUND_MSG;
    }

    const commandParser = new CommandParser();

    let state: State = {
        coordinate: defaultCoordinate
    };

    commandParser
        .parse(rawCommands)
        .forEach(parsedCommand => {
            const command = getCommandImpl(parsedCommand.command);
            const mergedCoordinate = Object.assign({}, state.coordinate, parsedCommand.coordinate);
            const updatedState = {
                ...state,
                coordinate: mergedCoordinate
            };

            state = command.execute(updatedState);
        });

    return state.output as string;
};
