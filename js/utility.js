function addInTable(id){
    const totalAvailableSeat = document.getElementById("totalAvailableSeat");
    const totalAvailableSeatValue = totalAvailableSeat.innerText;
    const remainingSeatInNumber = parseInt(totalAvailableSeatValue);
   
    const remainingSeat = remainingSeatInNumber - 1;
    totalAvailableSeat.innerText = remainingSeat;
    const pressButton = document.getElementById(id);
    pressButton.classList.remove("bg-gray-300");
    pressButton.classList.add("bg-[#1DD100]");
    const appendTableBody = document.getElementById("appendTableBody");

    const newTr = document.createElement('tr');

    newTr.innerHTML = `
    <td>${id}</td>
    <td>Economy</td>
    <td>550</td>
    `
    appendTableBody.append(newTr);

}