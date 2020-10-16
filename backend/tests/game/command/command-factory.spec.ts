import { CommandEnum } from '../../../src/game/command';
import { Place } from '../../../src/game/command/place';
import { Move } from '../../../src/game/command/move';
import { Left } from '../../../src/game/command/left';
import { Right } from '../../../src/game/command/right';
import { Report } from '../../../src/game/command/report';
import { Invalid } from '../../../src/game/command/invalid';
import { getCommandImpl } from '../../../src/game/command/command-factory';

describe('command-factory', () => {

    test(`should return Place() implementation when command is ${CommandEnum.PLACE}`, () => {
        expect(getCommandImpl(CommandEnum.PLACE)).toBeInstanceOf(Place);
    });

    test(`should return Move() implementation when command is ${CommandEnum.MOVE}`, () => {
        expect(getCommandImpl(CommandEnum.MOVE)).toBeInstanceOf(Move);
    });

    test(`should return Left() implementation when command is ${CommandEnum.LEFT}`, () => {
        expect(getCommandImpl(CommandEnum.LEFT)).toBeInstanceOf(Left);
    });

    test(`should return Right() implementation when command is ${CommandEnum.RIGHT}`, () => {
        expect(getCommandImpl(CommandEnum.RIGHT)).toBeInstanceOf(Right);
    });

    test(`should return Report() implementation when command is ${CommandEnum.REPORT}`, () => {
        expect(getCommandImpl(CommandEnum.REPORT)).toBeInstanceOf(Report);
    });

    test(`should return Invalid() implementation when command is ${CommandEnum.INVALID}`, () => {
        expect(getCommandImpl(CommandEnum.INVALID)).toBeInstanceOf(Invalid);
    });

    test(`should return Invalid() implementation when command is null`, () => {
        const warnMock = jest.spyOn(global.console, 'warn');
        warnMock.mockImplementation(() => {});

        expect(getCommandImpl((null as unknown) as CommandEnum)).toBeInstanceOf(Invalid);
        expect(warnMock).toHaveBeenCalled();
    });
});
