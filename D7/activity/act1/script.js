const loan_calculator = document.getElementById('loanCalculatorForm');

loan_calculator.addEventListener('submit', handleSubmit);

function calculateMonthlyPayment(amount_value, interest_value, term_value) {
  let months = 12;

  const monthly_interest_rate = interest_value / 100 / months;
  const number_of_payment = term_value * months;

  const calculate_monthly_payment =
    (amount_value *
      monthly_interest_rate *
      Math.pow(1 + monthly_interest_rate, number_of_payment)) /
    (Math.pow(1 + monthly_interest_rate, number_of_payment) - 1);

  return calculate_monthly_payment.toFixed(2);
}

function handleSubmit(event) {
  event.preventDefault();

  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const term = document.getElementById('term');

  const amount_value = amount.value;
  const interest_value = interest.value;
  const term_value = term.value;

  const calculated_monthly_payment = calculateMonthlyPayment(
    amount_value,
    interest_value,
    term_value
  );

  if (isNaN(calculated_monthly_payment) || calculated_monthly_payment < 0) {
    alert('The computed amount is invalid. Please try again!');
  } else {
    const calculated_payment_text = document.createElement('h2');
    calculated_payment_text.textContent = '₱' + calculated_monthly_payment;

    const calculated_payment_container = document.getElementById(
      'calculated_payment_container'
    );
    calculated_payment_container.innerHTML = '';

    calculated_payment_container.appendChild(calculated_payment_text);
  }

  amount.value = '';
  interest.value = '';
  term.value = '';
}
