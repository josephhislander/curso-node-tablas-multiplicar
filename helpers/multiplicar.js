const fs = require('fs');
const colors = require('colors');


const crearArchivo = async(base = 1, listar = false, hasta = 10) => {

   try {  
  
   
    let salida = '';
    let consola = '';


    for ( i = 1 ; i <= hasta; i++) {
        salida += (`${base} x ${i} = ${base * i}\n`);
        consola += (`${base} ${'x'.green} ${i} ${ '='.green} ${base * i}\n`);
    }

    if ( listar == true) {
        console.log('=================================='.green);
        console.log( `Tabla del: ${base}`.rainbow);
        console.log('=================================='.green);
        console.log(salida);
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)

    return (`tabla-${base}.txt `).rainbow

    } catch (error) {
        throw error;
    }
}


module.exports = {
    crearArchivo
}