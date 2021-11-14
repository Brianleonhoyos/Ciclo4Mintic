function leerArchivo(csv, separador=',', omitirEncabezado=false){
    if (typeof csv !== 'string'){
        throw TypeError('Archivo no valido');
    }

    return csv.slice(omitirEncabezado ? csv.indexOf('\n')+ 1 : 0)
    .split('\n')
    .map(l => l.split(separador));
}

function guardarArchivo(){
    leerArchivo(csv);
    let excel = [leerArchivo()];
    return excel
}