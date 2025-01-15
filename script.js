let members = ['Yuliana', 'Yuriy', 'Tolya', 'Elina',]

let deleteButton = document.querySelector('.deleteButton')
let addButton = document.querySelector('.addButton')
let idInput = document.querySelector('.idInput')
let nameInput = document.querySelector('.nameInput')
let membersBox = document.querySelector('.arrayMembers')

updateList()

function updateList() {
    membersBox.innerHTML = null
    for(let i = 0; i < members.length; i++) {
        if (members[i] != undefined)
            membersBox.innerHTML += "<span>" + members[i] + ' ' + "</span>"
    }
}

addButton.onclick = () => {
    let val = nameInput.value
    members.push(val)

    updateList()
    nameInput.value = null
}

deleteButton.onclick = () => {
    let val = idInput.value

    if (val < 0)
        alert('id cannot be less than zero')
    else if (val > members.length)
        alert('id does not exist')
    else {
        members.splice(val, 1)

        updateList()
        idInput.value = null
    }
}