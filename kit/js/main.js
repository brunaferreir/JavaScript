
const listurl = "https://go-wash-api.onrender.com/api/auth/address";

'use strict'

const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => {
    clearFields()
    document.getElementById('modal').classList.remove('active')
}

const getLocalStorage = () => JSON.parse(localStorage.getItem('userData')) ?? []
const setLocalStorage = (userData) => localStorage.setItem("userData", JSON.stringify(userData))

// CRUD - create, read, update, delete
const deleteClient = (index) => {
    const userData = readClient()
    userData.splice(index, 1)
    setLocalStorage(userData)
}

const updateClient = (index, client) => {
    const userData = readClient()
    userData[index] = client
    setLocalStorage(userData)
}

const readClient = () => getLocalStorage()

const createClient = (client) => {
    const userData = getLocalStorage()
    userData.push(client)
    setLocalStorage(userData)
}

const isValidFields = () => {
    return document.getElementById('form').reportValidity()
}

// Interação com o layout

const clearFields = () => {
    const fields = document.querySelectorAll('.modal-field')
    fields.forEach(field => field.value = "")
    document.getElementById('title').dataset.index = 'new'
    document.querySelector(".modal-header>h2").textContent = 'Novo Cliente'
}

const saveClient = () => {
    if (isValidFields()) {
        const client = {
            title: document.getElementById('title').value,
            cep: document.getElementById('cep').value,
            address: document.getElementById('address').value,
            number: document.getElementById('number').value
        }
        const index = document.getElementById('title').dataset.index
        if (index == 'new') {
            createClient(client)
            updateTable()
            closeModal()
        } else {
            updateClient(index, client)
            updateTable()
            closeModal()
        }
    }
}

const createRow = (client, index) => {
    const newRow = document.createElement('tr')
    newRow.innerHTML = `
        <td>${client.title}</td>
        <td>${client.cep}</td>
        <td>${client.address}</td>
        <td>${client.number}</td>
        <td>
            <button type="button" class="button green" id="edit-${index}">Editar</button>
            <button type="button" class="button red" id="delete-${index}">Excluir</button>
        </td>
    `
    document.querySelector('#tableClient>tbody').appendChild(newRow)
}

const clearTable = () => {
    const rows = document.querySelectorAll('#tableClient>tbody tr')
    rows.forEach(row => row.parentNode.removeChild(row))
}

const updateTable = () => {
    const userData = readClient()
    clearTable()
    userData.forEach(createRow)
}

const fillFields = (client) => {
    document.getElementById('title').value = client.title
    document.getElementById('cep').value = client.cep
    document.getElementById('address').value = client.address
    document.getElementById('number').value = client.number
    document.getElementById('title').dataset.index = client.index
}

const editClient = (index) => {
    const client = readClient()[index]
    client.index = index
    fillFields(client)
    document.querySelector(".modal-header>h2").textContent = `Editando ${client.title}`
    openModal()
}

const editDelete = (event) => {
    if (event.target.type == 'button') {
        const [action, index] = event.target.id.split('-')
        if (action == 'edit') {
            editClient(index)
        } else {
            const client = readClient()[index]
            const response = confirm(`Deseja realmente excluir o cliente ${client.title}`)
            if (response) {
                deleteClient(index)
                updateTable()
            }
        }
    }
}

updateTable()

// Eventos
document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)

document.getElementById('salvar')
    .addEventListener('click', saveClient)

document.querySelector('#tableClient>tbody')
    .addEventListener('click', editDelete)

document.getElementById('cancelar')
    .addEventListener('click', closeModal)
