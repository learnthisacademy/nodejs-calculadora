export const operations = {
    '+': (firstOperating, secondOperating) => firstOperating + secondOperating,
    '-': (firstOperating, secondOperating) => firstOperating - secondOperating,
    '*': (firstOperating, secondOperating) => firstOperating * secondOperating,
    '/': (firstOperating, secondOperating) => firstOperating / secondOperating,
    '^': (firstOperating, secondOperating) => firstOperating ** secondOperating,
    log: (operating) => Math.log10(operating),
    sqrt: (operating) => Math.sqrt(operating),
};
