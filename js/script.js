// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let form = document.getElementById('addForm')
let empData = document.getElementById('employees')
let empCount = document.getElementById('empCount')

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let newCount = 0
empCount.appendChild(document.createTextNode(newCount))

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault()

    // GET THE VALUES FROM THE TEXT BOXES
    let newID = document.getElementById('id').value
    let newName = document.getElementById('name').value
    let newExt = document.getElementById('extension').value
    let newEmail = document.getElementById('email').value
    let newDept = document.getElementById('department').value

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let row = empData.insertRow()

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let cellID = row.insertCell()
    let cellName = row.insertCell()
    let cellExt = row.insertCell()
    let cellEmail = row.insertCell()
    let cellDept = row.insertCell()
    let cellDelete = row.insertCell()

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    cellID.appendChild(document.createTextNode(newID))
    cellName.appendChild(document.createTextNode(newName))
    cellExt.appendChild(document.createTextNode(newExt))
    cellEmail.appendChild(document.createTextNode(newEmail))
    cellDept.appendChild(document.createTextNode(newDept))

    // CREATE THE DELETE BUTTON
    let deleteBtn = document.createElement('button')

    // ADD BOOTSTRAP CLASSES TO STYLIZE BUTTON
    deleteBtn.className = 'btn btn-danger btn-sm float-end delete'

    // CREATE TEXT NODE FOR DELETE BUTTON AND SET TO 'X'
    let textDelete = document.createTextNode('X')

    // APPEND TEXT NODE 
    deleteBtn.appendChild(textDelete)
    cellDelete.appendChild(deleteBtn)

    // RESET THE FORM
    form.reset()
    document.getElementById('id').focus()

    // SET FOCUS BACK TO THE ID TEXT BOX

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    newCount++
    empCount.textContent = newCount

})

// DELETE EMPLOYEE
empData.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')){
        if (confirm('Delete User?')) {
            //empData.deleteRow(e.target.closest.rowIndex)
            e.target.closest('tr').remove()
            empCount--
            empCount.textContent = newCount
            document.getElementById('id').focus()
        }
    }
})