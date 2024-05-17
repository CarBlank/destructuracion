//Destructuring

const empleados = [
    { name: "Luis", email: "Luis@gmail.com" },
    { name: "Ana", email: "Ana@gmail.com" },
    { name: "Andrea", email: "Andrea@gmail.com" },
  ]
  
console.log(empleados[1])

const [empleado1 , empleado2 , empleado3] = empleados
console.log(empleado1.email)


const pokemon = {
    name: "Bulbasaur",
    type: "grass",
    ability: {
        "primary": "Overgrow",
        "hidden": "Chlorophyll"
    },
    stats: {
        hp: 45,
        attack: 49,
        deffense: 59,
        speed: 45
    },
    moves: [
        "Growl", "Tackle", "Vine Whip", "Razor Leaf"
    ]
}

const {name , type, ability, stats, moves} = pokemon
console.log(pokemon.name.innertext = 'nombre')
console.log(pokemon.name)
console.log(pokemon['type'])
console.log(pokemon.moves[1])


//Ejercicios spread/rest

const pikachu = {
    name: "Pikachu",
    type: "electric",
    ability: {
        "primary": "Static",
        "hidden": "Lightning rod"
    },
    stats: {
        hp: 35,
        attack: 55,
        deffense: 40,
        speed: 90
    },
    moves: [
        "Quick Attack", "Volt Tackle", "Iron Tail", "Thunderbolt"
    ],
}

const mergPokemon = {...pokemon, ...pikachu}
console.log(mergPokemon)


//sumEveryOther

function sumEveryOther(...numbers) {
   /*  const arrayNum = [''];
    const suma = numbers.reduce(sumEveryOther);
    */ 
    let suma = 0;
    numbers.forEach(numero => {
      suma += numero;
    });
    console.log(suma);
    
    //reduce
    /*
    const suma = numeros.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
    console.log(suma); */ 

    //for
    /* let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
      suma += numeros[i];
    }
    console.log(suma);  */

}

sumEveryOther(6, 8, 2, 3, 1); //20
sumEveryOther(11, 3, 12); //26

//revisar-----------------------------------
    
function addOnlyNums(...args) {
    let sum = 0;
    for (const arg of args) {
      if (typeof arg === 'number') {
        sum += arg;
      }
    }
    return sum;
}

console.log (addOnlyNums (1,'perro',2,4))

/* function addOnlyNums(...elements) {
    if(typeof elements === 'number') {
        let addNum = 0;
        numbers.forEach(element => {
          addNum += element;
        });
    } 
      console.log(addNum);
} */
/* addOnlyNums(1, 'perro', 2, 4); //7 */

//----------------------------------------------

/* 
function addOnlyNums(...args) {
    let suma = 0
    for (let i= 0; i < args.length; i++ ) {
      if (typeof args[i] === "number" ) {
        suma += args[i]
      }
    }
    return suma
  }
  
  console.log (addOnlyNums (1,'perro',2,4))
  
 */

  function countTheArgs (...countTheArgs) {
    return countTheArgs.length
   }
  console.log (countTheArgs('gato', 'perro'))
  console.log (countTheArgs('gato', 'perro', 'pollo', 'oso'))



function combineTwoArrays(array1, array2) {
    const concatArray = [...array1, ...array2]

    console.log(concatArray);
}

combineTwoArrays()