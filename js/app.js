const data = document.getElementById('data')
const lista = document.getElementById('lista')
const entrada = document.getElementById('entrada')

const hoje = new Date()

data.innerHTML = hoje.toLocaleDateString('pt-BR')

const tarefas = [
  {id:1, texto: 'Ola', completada: true, apagada: true},
  {id:2, texto: 'Ola 2', completada: false, apagada: false},
  {id:3, texto: 'Ola 3', completada: true, apagada: false},
  
]
let indice = 0;

function adicionarItem(tarefa) {

  if (tarefa.apagada == true) {
    return;
  }

  let classeCirculo = 'fa-circle-thin' 
  let classeLinhaRiscada = ''

  if (tarefa.completada == true) {
      classeCirculo = 'fa-check-circle'
      classeLinhaRiscada = 'linhaRiscada'
  }

  const item = `<li class="item">
                        <i class="fa ${classeCirculo} co"></i>
                        <p class="texto ${classeLinhaRiscada}">${tarefa.texto}</p>
                        <i class="fa fa-trash-o de"></i>
                    </li>`
  lista.insertAdjacentHTML('beforeend', item)

}

tarefas.forEach(tarefa => adicionarItem(tarefa))

function entrarDados(evento) {
  if (evento.keyCode == 13) {

    const tarefa = {
      id: indice,
      texto: entrada.value,
      completada: false,
      apagada: false
    }

    tarefas.push(tarefa)

    adicionarItem(tarefa)
    entrada.value = ''
    indice++;
  }
}

entrada.addEventListener('keyup', entrarDados )

