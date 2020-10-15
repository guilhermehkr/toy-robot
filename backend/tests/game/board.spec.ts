import {
    isCoordinateWithinBoundaries,
    isNotFirstRow,
    isNotLastRow,
    isNotFirstColumn,
    isNotLastColumn
} from '../../src/game/board';

describe('board', () => {

    describe('isCoordinateWithinBoundaries', () => {

        test('should return false when column is out of upper boundary', () => {
            expect(isCoordinateWithinBoundaries(5, 4)).toEqual(false);
        });

        test('should return false when row is out of upper boundary', () => {
            expect(isCoordinateWithinBoundaries(4, 5)).toEqual(false);
        });

        test('should return false when column is out of lower boundary', () => {
            expect(isCoordinateWithinBoundaries(-1, 0)).toEqual(false);
        });

        test('should return false when row is out of lower boundary', () => {
            expect(isCoordinateWithinBoundaries(0, -1)).toEqual(false);
        });

        test('should return true when column and row are within upper boundary', () => {
            expect(isCoordinateWithinBoundaries(4, 4)).toEqual(true);
        });

        test('should return true when column and row are within lower boundary', () => {
            expect(isCoordinateWithinBoundaries(0, 0)).toEqual(true);
        });
    });

    describe('isNotFirstRow', () => {
        test('should return false when it is first row', () => {
            expect(isNotFirstRow(0)).toEqual(false);
        });

        test('should return true when it is not first row', () => {
            expect(isNotFirstRow(1)).toEqual(true);
        });
    });

    describe('isNotLastRow', () => {
        test('should return false when it is last row', () => {
            expect(isNotLastRow(4)).toEqual(false);
        });

        test('should return true when it is not last row', () => {
            expect(isNotLastRow(3)).toEqual(true);
        });
    });

    describe('isNotFirstColumn', () => {
        test('should return false when it is first column', () => {
            expect(isNotFirstColumn(0)).toEqual(false);
        });

        test('should return true when it is not first column', () => {
            expect(isNotFirstColumn(1)).toEqual(true);
        });
    });

    describe('isNotLastColumn', () => {
        test('should return false when it is last column', () => {
            expect(isNotLastColumn(4)).toEqual(false);
        });

        test('should return true when it is not last column', () => {
            expect(isNotLastColumn(3)).toEqual(true);
        });
    });
});
