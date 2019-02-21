let empleados = [
  {
    id: 1,
    nombre: "Barbara"
  },
  {
    id: 2,
    nombre: "Pedro"
  },
  {
    id: 3,
    nombre: "Mary"
  }
];

let salarios = [
  {
    id: 1,
    salario: 1200
  },
  {
    id: 2,
    salario: 2500
  }
];

let getEmpleado = id => {
  return new Promise((resolve, reject) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id);
    if (!empleadoDB) {
      reject(`No existe un empleado con el ID ${id}`);
    } else {
      resolve(empleadoDB);
    }
  });
};

let getSalario = empleado => {
  return new Promise((resolve, reject) => {
    let salarioDB = salarios.find(salario => salario.id === empleado.id);
    if (!salarioDB) {
      reject(`No existe ningun salario para el ${empleado.nombre} `);
    } else {
      resolve({
        nombre: empleado.nombre,
        salario: salarioDB.salario,
        id: empleado.id
      });
    }
  });
};

/* getEmpleado(1).then(
  empleado => {
    console.log(`Empleado de BD`, empleado);

    getSalario(empleado).then(
      resp => {
        console.log(`El salario de ${resp.nombre} es de ${resp.salario} euros`);
      },
      err => {
        console.log(err);
      }
    );
  },
  err => {
    console.log(err);
  }
);
 */
getEmpleado(1)
  .then(empleado => {
    return getSalario(empleado);
  })
  .then(resp => {
    console.log(`El salario de ${resp.nombre} es de ${resp.salario}`);
  })
  .catch(err => {
    console.log(err);
  });
