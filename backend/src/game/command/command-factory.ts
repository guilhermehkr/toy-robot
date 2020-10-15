import { Command, Commands } from './command';
import { Place } from './place';
import { Move } from './move';
import { Left } from './left';
import { Right } from './right';
import { Report } from './report';
import { Invalid } from './invalid';

const COMMANDS = new Map<Commands, Command>(
    [
        [ Commands.PLACE, new Place() ],
        [ Commands.MOVE, new Move() ],
        [ Commands.LEFT, new Left() ],
        [ Commands.RIGHT, new Right() ],
        [ Commands.REPORT, new Report() ],
        [ Commands.INVALID, new Invalid() ],
    ]
);

export const getCommandImpl = (enumeration: Commands): Command => {
    let command = COMMANDS.get(enumeration);
    if (!command) {
        console.warn(`Command enum ${enumeration} has not been mapped, returning ${Commands.INVALID} instead`);
        command = new Invalid();
    }
    return command;
};
