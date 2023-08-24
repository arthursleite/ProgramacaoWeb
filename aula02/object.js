let objSemConstrutor = {
    a: 1,
    b: 2,
    c: 3
}

console.log(objSemConstrutor)
console.log(typeof objSemConstrutor) // para saber o tipo da minha variavel

// CONSTRUTOR

let obj = Object("oi")
console.log(obj)

let obj2 = new Object("oi")
console.log(obj2)

// METODOS

let objetos = [
    {nome: 'Joaozinho', idade: 34, altura: 1.76},
    {nome: 'Mariazinha', idade: 38, altura: 1.58}
]

console.log(objetos[0].nome)

for (let i = 0; i > objetos.length; i++) {
    const element = objetos[i]

}

console.table(Object.keys(objSemConstrutor))
console.table(Object.values(objSemConstrutor))

console.table(Object.keys(objetos))
console.table(Object.values(objetos))