import { BINARY_REGEX, SINGLE_REGEX } from '#Constants/regex.js';
import { InvalidInputError } from '#Errors/invalidInputError.js';

export const extractByRegex = (standarizeInput) => {
    const binaryResult = BINARY_REGEX.exec(standarizeInput)?.slice(1);
    const singleResult = SINGLE_REGEX.exec(standarizeInput)?.slice(1);

    let firstOperating, operator, secondOperating;

    if (binaryResult)
        [firstOperating, operator, secondOperating] = binaryResult;
    else if (singleResult) [operator, firstOperating] = singleResult;
    else throw new InvalidInputError();

    firstOperating = Number(firstOperating);
    secondOperating = Number(secondOperating);

    // Validamos que no sean NaN ni infinitos
    if (isNaN(firstOperating) || !isFinite(firstOperating))
        throw new InvalidInputError();
    if (binaryResult && (isNaN(secondOperating) || !isFinite(secondOperating)))
        throw new InvalidInputError();

    return [firstOperating, operator, secondOperating];
};
