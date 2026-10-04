import { mkdir, writeFile } from 'node:fs/promises';
import { greeting } from '../src/app.js';
await mkdir('dist', { recursive: true });
await writeFile('dist/app.txt', `${greeting('GH-200 learner')}\n`, 'utf8');
console.log('Created dist/app.txt');
