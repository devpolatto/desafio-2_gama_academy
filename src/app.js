const readLineSync = require('readline-sync')
const books = require('./db.js')

categoryOptions = [
     "Produtividade e estilo de vida",
     "História brasileira",
     "Américas",
     "Tecnologia",
     "Estilo de vida",
     "Tecnologia"
]

if(readLineSync.keyInYN('you want to search a book by category? ')) {
     let categoryOfBook = readLineSync.keyInSelect(categoryOptions, 'Which category?')

     books.map((category) => {
          if(category.categoria === categoryOptions[categoryOfBook]){
               console.log(category)
          }
     })
}

