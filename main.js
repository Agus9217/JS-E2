

let pizzas = [
    {
      "id": 1,
      "nombre": "Calabresa",
      "ingredientes": ["mozzarella", "calabresa"],
      "precio": 700
    },
    {
      "id": 2,
      "nombre": "Jamon y Morron",
      "ingredientes": ["mozzarella", "jamon", "morron"],
      "precio": 780
    },
    {
      "id": 3,
      "nombre": "Fugazzeta",
      "ingredientes": ["mozzarella", "cebolla"],
      "precio": 650
    },
    {
      "id": 4,
      "nombre": "Napolitana",
      "ingredientes": ["mozzarella", "tomate en rodajas"],
      "precio": 450
    },
    {
      "id": 5,
      "nombre": "Con Huevo",
      "ingredientes": ["mozzarella", "huevo"],
      "precio": 750
    },
    {
      "id": 6,
      "nombre": "Mixta",
      "ingredientes": ["mozzarella", "jamon", "morron", "tomate en rodajas", "huevo"],
      "precio": 1500
    },
  ]

const printName = document.getElementById('nombre-pizza')
const printPrice = document.getElementById('precio')
const inputValue = document.getElementById('input')
const preloader = document.getElementById('preloader')
const btn = document.getElementById('btn')

const init = () => window.addEventListener('DOMContentLoaded', (e) => {
  preloaderTime()
  capture()
  submit()
})

init()

const preloaderTime = () => {
  setTimeout(() => {
    preloader.style.display = "none"
  },2000)
}


const capture = () => inputValue.addEventListener('change', (e)=> {
  console.log(e)
  const findPizzas = pizzas.find(item => item.id === e.target.valueAsNumber)
  if(!findPizzas) {
    return alert('Intenta con otro numero')
  } if(e.target.valueAsNumber === null){
    
  }else {
    return printName.innerHTML = `La pizza seleccionada es: N° ${findPizzas.id} : ${findPizzas.nombre}`, printPrice.innerHTML = `El precio de la pizza es: $${findPizzas.precio}`
  }
})

const submit = () => {
  btn.addEventListener("click", (e) => {
    e.preventDefault()
  })
}




