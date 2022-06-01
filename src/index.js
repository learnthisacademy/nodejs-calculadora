import { promptQuestion } from '#Lib/promptQuestion';

(async () => {
    // 1º Capturar la entrada del usuario por consola.
    const userAnswer = await promptQuestion('Introduce tu operación: ');
    console.log(userAnswer);

    // 2º Validar la entrada y separar las partes de la misma en operandos y operador.
    // 3º Realizar la operación
    // 4º Mostrar resultado por consola
})();
