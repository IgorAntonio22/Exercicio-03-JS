var n_usuarios = parseInt(prompt('Digite aqui o número de usuarios'))

var usuarios = []

for (let a = 0; a < n_usuarios; a++) {

    var usuario = {

        nome:'',
        idade:'',
        cpf:'',
        genero:'',
    }

    usuario.nome = prompt('Digite aqui o seu nome: ')
    usuario.idade = prompt('Digite aqui a sua idade: ')
    usuario.cpf = prompt('Digite aqui seu cpf: ')
    usuario.genero = prompt('Digite aqui o seu gênero')

    usuarios.push(`Nome: ${usuario.nome}, Idade: ${usuario.idade}, CPF: ${usuario.cpf}, Gênero: ${usuario.genero} <br><br>`)
    console.log(usuarios)    
}
usuarios.forEach(escreverUsuario)
function escreverUsuario(item) {
    document.write(item)
  }


