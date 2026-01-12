import * as icons from 'simple-icons';
import fs from 'fs';
fs.writeFileSync('all_icons.txt', Object.keys(icons).join('\n'));
