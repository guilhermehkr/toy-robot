import { Command, CommandEnum } from './command';
import { Place } from './place';
import { Move } from './move';
import { Left } from './left';
import { Right } from './right';
import { Report } from './report';
import { Invalid } from './invalid';

const COMMANDS = new Map<CommandEnum, Command>(
    [
        [ CommandEnum.PLACE, new Place() ],
        [ CommandEnum.MOVE, new Move() ],
        [ CommandEnum.LEFT, new Left() ],
        [ CommandEnum.RIGHT, new Right() ],
        [ CommandEnum.REPORT, new Report() ],
        [ CommandEnum.INVALID, new Invalid() ],
    ]
);

export const getCommandImpl = (enumeration: CommandEnum): Command => {
    let command = COMMANDS.get(enumeration);
    if (!command) {
        console.warn(`Command enum ${enumeration} has not been mapped, returning ${CommandEnum.INVALID} instead`);
        command = new Invalid();
    }
    return command;
};
