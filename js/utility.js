function addInTable(id){
    const totalAvailableSeat = document.getElementById("totalAvailableSeat");
    const totalAvailableSeatValue = totalAvailableSeat.innerText;
    const remainingSeatInNumber = parseInt(totalAvailableSeatValue);
   
    const remainingSeat = remainingSeatInNumber - 1;
    totalAvailableSeat.innerText = remainingSeat;
    const pressButton = document.getElementById(id);
    pressButton.classList.remove("bg-gray-300");
    pressButton.classList.add("bg-[#1DD100]");
    pressButton.setAttribute('disabled',true);
    const appendTableBody = document.getElementById("appendTableBody");

    const newTr = document.createElement('tr');

    newTr.innerHTML = `
    <td>${id}</td>
    <td>Economy</td>
    <td>550</td>
    `;
    newTr.classList.add('addTable');
    appendTableBody.append(newTr);
    
}

function priceCount(){
    const totalPrice = document.getElementById("total_price");
    const totalPriceValue = totalPrice.innerText;
    const totalPriceInNumber = parseInt(totalPriceValue);
    const totalPriceCount = totalPriceInNumber + 550;
    totalPrice.innerText = totalPriceCount;

    const grandTotal = document.getElementById("grandTotal");
    grandTotal.innerText =totalPriceCount;
}

document
  .getElementById("phoneNumberInput")
  .addEventListener("keyup", function () {
 
    const phoneNumberInput = document.getElementById("phoneNumberInput").value;
    console.log(phoneNumberInput);
    const pressedBtnValueInNumber = parseInt(phoneNumberInput);


    if(typeof pressedBtnValueInNumber === 'number'){
        nextBtn.removeAttribute('disabled');
    }
    else{
        alert('plz click a phone number');
    }
  });

