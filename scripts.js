const item = document.getElementById('input-item');
const botaoSalvarItem = document.getElementById('adicionar-item')
const listaDeCompras = document.getElementById('lista-de-compras');
let contador = 1;
let id = 1;

botaoSalvarItem.addEventListener('click', adicionarItem)

function adicionarItem(evento) {
    evento.preventDefault()
    
    if (!item.value.trim()) {
        alert('Por favor, insira um item.');
        return;
    }

    const itemDaLista = document.createElement('li');
    const containerItemLista = document.createElement('div');
    containerItemLista.classList.add('lista-item-container');

    const containerNomeDoItem = document.createElement('div');

    const containerCheckbox = document.createElement('div')
    containerCheckbox.classList.add('container-checkbox');

    const checkboxInput = document.createElement('input');
    const checkboxInputId = document.createElement('id')
    checkboxInput.type = 'checkbox';
    checkboxInput.classList.add('input-checkbox');
    checkboxInput.id = 'checkbox-' + contador++;
    checkboxInputId.id = 'checkbox-' + id++;

    const checkboxLabel = document.createElement('label');
    checkboxLabel.setAttribute('for', checkboxInput.id);
    checkboxInput.setAttribute('id', checkboxInputId.id);

    const checkBoxCustomizado = document.createElement('div');
    checkBoxCustomizado.classList.add('checkbox-customizado')

    checkboxLabel.appendChild(checkboxInput);
    checkboxLabel.appendChild(checkBoxCustomizado);

    containerCheckbox.appendChild(checkboxLabel);
    containerNomeDoItem.appendChild(containerCheckbox);

    const nomeDoItem = document.createElement('label');
    nomeDoItem.innerText = item.value;
    containerNomeDoItem.appendChild(nomeDoItem)

    const containerBotoes = document.createElement('div');
    const botaoRemover = document.createElement('button');
    const botaoEditar = document.createElement('button');
    botaoRemover.classList.add('item-lista-button');
    botaoEditar.classList.add('item-lista-button');


    const imagemRemover = document.createElement('img');
    imagemRemover.src = 'img/delete.svg';
    imagemRemover.alt = 'Remover';

    const imagemEditar = document.createElement('img')
    imagemEditar.src = 'img/edit.svg';
    imagemEditar.alt ='Editar'


    botaoRemover.appendChild(imagemRemover);
    containerBotoes.appendChild(botaoRemover);

    botaoEditar.appendChild(imagemEditar);
    containerBotoes.appendChild(botaoEditar)




    containerItemLista.appendChild(containerNomeDoItem);
    containerItemLista.appendChild(containerBotoes);


    itemDaLista.appendChild(containerItemLista);
    listaDeCompras.appendChild(itemDaLista);



    item.value = '';
}






// const item = document.getElementById('input-item');
// const botaoSalvarItem = document.getElementById('adicionar-item');
// const listaDeCompras = document.getElementById('lista-de-compras');
// let contador = 0;

// // Carregar itens do LocalStorage ao carregar a página
// //window.addEventListener('load', carregarItensSalvos);

// botaoSalvarItem.addEventListener('click', adicionarItem);

// function adicionarItem(evento) {
//     evento.preventDefault();
    
//     if (!item.value.trim()) {
//         alert('Por favor, insira um item.');
//         return;
//     }

//     adicionarItemNaLista(item.value);
//     salvarItemNoLocalStorage(item.value);
//     item.value = ''; // Limpa o campo de entrada
// }

// // Função para adicionar item na lista
// function adicionarItemNaLista(nomeItem) {
//     const itemDaLista = document.createElement('li');
//     const containerItemLista = document.createElement('div');
//     containerItemLista.classList.add('lista-item-container');

//     const containerNomeDoItem = document.createElement('div');
    
//    const containerCheckbox = document.createElement('div')
//    containerCheckbox.classList.add('container-checkbox');

//    const checkboxInput = document.createElement('input');
//    checkboxInput.type = 'checkbox';
//    checkboxInput.classList.add('input-checkbox');
//    checkboxInput.id = 'checkbox-' + contador++

//    const checkboxLabel = document.createElement('label');
//    checkboxLabel.setAttribute('for', checkboxInput.id);

//    const checkBoxCustomizado = document.createElement('div');
//   checkBoxCustomizado.classList.add('checkbox-customizado')

//    checkboxLabel.appendChild(checkboxInput);
//    checkboxLabel.appendChild(checkBoxCustomizado);

//    containerCheckbox.appendChild(checkboxLabel);
//    containerNomeDoItem.appendChild(containerCheckbox);



//     const nomeDoItem = document.createElement('label');
//     nomeDoItem.innerText = nomeItem;
//     containerNomeDoItem.appendChild(nomeDoItem);

//     const containerBotoes = document.createElement('div');
    
//     // Botão remover
//     const botaoRemover = document.createElement('button');
//     botaoRemover.classList.add('item-lista-button');
//     const imagemRemover = document.createElement('img');
//     imagemRemover.src = 'img/delete.svg';
//     imagemRemover.alt = 'Remover';
//     botaoRemover.appendChild(imagemRemover);
//     containerBotoes.appendChild(botaoRemover);
    
//     // Lógica de remoção
//     // botaoRemover.addEventListener('click', () => {
//     //     itemDaLista.remove();
//     //     //removerItemDoLocalStorage(nomeDoItem.innerText); // Remove do LocalStorage também
//     // });

//     // Botão editar/salvar
//     const botaoEditar = document.createElement('button');
//     botaoEditar.classList.add('item-lista-button');
//     const imagemEditar = document.createElement('img');
//     imagemEditar.src = 'img/edit.svg';
//     imagemEditar.alt = 'Editar';
//     botaoEditar.appendChild(imagemEditar);
//     containerBotoes.appendChild(botaoEditar);

//     let isEditing = false;
//     let inputEditItem;

//     // Lógica de edição e salvamento
//     // botaoEditar.addEventListener('click', () => {
//     //     if (isEditing) {
//     //         // Salva a edição
//     //         const novoValor = inputEditItem.value;
//     //         nomeDoItem.innerText = novoValor;
//     //         containerNomeDoItem.removeChild(inputEditItem);
//     //         botaoEditar.innerText = ''; // Volta ao modo de edição
//     //         botaoEditar.appendChild(imagemEditar);
//     //         //atualizarItemNoLocalStorage(nomeDoItem.innerText, novoValor);
//     //         isEditing = false; // Muda o estado de volta para edição

//     //         // Atualiza a página após salvar a edição
//     //         location.reload();
//     //     } else {
//     //         // Modo de edição
//     //         inputEditItem = document.createElement('input');
//     //         inputEditItem.type = 'text';
//     //         inputEditItem.value = nomeDoItem.innerText;
//     //         containerNomeDoItem.replaceChild(inputEditItem, nomeDoItem);

//     //         // Muda o botão para "Salvar" mantendo o estilo
//     //         botaoEditar.innerText = 'Salvar';
//     //         botaoEditar.classList.add('item-lista-button'); // Mantém o estilo

//     //         isEditing = true; // Define que estamos no modo de edição
//     //     }
//     // });
    
//     // Adiciona os containers ao item da lista
//     containerItemLista.appendChild(containerNomeDoItem);
//     containerItemLista.appendChild(containerBotoes);
//     itemDaLista.appendChild(containerItemLista);
//     listaDeCompras.appendChild(itemDaLista);
//     item.value = '';
// }

// // // Função para salvar item no LocalStorage
// // function salvarItemNoLocalStorage(item) {
// //     let itens = JSON.parse(localStorage.getItem('itens')) || [];
// //     itens.push(item);
// //     localStorage.setItem('itens', JSON.stringify(itens));
// // }

// // // Função para remover item do LocalStorage
// // function removerItemDoLocalStorage(item) {
// //     let itens = JSON.parse(localStorage.getItem('itens')) || [];
// //     itens = itens.filter(i => i !== item);
// //     localStorage.setItem('itens', JSON.stringify(itens));
// // }

// // // Função para atualizar item no LocalStorage
// // function atualizarItemNoLocalStorage(oldItem, newItem) {
// //     let itens = JSON.parse(localStorage.getItem('itens')) || [];
// //     const index = itens.indexOf(oldItem);
// //     if (index !== -1) {
// //         itens[index] = newItem;
// //         localStorage.setItem('itens', JSON.stringify(itens));
// //     }
// // }

// // // Carregar itens do LocalStorage e exibir na lista
// // function carregarItensSalvos() {
// //     let itens = JSON.parse(localStorage.getItem('itens')) || [];
// //     itens.forEach(item => adicionarItemNaLista(item));
// // }

