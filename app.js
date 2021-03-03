const { crearArchivo } = require ('./helpers/multiplicar')
const argv = require('./config/yargs')
require('colors')


console.clear();

// console.log(argv);
// console.log('base: yargs', argv.b, argv.l);


crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'.red))
    .catch(err => console.log(err));
