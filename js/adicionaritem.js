import { criarItemDaLista } from "./criarItemDaLista.js";

const item = document.getElementById('input-item');
const listaComprados = document.getElementById('lista-comprados');
let contador = 2;

export function adicionarItem(evento) {
    evento.preventDefault();

    const itemDaLista = criarItemDaLista(item.value);
    listaDeCompras.appendChild(itemDaLista);

    item.value = ''; // Limpa o campo de entrada
}