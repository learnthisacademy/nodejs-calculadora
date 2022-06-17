import { operations } from '#Constants/operations.js';
import { BINARY_OPERATORS } from '#Constants/operators.js';
import { InvalidInputError } from '#Errors/invalidInputError.js';
import { getBinaryOperatings, getSingleOperating } from '#Lib/getOperatings.js';
import { getOperator } from '#Lib/getOperator.js';
import { promptQuestion } from '#Lib/promptQuestion.js';

export const bootstrap = async () => {
    try {
        // 1º Capturar la entrada del usuario por consola.
        const userAnswer = await promptQuestion('Introduce tu operación: ');

        // 2º Validar la entrada y separar las partes de la misma en operandos y operador.
        const standarizeInput = userAnswer.trim();

        if (!standarizeInput) throw new InvalidInputError();
        if (standarizeInput === 'exit') {
            return true;
        }

        const operator = getOperator(standarizeInput);

        if (!operator) throw new InvalidInputError();

        const splittedInput = standarizeInput.split(operator);

        let firstOperating, secondOperating;

        if (BINARY_OPERATORS.includes(operator))
            [firstOperating, secondOperating] =
                getBinaryOperatings(splittedInput);
        else [firstOperating] = getSingleOperating(splittedInput);

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
