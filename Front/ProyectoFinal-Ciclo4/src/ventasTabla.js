let cliente = [
    {
        cliente:"Alfonso", 
        cedula:"12345", 
        fecha:"22/22/2022",
        codigo:"1111",
        valorTotal:"22"
    },
    {
        cliente:"Alfonso", 
        cedula:"12345", 
        fecha:"22/22/2022",
        codigo:"1111",
        valorTotal:"22"
    },
    {
        cliente:"Alfonso", 
        cedula:"12345", 
        fecha:"22/22/2022",
        codigo:"1111",
        valorTotal:"22"
    },
    {
        cliente:"Alfonso", 
        cedula:"12345", 
        fecha:"22/22/2022",
        codigo:"1111",
        valorTotal:"22"
    },
    {
        cliente:"Alfonso", 
        cedula:"12345", 
        fecha:"22/22/2022",
        codigo:"1111",
        valorTotal:"22"
    },
    {
        cliente:"Alfonso", 
        cedula:"12345", 
        fecha:"22/22/2022",
        codigo:"1111",
        valorTotal:"22"
    },
    {
        cliente:"Alfonso", 
        cedula:"12345", 
        fecha:"22/22/2022",
        codigo:"1111",
        valorTotal:"22"
    },
    {
        cliente:"Alfonso", 
        cedula:"12345", 
        fecha:"22/22/2022",
        codigo:"1111",
        valorTotal:"22"
    },
    {
        cliente:"Alfonso", 
        cedula:"12345", 
        fecha:"22/22/2022",
        codigo:"1111",
        valorTotal:"22"
    },
    {
        cliente:"Alfonso", 
        cedula:"12345", 
        fecha:"22/22/2022",
        codigo:"1111",
        valorTotal:"22"
    },
    {
        cliente:"Alfonso", 
        cedula:"12345", 
        fecha:"22/22/2022",
        codigo:"1111",
        valorTotal:"22"
    },
    {
        cliente:"Alfonso", 
        cedula:"12345", 
        fecha:"22/22/2022",
        codigo:"1111",
        valorTotal:"22"
    },
    {
        cliente:"Alfonso", 
        cedula:"12345", 
        fecha:"22/22/2022",
        codigo:"1111",
        valorTotal:"22"
    },
    {
        cliente:"Alfonso", 
        cedula:"12345", 
        fecha:"22/22/2022",
        codigo:"1111",
        valorTotal:"22"
    },
    {
        cliente:"Alfonso", 
        cedula:"12345", 
        fecha:"22/22/2022",
        codigo:"1111",
        valorTotal:"22"
    },
    {
        cliente:"Alfonso", 
        cedula:"12345", 
        fecha:"22/22/2022",
        codigo:"1111",
        valorTotal:"22"
    },
    {
        cliente:"Alfonso", 
        cedula:"12345", 
        fecha:"22/22/2022",
        codigo:"1111",
        valorTotal:"22"
    },
    {
        cliente:"Alfonso", 
        cedula:"12345", 
        fecha:"22/22/2022",
        codigo:"1111",
        valorTotal:"22"
    }

];

//agregar conexion a un microservicio que vaya y busque los datos de ventas al mongo
//cuando se conecte entonces crear operaciones y enviar los datos de ventas como wiriwiri

function agregarElemento(wiriwiri){
    for(let add of wiriwiri){
        tareas.push( //wiriwiri)
            {
                cliente:"Alfonso", 
                cedula:"12345", 
                fecha:"22/22/2022",
                codigo:"1111",
                valorTotal:"22"
            }
        )
    }
};

let crearTabla1 = function (lista){
    let stringTabla = "<tr><th>Cliente</th><th>Cedula</th><th>Fecha Venta</th><th>Codigo del Articulo</th><th>Valor Total de la Venta</th></tr>";
    for(let element of lista){
        let fila = "<tr> <td>";
        fila += element.cliente;
        fila += "</td>";

        fila += "<td>";
        fila += element.cedula;
        fila += "</td>";

        fila += "<td>";
        fila += element.fecha;
        fila += "</td>";

        fila += "<td>";
        fila += element.codigo;
        fila += "</td>";

        fila += "<td>";
        fila += element.valorTotal;
        fila += "</td>";

        fila += "</tr>";

        stringTabla += fila;
    }
    return stringTabla;
};

document.getElementById("tablaVentas").innerHTML = crearTabla1(cliente);
document.getElementById("tablaClientes").innerHTML = crearTabla1(cliente);
document.getElementById("tablaPro").innerHTML = crearTabla1(cliente);
