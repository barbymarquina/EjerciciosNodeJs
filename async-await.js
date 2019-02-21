let getNombre = async () => {
  return "Barbara";
  throw new Error("No existe un nombre para ese usuario");
};

console.log(getNombre());

/* ESO ES LO MISMO QUE ESTO
let getNombre=()=>{
   return new Promise(resolve,reject)=>{
       resolve('Barbara')
   }
}
*/

getNombre()
  .then(nombre => {
    console.log(nombre);
  })
  .catch(err => {
    console.log("Error de ASYNC", err);
  });
