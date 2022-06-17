import { InvalidInputError } from '#Errors/invalidInputError.js';

export const getBinaryOperatings = ([leftSide, rightSide]) => {
    // Comprobamos que la parte izquierda y derecha del operador
    // tengan valor
    if (!leftSide || !rightSide) throw new InvalidInputError();

    // Parseamos esas partes a números
    const firstOperating = Number(leftSide.replaceAll(',', '.'));
    const secondOperating = Number(rightSide.replaceAll(',', '.'));

    // Validamos que no sean NaN ni infinitos
    if (isNaN(firstOperating) || !isFinite(firstOperating))
        throw new InvalidInputError();
    if (isNaN(secondOperating) || !isFinite(secondOperating))
        throw new InvalidInputError();

    return [firstOperating, secondOperating];
};

export const getSingleOperating = ([leftSide, rightSide]) => {
    // Comprobamos que la parte izquierda no tenga valor
    // y la derecha sí lo tenga
    if (leftSide || !rightSide) throw new InvalidInputError();

    // Comprobamos que la parte derecha tenga al menos ()
    if (!rightSide.startsWith('(') && !rightSide.endsWith(')'))
        throw new InvalidInputError();

    // Extraemos el contenido de los paréntesis y validamos
    // que sea un número válido
    let firstOperating = rightSide.slice(1, -1);
    firstOperating = Number(firstOperating.replaceAll(',', '.'));

    if (isNaN(firstOperating) || !isFinite(firstOperating))
        throw new InvalidInputError();

    return [firstOperating];
};
