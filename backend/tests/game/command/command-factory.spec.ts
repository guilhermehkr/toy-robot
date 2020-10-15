import { Commands } from '../../../src/game/command';
import { Place } from '../../../src/game/command/place';
import { Move } from '../../../src/game/command/move';
import { Left } from '../../../src/game/command/left';
import { Right } from '../../../src/game/command/right';
import { Report } from '../../../src/game/command/report';
import { Invalid } from '../../../src/game/command/invalid';
import { getCommandImpl } from '../../../src/game/command/command-factory';

describe('command-factory', () => {

    test(`should return Place() implementation when command is ${Commands.PLACE}`, () => {
        expect(getCommandImpl(Commands.PLACE)).toBeInstanceOf(Place);
    });

    test(`should return Move() implementation when command is ${Commands.MOVE}`, () => {
        expect(getCommandImpl(Commands.MOVE)).toBeInstanceOf(Move);
    });

    test(`should return Left() implementation when command is ${Commands.LEFT}`, () => {
        expect(getCommandImpl(Commands.LEFT)).toBeInstanceOf(Left);
    });

    test(`should return Right() implementation when command is ${Commands.RIGHT}`, () => {
        expect(getCommandImpl(Commands.RIGHT)).toBeInstanceOf(Right);
    });

    test(`should return Report() implementation when command is ${Commands.REPORT}`, () => {
        expect(getCommandImpl(Commands.REPORT)).toBeInstanceOf(Report);
    });

    test(`should return Invalid() implementation when command is ${Commands.INVALID}`, () => {
        expect(getCommandImpl(Commands.INVALID)).toBeInstanceOf(Invalid);
    });

    test(`should return Invalid() implementation when command is null`, () => {
        const warnMock = jest.spyOn(global.console, 'warn');
        warnMock.mockImplementation(() => {});

        expect(getCommandImpl((null as unknown) as Commands)).toBeInstanceOf(Invalid);
        expect(warnMock).toHaveBeenCalled();
    });
});
