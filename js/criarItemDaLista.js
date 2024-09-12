const listaDeCompras = document.getElementById('lista-de-compras');
const listaComprados = document.getElementById('lista-comprados');
let contador = 2;
export function criarItemDaLista(item){
    if (item == '') {
        alert('Por favor, insira um item.');
        return;
    }

    const itemDaLista = document.createElement('li');
    const containerItemLista = document.createElement('div');
    containerItemLista.classList.add('lista-item-container');

    const containerNomeDoItem = document.createElement('div');
    const containerCheckbox = document.createElement('div');
    containerCheckbox.classList.add('container-checkbox');

    const checkboxInput = document.createElement('input');
    checkboxInput.type = 'checkbox';
    checkboxInput.classList.add('input-checkbox');
    checkboxInput.id = 'checkbox-' + contador++; // Cada checkbox recebe um id único

    const checkBoxCustomizado = document.createElement('div');
    checkBoxCustomizado.classList.add('checkbox-customizado');
    
    const checkboxLabel = document.createElement('label');
    checkboxLabel.setAttribute('for', checkboxInput.id); // Relaciona o label ao checkbox

    // Evento para mover o item entre as listas de compras e comprados
    checkboxLabel.addEventListener('click', function(evento) {

        const checkboxInput = evento.currentTarget.querySelector('.input-checkbox')
        const checkBoxCustomizado = evento.currentTarget.querySelector('.checkbox-customizado')
        const itemTitulo = evento.currentTarget.closest('li').querySelector('#item-titulo')

        if (checkboxInput.checked) {
            checkBoxCustomizado.classList.add('checked');
            itemTitulo.style.textDecoration = 'line-through';
            listaComprados.appendChild(itemDaLista); // Move para a lista de comprados
        } else {
            checkBoxCustomizado.classList.remove('checked')
            itemTitulo.style.textDecoration = 'none';
            listaDeCompras.appendChild(itemDaLista); // Retorna para a lista de compras
        }
    });

    checkboxLabel.appendChild(checkboxInput);
    checkboxLabel.appendChild(checkBoxCustomizado);

    containerCheckbox.appendChild(checkboxLabel);
    containerNomeDoItem.appendChild(containerCheckbox);

    const nomeDoItem = document.createElement('label');
    nomeDoItem.id = "item-titulo"

    nomeDoItem.innerText = item;
    containerNomeDoItem.appendChild(nomeDoItem);

    const dataItem = document.createElement('p');
    dataItem.classList.add('lista-item-texto');

    const itemData = document.createElement('p');
    itemData.classList.add('lista-item-texto')
    itemData.innerText = `${new Date().toLocaleDateString('pt-BR', { weekday: 'long' })} (${new Date().toLocaleDateString()}) às ${new Date().toLocaleTimeString('pt-BR', { hour: 'numeric', minute: 'numeric' })}`;
    //dataItem.innerText = dataFormatada; //passar a data

    containerNomeDoItem.appendChild(dataItem);

    const containerBotoes = document.createElement('div');  
    
    // Botão remover
    const botaoRemover = document.createElement('button');
    botaoRemover.classList.add('item-lista-button');
    const imagemRemover = document.createElement('img');
    imagemRemover.src = 'img/delete.svg';
    imagemRemover.alt = 'Remover';

    botaoRemover.appendChild(imagemRemover);

    // Função de remover item
    botaoRemover.addEventListener('click', () => {
        itemDaLista.remove(); // Remove o item da lista quando o botão "Remover" é clicado
    });

    // Botão editar
    const botaoEditar = document.createElement('button');
    botaoEditar.classList.add('item-lista-button');
    const imagemEditar = document.createElement('img');
    imagemEditar.src = 'img/edit.svg';
    imagemEditar.alt = 'Editar';

    botaoEditar.appendChild(imagemEditar);

    // Função de editar item usando um alert (prompt)
    botaoEditar.addEventListener('click', () => {
        const novoValor = prompt('Edite o item:', nomeDoItem.innerText); // Abre o prompt com o valor atual
        if (novoValor !== null && novoValor.trim() !== '') {
            nomeDoItem.innerText = novoValor; // Atualiza o texto do item com o valor inserido no prompt
        }
    });

    // Adicionando os botões ao container
    containerBotoes.appendChild(botaoRemover);
    containerBotoes.appendChild(botaoEditar);
    
    containerItemLista.appendChild(containerNomeDoItem);

    containerItemLista.appendChild(containerBotoes);

    itemDaLista.appendChild(containerItemLista);
    itemDaLista.appendChild(itemData);

    return itemDaLista;
}