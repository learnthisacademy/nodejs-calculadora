import { closeInterface } from '#Lib/promptQuestion';
import { bootstrap } from './bootstrap.js';

const main = async () => {
    let stopFlag = false;

    while (!stopFlag) {
        const flag = await bootstrap();
        stopFlag = flag;
    }

    closeInterface();
};

main();
