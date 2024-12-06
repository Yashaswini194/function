// Function to calculate the yearly bonus
function calculateBonus(experience, performanceScore, salary) {
  let bonusPercentage = 0;

  // Condition 1: More than 5 years of experience and performance score above 8
  if (experience > 5 && performanceScore > 8) {
    bonusPercentage = 20; // 20% bonus
  }
  // Condition 2: More than 3 years but less than or equal to 5 years of experience, and performance score above 7
  else if (experience > 3 && experience <= 5 && performanceScore > 7) {
    bonusPercentage = 10; // 10% bonus
  }
  // Condition 3: 3 years or less experience, bonus is 5% regardless of performance score
  else if (experience <= 3) {
    bonusPercentage = 5; // 5% bonus
  }

  // Calculate and return the bonus amount based on salary
  const bonusAmount = (bonusPercentage / 100) * salary;
  
  return {
    bonusPercentage: bonusPercentage,
    bonusAmount: bonusAmount
  };
}

// Example: Employee with 4 years of experience and a performance score of 9
const employeeExperience = 4;
const employeePerformanceScore = 9;
const employeeSalary = 50000; // Assume a salary of 50,000

// Calculate the bonus for this employee
const bonusDetails = calculateBonus(employeeExperience, employeePerformanceScore, employeeSalary);

// Output the result
console.log(`Bonus Percentage: ${bonusDetails.bonusPercentage}%`);
console.log(`Bonus Amount: $${bonusDetails.bonusAmount}`);
