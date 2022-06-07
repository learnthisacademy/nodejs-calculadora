import { BINARY_OPERATORS } from '#Constants/operators';
import { InvalidInputError } from '#Errors/invalidInputError';
import { getBinaryOperatings, getSingleOperating } from '#Lib/getOperatings';
import { getOperator } from '#Lib/getOperator';
import { promptQuestion } from '#Lib/promptQuestion';

(async () => {
    try {
        // 1º Capturar la entrada del usuario por consola.
        const userAnswer = await promptQuestion('Introduce tu operación: ');

        // 2º Validar la entrada y separar las partes de la misma en operandos y operador.
        const standarizeInput = userAnswer.trim();

        if (!standarizeInput) throw new InvalidInputError();

        const operator = getOperator(standarizeInput);

        if (!operator) throw new InvalidInputError();

        const splittedInput = standarizeInput.split(operator);

        if (BINARY_OPERATORS.includes(operator)) {
            const { firstOperating, secondOperating } =
                getBinaryOperatings(splittedInput);

            console.log(firstOperating, operator, secondOperating);
        } else {
            const { firstOperating } = getSingleOperating(splittedInput);

            console.log(operator, firstOperating);
        }

        // 3º Realizar la operación
        // 4º Mostrar resultado por consola
    } catch (error) {
        if (error instanceof InvalidInputError) console.log(error.message);
        else
            console.log(
                `Error no esperado: ${error.message}. Stack: ${error.stack}`
            );
    }
})();
