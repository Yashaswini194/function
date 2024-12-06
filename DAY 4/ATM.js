function atmWithdrawal(balance, amount) {
    // Check if the amount is a multiple of 10
    if (amount % 10 !== 0) {
      return "Error: Amount must be a multiple of $10.";
    }
  
    // Check if the amount is less than or equal to $500
    if (amount > 500) {
      return "Error: Maximum withdrawal limit is $500.";
    }
  
    // Check if the balance is sufficient
    if (amount > balance) {
      return "Error: Insufficient funds.";
    }
  
    // If all checks pass, return a success message
    return `Success: Withdrawal of $${amount} completed. Remaining balance: $${balance - amount}.`;
  }
  
  // Example usage:
  console.log(atmWithdrawal(1000, 50));  // Success
  console.log(atmWithdrawal(1000, 120)); // Error: Amount must be a multiple of $10.
  console.log(atmWithdrawal(1000, 600)); // Error: Maximum withdrawal limit is $500.
  console.log(atmWithdrawal(1000, 1200)); // Error: Insufficient funds.
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
