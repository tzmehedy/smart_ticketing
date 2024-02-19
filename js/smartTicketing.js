function addingNewTicket(id){
    
    const addTable = document.querySelectorAll(".addTable");
    if(addTable.length<4){
        addInTable(id);
        
        const buySeatCount = document.getElementById("buySeatCount");
        const buySeatCountValue = buySeatCount.innerText;
        const buySeatCountInNumber = parseInt(buySeatCountValue);
        buySeatCount.innerText = buySeatCountInNumber + 1;
        priceCount();
    }
    else{
        alert("you already buy four Tickets ");
        return;
    }
    
}

function calculateCouponDisplay() {
  const totalPrice = document.getElementById("total_price");
  const totalPriceValue = totalPrice.innerText;
  const totalPriceInNumber = parseInt(totalPriceValue);

  const couponInput = document.getElementById("couponInput");
  const couponInputValue = couponInput.value;

  if (couponInputValue === "New15") {
    const discountContainer = document.getElementById("discountContainer");
    // discountContainer.classList.add("text-start flex justify-between");
    

    discountContainer.innerHTML = `
        <div>Discount</div>
        <div>BDT - <span id="discountPrice">${totalPriceInNumber * 0.15}</span></div>
        `;
  } else if (couponInputValue === "Couple 20") {
    const discountContainer = document.getElementById("discountContainer");

    discountContainer.innerHTML = `
        <div>Discount</div>
        <div>BDT - <span id="discountPrice">${totalPriceInNumber * 0.2}</span></div>
        `;
  }
  grandTotalCalculation();
}

function grandTotalCalculation(){
    const totalPrice = document.getElementById("total_price");
    const totalPriceValue = totalPrice.innerText;
    const totalPriceInNumber = parseFloat(totalPriceValue);
    


    const discountContainer = document.getElementById("discountPrice");
    const discountContainerValue = discountContainer.innerText;
    const discountContainerValueInNumber = parseFloat(discountContainerValue);
    

    const grandTotal = document.getElementById("grandTotal");
    const grandTotalValue = totalPriceInNumber-discountContainerValueInNumber;

    grandTotal.innerText = grandTotalValue;
    



}




