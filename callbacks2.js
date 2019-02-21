//creamos una base de datos ficticia
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


let getEmpleado = (id, callback) => {
  let empleadoDB = empleados.find(empleado => empleado.id === id);
  if (!empleadoDB) {
    callback(`No existe un empleado con el ID ${id}`);
  } else {

    callback(null, empleadoDB);
  }
};
let getSalario = (empleado, callback) => {
  let salarioDB = salarios.find(salario => salario.id === empleado.id);
  if (!salarioDB) {
    callback(`No existe ningun salario para el ${empleado.nombre} `);
  } else {
    callback(null,{
      nombre: empleado.nombre,
      salario: salarioDB.salario,
      id: empleado.id
    });
  }
};
getEmpleado(1, (err, empleado) => {
  if (err) {
    return console.log(err);
  }
 getSalario(empleado,(err,resp)=>{
     if(err){
         return console.log(err)
     }
     console.log(`El salario de ${resp.nombre} es de ${ resp.salario} euros`)
 })
});
