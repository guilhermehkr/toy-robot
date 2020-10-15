import fs from 'fs';
import path from 'path';

export const loadExample = () => fs.readFileSync(path.join(__dirname, './example/commands')).toString();
