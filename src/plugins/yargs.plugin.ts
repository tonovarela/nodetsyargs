import yargs from "yargs";
import { hideBin } from "yargs/helpers";

export const yarg = yargs(hideBin(process.argv))
    .options('b', {
        alias: 'base',
        demandOption: true,
        type: 'number',
        describe: 'Es la base de la multiplicación'
    }).option('l', {
        alias: 'limit',
        type: 'number',
        describe: 'Es el limite para multiplicar',
        default: 10
    })
    .option('s', {
        alias: 'show',
        type: 'boolean',
        describe: 'Mostrar tabla de multiplicación',
        default: false
    })
    .option('d', {
        alias: 'destination',
        type: 'string',
        describe: 'Dirección donde se guardará la tabla',
        default: './outputs'
    })
    .option('n', {
        alias: 'name',
        type: 'string',
        describe: 'Nombre de la tabla',
        default: 'table.txt'
    })
    .check((argv, _) => {
        const { b } = argv
        if (b < 0) {
            throw new Error('La base debe ser mayor a 0')
        }
        return true;
    })
    .parseSync();



