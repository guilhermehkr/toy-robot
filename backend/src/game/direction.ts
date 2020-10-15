export const NORTH = 'NORTH';
export const EAST = 'EAST';
export const SOUTH = 'SOUTH';
export const WEST = 'WEST';

export const RIGHT = 1;
export const LEFT = -1;

const DIRECTIONS: DirectionType[] = [
    NORTH,
    EAST,
    SOUTH,
    WEST
];

const FIRST_DIRECTION_INDEX = 0;
const DIRECTIONS_LENGTH = DIRECTIONS.length;

export type DirectionType = 'NORTH' | 'EAST' | 'SOUTH' | 'WEST';

export const turnFrom = (currentDirection: DirectionType, step: number): DirectionType => {
    const nextPosition = findDirectionIndex(currentDirection) + step;
    const nextDirectionIndex =
        nextPosition < FIRST_DIRECTION_INDEX
            ? getLastDirectionIndex()
            : nextPosition % DIRECTIONS_LENGTH;

    return getDirectionAtIndex(nextDirectionIndex);
};

const findDirectionIndex = (otherDirection: DirectionType): number => {
    return DIRECTIONS.findIndex(direction => direction === otherDirection);
};

const getLastDirectionIndex = (): number => DIRECTIONS.length - 1;

const getDirectionAtIndex = (directionIndex: number): DirectionType => DIRECTIONS[directionIndex];
