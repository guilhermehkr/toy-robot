const COLUMNS = 5;
const ROWS = 5;
const FIRST = 0;
const LAST = 4;

export const isCoordinateWithinBoundaries = (column: number, row: number): boolean =>
    (row < ROWS && column < COLUMNS)
        && (row >= FIRST && column >= FIRST);

export const isNotLastRow =
    (row: number): boolean => row !== LAST;

export const isNotFirstRow =
    (row: number): boolean => row !== FIRST;

export const isNotLastColumn =
    (column: number): boolean => column !== LAST;

export const isNotFirstColumn =
    (column: number): boolean => column !== FIRST;
