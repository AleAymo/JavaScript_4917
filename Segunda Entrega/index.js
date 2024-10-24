const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];


// A -
const pizzasIdImpar = () =>{
  pizzas.forEach((pizzas) => {
    if(pizzas.id % 2 === 1){
      console.log(`${pizzas.nombre}' tiene iD impar, ${pizzas.id}`);
    }
  })
}

pizzasIdImpar()


// B -
const pizzasMenosde600 = pizzas.some((pizza) => pizza.precio < 600)
  pizzasMenosde600 ?
    console.log('Hay pizzas de menos de $600')
    :
    console.log('No hay pizzas de menos de $600')


// C -
const preciospizzas = () => {
  pizzas.forEach((pizza) => {
    console.log(`El precio de la ${pizza.nombre} es: ${pizza.precio}`);
    
  })
}

preciospizzas ()


// D -
const ingredientesPizza = () => {
  pizzas.forEach((pizza) => {
    console.log(`Los ingredientes de la ${pizza.nombre} son: ${pizza.ingredientes.join(', ')}`);
  })
}

ingredientesPizza ()