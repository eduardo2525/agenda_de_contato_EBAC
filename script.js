const form = document.getElementById('form');
const textoForm = document.getElementById('nome');
const tellForm = document.getElementById('telefone');
const emailform = document.getElementById('e-mail');
const cepForm = document.getElementById('endereco')
let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();
    adicionarAgenda();
    formatarAgenda();
    atualiza();
    
    const agendaForm = document.querySelector('tbody');
    agendaForm.innerHTML = linha;
    
});

function adicionarAgenda(){
    let linha = '<tr>';
    linha += `<td>${textoForm.value}</td>`;
    linha += `<td>${tellForm.value}</td>`;
    linha += `<td>${emailform.value}</td>`;
    linha += `<td>${cepForm.value}</td>`;
    linha += '</tr>';

    linhas += linha;
}

function formatarAgenda(){

    textoForm.value = '';
    tellForm.value = '';
    emailform.value = '';
    cepForm.value = '';
}

function atualiza(){
    const atualizaAgenda = document.querySelector('tfoot');
    atualizaAgenda.innerHTML = linhas
}