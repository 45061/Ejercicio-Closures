// const list = [
//     {
//       num: 1,
//       names: "Julano Perez",
//       dates: "2022-01-01",
//       items: [
//         {
//           id: 1,
//           prices: 1200,
//           quantity: 2,
//         },
//         {
//           id: 2,
//           prices: 1400,
//           quantity: 1,
//         },
//       ],
//     },
//     {
//       num: 1,
//       name: "Pepito Martinez",
//       date: "2022-02-01",
//       items: [
//         {
//           id: 1,
//           prices: 1200,
//           quantity: 2,
//         },
//       ],
//     },
//   ];

function facturacion(){
    const list= []
    return{
        
        agregarFactura: function(nameUser, datesx, ...items){
            list.push({
                num: list.length,
                names: nameUser,
                dates: datesx,
                item:items
        })},
        mostrarList: function (){
            return list
        }
    }
}

const miFacturacion = facturacion();
miFacturacion.agregarFactura("Pepito Perez", "2021-01-01", {id:1, price:1200, quantity: 1}, {id:1, price:1200, quantity: 1});
miFacturacion.agregarFactura("Pepito Perez", "2021-01-01", {id:1, price:1200, quantity: 1});
miFacturacion.agregarFactura("Pepito Perez", "2021-01-01", {id:1, price:1200, quantity: 1});
miFacturacion.agregarFactura("Pepito Perez", "2021-01-01", {id:1, price:1200, quantity: 1});
console.log(miFacturacion.mostrarList());
miFacturacion.mostrarList().forEach(factura => console.log(factura));
