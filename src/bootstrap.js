import { operations } from '#Constants/operations.js';
import { InvalidInputError } from '#Errors/invalidInputError.js';
import { extractByRegex } from '#Lib/extractByRegex.js';
import { promptQuestion } from '#Lib/promptQuestion.js';

export const bootstrap = async () => {
    try {
        // 1º Capturar la entrada del usuario por consola.
        const userAnswer = await promptQuestion('Introduce tu operación: ');

        // 2º Validar la entrada y separar las partes de la misma en operandos y operador.
        const standarizeInput = userAnswer.trim().replaceAll(',', '.');

        if (!standarizeInput) throw new InvalidInputError();
        if (standarizeInput === 'exit') {
            return true;
        }

        const [firstOperating, operator, secondOperating] =
            extractByRegex(standarizeInput);

        // 3º Realizar la operación
        const result = operations[operator](firstOperating, secondOperating);

        const roundedResult = Number(Math.round(result + 'e+5') + 'e-5');

        // 4º Mostrar resultado por consola
        if (isNaN(roundedResult) || !isFinite(roundedResult))
            console.log('OPERACIÓN NO VÁLIDA\n');
        else console.log(`El resultado es: ${roundedResult}\n`);
    } catch (error) {
        if (error instanceof InvalidInputError)
            console.log(`${error.message}\n`);
        else
            console.log(
                `Error no esperado: ${error.message}. Stack: ${error.stack}\n`
            );
    }
};
