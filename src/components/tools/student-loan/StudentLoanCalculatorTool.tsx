'use client';

import { useState } from 'react';

type CalculatorType = 'tuition' | 'tax' | 'insolvency';

export default function StudentLoanCalculatorTool() {
  const [activeTab, setActiveTab] = useState<CalculatorType>('tuition');

  // Tuition Loan Calculator State
  const [principal, setPrincipal] = useState(30000);
  const [interestRate, setInterestRate] = useState(5.0);
  const [loanTerm, setLoanTerm] = useState(10);
  const [monthlyPayment, setMonthlyPayment] = useState<number | null>(null);
  const [totalPaid, setTotalPaid] = useState<number | null>(null);
  const [totalInterest, setTotalInterest] = useState<number | null>(null);

  // Tax Bomb Calculator State
  const [forgivenAmount, setForgivenAmount] = useState(50000);
  const [taxRate, setTaxRate] = useState(22);
  const [taxBombAmount, setTaxBombAmount] = useState<number | null>(null);

  // 1099-C Insolvency Calculator State
  const [totalAssets, setTotalAssets] = useState(100000);
  const [totalLiabilities, setTotalLiabilities] = useState(150000);
  const [debtCanceled, setDebtCanceled] = useState(50000);
  const [insolvencyExclusion, setInsolvencyExclusion] = useState<number | null>(null);
  const [taxableAmount, setTaxableAmount] = useState<number | null>(null);

  const calculateTuitionLoan = () => {
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;
    const payment = principal * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
                    (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    const total = payment * numberOfPayments;
    const interest = total - principal;

    setMonthlyPayment(payment);
    setTotalPaid(total);
    setTotalInterest(interest);
  };

  const calculateTaxBomb = () => {
    const tax = forgivenAmount * (taxRate / 100);
    setTaxBombAmount(tax);
  };

  const calculateInsolvency = () => {
    const insolvencyAmount = Math.max(0, totalLiabilities - totalAssets);
    const exclusion = Math.min(insolvencyAmount, debtCanceled);
    const taxable = debtCanceled - exclusion;
    setInsolvencyExclusion(exclusion);
    setTaxableAmount(taxable);
  };

  return (
    <div className="space-y-8">
      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-2 border-b border-[#E3E6F0]">
        {[
          { id: 'tuition', label: 'Tuition Loan Calculator' },
          { id: 'tax', label: 'Student Loan Tax Bomb Calculator' },
          { id: 'insolvency', label: '1099-C Insolvency Calculator' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as CalculatorType)}
            className={`px-6 py-3 font-bold rounded-t-xl transition-all ${
              activeTab === tab.id
                ? 'bg-[#5865F2] text-white shadow-lg shadow-[#5865F2]/20'
                : 'text-[#5b6282] hover:bg-[#F8F9FF]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tuition Loan Calculator */}
      {activeTab === 'tuition' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label className="font-bold text-[#1a1d2e]">Loan Principal ($)</label>
              <input
                type="number"
                value={principal}
                onChange={(e) => setPrincipal(Number(e.target.value))}
                className="w-full p-3 border-2 border-[#E3E6F0] rounded-xl focus:border-[#5865F2] outline-none"
              />
            </div>
            <div className="space-y-2">
              <label className="font-bold text-[#1a1d2e]">Interest Rate (%)</label>
              <input
                type="number"
                step="0.1"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full p-3 border-2 border-[#E3E6F0] rounded-xl focus:border-[#5865F2] outline-none"
              />
            </div>
            <div className="space-y-2">
              <label className="font-bold text-[#1a1d2e]">Loan Term (Years)</label>
              <input
                type="number"
                value={loanTerm}
                onChange={(e) => setLoanTerm(Number(e.target.value))}
                className="w-full p-3 border-2 border-[#E3E6F0] rounded-xl focus:border-[#5865F2] outline-none"
              />
            </div>
          </div>
          <button
            onClick={calculateTuitionLoan}
            className="w-full md:w-auto px-8 py-3 bg-[#5865F2] text-white font-bold rounded-xl hover:bg-[#4752C4] transition-all shadow-lg shadow-[#5865F2]/20"
          >
            Calculate Tuition Loan
          </button>

          {monthlyPayment !== null && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-[#F8F9FF] p-6 rounded-xl border border-[#5865F2]/20 text-center">
                <h3 className="text-lg font-bold text-[#1a1d2e] mb-2">Monthly Payment</h3>
                <p className="text-3xl font-extrabold text-[#5865F2]">
                  ${monthlyPayment.toFixed(2)}
                </p>
              </div>
              <div className="bg-[#F8F9FF] p-6 rounded-xl border border-[#5865F2]/20 text-center">
                <h3 className="text-lg font-bold text-[#1a1d2e] mb-2">Total Paid</h3>
                <p className="text-3xl font-extrabold text-[#1a1d2e]">
                  ${totalPaid!.toFixed(2)}
                </p>
              </div>
              <div className="bg-[#F8F9FF] p-6 rounded-xl border border-[#5865F2]/20 text-center">
                <h3 className="text-lg font-bold text-[#1a1d2e] mb-2">Total Interest</h3>
                <p className="text-3xl font-extrabold text-[#ef4444]">
                  ${totalInterest!.toFixed(2)}
                </p>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Tax Bomb Calculator */}
      {activeTab === 'tax' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="font-bold text-[#1a1d2e]">Forgiven Amount ($)</label>
              <input
                type="number"
                value={forgivenAmount}
                onChange={(e) => setForgivenAmount(Number(e.target.value))}
                className="w-full p-3 border-2 border-[#E3E6F0] rounded-xl focus:border-[#5865F2] outline-none"
              />
            </div>
            <div className="space-y-2">
              <label className="font-bold text-[#1a1d2e]">Effective Tax Rate (%)</label>
              <input
                type="number"
                step="0.1"
                value={taxRate}
                onChange={(e) => setTaxRate(Number(e.target.value))}
                className="w-full p-3 border-2 border-[#E3E6F0] rounded-xl focus:border-[#5865F2] outline-none"
              />
            </div>
          </div>
          <button
            onClick={calculateTaxBomb}
            className="w-full md:w-auto px-8 py-3 bg-[#5865F2] text-white font-bold rounded-xl hover:bg-[#4752C4] transition-all shadow-lg shadow-[#5865F2]/20"
          >
            Calculate Tax Bomb
          </button>

          {taxBombAmount !== null && (
            <div className="mt-8 bg-[#F8F9FF] p-8 rounded-xl border-2 border-[#5865F2] text-center">
              <h3 className="text-xl font-bold text-[#1a1d2e] mb-3">Estimated Student Loan Tax Bomb</h3>
              <p className="text-4xl font-extrabold text-[#ef4444]">
                ${taxBombAmount.toFixed(2)}
              </p>
            </div>
          )}
        </div>
      )}

      {/* Insolvency Calculator */}
      {activeTab === 'insolvency' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label className="font-bold text-[#1a1d2e]">Total Assets ($)</label>
              <input
                type="number"
                value={totalAssets}
                onChange={(e) => setTotalAssets(Number(e.target.value))}
                className="w-full p-3 border-2 border-[#E3E6F0] rounded-xl focus:border-[#5865F2] outline-none"
              />
            </div>
            <div className="space-y-2">
              <label className="font-bold text-[#1a1d2e]">Total Liabilities ($)</label>
              <input
                type="number"
                value={totalLiabilities}
                onChange={(e) => setTotalLiabilities(Number(e.target.value))}
                className="w-full p-3 border-2 border-[#E3E6F0] rounded-xl focus:border-[#5865F2] outline-none"
              />
            </div>
            <div className="space-y-2">
              <label className="font-bold text-[#1a1d2e]">Canceled Debt ($)</label>
              <input
                type="number"
                value={debtCanceled}
                onChange={(e) => setDebtCanceled(Number(e.target.value))}
                className="w-full p-3 border-2 border-[#E3E6F0] rounded-xl focus:border-[#5865F2] outline-none"
              />
            </div>
          </div>
          <button
            onClick={calculateInsolvency}
            className="w-full md:w-auto px-8 py-3 bg-[#5865F2] text-white font-bold rounded-xl hover:bg-[#4752C4] transition-all shadow-lg shadow-[#5865F2]/20"
          >
            Calculate Insolvency Exclusion
          </button>

          {insolvencyExclusion !== null && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-[#F8F9FF] p-6 rounded-xl border border-[#5865F2]/20 text-center">
                <h3 className="text-lg font-bold text-[#1a1d2e] mb-2">Insolvency Exclusion</h3>
                <p className="text-3xl font-extrabold text-[#10b981]">
                  ${insolvencyExclusion.toFixed(2)}
                </p>
              </div>
              <div className="bg-[#F8F9FF] p-6 rounded-xl border border-[#5865F2]/20 text-center">
                <h3 className="text-lg font-bold text-[#1a1d2e] mb-2">Taxable Amount</h3>
                <p className="text-3xl font-extrabold text-[#ef4444]">
                  ${taxableAmount!.toFixed(2)}
                </p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
