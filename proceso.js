const users = [{
        id: 1,
        marca: 'Audi',
        modelo: 'TA2018',
        color: 'Negro',
        año: 2018,
        precio: 60000
    },
    {
        id: 2,
        marca: 'Mazda',
        modelo: 'MXA2018',
        color: 'Azul',
        año: 2020,
        precio: 40000
    },
    {
        id: 3,
        marca: 'Chevrolet',
        modelo: 'BWW2018',
        color: 'Gris',
        año: 2019,
        precio: 35000
    },
    {
        id: 4,
        marca: 'Lamborghini',
        modelo: 'AC2018',
        color: 'Blanco',
        año: 2018,
        precio: 1000000
    },
    {
        id: 5,
        marca: 'Ferrari',
        modelo: 'FBG2018',
        color: 'Rojo',
        año: 2020,
        precio: 1500000
    },
];

function printUsers() {
    //1. obtengo el elemento html en el que quiero poner los usuarios
    //2. genero el html de los usuarios
    //3. pongo el html
    const container = document.getElementById('container-users');
    let html = '';
    users.forEach((user) => {
        html += `<tr>
                <td>${user.marca}</td>
                <td>${user.modelo}</td>
                <td>${user.color}</td> 
                <td>${user.año}</td>
                <td>${user.precio}</td>
                <td>
                    <button onclick="deleteUser(${user.id})" class="btn btn-danger">Eliminar</button>
                </td>
            </tr>`;
    });
    container.innerHTML = html;
}

function deleteUser(id) {
    //como elimino el valor de un arreglo ? -> splice
    //el indice ->  como obtener el indice del elemento si lo que yo recibo es un id ? ->findIndex
    const index = users.findIndex((user) => user.id == id);
    users.splice(index, 1);
    printUsers();
    alert(`se va a eliminar un carro con el id ${id}`);
}

function addUser() {
    //codigo para capturar el dato de la marca
    const inputMarca = document.getElementById('marca');
    const marca = inputMarca.value;
    //codigo para capturar el dato del modelo
    const inputModelo = document.getElementById('modelo');
    const modelo = inputModelo.value;
    //codigo para capturar el dato del color
    const inputColor = document.getElementById('color');
    const color = inputColor.value;
    //codigo para capturar el dato del año que sale a la venta
    const inputAño = document.getElementById('año');
    const año = inputAño.value;
    // caprurar precio
    const inputPrecio = document.getElementById('precio');
    const precio = inputPrecio.value;
    // capturar un id y asignarlo 
    const id = users[users.length - 1].id + 1;

    alert(`Se esta agregando un nuevo automovil al inventario y su id es ${id}`);

    const newUser = {
        marca,
        color,
        id,
        modelo,
        año,
        precio
    }
    users.push(newUser);
    printUsers();


    document.getElementById('form-user').reset();
}


printUsers();