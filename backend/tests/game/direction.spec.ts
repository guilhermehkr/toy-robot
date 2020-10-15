import {
    NORTH,
    EAST,
    SOUTH,
    WEST,
    RIGHT,
    LEFT,
    turnFrom
} from '../../src/game/direction';

describe('direction', () => {

    describe('turn right', () => {
        test(`should face ${NORTH} when it turns right from ${WEST}`, () => {
            expect(turnFrom(WEST, RIGHT)).toEqual(NORTH);
        });

        test(`should face ${EAST} when it turns right from ${NORTH}`, () => {
            expect(turnFrom(NORTH, RIGHT)).toEqual(EAST);
        });

        test(`should face ${SOUTH} when it turns right from ${EAST}`, () => {
            expect(turnFrom(EAST, RIGHT)).toEqual(SOUTH);
        });

        test(`should face ${WEST} when it turns right from ${SOUTH}`, () => {
            expect(turnFrom(SOUTH, RIGHT)).toEqual(WEST);
        });
    });

    describe('turn left', () => {
        test(`should face ${WEST} when it turns left from ${NORTH}`, () => {
            expect(turnFrom(NORTH, LEFT)).toEqual(WEST);
        });

        test(`should face ${SOUTH} when it turns left from ${WEST}`, () => {
            expect(turnFrom(WEST, LEFT)).toEqual(SOUTH);
        });

        test(`should face ${EAST} when it turns left from ${SOUTH}`, () => {
            expect(turnFrom(SOUTH, LEFT)).toEqual(EAST);
        });

        test(`should face ${NORTH} when it turns left from ${EAST}`, () => {
            expect(turnFrom(EAST, LEFT)).toEqual(NORTH);
        });
    });
});
