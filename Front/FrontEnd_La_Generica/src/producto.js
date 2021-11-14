function leerArchivo(texto, separador=',', omitirEncabezado=false){
    if (typeof texto !== 'string'){
        throw TypeError('Archivo no valido');
    }

    return texto.slice(omitirEncabezado ? texto.indexOf('\n')+ 1 : 0)
    .split('\n')
    .map(l => l.split(separador));
}

