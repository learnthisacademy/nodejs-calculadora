import readline from 'readline';
import { promisify } from 'util';

const consoleInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

export const promptQuestion = promisify(consoleInterface.question).bind(
    consoleInterface
);
