function validateCardNumber(cardNumber) {
    
    if (!/^\d{16}$/.test(cardNumber)) {
      return false; 
    }
  
  
    let sum = 0;
    let digit = 0;
    let addend = 0;
    for (let i = cardNumber.length - 1; i >= 0; i--) {
      digit = parseInt(cardNumber.charAt(i));
      if (i % 2 === 0) {
        digit *= 2;
        if (digit > 9) {
          digit -= 9;
        }
      }
      sum += digit;
    }
    return sum % 10 === 0; 
  }
  
  
  const cardNumberInput = document.getElementById("card-number");
  cardNumberInput.addEventListener("change", () => {
    const cardNumber = cardNumberInput.value.trim();
    const isValid = validateCardNumber(cardNumber);
    console.log("Card is valid:", isValid); 
  
    
    const resultElement = document.getElementById("gh");
    resultElement.textContent = isValid ? "Valid Card" : "Invalid Card";
  });
  