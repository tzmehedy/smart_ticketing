function addInTable(id){
    const appendTableBody = document.getElementById("appendTableBody");

    const newTr = document.createElement('tr');

    newTr.innerHTML = `
    <td>${id}</td>
    <td>Economy</td>
    <td>550</td>
    `
    appendTableBody.append(newTr);

}