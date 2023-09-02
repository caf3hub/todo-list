const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const listaCompleta = document.querySelector('.list-tasks')


let MinhaListaDeItens = []


function AdicionarNovaTarefa(){
    MinhaListaDeItens.push({
        tarefa: input.value,
        concluida: false
    })
    input.value = ''
    MostrarTarefas()
}

function MostrarTarefas(){

    let novaLi = ''

    MinhaListaDeItens.forEach((item, posicao) => {
        novaLi = novaLi + `
        
        <li class="task ${item.concluida && "done"}">
            <img src="./img/check.png" alt="check-na-tarefa" onclick="concluirTarefa(${posicao})">
            <p>${item.tarefa}</p>
            <img src="./img/delete.png" alt="tarefa-para-lixo" onclick="deletarItem(${posicao})"> 
        </li>
        
        `
    })

    listaCompleta.innerHTML = novaLi
    localStorage.setItem('lista', JSON.stringify(MinhaListaDeItens))
}

function concluirTarefa(posicao){
    MinhaListaDeItens[posicao].concluida = !MinhaListaDeItens[posicao].concluida
    MostrarTarefas()
}

function deletarItem(posicao) {
    MinhaListaDeItens.splice(posicao, 1)
    MostrarTarefas()
}

function recarregarTarefas(){
    const tarefasDoLocalStorage = localStorage.getItem('lista')
    
    if (tarefasDoLocalStorage){
        MinhaListaDeItens = JSON.parse(tarefasDoLocalStorage)
    }

    MostrarTarefas()
}

recarregarTarefas()
button.addEventListener('click', AdicionarNovaTarefa)
