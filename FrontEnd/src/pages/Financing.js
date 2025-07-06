import React, { useState } from 'react';
import Navbar from '../components/Navbar'; // Import Navbar
import '../Style.T/Financing.css'; // Import the CSS file for styling

const Financing = () => {
  const [price, setPrice] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [downPayment, setDownPayment] = useState('');
  const [tradeIn, setTradeIn] = useState('');
  const [termMonths, setTermMonths] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState(null);
  const [error, setError] = useState('');

  const calculatePayment = (e) => {
    e.preventDefault();
    setError('');

    if (Number(price) <= 0 || Number(interestRate) < 0 || Number(termMonths) <= 0) {
      setError('Please enter valid values.');
      return;
    }

    const loanAmount = Number(price) - Number(downPayment) - Number(tradeIn);
    const monthlyInterestRate = (Number(interestRate) / 100) / 12;
    const totalPayments = Number(termMonths);

    const monthly =
      (loanAmount * monthlyInterestRate) /
      (1 - Math.pow(1 + monthlyInterestRate, -totalPayments));

    setMonthlyPayment(
      monthly.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
    );
  };

  const resetForm = () => {
    setPrice('');
    setInterestRate('');
    setDownPayment('');
    setTradeIn('');
    setTermMonths('');
    setMonthlyPayment(null);
    setError('');
  };

  return (
    <>
      <Navbar /> {/* Navbar at the top */}
      <div className="container financing-container">
        <h1 className="text-center page-title">Car Financing Calculator</h1>
        {error && <div className="alert alert-danger mt-3">{error}</div>}
        <form onSubmit={calculatePayment} className="mt-4">
          <div className="form-group">
            <label>Car Price ($)</label>
            <input
              type="number"
              className="form-control"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
              min="0"
              aria-label="Car Price"
            />
          </div>
          <div className="form-group">
            <label>Interest Rate (%)</label>
            <input
              type="number"
              step="0.01"
              className="form-control"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              required
              min="0"
              aria-label="Interest Rate"
            />
          </div>
          <div className="form-group">
            <label>Down Payment ($)</label>
            <input
              type="number"
              className="form-control"
              value={downPayment}
              onChange={(e) => setDownPayment(e.target.value)}
              min="0"
              aria-label="Down Payment"
            />
          </div>
          <div className="form-group">
            <label>Trade-In Value ($)</label>
            <input
              type="number"
              className="form-control"
              value={tradeIn}
              onChange={(e) => setTradeIn(e.target.value)}
              min="0"
              aria-label="Trade-In Value"
            />
          </div>
          <div className="form-group">
            <label>Term (Months)</label>
            <input
              type="number"
              className="form-control"
              value={termMonths}
              onChange={(e) => setTermMonths(e.target.value)}
              required
              min="1"
              aria-label="Term in Months"
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block">
            Calculate Monthly Payment
          </button>
          <button
            type="button"
            className="btn btn-secondary btn-block mt-2"
            onClick={resetForm}
          >
            Reset
          </button>
        </form>

        {monthlyPayment !== null && (
          <div className="mt-4">
            <div className="card result-card">
              <div className="card-body">
                <h5 className="card-title">Monthly Payment</h5>
                <p className="card-text result-value">${monthlyPayment}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Financing;
